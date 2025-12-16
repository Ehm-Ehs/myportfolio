const experiences = [
  {
    company: "ThriveAgric",
    role: "Software Developer",
    date: "April 2023 - Sept 2025",
    location: "Abuja, Nigeria",
    description: [
      "Developed custom React components for landing pages, significantly enhancing functionality and visual appeal.",
      "Adapted swiftly in a fast-paced environment, successfully managing frequently changing requirements.",
    ],
  },
  {
    company: "Quiickops",
    role: "Front-end Developer",
    date: "December 2022 - July 2025",
    location: "Abuja, Nigeria • Remote",
    description: [
      "Implemented new user-facing features while building reusable code and libraries for future use.",
      "Developed web products with a strong focus on usability and user experience, emphasizing web analytics.",
    ],
  },
  {
    company: "Public Digital",
    role: "Front-end Developer",
    date: "October 2024 - December 2024",
    location: "Remote",
    description: [
      "Developed responsive, accessible UI components using React, TypeScript, and Tailwind CSS, aligned with public-sector digital standards.",
      "Integrated Strapi headless CMS to manage and deliver dynamic content across the core service modules.",
      "Collaborated with cross-functional teams during the Phase 1 beta launch, contributing to inclusive user testing.",
    ],
  },
  {
    company: "Edusproute",
    role: "Front-end Developer",
    date: "December 2023 - November 2024",
    location: "Abuja, Nigeria • Remote",
    description: [
      "Developed interactive and responsive user interfaces using React, Next.js, and TypeScript.",
      "Leveraged various React libraries to expedite development and enhance application functionality.",
      "Designed visually appealing landing pages and dashboards, applying effective design principles.",
    ],
  },
  {
    company: "ThriveAgric (Intern)",
    role: "Tech Intern",
    date: "April 2022 - April 2023",
    description: [
      "Proficient in designing and developing user interfaces using HTML5, React, and CSS3.",
      "Improved the styling of web applications using SASS and Tailwind.",
      "Gained valuable insights into job duties and responsibilities.",
    ],
  },
];

const ExperienceCard = ({ exp }) => (
  <div className="bg-surface p-8 rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-text-main mb-1">
          {exp.role}
        </h3>
        <span className="text-primary font-bold text-lg">{exp.company}</span>
      </div>
      <div className="text-right mt-2 md:mt-0">
        <span className="block text-text-sub font-medium">{exp.date}</span>
        <span className="block text-text-sub/70 text-sm">{exp.location}</span>
      </div>
    </div>

    <ul className="space-y-3">
      {exp.description.map((item, i) => (
        <li key={i} className="flex items-start text-text-sub leading-relaxed">
          <span className="mr-3 text-secondary text-lg">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Experience() {
  return (
    <div className="py-24 px-4 md:px-0 max-w-4xl mx-auto" id="experience">
      <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-16 text-center">
        Work Experience
      </h2>
      <p>
        I’m a frontend engineer with a background in sociology, interested in
        building systems that are technically sound and genuinely usable. I
        enjoy working on complex interfaces, improving performance, and
        collaborating across disciplines.
      </p>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </div>
  );
}
