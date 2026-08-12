import { FaqItem } from '../types';

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
        answer: 'One-time. It covers the staff training, a full semester of curriculum, and optional four weeks of implementation support — plus six months of 24/7 email tech support. No hidden or recurring fees.'
    },
    {
        question: 'What does equipment cost?',
        answer: 'It ranges from nearly free (Invention Lab runs on cardboard and hot glue) to a few thousand dollars for robotics or esports. Every program page lists exactly what you need, and we always teach the budget path first.'
    },
    {
        question: 'Is AI safe and legal for younger kids?',
        answer: 'This is exactly why our AI programs exist. Most consumer AI tools require users to be 13+ — our training covers which tools each grade can use, kid-safe no-login alternatives for elementary ages, and supervision protocols your licensor and parents will approve of.'
    },
    {
        question: 'Can we pay via Purchase Order?',
        answer: "Yes. We work with nonprofits, districts, and municipal programs regularly and accept POs for organizational purchases. Book a consult and we'll handle the paperwork."
    }
];
