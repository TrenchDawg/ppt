import React from 'react';

interface SchedulerEmbedProps {
    calendlyUrl?: string;
}

const SchedulerEmbed: React.FC<SchedulerEmbedProps> = ({ calendlyUrl }) => {
    if (!calendlyUrl) {
        return null;
    }

    return (
        <div className="w-full h-full">
            <iframe
                src={calendlyUrl}
                width="100%"
                height="600"
                frameBorder="0"
                title="Scheduler"
                className="rounded-2xl shadow-sm"
            />
        </div>
    );
};

export default SchedulerEmbed;