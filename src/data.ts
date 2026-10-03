import {
  Project,
  ResumeExperience,
  ResumeEducation,
  ResumeSkillGroup,
  DesignPathStep,
} from './types';

export const PROJECTS: Project[] = [
  {
    id: 'mandible',
    category: 'Ergonomie & Gartengerät',
    title: 'Mandible – ergonomische Gartenschere',
    description: 'Eine Gartenschere, die die natürliche Kraftlinie des Arms nutzt: Mandible ersetzt die übliche Quetschkraft durch eine Zugbewegung über einen Abzug.',
    status: 'Konzept',
    sections: {
      goal: 'Die klassische Gartenschere ergonomisch hinterfragen und die Kraftübertragung an die natürliche Bewegung des Arms anpassen.',
      context: 'Bionische Inspiration durch die Mandibeln von Ameisen; im Mittelpunkt steht die Zugbewegung statt der üblichen Quetschkraft.',
      approach: 'Beobachtung klassischer Gartenscheren, Ergonomierecherche, Vergleich angrenzender Greifhilfen, Materialvergleich, Skizzen, CAD und Modellprototypen.',
      result: 'Pistolengriff mit etwa 20° Neigung, langer Abzug parallel zum Unterarm und griffige TPE-Oberfläche.'
    }
  },
  {
    id: 'bambustry-gartentool',
    category: 'Systemdesign & Material',
    title: 'Modulares Gartentool-System – Bambus als Systemerweiterung für GARDENA',
    description: 'Ein modulares Gartengeräte-System aus Bambus mit werkzeugloser Kupplung für Griffe und Verlängerungen.',
    status: 'Konzept',
    sections: {
      goal: 'Eine sichere, starre und leichte Verbindung für modulare Gartengeräte entwickeln.',
      context: 'Bambus wird als Alternative zu klassischen Stielmaterialien und als Erweiterung eines bestehenden Systems untersucht.',
      approach: 'Materialvergleich, Analyse der bestehenden Schraubklemmung, Übertragung des Einrastprinzips von Gartenschlauchkupplungen und Entwicklung eines Material- und Farbkonzepts.',
      result: 'Vorgeschlagen wird ein beidseitig modulares System aus Bambusstiel, Kupplung sowie wechselbaren Griff- und Verlängerungsmodulen.'
    }
  },
  {
    id: 'kaguya',
    category: 'Leuchtendesign & Systemdesign',
    title: 'Kaguya – modulare Arbeitsplatzleuchte aus Bambus',
    description: 'Eine reduzierte Arbeitsplatzleuchte mit Bambus-Tragarm, integrierter Kabelführung und geschlossenen Friktionsgelenken.',
    status: 'Konzept',
    sections: {
      goal: 'Die visuelle Unruhe klassischer Arbeitsplatzleuchten durch ein geschlossenes, ruhiges System reduzieren.',
      context: 'Büro- und Workspace-Design mit biophilem Ansatz und konstruktiver Nutzung der hohlen Bambusstruktur.',
      approach: 'Analyse von Tragstruktur und Kabelführung; Entwicklung geschlossener zylindrischer Friktionsgelenke sowie Überlegungen zu Materialität und Skalierung.',
      result: 'Verdeckte Kabelführung, fließender Übergang von Tragarm zu Gelenkkörper und eine skalierbare Produktfamilie.'
    }
  },
  {
    id: 'leica-ccar',
    category: 'UXDD & AR-Handwerkzeug',
    title: 'Leica CCAR – AR-Controller für Planung und Ausführung',
    description: 'Ein Controller, der präzises Lasermessen mit AR-Interaktion verbindet und Medienbrüche auf der Baustelle reduzieren soll.',
    status: 'Konzept',
    sections: {
      goal: 'Messen, Markieren und visuelle Kommunikation zwischen Baustelle und Planung in einem Werkzeug verbinden.',
      context: 'Baustellenkommunikation zwischen Planung und Ausführung; Personas sind eine Architektin und ein Elektriker.',
      approach: 'Analyse klassischer Messlaser, Ableitung von Must-haves, Skizzen und Modelle sowie Abgleich von Form und Ergonomie mit der Leica-iCON-Designsprache.',
      result: 'Zweiteiliger Controller mit Messlaserbereich, ergonomischem Griff, OLED, Navigation, Messtasten und AR-Trigger.'
    }
  },
  {
    id: 'trinit-square-meets-wire',
    category: 'Möbelstruktur & Prototyping',
    title: 'Trinit – Square Meets Wire',
    description: 'Ein Stuhl aus verdrehten Holzstreben, Metallringen und Seilen, dessen Stabilität aus der Spannung der Materialien entsteht.',
    status: '1:1-Prototyp',
    sections: {
      goal: 'Eine dreidimensionale Sitzstruktur mit begrenztem Materialverbrauch und ohne komplexe Holzverbindungen entwickeln.',
      context: 'Nachhaltigkeits- und Möbelstrukturprojekt im 3. Semester an der FH Aachen.',
      approach: 'Skizzen, 1:5-Modelle, Experimente mit Biegedraht, Holzstreben, Metallringen und Seil, 1:1-Bau, Sitztests, Optimierung sowie Digitalisierung in Rhino 8 und Shapr3D.',
      result: 'Finaler Stuhl mit elf Holzstreben, Metallringen, 4-mm-Hanfseil, 550-mm-Sitzhöhe sowie Esche, Stoff und Hartöl.'
    }
  }
];

