import { MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/logo-compressed.webp';

export default function Footer() {
    return (
        <footer className="bg-[#020205] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="bg-white rounded p-1 w-48 mb-6 overflow-hidden flex items-center justify-center">
                            <img
                                src={logoImg}
                                alt="Wisdom Design College Logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering the next generation of creative professionals with industry-leading training and 100% placement guarantee in Ghaziabad.
                        </p>
                        <div className="flex gap-4">
                            {/* social icons placeholder */}
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D91278] cursor-pointer transition-colors">
                                <span className="text-white font-bold">f</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F6B221] cursor-pointer transition-colors">
                                <span className="text-white font-bold">in</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#155196] cursor-pointer transition-colors">
                                <span className="text-white font-bold">ig</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-[#D91278] transition-colors">Home</a></li>
                            <li>
                                <a
                                    href="#courses"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="hover:text-[#F6B221] transition-colors">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="hover:text-[#155196] transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li><a href="#" className="hover:text-white transition-colors">Placement Records</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-[#D91278] shrink-0" size={20} />
                                <span>Wisdom Design College, Ghaziabad, Uttar Pradesh, India</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="text-[#F6B221] shrink-0" size={20} />
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="text-[#155196] shrink-0" size={20} />
                                <span>info@wisdomdesigncollege.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Wisdom College for Creativity & Design. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
