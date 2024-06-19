import Image from "next/image";

export default function About() {
  return (
    <section className="about py-20 px-10 md:px-0 bg-white" id="about">
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
            Hi my name is ben ono and i&apos;m a full stack developer with a
            passion for creating user-friendly and efficient web applications.
            <br />
            <br />
            I was born in New York, USA and moved to Japan when I was 3 years
            old.
            <br />
            <br />I have a deep interest in programming. My favorite programming
            languages are JavaScript and Golang, and I enjoy working with both
            front-end and back-end technologies.
          </p>
        </article>
      </div>
    </section>
  );
}
