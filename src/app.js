const express = require("express");
const billRoutes = require("./routes/billRoutes");
const cors = require("cors");

const app = express();

const corsOptions = {
	origin: "https://track-bill-ui.onrender.com",
	optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(billRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
