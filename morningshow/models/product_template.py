import requests
import json
from odoo import models
from odoo.exceptions import UserError

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    def action_send_to_morningshow(self):
        # Your Morningshow API URL
        url = "http://localhost:3000/api/products"
        # Data to send
        payload = {
            "title": self.name,
            "text": self.description_sale or "",
        }
        headers = {
            'Content-Type': 'application/json',
            'x-sync-token': 'sync-token-123'
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