import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_TIERS, ANNUAL_DISCOUNT, annualTotal, prepaidMonthly } from '../data/pricing';

type Billing = 'monthly' | 'prepaid';

interface PricingTiersProps {
    /** Optional heading rendered above the toggle; omit when the host section supplies its own. */
    heading?: string;
    subheading?: string;
}

const dollars = (n: number) => n.toLocaleString('en-US');

/**
 * The three-tier card grid with its own billing toggle. Self-contained so it can
 * be dropped at the bottom of a program page without the host managing state.
 */
export const PricingTiers: React.FC<PricingTiersProps> = ({ heading, subheading }) => {
    const [billing, setBilling] = React.useState<Billing>('monthly');
    const isPrepaid = billing === 'prepaid';

    return (
        <div>
            {(heading || subheading) && (
                <div className="text-center mb-10">
                    {heading && <h2 className="text-4xl font-black text-sta-dark mb-4">{heading}</h2>}
                    {subheading && <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">{subheading}</p>}
                </div>
            )}

            {/* Billing toggle */}
            <div className="flex justify-center mb-12">
                <div className="inline-flex bg-white border-2 border-black rounded-lg p-1 shadow-hard-sm" role="group" aria-label="Billing period">
                    {([
                        { key: 'monthly' as Billing, label: 'Pay monthly' },
                        { key: 'prepaid' as Billing, label: `Pay for the year — save ${Math.round(ANNUAL_DISCOUNT * 100)}%` },
                    ]).map(({ key, label }) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setBilling(key)}
                            aria-pressed={billing === key}
                            className={`px-5 py-2.5 rounded font-bold text-sm transition-colors ${billing === key
                                ? 'bg-sta-primary text-white'
                                : 'text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
                {PRICING_TIERS.map(tier => {
                    const featured = tier.featured;
                    return (
                        <div
                            key={tier.id}
                            className={`relative bg-white border-2 border-black rounded-xl flex flex-col h-full transition-transform hover:-translate-y-1 ${featured ? 'shadow-hard-lg lg:-mt-4' : 'shadow-hard'
                                }`}
                        >
                            {featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sta-accent text-black text-xs font-black uppercase tracking-widest px-4 py-1.5 border-2 border-black rounded-full whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}

                            {/* Header */}
                            <div className={`p-8 border-b-2 border-black rounded-t-[10px] ${featured ? 'bg-sta-primary/5' : 'bg-sta-surface'}`}>
                                <h3 className="text-2xl font-black text-sta-dark">{tier.name}</h3>
                                <p className="text-slate-600 font-medium mt-1 text-sm min-h-[2.5rem]">{tier.tagline}</p>

                                <div className="mt-6 min-h-[5.5rem]">
                                    {tier.monthlyPrice === null ? (
                                        <>
                                            <div className="text-4xl font-black text-sta-dark tracking-tight">Custom</div>
                                            <p className="text-sm text-slate-500 font-medium mt-2">
                                                Priced per site. Most multi-site partners land below the per-site rate above.
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-5xl font-black text-sta-dark tracking-tight">
                                                    ${dollars(isPrepaid ? prepaidMonthly(tier.monthlyPrice) : tier.monthlyPrice)}
                                                </span>
                                                <span className="text-slate-500 font-bold">/month</span>
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium mt-2">
                                                {isPrepaid ? (
                                                    <>
                                                        <span className="font-bold text-sta-dark">${dollars(annualTotal(tier.monthlyPrice))} billed once</span>
                                                        {' · '}saves ${dollars(tier.monthlyPrice * 12 - annualTotal(tier.monthlyPrice))} a year
                                                    </>
                                                ) : (
                                                    <>${dollars(tier.monthlyPrice * 12)} a year · 12-month agreement</>
                                                )}
                                            </p>
                                        </>
                                    )}
                                </div>

                                <div className="mt-6 inline-block bg-white border-2 border-black rounded-lg px-3 py-1.5 text-sm font-black text-sta-dark">
                                    {tier.capacity}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="p-8 flex flex-col flex-grow">
                                {tier.inheritsFrom && (
                                    <p className="font-black text-sta-dark mb-4 text-sm">
                                        Everything in {tier.inheritsFrom}, plus:
                                    </p>
                                )}
                                <ul className="space-y-4 flex-grow">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="w-5 h-5 text-sta-mint mr-3 shrink-0 mt-0.5" strokeWidth={3} />
                                            <span className="font-medium text-slate-700 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={tier.ctaHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-8 flex items-center justify-center gap-2 w-full py-4 border-2 border-black rounded-lg font-bold text-center transition-all shadow-hard-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 ${featured
                                        ? 'bg-sta-cta text-white hover:bg-sta-cta-hover'
                                        : 'bg-white text-sta-dark hover:bg-slate-50'
                                        }`}
                                >
                                    {tier.ctaLabel} <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="text-center text-sm text-slate-500 font-medium mt-8 max-w-3xl mx-auto">
                Every plan is a 12-month agreement. Curriculum access covers the programs your staff train in — add a workshop any time to add a program.
                <br className="hidden sm:block" />
                Purchase orders accepted · Equipment purchased separately by your organization
            </p>
        </div>
    );
};
