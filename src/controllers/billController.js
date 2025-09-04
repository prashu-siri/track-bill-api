class BillController {
    constructor(db) {
        this.db = db;
    }

    async createBill(req, res) {
        const { date, status, amount, type } = req.body;
        try {
            const result = await this.db.query(
                'INSERT INTO bills (date, status, amount, type) VALUES ($1, $2, $3, $4) RETURNING *',
                [date, status, amount, type]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create bill' });
        }
    }

    async getBill(req, res) {
        const { id } = req.params;
        try {
            const result = await this.db.query('SELECT * FROM bills WHERE id = $1', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Bill not found' });
            }
            res.status(200).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch bill' });
        }
    }

    async getAllBills(req, res) {
        try {
            const result = await this.db.query('SELECT * FROM bills');
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch bills' });
        }
    }
}

export default BillController;