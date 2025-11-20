import React, { useState } from 'react';
import { Wand2, Loader2, Clock, BrainCircuit, Lock, Share, Save } from 'lucide-react';
import { generateLessonPlan } from '../services/geminiService';
import { LessonPlan } from '../types';

export const ToolkitDemo: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [grade, setGrade] = useState('5th Grade');
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState<LessonPlan | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    
    setIsLoading(true);
    setPlan(null);
    
    const result = await generateLessonPlan(topic, grade);
    setPlan(result);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-sta-surface pt-12 pb-24 px-4 bg-paper-texture">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-white border-2 border-black rounded-full mb-4 shadow-hard-sm">
            <span className="w-2 h-2 bg-sta-mint rounded-full mr-2 border border-black"></span>
            <span className="font-bold text-xs text-black uppercase tracking-wide">Live Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-sta-dark mb-4">
            The Lesson Spark
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-xl mx-auto">
            A tiny taste of our AI Toolkit. <br/>Generate standard-aligned plans in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Input Control Panel */}
          <div className="md:col-span-4">
            <div className="bg-sta-dark p-6 rounded-xl shadow-hard border-2 border-black sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                <span className="text-white font-mono font-bold">INPUT_PARAMETERS</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                </div>
              </div>
              
              <form onSubmit={handleGenerate} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-sta-accent uppercase tracking-wider mb-2">Topic</label>
                  <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Photosynthesis"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border-2 border-slate-700 text-white placeholder-slate-500 focus:border-sta-accent focus:ring-0 outline-none transition-colors text-sm font-medium"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-sta-accent uppercase tracking-wider mb-2">Grade Level</label>
                  <div className="relative">
                    <select 
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border-2 border-slate-700 text-white focus:border-sta-accent focus:ring-0 outline-none transition-colors text-sm font-medium appearance-none cursor-pointer"
                    >
                      {['Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', 'Middle School', 'High School'].map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading || !topic}
                  className="w-full py-3 bg-sta-primary text-white rounded-lg font-black text-sm border-2 border-black shadow-[0px_4px_0px_0px_#000] active:shadow-none active:translate-y-1 hover:bg-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-4"
                >
                  {isLoading ? (
                    <><Loader2 className="animate-spin mr-2 w-4 h-4" /> PROCESSING...</>
                  ) : (
                    <><Wand2 className="mr-2 w-4 h-4" /> GENERATE PLAN</>
                  )}
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-slate-700">
                <div className="flex items-center mb-4 text-white font-bold text-sm">
                  <Lock className="w-4 h-4 mr-2 text-sta-secondary" /> UNLOCK FULL TOOLKIT
                </div>
                <div className="space-y-2">
                  {['Quiz Generator', 'IEP Goal Drafter', 'Email Polisher', 'Rubric Builder'].map((item) => (
                     <div key={item} className="text-xs text-slate-400 flex items-center bg-slate-800/50 p-2 rounded border border-slate-700/50">
                       <div className="w-1.5 h-1.5 bg-sta-mint rounded-full mr-2"></div> {item}
                     </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Output Section - Document Style */}
          <div className="md:col-span-8">
            {plan ? (
              <div className="bg-white rounded-lg shadow-hard-lg border-2 border-black overflow-hidden min-h-[600px] relative">
                {/* Binder holes */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-slate-100 border-r-2 border-dashed border-slate-300 flex flex-col items-center py-8 space-y-12 z-10">
                   <div className="w-4 h-4 bg-slate-300 rounded-full border border-slate-400 shadow-inner"></div>
                   <div className="w-4 h-4 bg-slate-300 rounded-full border border-slate-400 shadow-inner"></div>
                   <div className="w-4 h-4 bg-slate-300 rounded-full border border-slate-400 shadow-inner"></div>
                </div>

                <div className="pl-12">
                  <div className="border-b-2 border-slate-100 p-8 flex justify-between items-start bg-slate-50/30">
                    <div>
                      <h1 className="text-3xl font-black text-sta-dark font-serif tracking-tight">{plan.title}</h1>
                      <div className="flex items-center text-sm text-slate-500 mt-2 font-mono font-bold">
                        <span className="bg-sta-accent/20 text-sta-dark px-2 py-1 rounded mr-2 border border-sta-accent/30">{grade}</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {plan.duration}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                       <button className="p-2 text-slate-400 hover:text-sta-primary"><Save className="w-5 h-5"/></button>
                       <button className="p-2 text-slate-400 hover:text-sta-primary"><Share className="w-5 h-5"/></button>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3 font-mono">Objective</h4>
                      <p className="text-lg text-slate-800 leading-relaxed font-medium">{plan.objective}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 font-mono">Agenda</h4>
                      <div className="space-y-4">
                        {plan.activities.map((act, idx) => (
                          <div key={idx} className="flex p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-sta-primary hover:shadow-sm transition-all">
                            <div className="w-20 shrink-0 font-mono text-sm text-sta-primary font-bold pt-0.5 border-r border-slate-200 mr-4">
                              {act.time}
                            </div>
                            <div className="text-slate-700 leading-relaxed text-base">
                              {act.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-amber-200 text-amber-800 text-xs font-bold px-2 py-1 rounded-bl-lg">ASSESSMENT</div>
                      <h4 className="text-sm font-black text-amber-700 uppercase tracking-widest mb-2 font-mono">Check for Understanding</h4>
                      <p className="text-amber-900 text-base font-medium">{plan.assessmentIdea}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 min-h-[400px] border-4 border-dashed border-slate-300 rounded-xl p-8 bg-slate-50/50">
                {isLoading ? (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 border-4 border-sta-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-lg font-black text-sta-dark animate-pulse">Thinking...</p>
                  </div>
                ) : (
                  <>
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-6 opacity-50">
                       <BrainCircuit className="w-12 h-12 text-slate-400" />
                    </div>
                    <p className="text-xl font-medium text-slate-500 max-w-xs text-center">Enter a topic to generate your first lesson plan.</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};