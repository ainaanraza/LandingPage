import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
    {
        name: "Nitesh Pandey",
        course: "GRAPHIC & MULTIMEDIA",
        role: "Editor and Vfx Artist",
        stars: 5,
        text: "The Graphics & Multimedia program completely transformed my career. The hands-on training with industry-standard software gave me the confidence to land my dream job at Adobe. The faculty's expertise and 100% placement guarantee made all the difference."
    },
    {
        name: "Aman Garg",
        course: "GRAPHIC & MULTIMEDIA DESIGNER",
        role: "Webholic Media",
        stars: 5,
        text: "From zero knowledge to becoming a motion graphics expert in just 6 months! The After Effects and Premiere Pro training was exceptional. Now I'm creating visual effects for major streaming platforms. Best investment I ever made!"
    },
    {
        name: "Akansha Sharma",
        course: "GRAPHIC & MULTIMEDIA DESIGNER",
        role: "News India",
        stars: 4,
        text: "The comprehensive curriculum covering Photoshop, Illustrator, CorelDRAW, and InDesign made me versatile. I started freelancing during the course itself and now earn more than my previous corporate job. Highly recommend!"
    },
    {
        name: "Suraj Maurya",
        course: "GRAPHIC & MULTIMEDIA",
        role: "L.A.B Institute",
        stars: 5,
        text: "The quality of education since 2016 has been consistently excellent. The industry connections and placement support helped me transition from engineering to creative field seamlessly. Now leading a creative team at a top agency!"
    },
    {
        name: "Atul Verma",
        course: "GRAPHIC & Multimedia Designer",
        role: "Digital craft media",
        stars: 4,
        text: "The foundation in graphics design from this institute helped me transition into UI/UX design. The portfolio projects were industry-relevant and impressive enough to catch Google's attention during interviews."
    },
    {
        name: "Abhinav Mishra",
        course: "GRAPHIC & MULTIMEDIA",
        role: "freelancer",
        stars: 5,
        text: "The video editing and audio editing modules using Premiere Pro and SoundForge were game-changers. The practical approach and real-world projects prepared me for the fast-paced media industry perfectly."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 relative bg-[#050510]">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F6B221]/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        What Our Students Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Success stories from our alumni who are now thriving in top companies worldwide.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-[#F6B221]/50 hover:bg-white/10 transition-all group flex flex-col h-full relative"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} className={i < t.stars ? "text-[#F6B221] fill-[#F6B221]" : "text-gray-600"} />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-8 flex-grow">"{t.text}"</p>

                            <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D91278] to-[#155196] flex items-center justify-center text-white font-bold text-lg uppercase shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase text-sm">{t.name}</h4>
                                    <p className="text-xs text-[#D91278] font-semibold">{t.role}</p>
                                </div>
                            </div>

                            {/* Placement badge */}
                            <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] uppercase font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                                <CheckCircle size={10} />
                                Placed
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
