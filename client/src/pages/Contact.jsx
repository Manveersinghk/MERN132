import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [focused, setFocused] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field) => setFocused(field);
    const handleBlur = () => setFocused('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Contact Info Side */}
                <div className="bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-secondary rounded-full blur-[50px] opacity-20 transform translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent rounded-full blur-[50px] opacity-20 transform -translate-x-10 translate-y-10"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
                        <p className="text-blue-200 mb-8">
                            Have questions about our products or partnership opportunities? We'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <svg className="w-6 h-6 text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-blue-200">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <svg className="w-6 h-6 text-secondary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-blue-200">contact@jamesbrownls.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12">
                        <p className="text-sm text-blue-300">© 2025 James Brown Life Sciences</p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-10">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-600 mb-8">We'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setStatus('')}
                                className="text-secondary font-bold hover:text-secondary-dark transition"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'name' ? 'text-secondary' : 'text-gray-700'} mb-1`}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('name')}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'email' ? 'text-secondary' : 'text-gray-700'} mb-1`}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('email')}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'message' ? 'text-secondary' : 'text-gray-700'} mb-1`}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('message')}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-light transition duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-500 text-center text-sm">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
