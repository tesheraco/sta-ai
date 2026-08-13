import { FaqItem, PricingMatrixRow, PricingTier } from '../types';

/** Discount applied when the twelve months are paid up front. */
export const ANNUAL_DISCOUNT = 0.1;

/** What lands on the PO when the year is paid in one go. */
export const annualTotal = (monthly: number) => Math.round(monthly * 12 * (1 - ANNUAL_DISCOUNT));

/** The per-month figure to headline when the prepaid option is selected. */
export const prepaidMonthly = (monthly: number) => Math.round(monthly * (1 - ANNUAL_DISCOUNT));

export const TIER_IDS = {
    SMALL_TEAM: 'small-team',
    PROGRAM: 'program',
    DISTRICT: 'district',
} as const;

export const PRICING_TIERS: PricingTier[] = [
    {
        id: TIER_IDS.SMALL_TEAM,
        name: 'Small-Team Partnership',
        tagline: 'One site, one or two staff running programs.',
        monthlyPrice: 249,
        capacity: 'Up to 2 trained staff',
        features: [
            'Two seats in a 4-hour zero-to-one training workshop — in person, or two 2-hour virtual sessions',
            'The complete curriculum for the program you train in: every lesson plan, slide deck, facilitation guide, and materials list',
            'Curriculum updates for that program as tools and age policies change',
            '24/7 email tech support for the topics your staff trained in',
            'Funder-ready skill rubrics and progress tracking',
            'Free retraining when a trained staff member leaves',
        ],
        ctaLabel: 'Start with Small-Team',
        ctaHref: 'https://calendly.com/sta-ai',
    },
    {
        id: TIER_IDS.PROGRAM,
        name: 'Program Partnership',
        tagline: 'A full team running several programs at once.',
        monthlyPrice: 499,
        capacity: 'Up to 8 trained staff',
        inheritsFrom: 'Small-Team',
        features: [
            'Eight seats in a training workshop built around the programs you picked — with the curriculum for each one',
            'One custom 4-hour training every year — add a new program to your library, or refresh the one you run',
            '4-week startup onboarding — live office hours while your first sessions run',
            'STA Curriculum Builder, with support adapting your programs to your site',
            'Preferred pricing on additional workshops, whenever you want to add a program',
        ],
        ctaLabel: 'Start with Program',
        ctaHref: 'https://calendly.com/sta-ai',
        featured: true,
    },
    {
        id: TIER_IDS.DISTRICT,
        name: 'District & Multi-Site',
        tagline: 'More than eight staff, or more than one location.',
        monthlyPrice: null,
        capacity: '9+ staff or multiple sites',
        inheritsFrom: 'Program Partnership',
        features: [
            'A named STA program lead who knows your sites by name',
            'Multi-site rollout plan with staggered launch dates',
            'Volume pricing across sites, staff, and programs',
            'On-site training days available',
            'Custom SOW, MSA, and district procurement paperwork',
        ],
        ctaLabel: 'Book a Consult',
        ctaHref: 'https://calendly.com/sta-ai',
    },
];

/**
 * Comparison matrix. Keys in `values` must match the tier ids above; a string
 * renders as text, `true` as a check, `false` as a dash.
 */
