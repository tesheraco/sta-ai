import React from 'react';
import { ArrowLeft, Users, Monitor, Package, CheckCircle2, BookOpen, ShieldCheck, ClipboardList, GraduationCap } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { CoursePillar } from '../types';
import { COURSES } from '../data/courses';

const PILLAR_BADGE: Record<CoursePillar, string> = {
    [CoursePillar.STEM]: 'bg-sta-primary text-white',
    [CoursePillar.AI]: 'bg-sta-secondary text-white',
    [CoursePillar.ESPORTS]: 'bg-sta-accent text-black',
};

export const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const course = COURSES.find(c => c.id === id);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Course not found</h2>
                    <Link to="/courses" className="text-sta-primary hover:underline">Back to Course Library</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative h-[400px] bg-sta-dark overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sta-dark via-transparent to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
                    <Link
                        to="/courses"
                        className="absolute top-8 left-4 text-white flex items-center font-bold hover:text-sta-accent transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Course Library
                    </Link>

                    <div className={`inline-block px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-4 w-fit border-2 border-black ${PILLAR_BADGE[course.pillar]}`}>
                        {course.pillar}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl leading-tight">
                        {course.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-white/80 font-bold">
                        <div className="flex items-center"><GraduationCap className="w-5 h-5 mr-2" /> {course.grades}</div>
                        <div className="flex items-center"><Monitor className="w-5 h-5 mr-2" /> {course.devices === 'None' ? 'No devices needed' : 'Devices required'}</div>
                        <div className="flex items-center"><Users className="w-5 h-5 mr-2" /> Staff training included</div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="md:col-span-8 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">Program Overview</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                                {course.description}
                            </p>

                            {course.learningOutcomes && (
                                <div className="bg-sta-surface p-8 rounded-xl border-2 border-black shadow-hard-sm">
                                    <h3 className="font-black text-xl mb-4">What Your Staff Will Learn</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {course.learningOutcomes.map((outcome, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <CheckCircle2 className="w-5 h-5 text-sta-mint mr-3 shrink-0 mt-0.5" />
                                                <span className="font-medium text-slate-700">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Devices & Materials */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">What You'll Need</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Monitor className="w-5 h-5 text-sta-primary" />
                                        <h3 className="font-black text-lg">Devices</h3>
                                    </div>
                                    <p className="text-slate-600 font-medium">{course.devices === 'None' ? 'None — this program is fully screen-free.' : course.devices}</p>
                                </div>
                                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Package className="w-5 h-5 text-sta-primary" />
                                        <h3 className="font-black text-lg">Materials</h3>
                                    </div>
                                    <p className="text-slate-600 font-medium">{course.materials}</p>
                                </div>
                            </div>
                        </section>

                        {/* Syllabus */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">Training Modules</h2>
                            {course.syllabus ? (
                                <div className="space-y-4">
                                    {course.syllabus.map((module, idx) => (
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
                            ) : (
                                <div className="bg-sta-surface border-2 border-dashed border-slate-300 rounded-xl p-8 text-center">
                                    <ClipboardList className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                                    <p className="font-bold text-sta-dark mb-1">Full curriculum map available on request</p>
                                    <p className="text-slate-500 font-medium text-sm max-w-md mx-auto">
                                        Every program includes session-by-session facilitation guides, staff training modules, and a materials shopping list. Book a consult to see the complete syllabus.
                                    </p>
                                </div>
                            )}
                        </section>

                        {/* AI responsible use note */}
                        {course.pillar === CoursePillar.AI && (
                            <section className="bg-sta-dark text-white rounded-xl border-2 border-black p-8 shadow-hard-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <ShieldCheck className="w-6 h-6 text-sta-mint" />
                                    <h3 className="font-black text-xl">Age-Gating & Responsible Use — Built In</h3>
                                </div>
                                <p className="text-slate-300 font-medium leading-relaxed">
                                    Most consumer AI tools require users to be 13+ (often 18, or 13 with consent) — and virtually no after-school staff know this. This course trains your team on exactly which tools each grade can legally use, how to supervise sessions, and how to communicate your AI policy to parents.
                                </p>
                            </section>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-4 space-y-8">

                        <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard sticky top-28">
                            <h3 className="font-black text-xl mb-2">Bring this to your site</h3>
                            <p className="text-slate-500 font-medium text-sm mb-6">
                                Pricing is based on the number of sites and staff trained. Most programs launch within 4 weeks of onboarding.
                            </p>

                            <a
                                href="https://calendly.com/sta-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-sta-dark text-white rounded-lg font-bold text-lg text-center shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all mb-4"
                            >
                                Request a Quote
                            </a>
                            <Link
                                to="/courses"
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
                                <li className="flex justify-between gap-4">
                                    <span className="text-slate-400 font-bold shrink-0">Grades</span>
                                    <span className="text-right">{course.grades.replace('Grades ', '')}</span>
                                </li>
                                <li className="flex justify-between gap-4">
                                    <span className="text-slate-400 font-bold shrink-0">Pillar</span>
                                    <span className="text-right">{course.pillar}</span>
                                </li>
                                <li className="flex justify-between gap-4">
                                    <span className="text-slate-400 font-bold shrink-0">Devices</span>
                                    <span className="text-right">{course.devices === 'None' ? 'None (screen-free)' : course.devices}</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
