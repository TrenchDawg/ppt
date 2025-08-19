import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('Error sending message. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
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
                <div className="mb-4">
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
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border rounded p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Send</button>
            </form>
            {status && <p className="mt-4">{status}</p>}
        </div>
    );
};

export default ContactPage;