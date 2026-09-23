import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudyCard } from './CaseStudyCard';
import { CONSULT_HREF } from '../data/pricing';

export const CaseStudiesPage: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-sta-surface bg-dot-pattern">
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
                    {CASE_STUDIES.map(study => (
                        <CaseStudyCard key={study.id} study={study} />
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
                            href={CONSULT_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sta-cta text-white border-2 border-black rounded-lg font-bold shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                        >
                            Book a Consult
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
