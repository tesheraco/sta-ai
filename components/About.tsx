import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
              in 2015 to bring robotics, coding, and engineering into after-school programs. It grew into one of the largest STEAM vendors in New York City.
            </p>
            <p>
              That matters mostly because of where it happened. New York City runs the largest public school system in the country, with more students than the next two districts combined. Working at that scale meant we saw every version of a STEM program: the well funded and the improvised, the district school and the community center, the classroom with a 3D printer and the classroom with a folding table.
            </p>
          </div>
        </div>
      </section>

      {/* The realization */}
      <section className="py-24 bg-sta-surface bg-dot-pattern border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
            <p>
              After enough years of it, we noticed something that ran against our own business model. The programs that lasted were not the ones with the best instructors or the newest hardware. They were the ones where a staff member already on site, a group leader or a librarian or a 3rd-grade teacher who had never written a line of code, picked the work up and made it theirs.
            </p>
            <div className="border-l-4 border-black pl-6 py-2">
              <p className="text-3xl font-black text-sta-dark leading-tight tracking-tight">
                Almost anyone can become a talented STEM teacher. What they need isn't talent. It's a good curriculum, a little training, and someone to call when the robot won't connect.
              </p>
            </div>
            <p>
              That reframed the problem. A vendor who shows up for 90 minutes and leaves takes the program with them. A trained staff member keeps it. So we started teaching the adults instead of only the kids, and the programs held up long after our contract ended.
            </p>
            <p>
              STA grew out of that shift. Today it is one of the premier teacher training services for community-based organizations in New York City: the curriculum, the kits, and the coaching we built over a decade, handed to the people already in the room.
            </p>
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Allen Rabinovich"
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-xl border-2 border-black grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="md:col-span-7">
              <div className="bg-black text-white inline-block px-3 py-1 font-mono text-sm font-bold mb-6">FOUNDER</div>
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
                  in 2015 and led it through its acquisition by Nexplore. He also serves as Director of Education at the{' '}
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
                  He holds a master's in Instructional Technology from Columbia University's Teachers College, and has spent the years since working with public, private, and charter schools as well as CBOs. He knows the difference between what a program looks like on paper and what it looks like at 3:15 on a Tuesday.
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
              href="https://calendly.com/sta-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Book a Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
