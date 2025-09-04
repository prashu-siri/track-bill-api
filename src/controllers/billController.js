const db = require("../db");

exports.createBill = async (req, res) => {
	const { date, status, type, amount } = req.body;
	try {
		const result = await db.query(
			"INSERT INTO bills (date, status, type, amount) VALUES ($1, $2, $3, $4) RETURNING *",
			[date, status, type, amount]
		);
		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: "Failed to create bill" });
	}
};

// Example stubs for other handlers:
exports.getBill = async (req, res) => {
	// Implementation here
	res.status(501).json({ error: "Not implemented" });
};
