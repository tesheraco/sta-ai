export enum ViewState {
  LANDING = 'LANDING',
  TOOLKIT = 'TOOLKIT',
  PROGRAM_DETAILS = 'PROGRAM_DETAILS',
  SCHEDULE = 'SCHEDULE',
  PROGRAMS = 'PROGRAMS',
  PROGRAM_SINGLE = 'PROGRAM_SINGLE'
}

export enum ProgramPillar {
  STEM = 'STEM',
  AI = 'AI',
  ESPORTS = 'Esports'
}

export type GradeBand = 'K–2' | '3–5' | '6–8' | '9–12';

export const GRADE_BANDS: GradeBand[] = ['K–2', '3–5', '6–8', '9–12'];

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
  image: string;
  tags: string[];
  /** True when the program runs with zero student devices */
  screenFree?: boolean;
  learningOutcomes?: string[];
  syllabus?: { title: string; description: string }[];
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
