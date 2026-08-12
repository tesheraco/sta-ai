import React from 'react';
import { GraduationCap, BookOpen, Rocket, LifeBuoy } from 'lucide-react';

// Universal to every program — these facts describe the STA model itself,
// not any one curriculum, so they live here rather than on Program.
const STEPS = [
    {
        icon: GraduationCap,
        title: 'Train Your Staff',
        description: 'Four hours of zero-to-one technical training — one in-person workshop, or two 2-hour virtual sessions. No STEM or coding experience expected.'
    },
    {
        icon: BookOpen,
        title: 'Unlock the Curriculum',
        description: 'A full semester (~16 hours) of project-based sessions: daily lesson plans, helpful videos, and projectable slides — standards-aligned. Plus an exact materials shopping list with lowest-cost purchase links.'
    },
    {
        icon: Rocket,
        title: 'Launch With Support',
        description: 'An optional four weeks of implementation support while your first sessions run: office hours, troubleshooting, and extra resources.'
    },
    {
        icon: LifeBuoy,
        title: 'Keep the Safety Net',
        description: 'Six months of 24/7 email tech support for anything related to the topic your staff was trained in.'
    }
];

export const PathToLaunch: React.FC = () => (
    <div>
        <h2 className="text-3xl font-black text-sta-dark mb-2">Your Path to Launch</h2>
        <p className="text-slate-600 font-medium mb-8">
            One flat, one-time cost covers everything below. Most sites go from signed quote to first session in about 4 weeks.
        </p>
        <div className="relative">
            {/* Connector line behind the numbered circles */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-200" aria-hidden="true"></div>
            <div className="space-y-8">
                {STEPS.map((step, idx) => (
                    <div key={idx} className="relative flex items-start">
                        <div className="w-10 h-10 bg-sta-primary text-white rounded-full flex items-center justify-center font-black border-2 border-black shrink-0 z-10">
                            {idx + 1}
                        </div>
                        <div className="ml-5 pt-1">
                            <h4 className="text-xl font-bold text-sta-dark mb-1 flex items-center gap-2">
                                <step.icon className="w-5 h-5 text-sta-primary" /> {step.title}
                            </h4>
                            <p className="text-slate-600 font-medium">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
