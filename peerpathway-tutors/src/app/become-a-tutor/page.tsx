import React, { useState } from 'react';

const BecomeATutorPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        experience: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmissionStatus('Application submitted successfully!');
            setFormData({ name: '', email: '', subject: '', experience: '' });
        } else {
            setSubmissionStatus('There was an error submitting your application.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Become a Tutor</h1>
            <p className="mb-4">Fill out the form below to apply to become a tutor.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="experience">Experience</label>
                    <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit Application</button>
            </form>
            {submissionStatus && <p className="mt-4">{submissionStatus}</p>}
        </div>
    );
};

export default BecomeATutorPage;