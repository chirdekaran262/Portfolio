import  { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    { Icon: Mail, title: 'Email', content: 'chirdekaran262@gmail.com', link: 'mailto:chirdekaran262@gmail.com', bg: 'bg-teal-500/20', text: 'text-teal-300', border: 'hover:border-teal-300/50' },
    { Icon: MapPin, title: 'Location', content: 'Umarkhed, Maharashtra, India', bg: 'bg-fuchsia-500/20', text: 'text-fuchsia-300', border: 'hover:border-fuchsia-300/50' },
    { Icon: Linkedin, title: 'LinkedIn', content: 'Connect with me', link: 'https://linkedin.com/in/karan-chirde-0666ab1aa', bg: 'bg-amber-500/20', text: 'text-amber-300', border: 'hover:border-amber-300/50' },
    { Icon: Github, title: 'GitHub', content: 'View my work', link: 'https://github.com/chirdekaran262', bg: 'bg-rose-500/20', text: 'text-rose-300', border: 'hover:border-rose-300/50' }
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-12">Let's discuss your next project or opportunity</p>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            {contacts.map((c, i) => {
              const { Icon, title, content, link, bg, text, border } = c;
              return (
                <div key={i} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 ${border} transition-all`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${bg} rounded-lg`}>
                      <Icon size={22} className={text} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{title}</h3>
                      {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-300 transition-colors">
                          {content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-300 transition-colors text-white placeholder-gray-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-300 transition-colors text-white placeholder-gray-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-300 transition-colors text-white placeholder-gray-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal-300 transition-colors resize-none text-white placeholder-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full px-6 py-4 bg-gradient-to-r from-teal-400 to-amber-400 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
              >
                <Send size={18} />
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-center text-emerald-300">Thank you! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;