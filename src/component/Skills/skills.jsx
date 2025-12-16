import React, { useState, useRef, useEffect } from "react";

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

export default function InteractiveCircles({ technologies }) {
  const [stoppedCircle, setStoppedCircle] = useState(null);
  const [stoppedPosition, setStoppedPosition] = useState(null);
  const [activeDialog, setActiveDialog] = useState(null);
  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
  const [resumeTimer, setResumeTimer] = useState(null);
  const containerRef = useRef(null);

  const handleCircleClick = (event, techName) => {
    event.stopPropagation();
    const svgRect = event.currentTarget.ownerSVGElement.getBoundingClientRect();
    const circleX = ((event.clientX - svgRect.left) / svgRect.width) * 100 - 50;
    const circleY = ((event.clientY - svgRect.top) / svgRect.height) * 100 - 50;

    if (stoppedCircle === techName) {
      setStoppedCircle(null);
      setStoppedPosition(null);
      setActiveDialog(null);
      if (resumeTimer) clearTimeout(resumeTimer);
    } else {
      setStoppedCircle(techName);
      setStoppedPosition({ x: circleX, y: circleY });
      setActiveDialog(techName);
      setDialogPosition({ top: `${circleY + 50}%`, left: `${circleX}%` });

      const timer = setTimeout(() => {
        setStoppedCircle(null);
        setStoppedPosition(null);
        setActiveDialog(null);
      }, 5000);
      setResumeTimer(timer);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setStoppedCircle(null);
        setStoppedPosition(null);
        setActiveDialog(null);
        if (resumeTimer) clearTimeout(resumeTimer);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      if (resumeTimer) clearTimeout(resumeTimer);
    };
  }, [resumeTimer]);

  return (
    <div ref={containerRef} className="relative w-full h-[100vh] ">
      <svg
        className="absolute  w-full h-full"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {technologies.map((tech) => {
          const animationProps = {
            x1: getRandomValue(-40, 40),
            y1: getRandomValue(-40, 40),
            x2: getRandomValue(-40, 40),
            y2: getRandomValue(-40, 40),
            duration: getRandomValue(20, 40),
            delay: getRandomValue(0, 15),
          };

          const isStopped = tech.name === stoppedCircle;

          // Generate random positions for cx and cy to scatter the circles
          const cx = getRandomValue(-80, 80);
          const cy = getRandomValue(-80, 80);

          return (
            <g
              key={tech.name}
              onClick={(e) => handleCircleClick(e, tech.name)}
              transform={
                isStopped && stoppedPosition
                  ? `translate(${stoppedPosition.x}, ${stoppedPosition.y})`
                  : undefined
              }
            >
              <circle
                cx={cx}
                cy={cy}
                r="20"
                fill={tech.color}
                fillOpacity="0.7"
                className="cursor-pointer"
              >
                {!isStopped && (
                  <animateMotion
                    dur={`${animationProps.duration}s`}
                    repeatCount="indefinite"
                    path={`M0,0 Q${animationProps.x1},${animationProps.y1} ${animationProps.x2},${animationProps.y2} T0,0`}
                    begin={`-${animationProps.delay}s`}
                  />
                )}
              </circle>
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dy=".3em"
                fill="white"
                fontSize="4.5"
                fontWeight="bold"
                className="pointer-events-none"
              >
                {!isStopped && (
                  <animateMotion
                    dur={`${animationProps.duration}s`}
                    repeatCount="indefinite"
                    path={`M0,0 Q${animationProps.x1},${animationProps.y1} ${animationProps.x2},${animationProps.y2} T0,0`}
                    begin={`-${animationProps.delay}s`}
                  />
                )}
                {tech.name}
              </text>
            </g>
          );
        })}
      </svg>
      {activeDialog && (
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg max-w-xs"
          style={{
            top: dialogPosition.top,
            left: dialogPosition.left,
            transform: "translate(-50%, -100%)",
          }}
        >
          <h3 className="font-bold mb-2">{activeDialog}</h3>
          <p>
            {
              technologies.find((tech) => tech.name === activeDialog)
                ?.description
            }
          </p>
        </div>
      )}
    </div>
  );
}
