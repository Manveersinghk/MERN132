import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for glossiness
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-primary py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Area */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                            JB
                        </div>
                        <span className="text-white font-serif font-bold text-2xl tracking-wide group-hover:text-secondary-light transition-colors">
                            James Brown LS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-300 relative group py-2 ${isActive(link.path)
                                        ? 'text-secondary-light'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Simple Placeholder for now) */}
                    <div className="md:hidden">
                        <button className="text-white hover:text-accent transition p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
