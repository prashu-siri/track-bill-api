const db = require("../db");

/**
 * Creates a new bill entry in the database.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
exports.createBill = async (req, res) => {
	const { date, status, type, amount } = req.body;
	try {
		const result = await db.query(
			"INSERT INTO bills (date, status, type, amount) VALUES ($1, $2, $3, $4) RETURNING *",
			[date, status, type, amount]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		console.error("Error creating bill:", error);
		res.status(500).json({ error: "Failed to create bill" });
	}
};

/**
 * Retrieves a single bill by its ID.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
exports.getBill = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await db.query("SELECT * FROM bills WHERE id = $1", [
			id,
		]);
		if (result.rows.length === 0) {
			return res.status(404).json({ error: "Bill not found" });
		}
		res.status(200).json(result.rows[0]);
	} catch (error) {
		console.error("Error fetching bill:", error);
		res.status(500).json({ error: "Failed to fetch bill" });
	}
};

/**
 * Retrieves all bills from the database.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
exports.getAllBills = async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM bills");
		res.status(200).json(result.rows);
	} catch (error) {
		console.error("Error fetching all bills:", error);
		res.status(500).json({ error: "Failed to fetch bills" });
	}
};

/**
 * Updates an existing bill by its ID.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
exports.updateBill = async (req, res) => {
	const { id } = req.params;
	const { date, status, type, amount } = req.body;
	try {
		const result = await db.query(
			"UPDATE bills SET date = $1, status = $2, type = $3, amount = $4 WHERE id = $5 RETURNING *",
			[date, status, type, amount, id]
		);
		if (result.rows.length === 0) {
			return res.status(404).json({ error: "Bill not found" });
		}
		res.status(200).json(result.rows[0]);
	} catch (error) {
		console.error("Error updating bill:", error);
		res.status(500).json({ error: "Failed to update bill" });
	}
};

/**
 * Deletes a bill by its ID.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
exports.deleteBill = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await db.query(
			"DELETE FROM bills WHERE id = $1 RETURNING *",
			[id]
		);
		if (result.rows.length === 0) {
			return res.status(404).json({ error: "Bill not found" });
		}
		res.status(200).json({ message: "Bill deleted successfully" });
	} catch (error) {
		console.error("Error deleting bill:", error);
		res.status(500).json({ error: "Failed to delete bill" });
	}
};
