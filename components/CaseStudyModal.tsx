import React from 'react';
import { X, Quote, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
    study: CaseStudy;
    onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            <div className="relative w-full max-w-5xl bg-white border-2 border-black shadow-2xl rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col md:flex-row">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white border-2 border-black rounded-full hover:bg-slate-100 transition-colors z-20"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Sidebar / Image Section */}
                <div className="md:w-1/3 bg-sta-surface border-r-2 border-black p-8 flex flex-col relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-sta-accent"></div>

                    <div className="mb-8 text-center">
                        <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full border-4 border-white shadow-hard-sm mb-6 overflow-hidden relative">
                            {study.image && (
                                <img src={study.image} alt={study.name} className="w-full h-full object-cover" />
                            )}
                        </div>
                        <h3 className="text-2xl font-black text-sta-dark leading-tight mb-2">{study.name}</h3>
                        <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                            {study.role}
                        </div>
                        <p className="text-slate-500 text-sm font-mono">{study.location}</p>
                    </div>

                    <div className="mt-auto space-y-6">
                        <div className="border-t-2 border-black/10 pt-6">
                            <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" /> Impact Metrics
                            </h4>
                            <div className="space-y-3">
                                {study.metrics.map((metric, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-white p-3 border-2 border-black rounded-lg shadow-sm">
                                        <span className="text-xs font-bold text-slate-500 uppercase">{metric.label}</span>
                                        <span className="text-xl font-black text-sta-primary">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-8 md:p-12 bg-white relative">
                    <Quote className="absolute top-8 left-8 w-16 h-16 text-sta-accent/20 -z-10" />

                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.1] mb-6">
                            "{study.quote}"
                        </h2>
                        <div className="w-20 h-2 bg-sta-accent"></div>
                    </div>

                    <div className="prose prose-slate prose-lg max-w-none">
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                            {study.fullStory}
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t-2 border-slate-100 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-sta-cta text-white font-bold rounded-lg border-2 border-black hover:bg-sta-cta-hover transition-all shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                        >
                            Close Story
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
