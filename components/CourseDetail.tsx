import React from 'react';
import { ArrowLeft, Clock, Users, Box, CheckCircle2, BookOpen, PlayCircle } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Course } from '../types';
import { COURSES } from '../data/courses';
import { CohortTicket } from './CohortTicket';

export const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const course = COURSES.find(c => c.id === id);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Course not found</h2>
                    <Link to="/courses" className="text-sta-primary hover:underline">Back to Courses</Link>
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
                        className="absolute top-8 left-4 text-white flex items-center font-bold hover:text-sta-primary transition-colors bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
                    </Link>

                    <div className="inline-block bg-sta-primary text-white px-3 py-1 rounded font-bold text-xs uppercase tracking-wider mb-4 w-fit">
                        {course.category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl leading-tight">
                        {course.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-white/80 font-bold">
                        <div className="flex items-center"><Clock className="w-5 h-5 mr-2" /> {course.duration}</div>
                        <div className="flex items-center"><Users className="w-5 h-5 mr-2" /> {course.gradeLevel}</div>
                        <div className="flex items-center"><Box className="w-5 h-5 mr-2" /> {course.equipment.length > 0 ? 'Hardware Required' : 'No Hardware'}</div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="md:col-span-8 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">Course Overview</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                                {course.description}
                            </p>

                            <div className="bg-sta-surface p-8 rounded-xl border-2 border-black shadow-hard-sm">
                                <h3 className="font-black text-xl mb-4">Learning Outcomes</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {course.learningOutcomes.map((outcome, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-sta-mint mr-3 shrink-0 mt-0.5" />
                                            <span className="font-medium text-slate-700">{outcome}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Syllabus */}
                        <section>
                            <h2 className="text-3xl font-black text-sta-dark mb-6">Syllabus</h2>
                            <div className="space-y-4">
                                {course.syllabus.map((module, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-sta-primary transition-colors group">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 mr-4 group-hover:bg-sta-primary group-hover:text-white transition-colors">
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
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-4 space-y-8">

                        {/* Purchase Card or Schedule */}
                        <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard sticky top-8">
                            {course.id === 'ai-educators' ? (
                                <div>
                                    <h3 className="font-black text-xl mb-4">Upcoming Cohorts</h3>
                                    <p className="text-sm text-slate-600 mb-4">Select a date to register your team.</p>
                                    <div className="border-2 border-slate-100 rounded-lg overflow-hidden">
                                        {/* Simplified Ticket View for Sidebar or just embed the whole thing */}
                                        <CohortTicket />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="text-3xl font-black text-sta-dark mb-2">${course.price}</div>
                                    <p className="text-slate-500 font-medium text-sm mb-6">Per staff member / Lifetime access</p>

                                    <button className="w-full py-4 bg-sta-dark text-white rounded-lg font-bold text-lg shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all mb-4">
                                        Enroll Now
                                    </button>
                                    <button className="w-full py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg hover:bg-slate-50 transition-all">
                                        Request Team Quote
                                    </button>
                                </>
                            )}

                            <div className="mt-6 pt-6 border-t-2 border-slate-100 space-y-3 text-sm font-medium text-slate-600">
                                <div className="flex items-center"><PlayCircle className="w-4 h-4 mr-2" /> 100% Online & Self-Paced</div>
                                <div className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> Certificate of Completion</div>
                            </div>
                        </div>
                        {/* Equipment List */}
                        <div className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200">
                            <h3 className="font-black text-lg mb-4">Required Equipment</h3>
                            <ul className="space-y-2">
                                {course.equipment.map((item, idx) => (
                                    <li key={idx} className="text-sm font-medium text-slate-600 flex items-center">
                                        <div className="w-1.5 h-1.5 bg-sta-accent rounded-full mr-2"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
