import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaVuejs,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJsSquare,
} from "react-icons/fa";
import { SiGooglecloud, SiVuetify } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandNuxt } from "react-icons/tb";

import SectionHeader from "@/components/SectionComponent";

export default function Skills() {
  // Use colored icon
  const skills = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3 color="#1572B6" />, name: "CSS3" },
    { icon: <FaJsSquare color="#F0DB5F" />, name: "JavaScript" },
    { icon: <FaNodeJs color="#339333" />, name: "Node.js" },
    { icon: <FaVuejs color="#339333" />, name: "Vue.js" },
    { icon: <SiVuetify color="#1572B6" />, name: "Vuetify" },
    { icon: <TbBrandNuxt color="#00C55E" />, name: "Nuxt.js" },
    { icon: <FaReact color="#61DBFB" />, name: "React" },
    { icon: <RiNextjsFill color="#000000" />, name: "Next.js" },
    { icon: <FaGolang color="#00ADD8" />, name: "Golang" },
    { icon: <FaJava color="#F7DF1E" />, name: "Java" },
    { icon: <FaGithub color="#333333" />, name: "GitHub" },
    { icon: <SiGooglecloud color="#4285F4" />, name: "Google Cloud" },
  ];
  return (
    <section className="skills py-20 bg-white text-primary" id="skills">
      <SectionHeader title="Skills" />
      <div className="section-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center py-3.5 px-3 border rounded-lg shadow-lg"
          >
            <div className="text-4xl mr-5">{skill.icon}</div>
            <h3 className="text-xl font-semibold ">{skill.name}</h3>
          </div>
        ))}
      </div>{" "}
    </section>
  );
}
