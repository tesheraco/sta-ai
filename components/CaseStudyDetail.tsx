import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, GraduationCap, MapPin, Quote } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { PROGRAMS } from '../data/programs';
import { PILLAR_VISUALS } from '../data/pillars';
import { GlanceRow } from './GlanceRow';
import { CONSULT_HREF } from '../data/pricing';

export const CaseStudyDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const study = CASE_STUDIES.find(s => s.id === id);

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Case study not found</h2>
                    <Link to="/case-studies" className="text-sta-primary hover:underline">Back to Case Studies</Link>
                </div>
            </div>
        );
    }

    const visual = PILLAR_VISUALS[study.pillar];
    // Reverse of Program.caseStudyId: the catalog programs this site runs.
    const programs = PROGRAMS.filter(p => p.caseStudyId === study.id);

    return (
        <div className="min-h-screen bg-white">

            {/* Hero */}
            <div className="relative bg-sta-dark overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
                <div className={`absolute bottom-0 left-0 w-full h-2 ${visual.color}`}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-[400px] flex flex-col justify-end pt-24 pb-12">
                    <Link
                        to="/case-studies"
                        className="absolute top-8 left-4 text-white flex items-center font-bold hover:text-sta-accent transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
                    </Link>

                    <div className="flex items-end justify-between gap-8">
                        <div>
                            <div className={`inline-block px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-4 w-fit border-2 border-black ${visual.badge}`}>
                                {study.topic}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl leading-tight">
                                {study.organization}
                            </h1>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/80 font-bold">
                                <div className="flex items-center"><GraduationCap className="w-5 h-5 mr-2" /> {study.gradeLevel}</div>
                                <div className="flex items-center"><Building2 className="w-5 h-5 mr-2" /> {study.organizationType}</div>
                                <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> {study.location}</div>
                            </div>
                        </div>

                        {study.logo && (
                            <div className="hidden md:flex w-56 h-36 shrink-0 bg-white rounded-xl border-2 border-black items-center justify-center p-5">
                                <img src={study.logo} alt={`${study.organization} logo`} className="max-w-full max-h-full object-contain" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="md:col-span-8 space-y-12">

                        {study.overview && (
                            <section>
                                <h2 className="text-3xl font-black text-sta-dark mb-6">Overview</h2>
                                <p className="text-xl text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                                    {study.overview}
                                </p>
                            </section>
                        )}

                        {study.challenge && (
                            <section>
                                <h2 className="text-3xl font-black text-sta-dark mb-6">The Challenge</h2>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                                    {study.challenge}
                                </p>
                            </section>
                        )}

                        {study.approach && (
                            <section>
                                <h2 className="text-3xl font-black text-sta-dark mb-6">What We Did</h2>
                                <div className="space-y-4">
                                    {study.approach.map((step, idx) => (
                                        <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-sta-primary transition-colors group">
                                            <div className="flex items-start">
                                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 mr-4 group-hover:bg-sta-primary group-hover:text-white transition-colors shrink-0">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-sta-dark mb-2">{step.title}</h4>
                                                    <p className="text-slate-600 font-medium">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {study.outcomes && (
                            <section>
                                <h2 className="text-3xl font-black text-sta-dark mb-6">Results</h2>
                                <div className="bg-sta-surface p-8 rounded-xl border-2 border-black shadow-hard-sm">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {study.outcomes.map((outcome, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-sta-mint mr-3 shrink-0 mt-0.5" />
                                                <span className="font-medium text-slate-700">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {study.quote && (
                            <section className="bg-white border-2 border-black rounded-xl p-8 shadow-hard">
                                <Quote className="w-8 h-8 text-sta-primary mb-4" fill="currentColor" strokeWidth={0} />
                                <p className="text-xl md:text-2xl font-bold text-slate-800 leading-snug mb-6">
                                    "{study.quote.text}"
                                </p>
                                <div className="font-black text-sm text-sta-dark uppercase">{study.quote.name}</div>
                                <div className="text-slate-500 text-xs font-mono">{study.quote.role}</div>
                            </section>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-4">
                        <div className="md:sticky md:top-28 space-y-8 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto md:px-1 md:-mx-1 md:pb-1">

                            <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                                <h3 className="font-black text-lg mb-4">At a Glance</h3>
                                <ul className="space-y-3 text-sm font-medium text-slate-600">
                                    <GlanceRow label="Topic" value={study.topic} />
                                    <GlanceRow label="Grade level" value={study.gradeLevel} />
                                    <GlanceRow label="Organization type" value={study.organizationType} />
                                    <GlanceRow label="Location" value={study.location} />
                                </ul>
                            </div>

                            {programs.length > 0 && (
                                <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                                    <h3 className="font-black text-lg mb-4">Programs at This Site</h3>
                                    <div className="space-y-3">
                                        {programs.map(program => (
                                            <Link
                                                key={program.id}
                                                to={`/programs/${program.id}`}
                                                className="flex items-center gap-4 p-3 bg-white border-2 border-black rounded-lg shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
                                            >
                                                <div className={`w-14 h-14 shrink-0 rounded-md border-2 border-black overflow-hidden flex items-center justify-center ${PILLAR_VISUALS[program.pillar].color}`}>
                                                    {program.image ? (
                                                        <img src={program.image} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        React.createElement(PILLAR_VISUALS[program.pillar].icon, {
                                                            className: 'w-6 h-6 text-black',
                                                            strokeWidth: 2.5,
                                                        })
                                                    )}
                                                </div>
                                                <div className="flex-grow min-w-0">
                                                    <div className="font-black text-sm text-sta-dark leading-snug group-hover:text-sta-primary transition-colors">
                                                        {program.title}
                                                    </div>
                                                    <div className="text-xs font-bold text-slate-500 mt-1">View program</div>
                                                </div>
                                                <div className="w-8 h-8 shrink-0 rounded-full bg-sta-cta text-white border-2 border-black flex items-center justify-center group-hover:bg-sta-cta-hover transition-colors">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard">
                                <h3 className="font-black text-xl mb-2">Want results like these?</h3>
                                <p className="text-slate-500 font-medium text-sm mb-6">
                                    Train the staff you already have to run AI, STEM, and Esports programs at your site.
                                </p>
                                <a
                                    href={CONSULT_HREF}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-sta-cta text-white rounded-lg font-bold text-lg text-center shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all mb-4"
                                >
                                    Book a Consult
                                </a>
                                <Link
                                    to="/programs"
                                    className="block w-full py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg text-center hover:bg-slate-50 transition-all"
                                >
                                    Browse Programs
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
