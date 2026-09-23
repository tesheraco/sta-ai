import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, LEGAL_EFFECTIVE_DATE, LegalDocument } from '../data/legal';

interface LegalPageProps {
  document: LegalDocument;
  /** The companion policy, linked at the bottom of the page */
  related: { label: string; to: string };
}

/** Renders text with every occurrence of the contact email as a mailto link. */
const withEmailLinks = (text: string) =>
  text.split(CONTACT_EMAIL).flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a
            key={i}
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sta-primary font-bold underline underline-offset-2 hover:text-sta-cta"
          >
            {CONTACT_EMAIL}
          </a>,
          part,
        ]
  );

export const LegalPage: React.FC<LegalPageProps> = ({ document, related }) => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <section className="relative bg-sta-surface border-b-2 border-black pt-16 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-dot-pattern pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-sta-dark mb-6">{document.title}</h1>
          <div className="bg-black text-white inline-block px-3 py-1 font-mono text-sm font-bold">
            EFFECTIVE {LEGAL_EFFECTIVE_DATE.toUpperCase()}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-slate-600 font-medium leading-relaxed">
          <p className="text-lg mb-12">{document.intro}</p>
          <div className="space-y-10">
            {document.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black text-sta-dark mb-4 tracking-tight">{section.heading}</h2>
                {section.paragraphs && (
                  <div className="space-y-4">
                    {section.paragraphs.map((p) => (
                      <p key={p}>{withEmailLinks(p)}</p>
                    ))}
                  </div>
                )}
                {section.lines && (
                  <address className={`not-italic ${section.paragraphs ? 'mt-4' : ''}`}>
                    {section.lines.map((line) => (
                      <div key={line}>{withEmailLinks(line)}</div>
                    ))}
                  </address>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t-2 border-black">
            <Link to={related.to} className="text-sta-primary font-bold underline underline-offset-2 hover:text-sta-cta">
              Read our {related.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
