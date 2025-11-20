import React from 'react';
import { Calendar, Check, ArrowRight, Download, Star, Zap, ArrowUpRight } from 'lucide-react';
import { CourseDate, CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { CohortTicket } from './CohortTicket';



const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'HS English Teacher',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "I was terrified of ChatGPT. STA showed me how to use it to grade essays 5x faster while actually giving BETTER feedback.",
    fullStory: `Before taking this course, I was drowning in grading. I have 150 students, and giving meaningful feedback on every essay felt impossible. I was spending my weekends grading instead of recharging.

    The 'Prompt Engineering' module changed everything. I learned how to train the AI to adopt my specific rubric and grading style. It doesn't just give a grade; it provides specific, actionable feedback that I can review and approve.
    
    Now, I spend my time conferencing with students about their writing instead of just marking up papers. My students are writing more because they get feedback faster. It's not just a time-saver; it's a pedagogy amplifier.`,
    metrics: [
      { label: 'Hours Saved/Week', value: '12+' },
      { label: 'Feedback Speed', value: '5x' },
      { label: 'Student Engagement', value: '+40%' }
    ]
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    role: 'District Admin',
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "Usually, teachers check their phones during PD. This time? They were glued to the screens, laughing, and building plans.",
    fullStory: `Professional Development is usually a passive experience. Teachers sit, listen, and maybe try one thing a month later. We wanted something different for our district-wide AI rollout.
    
    STA's approach is radically different. It's hands-on from minute one. Teachers weren't just hearing about AI; they were building lesson plans, creating differentiated materials, and solving real classroom problems in real-time.
    
    The 'Ethics & Safety' module was particularly crucial for us. It gave our staff the confidence to navigate the tricky waters of AI policy without fear. We've seen a massive uptake in adoption since the training.`,
    metrics: [
      { label: 'Teacher Adoption', value: '85%' },
      { label: 'NPS Score', value: '92' },
      { label: 'Workshops Run', value: '15' }
    ]
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Special Ed Coordinator',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "The ability to instantly differentiate reading passages for different reading levels is a game changer for my IEP students.",
    fullStory: `Differentiation is the holy grail of special education, but it's incredibly time-consuming to do well. I often found myself spending hours rewriting the same text for three different reading levels.
    
    With the tools I learned in the STA course, I can now take any curriculum material and instantly adapt it for my students' specific needs. I can change the reading level, add vocabulary definitions, or even rewrite it in the style of their favorite superhero to increase engagement.
    
    My students are accessing the general education curriculum in ways they never could before. It's leveled the playing field.`,
    metrics: [
      { label: 'Prep Time', value: '-70%' },
      { label: 'Reading Growth', value: '1.5 yrs' },
      { label: 'Parent Satisfaction', value: '10/10' }
    ]
  }
];

