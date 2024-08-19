import Navigation from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperiences from "./components/WorkExperiences";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Skills />
      <WorkExperiences />
      <Blogs />
      <Contact />

      <footer className="h-[10vh] bg-primary p-5 flex items-center justify-center">
        <p className="text-white text-center">© 2024 Ben Ono</p>
      </footer>
    </>
  );
}
