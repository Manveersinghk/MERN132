import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight animate-fade-in-up">
                        Advancing Science for a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-white">
                            Healthier World
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        James Brown Life Sciences delivers cutting-edge tools and solutions to empower researchers and clinicians globally.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
                        <Link
                            to="/products"
                            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-accent/50 transform hover:-translate-y-1 transition duration-300"
                        >
                            Explore Solutions
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <ImageGallery />

            {/* Overview Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Mission</span>
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Pioneering Future Discoveries</h2>
                        <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            We are a dedicated team of scientists and innovators committed to delivering
                            high-quality products that accelerate research and improve clinical outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition duration-300 group">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
                            <p className="text-gray-600">Constantly pushing boundaries to bring new technologies.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition duration-300 group">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
                            <p className="text-gray-600">Rigorous testing standards ensuring reliable results.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-secondary/20 transition duration-300 group">
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 group-hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Global Reach</h3>
                            <p className="text-gray-600">Supporting scientific communities across the globe.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
