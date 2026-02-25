import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

const courses = [
    {
        type: 'Featured',
        level: 'Beginner',
        rating: 4.9,
        title: 'Master Adobe Creative Suite',
        desc: 'Complete guide to Photoshop, Illustrator, and InDesign for professional design work.',
        duration: '12 weeks',
        students: '2,847',
        tags: ['Photoshop', 'Illustrator', 'InDesign', '+1 more'],
        color: 'from-[#FF9A00] to-[#FF3366]'
    },
    {
        type: '',
        level: 'Intermediate',
        rating: 4.8,
        title: 'UI/UX Design Fundamentals',
        desc: 'Learn the principles of user interface and user experience design from scratch.',
        duration: '8 weeks',
        students: '1,932',
        tags: ['Figma', 'User Research', 'Prototyping', '+1 more'],
        color: 'from-[#F24E1E] to-[#FF61F6]'
    },
    {
        type: 'Featured',
        level: 'Beginner',
        rating: 4.9,
        title: 'Logo Design Mastery',
        desc: 'Create memorable and impactful logos that stand the test of time.',
        duration: '6 weeks',
        students: '3,156',
        tags: ['Logo Design', 'Brand Identity', 'Typography', '+1 more'],
        color: 'from-[#D91278] to-[#155196]'
    },
    {
        type: '',
        level: 'Advanced',
        rating: 4.7,
        title: 'Advanced Motion Graphics',
        desc: 'Bring your designs to life with professional animation and motion graphics.',
        duration: '10 weeks',
        students: '892',
        tags: ['After Effects', 'Cinema 4D', 'Animation', '+1 more'],
        color: 'from-[#9999FF] to-[#00ffcc]'
    },
    {
        type: 'Featured',
        level: 'Intermediate',
        rating: 4.8,
        title: 'Web Design with Figma',
        desc: 'Design stunning websites and mobile apps using Figma\'s powerful tools.',
        duration: '7 weeks',
        students: '2,341',
        tags: ['Figma', 'Web Design', 'Responsive Design', '+1 more'],
        color: 'from-[#31A8FF] to-[#155196]'
    },
    {
        type: '',
        level: 'Beginner',
        rating: 4.6,
        title: 'Print Design Excellence',
        desc: 'Master the art of print design for brochures, posters, and marketing materials.',
        duration: '5 weeks',
        students: '1,567',
        tags: ['Print Design', 'Layout', 'Color Management', '+1 more'],
        color: 'from-[#77CA3F] to-[#0696D7]'
    }
];

export default function CoursesList() {
    return (
        <section id="courses" className="py-24 relative bg-[#020205]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Level up your design skills with our <span className="text-[#F6B221]">Comprehensive Courses</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Taught by industry professionals, designed for real-world impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group flex flex-col"
                        >
                            {/* Header Banner */}
                            <div className={`h-2 w-full bg-gradient-to-r ${course.color}`}></div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-2">
                                        {course.type && (
                                            <span className="text-[10px] uppercase font-bold text-black bg-[#F6B221] px-2 py-1 rounded">
                                                {course.type}
                                            </span>
                                        )}
                                        <span className="text-[10px] uppercase font-bold text-white bg-white/10 px-2 py-1 rounded">
                                            {course.level}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm font-bold text-[#F6B221]">
                                        ★ {course.rating}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F6B221] transition-colors">{course.title}</h3>
                                <p className="text-sm text-gray-400 mb-6 flex-grow">{course.desc}</p>

                                <div className="flex items-center justify-between text-xs text-gray-500 mb-6 font-medium">
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={14} />
                                        {course.students} students
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {course.tags.map(tag => (
                                        <span key={tag} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
