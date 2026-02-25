import { motion } from 'framer-motion';

const stats = [
    { value: '500+', label: 'Students Placed', color: 'text-[#D91278]' },
    { value: '100%', label: 'Placement Rate', color: 'text-[#F6B221]' },
    { value: '50+', label: 'Partner Companies', color: 'text-[#155196]' },
    { value: '₹4.5L', label: 'Average Package', color: 'text-[#00ffcc]' },
];

const companies = [
    'Accenture', 'Being Ingenious Media Pvt Ltd', 'Snapdeal',
    'Retina', 'Keyword India', 'DigiDzn', 'Digital Dose Media',
    'WebQuick India Pvt Ltd', 'Digiperform', 'Digilinkers', 'Moshi Moshi'
];

export default function PlacementStats() {
    return (
        <section className="py-24 relative bg-[#050510] border-t border-white/5">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full border border-[#F6B221]/30 bg-[#F6B221]/10 text-[#F6B221] font-semibold tracking-wide uppercase text-sm mb-4"
                    >
                        100% Placement Guarantee
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        We don't just teach design — <span className="text-[#D91278]">we ensure you get hired.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Our proven track record speaks for itself.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <h3 className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</h3>
                            <p className="text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Companies Marquee / Grid */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Our Students Work At</h3>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {companies.map((company, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 bg-[#0a0a16] border border-white/10 rounded-full text-gray-300 font-medium hover:border-[#D91278] hover:text-white transition-colors cursor-default"
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
