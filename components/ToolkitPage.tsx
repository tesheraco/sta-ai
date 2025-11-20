import React, { useState } from 'react';
import {
    Wand2, Loader2, Clock, BrainCircuit, Lock, Share, Save,
    LayoutDashboard, FileQuestion, ListChecks, Mail, Target, Menu, X
} from 'lucide-react';
import { generateLessonPlan, generateQuiz, generateRubric, generateEmail, generateIEPGoal } from '../services/geminiService';
import { LessonPlan } from '../types';

enum Tool {
    LESSON_PLANNER = 'LESSON_PLANNER',
    QUIZ_GENERATOR = 'QUIZ_GENERATOR',
    RUBRIC_BUILDER = 'RUBRIC_BUILDER',
    EMAIL_POLISHER = 'EMAIL_POLISHER',
    IEP_DRAFTER = 'IEP_DRAFTER'
}

export const ToolkitPage: React.FC = () => {
    const [activeTool, setActiveTool] = useState<Tool>(Tool.LESSON_PLANNER);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // --- Tool States ---
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    // Lesson Planner State
    const [lpTopic, setLpTopic] = useState('');
    const [lpGrade, setLpGrade] = useState('5th Grade');

    // Quiz Generator State
    const [quizTopic, setQuizTopic] = useState('');
    const [quizCount, setQuizCount] = useState(5);

    // Rubric Builder State
    const [rubricAssignment, setRubricAssignment] = useState('');

    // Email Polisher State
    const [emailNotes, setEmailNotes] = useState('');

    // IEP Drafter State
    const [iepArea, setIepArea] = useState('');

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        try {
            let res;
            switch (activeTool) {
                case Tool.LESSON_PLANNER:
                    res = await generateLessonPlan(lpTopic, lpGrade);
                    break;
                case Tool.QUIZ_GENERATOR:
                    res = await generateQuiz(quizTopic, lpGrade, quizCount);
                    break;
                case Tool.RUBRIC_BUILDER:
                    res = await generateRubric(rubricAssignment, lpGrade);
                    break;
                case Tool.EMAIL_POLISHER:
                    res = await generateEmail(emailNotes, 'Professional');
                    break;
                case Tool.IEP_DRAFTER:
                    res = await generateIEPGoal(iepArea, lpGrade);
                    break;
            }
            setResult(res);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const renderSidebarItem = (tool: Tool, icon: React.ReactNode, label: string) => (
        <button
            onClick={() => { setActiveTool(tool); setIsSidebarOpen(false); setResult(null); }}
            className={`w-full flex items-center px-4 py-3 rounded-lg font-bold text-sm transition-all mb-2 ${activeTool === tool
                    ? 'bg-sta-primary text-white shadow-hard-sm border-2 border-black'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
        >
            {icon}
            <span className="ml-3">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-sta-surface flex">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-sta-dark text-white rounded-full shadow-hard border-2 border-black flex items-center justify-center"
            >
                {isSidebarOpen ? <X /> : <Menu />}
            </button>

            {/* Sidebar */}
            <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r-2 border-black transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
                <div className="p-6">
                    <h2 className="text-xl font-black text-sta-dark mb-8 flex items-center">
                        <LayoutDashboard className="w-6 h-6 mr-2" /> Toolkit
                    </h2>
                    <nav>
                        {renderSidebarItem(Tool.LESSON_PLANNER, <Wand2 className="w-5 h-5" />, 'Lesson Planner')}
                        {renderSidebarItem(Tool.QUIZ_GENERATOR, <FileQuestion className="w-5 h-5" />, 'Quiz Generator')}
                        {renderSidebarItem(Tool.RUBRIC_BUILDER, <ListChecks className="w-5 h-5" />, 'Rubric Builder')}
                        {renderSidebarItem(Tool.EMAIL_POLISHER, <Mail className="w-5 h-5" />, 'Email Polisher')}
                        {renderSidebarItem(Tool.IEP_DRAFTER, <Target className="w-5 h-5" />, 'IEP Goal Drafter')}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-black text-sta-dark mb-8">
                        {activeTool === Tool.LESSON_PLANNER && 'Lesson Planner'}
                        {activeTool === Tool.QUIZ_GENERATOR && 'Quiz Generator'}
                        {activeTool === Tool.RUBRIC_BUILDER && 'Rubric Builder'}
                        {activeTool === Tool.EMAIL_POLISHER && 'Email Polisher'}
                        {activeTool === Tool.IEP_DRAFTER && 'IEP Goal Drafter'}
                    </h1>

                    <div className="grid md:grid-cols-12 gap-8">
                        {/* Input Panel */}
                        <div className="md:col-span-4">
                            <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
                                <form onSubmit={handleGenerate} className="space-y-4">

                                    {/* Shared Grade Input (except for Email) */}
                                    {activeTool !== Tool.EMAIL_POLISHER && (
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Grade Level</label>
                                            <select
                                                value={lpGrade}
                                                onChange={(e) => setLpGrade(e.target.value)}
                                                className="w-full px-3 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium"
                                            >
                                                {['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', 'Middle School', 'High School'].map(g => (
                                                    <option key={g} value={g}>{g}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    {/* Tool Specific Inputs */}
                                    {activeTool === Tool.LESSON_PLANNER && (
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Topic</label>
                                            <input
                                                type="text"
                                                value={lpTopic}
                                                onChange={(e) => setLpTopic(e.target.value)}
                                                className="w-full px-3 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium"
                                                placeholder="e.g. Photosynthesis"
                                            />
                                        </div>
                                    )}

                                    {activeTool === Tool.QUIZ_GENERATOR && (
                                        <>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Topic</label>
                                                <input
                                                    type="text"
                                                    value={quizTopic}
                                                    onChange={(e) => setQuizTopic(e.target.value)}
                                                    className="w-full px-3 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium"
                                                    placeholder="e.g. Civil War"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1"># of Questions</label>
                                                <input
                                                    type="number"
                                                    value={quizCount}
                                                    onChange={(e) => setQuizCount(parseInt(e.target.value))}
                                                    className="w-full px-3 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium"
                                                    min={1} max={10}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {activeTool === Tool.RUBRIC_BUILDER && (
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Assignment Description</label>
                                            <textarea
                                                value={rubricAssignment}
                                                onChange={(e) => setRubricAssignment(e.target.value)}
                                                className="w-full px-3 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium h-32"
                                                placeholder="e.g. Write a persuasive essay about school uniforms..."
                                            />
                                        </div>
                                    )}

                                    {activeTool === Tool.EMAIL_POLISHER && (
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Rough Notes</label>
                                            <textarea
                                                value={emailNotes}
                                                onChange={(e) => setEmailNotes(e.target.value)}
                                                className="w-full px-3 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium h-32"
                                                placeholder="e.g. Johnny was late again, need to talk to parents..."
                                            />
                                        </div>
                                    )}

                                    {activeTool === Tool.IEP_DRAFTER && (
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Area of Need</label>
                                            <input
                                                type="text"
                                                value={iepArea}
                                                onChange={(e) => setIepArea(e.target.value)}
                                                className="w-full px-3 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium"
                                                placeholder="e.g. Reading Comprehension"
                                            />
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 bg-sta-dark text-white rounded-lg font-bold border-2 border-black shadow-hard hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center"
                                    >
                                        {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <Wand2 className="w-5 h-5 mr-2" />}
                                        Generate
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Output Panel */}
                        <div className="md:col-span-8">
                            {result ? (
                                <div className="bg-white rounded-xl border-2 border-black shadow-hard-lg p-8 min-h-[400px]">
                                    {/* Render Result based on Tool */}
                                    {activeTool === Tool.LESSON_PLANNER && (
                                        <div>
                                            <h2 className="text-2xl font-black mb-4">{result.title}</h2>
                                            <div className="space-y-4">
                                                <p className="font-medium text-slate-700">{result.objective}</p>
                                                <div className="space-y-2">
                                                    {result.activities.map((act: any, idx: number) => (
                                                        <div key={idx} className="p-3 bg-slate-50 rounded border border-slate-200">
                                                            <span className="font-bold text-sta-primary mr-2">{act.time}</span>
                                                            {act.description}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTool === Tool.QUIZ_GENERATOR && (
                                        <div className="space-y-6">
                                            {result.map((q: any, idx: number) => (
                                                <div key={idx} className="p-4 bg-slate-50 rounded border border-slate-200">
                                                    <p className="font-bold mb-2">{idx + 1}. {q.question}</p>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {q.options.map((opt: string, i: number) => (
                                                            <div key={i} className="text-sm text-slate-600 px-2 py-1 bg-white rounded border border-slate-200">{opt}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTool === Tool.RUBRIC_BUILDER && (
                                        <div>
                                            <h2 className="text-xl font-bold mb-4">{result.title}</h2>
                                            <div className="space-y-4">
                                                {result.criteria.map((c: any, idx: number) => (
                                                    <div key={idx} className="border-b border-slate-200 pb-4">
                                                        <h3 className="font-bold text-sta-dark mb-2">{c.name}</h3>
                                                        <div className="grid grid-cols-4 gap-2 text-xs">
                                                            {c.levels.map((l: string, i: number) => (
                                                                <div key={i} className="bg-slate-50 p-2 rounded text-center">{l}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTool === Tool.EMAIL_POLISHER && (
                                        <div className="whitespace-pre-wrap font-medium text-slate-700">
                                            {result}
                                        </div>
                                    )}

                                    {activeTool === Tool.IEP_DRAFTER && (
                                        <div>
                                            <h3 className="font-bold text-sta-primary mb-2">Proposed Goal</h3>
                                            <p className="text-lg font-medium mb-6">{result.goal}</p>
                                            <h3 className="font-bold text-slate-500 text-sm uppercase mb-2">Benchmarks</h3>
                                            <ul className="list-disc list-inside space-y-1 text-slate-700">
                                                {result.benchmarks.map((b: string, i: number) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-slate-400 min-h-[400px] border-4 border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                                    <BrainCircuit className="w-16 h-16 mb-4 opacity-20" />
                                    <p className="font-bold opacity-50">Select a tool and generate content</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
