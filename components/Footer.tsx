import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-sta-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-black text-3xl tracking-tighter mb-6 block">STA</span>
            <p className="text-gray-400 max-w-sm">
              Turnkey AI, STEM, and Esports programs for after-school sites, community organizations, and schools — run by the staff you already have.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sta-accent">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sta-accent">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sta-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sta-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sta-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} STA Education Training. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
