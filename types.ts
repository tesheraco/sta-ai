export enum ViewState {
  LANDING = 'LANDING',
  TOOLKIT = 'TOOLKIT',
  COURSE_DETAILS = 'COURSE_DETAILS',
  SCHEDULE = 'SCHEDULE'
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
  seats: number;
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
