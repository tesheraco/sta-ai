import type { ReactNode } from 'react';

export enum ProgramPillar {
  STEM = 'STEM',
  AI = 'AI',
  ESPORTS = 'Esports'
}

export type GradeBand = 'K–2' | '3–5' | '6–8' | '9–12';

export const GRADE_BANDS: GradeBand[] = ['K–2', '3–5', '6–8', '9–12'];

export interface FaqItem {
  question: string;
  /** Plain text, or JSX when the answer needs an inline link */
  answer: ReactNode;
}

export interface Program {
  id: string;
  title: string;
  pillar: ProgramPillar;
  /** Display string, e.g. "Grades K–2" */
  grades: string;
  /** Bands used for filtering */
  gradeBands: GradeBand[];
  description: string;
  /** Devices requirement, e.g. "Laptops/Chromebooks" or "None" */
  devices: string;
  materials: string;
  /** Path under public/, e.g. "/programs/robocubes.jpg". Omit to render the pillar fallback. */
  image?: string;
  /** Attribution for third-party imagery; omit for STA-owned photography. */
  imageCredit?: { text: string; license: string; url: string };
  tags: string[];
  /** True when the program runs with zero student devices */
  screenFree?: boolean;
  /** Age-tiered variants of one program (e.g., different tools per grade band), rendered as side-by-side cards */
  versions?: { name: string; grades: string; tool: string; description: string }[];
  /** What students walk away with — the director's pitch to leadership and families */
  studentOutcomes?: string[];
  /** Framing angles for why the program is worth offering, rendered as titled cards */
  whyItMatters?: { title: string; description: string }[];
  /** The student semester journey, in order; the capstone phase gets visual emphasis */
  curriculumArc?: { title: string; description: string; weeks?: string; isCapstone?: boolean }[];
  /** What staff can do after training */
  staffOutcomes?: string[];
  /** The staff training agenda */
  trainingModules?: { title: string; description: string }[];
  /** Per-program numbers; each row renders in "At a Glance" only when present */
  logistics?: {
    sessionLength?: string;
    totalSessions?: string;
    groupSize?: string;
    staffRatio?: string;
  };
  /** Program-specific FAQs, shown above the shared ones */
  faq?: FaqItem[];
  /** Links the inline proof card to an entry in CASE_STUDIES */
  caseStudyId?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  /** Monthly rate on an annual agreement. null = quote-only (consult tier). */
  monthlyPrice: number | null;
  /** Headline capacity, e.g. "Up to 2 trained staff" */
  capacity: string;
  /** Rendered as "Everything in {inheritsFrom}, plus:" above the feature list */
  inheritsFrom?: string;
  features: string[];
  /** Renders the emphasized "most popular" treatment */
  featured?: boolean;
}

/** One row of the tier comparison matrix. `true` renders a check, `false` a dash. */
export interface PricingMatrixRow {
  label: string;
  values: Record<string, string | boolean>;
}

export interface LessonPlan {
  title: string;
  duration: string;
  objective: string;
  activities: {
    time: string;
    description: string;
  }[];
  assessmentIdea: string;
}

export interface ProgramDate {
  id: string;
  date: string;
  time: string;
  seats?: number;
  status?: 'open' | 'full' | 'closing';
  price?: number;
  spotsLeft?: number;
  link?: string;
}

export type OrganizationType = 'Public School District' | 'Community-Based Organization';

export interface CaseStudy {
  /** URL slug, e.g. "grand-street-settlement" → /case-studies/grand-street-settlement */
  id: string;
  organization: string;
  /** Program focus shown as the tile badge, e.g. "LEGO Robotics" */
  topic: string;
  /** Drives badge colour and the fallback icon via PILLAR_VISUALS */
  pillar: ProgramPillar;
  /** Display string, e.g. "Grades K–8" */
  gradeLevel: string;
  organizationType: OrganizationType;
  location: string;
  /** Path under public/, e.g. "/logos/phipps.svg". Omit to render the pillar icon. */
  logo?: string;
  /** One-line blurb for the tile */
  summary?: string;
  /** Detail-page content below; all optional so sections degrade gracefully */
  overview?: string;
  challenge?: string;
  /** What we did at the site, in order */
  approach?: { title: string; description: string }[];
  outcomes?: string[];
  quote?: { text: string; name: string; role: string };
}
