import React, { useState } from 'react';
import { Calendar as CalendarIcon, Check, ArrowRight, ChevronLeft, ChevronRight, Printer } from 'lucide-react';
import { CourseDate } from '../types';

// Mock data for calendar
const CALENDAR_DAYS = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2; // Start from prev month
    return {
        day: day > 0 && day <= 30 ? day : null,
        hasCohort: [14, 21, 5].includes(day),
        seats: [14, 21, 5].includes(day) ? Math.floor(Math.random() * 10) + 2 : 0
    };
});

type TicketView = 'LIST' | 'CALENDAR' | 'REGISTER' | 'SUCCESS';

const UPCOMING_COHORTS: CourseDate[] = [
    { id: '1', date: 'Nov 14, 2024', time: '4:00 PM EST', seats: 4 },
    { id: '2', date: 'Nov 21, 2024', time: '4:00 PM EST', seats: 12 },
    { id: '3', date: 'Dec 05, 2024', time: '4:00 PM EST', seats: 20 },
];

export const CohortTicket: React.FC = () => {
    const [view, setView] = useState<TicketView>('LIST');
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', school: '' });

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setView('SUCCESS'), 1000);
    };

    return (
        <div className="relative group h-full">
            <div className="absolute inset-0 bg-slate-800 translate-x-2 translate-y-2 rounded-2xl"></div>
            <div className="relative bg-white border-2 border-black rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300">

                {/* Ticket Header - Always Visible */}
                <div className="bg-sta-surface p-8 border-b-2 border-black border-dashed relative shrink-0">
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-white border-r-2 border-t-2 border-black rounded-full transform rotate-45 z-10"></div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white border-l-2 border-t-2 border-black rounded-full transform -rotate-45 z-10"></div>

                    <div className="flex justify-between items-start">
                        <div className="bg-sta-primary text-white text-xs font-bold px-3 py-1 border border-black shadow-sm">ADMIT ONE</div>
                        <span className="font-mono text-slate-400 text-xs">#COHORT-24</span>
                    </div>
                    <h3 className="text-3xl font-black text-sta-dark mt-4">Online Cohort</h3>
                    <p className="text-slate-600 mt-2 font-medium">Live scheduled sessions.</p>
                </div>

                {/* Dynamic Content Area */}
                <div className="p-8 bg-white flex-grow flex flex-col relative overflow-hidden">

                    {/* LIST VIEW */}
                    <div className={`space-y-4 transition-all duration-300 ${view === 'LIST' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-8'}`}>
                        <div className="space-y-3">
                            {UPCOMING_COHORTS.map(cohort => (
                                <label key={cohort.id} className="flex items-center p-3 border-2 border-slate-200 rounded-lg hover:border-sta-primary cursor-pointer transition-colors group/date">
                                    <input
                                        type="radio"
                                        name="cohort"
                                        className="w-5 h-5 accent-sta-primary mr-4"
                                        checked={selectedDate === cohort.id}
                                        onChange={() => setSelectedDate(cohort.id)}
                                    />
                                    <div className="flex-grow">
                                        <div className="font-bold text-sta-dark">{cohort.date}</div>
                                        <div className="text-xs text-slate-500 font-mono">{cohort.time} • {cohort.seats} seats left</div>
                                    </div>
                                </label>
                            ))}
                        </div>

                        <button
                            onClick={() => setView('CALENDAR')}
                            className="text-sm font-bold text-slate-500 hover:text-sta-primary flex items-center gap-2 w-full justify-center py-2"
                        >
                            <CalendarIcon className="w-4 h-4" /> View Full Schedule
                        </button>

                        <button
                            disabled={!selectedDate}
                            onClick={() => setView('REGISTER')}
                            className="w-full py-3 bg-sta-primary text-white font-bold border-2 border-black shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Secure Seat ($199)
                        </button>
                    </div>

                    {/* CALENDAR VIEW */}
                    <div className={`flex flex-col h-full transition-all duration-300 ${view === 'CALENDAR' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-8'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <button onClick={() => setView('LIST')} className="p-1 hover:bg-slate-100 rounded"><ChevronLeft className="w-5 h-5" /></button>
                            <span className="font-black text-lg">November 2024</span>
                            <button className="p-1 hover:bg-slate-100 rounded"><ChevronRight className="w-5 h-5" /></button>
                        </div>

                        <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="text-xs font-bold text-slate-400">{d}</div>)}
                        </div>

                        <div className="grid grid-cols-7 gap-1 flex-grow content-start">
                            {CALENDAR_DAYS.map((d, i) => (
                                <div
                                    key={i}
                                    onClick={() => d.hasCohort && setSelectedDate(`cal-${i}`)}
                                    className={`
                      aspect-square flex flex-col items-center justify-center rounded border-2 text-sm font-bold transition-all
                      ${!d.day ? 'border-transparent' : ''}
                      ${d.day && !d.hasCohort ? 'border-slate-100 text-slate-300' : ''}
                      ${d.hasCohort ? 'border-black cursor-pointer hover:bg-sta-primary hover:text-white' : ''}
                      ${selectedDate === `cal-${i}` ? 'bg-sta-primary text-white ring-2 ring-offset-2 ring-black' : ''}
                    `}
                                >
                                    {d.day}
                                    {d.hasCohort && <div className="w-1 h-1 bg-current rounded-full mt-1"></div>}
                                </div>
                            ))}
                        </div>

                        <button
                            disabled={!selectedDate}
                            onClick={() => setView('REGISTER')}
                            className="w-full mt-4 py-3 bg-sta-primary text-white font-bold border-2 border-black shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg disabled:opacity-50"
                        >
                            Select Date
                        </button>
                    </div>

                    {/* REGISTER VIEW */}
                    <div className={`flex flex-col h-full transition-all duration-300 ${view === 'REGISTER' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-8'}`}>
                        <div className="flex items-center gap-2 mb-6">
                            <button onClick={() => setView('LIST')} className="p-1 hover:bg-slate-100 rounded"><ChevronLeft className="w-5 h-5" /></button>
                            <span className="font-bold text-slate-500">Passenger Manifest</span>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-4 flex-grow">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                                <input
                                    required
                                    className="w-full px-4 py-2 bg-slate-50 border-2 border-black rounded focus:outline-none focus:border-sta-primary"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Work Email</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full px-4 py-2 bg-slate-50 border-2 border-black rounded focus:outline-none focus:border-sta-primary"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">School / District</label>
                                <input
                                    required
                                    className="w-full px-4 py-2 bg-slate-50 border-2 border-black rounded focus:outline-none focus:border-sta-primary"
                                    value={formData.school}
                                    onChange={e => setFormData({ ...formData, school: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-auto py-3 bg-sta-dark text-white font-bold border-2 border-black shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-lg"
                            >
                                Confirm & Pay ($199)
                            </button>
                        </form>
                    </div>

                    {/* SUCCESS VIEW */}
                    <div className={`flex flex-col h-full items-center justify-center text-center transition-all duration-300 ${view === 'SUCCESS' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-8'}`}>
                        <div className="w-20 h-20 bg-sta-mint rounded-full border-2 border-black flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                            <Printer className="w-10 h-10 text-sta-dark" />
                        </div>
                        <h3 className="text-2xl font-black text-sta-dark mb-2">Ticket Printed!</h3>
                        <p className="text-slate-600 mb-8">Check your email for the receipt and calendar invite.</p>

                        <button
                            onClick={() => { setView('LIST'); setSelectedDate(null); setFormData({ name: '', email: '', school: '' }); }}
                            className="text-sm font-bold text-sta-primary hover:underline"
                        >
                            Book Another Seat
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
