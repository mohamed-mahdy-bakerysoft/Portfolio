import SectionHeader from "@/components/SectionComponent";

export default function WorkExperiences() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Eltex Inc.",
      period: "Jul 2020 - Present",
      description:
        "Developed and maintained web applications using Vue.js , Golang and Google Cloud Platform.",
    },
    {
      role: "Backend Developer",
      company: "Eltex Inc.",
      period: "Apr 2019 - Jul 2020",
      description:
        "Developed an e-commerce system using Java, focusing on backend services and database management.",
    },
  ];

  return (
    <section
      className="work-experiences py-20 bg-primary text-primary-100"
      id="work"
    >
      <SectionHeader title="Work Experiences" />

      <div className="section-main mt-10">
        <div className="relative border-l border-gray-200 dark:border-primary-900">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-primary-400 border-[1px] border-accent-400">
                <svg
                  className="w-3 h-3 text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center ml-2 mb-1 text-lg font-semibold text-primary-100">
                <span className="text-2xl">{experience.role}</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-1 rounded dark:bg-blue-200 dark:text-gray-800 ml-3">
                  {experience.company}
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.period}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  <div>WorkExperiences</div>;
}
