import React from 'react';
import { Link } from 'react-router-dom';
import { FaqItem } from '../types';
import { ANNUAL_DISCOUNT, PO_FAQ, PRICING_TIERS } from './pricing';

/**
 * FAQs that apply to every program. Program pages render these below any
 * program-specific `faq` entries; the Landing page renders them directly.
 */
export const SHARED_FAQS: FaqItem[] = [
    {
        question: 'Do our staff need any tech experience?',
        answer: 'No. Every curriculum is written for group leaders and youth workers with zero technical background. If your staff can follow a lesson script and manage a room of kids, they can run these programs.'
    },
    {
        question: 'Is the cost one-time or recurring?',
        answer: (
            <>
                It's an annual partnership: pay monthly, or pay for the year up front and save {Math.round(ANNUAL_DISCOUNT * 100)}%. It covers staff training, the full curriculum for the program you train in, curriculum updates as tools and age policies change, and 24/7 email tech support. Plans start at ${PRICING_TIERS[0].monthlyPrice} a month; see the{' '}
                <Link to="/pricing" className="text-sta-primary font-bold underline underline-offset-2 hover:text-sta-cta">
                    Pricing page
                </Link>{' '}
                for details.
            </>
        )
    },
    {
        question: 'What does equipment cost?',
        answer: 'It ranges from nearly free (Invention Lab runs on cardboard and hot glue) to a few thousand dollars for robotics or esports. Every program page lists exactly what you need, and we always teach the budget path first.'
    },
    PO_FAQ
];
