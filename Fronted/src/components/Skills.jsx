import { Code, Database, Server, Cloud, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "teal",
      skills: ["Java", "Python", "SQL", "JavaScript", "HTML", "CSS", "C"]
    },
    {
      title: "Backend & Frameworks",
      icon: Server,
      color: "fuchsia",
      skills: ["Spring Boot", "REST API", "JDBC", "Hibernate", "JPA", "Flask"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "amber",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "green",
      skills: ["Docker", "Git", "Jenkins", "Kubernetes", "Maven", "Postman", "VS Code", "IntelliJ IDEA"]
    },
    {
      title: "Cloud & Platforms",
      icon: Cloud,
      color: "blue",
      skills: ["AWS", "Google Cloud Platform (GCP)", "Linux", "Bash"]
    },
    {
      title: "ML & Data Science",
      icon: Brain,
      color: "rose",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "OpenCV", "Seaborn", "Matplotlib", "MathJS"]
    }
  ];

  const colorMap = {
    teal: "from-teal-400 to-teal-600",
    fuchsia: "from-fuchsia-500 to-fuchsia-600",
    amber: "from-amber-400 to-amber-500",
    green: "from-emerald-400 to-emerald-600",
    blue: "from-sky-400 to-sky-600",
    rose: "from-rose-400 to-rose-600"
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-teal-300 to-amber-300 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-gray-300 mb-16">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${colorMap[category.color]} rounded-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs text-gray-200 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold mb-2 text-teal-300">Currently Learning</h4>
            <p className="text-gray-300">
              Deepening knowledge in Machine Learning (ML) and exploring advanced Spring Boot patterns
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold mb-2 text-fuchsia-300">Familiar Technologies</h4>
            <p className="text-gray-300">
              React Native, React.js, Chart.js, Plotly, Three.js, and various visualization libraries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;