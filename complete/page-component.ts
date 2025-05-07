import { 
  Youtube, 
  FileText, 
  Twitter, 
  Github, 
  Linkedin,
  Sun 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'YouTube',
    icon: Youtube,
    href: '#',
    className: 'bg-red-900/20 text-red-400 hover:bg-red-900/30'
  },
  {
    name: 'Newsletter',
    icon: FileText,
    href: '#',
    className: 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: '#',
    className: 'bg-blue-900/20 text-blue-400 hover:bg-blue-900/30'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: '#',
    className: 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#',
    className: 'bg-blue-900/20 text-blue-400 hover:bg-blue-900/30'
  }
];

const projects = [
  {
    name: 'DiceDB',
    description: 'DiceDB is an open source, redis-compliant, reactive, scalable, highly-available, unified cache optimized for modern hardware.',
    github: '#',
    stars: '700+'
  },
  {
    name: 'Apache Ozone',
    description: 'Scalable, reliable, distributed storage system optimized for data analytics and object store workloads.',
    github: '#',
    stars: '800+'
  },
  {
    name: 'goLSM',
    description: 'An LSM Tree based Key-Value storage engine written in Go',
    github: '#',
    stars: '30'
  },
  {
    name: 'Tok - Programming Language',
    description: 'A really fast interpreter for a language called Tok which runs on a handcrafted Virtual Machine with automatic Garbage Collection, written in C.',
    github: '#'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="text-yellow-400 text-2xl">
          <Sun size={24} />
        </div>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link href="/bookshelf" className="text-gray-300 hover:text-blue-400 transition-colors">
            Bookshelf
          </Link>
          <Link href="/resume" className="text-gray-300 hover:text-blue-400 transition-colors">
            Resume
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="flex items-start gap-6 mb-12">
          <div className="relative w-24 h-24">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl mb-2">
              Hey, I'm Your Name <span className="animate-pulse">👋</span>
            </h1>
            <p className="text-gray-400 leading-relaxed">
              I'm a software engineer interested in <span className="text-blue-400">low-level software systems</span> and 
              largely work with <span className="text-blue-400">C++</span> and <span className="text-blue-400">Go</span>.
              Currently building amazing things.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-16">
          <h2 className="text-xl mb-4">Links</h2>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${link.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-xl mb-6">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.name}>
                <h3 className="text-lg mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-2">
                  {project.description}
                </p>
                <a 
                  href={project.github}
                  className="text-gray-500 hover:text-blue-400 link-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub {project.stars && `(${project.stars} ★)`}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
