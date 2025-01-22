from odoo import http
from odoo.http import request


class Training(http.Controller):

    @http.route("/contacts", type="http", auth="public", website=True)
    def contacts(self):
        return request.render('training.contact_template')

    @http.route('/get/data/contacts', type='json', auth="public", website=True)
    def get_data_contacts(self):
        data = request.env['res.partner'].search_read([], fields=['id', 'name'])
        return  data

    @http.route('/unlink/data/contacts', type='json', auth="public", website=True)
    def unlink_data_contacts(self, **post):
        request.env['res.partner'].browse(int(post.get('contact_id'))).unlink()
        return True