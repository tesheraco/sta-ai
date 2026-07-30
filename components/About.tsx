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
            From Teaching 10,000 Students to Training Their Teachers.
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            We spent 7 years in the trenches. Now we hand that playbook to you.
          </p>
        </div>
      </section>

      {/* Pivot Story */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
            <p className="text-2xl text-sta-dark font-black leading-snug">
              Founded by the team behind ScholarStem, we spent 7 years teaching 10,000 students directly. We learned what works and what fails in a real classroom. Now, we hand that playbook to you.
            </p>
            <p>
              We started as an after-school STEM vendor — the kind of company that shows up with robots, runs a 90-minute class, and leaves. It worked, but it didn't scale. Schools needed us more hours than we could give, and when we left, so did the program.
            </p>
            <p>
              The real breakthrough came when we started training existing staff. A 3rd-grade teacher who'd never touched a line of code was running a full robotics lab within a semester. A librarian became the school's AI specialist. The programs didn't depend on us anymore — they belonged to the school.
            </p>
            <p>
              That's what STA is: everything we learned about running world-class STEM labs, distilled into courses, kits, and coaching that your team can use immediately.
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
                  Allen has spent over a decade at the forefront of educational innovation, serving public, private, and charter schools across the nation.
                </p>
                <p>
                  From CBOs to massive school districts, Allen understands the unique pressure cookers that educators live in. He doesn't just teach technology — he teaches how to use technology to bring humanity back into the classroom.
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
      <section className="py-24 bg-sta-surface bg-dot-pattern border-b-2 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-sta-dark mb-12 text-center">Why Schools Trust Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              '10,000+ students taught directly over 7 years',
              'Partnered with 50+ schools and districts',
              'Curriculum aligned to ISTE & CSTA standards',
              'Hardware procurement & setup support included',
              'Real classroom-tested lesson plans — not theory',
              'Ongoing coaching & troubleshooting after training',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border-2 border-black rounded-xl p-5 shadow-hard-sm">
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
          <h2 className="text-4xl font-black text-sta-dark mb-6">Ready to Build Your STEM Program?</h2>
          <p className="text-xl text-slate-600 font-medium mb-8">
            Browse our course catalog or book a free consultation to design a custom plan for your school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="px-8 py-4 bg-sta-dark text-white border-2 border-black rounded-lg font-bold text-lg shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
            >
              View Course Catalog
            </Link>
            <a
              href="https://calendly.com/sta-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center inline-flex items-center justify-center gap-2"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
