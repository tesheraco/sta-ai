import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Star, Zap, Shield, Heart, BarChart3, XCircle, CheckCircle2, HelpCircle, Cpu, Gamepad2, FlaskConical } from 'lucide-react';
import { CaseStudy, CoursePillar } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { COURSES, PILLAR_SLUGS } from '../data/courses';
import { CASE_STUDIES } from '../data/caseStudies';

const PILLARS = [
  {
    pillar: CoursePillar.STEM,
    icon: FlaskConical,
    color: 'bg-sta-primary',
    textColor: 'text-sta-primary',
    tint: 'bg-sta-primary/10',
    blurb: 'Coding, robotics, 3D printing, VR, and engineering — from screen-free kindergarten kits to competition-ready middle school teams.',
    highlights: ['Game Builders', 'Robotics I & II', 'Minecraft Coding', '3D Design & Print'],
  },
  {
    pillar: CoursePillar.AI,
    icon: Cpu,
    color: 'bg-sta-secondary',
    textColor: 'text-sta-secondary',
    tint: 'bg-sta-secondary/10',
    blurb: 'Kid-safe, age-gated AI programs — from hands-on machine learning games to building real apps in partnership with AI tools.',
    highlights: ['AI Explorers', 'Intro to Vibe Coding'],
  },
  {
    pillar: CoursePillar.ESPORTS,
    icon: Gamepad2,
    color: 'bg-sta-accent',
    textColor: 'text-amber-600',
    tint: 'bg-sta-accent/20',
    blurb: 'The zero-to-team playbook: age-appropriate games, practice structure, screen-time policy, and tournaments — on a console budget.',
    highlights: ['Launch Your Esports Program'],
  },
];

