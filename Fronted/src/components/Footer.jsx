import React from 'react';
import { Heart, Github, Linkedin, Twitter, Instagram, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/chirdekaran262', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/karan-chirde-0666ab1aa', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/karanc26', label: 'Twitter' },
    { icon: Instagram, url: 'https://instagram.com/c_karan26', label: 'Instagram' },
    { icon: Mail, url: 'mailto:chirdekaran262@gmail.com', label: 'Email' },
    { icon: Code2, url: 'https://leetcode.com/chirde_karan_262', label: 'LeetCode' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-neutral-900/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent mb-4">
              Karan Chirde
            </h3>
            <p className="text-gray-300 mb-4">
              Backend Engineer specializing in building scalable Spring Boot services and exploring ML.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail size={16} />
              <span>Umarkhed, Maharashtra, India</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-300 hover:text-teal-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-fuchsia-300">Connect With Me</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              Open to opportunities and collaborations
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 flex items-center gap-2 text-sm">
              Made with <Heart size={16} className="text-fuchsia-400" /> by Karan Chirde © {currentYear}
            </p>
            <p className="text-gray-400 text-sm">
              Built with React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;