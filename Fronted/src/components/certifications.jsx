import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [

    {
      title: "Java Spring Boot",
      issuer: "Udemy",
      description: "Complete Spring Boot development course including REST APIs, JPA, and microservices",
      skills: ["Spring Boot", "REST API", "JPA", "Microservices"],
      color: "from-amber-400 to-orange-500",
      link: "ude.my/UC-acf0c650-20b8-476f-b5da-1e9c55224e5c"
    },
    {
      title: "Data Science",
      issuer: "Academor",
      description: "Foundational Data Science course covering Python basics, data analysis, statistics, and machine learning concepts.",
      skills: ["Python", "Data Analysis", "Statistics", "Data Visualization", "Machine Learning"],
      color: "from-blue-400 to-indigo-500",
      link: "https://drive.google.com/file/d/1ME1jiQ-pGrTsj4idE6OP6_z40i9ha_M1/view?usp=sharing"
    }

  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-center text-gray-300 mb-12">Continuous learning and professional development</p>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <article key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg`}>
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 flex items-center justify-between">
                      <span>{cert.title}</span>
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-300 ml-4">
                          <ExternalLink size={16} />
                        </a>
                      ) : null}
                    </h3>
                    <p className="text-amber-300 font-semibold text-sm">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;