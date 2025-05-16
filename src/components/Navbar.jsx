import { useState, useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      if (home && scrollPosition >= home.offsetTop && scrollPosition < (about?.offsetTop || Infinity)) {
        setActiveSection("home");
      } else if (about && scrollPosition >= about.offsetTop && scrollPosition < (projects?.offsetTop || Infinity)) {
        setActiveSection("about");
      } else if (projects && scrollPosition >= projects.offsetTop && scrollPosition < (contact?.offsetTop || Infinity)) {
        setActiveSection("projects");
      } else if (contact && scrollPosition >= contact.offsetTop) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const getNavLinkClass = (section) => {
    return activeSection === section ? "text-blue-400 font-semibold underline text-lg" : "";
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Angelina<span className="text-blue-500">.Mier</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={getNavLinkClass("home")}>
              {" "}
              Home
            </a>
            <a href="#about" className={getNavLinkClass("about")}>
              {" "}
              About{" "}
            </a>
            <a href="#projects" className={getNavLinkClass("projects")}>
              {" "}
              Projects{" "}
            </a>
            <a href="#contact" className={getNavLinkClass("contact")}>
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};