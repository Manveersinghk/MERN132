const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12 mt-auto border-t border-primary-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-tr from-secondary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                JB
                            </div>
                            <h3 className="text-xl font-serif font-bold tracking-wide">James Brown LS</h3>
                        </div>
                        <p className="text-blue-200 text-sm max-w-sm leading-relaxed">
                            Advancing scientific research with premium quality reagents, equipment, and tailored solutions for labs worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-blue-200">
                            <li><a href="/" className="hover:text-secondary transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="/products" className="hover:text-secondary transition-colors">Products</a></li>
                            <li><a href="/careers" className="hover:text-secondary transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
                        <ul className="space-y-2 text-sm text-blue-200">
                            <li className="flex items-center">
                                <span className="mr-2">📧</span> contact@jamesbrownls.com
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📞</span> +1 (555) 123-4567
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📍</span> 123 Science Park, CA
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-opacity-70">
                    <p className="text-xs text-blue-300">
                        &copy; {new Date().getFullYear()} James Brown Life Sciences. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-blue-300 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
