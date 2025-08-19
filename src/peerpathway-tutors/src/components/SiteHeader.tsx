import React from 'react';
import Link from 'next/link';

const SiteHeader: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link href="/">PeerPathway Tutors</Link>
                </h1>
                <nav className="space-x-4">
                    <Link href="/tutors" className="text-gray-700 hover:text-blue-500">Tutors</Link>
                    <Link href="/payments" className="text-gray-700 hover:text-blue-500">Payments</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
                    <Link href="/become-a-tutor" className="text-gray-700 hover:text-blue-500">Become a Tutor</Link>
                    <Link href="/policies/terms" className="text-gray-700 hover:text-blue-500">Terms</Link>
                    <Link href="/policies/privacy" className="text-gray-700 hover:text-blue-500">Privacy</Link>
                    <Link href="/policies/consent" className="text-gray-700 hover:text-blue-500">Consent</Link>
                    <Link href="/policies/refund" className="text-gray-700 hover:text-blue-500">Refund</Link>
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;