import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark } from "@uiw/codemirror-theme-github";

const ProblemSolver = () => {
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("// Solution will appear here...");

  const generateSolution = () => {
    // Mock solution generation (Replace with AI API call)
    setSolution(`// Generated solution for: ${problem}\nfunction solve() {\n  return "Solution";\n}`);
  };

  return (
    <div className="w-full mx-auto p-4 space-y-4 bg-[#F8FAE5]">
      {/* <select onChange={e=>setLang(e.target.value)} value={lang}> */}
      <select>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
      {/* Problem Input */}
      <textarea
        className="w-full p-2 border rounded-md bg-white"
        rows="4"
        placeholder="Enter problem statement..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />

      {/* Generate Button */}
      <button 
        className="px-4 py-2 bg-[#43766C] text-white rounded-md generate_sol_button"
        onClick={generateSolution}
      >
        Generate Solution
      </button>

      {/* Solution Output */}
      <CodeMirror
        value={solution}
        height="450px"
        extensions={[javascript()]}
        theme={githubDark}
        options={{ theme: "dark", lineNumbers: true }}
        className="border rounded-md"
      />
    </div>
  );
};

export default ProblemSolver;