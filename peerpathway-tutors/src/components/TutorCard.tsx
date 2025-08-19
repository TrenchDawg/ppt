import React from 'react';

interface Tutor {
    name: string;
    subject: string;
    bio: string;
    calendlyUrl?: string;
}

const TutorCard: React.FC<{ tutor: Tutor }> = ({ tutor }) => {
    return (
        <div className="rounded-2xl shadow-sm border p-4">
            <h2 className="text-xl font-bold">{tutor.name}</h2>
            <p className="text-gray-700">{tutor.subject}</p>
            <p className="text-gray-500">{tutor.bio}</p>
            {tutor.calendlyUrl && (
                <a href={tutor.calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Schedule a session
                </a>
            )}
        </div>
    );
};

export default TutorCard;