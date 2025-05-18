import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/70 flex items-start justify-center z-[1000] overflow-y-auto py-4 sm:py-8 transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-gradient-to-b from-black to-blue-500/40 rounded-xl w-full max-w-2xl mx-4 p-6 sm:p-8 border border-white/20 my-4 sm:my-8 relative shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-blue-500 transition-colors z-[1001] bg-gray-900/80 rounded-full p-2"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
       <h2 className="bg-gradient-to-r from-blue-200 to-cyan-500 bg-clip-text text-transparent text-3xl sm:text-3xl font-bold mb-6 pr-12">
          {project.title}
        </h2>
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6 border border-white/10"
          onError={(e) => {
            console.error(`Failed to load image: ${project.image}`);
            e.target.src = "/images/fallback.jpg";
          }}
        />
        <div className="mb-6 bg-gray-900/50 p-4 rounded-lg hover:shadow-blue-500/30 hover:shadow-md transition-shadow">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Description</h3>
          <p
            className="text-gray-100 text-sm sm:text-base"
            style={{ textAlign: 'justify' }}
          >
            {project.description}
          </p>
        </div>
        <div className="mb-6 bg-gray-900/50 p-4 rounded-lg hover:shadow-blue-500/30 hover:shadow-md transition-shadow">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-500/20 text-white py-1 px-3 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.role && (
          <div className="mb-6 bg-gray-900/50 p-4 rounded-lg hover:shadow-blue-500/30 hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Role</h3>
            <p className="text-gray-100 text-sm sm:text-base">{project.role}</p>
          </div>
        )}
        {project.files && project.files.length > 0 && (
          <div className="mb-6 bg-gray-900/50 p-4 rounded-lg hover:shadow-blue-500/30 hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Files</h3>
            <ul className="list-disc pl-5 text-gray-100 text-sm sm:text-base">
              {project.files.map((file, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={file.url}
                    download={file.name}
                    className="text-blue-200 hover:text-blue-100 transition-colors flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {project.links && project.links.length > 0 && (
          <div className="mb-6 bg-gray-900/50 p-4 rounded-lg hover:shadow-blue-500/30 hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Links</h3>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-blue-100 transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "TeknoSpace",
      image: "/images/tekno-space.jpg",
      logo: "/images/logotekno2.png",
      description:
        "TeknoSpace is a web-based platform designed specifically for educational purposes at the Cebu Institute of Technology - University (CIT-U). The scope of TeknoSpace encompasses providing students with a centralized hub to access and view posts, announcements, and updates from CIT-U’s various academic and administrative departments. The platform ensures that students receive daily updates with the latest information coming from CIT-U.",
      technologies: ["PHP", "HTML/CSS", "MySQL", "MAILTRAP"],
      role: "Project Manager",
      files: [
        { name: "/files/ARMALYTICS_SDD.pdf", url: "/files/ARMALYTICS_SDD.pdf" },
        { name: "/files/ARMALYTICS_SPMP.pdf", url: "/files/ARMALYTICS_SPMP.pdf" },
        { name: "/files/ARMALYTICS_SRS.pdf", url: "/files/ARMALYTICS_SRS.pdf" },
        { name: "/files/ARMALYTICS_TEST CASE.xlsx", url: "/files/ARMALYTICS_TEST CASE.xlsx" },
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Mier03/TeknoSpace" },
        { label: "Live Demo", url: "http://teknospace.onlinewebshop.net" },
      ],
    },
    {
      title: "SwiftSail",
      image: "/images/swift-sail.jpg",
      logo: "/images/swift.png",
      description:
        "SwiftSail is an efficient ferry booking system designed to simplify and streamline the process of reserving ferry trips. Built to enhance the travel experience for both passengers and operators, SwiftSail offers a modern solution for managing ferry schedules, seat availability, and ticket reservations.",
      technologies: ["React", "Firebase", "PayMonggo", "JavaScript"],
      role: "Full Stack Developer",
      links: [
        { label: "GitHub", url: "https://github.com/LoydAMT/ferrybookingsystem-scamacs" },
        { label: "Live Demo", url: "https://swiftsail-ferries.vercel.app" },
      ],
    },
    {
      title: "FurWell",
      image: "/images/furwell.jpg",
      logo: "/images/furblue.png",
      description:
        "The FurWell platform is designed to provide a seamless experience for managing vet care. It will allow admins to oversee multiple clinics, clinic owners to view their appointment schedules and client’s information, and pet owners to access their appointment schedules, pet’s health information, and history records.",
      technologies: ["React", "Firebase", "JavaScript", "Cloudinary"],
      role: "Full Stack Developer",
      files: [
        { name: "/files/SDD_Furwell.pdf", url: "/files/SDD_Furwell.pdf" },
        { name: "/files/SRS_Furwell.pdf", url: "/files/SRS_Furwell.pdf" },
      ],
      links: [
        { label: "GitHub", url: "https://github.com/laurenx122/marea-furwell" },
        { label: "Live Demo", url: "https://furwell.vercel.app" },
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Project`}
                  className="w-full object-contain"
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.target.src = "/images/fallback.jpg";
                  }}
                />
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center mb-2 md:mb-0">
                      <img
                        src={project.logo}
                        alt={`${project.title} Logo`}
                        className="h-10 w-10 mr-4 inline-block rounded-full"
                        onError={(e) => {
                          console.error(`Failed to load logo: ${project.logo}`);
                          e.target.src = "/images/fallback-logo.png";
                        }}
                      />
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    {project.role && (
                      <p className="text-gray-400 text-sm">
                        {project.role.toLowerCase().includes("full stack developer") ? "👩‍💻" : "👩‍💼"}
                        <strong> {project.role.split(",")[0]}</strong>
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mb-4 mt-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openModal(project)}
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};