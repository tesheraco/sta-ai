import React from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => setView(ViewState.LANDING)}
          >
            <div className="w-10 h-10 bg-sta-dark text-white border-2 border-black rounded flex items-center justify-center mr-3 font-black text-xl shadow-hard-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
              S
            </div>
            <span className="font-black text-2xl tracking-tighter text-sta-dark">STA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            <button
              onClick={() => setView(ViewState.LANDING)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 border-transparent ${currentView === ViewState.LANDING
                  ? 'bg-sta-accent/20 text-sta-dark border-black'
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              Course
            </button>
            <button
              onClick={() => setView(ViewState.TOOLKIT)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 border-transparent ${currentView === ViewState.TOOLKIT
                  ? 'bg-sta-secondary/10 text-sta-secondary border-sta-secondary'
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              AI Toolkit
            </button>
            <button
              onClick={() => setView(ViewState.SCHEDULE)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 border-transparent ${currentView === ViewState.SCHEDULE
                  ? 'bg-sta-primary/10 text-sta-primary border-sta-primary'
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
            >
              Schedule
            </button>
            <a href="#founder" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-sta-dark">
              About Allen
            </a>
            <div className="pl-4">
              <a href="#newsletter" className="px-6 py-2.5 bg-sta-dark text-white border-2 border-black rounded-lg text-sm font-bold hover:bg-sta-primary hover:shadow-hard-sm transition-all">
                Get Brochure
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
            <button
              onClick={() => { setView(ViewState.LANDING); setIsOpen(false); }}
              className="block w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg shadow-hard-sm font-bold text-sta-dark active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Intro to AI Course
            </button>
            <button
              onClick={() => { setView(ViewState.TOOLKIT); setIsOpen(false); }}
              className="block w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg shadow-hard-sm font-bold text-sta-dark active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Try AI Toolkit
            </button>
            <button
              onClick={() => { setView(ViewState.SCHEDULE); setIsOpen(false); }}
              className="block w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg shadow-hard-sm font-bold text-sta-dark active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Schedule & Registration
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};