export default function Projects() {
  return (
    <section className="projects py-20 bg-primary" id="projects">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article className="project">
          <h3 className="project_title">Project 1</h3>
          <p className="project_description">Project 1 description</p>
        </article>
      </div>
    </section>
  );
}
