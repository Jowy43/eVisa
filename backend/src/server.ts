import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import visaRoutes from "./routes/visa";
import paymentRoutes from "./routes/payment";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware
app.use(helmet());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per windowMs
	message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/api/visa", visaRoutes);
app.use("/api/payment", paymentRoutes);

// Health Check
app.get("/health", (req, res) => {
	res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Start Server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
