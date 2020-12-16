# -*- coding: utf-8 -*-
# Copyright (c) 2020, Jobin and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class energy(Document):
        def ener():
            return "haloiii"
                
	
@frappe.whitelist()
def ping1(doctype,app_name,com_name,mod_name,wat_name):
        app=app_name.strip('][').split(',')
        com=com_name.strip('][').split(',')
        mod=mod_name.strip('][').split(',')
        wat=wat_name.strip('][').split(',')
        count=len(app)
        for i in range(count):
                doc = frappe.get_doc({
                        'doctype':'energy',
                         'app':app[i],
                         'com':com[i],
                         'mod':mod[i],
                         'watts':wat[i]
                        })
                doc.insert(
                        ignore_permissions=True,
                        ignore_links=True,
                        ignore_if_duplicate=True,
                        ignore_mandatory=True
                        )
        return 1;  

             