export const Landing: React.FC<{ setView: (view: any) => void }> = ({ setView }) => {
  const [selectedStudy, setSelectedStudy] = React.useState<CaseStudy | null>(null);

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {selectedStudy && (
        <CaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}

      {/* Hero Section - Pop Minimalist */}
      <section className="relative bg-sta-surface border-b-2 border-black pt-20 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-dot-pattern pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-block bg-sta-accent border-2 border-black px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-hard-sm rotate-[-2deg]">
              Flagship Course
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-sta-dark leading-[0.9]">
              Intro to AI <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">for Educators</span>
                <span className="absolute bottom-2 left-0 w-full h-6 bg-sta-mint/60 -rotate-1 z-0"></span>
              </span>
            </h1>

            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-lg">
              Lead the way without losing your mind. A practical, hands-on course designed to help you tame the AI beast and reclaim your evenings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setView('SCHEDULE')}
                className="px-8 py-4 bg-sta-dark text-white border-2 border-black rounded-lg font-bold text-lg shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
              >
                View Upcoming Cohorts
              </button>
              <button
                onClick={() => setView('COURSE_DETAILS')}
                className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative hidden md:block">
            {/* Stacked Card Effect */}
            <div className="absolute top-4 left-4 w-full h-full bg-sta-secondary rounded-2xl border-2 border-black"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-black shadow-hard bg-white">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Teacher using computer"
                className="object-cover h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold">LESSON_PLAN_V1.DOCX</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-sta-coral border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-sta-accent border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-sta-mint border border-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights - Grid with chunky borders */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-sta-dark mb-4">The Curriculum</h2>
            <p className="text-slate-600 text-xl font-medium">No jargon. No hype. Just tools you can use on Monday.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="border-2 border-black rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-sta-secondary text-white font-black text-6xl opacity-10 p-4 -mr-4 -mt-4 rotate-12 group-hover:opacity-20 transition-opacity">01</div>
              <div className="w-12 h-12 bg-sta-secondary/20 rounded-full flex items-center justify-center border-2 border-black mb-6">
                <Zap className="w-6 h-6 text-sta-secondary" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-3">Ethics & Safety</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Navigating privacy, plagiarism, and bias without panic. How to talk to parents and admin responsibly.</p>
            </div>

            {/* Item 2 */}
            <div className="border-2 border-black rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-sta-accent text-black font-black text-6xl opacity-20 p-4 -mr-4 -mt-4 rotate-12 group-hover:opacity-40 transition-opacity">02</div>
              <div className="w-12 h-12 bg-sta-accent/30 rounded-full flex items-center justify-center border-2 border-black mb-6">
                <div className="text-xl font-black text-sta-dark">P</div>
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-3">Prompt Engineering</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Learn the "magic words" to get exactly what you need. Create differentiated reading passages and robust quizzes instantly.</p>
            </div>

            {/* Item 3 */}
            <div className="border-2 border-black rounded-xl p-8 shadow-hard hover:-translate-y-1 transition-transform bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-sta-primary text-white font-black text-6xl opacity-10 p-4 -mr-4 -mt-4 rotate-12 group-hover:opacity-20 transition-opacity">03</div>
              <div className="w-12 h-12 bg-sta-primary/20 rounded-full flex items-center justify-center border-2 border-black mb-6">
                <Star className="w-6 h-6 text-sta-primary" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black text-sta-dark mb-3">Personalized Learning</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Scale yourself. Use AI to create individual feedback loops, IEP goal drafts, and custom content for every student.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Magazine Style */}
      <section id="founder" className="py-24 bg-sta-accent border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-white border-2 border-black translate-x-4 translate-y-4 rounded-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Allen Rabinovich"
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-xl border-2 border-black grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="bg-black text-white inline-block px-3 py-1 font-mono text-sm font-bold mb-6">FOUNDER_PROFILE</div>
              <h2 className="text-5xl font-black text-sta-dark mb-6 tracking-tight">Allen Rabinovich</h2>
              <div className="space-y-6 text-xl text-sta-dark font-medium leading-relaxed">
                <p>
                  Allen has spent over a decade at the forefront of educational innovation, serving public, private, and charter schools across the nation.
                </p>
                <p>
                  From CBOs to massive school districts, Allen understands the unique pressure cookers that educators live in. He doesn't just teach technology; he teaches how to use technology to bring humanity back into the classroom.
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

      {/* Case Studies Section */}
      <section className="py-24 bg-sta-surface bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-sta-dark mb-4">Success Stories</h2>
            <p className="text-slate-600 text-xl font-medium">Real teachers. Real results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study)}
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
        </div>
      </section>

      {/* Pricing / Offerings - Ticket vs Block */}
      <section id="register" className="py-24 bg-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-sta-dark mb-2">Get Trained</h2>
            <p className="text-slate-600 font-medium">Choose your adventure.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

            {/* Individual Ticket Style */}
            <div className="h-[600px]">
              <CohortTicket />
            </div>

            {/* School Site Premium */}
            <div className="relative">
              <div className="absolute inset-0 bg-sta-accent translate-x-2 translate-y-2 rounded-2xl"></div>
              <div className="relative bg-sta-dark text-white border-2 border-black rounded-2xl p-10 h-full flex flex-col">
                <div className="mb-8">
                  <div className="bg-white text-black text-xs font-bold px-3 py-1 inline-block border border-black mb-4">INSTITUTIONAL</div>
                  <h3 className="text-3xl font-black mb-2">School Site Premium</h3>
                  <p className="text-slate-400 font-medium">Customized on-site or virtual training for your entire team.</p>
                </div>

                <div className="space-y-6 flex-grow mb-8 border-l-2 border-slate-700 pl-6">
                  <div>
                    <h4 className="font-bold text-sta-accent mb-1">Custom Curriculum</h4>
                    <p className="text-slate-300 text-sm">Adapted to your specific grade levels, subjects, and tech stack.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sta-accent mb-1">Implementation Support</h4>
                    <p className="text-slate-300 text-sm">Follow-up coaching for leadership to ensure long-term adoption.</p>
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_#fbbf24] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg flex items-center justify-center group">
                  Schedule Consult <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
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
                <h2 className="text-3xl font-black text-sta-dark mb-4">Grab the "AI Starter Pack"</h2>
                <p className="text-slate-600 mb-8 font-medium">
                  A 20-page PDF guide for admin and teachers. Plus, join our newsletter for one high-quality lesson plan each week.
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
                    <span className="text-xs font-black text-slate-400">STARTER PACK</span>
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