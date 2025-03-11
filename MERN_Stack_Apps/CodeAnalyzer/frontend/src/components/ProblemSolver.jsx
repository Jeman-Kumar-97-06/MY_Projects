import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from '@codemirror/lang-python';
import { githubDark } from "@uiw/codemirror-theme-github";

const ProblemSolver = () => {
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("// Solution will appear here...");
  const [lang,setLang] = useState('javascript');
  const [exte,setExte] = useState([javascript()]);

  const generateSolution = async () => {
    // Mock solution generation (Replace with AI API call)
    if (lang === 'python') {
      setSolution("#Please wait. The server is a bit slow 😿")
    }
    if (lang==='javascript') {
      setSolution('//Solution will appear please wait 😿')
    }
    setSolution('//Solution will appear please wait')
    const resp = await fetch('https://my-projects-h056.onrender.com/api/AIsolve',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({prob:problem,language:lang})
    })
    const resu = await resp.json();
    setSolution(resu.resp);
  };

  useEffect(()=>{
    if (lang==='javascript') {
      setExte([javascript()]);
      setSolution('//Solution will appear here...');
    } else if (lang === 'python') {
      setExte([python()]);
      setSolution("#Solution will appear here...")
    }
  },[lang])

  return (
    <div className="w-full mx-auto p-4 space-y-4 bg-[#F8FAE5]">
      <select onChange={e=>setLang(e.target.value)} value={lang}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
      {/* Problem Input */}
      <textarea
        className="w-full p-2 border rounded-md bg-white"
        rows="4"
        placeholder="Enter/Paste problem statement..."
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />

      {/* Generate Button */}
      <button 
        className="px-4 py-2 text-black bg-[#43766C] rounded-md generate_sol_button"
        onClick={generateSolution}
      >
        Generate Solution
      </button>

      {/* Solution Output */}
      <CodeMirror
        value={solution}
        height="450px"
        extensions={exte}
        theme={githubDark}
        options={{ theme: "dark", lineNumbers: true }}
        className="border rounded-md"
      />
    </div>
  );
};

export default ProblemSolver;