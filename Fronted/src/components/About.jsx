import React from 'react';
import { GraduationCap, Briefcase, MapPin, Mail, Award, Code, Zap, Target, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 text-white">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">About Me</h2>
        <p className="text-gray-300">
          B.Tech Computer Science graduate (May 2025) specializing in backend development and database systems.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Contact & Quick Info */}
        <div className="space-y-4">
          {/* Contact Info Cards */}
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-teal-400/50 transition flex items-center gap-4">
            <MapPin size={20} className="text-teal-300" />
            <div>
              <p className="text-sm text-gray-300">Location</p>
              <p className="font-medium">Umarkhed, Maharashtra, India</p>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-amber-400/50 transition flex items-center gap-4">
            <Mail size={20} className="text-amber-300" />
            <div>
              <p className="text-sm text-gray-300">Email</p>
              <a href="mailto:chirdekaran262@gmail.com" className="font-medium text-teal-300 hover:text-amber-300 transition">
                chirdekaran262@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-fuchsia-400/50 transition flex items-center gap-4">
            <Briefcase size={20} className="text-fuchsia-300" />
            <div>
              <p className="text-sm text-gray-300">Ask me about</p>
              <p className="font-medium">Java &amp; Spring Boot</p>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/5 p-4 rounded-lg border border-teal-400/30 hover:border-teal-400/60 transition">
            <div className="flex items-center gap-3 mb-2">
              <Code size={18} className="text-teal-300" />
              <p className="text-sm text-gray-300">Coding Style</p>
            </div>
            <p className="text-sm font-medium text-gray-200">Clean Code & SOLID Principles</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-4 rounded-lg border border-emerald-400/30 hover:border-emerald-400/60 transition">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle size={18} className="text-emerald-300" />
              <p className="text-sm text-gray-300">Education Status</p>
            </div>
            <p className="text-sm font-medium text-emerald-200">✓ Passed Out - May 2025</p>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-4 rounded-lg border border-amber-400/30 hover:border-amber-400/60 transition">
            <div className="flex items-center gap-3 mb-2">
              <Zap size={18} className="text-amber-300" />
              <p className="text-sm text-gray-300">Work Status</p>
            </div>
            <p className="text-sm font-medium text-gray-200">Actively Seeking Opportunities</p>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-600/5 p-4 rounded-lg border border-fuchsia-400/30 hover:border-fuchsia-400/60 transition">
            <div className="flex items-center gap-3 mb-2">
              <Target size={18} className="text-fuchsia-300" />
              <p className="text-sm text-gray-300">Primary Focus</p>
            </div>
            <p className="text-sm font-medium text-gray-200">Backend & Database Design</p>
          </div>
        </div>

        {/* Middle Column - Education & Expertise */}
        <div className="space-y-6 md:col-span-2">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-rose-400/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={20} className="text-rose-300" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-sm text-gray-300 space-y-4">
              {/* B.Tech - Highlighted */}
              <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-400/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={16} className="text-emerald-300" />
                  <p className="font-semibold text-emerald-200">B.Tech in Computer Science and Engineering</p>
                </div>
                <p className="text-gray-400 mb-1">Shri Guru Gobind Singhji Institute of Engineering and Technology</p>
                <p className="text-xs text-gray-500">2021 - 2025 <span className="text-emerald-300 font-semibold">| ✓ Passed Out - May 2025</span> | Nanded, India</p>
              </div>

              {/* HSC - Highlighted */}
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={16} className="text-blue-300" />
                  <p className="font-semibold text-blue-200">HSC - Science</p>
                </div>
                <p className="text-gray-400 mb-1">G.S.G College, Umarkhed</p>
                <p className="text-xs text-gray-500">2020 - 2021 <span className="text-blue-300 font-semibold">| ✓ Passed Out - 2021</span> | Umarkhed, India</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-amber-400/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <Award size={20} className="text-amber-300" />
              <h3 className="text-lg font-semibold">Expertise & Focus</h3>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-300 mt-1">✓</span>
                <span>Backend Development with Spring Boot &amp; Java</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-300 mt-1">✓</span>
                <span>RESTful API Design &amp; Implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-300 mt-1">✓</span>
                <span>Database Architecture (MySQL, PostgreSQL, MongoDB)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-300 mt-1">✓</span>
                <span>Machine Learning Integration &amp; AI Applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-300 mt-1">✓</span>
                <span>DevOps: Docker, Kubernetes, Jenkins, Git</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-300 mt-1">✓</span>
                <span>Clean Code &amp; Test-Driven Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 p-6 rounded-lg border border-emerald-400/30">
        <h4 className="font-semibold mb-2 text-emerald-300">Professional Summary</h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          B.Tech Computer Science graduate (Passed Out - May 2025) specializing in backend development and database systems, with proven experience in building scalable and efficient web applications.
          Proficient in Java, Spring Boot, REST API, and MySQL, with additional exposure to PostgreSQL, Docker, and Git for version control.
          Strong foundation in object-oriented programming and a growing interest in applying machine learning within backend architectures. Ready to transition to a full-time role and make a significant impact in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default About;
