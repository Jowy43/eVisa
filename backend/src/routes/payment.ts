import { Router, Request, Response } from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

if (!process.env.STRIPE_SECRET_KEY) {
	console.error(
		"❌ FATAL ERROR: STRIPE_SECRET_KEY is missing in environment variables.",
	);
	// We don't throw here to allow the server to start (for other routes),
	// but this route will fail if called.
}

const stripe = new Stripe(
	process.env.STRIPE_SECRET_KEY || "dummy_key_to_prevent_crash_on_startup",
	{
		apiVersion: "2026-01-28.clover",
	},
);

router.post("/create-payment-intent", async (req: Request, res: Response) => {
	try {
		const { amount, currency = "usd" } = req.body;

		const paymentIntent = await stripe.paymentIntents.create({
			amount: Math.round(amount * 100), // Stripe expects amount in cents
			currency,
			automatic_payment_methods: {
				enabled: true,
			},
		});

		res.json({ clientSecret: paymentIntent.client_secret });
	} catch (error: any) {
		console.error("Stripe Error:", error);
		res.status(500).json({ error: error.message });
	}
});

export default router;
