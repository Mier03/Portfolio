import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 pt-16 sm:pt-20 md:pt-24"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition overflow-hidden">
              <img
                src="/images/tekno-space.jpg"
                alt="TeknoSpace Project"
                className="w-full object-contain"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <img
                    src="/images/logotekno2.png"
                    alt="TeknoSpace Logo"
                    className="h-10 w-10 mr-4 inline-block rounded-full" // Restored to larger size
                  />
                  <h3 className="text-xl font-bold">TeknoSpace</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Scalable cloud infrastructure management with real-time
                  monitoring and automated scaling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PHP", "HTML/CSS", "MySQL", "MAILTRAP"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div
              className="glass rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all overflow-hidden"
            >
              <img
                src="/images/swift-sail.jpg"
                alt="SwiftSail Project"
                className="w-full object-contain"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <img
                    src="/images/swift.png"
                    alt="SwiftSail Logo"
                    className="h-10 w-10 mr-4 inline-block rounded-full" // Restored to larger size
                  />
                  <h3 className="text-xl font-bold">SwiftSail</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  ML-powered data visualization platform with predictive
                  analytics and interactive reports.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Firebase", "PayMonggo", "JavaScript"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div
              className="glass rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all overflow-hidden"
            >
              <img
                src="/images/furwell.jpg"
                alt="FurWell Project"
                className="w-full object-contain"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                 
                  <div className="flex items-center">
                    <img
                      src="/images/furblue.png"
                      alt="FurWell Logo"
                      className="h-10 w-10 mr-4 inline-block rounded-full" // Restored to larger size
                    />
                    <h3 className="text-xl font-bold">FurWell</h3>
                  </div>
                   <p className="text-gray-400">
                    👩‍💼<strong> Project Manager</strong>
                  </p>
                </div>
                <p className="text-gray-400 mb-4">
                  👩‍💻<strong> Fullstack Developer</strong>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Firebase", "JavaScript", "Cloudinary"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div
              className="glass rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all overflow-hidden"
            >
              <img
                src="/images/swift-sail.jpg"
                alt="Real-Time Chat App Project"
                className="w-full object-contain"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <img
                    src="/logos/realtime-chat-logo.png"
                    alt="Real-Time Chat App Logo"
                    className="h-10 w-10 mr-4 inline-block rounded-full" // Restored to larger size
                  />
                  <h3 className="text-xl font-bold">Real-Time Chat App</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Scalable chat platform supporting real-time messaging,
                  presence, and group chat features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};