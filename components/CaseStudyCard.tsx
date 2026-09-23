import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, GraduationCap, MapPin } from 'lucide-react';
import { CaseStudy } from '../types';
import { PILLAR_VISUALS } from '../data/pillars';

/** Site tile linking to the case study detail page. Shared by /case-studies, Landing, and Pricing. */
export const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
    const visual = PILLAR_VISUALS[study.pillar];

    return (
        <Link
            to={`/case-studies/${study.id}`}
            className="bg-white rounded-xl border-2 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-all group overflow-hidden flex flex-col h-full"
        >
            <div className={`h-44 border-b-2 border-black relative bg-dot-pattern flex items-center justify-center ${visual.color}`}>
                {study.logo ? (
                    <div className="w-44 h-24 bg-white rounded-xl border-2 border-black flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-500">
                        {/* The organization name is the tile heading, so the logo stays decorative. */}
                        <img src={study.logo} alt="" loading="lazy" className="max-w-full max-h-full object-contain" />
                    </div>
                ) : (
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        {React.createElement(visual.icon, {
                            className: 'w-8 h-8 text-black',
                            strokeWidth: 2.5,
                        })}
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className={`self-start px-3 py-1 rounded-full border-2 border-black text-xs font-black uppercase tracking-wider mb-3 ${visual.badge}`}>
                    {study.topic}
                </div>
                <h3 className="text-xl font-black text-sta-dark mb-2 group-hover:text-sta-primary transition-colors">
                    {study.organization}
                </h3>
                {study.summary && (
                    <p className="text-slate-600 text-sm font-medium mb-5">{study.summary}</p>
                )}

                <div className="space-y-2 mt-auto pt-3 mb-6 text-sm font-medium text-slate-500">
                    <div className="flex items-start">
                        <GraduationCap className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                        <span>{study.gradeLevel}</span>
                    </div>
                    <div className="flex items-start">
                        <Building2 className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                        <span>{study.organizationType}</span>
                    </div>
                    <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                        <span>{study.location}</span>
                    </div>
                </div>

                <div className="w-full py-3 bg-slate-50 border-2 border-black rounded-lg font-bold text-sm text-center group-hover:bg-sta-cta group-hover:text-white transition-colors flex items-center justify-center gap-2">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
};
