const express = require('express')
const router = express.Router()
const expenseController = require('../Controllers/expense')

router.post('/add-expense', expenseController.addExpense)

router.get('/get-expense', expenseController.getExpense)

module.exports = router;