import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa"

export default function Header() {
  const contacts = [
    { icon: <FaGithub />, link: "https://github.com/benono" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ben-ono-53179a257/",
    },
    { icon: <FaDev />, link: "https://dev.to/benono" },
  ]
  return (
    <header className="h-[90vh] bg-primary flex flex-col items-center justify-center w-full flex-1 px-20 ">
      <h1 className="text-6xl font-bold text-primary-100" id="home">
        Hi👍 I&apos;m <span className="text-accent">Ben Ono </span>
      </h1>
      <div className="mt-3 text-2xl w-[500px] text-primary-100">
        <p>I&apos;m a full stack developer based in Vancouver, Canada.</p>
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
    </header>
  )
}
