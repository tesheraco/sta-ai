import React from 'react';
import { ArrowLeft, ArrowRight, Users, Monitor, Package, CheckCircle2, BookOpen, ShieldCheck, ClipboardList, GraduationCap, Clock, Video, UserCheck, Trophy, Quote } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { CaseStudy, ProgramPillar } from '../types';
import { PROGRAMS } from '../data/programs';
import { PILLAR_VISUALS } from '../data/pillars';
import { CASE_STUDIES } from '../data/caseStudies';
import { SHARED_FAQS } from '../data/faqs';
import { CaseStudyModal } from './CaseStudyModal';
import { FaqSection } from './FaqSection';
import { PathToLaunch } from './PathToLaunch';

const GlanceRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <li className="flex justify-between gap-4">
        <span className="text-slate-400 font-bold shrink-0">{label}</span>
        <span className="text-right">{value}</span>
    </li>
);

export const ProgramDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const program = PROGRAMS.find(c => c.id === id);
    const caseStudy = program?.caseStudyId ? CASE_STUDIES.find(s => s.id === program.caseStudyId) : undefined;
    const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<CaseStudy | null>(null);

    if (!program) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Program not found</h2>
                    <Link to="/programs" className="text-sta-primary hover:underline">Back to Program Library</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {selectedCaseStudy && (
                <CaseStudyModal
                    study={selectedCaseStudy}
                    onClose={() => setSelectedCaseStudy(null)}
                />
            )}

            {/* Hero */}
            <div className="relative h-[400px] bg-sta-dark overflow-hidden">
                {program.image ? (
                    <img
                        src={program.image}
                        alt={program.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                ) : (
                    <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-sta-dark via-transparent to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
                    <Link
                        to="/programs"
                        className="absolute top-8 left-4 text-white flex items-center font-bold hover:text-sta-accent transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Program Library
                    </Link>

                    <div className={`inline-block px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-4 w-fit border-2 border-black ${PILLAR_VISUALS[program.pillar].badge}`}>
                        {program.pillar}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl leading-tight">
                        {program.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-white/80 font-bold">
                        <div className="flex items-center"><GraduationCap className="w-5 h-5 mr-2" /> {program.grades}</div>
                        <div className="flex items-center"><Monitor className="w-5 h-5 mr-2" /> {program.devices === 'None' ? 'No devices needed' : 'Devices required'}</div>
                        <div className="flex items-center"><Users className="w-5 h-5 mr-2" /> Staff training included</div>
                    </div>
                </div>

                {/* Attribution — required by the CC BY / BY-SA terms on the sourced imagery. */}
                {program.imageCredit && (
                    <a
                        href={program.imageCredit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-4 z-10 text-[11px] text-white/50 hover:text-white/80 transition-colors"
                    >
                        Photo: {program.imageCredit.text} · {program.imageCredit.license}
                    </a>
                )}
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="md:col-span-8 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">Program Overview</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                {program.description}
                            </p>
                        </section>

                        {/* What Students Learn + Why It Matters — the director's pitch up and out */}
                        {(program.studentOutcomes || program.whyItMatters) && (
                            <section>
                                <h2 className="text-3xl font-black text-sta-dark mb-6">What Students Learn</h2>

                                {program.studentOutcomes && (
                                    <div className="bg-white p-8 rounded-xl border-2 border-black shadow-hard-sm mb-8">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {program.studentOutcomes.map((outcome, idx) => (
                                                <div key={idx} className="flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 text-sta-mint mr-3 shrink-0 mt-0.5" />
                                                    <span className="font-medium text-slate-700">{outcome}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {program.whyItMatters && (
                                    <div>
                                        <h3 className="font-black text-xl mb-4">Why It Matters for Your Site</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {program.whyItMatters.map((angle, idx) => (
                                                <div key={idx} className="bg-sta-surface border-2 border-slate-200 rounded-xl p-6">
                                                    <h4 className="font-black text-sta-dark mb-2">{angle.title}</h4>
                                                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{angle.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </section>
                        )}

                        {/* The Student Journey — makes the semester of curriculum tangible */}
                        {program.curriculumArc && (
                            <section>
                                <h2 className="text-3xl font-black text-sta-dark mb-2">The Student Journey</h2>
                                <p className="text-slate-600 font-medium mb-6">
                                    A full semester of weekly sessions, building toward a culminating event.
                                </p>
                                <div className="space-y-4">
                                    {program.curriculumArc.map((phase, idx) => (
                                        <div
                                            key={idx}
                                            className={`rounded-xl p-6 border-2 transition-colors group ${
                                                phase.isCapstone
                                                    ? 'bg-sta-primary/5 border-sta-primary'
                                                    : 'bg-white border-slate-200 hover:border-sta-primary'
                                            }`}
                                        >
                                            <div className="flex items-start">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black mr-4 shrink-0 transition-colors ${
                                                    phase.isCapstone
                                                        ? 'bg-sta-primary text-white'
                                                        : 'bg-slate-100 text-slate-400 group-hover:bg-sta-primary group-hover:text-white'
                                                }`}>
                                                    {phase.isCapstone ? <Trophy className="w-5 h-5" /> : idx + 1}
                                                </div>
                                                <div>
                                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                                                        <h4 className="text-xl font-bold text-sta-dark">{phase.title}</h4>
                                                        {phase.weeks && (
                                                            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{phase.weeks}</span>
                                                        )}
                                                        {phase.isCapstone && (
                                                            <span className="px-2 py-0.5 rounded border-2 border-black bg-sta-accent text-xs font-bold uppercase tracking-wider">Capstone Event</span>
                                                        )}
                                                    </div>
                                                    <p className="text-slate-600 font-medium">{phase.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* How Your Staff Get Ready */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">How Your Staff Get Ready</h2>

                            {/* Universal training format facts */}
                            <div className="bg-white border-2 border-black rounded-xl shadow-hard-sm px-6 py-4 mb-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-sta-dark">
                                <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-sta-primary shrink-0" /> 4 hours of zero-to-one training</div>
                                <div className="flex items-center"><Video className="w-4 h-4 mr-2 text-sta-primary shrink-0" /> In-person, or virtual (2 × 2 hrs)</div>
                                <div className="flex items-center"><UserCheck className="w-4 h-4 mr-2 text-sta-primary shrink-0" /> No STEM experience expected</div>
                            </div>

                            {program.staffOutcomes && (
                                <div className="bg-sta-surface p-8 rounded-xl border-2 border-black shadow-hard-sm mb-8">
                                    <h3 className="font-black text-xl mb-4">What Your Staff Will Learn</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {program.staffOutcomes.map((outcome, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-sta-mint mr-3 shrink-0 mt-0.5" />
                                                <span className="font-medium text-slate-700">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {program.trainingModules ? (
                                <div>
                                    <h3 className="font-black text-xl mb-4">The Training, Module by Module</h3>
                                    <div className="space-y-4">
                                        {program.trainingModules.map((module, idx) => (
                                            <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-sta-primary transition-colors group">
                                                <div className="flex items-start">
                                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 mr-4 group-hover:bg-sta-primary group-hover:text-white transition-colors shrink-0">
                                                        {idx + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-bold text-sta-dark mb-2">{module.title}</h4>
                                                        <p className="text-slate-600 font-medium">{module.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : !program.curriculumArc && (
                                <div className="bg-sta-surface border-2 border-dashed border-slate-300 rounded-xl p-8 text-center">
                                    <ClipboardList className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                                    <p className="font-bold text-sta-dark mb-1">Full curriculum map available on request</p>
                                    <p className="text-slate-500 font-medium text-sm max-w-md mx-auto">
                                        Every program includes session-by-session facilitation guides, staff training modules, and a materials shopping list. Book a consult to see the complete syllabus.
                                    </p>
                                </div>
                            )}
                        </section>

                        {/* Proof — case study evidence right after the training claims */}
                        {caseStudy && (
                            <section>
                                <h2 className="text-3xl font-black text-sta-dark mb-6">Proof It Works</h2>
                                <div className="bg-white border-2 border-black rounded-xl p-8 shadow-hard">
                                    <Quote className="w-8 h-8 text-sta-primary mb-4" fill="currentColor" strokeWidth={0} />
                                    <p className="text-xl md:text-2xl font-bold text-slate-800 leading-snug mb-6">
                                        "{caseStudy.quote}"
                                    </p>
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 bg-slate-200 rounded-full border border-black mr-3 overflow-hidden shrink-0">
                                            {caseStudy.image && <img src={caseStudy.image} alt={caseStudy.name} className="w-full h-full object-cover" />}
                                        </div>
                                        <div>
                                            <div className="font-black text-sm text-sta-dark uppercase">{caseStudy.name}</div>
                                            <div className="text-slate-500 text-xs font-mono">{caseStudy.role} · {caseStudy.location}</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 border-t-2 border-slate-100 pt-6 mb-6">
                                        {caseStudy.metrics.map((metric, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-2xl font-black text-sta-primary">{metric.value}</div>
                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setSelectedCaseStudy(caseStudy)}
                                        className="w-full py-3 bg-slate-50 border-2 border-black rounded-lg font-bold text-sm hover:bg-sta-cta hover:text-white transition-colors flex items-center justify-center gap-2"
                                    >
                                        Read the Full Story <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </section>
                        )}

                        {/* Devices & Materials */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">What You'll Need</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Monitor className="w-5 h-5 text-sta-primary" />
                                        <h3 className="font-black text-lg">Devices</h3>
                                    </div>
                                    <p className="text-slate-600 font-medium">{program.devices === 'None' ? 'None — this program is fully screen-free.' : program.devices}</p>
                                </div>
                                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Package className="w-5 h-5 text-sta-primary" />
                                        <h3 className="font-black text-lg">Materials</h3>
                                    </div>
                                    <p className="text-slate-600 font-medium">{program.materials}</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 font-medium mt-4">
                                Your organization purchases materials directly — we provide an exact shopping list with the lowest-cost, highest-quality purchase links.
                            </p>
                        </section>

                        {/* Path to Launch — universal model, renders for every program */}
                        <section>
                            <PathToLaunch />
                        </section>

                        {/* AI responsible use note */}
                        {program.pillar === ProgramPillar.AI && (
                            <section className="bg-sta-dark text-white rounded-xl border-2 border-black p-8 shadow-hard-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <ShieldCheck className="w-6 h-6 text-sta-mint" />
                                    <h3 className="font-black text-xl">Age-Gating & Responsible Use — Built In</h3>
                                </div>
                                <p className="text-slate-300 font-medium leading-relaxed">
                                    Most consumer AI tools require users to be 13+ (often 18, or 13 with consent) — and virtually no after-school staff know this. This program trains your team on exactly which tools each grade can legally use, how to supervise sessions, and how to communicate your AI policy to parents.
                                </p>
                            </section>
                        )}

                        {/* FAQ — program-specific questions first, then the shared ones */}
                        <section>
                            <FaqSection heading="Common Questions" items={[...(program.faq ?? []), ...SHARED_FAQS]} />
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-4">
                      <div className="md:sticky md:top-28 space-y-8 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto md:px-1 md:-mx-1 md:pb-1">

                        <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard">
                            <h3 className="font-black text-xl mb-2">Bring this to your site</h3>
                            <p className="text-slate-500 font-medium text-sm mb-6">
                                One-time fee per site — covers staff training, a full semester of curriculum, and 6 months of support. No recurring fees. Most programs launch within 4 weeks of onboarding.
                            </p>

                            <a
                                href="https://calendly.com/sta-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-sta-cta text-white rounded-lg font-bold text-lg text-center shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all mb-4"
                            >
                                Request a Quote
                            </a>
                            <Link
                                to="/programs"
                                className="block w-full py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg text-center hover:bg-slate-50 transition-all"
                            >
                                Browse More Programs
                            </Link>

                            <div className="mt-6 pt-6 border-t-2 border-slate-100 space-y-3 text-sm font-medium text-slate-600">
                                <div className="flex items-center"><Users className="w-4 h-4 mr-2 shrink-0" /> No experienced instructors required</div>
                                <div className="flex items-center"><BookOpen className="w-4 h-4 mr-2 shrink-0" /> Session-by-session facilitation guides</div>
                                <div className="flex items-center"><Package className="w-4 h-4 mr-2 shrink-0" /> Exact materials shopping list included</div>
                                <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 shrink-0" /> POs accepted for organizations</div>
                            </div>
                        </div>

                        {/* Quick facts */}
                        <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                            <h3 className="font-black text-lg mb-4">At a Glance</h3>
                            <ul className="space-y-3 text-sm font-medium text-slate-600">
                                <GlanceRow label="Grades" value={program.grades.replace('Grades ', '')} />
                                <GlanceRow label="Pillar" value={program.pillar} />
                                <GlanceRow label="Devices" value={program.devices === 'None' ? 'None (screen-free)' : program.devices} />
                                {program.logistics?.sessionLength && <GlanceRow label="Session length" value={program.logistics.sessionLength} />}
                                {program.logistics?.totalSessions && <GlanceRow label="Sessions" value={program.logistics.totalSessions} />}
                                {program.logistics?.groupSize && <GlanceRow label="Group size" value={program.logistics.groupSize} />}
                                {program.logistics?.staffRatio && <GlanceRow label="Staff ratio" value={program.logistics.staffRatio} />}
                                <GlanceRow label="Staff training" value="4 hours" />
                                <GlanceRow label="Curriculum" value="~16 hours" />
                                <GlanceRow label="Support" value="6 months" />
                            </ul>
                        </div>

                      </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
