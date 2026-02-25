import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#050510]/80 backdrop-blur-md border-b border-[#D91278]/20 py-4 shadow-lg shadow-[#155196]/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3"
                >
                    {/* We'll use the user provided logo here. It should be in public/logo.png */}
                    <div className="bg-white rounded p-1 w-36 sm:w-48 overflow-hidden flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="Wisdom Design College Logo"
                            className="w-full h-auto object-contain"
                            onError={(e) => {
                                // fallback if logo.png is not found
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "https://via.placeholder.com/200x60/ffffff/000000?text=WISDOM+COLLEGE";
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:flex items-center gap-8 text-sm font-medium"
                >
                    <a
                        href="#courses"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hover:text-[#F6B221] transition-colors relative group">
                        Courses
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F6B221] transition-all group-hover:w-full"></span>
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hover:text-[#D91278] transition-colors relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D91278] transition-all group-hover:w-full"></span>
                    </a>
                    <button
                        onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-[#D91278] to-[#155196] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-[#D91278]/30 transition-all transform hover:-translate-y-0.5 border border-white/10">
                        Enroll Now
                    </button>
                </motion.div>

                {/* Mobile menu button */}
                <div className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </nav>
    );
}