export const RESUME_EXPERIENCES: ResumeExperience[] = [
  {
    period: '2 Monate',
    role: 'Praktische Erfahrung im Vertrieb',
    company: 'HIRT',
    description: 'Zweimonatiger Einblick in den Bereich Vertrieb.'
  },
  {
    period: '1 Monat',
    role: 'Praktische Designarbeit',
    company: 'WerbeTeam Köln',
    description: 'Einmonatige praktische Erfahrung im Bereich Design.'
  }
];

export const RESUME_EDUCATION: ResumeEducation[] = [
  {
    period: '2019 – 2022',
    degree: 'Staatlich geprüfter Gestaltungstechnischer Assistent',
    institution: 'Staatliches Berufskolleg in Rheinbach',
    details: 'Abschluss als staatlich geprüfter Gestaltungstechnischer Assistent.'
  },
  {
    period: '2013 – 2019',
    degree: 'Fachhochschulreife',
    institution: 'Gesamtschule Mechernich',
    details: 'Mit Qualifikation für die gymnasiale Oberstufe.'
  }
];

export const RESUME_SKILL_GROUPS: ResumeSkillGroup[] = [
  {
    category: 'Gestaltung',
    skills: ['Produkt- und Industriedesign', 'Ergonomie', 'Möbel- und Strukturdesign', 'Material- und Farbkonzepte']
  },
  {
    category: 'Umsetzung',
    skills: ['Skizzen', 'Recherche', 'Materialtests', 'CAD-Entwürfe', 'Modellbau', 'Prototyping', 'Präsentation']
  },
  {
    category: 'Digitale Werkzeuge',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe Premiere Pro', 'Adobe After Effects', 'WordPress', 'Blender']
  }
];

export const DESIGN_PATH_STEPS: DesignPathStep[] = [
  {
    number: '01',
    title: 'Beobachten',
    subtitle: 'Nutzung & Umfeld',
    description: 'Ich untersuche, wie Menschen Produkte nutzen, in welchem Umfeld sie eingesetzt werden und was bestehende Lösungen leisten.',
    deliverables: ['Nutzung beobachten', 'Umfeld verstehen', 'Bestehende Produkte untersuchen']
  },
  {
    number: '02',
    title: 'Hinterfragen',
    subtitle: 'Anforderungen & Chancen',
    description: 'Aus den Beobachtungen leite ich Anforderungen ab und arbeite heraus, wo Produkte verständlicher oder angenehmer funktionieren können.',
    deliverables: ['Anforderungen herausarbeiten', 'Probleme benennen', 'Mögliche Verbesserungen erkennen']
  },
  {
    number: '03',
    title: 'Skizzieren',
    subtitle: 'Ideen & Varianten',
    description: 'Ich entwickle Gestaltungsideen, halte sie in Skizzen fest und vergleiche unterschiedliche Varianten.',
    deliverables: ['Ideen skizzieren', 'Varianten entwickeln', 'Ansätze vergleichen']
  },
  {
    number: '04',
    title: 'Bauen und testen',
    subtitle: 'Modelle & Prototypen',
    description: 'Ich setze Ideen praktisch um und überprüfe sie mit Modellen und Prototypen.',
    deliverables: ['Modelle bauen', 'Prototypen erstellen', 'Entwürfe praktisch überprüfen']
  },
  {
    number: '05',
    title: 'Ausarbeiten',
    subtitle: 'Form, Material & Präsentation',
    description: 'Ich entwickle den Entwurf weiter und führe Konstruktion, Material, Form und Präsentation zusammen.',
    deliverables: ['Konstruktion ausarbeiten', 'Material und Form abstimmen', 'Ergebnis präsentieren']
  }
];
