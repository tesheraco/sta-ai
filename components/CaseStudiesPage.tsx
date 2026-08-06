import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudyModal } from './CaseStudyModal';

export const CaseStudiesPage: React.FC = () => {
    const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudy | null>(null);

    return (
        <div className="w-full min-h-screen bg-sta-surface bg-dot-pattern">
            {selectedCaseStudy && (
                <CaseStudyModal
                    study={selectedCaseStudy}
                    onClose={() => setSelectedCaseStudy(null)}
                />
            )}

            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-2 border-black px-4 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center font-bold text-slate-600 hover:text-sta-dark transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                    </Link>
                    <div className="font-black text-sta-dark uppercase tracking-widest text-sm hidden md:block">
                        Case Studies
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-sta-dark mb-4">Success Stories</h1>
                    <p className="text-xl text-slate-600 font-medium">Real sites. Real staff. Real programs.</p>
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

                            <div className="w-full py-3 bg-slate-50 border-2 border-black rounded-lg font-bold text-sm text-center group-hover:bg-sta-cta group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                Read Success Story <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-white border-2 border-black rounded-xl shadow-hard p-10 text-center">
                    <h2 className="text-3xl font-black text-sta-dark mb-3">Want results like these?</h2>
                    <p className="text-slate-600 font-medium mb-8 max-w-2xl mx-auto">
                        Train the staff you already have to run AI, STEM, and Esports programs at your site.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/programs"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sta-primary text-white border-2 border-black rounded-lg font-bold shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                        >
                            Browse Programs <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="https://calendly.com/sta-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sta-cta text-white border-2 border-black rounded-lg font-bold shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                        >
                            Book a Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
