export interface Project {
  id: string;
  client: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics?: string;
  year?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ApproachItem {
  title: string;
  description: string;
  metric?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
}

export interface Metric {
  value: string;
  label: string;
  subtext?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
}

export type SceneMode = 'scroll' | 'orbit' | 'auto';

export interface ResumeExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ResumeEducation {
  period: string;
  degree: string;
  institution: string;
  details: string;
}

export interface ResumeSkillGroup {
  category: string;
  skills: string[];
}

export interface ResumeAward {
  year: string;
  title: string;
  organization: string;
  project: string;
}

export interface DesignPathStep {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
  tools: string[];
}
