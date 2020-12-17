# -*- coding: utf-8 -*-
# Copyright (c) 2020, Jobin and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class energy(Document):
	pass

@frappe.whitelist()
def ping1(doctype, data={}):
	for key in data:
        doc = frappe.get_doc({
			'doctype': doctype,
			'app': data[key][0],
			'com': data[key][1],
			'mod': data[key][2],
			'watts': data[key][3]
		})
        doc.insert(ignore_permissions=True, ignore_if_duplicate=True, ignore_mandatory=True)
	return
