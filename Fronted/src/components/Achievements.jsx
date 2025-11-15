import { Trophy, Code } from 'lucide-react';

const Achievements = ({ leetCodeUrl = 'https://leetcode.com/chirde_karan_262', gfgUrl = '#' }) => {
    return (
        <section id="achievements" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
                    Problem Solving & Achievements
                </h2>

                <p className="text-center text-gray-300 mb-8">100+ problems solved on LeetCode and 100+ on GeeksforGeeks</p>

                <div className="grid sm:grid-cols-2 gap-6">
                    <a
                        href={leetCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition transform duration-200"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 bg-gradient-to-br from-teal-400 to-amber-400 rounded-lg">
                                <Trophy size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">LeetCode</h3>
                                <p className="text-sm text-gray-300">100+ problems solved</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://img.shields.io/badge/LeetCode-100%2B-orange?logo=leetcode&logoColor=white"
                                    alt="LeetCode badge"
                                    className="h-6"
                                />
                                <span className="text-sm text-gray-400">Profile</span>
                            </div>
                            <div className="text-sm text-teal-300 font-medium">View Profile →</div>
                        </div>
                    </a>

                    <a
                        href={gfgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition transform duration-200"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 bg-gradient-to-br from-fuchsia-400 to-amber-400 rounded-lg">
                                <Code size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">GeeksforGeeks</h3>
                                <p className="text-sm text-gray-300">100+ problems solved</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://img.shields.io/badge/GfG-100%2B-brightgreen?logo=geeksforgeeks&logoColor=white"
                                    alt="GfG badge"
                                    className="h-6"
                                />
                                <span className="text-sm text-gray-400">Profile</span>
                            </div>
                            <div className="text-sm text-fuchsia-300 font-medium">View Profile →</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Achievements;