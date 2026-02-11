import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            id: 1,
            title: "Molecular Biology Kits",
            description: "Complete solutions for DNA/RNA extraction, PCR, and cloning. Our kits are optimized for high yield and purity.",
            category: "Reagents",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            )
        },
        {
            id: 2,
            title: "Cell Culture Media",
            description: "High-quality media and reagents for optimal cell growth and maintenance. Supports a wide range of cell lines.",
            category: "Consumables",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            )
        },
        {
            id: 3,
            title: "Lab Equipment",
            description: "Reliable centrifuges, pipettes, and incubators for daily lab operations. Engineered for precision and durability.",
            category: "Equipment",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            )
        },
        {
            id: 4,
            title: "Diagnostic Reagents",
            description: "Precision reagents for clinical and research diagnostic applications. Consistent lot-to-lot performance.",
            category: "Diagnostics",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block animate-fade-in-up">Portfolio</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 animate-fade-in-up delay-100">Our Products & Services</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Explore our comprehensive range of life science solutions designed to accelerate your research and clinical workflows.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group transform hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100 + 300}ms` }}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {product.icon}
                                </div>
                                <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {product.category}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{product.title}</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center text-secondary font-bold hover:text-secondary-dark transition group/link"
                            >
                                Request Quote
                                <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl animate-fade-in-up delay-700">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-20 transform translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-20 transform -translate-x-20 translate-y-20"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">Need a Custom Solution?</h2>
                        <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
                            We specialize in tailoring our products to meet specific research requirements.
                            Contact our technical team to discuss your needs.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-accent/50 transform hover:-translate-y-1 transition duration-300"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
