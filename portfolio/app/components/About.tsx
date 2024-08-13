import Image from "next/image";
import { cn } from "../../lib/utils";

export default function About({ className }: { className?: string }) {
  return (
    // <section className=" about py-20 px-10 bg-white" id="about">
    <section
      className={cn("animate-fade-in about py-20 px-10 bg-white", className)}
      id="about"
    >
      <div className="grid lg:grid-cols-2 gap-10 max-w-[1200px] mx-auto place-items-center">
        <article className="hidden lg:block">
          <Image
            className="rounded-lg"
            src="/about-img.jpg"
            alt="Ben Ono"
            width={300}
            height={300}
          />
        </article>
        <article className="self-start text-primary">
          <h2 className="text-center lg:text-start text-4xl font-bold">
            About
          </h2>
          <div className="bg-accent w-20 h-1 mx-auto lg:ml-0 mb-10"></div>
          <p className="about_description">
            Hi my name is ben ono and I&apos;m a full stack developer with a
            passion for creating user-friendly and efficient web applications.
            <br />
            <br />
            I was born in New York, USA and moved to Japan when I was 3 years
            old.
            <br />
            <br />I have a deep interest in programming. My favorite programming
            languages are JavaScript, Vue.js, React.js and Golang, and I enjoy
            working with both front-end and back-end technologies.
          </p>
        </article>
      </div>
    </section>
  );
}
