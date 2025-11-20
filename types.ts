export enum ViewState {
  LANDING = 'LANDING',
  TOOLKIT = 'TOOLKIT',
  COURSE_DETAILS = 'COURSE_DETAILS',
  SCHEDULE = 'SCHEDULE',
  COURSES = 'COURSES',
  COURSE_SINGLE = 'COURSE_SINGLE'
}

export enum CourseCategory {
  CODING = 'Coding & Game Design',
  ROBOTICS = 'Robotics & Engineering',
  CREATIVE = 'Creative Arts & Media',
  MAKER = 'Maker & Fabrication',
  AI = 'AI & Future Tech'
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  image: string;
  tags: string[];
  duration: string;
  gradeLevel: string;
  equipment: string[];
  learningOutcomes: string[];
  syllabus: { title: string; description: string }[];
  price: number;
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

export interface CourseDate {
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