export const Landing: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudy | null>(null);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {selectedCaseStudy && (
        <CaseStudyModal
          study={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {/* Hero Section */}
      <section className="relative bg-sta-surface border-b-2 border-black pt-20 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-dot-pattern pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-block bg-sta-accent border-2 border-black px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-hard-sm rotate-[-2deg]">
              Staff Training for After-School Programs
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-sta-dark leading-[0.9]">
              Run AI, STEM & <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Esports In-House.</span>
                <span className="absolute bottom-2 left-0 w-full h-6 bg-sta-coral/60 -rotate-1 z-0"></span>
              </span>
            </h1>

            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              We train your existing staff to run the programs kids ask for — no outside instructors, no per-session vendor fees.
            </p>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
              Turnkey curriculum, staff training, and equipment shopping lists for after-school sites, community organizations, and schools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/courses"
                className="px-8 py-4 bg-sta-dark text-white border-2 border-black rounded-lg font-bold text-lg shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
              >
                Browse the Course Library
              </Link>
              <a
                href="https://calendly.com/sta-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden md:block md:col-span-5 relative h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Staff training session"
              className="absolute top-0 right-0 w-full h-full object-cover rounded-3xl border-2 border-black shadow-hard z-10"
            />
            <div className="absolute bottom-10 left-[-20px] bg-white p-6 rounded-xl border-2 border-black shadow-hard z-20 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sta-mint rounded-full flex items-center justify-center border-2 border-black">
                  <span className="font-black text-lg">A+</span>
                </div>
                <div>
                  <p className="font-bold text-sm">Staff Confidence</p>
                  <p className="text-xs text-slate-500">Post-training survey</p>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-black">
                <div className="bg-sta-primary w-[94%] h-full"></div>
              </div>
              <p className="text-right text-xs font-bold mt-1">94% Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Bar */}
      <section className="py-8 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Built for organizations like</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {['YMCAs', 'Boys & Girls Clubs', 'Parks & Recreation', 'Charter Networks', 'K–12 Schools', 'Enrichment Providers'].map((name) => (
              <span key={name} className="text-lg font-black text-slate-300 tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution Block */}
      <section className="py-20 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Problem Side */}
            <div className="bg-red-50 border-2 border-black rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-10">
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-6 h-6 text-red-500" />
                <span className="font-black text-sm uppercase tracking-widest text-red-500">The Problem</span>
              </div>
              <p className="text-2xl font-black text-sta-dark leading-snug">
                Outside STEM vendors cost a fortune, cover a few hours a week, and disappear when their instructor quits. Meanwhile, families are asking for coding, AI, and esports by name.
              </p>
            </div>

            {/* Solution Side */}
            <div className="bg-sta-mint/20 border-2 border-black border-t-0 md:border-t-2 md:border-l-0 rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-10">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span className="font-black text-sm uppercase tracking-widest text-emerald-600">The Solution</span>
              </div>
              <p className="text-2xl font-black text-sta-dark leading-snug">
                Train the staff you already have. We provide the curriculum, the session scripts, the equipment shopping lists, and the confidence — you keep the program forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-sta-surface bg-dot-pattern border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-sta-dark mb-2">Three Program Pillars</h2>
            <p className="text-slate-600 text-xl font-medium">A course library of {COURSES.length} turnkey programs, K–12.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map(({ pillar, icon: Icon, color, tint, blurb, highlights }) => {
              const count = COURSES.filter(c => c.pillar === pillar).length;
              return (
                <div key={pillar} className="bg-white border-2 border-black rounded-xl shadow-hard overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform">
                  <div className={`${color} border-b-2 border-black p-6 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                      </div>
                      <h3 className={`text-2xl font-black ${pillar === CoursePillar.ESPORTS ? 'text-black' : 'text-white'}`}>{pillar}</h3>
                    </div>
                    <span className={`text-sm font-black px-3 py-1 rounded-full border-2 border-black bg-white`}>
                      {count} {count === 1 ? 'program' : 'programs'}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-slate-600 font-medium mb-6 flex-grow">{blurb}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {highlights.map(h => (
                        <span key={h} className={`px-2.5 py-1 rounded text-xs font-bold text-sta-dark border border-slate-200 ${tint}`}>{h}</span>
                      ))}
                    </div>
                    <Link
                      to={`/courses/${PILLAR_SLUGS[pillar]}`}
                      className="w-full py-3 bg-sta-dark text-white font-bold border-2 border-black rounded-lg text-center hover:bg-sta-primary shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                    >
                      Browse {pillar} Programs
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Age-safe AI strip */}
          <div className="mt-12 bg-sta-dark text-white rounded-xl border-2 border-black p-8 shadow-hard flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 bg-sta-mint rounded-full border-2 border-black flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-black" strokeWidth={2} />
            </div>
            <div className="flex-grow">
              <h3 className="font-black text-xl mb-1">The only catalog with age-gating built into every AI course.</h3>
              <p className="text-slate-300 font-medium">
                Most consumer AI tools require users to be 13+ — and almost no program staff know it. We train your team on exactly which tools each grade can use, and how to supervise them responsibly.
              </p>
            </div>
            <Link to="/courses/ai" className="shrink-0 px-6 py-3 bg-white text-sta-dark border-2 border-black rounded-lg font-bold hover:bg-sta-mint transition-colors">
              See AI Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Why Leaders Choose STA */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-sta-dark mb-4">Why Program Leaders Choose STA</h2>
            <p className="text-slate-600 text-xl font-medium">We speak "Executive Director" as fluently as we speak "Group Leader".</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 border-2 border-black shadow-hard rounded-xl">
              <div className="w-14 h-14 bg-sta-mint rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-sm">
                <Shield className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-4">Safety & Compliance First</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Age-gating for AI tools, data privacy, screen-time policies, and supervision protocols — documented and ready to show parents, boards, and licensors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border-2 border-black shadow-hard rounded-xl">
              <div className="w-14 h-14 bg-sta-coral rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-sm">
                <Heart className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-4">Staff Who Stay</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Frontline youth workers get real, resume-worthy skills — coding, robotics, AI facilitation. When staff grow, they stay, and your program quality compounds.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border-2 border-black shadow-hard rounded-xl">
              <div className="w-14 h-14 bg-sta-accent rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-sm">
                <BarChart3 className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-4">Enrollment You Can Measure</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                STEM, AI, and esports are the programs families ask for by name. Showcase events, tournaments, and take-home projects turn your program into its own marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-sta-dark mb-4">Everything Your Site Needs to Launch</h2>
            <p className="text-slate-600 text-xl font-medium">No jargon. No guesswork. Programs your staff can run on Monday.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="border-2 border-black rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-sta-secondary text-white font-black text-6xl opacity-10 p-4 -mr-4 -mt-4 rotate-12 group-hover:opacity-20 transition-opacity">01</div>
              <div className="w-12 h-12 bg-sta-secondary/20 rounded-full flex items-center justify-center border-2 border-black mb-6">
                <Zap className="w-6 h-6 text-sta-secondary" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-3">Turnkey Curriculum</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Session-by-session facilitation guides, slide decks, and troubleshooting notes — written for staff with zero technical background.</p>
            </div>

            {/* Item 2 */}
            <div className="border-2 border-black rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-sta-accent text-black font-black text-6xl opacity-20 p-4 -mr-4 -mt-4 rotate-12 group-hover:opacity-40 transition-opacity">02</div>
              <div className="w-12 h-12 bg-sta-accent/30 rounded-full flex items-center justify-center border-2 border-black mb-6">
                <Star className="w-6 h-6 text-sta-dark" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-3">Flexible Staff Training</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Self-paced modules for the basics, live coaching for mastery — designed around after-school hours, not against them.</p>
            </div>

            {/* Item 3 */}
            <div className="border-2 border-black rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-sta-primary text-white font-black text-6xl opacity-10 p-4 -mr-4 -mt-4 rotate-12 group-hover:opacity-20 transition-opacity">03</div>
              <div className="w-12 h-12 bg-sta-primary/20 rounded-full flex items-center justify-center border-2 border-black mb-6">
                <BarChart3 className="w-6 h-6 text-sta-primary" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-3">Budget-Honest Equipment Lists</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Exact shopping lists with real prices — including the low-cost path for every program. Several courses need zero student devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section: Old Way vs STA Way */}
      <section className="py-24 bg-slate-900 text-white border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* The Old Way */}
            <div className="opacity-50 hover:opacity-70 transition-opacity">
              <h3 className="text-2xl font-black mb-8 text-slate-400 uppercase tracking-widest border-b-2 border-slate-700 pb-4">The Vendor Model</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-lg mb-1">Rent-an-Instructor</strong>
                    <p className="text-slate-400">$150+ per session, one day a week. When their instructor quits, your program ends.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-lg mb-1">Equipment Gathering Dust</strong>
                    <p className="text-slate-400">Robotics kits in a closet because nobody on staff was ever shown how to use them.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-lg mb-1">AI Policy by Avoidance</strong>
                    <p className="text-slate-400">"Just don't let them use it." Meanwhile, no one checked which tools are even legal for kids under 13.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The STA Way */}
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-sta-primary to-transparent hidden md:block"></div>
              <h3 className="text-2xl font-black mb-8 text-sta-primary uppercase tracking-widest border-b-2 border-sta-primary pb-4">The STA Way</h3>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-sta-mint mr-4 shrink-0" />
                  <div>
                    <strong className="block text-xl mb-1">Your Staff, Trained</strong>
                    <p className="text-slate-300">One flat training fee. The capability stays with your organization <i>permanently</i>.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-sta-mint mr-4 shrink-0" />
                  <div>
                    <strong className="block text-xl mb-1">Every Kit Earning Its Keep</strong>
                    <p className="text-slate-300">Curriculum mapped to the exact hardware you buy — with the budget path spelled out before you spend a dollar.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-sta-mint mr-4 shrink-0" />
                  <div>
                    <strong className="block text-xl mb-1">AI Done Responsibly</strong>
                    <p className="text-slate-300">Age-gating, supervision protocols, and parent-ready policies baked into every AI course.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 bg-sta-accent border-y-2 border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 bg-white border-2 border-black translate-x-3 translate-y-3 rounded-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Allen Rabinovich"
                className="relative z-10 w-48 h-48 object-cover rounded-xl border-2 border-black grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <div className="bg-black text-white inline-block px-3 py-1 font-mono text-sm font-bold mb-4">FOUNDER</div>
              <h2 className="text-3xl font-black text-sta-dark mb-3 tracking-tight">Allen Rabinovich</h2>
              <p className="text-lg text-sta-dark font-medium leading-relaxed mb-4">
                Over a decade at the forefront of educational innovation, serving public, private, and charter schools across the nation. Allen doesn't just teach technology — he teaches organizations how to use it to bring out the best in their people and programs.
              </p>
              <Link to="/about" className="inline-flex items-center font-bold text-sta-dark hover:text-sta-primary transition-colors gap-1">
                Learn more about our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-sta-surface bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-sta-dark mb-4">Success Stories</h2>
            <p className="text-slate-600 text-xl font-medium">Real sites. Real staff. Real programs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedCaseStudy(study)}
                className="bg-white p-8 border-2 border-black shadow-hard-sm rounded-xl cursor-pointer group hover:-translate-y-1 hover:shadow-hard transition-all duration-200 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-sta-accent text-xs font-bold px-3 py-1 border-l-2 border-b-2 border-black opacity-0 group-hover:opacity-100 transition-opacity">
                  READ STORY
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-sta-accent">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" strokeWidth={1} className="w-4 h-4" />)}
                  </div>
                </div>

                <p className="text-lg font-bold text-slate-800 mb-6 leading-snug line-clamp-4 flex-grow">
                  "{study.quote}"
                </p>

                <div className="flex items-center border-t-2 border-slate-100 pt-4 mb-6">
                  <div className="w-10 h-10 bg-slate-200 rounded-full border border-black mr-3 overflow-hidden">
                    {study.image && <img src={study.image} alt={study.name} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <div className="font-black text-sm text-sta-dark uppercase">{study.name}</div>
                    <div className="text-slate-500 text-xs font-mono">{study.role}</div>
                  </div>
                </div>

                <div className="w-full py-3 bg-slate-50 border-2 border-black rounded-lg font-bold text-sm text-center group-hover:bg-sta-dark group-hover:text-white transition-colors flex items-center justify-center gap-2">
                  Read Success Story <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sta-primary text-white border-2 border-black rounded-lg font-bold shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              View All Case Studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-sta-surface border-t-2 border-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-sta-dark mb-12 text-center">Common Questions</h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
              <h3 className="font-black text-lg mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-sta-primary" /> Do our staff need any tech experience?</h3>
              <p className="text-slate-600 font-medium">No. Every curriculum is written for group leaders and youth workers with zero technical background. If your staff can follow a lesson script and manage a room of kids, they can run these programs.</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
              <h3 className="font-black text-lg mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-sta-primary" /> What does equipment cost?</h3>
              <p className="text-slate-600 font-medium">It ranges from nearly free (Invention Lab runs on cardboard and hot glue) to a few thousand dollars for robotics or esports. Every course page lists exactly what you need, and we always teach the budget path first.</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
              <h3 className="font-black text-lg mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-sta-primary" /> Is AI safe and legal for younger kids?</h3>
              <p className="text-slate-600 font-medium">This is exactly why our AI courses exist. Most consumer AI tools require users to be 13+ — our training covers which tools each grade can use, kid-safe no-login alternatives for elementary ages, and supervision protocols your licensor and parents will approve of.</p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
              <h3 className="font-black text-lg mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-sta-primary" /> Can we pay via Purchase Order?</h3>
              <p className="text-slate-600 font-medium">Yes. We work with nonprofits, districts, and municipal programs regularly and accept POs for organizational purchases. Book a consult and we'll handle the paperwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet & Newsletter */}
      <section id="newsletter" className="py-24 bg-sta-mint border-t-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl border-2 border-black p-8 md:p-12 shadow-hard relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-sta-secondary rounded-full border-2 border-black flex items-center justify-center text-white font-black rotate-12 shadow-sm z-20">
              FREE
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-sta-dark mb-4">Grab the Program Launch Kit</h2>
                <p className="text-slate-600 mb-8 font-medium">
                  A free PDF for program directors: equipment budgets for all {COURSES.length} programs, a staffing model, and our AI age-gating cheat sheet.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Work email address" className="flex-1 px-5 py-3 bg-slate-50 rounded-lg border-2 border-black focus:outline-none focus:border-sta-primary font-mono text-sm" />
                  <button className="px-6 py-3 bg-sta-dark text-white font-bold rounded-lg border-2 border-black hover:bg-sta-primary transition-colors flex items-center justify-center whitespace-nowrap shadow-hard-sm active:shadow-none active:translate-x-0.5 active:translate-y-0.5">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </button>
                </form>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-40 aspect-[3/4] bg-white border-2 border-black shadow-hard rotate-3 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-full h-full border-2 border-black border-dashed flex flex-col items-center justify-center bg-slate-50">
                    <span className="font-black text-3xl text-sta-dark">STA</span>
                    <div className="w-12 h-1 bg-sta-accent my-2"></div>
                    <span className="text-xs font-black text-slate-400">LAUNCH KIT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