export const PRICING_MATRIX: PricingMatrixRow[] = [
    {
        label: 'Trained staff seats',
        values: { [TIER_IDS.SMALL_TEAM]: '2', [TIER_IDS.PROGRAM]: '8', [TIER_IDS.DISTRICT]: '9+' },
    },
    {
        label: 'Staff training workshop',
        values: { [TIER_IDS.SMALL_TEAM]: '4 hours', [TIER_IDS.PROGRAM]: '4 hours, customized', [TIER_IDS.DISTRICT]: 'Custom schedule' },
    },
    {
        label: 'Curriculum included',
        values: { [TIER_IDS.SMALL_TEAM]: 'Your trained program', [TIER_IDS.PROGRAM]: 'Every program you train in', [TIER_IDS.DISTRICT]: 'Every program you train in' },
    },
    {
        label: 'Curriculum updates & revisions',
        values: { [TIER_IDS.SMALL_TEAM]: true, [TIER_IDS.PROGRAM]: true, [TIER_IDS.DISTRICT]: true },
    },
    {
        label: '24/7 email tech support',
        values: { [TIER_IDS.SMALL_TEAM]: true, [TIER_IDS.PROGRAM]: true, [TIER_IDS.DISTRICT]: true },
    },
    {
        label: 'Free retraining after staff turnover',
        values: { [TIER_IDS.SMALL_TEAM]: true, [TIER_IDS.PROGRAM]: true, [TIER_IDS.DISTRICT]: true },
    },
    {
        label: 'Startup onboarding',
        values: { [TIER_IDS.SMALL_TEAM]: false, [TIER_IDS.PROGRAM]: '4 weeks', [TIER_IDS.DISTRICT]: 'Custom rollout' },
    },
    {
        label: 'STA Curriculum Builder',
        values: { [TIER_IDS.SMALL_TEAM]: false, [TIER_IDS.PROGRAM]: true, [TIER_IDS.DISTRICT]: true },
    },
    {
        label: 'Annual custom training (add or refresh a program)',
        values: { [TIER_IDS.SMALL_TEAM]: false, [TIER_IDS.PROGRAM]: '1 × 4 hours', [TIER_IDS.DISTRICT]: 'Multiple' },
    },
    {
        label: 'Adding more programs',
        values: { [TIER_IDS.SMALL_TEAM]: 'Standard rate', [TIER_IDS.PROGRAM]: 'Preferred pricing', [TIER_IDS.DISTRICT]: 'Volume pricing' },
    },
    {
        label: 'Named program lead',
        values: { [TIER_IDS.SMALL_TEAM]: false, [TIER_IDS.PROGRAM]: false, [TIER_IDS.DISTRICT]: true },
    },
    {
        label: 'PO & invoice billing',
        values: { [TIER_IDS.SMALL_TEAM]: true, [TIER_IDS.PROGRAM]: true, [TIER_IDS.DISTRICT]: true },
    },
];

export const PRICING_FAQS: FaqItem[] = [
    {
        question: 'What is the monthly fee actually paying for after our staff are trained?',
        answer: 'Three things that never stop: your curriculum stays current, so when a platform changes or an age policy shifts, the revised lesson plans and slides land in your account; tech support stays on all year instead of expiring at six months; and when a trained staff member leaves, we train their replacement for free. In after-school, staff turnover is the single most common reason a program dies after year one — this is the fix.'
    },
    {
        question: 'Can we pay via Purchase Order?',
        answer: "Yes. We work with nonprofits, districts, and municipal programs regularly and accept POs for organizational purchases. We'll provide a W-9, a formal quote for your fiscal year, and an invoice on whatever schedule your finance office needs."
    },
    {
        question: 'Is equipment included in the price?',
        answer: 'No — your organization purchases materials directly, which keeps them yours and keeps our price down. Every program page lists exactly what you need, and we provide a shopping list with the lowest-cost purchase links. Costs range from nearly free (Invention Lab runs on cardboard and hot glue) to a few thousand dollars for robotics or esports.'
    },
    {
        question: 'Which curriculum do we get access to?',
        answer: "The curriculum for the programs your staff actually train in — not the whole catalog. Training and curriculum travel together: when your team trains in Robotics I, you get every Robotics I lesson plan, slide deck, facilitation guide, and materials list, plus revisions to it for as long as your partnership runs. Browse all our programs to pick what you train in; you're never paying for shelves of curriculum nobody at your site was taught to run."
    },
    {
        question: 'How do we add a second or third program later?',
        answer: 'Add a training workshop, and that program\'s curriculum unlocks with it. Program Partnership includes one custom 4-hour training every year for exactly this, and gets preferred pricing on any workshop beyond that. Small-Team can add workshops at the standard rate at any point in the year.'
    },
    {
        question: 'What happens if we need to train more staff mid-year?',
        answer: "Add seats at any time, prorated to your agreement. If you're consistently adding people, moving up a tier is usually cheaper than buying seats one at a time — we'll tell you when that's the case."
    },
    {
        question: 'Do our staff need any tech experience?',
        answer: 'No. Every curriculum is written for group leaders and youth workers with zero technical background. If your staff can follow a lesson script and manage a room of kids, they can run these programs.'
    },
];
