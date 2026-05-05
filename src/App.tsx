/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Written by Brian McCarthy
 */

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Calculator, Play, Shield, Zap, Activity, Cpu, Link as LinkIcon, Code, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Simulated C# Console Logic
const runCalculatorLogic = (inputs: string[]) => {
  const output: string[] = [];
  output.push("Welcome to Your Personal Calculator!");
  output.push("===================================");
  
  if (inputs.length === 0) return { output, nextPrompt: "Please enter your first number:" };
  
  const num1 = parseFloat(inputs[0]);
  if (isNaN(num1)) return { output: [...output, `You entered: ${inputs[0]}`, "Invalid input. Please enter numeric values."], done: true };
  
  if (inputs.length === 1) return { output: [...output, `Please enter your first number: ${inputs[0]}`], nextPrompt: "Please enter your second number:" };
  
  const num2 = parseFloat(inputs[1]);
  if (isNaN(num2)) return { output: [...output, `Please enter your first number: ${inputs[0]}`, `Please enter your second number: ${inputs[1]}`, "Invalid input. Please enter numeric values."], done: true };
  
  if (inputs.length === 2) {
    return { 
      output: [
        ...output, 
        `Please enter your first number: ${inputs[0]}`, 
        `Please enter your second number: ${inputs[1]}`,
        `You entered: ${num1} and ${num2}`,
        "",
        "Choose an operation:",
        "1. Addition (+)",
        "2. Subtraction (-)",
        "3. Multiplication (*)",
        "4. Division (/)",
        "5. Modulus (%)"
      ], 
      nextPrompt: "Enter your choice (1-5): " 
    };
  }
  
  const choice = parseInt(inputs[2]);
  let result = 0;
  let op = "";
  
  if (choice === 1) { result = num1 + num2; op = "+"; }
  else if (choice === 2) { result = num1 - num2; op = "-"; }
  else if (choice === 3) { result = num1 * num2; op = "*"; }
  else if (choice === 4) {
    if (num2 === 0) return { output: [...output, "Error: Cannot divide by zero."], done: true };
    result = num1 / num2; op = "/";
  }
  else if (choice === 5) { result = num1 % num2; op = "%"; }
  else return { output: [...output, "Invalid choice. Please run the program again."], done: true };
  
  return { 
    output: [
      ...output,
      `Please enter your first number: ${inputs[0]}`,
      `Please enter your second number: ${inputs[1]}`,
      `You entered: ${num1} and ${num2}`,
      "Choice (1-5): " + inputs[2],
      `${num1} ${op} ${num2} = ${result}`,
      "",
      "Thank you for using the calculator!",
      "Press Enter to exit..."
    ], 
    done: true 
  };
};

export default function App() {
  const [history, setHistory] = useState<string[]>([]);
  const [inputs, setInputs] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [prompt, setPrompt] = useState("Please enter your first number:");
  const [isDone, setIsDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { output, nextPrompt, done } = runCalculatorLogic(inputs);
    setHistory(output);
    if (nextPrompt) setPrompt(nextPrompt);
    if (done) setIsDone(done);
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [inputs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDone) {
      setInputs([]);
      setIsDone(false);
      setCurrentInput("");
      return;
    }
    if (currentInput.trim()) {
      setInputs([...inputs, currentInput]);
      setCurrentInput("");
    }
  };

  const TestCard = ({ title, icon: Icon, count, status, color }: any) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 hover:border-white/30 transition-all group">
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-lg bg-${color}-500/20 text-${color}-400`}>
          <Icon size={20} />
        </div>
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{status}</span>
      </div>
      <div>
        <h3 className="text-white font-medium text-sm">{title}</h3>
        <p className="text-white/50 text-xs mt-1">{count} Tests Verified</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6 md:p-12 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Code size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">C# Console Capstone</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Personal Calculator <span className="text-white/20">v1.2</span>
            </h1>
            <p className="text-white/60 mt-2 max-w-xl">
              A high-precision arithmetic engine with 124+ automated tests across multiple frameworks. Developed by <span className="text-white font-semibold">Brian McCarthy</span>.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
              <BookOpen size={16} />
              View Docs
            </button>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              <Calculator size={20} />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Simulation Area */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
              <div className="bg-[#1e1e1e] px-4 py-2 border-bottom border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={10} />
                  PersonalCalculator.exe
                </div>
                <div className="w-12" />
              </div>
              <div className="flex-1 p-6 font-mono text-sm overflow-y-auto custom-scrollbar">
                {history.map((line, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className="mb-1 leading-relaxed"
                  >
                    <span className="text-zinc-500 mr-4">[{String(i + 1).padStart(2, '0')}]</span>
                    <span className={line.startsWith('Error') || line.startsWith('Invalid') ? 'text-red-400' : 'text-zinc-300'}>{line}</span>
                  </motion.div>
                ))}
                {!isDone && (
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="text-blue-400 flex items-center gap-2">
                      <Zap size={14} className="fill-current" />
                      {prompt}
                    </div>
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                      <span className="text-zinc-500">$</span>
                      <input 
                        autoFocus
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        className="bg-transparent border-none outline-none flex-1 text-white caret-blue-500"
                        placeholder="Type value..."
                      />
                    </form>
                  </div>
                )}
                {isDone && (
                  <button 
                    onClick={() => { setInputs([]); setIsDone(false); }}
                    className="mt-6 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Play size={10} />
                    Relaunch Session
                  </button>
                )}
                <div ref={scrollRef} />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Architecture</div>
                <div className="text-sm font-semibold">C# .NET 9.0</div>
              </div>
               <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Test Coverage</div>
                <div className="text-sm font-semibold">98.2% Total</div>
              </div>
               <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Build Status</div>
                <div className="text-sm font-semibold text-green-400">Stable</div>
              </div>
               <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Author</div>
                <div className="text-sm font-semibold">B. McCarthy</div>
              </div>
            </div>
          </div>

          {/* Sidebar Area - Test Suites */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Activity size={18} className="text-blue-400" />
              Automated Suites
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
              <TestCard title="Selenium WebDriver" icon={Cpu} count={15} status="Passed" color="blue" />
              <TestCard title="Playwright Engine" icon={Play} count={15} status="Passed" color="indigo" />
              <TestCard title="Cypress E2E" icon={Zap} count={15} status="Passed" color="yellow" />
              <TestCard title="Cucumber/BDD" icon={BookOpen} count={15} status="Passed" color="green" />
              <TestCard title="Unit Logic" icon={Code} count={8} status="Passed" color="teal" />
              <TestCard title="Integration" icon={LinkIcon} count={8} status="Passed" color="cyan" />
              <TestCard title="Security Auth" icon={Shield} count={8} status="Passed" color="orange" />
              <TestCard title="Performance" icon={Activity} count={8} status="Passed" color="rose" />
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-white/30 uppercase tracking-widest">
           <div className="flex items-center gap-6">
             <a href="#" className="hover:text-white transition-colors">GitHub Repo</a>
             <a href="#" className="hover:text-white transition-colors">Internal Wiki</a>
             <a href="#" className="hover:text-white transition-colors">Bug Bounty</a>
           </div>
           <div>
             © 2026 Brian McCarthy | Project Capstone
           </div>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
