const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-primary py-24 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-secondary/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up">About Us</h1>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto font-light animate-fade-in-up delay-100">
                        Dedicated to advancing scientific discovery through innovation, quality, and reliability.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 animate-fade-in-up delay-200">
                        <div className="w-16 h-16 bg-blue-100 text-secondary rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To accelerate scientific discovery by providing innovative, high-quality, and accessible life science solutions to researchers everywhere. We strive to be the catalyst that turns questions into answers and hypothesis into cure.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 animate-fade-in-up delay-300">
                        <div className="w-16 h-16 bg-amber-100 text-accent rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We envision a world where scientific challenges are met with swift, effective solutions. A future where our tools and technologies play a pivotal role in improved health outcomes and a deeper understanding of the biological world.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="text-center mb-16 animate-fade-in-up delay-400">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-12">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Excellence', 'Integrity', 'Innovation', 'Collaboration'].map((value, idx) => (
                            <div key={value} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                                <h3 className="text-lg font-bold text-primary mb-2">{value}</h3>
                                <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats or Trust Section */}
                <div className="bg-primary/5 rounded-3xl p-12 text-center animate-fade-in-up delay-500">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-8">Trusted by Researchers Worldwide</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                            <div className="text-gray-600 font-medium">Labs Supplied</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                            <div className="text-gray-600 font-medium">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                            <div className="text-gray-600 font-medium">Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                            <div className="text-gray-600 font-medium">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
