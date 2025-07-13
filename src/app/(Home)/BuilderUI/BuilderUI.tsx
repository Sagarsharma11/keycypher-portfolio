import UploadBox from '@/components/UploadBox/UploadBox';
import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const SecureScannerUI = () => {
const suggestions = [
  '✅ Scan for code injection vulnerabilities',
  '🔐 Check for hardcoded secrets in source code',
  '🔎 Detect exposed API keys and credentials',
  '📂 Identify sensitive data exposure risks (e.g., PII, passwords)',
  '⚠️ Analyze for insecure or outdated imports',
  '🧠 Flag insecure coding patterns and bad practices',
  '🛡️ Run automated checks against OWASP Top 10 vulnerabilities',
];


  return (
    // <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
<div className="w-full bg-gray-950 text-white px-4 py-8 flex items-center justify-center flex-col min-h-screen lg:min-h-0 lg:h-full lg:items-center lg:justify-center">

      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
        Upload your code for secure scanning
      </h1>
      <p className="text-gray-400 mb-8 text-center text-lg">
        Upload a .zip file and let our AI scan it for security vulnerabilities.
      </p>

      {/* <div className="w-full max-w-xl">
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-[#111] hover:bg-[#1a1a1a] transition">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FiUploadCloud size={32} className="mb-2 text-gray-400" />
            <p className="mb-1 text-sm text-gray-300">
              Click to upload or drag & drop
            </p>
            <p className="text-xs text-gray-500">ZIP files only</p>
          </div>
          <input type="file" accept=".zip" className="hidden" />
        </label>
      </div> */}
      <UploadBox/>

      <p className="text-gray-500 mt-6 mb-3">jump into action — scan, secure, succeed</p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 w-full max-w-4xl px-4">
        {suggestions.map((label) => (
          <button
            key={label}
            className="bg-[#111] border border-gray-700 px-4 py-2 rounded-full text-sm hover:bg-[#1a1a1a] transition"
          >
            {label}
          </button>
        ))}
      </div>

      <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition cursor-pointer">
        🚀 Get Started
      </button>
    </div>
  );
};

export default SecureScannerUI;
