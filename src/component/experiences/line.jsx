import {
  LineChart,
  Store,
  Building2,
  Users2,
  BarChart3,
  Rocket,
} from "lucide-react";
import CustomTimelineItem from "./customTimeline";

export default function VerticalTimeline() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="relative">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-200"
          style={{
            height: "calc(100% - 80px)",
            top: "40px",
            borderRadius: "999px",
          }}
        >
          <svg
            viewBox="0 0 10 600"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M5,0 Q10,300 5,600"
              stroke="rgb(167 243 208)"
              strokeWidth="10"
              fill="none"
            />
          </svg>
        </div>
        <CustomTimelineItem
          year="2024"
          text="Placeholder"
          icon={<Rocket className="w-5 h-5 text-emerald-500" />}
          isLeft={false}
        />
        <CustomTimelineItem
          year="2023"
          text="Placeholder"
          icon={<BarChart3 className="w-5 h-5 text-emerald-500" />}
          isLeft={true}
        />
        <CustomTimelineItem
          year="2022"
          text="Placeholder"
          icon={<Store className="w-5 h-5 text-emerald-500" />}
          isLeft={false}
        />
        <CustomTimelineItem
          year="2021"
          text="Placeholder"
          icon={<Users2 className="w-5 h-5 text-blue-500" />}
          isLeft={true}
        />
        <CustomTimelineItem
          year="2020"
          text="Placeholder"
          icon={<Building2 className="w-5 h-5 text-blue-500" />}
          isLeft={false}
        />
        <CustomTimelineItem
          year="2019"
          text="Placeholder"
          icon={<LineChart className="w-5 h-5 text-blue-500" />}
          isLeft={true}
        />
      </div>
    </div>
  );
}
