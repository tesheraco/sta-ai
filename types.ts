export enum ProgramPillar {
  STEM = 'STEM',
  AI = 'AI',
  ESPORTS = 'Esports'
}

export type GradeBand = 'K–2' | '3–5' | '6–8' | '9–12';

export const GRADE_BANDS: GradeBand[] = ['K–2', '3–5', '6–8', '9–12'];

export interface FaqItem {
  question: string;
  answer: string;
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

export interface CaseStudy {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  fullStory: string;
  metrics: { label: string; value: string }[];
  image?: string;
}
