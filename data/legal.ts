/**
 * Privacy Policy and Terms of Service text, rendered by LegalPage.
 * Occurrences of CONTACT_EMAIL in any paragraph or line are turned into mailto links.
 */

export const CONTACT_EMAIL = 'allen@teshera.com';
export const LEGAL_EFFECTIVE_DATE = 'September 23, 2026';

export interface LegalSection {
    heading: string;
    paragraphs?: string[];
    /** Short lines rendered without paragraph spacing, e.g. a mailing address */
    lines?: string[];
}

export interface LegalDocument {
    title: string;
    intro: string;
    sections: LegalSection[];
}

const CONTACT_LINES = [
    'Teshera Inc., operating as STEM Teacher Academy',
    'Florida, United States',
    `Email: ${CONTACT_EMAIL}`,
    'Website: https://www.stemteacheracademy.com',
];

export const PRIVACY_POLICY: LegalDocument = {
    title: 'Privacy Policy',
    intro: 'STEM Teacher Academy is operated by Teshera Inc., based in Florida ("we," "us," or "our"). This Privacy Policy explains how we handle personal information in connection with www.stemteacheracademy.com, communications with us, and our live virtual and in-person training services.',
    sections: [
        {
            heading: 'Information we collect',
            paragraphs: [
                'Our website currently does not offer user accounts, process purchases, collect email addresses through signup or contact forms, or operate an email newsletter. We do not currently use Google Analytics.',
                'If you contact us directly or arrange training, we may receive your name, email address, telephone number, organization, role, billing or booking details, and information you choose to provide. The organization arranging training may also provide participant names, contact details, or attendance information.',
                'Our hosting and technology providers may automatically process technical information needed to deliver and protect the website, such as IP addresses, browser and device information, request times, pages requested, and error or security logs.',
            ],
        },
        {
            heading: 'Training recordings',
            paragraphs: [
                'We record live training sessions. Depending on the session and your participation, recordings may capture your name, image, voice, questions, chat messages, shared screen, and other contributions. Before recording, we explain the purpose of the recording and who will have access, and obtain any consent required by law.',
                'We use and share recordings only for the purposes disclosed for that session or otherwise authorized by you or permitted by law. We obtain separate permission before using identifiable participant images, voices, or contributions in public advertising or promotional materials. Contact us before a session if you have concerns about being recorded.',
            ],
        },
        {
            heading: 'How we use information',
            paragraphs: [
                'We use information to respond to inquiries, arrange and deliver training, communicate scheduling and service updates, manage invoices and business records, operate and protect the website, improve training where consistent with the recording notice and consent, and comply with legal obligations.',
            ],
        },
        {
            heading: 'How we share information',
            paragraphs: [
                'We may share information with providers that help us host the website, communicate, deliver virtual sessions, store files or recordings, and administer our business, as needed for those services. We may share relevant booking and attendance information with the organization that arranged training. Sharing of recordings is governed by the notice and permissions for that session.',
                'We may also disclose information when required by law, to protect legal rights or safety, or in connection with a merger, acquisition, or transfer of the business, subject to applicable law. We do not sell personal information or share it for cross-context behavioral advertising.',
            ],
        },
        {
            heading: 'Cookies and third party services',
            paragraphs: [
                'Our website infrastructure may use cookies or similar technologies for essential functions and security. You can manage cookies through your browser settings, although blocking them may affect website functionality. If we introduce analytics or advertising tools, we will update our disclosures and provide any choices or consent mechanisms required by applicable law.',
                'We do not currently use tools intended to track visitors across unrelated websites for advertising. The website does not change its behavior in response to browser Do Not Track signals. We honor legally required privacy preference signals where applicable.',
                'External websites and services, including any virtual meeting service you use to attend training, have their own privacy practices. This policy does not govern their independent handling of information.',
            ],
        },
        {
            heading: 'Retention and security',
            paragraphs: [
                'We keep personal information only as long as reasonably needed for the purposes described in this policy, the recording notice for a session, and applicable legal, accounting, or dispute-resolution needs. Retention depends on the type of information and the purpose for which it is held.',
                'We use reasonable administrative and technical safeguards to protect personal information. No internet transmission or storage system can be guaranteed completely secure.',
            ],
        },
        {
            heading: 'Your choices and requests',
            paragraphs: [
                `You may contact ${CONTACT_EMAIL} to ask about your information or request access, correction, or deletion. Depending on your location and applicable law, you may have additional rights. We will respond as required by applicable law and may need to verify your identity. Some information may need to be retained for legal obligations or legitimate business purposes.`,
                'Please do not provide information you do not want us to receive, including unnecessary personal details in recorded sessions. If you choose not to provide information needed to arrange or deliver a service, we may be unable to provide that service.',
            ],
        },
        {
            heading: 'Children and student information',
            paragraphs: [
                'Our website and professional training services are intended for adult educators, staff, and organizational representatives, not children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided such information, contact us so we can investigate and address it.',
                'Participants should not share identifiable student records, student images, or other sensitive student information during training. Use anonymous examples when discussing students.',
            ],
        },
        {
            heading: 'Changes to this policy',
            paragraphs: [
                'We may update this policy as our services or practices change. We will post the updated policy and effective date on this page and provide additional notice or obtain consent where required by law.',
            ],
        },
        {
            heading: 'Contact us',
            lines: CONTACT_LINES,
        },
    ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
    title: 'Terms of Service',
    intro: 'These Terms of Service describe the conditions for using www.stemteacheracademy.com and booking or participating in services provided by Teshera Inc., operating as STEM Teacher Academy ("we," "us," or "our"). Please review these terms before using our services.',
    sections: [
        {
            heading: 'Scope and booking agreements',
            paragraphs: [
                'We provide live professional training virtually and in person. Our website currently provides information only; it does not offer user accounts or process purchases. Training bookings and payments are arranged separately.',
                'The training provisions of these terms apply when incorporated into a booking agreement, proposal, or other agreement you accept. The agreed scope, schedule, fees, payment deadlines, and any included materials or recording access will be stated in the booking documents. If a separately accepted written agreement conflicts with these terms, that agreement controls for the relevant booking.',
                'Anyone accepting a booking on behalf of an organization represents that they are authorized to do so.',
            ],
        },
        {
            heading: 'Payments and no refunds',
            paragraphs: [
                'Payments are due according to the applicable booking documents. All training purchases are final and payments are nonrefundable for customer cancellations, missed sessions, nonattendance, or a participant’s inability to attend, except where a refund is required by applicable law or expressly agreed by us in writing.',
            ],
        },
        {
            heading: 'Rescheduling',
            paragraphs: [
                `You may reschedule a training by providing written notice to ${CONTACT_EMAIL} at least 48 hours before the scheduled start time. The 48-hour period is measured from the start time and time zone stated in the booking confirmation. The replacement date must be mutually agreed and is subject to availability; payments already made will be applied to the rescheduled training.`,
                'Requests received less than 48 hours before the scheduled start time are not eligible for rescheduling unless we agree otherwise in writing. Late cancellations and no-shows remain subject to the no-refund policy.',
                'If we need to change or cancel a training, we will notify the booking contact and work with the customer to arrange an alternative date or another agreed resolution. Nothing in these terms limits any refund or remedy required by applicable law.',
            ],
        },
        {
            heading: 'Participation and session requirements',
            paragraphs: [
                'Participants are responsible for having the equipment, internet connection, software, and permissions identified in the booking instructions for virtual training. For in-person sessions, responsibilities for the location, equipment, and materials will be agreed during booking.',
                'Participants must behave respectfully, follow reasonable facilitator instructions, and avoid unlawful, disruptive, or harassing conduct. We may remove a participant whose conduct materially disrupts a session or creates a safety risk. Do not disclose confidential information or identifiable student information during training.',
            ],
        },
        {
            heading: 'Recordings',
            paragraphs: [
                'We record training sessions and will disclose the intended recording use and audience before recording begins. Where required by law, we obtain each participant’s consent before recording. These terms alone do not replace that consent. Contact us in advance if you have a recording concern.',
                'Access to a recording is included only if stated in the booking documents. Any permitted access is subject to the stated audience, purpose, and access period. Participants may not record, publish, distribute, or upload sessions or recordings to other services without our prior written permission and any necessary permissions from other participants.',
            ],
        },
        {
            heading: 'Training materials and intellectual property',
            paragraphs: [
                'We or our licensors own our website content, training presentations, curricula, handouts, and recordings, except for materials identified as belonging to others. Unless your booking agreement provides otherwise, you may use the materials we provide for your own professional development and internal educational activities within the organization that booked the training.',
                'You may not resell, publicly post, sublicense, or use our materials to offer competing paid training without our written permission. Any access to recordings is additionally subject to the restrictions disclosed for the session. Third-party materials remain subject to their owners’ terms.',
            ],
        },
        {
            heading: 'Educational purpose and results',
            paragraphs: [
                'Our services are intended to support professional learning. Outcomes depend on participants, implementation, resources, and other circumstances. We do not guarantee particular student outcomes, revenue, employment, accreditation, or regulatory approval. Any certificate of completion confirms participation only unless we expressly state otherwise in writing.',
                'You and your organization remain responsible for selecting suitable activities, supervising students, following safety instructions, and complying with applicable organizational and legal requirements.',
            ],
        },
        {
            heading: 'Website use and external services',
            paragraphs: [
                'Do not misuse the website, interfere with its operation, attempt unauthorized access, introduce malicious code, or infringe others’ rights. We aim to provide accurate information but do not guarantee that website content is always current or error-free. Confirm training details in your booking documents.',
                'External links and third-party products or platforms are provided for convenience. We do not control their availability or independent practices. Use of those services may be governed by separate terms.',
            ],
        },
        {
            heading: 'Liability and applicable law',
            paragraphs: [
                'To the extent permitted by applicable law, Teshera Inc. will not be liable for indirect, incidental, special, or consequential damages arising from website use or training services, including lost profits or business interruption. This exclusion does not apply where prohibited by law, to fraud, gross negligence, or willful misconduct, or to any liability that cannot lawfully be excluded.',
                'Florida law governs these terms, without regard to conflict-of-law principles, except where mandatory applicable law provides otherwise. Nothing in these terms limits rights that cannot lawfully be waived.',
            ],
        },
        {
            heading: 'Updates and contact',
            paragraphs: [
                'We may update these terms by posting a revised version and effective date. Changes to training terms apply to future bookings unless otherwise agreed or required by law. Our Privacy Policy explains our handling of personal information. If a provision is unenforceable, the remaining provisions continue to apply to the extent permitted by law.',
                'Questions or rescheduling requests:',
            ],
            lines: CONTACT_LINES,
        },
    ],
};
