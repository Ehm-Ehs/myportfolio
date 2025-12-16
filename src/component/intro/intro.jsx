import Fem from "../images/intro.png";
import { ArrowRight, FileText } from "lucide-react";

function Intro() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(100vh-140px)] py-12 lg:py-24 gap-12 lg:gap-20 max-w-7xl mx-auto">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-start text-left space-y-8 lg:max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-main leading-tight tracking-tight">
            Mariam Salami
            <br />
            Frontend Engineer <br className="hidden lg:block" />
            building scalable,{" "}
            <span className="pr-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              high-performance
            </span>
            web products
          </h1>

          <p className="text-lg md:text-xl text-text-sub max-w-2xl leading-relaxed">
            I design and ship production-ready React and TypeScript applications
            focused on performance, usability, and building UI systems that work
            at scale.
          </p>

          {/* Proof Strip */}
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary uppercase tracking-wider">
            <span>React</span>
            <span className="text-text-sub/30">•</span>
            <span>TypeScript</span>
            <span className="text-text-sub/30">•</span>
            <span>Performance Optimization</span>
            <span className="text-text-sub/30">•</span>
            <span>Scalable UI Systems</span>
            <span className="text-text-sub/30">•</span>
            <span>Production Applications</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
          <button className="bg-primary text-btn-text px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
            View Selected Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="border-2 border-border text-text-main px-8 py-4 rounded-full font-bold text-lg hover:bg-surface hover:border-text-main transition-all duration-200 flex items-center justify-center gap-2">
            <FileText className="w-5 h-5" />
            Download Resume
          </button>
        </div>
      </div>

      {/* Right: Avatar (Smaller, Supportive) */}
      <div className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-float">
        {/* Simple decorative blob behind if needed, keeping it clean for now */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 dark:opacity-30"></div>
        <img
          src={Fem}
          alt="Mariam Salami"
          className="relative w-full h-full object-contain drop-shadow-2xl z-10"
        />
      </div>
    </div>
  );
}

export default Intro;
