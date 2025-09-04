const express = require('express');
const BillController = require('../controllers/billController');

const router = express.Router();
const billController = new BillController();

router.post('/api/bills', billController.createBill.bind(billController));
router.get('/api/bills/:id', billController.getBill.bind(billController));
router.get('/api/bills', billController.getAllBills.bind(billController));

module.exports = router;