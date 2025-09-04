const express = require("express");
const billRoutes = require("./routes/billRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(billRoutes);
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
