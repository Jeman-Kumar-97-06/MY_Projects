import { useState } from "react";
import CodeEditor from "./CodeEditor";
import ProblemSolver from "./ProblemSolver";

export default function TabbedSections() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Analyse_", "Solve_Problem"];
  const content = [
    <CodeEditor/>,
    <ProblemSolver/>,
  ];

  return (
    <div className="tabbed_interf p-5">
    <div className="w-full h-auto mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-white">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 text-center ${
              activeTab === index ? "border-b-2 border-[#76453B] font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 text-gray-700">
        {content[activeTab]}
      </div>
    </div>
    </div>
  );
}
