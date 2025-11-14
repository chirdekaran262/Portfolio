import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/certifications';

function App() {
  return (
    <div className="bg-gradient-to-br from-neutral-900 via-fuchsia-900 to-amber-900 min-h-screen text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        {/* Achievements section */}
        <section id="achievements">
          <Achievements leetCodeUrl="https://leetcode.com/chirde_karan_262" gfgUrl="https://auth.geeksforgeeks.org/user/your-gfg-username" />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;