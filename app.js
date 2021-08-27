import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoute from "./routes/posts.js";
import "dotenv/config";

const app = express();
const { connect } = mongoose;

// Middlewares
app.use(cors());
app.use(json()); // parse to JSON
app.use("/posts", postRoute);

connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => {
		console.log("Database connected!");
	})
	.catch((err) => console.log("Database not connected: " + err));

// Route
app.get("/", (req, res) => {
	res.send("Home route");
});

// Listen to port
app.listen(process.env.DB_PORT);
