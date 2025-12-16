import React from "react";

const DottedLine = ({
  year,
  title,
  description,
  color,
  isLeft,
  isActive,
  onClick,
}) => (
  <div
    className={`flex flex-col md:items-center ${
      isLeft ? "md:flex-row" : "md:flex-row-reverse"
    } mb-12 md:mb-16 relative`}
  >
    {/* Left Side (or Top on Mobile) */}
    <div
      className={`w-full md:w-1/2 flex justify-center md:block ${
        isLeft ? "md:pr-8 md:text-right" : "md:pl-8 text-center md:text-left"
      } mb-4 md:mb-0`}
    >
      {/* On desktop, this holds year/bubble for one side, or content for other. 
           Wait, DottedLine structure is: LeftDiv (Bubble), CenterDiv (Dot), RightDiv (Content).
           Actually, the original structure was:
           Div1 (w-1/2): Bubble
           Div2 (w-8): Dot/Line Logic
           Div3 (w-1/2): Content
           
           Wait, looking at original code:
           Div1 is "w-1/2 ... text-right". It contains the BUBBLE.
           Div2 is "w-8 relative". Center dot.
           Div3 is "w-1/2 ... pl-8". Content.
           
           This means the content is ALWAYS in Div3?
           NO.
           isLeft ? "flex-row" : "flex-row-reverse"
           If isLeft=true: Div1(Bubble) -> Div2 -> Div3(Content). Bubble on Left. Content on Right.
           If isLeft=false (reverse): Div3(Content) -> Div2 -> Div1(Bubble). Content on Left. Bubble on Right.
           
           Okay, so logic is consistent.
           
           Mobile Plan: 
           Use flex-col.
           Order: Bubble first? Or Content?
           Usually: Bubble (Company), then Content.
           
           Structure:
           Div1 (Bubble Node): w-full, center alignment.
           Div2 (Dot): Hide on mobile? Or keep as decoration?
           Div3 (Content): w-full, center alignment.
       */}
      <div
        className={`inline-flex items-center justify-center w-32 h-32 rounded-full text-white text-sm font-bold cursor-pointer transition-transform duration-300 shadow-md text-center px-2 leading-tight ${
          isActive ? "scale-110" : "hover:scale-105"
        }`}
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {year}
      </div>
    </div>

    {/* Center Line/Dot - Hidden on mobile, visible on desktop */}
    <div className="hidden md:block w-8 relative flex-shrink-0">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-6 h-6 rounded-full border-4 transition-transform duration-300 ${
            isActive ? "scale-110" : ""
          }`}
          style={{ borderColor: color }}
        >
          <div
            className={`w-3 h-3 rounded-full m-0.5`}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>

    {/* Right Side (Content) */}
    <div
      className={`w-full md:w-1/2 ${
        isLeft ? "md:pl-8" : "md:pr-8"
      } text-center md:text-left`}
    >
      {isActive && (
        <div
          className="animate-fade-in bg-white p-6 rounded-lg shadow-lg border-l-4 mt-4 md:mt-0"
          style={{ borderColor: color }}
        >
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <div className="text-gray-600 text-left">{description}</div>
          {/* Force text-left inside card for readability */}
        </div>
      )}
    </div>
  </div>
);

export default DottedLine;
