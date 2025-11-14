import React from 'react';
import { Users, Calendar, Award, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
          Experience & Activities
        </h2>
        <p className="text-center text-gray-300 mb-12">Leadership and extracurricular involvement</p>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <article className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-teal-400 to-fuchsia-600 rounded-xl">
                <Users size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Student Co-ordinator</h3>
                <p className="text-amber-300 font-semibold mb-2">Pragya'22 College Fest</p>
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                  <Calendar size={16} />
                  <span>September 2023 - October 2023</span>
                  <span className="mx-2">•</span>
                  <span>Nanded, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="text-teal-300 mr-3 text-xl">▹</span>
                Led a team of 8 members to organize 4 technical events during the college fest
              </p>
              <p className="flex items-start">
                <span className="text-teal-300 mr-3 text-xl">▹</span>
                Successfully engaged over 200 participants across various technical competitions
              </p>
              <p className="flex items-start">
                <span className="text-teal-300 mr-3 text-xl">▹</span>
                Coordinated logistics, managed event schedules, and ensured smooth execution
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Leadership", "Team Management", "Event Planning", "200+ Participants"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-amber-400/20 rounded-full text-sm text-gray-200">{tag}</span>
              ))}
            </div>
          </article>

          <article className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl">
                <Code size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Freelance Web Developer</h3>
                <p className="text-amber-300 font-semibold mb-2">Computer Shop Website</p>
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                  <Calendar size={16} />
                  <span>Freelance Project</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="text-teal-300 mr-3 text-xl">▹</span>
                Built an informational website for a local computer shop with shop details and location
              </p>
              <p className="flex items-start">
                <span className="text-teal-300 mr-3 text-xl">▹</span>
                Displayed product listings, available services, and inquiry contact form
              </p>
              <p className="flex items-start">
                <span className="text-teal-300 mr-3 text-xl">▹</span>
                Integrated contact information, location map, and customer inquiry system
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Website Development", "Local Business", "Contact Form", "Product Display", "Responsive Design"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-amber-400/20 rounded-full text-sm text-gray-200">{tag}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;