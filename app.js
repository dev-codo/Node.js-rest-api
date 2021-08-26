require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // parse to JSON

mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database connected!");
	})
	.catch((err) => console.log("Database not connected: " + err));

// import route
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

// Route
app.get("/", (req, res) => {
	res.send("Home route");
});

// Listen to port
app.listen(process.env.DB_PORT);
