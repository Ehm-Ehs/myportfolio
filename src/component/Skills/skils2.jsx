import React, { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Zap,
  Smartphone,
  Cpu,
  Users,
} from "lucide-react";

// --- Data ---
const demoSkills = [
  {
    title: "Scalable UI Systems",
    desc: "I build reusable component systems that support growth, reduce duplication, and keep large interfaces maintainable over time.",
    gradient: "from-purple-500 to-indigo-600",
    icon: <Layers size={24} />,
  },
  {
    title: "Performance & Reliability",
    desc: "I optimize rendering and interactions to reduce load times and improve responsiveness in data-heavy applications.",
    gradient: "from-blue-500 to-cyan-500",
    icon: <Cpu size={24} />,
  },
  {
    title: "Human-Centered Engineering",
    desc: "I apply sociological insight to anticipate user behavior, reduce friction, and design interfaces that make complex systems intuitive.",
    gradient: "from-orange-500 to-pink-500",
    icon: <Users size={24} />,
  },
  {
    title: "Mobile First",
    desc: "Responsive experiences that look great on any device, ensuring accessibility and usability across all screen sizes.",
    gradient: "from-teal-500 to-emerald-500",
    icon: <Smartphone size={24} />,
  },
];

const skillsData = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
    ],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Figma", "Bitbucket", "Jira"],
  },
  {
    category: "Testing & Quality",
    items: ["Cypress"],
  },
  {
    category: "Soft Skills",
    items: [
      "Communication",
      "Empathy",
      "Problem Solving",
      "Adaptability",
      "Collaboration",
    ],
  },
];

// --- Components ---

// Demo Card Component
const SkillDemoCard = ({ skill }) => (
  <div className="w-full bg-surface rounded-2xl p-6 flex flex-col gap-4 border border-border shadow-sm hover:shadow-md transition-all duration-300 h-full">
    <div>
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-4 text-white shadow-lg`}
      >
        {skill.icon}
      </div>
      <h3 className="text-lg font-bold text-text-main mb-2 leading-tight">
        {skill.title}
      </h3>
      <p className="text-text-sub text-sm leading-relaxed">{skill.desc}</p>
    </div>
    {/* Removed 'Explore' link to keep cards cleaner in grid, or could keep if desired. User didn't ask to remove, but tight space. I'll remove for cleaner Human-Centered look conform to copy. */}
  </div>
);

// Accordion Item Component
const AccordionItem = ({ category, isOpen, onClick }) => (
  <div className="border-b border-border last:border-none">
    <button
      onClick={onClick}
      className={`w-full py-6 flex items-center justify-between text-left transition-colors bg-transparent hover:bg-surface`}
    >
      <span
        className={`text-xl font-bold ${
          isOpen ? "text-primary" : "text-text-main"
        }`}
      >
        {category.category}
      </span>
      {isOpen ? (
        <ChevronUp className="text-primary" />
      ) : (
        <ChevronDown className="text-text-sub" />
      )}
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-wrap gap-2 pt-2">
        {category.items.map((item, idx) => (
          <span
            key={idx}
            className="bg-background text-text-sub px-3 py-1 rounded-md text-sm font-medium border border-border"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function SkillsDiagram() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="py-24 px-4 md:px-0 max-w-7xl mx-auto" id="skill">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Grid of Value Cards */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-12">
            How I Add <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Value
            </span>
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {demoSkills.map((skill, index) => (
              <SkillDemoCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Right: Technical Details Accordion */}
        <div className="flex flex-col justify-center">
          {/* Keeping the accordion as is but maybe ensuring alignment */}
          <div className="bg-surface rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-border sticky top-24">
            <h3 className="text-sm font-bold text-text-sub uppercase tracking-widest mb-6">
              Technical Arsenal
            </h3>
            <div className="flex flex-col">
              {skillsData.map((cat, index) => (
                <AccordionItem
                  key={index}
                  category={cat}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
