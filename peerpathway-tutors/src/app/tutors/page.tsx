import React from 'react';
import TutorCard from '@/components/TutorCard';
import { tutors } from '@/data/tutors';

const TutorsPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Our Tutors</h1>
            <div className="flex flex-wrap mb-4">
                {/* Subject chips (non-functional) */}
                <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2">Math</span>
                <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full mr-2">Science</span>
                <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full mr-2">English</span>
                <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">History</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tutors.map(tutor => (
                    <TutorCard key={tutor.slug} tutor={tutor} />
                ))}
            </div>
        </div>
    );
};

export default TutorsPage;