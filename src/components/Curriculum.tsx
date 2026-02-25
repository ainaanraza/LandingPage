import { motion } from 'framer-motion';

const phases = [
    {
        id: 'Phase 1',
        title: 'Digital Graphics Fundamentals',
        duration: 'Month 1-2',
        topics: [
            'Digital Photo Editing (Photoshop)',
            'Digital Illustration (Illustrator)',
            'Print Publication Design (CorelDRAW)',
            'Design Principles & Color Theory',
            'Project: Digital Art Portfolio'
        ],
        color: 'border-[#D91278]'
    },
    {
        id: 'Phase 2',
        title: 'Advanced Design & Layout',
        duration: 'Month 3-4',
        topics: [
            'Print Layout Design (InDesign)',
            'Advanced Vector Graphics',
            'Typography & Brand Design',
            'Multimedia Content Creation',
            'Project: Complete Brand Package'
        ],
        color: 'border-[#F6B221]'
    },
    {
        id: 'Phase 3',
        title: 'Motion Graphics & Animation',
        duration: 'Month 5-6',
        topics: [
            'Visual Effects & Motion Graphics (After Effects)',
            'Video & Audio Editing (Premiere Pro)',
            '2D Animation (Animate CC)',
            'Audio Editing (SoundForge)',
            'Professional Portfolio & Industry Projects'
        ],
        color: 'border-[#155196]'
    }
];

export default function Curriculum() {
    return (
        <section id="curriculum" className="py-24 relative bg-[#050510] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Curriculum Path */}
                    <div>
                        <div className="mb-12">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold mb-4 text-white"
                            >
                                Complete <span className="text-[#D91278]">Curriculum</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-400 text-lg"
                            >
                                Structured learning path from basics to advanced, designed to make you industry-ready.
                            </motion.p>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                            {phases.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 ${phase.color} bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                                        <span className="text-xs font-bold">{index + 1}</span>
                                    </div>

                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm group-hover:border-white/30 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] uppercase font-bold text-[#F6B221]">{phase.id}</span>
                                            <span className="text-xs text-gray-500 font-medium bg-black px-2 py-1 rounded">{phase.duration}</span>
                                        </div>
                                        <h3 className="font-bold text-white text-lg mb-4">{phase.title}</h3>
                                        <ul className="space-y-2 text-sm text-gray-400">
                                            {phase.topics.map((topic, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-[#D91278]">▹</span>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Consultation Form */}
                    <motion.div
                        id="enroll-form"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-3xl backdrop-blur-md relative overflow-hidden"
                    >
                        {/* Form Background accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#155196]/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

                        <h3 className="text-3xl font-bold text-white mb-2">Career Transformation</h3>
                        <p className="text-gray-400 mb-8">Get Free Consultation. Fill in your details and we'll get back to you.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D91278] focus:ring-1 focus:ring-[#D91278] transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F6B221] focus:ring-1 focus:ring-[#F6B221] transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Course Interest *</label>
                                <select
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#155196] focus:ring-1 focus:ring-[#155196] transition-all appearance-none"
                                    required
                                >
                                    <option value="" disabled selected>Select a course</option>
                                    <option value="graphics">Graphics & Multimedia (6 Months)</option>
                                    <option value="adobe">Master Adobe Creative Suite</option>
                                    <option value="uiux">UI/UX Design Fundamentals</option>
                                    <option value="motion">Advanced Motion Graphics</option>
                                </select>
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 mt-4 bg-gradient-to-r from-[#D91278] to-[#155196] rounded-xl font-bold text-white shadow-lg shadow-[#D91278]/20 hover:shadow-[#155196]/40 hover:scale-[1.02] transition-all duration-300"
                            >
                                Get Free Consultation
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                By submitting this form, you agree to receive communications from us.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
