import { useState } from 'react';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        resumeLink: '',
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
            const response = await fetch('http://localhost:5000/api/careers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '', resumeLink: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Careers</span>
                    <h1 className="text-4xl font-serif font-bold text-primary mb-4">Join Our Innovation Team</h1>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        We're looking for passionate minds to help us shape the future of life sciences.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-primary px-8 py-6 border-b border-primary-light">
                        <h2 className="text-xl font-bold text-white">Application Form</h2>
                        <p className="text-blue-200 text-sm">Please fill out all required fields</p>
                    </div>

                    <div className="p-8 md:p-12">
                        {status === 'success' ? (
                            <div className="text-center py-12 animate-fade-in-up">
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                                <p className="text-gray-600 mb-8">Thank you for your interest. We'll review your application and get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('')}
                                    className="text-secondary font-bold hover:text-secondary-dark transition"
                                >
                                    Submit another application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'name' ? 'text-secondary' : 'text-gray-700'} mb-2`}>
                                            Full Name *
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
                                        <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'email' ? 'text-secondary' : 'text-gray-700'} mb-2`}>
                                            Email Address *
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
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'resumeLink' ? 'text-secondary' : 'text-gray-700'} mb-2`}>
                                        Resume / LinkedIn URL
                                    </label>
                                    <input
                                        type="url"
                                        name="resumeLink"
                                        value={formData.resumeLink}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('resumeLink')}
                                        onBlur={handleBlur}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                                        placeholder="https://linkedin.com/in/johndoe"
                                    />
                                    <p className="mt-1 text-xs text-gray-400">Please provide a link to your resume or LinkedIn profile.</p>
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium transition-colors duration-300 ${focused === 'message' ? 'text-secondary' : 'text-gray-700'} mb-2`}>
                                        Cover Letter / Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={handleBlur}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                                        placeholder="Tell us why you'd be a great fit..."
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-secondary-dark transition duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        {status === 'sending' ? 'Submitting Application...' : 'Submit Application'}
                                    </button>
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-500 text-center text-sm">
                                        Something went wrong. Please try again later.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
