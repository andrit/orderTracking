const express = require('express');
var router = express.Router();

var invoice_lookup_controller = require('../controllers/invoiceLookupController');

//POST Invoice Lookup request
router.post('/invoicelookuprequest', invoice_lookup_controller.submit_invoice_number);

module.exports = router;