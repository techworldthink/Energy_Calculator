# -*- coding: utf-8 -*-
# Copyright (c) 2020, Jobin and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import json

class energy(Document):
	pass

@frappe.whitelist(allow_guest=True)
def ping1(doctype,data):
    dic = json.loads(data)   
    for key in dic:
        doc = frappe.get_doc({
                'doctype': doctype,
                'app': dic[key][0],
                'com': dic[key][1],
                'mod': dic[key][2],
                'watts': dic[key][3]
                })
        doc.insert(
                ignore_permissions=True,
                ignore_if_duplicate=True,
                ignore_mandatory=True
                )
    return 1

