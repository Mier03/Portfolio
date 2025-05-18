import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "HTML/CSS"];
  const backendSkills = ["Node.js", "Appwrite", "Firebase", "PHP", "mySQL"];
  const hardwareSkills = ["Arduino Configuration", "Breadboarding", "Microcontrollers", "Sensors", 
    "Circuit Design","Prototyping", "PCB Design", "Soldering", "Embedded Systems"];
  const [activeCard, setActiveCard] = useState(null); 

 
  const handleCardTap = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId); 
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 pt-16 sm:pt-20 md:pt-24"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div
            className={`rounded-xl p-8 border-white/10 border transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:animate-dance ${
              activeCard === "main"
                ? "shadow-[0_4px_20px_rgba(59,130,246,0.2)] border-blue-500/30 -translate-y-1 animate-dance"
                : ""
            }`}
            onTouchStart={() => handleCardTap("main")}
          >
            <p className="text-gray-300 mb-6">
              Eager to apply technical skills, learn new technologies, and support
              the creation of impactful software and hardware solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`rounded-xl p-6 border-white/10 border transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:animate-dance ${
                  activeCard === "frontend"
                    ? "shadow-[0_4px_20px_rgba(59,130,246,0.2)] border-blue-500/30 -translate-y-1 animate-dance"
                    : ""
                }`}
                onTouchStart={() => handleCardTap("frontend")}
              >
                <h3 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-2xl font-bold mb-4">Software</h3>
                <h3 className="text-10xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-sky-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-10xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-sky-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>

              <div
                className={`rounded-xl p-6 border-white/10 border transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:animate-dance ${
                  activeCard === "backend"
                    ? "shadow-[0_4px_20px_rgba(59,130,246,0.2)] border-blue-500/30 -translate-y-1 animate-dance"
                    : ""
                }`}
                onTouchStart={() => handleCardTap("backend")}
              >
                <h3 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-2xl font-bold mb-4">Hardware</h3>
                <div className="flex flex-wrap gap-3">
                  {hardwareSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-sky-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              className={`p-6 rounded-xl border-white/10 border transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:animate-dance ${
                activeCard === "education"
                  ? "shadow-[0_4px_20px_rgba(59,130,246,0.2)] border-blue-500/30 -translate-y-1 animate-dance"
                  : ""
              }`}
              onTouchStart={() => handleCardTap("education")}
            >
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">B.S. in Computer Engineering</strong> - Cebu Institute
                  of Technology (2022 - Present)
                </li>
                <li>
                    <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">University of Cebu Banilad</strong> - Science,
                  Technology, Engineering and Mathematics Senior High School (2020
                  - 2022)
                </li>
                <li>
                    <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Mantalongon National High School</strong> - Junior High
                  School (2016 - 2020)
                </li>
              </ul>
            </div>
            <div
              className={`p-6 rounded-xl border-white/10 border transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:animate-dance ${
                activeCard === "organizations"
                  ? "shadow-[0_4px_20px_rgba(59,130,246,0.2)] border-blue-500/30 -translate-y-1 animate-dance"
                  : ""
              }`}
              onTouchStart={() => handleCardTap("organizations")}
            >
              <h3 className="text-xl font-bold mb-4">📇 Organizations</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Christian Fellowship sa CIT-U</strong>
                  </h4>
                  <p>Finance Officer</p>
                  <p>SY 2024 - 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">ICPEP.SE CIT-U CHAPTER</strong>
                  </h4>
                  <p>External Affairs Committee</p>
                  <p>SY 2024 - 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Google Developers Groups on CIT-U</strong>
                  </h4>
                  <p>Member</p>
                  <p>SY 2024 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};