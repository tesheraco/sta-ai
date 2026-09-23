import React from 'react';
import { Link } from 'react-router-dom';
import { ProgramPillar } from '../types';
import { PILLAR_SLUGS } from '../data/programs';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sta-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" aria-label="STEM Teacher Academy home" className="inline-block mb-6">
              <Logo tone="light" size="lg" />
            </Link>
            <p className="text-gray-400 max-w-sm">
              Turnkey AI, STEM, and Esports programs for after-school sites, community organizations, and schools, run by the staff you already have.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sta-accent">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/programs" className="hover:text-white">All Programs</Link></li>
              {Object.values(ProgramPillar).map((pillar) => (
                <li key={pillar}>
                  <Link to={`/programs/${PILLAR_SLUGS[pillar]}`} className="hover:text-white">{pillar} Programs</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sta-accent">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li>
                <a href="https://calendly.com/sta-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <span>&copy; {new Date().getFullYear()} STEM Teacher Academy. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
