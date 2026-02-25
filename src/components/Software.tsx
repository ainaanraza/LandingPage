import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const tools = [
    { name: 'Autodesk MAYA', desc: '3D modeling, animation & visual effects', provider: 'Autodesk', color: 'text-[#0696D7]' },
    { name: 'Autodesk 3ds MAX', desc: '3D rendering, modeling & architectural visualization', provider: 'Autodesk', color: 'text-[#0696D7]' },
    { name: 'FIGMA', desc: 'UI/UX design & prototyping tool', provider: 'Figma', color: 'text-[#F24E1E]' },
    { name: 'ADOBE XD', desc: 'User interface & experience design', provider: 'Adobe', color: 'text-[#FF61F6]' },
    { name: 'Adobe Photoshop', desc: 'Digital Photo Editing and Effects', provider: 'Adobe', color: 'text-[#31A8FF]' },
    { name: 'Adobe Illustrator', desc: 'Digital Illustration & Vector Graphics', provider: 'Adobe', color: 'text-[#FF9A00]' },
    { name: 'Adobe InDesign', desc: 'Print Layout Design', provider: 'Adobe', color: 'text-[#FF3366]' },
    { name: 'CorelDRAW', desc: 'Print Publication Design', provider: 'Corel', color: 'text-[#77CA3F]' },
    { name: 'Adobe After Effects', desc: 'Digital Visual Effects & Motion Graphics', provider: 'Adobe', color: 'text-[#9999FF]' },
    { name: 'Adobe Premiere Pro', desc: 'Video & Audio Editing', provider: 'Adobe', color: 'text-[#EA77FF]' },
    { name: 'Adobe Animate CC', desc: '2D Animation', provider: 'Adobe', color: 'text-[#FF4C4C]' },
    { name: 'SoundForge', desc: 'Professional Audio Editing', provider: 'Magix', color: 'text-[#00ffcc]' },
];

export default function Software() {
    return (
        <section className="py-24 relative bg-[#020205]">
            {/* Decorative gradient blob */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#155196]/20 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Master <span className="text-[#155196]">Industry-Standard</span> Software
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Get hands-on experience with all major design tools used by professionals worldwide. Certificate available for each.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity bg-current ${tool.color}`}></div>

                            <div className="flex justify-between items-start mb-4">
                                <div className={`font-bold text-xl ${tool.color}`}>{tool.provider.charAt(0)}</div>
                                <div className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                                    <Award size={12} />
                                    Certificate
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{tool.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
