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
        <article className="about_text text-primary">
          <h2 className="text-3xl font-bold">About</h2>
          <div className="underline-left"></div>
          <p className="about_description">
            I&apos;m a full stack developer with a passion for creating
            user-friendly and efficient web applications.
          </p>
        </article>
      </div>
    </section>
  );
}
