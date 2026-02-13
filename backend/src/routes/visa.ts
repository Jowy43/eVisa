import { Router, Request, Response } from "express";
import { VisaApplicationData } from "../types";

const router = Router();

// In-memory storage for demo purposes
const applications: VisaApplicationData[] = [];

router.post("/apply", (req: Request, res: Response) => {
	const application: VisaApplicationData = {
		...req.body,
		id: `APP-${Date.now()}`,
		status: "PENDING",
	};

	applications.push(application);
	res.status(201).json(application);
});

router.get("/applications", (req: Request, res: Response) => {
	res.json(applications);
});

export default router;
