from odoo import models, fields, api

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    morningshow_url = fields.Char(string="Morningshow API URL", config_parameter="morningshow.api_url")
    morningshow_api_token = fields.Char(string="Morningshow API Token", config_parameter="morningshow.api_token")
