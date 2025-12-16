import WorkCard from "../workCard/workCard";
import "./work.css";

function Work() {
  const works = [
    {
      title: "QuiickopsHR",
      problem: "Streamlining HR & Payroll Management",
      stack: "React, TypeScript, Redux, Tailwind",
      link: "https://www.quiickopshr.com/",
    },
    {
      title: "Movie Rec",
      problem: "Discover movies tailored to your taste",
      stack: "React, TMDB API, CSS Modules",
      link: "https://movierecomen.netlify.app/",
    },
    {
      title: "Pair Form",
      problem: "Simplifying form grouping and data collection",
      stack: "React, Firebase, Styled Components",
      link: "https://pair-form.netlify.app/",
    },
  ];

  return (
    <div
      className="work-section py-20 px-4 md:px-10 max-w-6xl mx-auto"
      id="work"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-lg font-bold text-text-sub uppercase tracking-widest mb-2 px-2">
            Selected Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main">
            Featured Projects
          </h3>
        </div>
        <a
          href="https://github.com/Ehm-Ehs"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center font-medium text-primary hover:underline"
        >
          View all projects →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>

      <div className="md:hidden text-center">
        <a
          href="https://github.com/Ehm-Ehs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center font-bold text-primary text-lg border-b-2 border-transparent hover:border-primary transition-all"
        >
          View all projects →
        </a>
      </div>
    </div>
  );
}

export default Work;
