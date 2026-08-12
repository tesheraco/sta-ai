import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
    items: FaqItem[];
    heading?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ items, heading }) => (
    <div>
        {heading && <h2 className="text-3xl font-black text-sta-dark mb-6">{heading}</h2>}
        <div className="space-y-6">
            {items.map((item, idx) => (
                <div key={idx} className="bg-white border-2 border-black rounded-xl p-6 shadow-hard-sm">
                    <h3 className="font-black text-lg mb-2 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-sta-primary shrink-0" /> {item.question}
                    </h3>
                    <p className="text-slate-600 font-medium">{item.answer}</p>
                </div>
            ))}
        </div>
    </div>
);
