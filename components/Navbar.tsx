import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center cursor-pointer group"
          >
            <div className="w-10 h-10 bg-sta-dark text-white border-2 border-black rounded flex items-center justify-center mr-3 font-black text-xl shadow-hard-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
              S
            </div>
            <span className="font-black text-2xl tracking-tighter text-sta-dark">STA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            <Link
              to="/courses"
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 border-transparent ${currentPath === '/courses' || currentPath.startsWith('/courses/')
                ? 'bg-sta-primary/10 text-sta-primary border-sta-primary'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              Courses
            </Link>
            <Link
              to="/case-studies"
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 border-transparent ${currentPath === '/case-studies'
                ? 'bg-sta-primary/10 text-sta-primary border-sta-primary'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 border-transparent ${currentPath === '/about'
                ? 'bg-sta-primary/10 text-sta-primary border-sta-primary'
                : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              About
            </Link>
            <Link
              to="/toolkit"
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 border-transparent ${currentPath === '/toolkit'
                ? 'bg-sta-secondary/10 text-sta-secondary border-sta-secondary'
                : 'text-slate-500 hover:bg-slate-100'
                }`}
            >
              Tools
            </Link>
            <div className="pl-4">
              <a
                href="https://calendly.com/sta-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-sta-dark text-white border-2 border-black rounded-lg text-sm font-bold hover:bg-sta-primary hover:shadow-hard-sm transition-all"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
              {isOpen ? <X strokeWidth={3} /> : <Menu strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sta-surface border-b-2 border-black absolute w-full">
          <div className="px-4 pt-4 pb-8 space-y-3">
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg shadow-hard-sm font-bold text-sta-dark active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Courses
            </Link>
            <Link
              to="/case-studies"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg shadow-hard-sm font-bold text-sta-dark active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg shadow-hard-sm font-bold text-sta-dark active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              About
            </Link>
            <Link
              to="/toolkit"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg shadow-hard-sm font-bold text-sta-dark active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Tools
            </Link>
            <a
              href="https://calendly.com/sta-ai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-4 py-3 bg-sta-dark text-white border-2 border-black rounded-lg shadow-hard-sm font-bold active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};