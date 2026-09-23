import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONSULT_HREF } from '../data/pricing';

export const About: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-sta-surface border-b-2 border-black pt-20 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-dot-pattern pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block bg-sta-accent border-2 border-black px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-hard-sm mb-8">
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-sta-dark leading-[0.9] mb-8">
            We Came to Teach STEM. We Stayed to Teach the Teachers.
          </h1>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-black text-white inline-block px-3 py-1 font-mono text-sm font-bold mb-8">2015 / SCHOLARSTEM</div>
          <h2 className="text-4xl font-black text-sta-dark mb-8 tracking-tight">It started with ScholarStem.</h2>
          <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
            <p className="text-2xl text-sta-dark font-black leading-snug">
              We founded{' '}
              <a
                href="https://www.scholarstem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-4 decoration-sta-accent underline-offset-4 hover:text-sta-cta transition-colors"
              >
                ScholarStem
              </a>{' '}
              in 2015 to bring robotics, coding, and engineering into after-school programs across New York City.
            </p>
            <p>
              We worked in public schools, charter schools, and community centers. Some had dedicated technology labs. Others had a folding table and a closet full of supplies. Every program taught us something about what it takes to make STEM work in a real classroom.
            </p>
          </div>
        </div>
      </section>

      {/* The realization */}
      <section className="py-24 bg-sta-surface bg-dot-pattern border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
            <p>
              Over time, one lesson kept coming back: a program had a much better chance of lasting when someone already on staff felt confident leading it.
            </p>
            <p>
              Sometimes that person was a teacher. Sometimes it was a group leader, a librarian, or an after-school counselor who had never touched a robot before.
            </p>
            <div className="border-l-4 border-black pl-6 py-2">
              <p className="text-3xl font-black text-sta-dark leading-tight tracking-tight">
                Your staff can do this.
              </p>
            </div>
            <p>
              The people working with your students already bring something valuable: relationships. They know who needs encouragement, who learns by doing, and how to bring a room back together when an activity goes sideways.
            </p>
            <p>
              Teaching STEM builds on those skills. With a clear curriculum, hands-on practice, and someone to turn to when questions come up, staff can learn to lead engaging activities, even without a technical background.
            </p>
            <p>
              That became the focus of our work. Alongside teaching students, we began training the adults who worked with them every day.
            </p>
          </div>
        </div>
      </section>

      {/* STEM Teacher Academy */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-sta-dark mb-8 tracking-tight">That's why we built STEM Teacher Academy.</h2>
          <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
            <p>
              STEM Teacher Academy brings together the curriculum, classroom experience, and training approaches we developed over a decade.
            </p>
            <p>
              We help schools and community-based organizations prepare their own staff to lead STEM programs through practical training, lessons ready to use, activity kits, and ongoing coaching.
            </p>
            <div className="bg-sta-accent border-2 border-black rounded-xl p-6 shadow-hard-sm">
              <p className="text-2xl font-black text-sta-dark leading-snug">
                Our goal is simple: help your team build the confidence and skills to keep a great STEM program going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-sta-accent border-b-2 border-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="absolute inset-0 bg-white border-2 border-black translate-x-4 translate-y-4 rounded-xl"></div>
              <img
                src="/team/allen-rabinovich.jpg"
                alt="Allen Rabinovich"
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-xl border-2 border-black grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="md:col-span-7">
              <div className="bg-black text-white inline-block px-3 py-1 font-mono text-sm font-bold mb-6">MEET THE FOUNDER</div>
              <h2 className="text-4xl font-black text-sta-dark mb-6 tracking-tight">Allen Rabinovich</h2>
              <div className="space-y-4 text-lg text-sta-dark font-medium leading-relaxed">
                <p>
                  Allen founded{' '}
                  <a
                    href="https://www.scholarstem.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-4 hover:text-sta-cta transition-colors"
                  >
                    ScholarStem
                  </a>{' '}
                  in 2015 and led the company through its acquisition by Nexplore. He also serves as Director of Education at the{' '}
                  <a
                    href="http://loyaltyfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-4 hover:text-sta-cta transition-colors"
                  >
                    Loyalty Foundation
                  </a>
                  .
                </p>
                <p>
                  He holds a master's degree in Instructional Technology from Teachers College, Columbia University, and has spent more than a decade working with public, private, and charter schools, as well as community-based organizations.
                </p>
                <p>
                  That experience shapes his approach to training: give staff something they can practice, understand, and use with their students.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-20 bg-black"></div>
                <span className="font-black text-lg">Lead Coach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-sta-dark mb-12 text-center">What We Bring</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              '10,000+ students taught directly since 2015',
              'Partnered with 50+ schools, districts, and CBOs',
              'Curriculum aligned to ISTE & CSTA standards',
              'Hardware procurement & setup support included',
              'Real classroom-tested lesson plans, not theory',
              'Ongoing coaching & troubleshooting after training',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-sta-surface border-2 border-black rounded-xl p-5 shadow-hard-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-bold text-sta-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-sta-dark mb-6">See What We'd Hand Your Team</h2>
          <p className="text-xl text-slate-600 font-medium mb-8">
            Browse the program catalog, or talk it through with us. No pitch, just a conversation about what your site can realistically run.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="px-8 py-4 bg-sta-cta text-white border-2 border-black rounded-lg font-bold text-lg shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
            >
              View Program Catalog
            </Link>
            <a
              href={CONSULT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Book a Consult <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
