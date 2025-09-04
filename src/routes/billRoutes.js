const express = require('express');
const billController = require("../controllers/billController"); // <-- change here

const router = express.Router();

router.post("/api/bills", billController.createBill);
router.get("/api/bills/:id", billController.getBill);
router.get("/api/bills", billController.getAllBills);
router.put("/api/bills/:id", billController.updateBill);
router.delete("/api/bills/:id", billController.deleteBill);

module.exports = router;