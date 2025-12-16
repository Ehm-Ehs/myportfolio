import React from "react";

const certifications = [
  {
    title: "TECHY TRAIN, SOFTWARE BOOTCAMP",
    date: "FEB 2021",
    issuer: "Techy Train",
  },
  {
    title: "ANDELA, REACT PROGRAM — PLURALSIGHT",
    date: "OCT 2023",
    issuer: "Andela / Pluralsight",
  },
];

export default function Certifications() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h2 className="text-lg font-bold text-text-sub uppercase tracking-widest mb-8 px-2">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-surface p-6 rounded-xl border border-border flex flex-col justify-center"
          >
            <h3 className="text-md font-bold text-text-main mb-1 leading-tight">
              {cert.title}
            </h3>
            <p className="text-xs font-semibold text-text-sub uppercase tracking-wider mb-2">
              {cert.issuer}
            </p>
            <p className="text-xs font-medium text-text-sub">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
