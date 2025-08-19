import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
            <p className="mb-4">
                At PeerPathway Tutors, we strive to provide the best tutoring experience possible. If you are not satisfied with your tutoring session, please reach out to us within 7 days of the session for a potential refund.
            </p>
            <h2 className="text-xl font-semibold mb-2">Eligibility for Refunds</h2>
            <p className="mb-4">
                Refunds may be issued under the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Session was canceled by the tutor without rescheduling.</li>
                <li>Session did not meet the agreed-upon standards of quality.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">How to Request a Refund</h2>
            <p className="mb-4">
                To request a refund, please contact our support team at <a href="mailto:ops@example.com" className="text-blue-500">ops@example.com</a> with your session details and reason for the refund request.
            </p>
            <h2 className="text-xl font-semibold mb-2">Processing Time</h2>
            <p className="mb-4">
                Refund requests will be processed within 5-7 business days. You will receive a confirmation email once your request has been processed.
            </p>
            <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
            <p>
                We may update our refund policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
        </div>
    );
};

export default RefundPolicy;