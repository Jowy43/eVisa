export interface VisaApplicationData {
	// Step 1: Personal Info
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	nationality: string;

	// Step 2: Passport Details
	passportNumber: string;
	passportExpiry: string;
	passportImage?: File | null;

	// Step 3: Travel Details
	arrivalDate: string;
	departureDate: string;
	purpose: "tourism" | "business" | "transit";
}

export interface PaymentDetails {
	cardNumber: string;
	expiryDate: string;
	cvv: string;
	cardHolderName: string;
}
