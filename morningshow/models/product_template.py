import requests
import json
from odoo import models
from odoo.exceptions import UserError
import base64

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    def action_send_to_morningshow(self):
        self.ensure_one()
        # Your Morningshow API URL
        url = "http://localhost:3000/api/products"
        # Data to send
        payload = {
            "title": self.name,
            "text": self.description_sale or "",
            "image": self.image_1920.decode('utf-8') if self.image_1920 else "",
        }
        headers = {
            'Content-Type': 'application/json',
            'x-api-token': 'sync-token-123'
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
                        'type': 'success',  # options: 'success', 'warning', 'danger', 'info'
                        'sticky': False,    # True means the user must click 'X' to close it
                        'next': {           # Optional: what to do after the notification
                            'type': 'ir.actions.act_window_close'
                        },
                    }
                }
            else:
                raise UserError(f"Failed to sync. Status: {response.status_code}")
        except Exception as e:
            raise UserError(f"Connection Error: {str(e)}")