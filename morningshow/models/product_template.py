import requests
import json
from odoo import models
from odoo.exceptions import UserError
import base64

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    def action_send_to_morningshow(self):
        self.ensure_one()
        # Read from system settings
        url = self.env['ir.config_parameter'].sudo().get_param('morningshow.api_url')
        api_token = self.env['ir.config_parameter'].sudo().get_param('morningshow.api_token')
        if not url or not api_token:
            raise UserError("Morningshow API URL and Token must be set in settings.")
        url = url + "/api/products"
        payload = {
            "title": self.name,
            "text": self.description_sale or "",
            "image": self.image_1920.decode('utf-8') if self.image_1920 else "",
        }
        headers = {
            'Content-Type': 'application/json',
            'x-api-token': api_token
        }
        try:
            response = requests.post(url, data=json.dumps(payload), headers=headers, timeout=10)
            if response.status_code == 200:
                return {
                    'type': 'ir.actions.client',
                    'tag': 'display_notification',
                    'params': {
                        'title': 'Success',
                        'message': 'Your record has been uploaded successfully!',
                        'type': 'success',
                        'sticky': False,
                        'next': {
                            'type': 'ir.actions.act_window_close'
                        },
                    }
                }
            else:
                raise UserError(f"Failed to sync. Status: {response.status_code}")
        except Exception as e:
            raise UserError(f"Connection Error: {str(e)}")