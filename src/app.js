const express = require("express");
const billRoutes = require("./routes/billRoutes");

const app = express();

app.use(express.json());
app.use(billRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
