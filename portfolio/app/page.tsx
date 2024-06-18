"use client";
import { useEffect } from "react";
import Head from "next/head";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperiences from "./components/WorkExperiences";
import Contact from "./components/Contact";

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

  const contents = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ];
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Ben Ono Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="h-[10vh] w-full bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-primary-100">
                My Portfolio
              </a>
            </div>
            <div className="sm:block md:hidden">
              {/* TODO open menu on click */}
              <button className="bg-primary-100 text-primary-700 font-bold py-2 px-4 rounded">
                Menu
              </button>
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
      <header className="h-[90vh] bg-primary flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-primary-100" id="home">
          Hi, I&apos;m <span className="text-accent">Ben Ono</span>
        </h1>
        <p className="mt-3 text-2xl">This is a showcase of my work.</p>
      </header>
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
