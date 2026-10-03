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
  location?: string;
  description: string;
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

export interface DesignPathStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}
