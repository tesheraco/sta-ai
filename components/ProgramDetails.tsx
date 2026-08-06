import React from 'react';
import { ArrowLeft, Check, HelpCircle, Clock, Shield, Zap, BookOpen, Users } from 'lucide-react';
import { ViewState } from '../types';

interface ProgramDetailsProps {
    setView: (view: ViewState) => void;
}

export const ProgramDetails: React.FC<ProgramDetailsProps> = ({ setView }) => {
    return (
        <div className="w-full bg-white">
            {/* Navigation */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-2 border-black px-4 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <button
                        onClick={() => setView(ViewState.LANDING)}
                        className="flex items-center font-bold text-slate-600 hover:text-sta-dark transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                    </button>
                    <button
                        onClick={() => setView(ViewState.SCHEDULE)}
                        className="px-6 py-2 bg-sta-primary text-white font-bold rounded-lg border-2 border-black shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 px-4 bg-sta-surface bg-dot-pattern border-b-2 border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block bg-sta-accent border-2 border-black px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-hard-sm mb-8 rotate-[-2deg]">
                        No Hype. Just Skills.
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-sta-dark mb-8 leading-tight">
                        Stop Drowning in Admin. <br />
                        <span className="text-sta-primary">Start Teaching Again.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        The only AI program designed specifically for educators who are tired of working 60-hour weeks.
                    </p>
                </div>
            </section>

            {/* Objection Handling - "But..." Section */}
            <section className="py-24 px-4 bg-white border-b-2 border-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-sta-dark mb-4">"But I..."</h2>
                        <p className="text-slate-600 text-xl font-medium">We know what you're thinking. Let's talk about it.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Objection 1 */}
                        <div className="bg-slate-50 p-8 border-2 border-black rounded-xl relative">
                            <div className="absolute -top-6 left-8 bg-white border-2 border-black p-3 rounded-full shadow-hard-sm">
                                <HelpCircle className="w-8 h-8 text-sta-accent" />
                            </div>
                            <h3 className="text-xl font-black text-sta-dark mt-6 mb-4">"...am not a 'tech person'."</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Good. You don't need to be. If you can type an email, you can do this. We don't teach code; we teach English. You'll learn the exact phrases to say to get the results you want.
                            </p>
                        </div>

                        {/* Objection 2 */}
                        <div className="bg-slate-50 p-8 border-2 border-black rounded-xl relative">
                            <div className="absolute -top-6 left-8 bg-white border-2 border-black p-3 rounded-full shadow-hard-sm">
                                <Clock className="w-8 h-8 text-sta-primary" />
                            </div>
                            <h3 className="text-xl font-black text-sta-dark mt-6 mb-4">"...don't have time for this."</h3>
                            <p className="text-slate-600 leading-relaxed">
                                That's exactly why you need this. Teachers who take this program save an average of 10 hours per week. Invest 4 weeks now to reclaim your evenings and weekends forever.
                            </p>
                        </div>

                        {/* Objection 3 */}
                        <div className="bg-slate-50 p-8 border-2 border-black rounded-xl relative">
                            <div className="absolute -top-6 left-8 bg-white border-2 border-black p-3 rounded-full shadow-hard-sm">
                                <Shield className="w-8 h-8 text-sta-mint" />
                            </div>
                            <h3 className="text-xl font-black text-sta-dark mt-6 mb-4">"...am worried about cheating."</h3>
                            <p className="text-slate-600 leading-relaxed">
                                So are we. That's why Module 1 is all about Ethics & Safety. We'll show you how to "AI-proof" your assignments and how to have honest conversations with students about integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Deep Dive */}
            <section className="py-24 px-4 bg-sta-surface">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-sta-dark mb-4">The Syllabus</h2>
                        <p className="text-slate-600 text-xl font-medium">4 Weeks. 4 Transformations.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Week 1 */}
                        <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-hard-sm flex flex-col md:flex-row">
                            <div className="bg-sta-secondary/20 p-8 md:w-1/4 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black">
                                <span className="font-black text-6xl text-sta-secondary opacity-50">01</span>
                                <span className="font-bold text-sta-dark uppercase tracking-wider mt-2">Week One</span>
                            </div>
                            <div className="p-8 md:w-3/4">
                                <h3 className="text-2xl font-black text-sta-dark mb-4">Foundation & Safety</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-secondary shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">Understanding LLMs: How they actually "think" (and hallucinate).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-secondary shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">Data Privacy: What NOT to put into ChatGPT.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-secondary shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">The "AI Policy" Template: A ready-to-use document for your syllabus.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Week 2 */}
                        <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-hard-sm flex flex-col md:flex-row">
                            <div className="bg-sta-accent/20 p-8 md:w-1/4 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black">
                                <span className="font-black text-6xl text-sta-accent opacity-50">02</span>
                                <span className="font-bold text-sta-dark uppercase tracking-wider mt-2">Week Two</span>
                            </div>
                            <div className="p-8 md:w-3/4">
                                <h3 className="text-2xl font-black text-sta-dark mb-4">The Planning Engine</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-accent shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">Instant Lesson Plans: Generating 5E plans in seconds, not hours.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-accent shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">Differentiation at Scale: Creating 3 versions of the same text instantly.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-accent shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">Rubric Wizardry: Building custom rubrics that actually make sense.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Week 3 */}
                        <div className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-hard-sm flex flex-col md:flex-row">
                            <div className="bg-sta-primary/20 p-8 md:w-1/4 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black">
                                <span className="font-black text-6xl text-sta-primary opacity-50">03</span>
                                <span className="font-bold text-sta-dark uppercase tracking-wider mt-2">Week Three</span>
                            </div>
                            <div className="p-8 md:w-3/4">
                                <h3 className="text-2xl font-black text-sta-dark mb-4">Grading & Feedback</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-primary shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">The "Feedback Loop": Using AI to give specific, actionable feedback on student work.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-primary shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">Batch Processing: How to handle 150 essays without losing your mind.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sta-primary shrink-0 mt-1" strokeWidth={3} />
                                        <span className="text-slate-700 font-medium">Email Assistant: Drafting professional emails to parents and admin.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 bg-white border-t-2 border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-black text-sta-dark mb-8">Ready to reclaim your weekends?</h2>
                    <button
                        onClick={() => setView(ViewState.SCHEDULE)}
                        className="px-12 py-6 bg-sta-dark text-white text-xl font-bold rounded-xl border-2 border-black shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                        See Upcoming Cohorts
                    </button>
                    <p className="mt-6 text-slate-500 font-medium">
                        100% Satisfaction Guarantee. If you don't save time, we refund you.
                    </p>
                </div>
            </section>
        </div>
    );
};
