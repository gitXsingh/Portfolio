import React from 'react';
import { Youtube, FileText, Twitter, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="text-yellow-400 text-2xl">☼</div>
        <div className="flex gap-6">
          <a href="#home" className="text-gray-300 hover:text-blue-400">Home</a>
          <a href="#bookshelf" className="text-gray-300 hover:text-blue-400">Bookshelf</a>
          <a href="#resume" className="text-gray-300 hover:text-blue-400">Resume</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-3xl">
        <div className="flex items-start gap-6 mb-12">
          <img 
            src="/api/placeholder/100/100" 
            alt="Profile" 
            className="rounded-lg w-24 h-24"
          />
          <div>
            <h1 className="text-2xl mb-2">
              Hey, I'm Jyotinder <span className="animate-pulse">👋</span>
            </h1>
            <p className="text-gray-400 leading-relaxed">
              I'm a software engineer interested in <span className="text-blue-400">low-level software systems</span> and 
              largely work with <span className="text-blue-400">C++</span> and <span className="text-blue-400">Go</span>. 
              I'm currently building query engines @ Google.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-16">
          <h2 className="text-xl mb-4">Links</h2>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-2 bg-red-900/20 text-red-400 px-3 py-2 rounded hover:bg-red-900/30">
              <Youtube size={16} />
              <span>YouTube</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-gray-800/50 text-gray-300 px-3 py-2 rounded hover:bg-gray-800">
              <FileText size={16} />
              <span>Newsletter</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-blue-900/20 text-blue-400 px-3 py-2 rounded hover:bg-blue-900/30">
              <Twitter size={16} />
              <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-gray-800/50 text-gray-300 px-3 py-2 rounded hover:bg-gray-800">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-blue-900/20 text-blue-400 px-3 py-2 rounded hover:bg-blue-900/30">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-xl mb-6">Projects</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-2">DiceDB</h3>
              <p className="text-gray-400 mb-2">
                DiceDB is an open source, <span className="text-red-400">redis-compliant</span>, 
                <span className="text-green-400">reactive</span>, 
                <span className="text-blue-400">scalable</span>, 
                <span className="text-yellow-400">highly-available</span>, 
                unified cache optimized for modern hardware.
              </p>
              <a href="#" className="text-gray-500 hover:text-blue-400 underline">
                View on GitHub (700+ ★)
              </a>
            </div>

            <div>
              <h3 className="text-lg mb-2">Apache Ozone</h3>
              <p className="text-gray-400 mb-2">
                Scalable, reliable, distributed storage system optimized for data analytics and object store workloads.
              </p>
              <a href="#" className="text-gray-500 hover:text-blue-400 underline">
                View on GitHub (800+ ★)
              </a>
            </div>

            <div>
              <h3 className="text-lg mb-2">goLSM</h3>
              <p className="text-gray-400 mb-2">
                An LSM Tree based Key-Value storage engine written in Go
              </p>
              <a href="#" className="text-gray-500 hover:text-blue-400 underline">
                View on GitHub (30 ★)
              </a>
            </div>

            <div>
              <h3 className="text-lg mb-2">Tok - Programming Language</h3>
              <p className="text-gray-400 mb-2">
                A really fast interpreter for a language called Tok which runs on a handcrafted Virtual Machine with automatic Garbage Collection, written in C.
              </p>
              <a href="#" className="text-gray-500 hover:text-blue-400 underline">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        © 2025 Jyotinder Singh. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
