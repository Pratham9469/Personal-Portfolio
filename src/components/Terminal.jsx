import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, FileCode, Cpu } from 'lucide-react';

export function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('developer.ts');
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false); // Tracks if execution has happened

  const codeSnippets = {
    'developer.ts': `const developer = {
  name: "Pratham Seth",
  role: "Software Developer",
  status: "Available for Hire",
  coreStack: ["React", "JavaScript", "Tailwind CSS", "GSAP"],
  architecture: "Clean, Scalable & Accessible UI",

  runBuild() {
    return "🚀 Ready to turn complex ideas into smooth experiences.";
  }
};`,
    'config.json': `{
  "performance": "99+",
  "responsive": true,
  "theme": "Dark Modern Glassmorphic",
  "smoothScroll": "Enabled"
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    if (hasRun || isRunning) return; // Prevent multiple runs

    setIsRunning(true);
    setLogs((prev) => [...prev, '> Executing developer.ts...']);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '✔ Stack verified: React, Tailwind, GSAP',
        '🚀 Output: Ready to turn complex ideas into smooth experiences.'
      ]);
      setIsRunning(false);
      setHasRun(true); // Disable further runs
    }, 800);
  };

  return (
    <div className="w-full mt-10 rounded-xl border border-gray-800 bg-[#0c1017]/80 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-sm">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#121824] border-b border-gray-800/80">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          <span className="ml-3 text-xs text-gray-400 font-sans flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" /> pratham@dev-machine:~
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center space-x-1">
          {Object.keys(codeSnippets).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-xs rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#1e293b] text-cyan-400 border border-cyan-500/30'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'
              }`}
            >
              <FileCode className="w-3 h-3" />
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Code Viewport */}
      <div className="p-4 overflow-x-auto relative group">
        {/* Action Controls */}
        <div className="absolute top-3 right-3 flex items-center space-x-2 z-10">
          <button
            onClick={handleRunCode}
            disabled={isRunning || hasRun}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-sans font-medium rounded-md border transition-all ${
              hasRun
                ? 'bg-gray-800/50 text-gray-500 border-gray-700/50 cursor-not-allowed'
                : isRunning
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 cursor-wait'
                : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 cursor-pointer'
            }`}
          >
            {hasRun ? (
              <>
                <Check className="w-3 h-3 text-green-400" />
                Executed
              </>
            ) : (
              <>
                <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                {isRunning ? 'Running...' : 'Run Code'}
              </>
            )}
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md bg-gray-800/60 text-gray-400 hover:text-white border border-gray-700/50 hover:bg-gray-700/50 transition-all cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Syntax Colored Code Display */}
        <pre className="text-gray-300 leading-relaxed font-mono">
          {codeSnippets[activeTab].split('\n').map((line, idx) => (
            <div key={idx} className="hover:bg-cyan-500/5 px-2 rounded -mx-2 transition-colors">
              <span className="text-gray-600 select-none pr-4 w-6 inline-block text-right">{idx + 1}</span>
              <span className="text-purple-400">{line.slice(0, line.indexOf(' '))}</span>
              <span>{line.slice(line.indexOf(' '))}</span>
            </div>
          ))}
        </pre>
      </div>

      {/* Terminal Output Console */}
      {logs.length > 0 && (
        <div className="border-t border-gray-800 bg-[#080b11] p-3 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-1.5 text-cyan-400 mb-1 font-semibold">
            <Cpu className="w-3.5 h-3.5" /> Console Output:
          </div>
          <div className="space-y-1">
            {logs.map((log, i) => (
              <p key={i} className={log.includes('🚀') ? 'text-green-400 font-medium' : 'text-gray-400'}>
                {log}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}