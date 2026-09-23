import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Heart, TrendingDown, XCircle, CheckCircle2 } from 'lucide-react';
import { ProgramPillar } from '../types';
import { CaseStudyCard } from './CaseStudyCard';
import { FaqSection } from './FaqSection';
import { PROGRAMS, PILLAR_SLUGS } from '../data/programs';
import { PILLAR_VISUALS } from '../data/pillars';
import { CASE_STUDIES } from '../data/caseStudies';
import { SHARED_FAQS } from '../data/faqs';
import { CONSULT_HREF } from '../data/pricing';

const PILLARS = [
  {
    pillar: ProgramPillar.STEM,
    ...PILLAR_VISUALS[ProgramPillar.STEM],
    blurb: 'Coding, robotics, 3D printing, VR, and engineering, from screen-free kindergarten kits to competition-ready middle school teams.',
    highlights: ['Game Builders', 'Robotics I & II', 'Minecraft Coding', '3D Design & Print'],
  },
  {
    pillar: ProgramPillar.AI,
    ...PILLAR_VISUALS[ProgramPillar.AI],
    blurb: 'Kid-safe, age-gated AI programs, from hands-on machine learning games to building real apps in partnership with AI tools.',
    highlights: ['AI Explorers', 'Intro to Vibe Coding'],
  },
  {
    pillar: ProgramPillar.ESPORTS,
    ...PILLAR_VISUALS[ProgramPillar.ESPORTS],
    blurb: 'The zero-to-team playbook: age-appropriate games, practice structure, screen-time policy, and tournaments, all on a console budget.',
    highlights: ['Launch Your Esports Program'],
  },
];

