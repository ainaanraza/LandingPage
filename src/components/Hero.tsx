import React from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingShapes } from './FloatingShapes';
import { motion } from 'framer-motion';
import { Environment } from '@react-three/drei';
import logoImg from '../assets/logo-compressed.webp';

export default function Hero() {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} color="#D91278" />
                    <directionalLight position={[-10, -10, -5]} intensity={1} color="#155196" />
                    <Environment preset="city" />
                    <React.Suspense fallback={null}>
                        <FloatingShapes />
                    </React.Suspense>
                </Canvas>
            </div>

            {/* Hero Content Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">

                {/* Left Typography */}
                <motion.div
                    className="flex flex-col gap-6 pointer-events-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit text-[#F6B221] font-semibold tracking-wide uppercase text-sm">
                        100% Placement Guarantee
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                        Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91278] via-[#F6B221] to-[#155196]">Graphics Design</span>
                        <br />
                        in 6 Months.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-xl font-light">
                        Join Wisdom Design College in Ghaziabad. Learn Photoshop, Illustrator, Figma, and more with hands-on projects and expert mentors. Limited seats available!
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <button
                            onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-[#D91278] to-[#155196] rounded-full font-bold text-white shadow-[0_0_20px_rgba(217,18,120,0.4)] hover:shadow-[0_0_30px_rgba(246,178,33,0.6)] hover:scale-105 transition-all duration-300">
                            Enroll Today
                        </button>
                        <button
                            onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-white/5 border border-white/20 rounded-full font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            View Curriculum
                        </button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050510] bg-gray-800 flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <span className="font-bold text-[#F6B221]">500+</span> Students Placed
                        </div>
                    </div>
                </motion.div>

                {/* Right side - Clear Logo rendering */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:flex relative pointer-events-auto items-center justify-center w-full h-full"
                >
                    <div className="relative w-full max-w-lg aspect-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_rgba(217,18,120,0.15)] flex items-center justify-center">
                        <img
                            src={logoImg}
                            alt="Wisdom Design College Full Logo"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))" }}
                        />
                    </div>
                </motion.div>

            </div>

            {/* Soft gradient overlay at bottom to merge with next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050510] to-transparent z-10"></div>
        </div>
    );
}
