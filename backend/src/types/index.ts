export interface VisaApplicationData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	nationality: string;
	passportNumber: string;
	passportExpiry: string;
	arrivalDate: string;
	departureDate: string;
	purpose: "tourism" | "business" | "transit";
	status?: "PENDING" | "APPROVED" | "REJECTED";
	id?: string;
}

export interface PaymentDetails {
	cardNumber: string;
	expiryDate: string;
	cvv: string;
	cardHolderName: string;
}
