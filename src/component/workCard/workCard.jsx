import "./workCard.css";

function WorkCard({ work }) {
  return (
    <div className="work-box bg-surface rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group">
      {/* Image / Preview Section */}
      <div className="workImgContainer w-full h-48 md:h-64 relative bg-gray-50 dark:bg-gray-800">
        <iframe
          src={work.link}
          title={work.title}
          className="w-full h-full object-cover border-none pointer-events-none" // Disable interaction for scrolling clarity on mobile
          loading="lazy"
          tabIndex="-1"
        />
        {/* Overlay to prevent iframe interaction hijacking scroll */}
        <div className="absolute inset-0 bg-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <h4 className="text-2xl font-bold text-text-main mb-1">
            {work.title}
          </h4>
          <p className="text-sm font-medium text-text-sub uppercase tracking-wide">
            {work.problem}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {work.stack.split(", ").map((tech, i) => (
              <span
                key={i}
                className="text-xs font-semibold bg-background text-text-sub px-2 py-1 rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-border">
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wider group-active:scale-95 transition-transform"
          >
            Visit Site
            <span className="ml-2 transform transition-transform group-hover:translate-x-1 duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
