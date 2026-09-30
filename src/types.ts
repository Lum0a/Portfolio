export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  sections: {
    goal: string;
    context: string;
    approach: string;
    result: string;
  };
}

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
