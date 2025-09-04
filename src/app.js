const express = require('express');
const dotenv = require('dotenv');
const db = require('./db/index');
const billRoutes = require('./routes/billRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
db();

// Routes
app.use('/api/bills', billRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});