import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript"; //Javascript Language Support
import { python } from '@codemirror/lang-python'; //Python Language Support
import { cpp } from '@codemirror/lang-cpp'; //C/C++ Language Support
import { githubDark } from "@uiw/codemirror-theme-github";

const CodeEditor = () => {
  const [code, setCode]  = useState("//Write your code to analyse...\nconsole.log('username')");
  const [lang, setLang]  = useState('javascript');
  const [exte, setExte]  = useState([javascript()])

  const handleCodeChange = (value) => {
    setCode(value);
  };
  
  useEffect(()=>{
    if (lang==='javascript') {
      setCode('//Write your code to analyse...\nconsole.log("username")');
      setExte([javascript()]);
    }
    else if (lang === 'python') {
      setCode("#Write your code o analyse...\nprint('jeman')")
      setExte([python()])
    }
  },[lang])

  return (
    <div className="w-full h-screen p-3 bg-[#F8FAE5]">
      <select onChange={e=>setLang(e.target.value)} value={lang}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
      <CodeMirror
        value={code}
        height="450px"
        theme={githubDark}
        extensions={exte}
        onChange={handleCodeChange}
        className="border border-gray-700 rounded-lg"
      />
      <button className='analyse-btn cursor-pointer bg-[#43766C] mt-3 rounded-sm'>Analyse</button>
      <div className="w-full border-2 mt-10 h-[250px] p-5 bg-white">
          // your output
      </div>
    </div>
  );
};

export default CodeEditor;
