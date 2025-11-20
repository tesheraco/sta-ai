import React from 'react';
import { ArrowLeft, Shield, Video, Clock, CreditCard, CheckCircle } from 'lucide-react';
import { ViewState } from '../types';
import { CohortTicket } from './CohortTicket';

interface SchedulePageProps {
    setView: (view: ViewState) => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ setView }) => {
    return (
        <div className="w-full min-h-screen bg-sta-surface bg-dot-pattern">
            {/* Navigation */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-2 border-black px-4 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <button
                        onClick={() => setView(ViewState.LANDING)}
                        className="flex items-center font-bold text-slate-600 hover:text-sta-dark transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                    </button>
                    <div className="font-black text-sta-dark uppercase tracking-widest text-sm hidden md:block">
                        Secure Registration
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-sta-dark mb-4">Choose Your Cohort</h1>
                    <p className="text-xl text-slate-600 font-medium">Join the next wave of AI-enabled educators.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: The Ticket */}
                    <div className="lg:col-span-7 sticky top-24">
                        <div className="h-[700px]">
                            <CohortTicket />
                        </div>
                    </div>

                    {/* Right Column: Trust & Info */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Trust Box 1: Logistics */}
                        <div className="bg-white p-8 border-2 border-black rounded-xl shadow-hard-sm">
                            <h3 className="text-xl font-black text-sta-dark mb-6 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-sta-primary" /> Logistics
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Video className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <span className="font-bold text-slate-800 block">Live on Zoom</span>
                                        <span className="text-sm text-slate-600">Interactive sessions with breakout rooms.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <span className="font-bold text-slate-800 block">90 Minutes / Week</span>
                                        <span className="text-sm text-slate-600">Short enough to fit your schedule, long enough to go deep.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <span className="font-bold text-slate-800 block">Recordings Included</span>
                                        <span className="text-sm text-slate-600">Miss a session? Catch up on your own time.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Trust Box 2: Guarantee */}
                        <div className="bg-sta-mint/20 p-8 border-2 border-black rounded-xl shadow-hard-sm">
                            <h3 className="text-xl font-black text-sta-dark mb-4 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-sta-mint" /> The "No-Risk" Guarantee
                            </h3>
                            <p className="text-slate-700 font-medium leading-relaxed mb-4">
                                If you don't feel like you've saved at least 10 hours of work by the end of the first week, email us and we'll refund 100% of your tuition. No questions asked.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
                                <CreditCard className="w-4 h-4" /> Secure Payment via Stripe
                            </div>
                        </div>

                        {/* Testimonial Snippet */}
                        <div className="bg-white p-6 border-2 border-black border-dashed rounded-xl">
                            <p className="text-slate-600 italic mb-4">
                                "I was skeptical about an online course, but the live sessions were so engaging. It felt like a real workshop, not a webinar."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-slate-200 rounded-full border border-black"></div>
                                <div className="text-sm font-bold text-sta-dark">David K., Science Teacher</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
