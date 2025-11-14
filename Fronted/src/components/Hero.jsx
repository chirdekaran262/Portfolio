import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Code2, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    const socials = [
        { icon: Github, url: 'https://github.com/chirdekaran262', label: 'GitHub' },
        { icon: Linkedin, url: 'https://linkedin.com/in/karan-chirde-0666ab1aa', label: 'LinkedIn' },
        { icon: Twitter, url: 'https://twitter.com/karanc26', label: 'Twitter' },
        { icon: Instagram, url: 'https://instagram.com/c_karan26', label: 'Instagram' },
        { icon: Mail, url: 'mailto:chirdekaran262@gmail.com', label: 'Email' },
        { icon: Code2, url: 'https://leetcode.com/chirde_karan_262', label: 'LeetCode' },
    ];

    return (
        <header className="relative overflow-hidden py-28 px-4 text-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
                {/* Left Content */}
                <div className="flex-1">
                    <span className="inline-block px-4 py-2 bg-emerald-600/15 border border-emerald-500/30 rounded-full text-sm font-semibold text-emerald-300 mb-4 flex items-center gap-2">
                        <CheckCircle size={16} /> ✓ B.Tech Graduate - May 2025
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent leading-tight">
                        Karan Chirde
                    </h1>

                    <p className="text-xl text-amber-200 font-semibold mb-3">
                        Backend Engineer & Full-Stack Developer
                    </p>

                    <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                        Building scalable web applications with <span className="text-teal-300 font-semibold">Spring Boot</span> & <span className="text-fuchsia-300 font-semibold">Java</span>. Computer Science graduate actively seeking impactful opportunities in backend development.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-amber-400 hover:from-teal-300 hover:to-amber-300 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
                        >
                            View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-fuchsia-400 hover:bg-fuchsia-500/10 rounded-lg font-semibold transition"
                        >
                            <Mail size={18} /> Get in Touch
                        </a>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <p className="text-gray-300">Connect with me:</p>
                        <div className="flex items-center gap-3">
                            {socials.map(({ icon: Icon, url, label }, i) => (
                                <a
                                    key={i}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="p-3 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg border border-neutral-700 hover:from-teal-400/20 hover:to-fuchsia-400/20 transition transform hover:scale-110"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">15+</div>
                            <p className="text-gray-300 text-sm">REST APIs</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-300 to-pink-400 bg-clip-text text-transparent">200+</div>
                            <p className="text-gray-300 text-sm">Problems Solved</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">4+</div>
                            <p className="text-gray-300 text-sm">Major Projects</p>
                        </div>
                    </div>
                </div>

                {/* Right Image - Using Local Image */}
                <div className="relative hidden md:flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-fuchsia-600 rounded-2xl opacity-12 filter blur-2xl"></div>
                    <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-fuchsia-500/40 shadow-2xl">
                        <img
                            src="/My_IMG.jpg"
                            alt="Karan Chirde"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/40 to-transparent"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;