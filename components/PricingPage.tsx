import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Minus, ArrowRight, UserPlus, Library, LifeBuoy, FileText, Package, Landmark } from 'lucide-react';
import { PRICING_TIERS, PRICING_MATRIX, PRICING_FAQS } from '../data/pricing';
import { PROGRAMS } from '../data/programs';
import { PricingTiers } from './PricingTiers';
import { FaqSection } from './FaqSection';

// Why a partnership renews — the three things that genuinely recur, as opposed
// to the training itself, which happens once.
const RECURRING_VALUE = [
    {
        icon: UserPlus,
        color: 'bg-sta-coral',
        title: 'Turnover Stops Killing Programs',
        body: 'The most common reason a STEM program dies in year two is that the one trained staff member left. When yours does, we train their replacement — free, for as long as your partnership runs.'
    },
    {
        icon: Library,
        color: 'bg-sta-accent',
        title: 'Your Curriculum Stays Current',
        body: 'Platforms shut down, tools change, and age policies shift — constantly, in AI. Every program you train in gets revised as that happens, and the updated lesson plans and slides land in your account without you asking.'
    },
    {
        icon: LifeBuoy,
        color: 'bg-sta-mint',
        title: 'Support That Never Expires',
        body: "24/7 email support for the length of your agreement, not a six-month window that quietly ends. When a session goes sideways on a Thursday afternoon, you have someone to email."
    },
];

const MatrixCell: React.FC<{ value: string | boolean }> = ({ value }) => {
    if (value === true) return <Check className="w-5 h-5 text-sta-mint mx-auto" strokeWidth={3} aria-label="Included" />;
    if (value === false) return <Minus className="w-5 h-5 text-slate-300 mx-auto" strokeWidth={3} aria-label="Not included" />;
    return <span className="font-bold text-sta-dark">{value}</span>;
};

export const PricingPage: React.FC = () => {
    return (
        <div className="w-full bg-white">

            {/* Hero */}
            <section className="relative bg-sta-surface bg-dot-pattern border-b-2 border-black py-20 px-4">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold mb-6 uppercase tracking-widest">
                        Pricing
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-sta-dark leading-tight mb-6">
                        Train your staff. <br className="hidden sm:block" />
                        Keep the curriculum.
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        Pick from all {PROGRAMS.length} programs. Your plan covers the staff training, the complete curriculum for every program your team trains in, and support that stays on all year — not a per-session instructor invoice that never ends.
                    </p>
                </div>
            </section>

            {/* Tiers */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <PricingTiers />
                </div>
            </section>

            {/* Why it recurs */}
            <section className="py-24 px-4 bg-sta-surface bg-dot-pattern border-y-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-sta-dark mb-4">What You're Paying For in Month Seven</h2>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                            The training happens once. These three things are why sites stay.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {RECURRING_VALUE.map(({ icon: Icon, color, title, body }) => (
                            <div key={title} className="bg-white p-8 border-2 border-black shadow-hard rounded-xl hover:-translate-y-1 transition-transform">
                                <div className={`w-14 h-14 ${color} rounded-full border-2 border-black flex items-center justify-center mb-6`}>
                                    <Icon className="w-7 h-7 text-black" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-black text-sta-dark mb-4">{title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison matrix */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-sta-dark">Compare the Plans</h2>
                    </div>

                    <div className="overflow-x-auto border-2 border-black rounded-xl shadow-hard">
                        <table className="w-full min-w-[640px] border-collapse bg-white text-sm">
                            <thead>
                                <tr className="bg-sta-dark text-white">
                                    <th scope="col" className="text-left font-black p-5 w-1/3">Feature</th>
                                    {PRICING_TIERS.map(tier => (
                                        <th key={tier.id} scope="col" className="font-black p-5 text-center border-l border-white/15">
                                            {tier.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {PRICING_MATRIX.map((row, idx) => (
                                    <tr key={row.label} className={idx % 2 === 1 ? 'bg-sta-surface/60' : 'bg-white'}>
                                        <th scope="row" className="text-left font-bold text-slate-700 p-5 border-t-2 border-slate-100">
                                            {row.label}
                                        </th>
                                        {PRICING_TIERS.map(tier => (
                                            <td key={tier.id} className="p-5 text-center border-t-2 border-l border-slate-100 text-slate-600 font-medium">
                                                <MatrixCell value={row.values[tier.id]} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Procurement + what's not included */}
            <section className="py-24 px-4 bg-sta-surface bg-dot-pattern border-y-2 border-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-sta-dark mb-4">Built for How You Actually Buy</h2>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                            Nonprofits, districts, and municipal programs don't buy on a credit card. Neither do we make you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 border-2 border-black rounded-xl shadow-hard-sm">
                            <FileText className="w-8 h-8 text-sta-primary mb-4" />
                            <h3 className="font-black text-xl text-sta-dark mb-3">POs & Fiscal-Year Quotes</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Purchase orders accepted. We'll issue a formal quote dated to your fiscal year, provide a W-9, and invoice on whatever schedule your finance office needs.
                            </p>
                        </div>

                        <div className="bg-white p-8 border-2 border-black rounded-xl shadow-hard-sm">
                            <Landmark className="w-8 h-8 text-sta-primary mb-4" />
                            <h3 className="font-black text-xl text-sta-dark mb-3">Grant-Friendly Line Items</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Staff training and curriculum are both allowable costs under most 21st CCLC, ESSER successor, and private youth-development grants. We'll break the quote out however your funder wants it.
                            </p>
                        </div>

                        <div className="bg-white p-8 border-2 border-black rounded-xl shadow-hard-sm">
                            <Package className="w-8 h-8 text-sta-primary mb-4" />
                            <h3 className="font-black text-xl text-sta-dark mb-3">Equipment Stays Yours</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Materials aren't included in the plan — you buy them directly, so they belong to you. We hand you an exact shopping list with the lowest-cost purchase links, and always teach the budget path first.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black text-sta-dark mb-12 text-center">Pricing Questions</h2>
                    <FaqSection items={PRICING_FAQS} />
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-24 px-4 bg-sta-dark border-t-2 border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Not sure which plan fits?
                    </h2>
                    <p className="text-xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto">
                        Tell us how many staff you have and what you want kids doing by spring. We'll tell you which tier covers it — and say so if the smaller one does.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://calendly.com/sta-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-sta-cta text-white border-2 border-black rounded-lg font-bold text-lg shadow-hard-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all inline-flex items-center justify-center gap-2"
                        >
                            Book a Consult <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link
                            to="/programs"
                            className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg hover:bg-slate-100 transition-all text-center"
                        >
                            Browse the Program Library
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};
