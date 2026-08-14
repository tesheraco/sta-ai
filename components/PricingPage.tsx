import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Minus, ArrowRight, Quote, FileText, Package, CalendarClock } from 'lucide-react';
import { PRICING_TIERS, PRICING_MATRIX, PRICING_FAQS, PRICING_CTA_HREF } from '../data/pricing';
import { CASE_STUDIES } from '../data/caseStudies';
import { PricingTiers } from './PricingTiers';
import { FaqSection } from './FaqSection';

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
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-sta-dark leading-tight">
                        Train your staff. <br className="hidden sm:block" />
                        Keep the curriculum.
                    </h1>
                </div>
            </section>

            {/* Tiers */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <PricingTiers />
                </div>
            </section>

            {/* Proof — three partners, three budgets */}
            <section className="py-24 px-4 bg-sta-surface bg-dot-pattern border-y-2 border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-sta-dark">Proof It Pays Off</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {CASE_STUDIES.map(study => (
                            <div key={study.id} className="bg-white p-8 border-2 border-black shadow-hard rounded-xl flex flex-col hover:-translate-y-1 transition-transform">
                                <Quote className="w-8 h-8 text-sta-primary mb-4 shrink-0" fill="currentColor" strokeWidth={0} />

                                <p className="text-lg font-bold text-slate-800 leading-snug mb-6 flex-grow">
                                    "{study.quote}"
                                </p>

                                <div className="grid grid-cols-3 gap-3 border-t-2 border-slate-100 pt-6 mb-6">
                                    {study.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-xl font-black text-sta-primary">{metric.value}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-tight mt-1">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <div className="font-black text-sm text-sta-dark uppercase">{study.name}</div>
                                    <div className="text-slate-500 text-xs font-mono">{study.role.split(',')[0]} · {study.location}</div>
                                </div>
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
                        <h2 className="text-4xl font-black text-sta-dark">Built for How You Actually Buy</h2>
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
                            <CalendarClock className="w-8 h-8 text-sta-primary mb-4" />
                            <h3 className="font-black text-xl text-sta-dark mb-3">Signed to Started in 4 Weeks</h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                Procurement shouldn't eat your semester. Most sites go from signed quote to first student session in about four weeks — staff training, curriculum handoff, and equipment ordering included.
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
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">
                        Not sure which plan fits?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={PRICING_CTA_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-sta-cta text-white border-2 border-black rounded-lg font-bold text-lg hover:bg-sta-cta-hover transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Book a Consult <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link
                            to="/programs"
                            className="px-8 py-4 bg-white text-sta-dark border-2 border-black rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors text-center"
                        >
                            Browse the Program Library
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};
