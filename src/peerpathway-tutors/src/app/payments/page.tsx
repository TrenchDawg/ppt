import React from 'react';

const PaymentsPage = () => {
    const hourlyRate = 45; // Displayed hourly rate
    const tutorPayRange = "$30–$35"; // Tutor payment range
    const stripeLinks = {
        single: process.env.NEXT_PUBLIC_STRIPE_SINGLE || "#",
        fivePack: process.env.NEXT_PUBLIC_STRIPE_FIVEPACK || "#",
        tenPack: process.env.NEXT_PUBLIC_STRIPE_TENPACK || "#",
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Pricing</h1>
            <p className="mb-2">Hourly Rate: <strong>${hourlyRate}/hr</strong></p>
            <p className="mb-4">Tutors are paid between <strong>{tutorPayRange}</strong> per hour.</p>
            <div className="flex flex-col space-y-2">
                <a href={stripeLinks.single} className="btn">Purchase Single Session</a>
                <a href={stripeLinks.fivePack} className="btn">Purchase 5-Pack</a>
                <a href={stripeLinks.tenPack} className="btn">Purchase 10-Pack</a>
            </div>
        </div>
    );
};

export default PaymentsPage;