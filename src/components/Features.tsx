import { motion } from 'framer-motion';
import { Layers, Palette, MonitorPlay, Briefcase } from 'lucide-react';

const features = [
    {
        icon: <Palette size={32} className="text-[#D91278]" />,
        title: 'Creative Mastery',
        description: 'Learn industry-standard tools like Photoshop, Illustrator, and CorelDRAW to bring your imagination to life.',
    },
    {
        icon: <Layers size={32} className="text-[#F6B221]" />,
        title: 'UI/UX Design',
        description: 'Master Figma and modern design principles to craft stunning, user-centric web and mobile interfaces.',
    },
    {
        icon: <MonitorPlay size={32} className="text-[#155196]" />,
        title: 'Hands-on Projects',
        description: 'Build a solid portfolio with real-world assignments, guided by experienced industry professionals.',
    },
    {
        icon: <Briefcase size={32} className="text-[#00ffcc]" />,
        title: '100% Placement',
        description: 'Get guaranteed placement assistance upon completion. We connect you with top companies in the region.',
    },
];

export default function Features() {
    return (
        <section id="about" className="py-24 relative bg-[#050510]">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D91278]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#155196]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why Choose <span className="text-[#D91278]">Wisdom College?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Our 6-month intense mastery course is designed to take you from a beginner to a hire-ready professional designer.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all group"
                        >
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
