import {  ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Paripakv - Empowering Farmers 🌾",
      tech: "Spring Boot, React.js, Google OAuth",
      date: "January 2025",
      description: "Full-stack web application connecting farmers, buyers, and transporters in a seamless marketplace",
      features: [
        "Built a full-stack web app to connect 3 user roles: farmers, buyers, and transporters",
        "Farmers can list products, buyers can place bulk orders, and transporters handle deliveries",
        "Designed mobile-friendly UI with low-data usage and regional language support",
        "Used Google OAuth for secure login and created over 15 REST APIs using Spring Boot"
      ],
      link: "https://paripakv-krishivision.onrender.com/",
      github: "#",
      gradient: "from-green-500 to-emerald-600",
      tags: ["Spring Boot", "React.js", "OAuth 2.0", "REST API", "MySQL"]
    },
    {
      title: "DeepFake Audio Detection",
      tech: "Machine Learning, Python, SVM",
      date: "Ongoing",
      description: "ML-based system to detect deepfake audio using Support Vector Machine algorithms",
      features: [
        "Implemented SVM classification for audio deepfake detection",
        "Advanced audio processing and feature extraction techniques",
        "High accuracy detection with real-time processing capabilities",
        "Trained on diverse audio datasets for robust performance"
      ],
      link: "#",
      github: "https://github.com/chirdekaran262/DeepFake-SVM",
      gradient: "from-purple-500 to-pink-600",
      tags: ["Python", "SVM", "ML", "Audio Processing", "Scikit-learn"]
    },
    {
      title: "Startup Accounting Solution",
      tech: "Python, MySQL, REST API",
      date: "March 2025",
      description: "Tailored accounting system automating financial computations for startups",
      features: [
        "Developed tailored accounting system for startups, reducing manual bookkeeping errors by 40%",
        "Automated balance sheet management ensuring accuracy and compliance with accounting principles",
        "Provides real-time insights into assets and liabilities",
        "Scalable MySQL database schema for efficient financial data management"
      ],
      link: "#",
      github: "#",
      gradient: "from-blue-500 to-cyan-600",
      tags: ["Python", "MySQL", "REST API", "Automation", "FinTech"]
    },
    {
      title: "SmartFarm - Equipment Rental App",
      tech: "Spring Boot, MySQL, React Native",
      date: "July 2025",
      description: "Role-based equipment rental platform for farmers",
      features: [
        "Built role-based access control (FARMER/OWNER) handling 100+ listings and 200+ bookings",
        "Booking logic using JPA and MySQL with 98% test success rate",
        "Integrated backend with React Native via secure token-based APIs",
        "Clean, object-oriented code improving quality and reducing bugs by 35%"
      ],
      link: "#",
      github: "#",
      gradient: "from-orange-500 to-red-600",
      tags: ["Spring Boot", "React Native", "JPA", "MySQL", "RBAC"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16">Building scalable solutions that make a difference</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <article key={i} className={`bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105`}>
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                      <span>•</span>
                      <span>{project.tech}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                        <Github size={16} />
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {project.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      {tag}
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

export default Projects;