import React from "react";

const CustomTimelineItem = ({ year, text, icon, isLeft }) => (
  <div className={`flex items-center mb-8 ${isLeft ? "flex-row-reverse" : ""}`}>
    <div className={`w-1/2 ${isLeft ? "text-right pr-8" : "pl-8"}`}>
      <div
        className={`inline-block px-3 py-1 rounded-full ${
          parseInt(year) >= 2022 ? "bg-emerald-500" : "bg-blue-500"
        } text-white font-semibold mb-2`}
      >
        {year}
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        {icon}
        <p>{text}</p>
      </div>
      <p className="text-sm text-gray-500">
        Insert your desired text here. This is a sample text.
      </p>
    </div>
    <div className="w-6 h-6 bg-white border-4 border-emerald-500 rounded-full z-10"></div>
  </div>
);

export default CustomTimelineItem;