export const Landing: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative bg-sta-surface border-b-2 border-black pt-20 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-dot-pattern pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 [container-type:inline-size]">
            <h1 className="text-4xl sm:text-5xl lg:text-[clamp(2.5rem,7.6cqi,3.5rem)] font-black tracking-tighter text-sta-dark leading-tight sm:leading-tight">
              The programs kids want. <br />
              The staff you already have.
            </h1>

            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              We train after-school and summer teams to run STEM, AI, and esports programs with ready-to-teach curriculum, equipment lists, and support all year.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/programs"
                className="px-8 py-4 bg-sta-cta text-white border-2 border-black rounded-lg font-bold text-lg shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
              >
                Browse the Program Library
              </Link>
              <a
                href={CONSULT_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block lg:col-span-5 h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Staff training session"
              className="w-full h-full object-cover rounded-3xl border-2 border-black shadow-hard"
            />
          </div>
        </div>
      </section>

      {/* Audience Bar */}
      <section className="py-12 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by organizations like</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {[
              { src: '/logos/ymca.svg', alt: 'YMCA', className: 'h-16' },
              { src: '/logos/newark_logo_gray.svg', alt: 'City of Newark', className: 'h-20' },
              { src: '/logos/bgca_logo.svg', alt: 'Boys & Girls Clubs of America', className: 'h-12' },
              { src: '/logos/pal_logo.svg', alt: 'Police Athletic League', className: 'h-20' },
              { src: '/logos/phipps.svg', alt: 'Phipps Neighborhoods', className: 'h-16' },
              { src: '/logos/gs_logo.svg', alt: 'Grand St. Settlement', className: 'h-14' },
            ].map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className={`${logo.className} w-auto`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-sta-surface bg-dot-pattern border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-sta-dark">Three Program Pillars</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map(({ pillar, icon: Icon, color, tint, blurb, highlights }) => {
              const count = PROGRAMS.filter(c => c.pillar === pillar).length;
              return (
                <div key={pillar} className="bg-white border-2 border-black rounded-xl shadow-hard overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform">
                  <div className={`${color} border-b-2 border-black p-6 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center">
                        <Icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                      </div>
                      <h3 className={`text-2xl font-black ${pillar === ProgramPillar.ESPORTS ? 'text-black' : 'text-white'}`}>{pillar}</h3>
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
                      to={`/programs/${PILLAR_SLUGS[pillar]}`}
                      className="w-full py-3 bg-sta-cta text-white font-bold border-2 border-black rounded-lg text-center hover:bg-sta-cta-hover shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
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
              <h3 className="font-black text-xl mb-1">The only catalog with age-gating built into every AI program.</h3>
              <p className="text-slate-300 font-medium">
                Most consumer AI tools require users to be 13+, and almost no program staff know it. We train your team on exactly which tools each grade can use, and how to supervise them responsibly.
              </p>
            </div>
            <Link to="/programs/ai" className="shrink-0 px-6 py-3 bg-white text-sta-dark border-2 border-black rounded-lg font-bold hover:bg-sta-mint transition-colors">
              See AI Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Why Leaders Choose STA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-sta-dark">Why Program Leaders Choose STA</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 border-2 border-black shadow-hard rounded-xl hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-sta-accent rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-sm">
                <Zap className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-4">Teaching in Under a Week</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Zero-to-one training takes staff with no prior experience to running their own sessions in under a week. Every program ships with session-by-session facilitation guides, slide decks, and troubleshooting notes. There is nothing to build from scratch.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border-2 border-black shadow-hard rounded-xl hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-sta-coral rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-sm">
                <Heart className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-4">Support That Doesn't Stop</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Your partnership keeps support running long after launch day: 24/7 tech help, curriculum updates, and someone to call when a session goes sideways.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border-2 border-black shadow-hard rounded-xl hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-sta-mint rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-sm">
                <TrendingDown className="w-8 h-8 text-black" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-4">Costs Less Than One Vendor Season</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                One annual partnership, not a per-session invoice. Your own staff run as many sessions as you schedule, and the skills stay with your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section: Old Way vs STA Way */}
      <section className="py-24 bg-sta-surface bg-dot-pattern border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* The Old Way */}
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <h3 className="text-2xl font-black mb-8 text-slate-500 uppercase tracking-widest border-b-2 border-slate-300 pb-4">The Vendor Model</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-lg mb-1 text-slate-600">Rent-an-Instructor</strong>
                    <p className="text-slate-500">$150+ per session, one day a week. When their instructor quits, your program ends.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-lg mb-1 text-slate-600">Equipment Gathering Dust</strong>
                    <p className="text-slate-500">Robotics kits in a closet because nobody on staff was ever shown how to use them.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-lg mb-1 text-slate-600">Nothing to Show Your Funder</strong>
                    <p className="text-slate-500">A stack of attendance sheets at year end. When the grant renewal asks what students actually learned, nobody can answer.</p>
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
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-xl mb-1 text-sta-dark">Your Staff, Trained</strong>
                    <p className="text-slate-600">One annual partnership instead of a per-session invoice. The skills stay with your staff <i>permanently</i>.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-xl mb-1 text-sta-dark">Every Kit Earning Its Keep</strong>
                    <p className="text-slate-600">Curriculum mapped to the exact hardware you buy, with the budget path spelled out before you spend a dollar.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-4 shrink-0" />
                  <div>
                    <strong className="block text-xl mb-1 text-sta-dark">Evidence Your Funder Accepts</strong>
                    <p className="text-slate-600">Skill rubrics and progress tracking built into every program, so renewal season starts with a report, not a scramble.</p>
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
                src="/team/allen-rabinovich.jpg"
                alt="Allen Rabinovich"
                className="relative z-10 w-48 h-48 object-cover rounded-xl border-2 border-black grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <div className="bg-black text-white inline-block px-3 py-1 font-mono text-sm font-bold mb-4">FOUNDER</div>
              <h2 className="text-3xl font-black text-sta-dark mb-3 tracking-tight">Allen Rabinovich</h2>
              <p className="text-lg text-sta-dark font-medium leading-relaxed mb-4">
                Over a decade at the forefront of educational innovation, serving public, private, and charter schools across the nation. Allen doesn't just teach technology. He teaches organizations how to use it to bring out the best in their people and programs.
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
            <h2 className="text-4xl font-black text-sta-dark">Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map(study => (
              <CaseStudyCard key={study.id} study={study} />
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
          <FaqSection items={SHARED_FAQS} />
        </div>
      </section>
    </div>
  );
};
