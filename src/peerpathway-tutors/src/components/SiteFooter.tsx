import React from 'react';

const SiteFooter: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">© {new Date().getFullYear()} PeerPathway Tutors. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="/policies/terms" className="hover:underline">Terms of Service</a>
                    <a href="/policies/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/policies/consent" className="hover:underline">Consent</a>
                    <a href="/policies/refund" className="hover:underline">Refund Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;