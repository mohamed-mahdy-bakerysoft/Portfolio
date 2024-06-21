"use client";
import { useEffect, useState } from "react";

import Head from "next/head";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperiences from "./components/WorkExperiences";
import Contact from "./components/Contact";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    const handleNavClick = (event: Event) => {
      event.preventDefault();
      const targetId = (event.target as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => link.addEventListener("click", handleNavClick));
    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavClick)
      );
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetId = (e.target as HTMLAnchorElement)
      .getAttribute("href")
      ?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const contents = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];

  const contacts = [
    { icon: <FaGithub />, link: "https://github.com/benono" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ben-ono-53179a257/",
    },
    { icon: <FaDev />, link: "https://dev.to/benono" },
  ];
  return (
    <>
      <nav className="h-[10vh] w-full bg-primary shadow-md">
        <div className="px-4">
          <div className="flex items-center justify-end h-16">
            <div className="sm:block md:hidden">
              {/* TODO open menu on click */}
              <GiHamburgerMenu
                className="text-accent text-3xl fixed top-4 right-4"
                onClick={() => setIsMenuOpen(true)}
              />

              {isMenuOpen && (
                // FIXME want to make it like drawer
                <div className="fixed top-0 left-0 w-full h-full bg-primary-900 bg-opacity-90 flex flex-col items-center justify-center z-50">
                  <button
                    className="absolute top-4 right-4 text-primary-100 text-3xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    &times;
                  </button>
                  {contents.map((content) => (
                    <a
                      href={`#${content.id}`}
                      key={content.id}
                      className="text-primary-100 hover:text-accent transition duration-500 px-3 py-2 rounded-md text-lg font-medium my-2"
                      onClick={(e) => handleSmoothScroll(e)}
                    >
                      {content.title}
                    </a>
                  ))}
                  <div className="mt-5 flex justify-center gap-10">
                    {contacts.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        className="text-primary-100 hover:scale-110 transition duration-300"
                      >
                        {contact.icon}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {contents.map((content) => (
                  <a
                    href={`#${content.id}`}
                    key={content.id}
                    className="text-primary-100 hover:text-accent transition duration-500 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {content.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Header />

      <About />
      <Projects />
      <Skills />
      <WorkExperiences />
      <Contact />

      <footer className="h-[10vh] bg-primary p-5 flex items-center justify-center">
        <p className="text-white text-center">© 2024 Ben Ono</p>
      </footer>
    </>
  );
}
