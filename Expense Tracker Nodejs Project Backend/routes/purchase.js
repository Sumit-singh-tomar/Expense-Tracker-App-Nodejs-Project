const express = require('express')
const router = express.Router()
const authentication = require('../middleware/auth')
const purchaseController = require('../Controllers/purchase')

router.get('/buy-premium', authentication, purchaseController.purchase)

module.exports = router;