# -*- coding: utf-8 -*-
# Copyright (c) 2020, Jobin and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class tharif(Document):
        pass
        
@frappe.whitelist()
def ping1(doctype,app_name,com_name,mod_name):
        app=app_name.strip('][').split(',')
        com=com_name.strip('][').split(',')
        mod=mod_name.strip('][').split(',')

        doc = frappe.get_doc({
                'doctype':'energy',
                'title':'a'
                })
        doc.insert(
                ignore_permissions=True,
                ignore_links=True,
                ignore_if_duplicate=True,
                ignore_mandatory=True,
                app="hai"
                )
        doc.save(
                ignore_permissions=True,
                ignore_version=True
                )
                
        for i in com:
                app.append(i)
        for i in mod:
               app.append(i)
        return app;       

	
