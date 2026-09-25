import {
  Project,
  ResumeExperience,
  ResumeEducation,
  ResumeSkillGroup,
  ResumeAward,
  DesignPathStep,
} from './types';

export const PROJECTS: Project[] = [
  {
    id: 'aura-one',
    client: 'AURA AUDIO',
    category: 'Akustik-Hardware & Minimalismus',
    title: 'Aura One – Minimalistischer Smart Speaker',
    description: 'Konzipiert nach dem Grundsatz reduzierter Formgebung: Sandgestrahltes Aluminiumgehäuse, taktiles Drehrad mit Rändelung und mikroperforiertes Akustikgitter.',
    image: './images/product-speaker.jpg',
    tags: ['Industrial Design', 'CNC-Aluminium', 'Akustik', 'CMF'],
    metrics: 'iF Design Award 2025',
    year: '2025'
  },
  {
    id: 'lumina-s',
    client: 'STUDIO LICHTFORM',
    category: 'Leuchtendesign & Skulpturale Ästhetik',
    title: 'Lumina S – Skulpturale Arbeitsplatzleuchte',
    description: 'Fließende organische Übergänge treffen auf präzise Reflektortechnologie. Aus einem einzigen Strangpressprofil gefräst, mit integriertem kapazitiven Touch-Dimmer.',
    image: './images/product-luminaire.jpg',
    tags: ['Leuchtendesign', 'Aluminium-Strangpressen', 'Optik-Design', 'Touch-Interface'],
    metrics: 'German Design Award Nominee',
    year: '2024'
  },
  {
    id: 'apex-chrono',
    client: 'CHRONO LABS',
    category: 'Wearable Tech & Präzisionsmechanik',
    title: 'Apex Chrono – Titan-Smartwatch der nächsten Generation',
    description: 'Monolithisches Grade-5-Titangehäuse mit kratzfester DLC-Beschichtung. Ergonomisch gewölbter Sensorboden für ganztägigen Tragekomfort und maximale Signalgenauigkeit.',
    image: './images/product-wearable.jpg',
    tags: ['Wearable Architecture', 'Titan Grad 5', 'Biometrie', 'Ergonomie'],
    metrics: 'Red Dot: Best of the Best',
    year: '2024'
  },
  {
    id: 'orbit-control',
    client: 'ORBIT CONTROLS',
    category: 'Creative Tooling & Haptisches Feedback',
    title: 'Orbit Control – Modulares Editing-Interface',
    description: 'Präzisions-Eingabegerät für Coloristen und Audio-Engineers. Magnetisch gelagerte Drehgeber mit anpassbarem Drehmoment und OLED-Statusanzeigen pro Kanal.',
    image: './images/product-controller.jpg',
    tags: ['Hardware Design', 'Haptik & Encoder', 'Rapid Prototyping', 'CNC'],
    metrics: '+65% Workflow-Speed',
    year: '2023'
  }
];

export const RESUME_EXPERIENCES: ResumeExperience[] = [
  {
    period: '2021 – Heute',
    role: 'Lead Product Designer & Studioleiter',
    company: 'Studio Bastian Franke',
    location: 'Berlin / Remote',
    description: 'Verantwortung für ganzheitliches Hardware- und Industriedesign von der ersten Konzeptskizze über 3D-CAD bis zur Serienüberführung.',
    highlights: [
      'Erfolgreicher Launch von 25+ Serienprodukten in Consumer Electronics & Audio',
      'Ausgezeichnet mit dem Red Dot: Best of the Best 2024 und iF Design Award 2025',
      'Entwicklung skalierbarer CMF-Designsysteme für globale Produktlinien'
    ]
  },
  {
    period: '2018 – 2021',
    role: 'Senior Industrial Designer',
    company: 'Atelier für Form & Technologie',
    location: 'München',
    description: 'Leitung von Entwicklungsprojekten in den Bereichen Wearables, Audio-Hardware und intelligente Sensorik. Direkte Abstimmung mit Fertigungspartnern weltweit.',
    highlights: [
      'Konstruktion werkzeuggerechter Spritzguss- und Druckgussgehäuse (DFM)',
      'Optimierung von Werkzeugkosten und Durchlaufzeiten um 18%',
      'Aufbau des internen Rapid-Prototyping-Labs (SLA-Druck & Vakuumguss)'
    ]
  },
  {
    period: '2015 – 2018',
    role: 'Industrial Designer & CMF Specialist',
    company: 'Designstudio Pulse',
    location: 'Stuttgart',
    description: 'Class-A Flächenmodellierung, Haptik- und Ergonomiestudien sowie Ausarbeitung von Material- und Farbkonzepten für Konsumgüter.',
    highlights: [
      'Präzise 3D-CAD-Modellierung in SolidWorks & Rhinoceros',
      'Entwicklung von 1:1 Funktionsprototypen für Haptik- und Usability-Tests',
      'Etablierung standardisierter CMF-Musterkataloge (Pantone, RAL, VDI 3400)'
    ]
  },
  {
    period: '2013 – 2015',
    role: 'Junior Designer & Modellbau',
    company: 'Prototyping Lab & Modellwerkstatt',
    location: 'Schwäbisch Gmünd',
    description: 'Klassischer physischer Modellbau, Clay-Modelling, Schaumstoffstudien, Vakuumguss und CNC-Fräsbearbeitung.',
    highlights: [
      'Erstellung von Showmodellen für internationale Messen & Designwettbewerbe',
      'Handwerkliche Perfektionierung von Spaltmaßen und Passungen'
    ]
  }
];

export const RESUME_EDUCATION: ResumeEducation[] = [
  {
    period: '2009 – 2013',
    degree: 'Bachelor of Arts (B.A.) Produktdesign / Industrial Design',
    institution: 'Hochschule für Gestaltung (HfG) Schwäbisch Gmünd',
    details: 'Schwerpunkte: Ergonomie, Fertigungstechnologien, systemisches Produktdesign. Abschlussnote: 1.2 mit Auszeichnung.'
  },
  {
    period: '2012',
    degree: 'Auslandssemester Industrial & Furniture Design',
    institution: 'Politecnico di Milano, Italien',
    details: 'Vertiefung in skulpturaler Formfindung, Werkstoffkunde und avantgardistischem italienischen Produktdesign.'
  }
];

export const RESUME_SKILL_GROUPS: ResumeSkillGroup[] = [
  {
    category: '3D-CAD & Visualisierung',
    skills: ['SolidWorks', 'Rhinoceros 3D', 'Autodesk Fusion 360', 'KeyShot Rendering', 'Blender', 'Class-A Surfacing']
  },
  {
    category: 'Prototyping & Fertigung',
    skills: ['Rapid Prototyping (SLA/FDM/SLS)', 'CNC-Bearbeitung', 'Vakuumguss', 'Design for Manufacturing (DFM)', 'Spritzgussgerechte Konstruktion']
  },
  {
    category: 'CMF & Ergonomie',
    skills: ['Color-Material-Finish (CMF)', 'Oberflächenstrukturen (VDI/Mold-Tech)', 'Ergonomie- & Greifstudien', 'Haptik-Engineering']
  },
  {
    category: 'Methodik & Führung',
    skills: ['Design Thinking', 'Lastenheft & Pflichtenheft', 'Lieferantenabstimmung', 'First Article Inspection (FAI)', 'Produktstrategie']
  }
];

export const RESUME_AWARDS: ResumeAward[] = [
  {
    year: '2025',
    title: 'iF Design Award',
    organization: 'iF International Forum Design',
    project: 'Aura One – Minimalist Smart Speaker'
  },
  {
    year: '2024',
    title: 'Red Dot: Best of the Best',
    organization: 'Design Zentrum Nordrhein Westfalen',
    project: 'Apex Chrono – Titan Smartwatch'
  },
  {
    year: '2024',
    title: 'German Design Award (Nominee)',
    organization: 'Rat für Formgebung',
    project: 'Lumina S – Skulpturale Tischleuchte'
  },
  {
    year: '2023',
    title: 'Red Dot Winner',
    organization: 'Design Zentrum Nordrhein Westfalen',
    project: 'Orbit Control – Haptischer Controller'
  }
];

export const DESIGN_PATH_STEPS: DesignPathStep[] = [
  {
    number: '01',
    title: 'Recherche & Briefing',
    subtitle: 'Fundament & Lastenheft',
    duration: 'Woche 1',
    description: 'Analyse des Marktumfelds, Zielgruppen-Workflows und technischer Rahmenbedingungen. Gemeinsame Definition der Kernanforderungen und Priorisierung der Designziele.',
    deliverables: ['Technisches Lastenheft', 'Wettbewerbsanalyse & Benchmarking', 'Ergonomie-Anforderungsmatrix', 'Projekt-Roadmap'],
    tools: ['User Research', 'Marktanalyse', 'Anforderungskatalog']
  },
  {
    number: '02',
    title: 'Ideation & Skizzierung',
    subtitle: 'Formfindung & Proportionen',
    duration: 'Woche 2-3',
    description: 'Exploration breiter Gestaltungskonzepte anhand hunderter schneller Skizzen und haptischer Schaummodelle. Schnelle Validierung von Dimensionen, Ergonomie und Silhouette.',
    deliverables: ['Analoge & digitale Skizzen', '1:1 Ergonomie-Schaummodelle', 'Varianten-Gegenüberstellung', 'Design-Moodboards'],
    tools: ['Handskizzen', 'Procreate', 'Werkstatt-Schaummodelle']
  },
  {
    number: '03',
    title: '3D-CAD & CMF-Design',
    subtitle: 'Präzision & Materialität',
    duration: 'Woche 4-6',
    description: 'Übertrag des gewählten Entwurfs in hochpräzise parametrische 3D-CAD-Volumen- und Flächenmodelle. Detaillierte Ausarbeitung des CMF-Konzepts (Farbe, Material, Oberflächenstruktur).',
    deliverables: ['Class-A CAD-Geometrie (STP/IGS)', 'CMF-Spezifikationsblatt', 'Fotorealistische 3D-Renderings', 'Virtuelle Explosionsansichten'],
    tools: ['SolidWorks', 'Rhinoceros 3D', 'KeyShot']
  },
  {
    number: '04',
    title: 'Rapid Prototyping',
    subtitle: 'Haptik & Funktionsmodell',
    duration: 'Woche 7-8',
    description: 'Herstellung physischer Funktions- und Anschauungsmuster per SLA/SLS-3D-Druck und CNC-Fräsung. Echte Haptik-Prüfung, Spaltmaß-Validierung und Elektronik-Einbau.',
    deliverables: ['Funktionale 1:1 Prototypen', 'Haptik- & Ergonomieprotokoll', 'Einbauprüfung Elektronik & Akku', 'Passungs-Optimierungsbericht'],
    tools: ['Formlabs SLA', 'CNC-Bearbeitung', 'Haptik-Lab']
  },
  {
    number: '05',
    title: 'DFM & Werkzeugbau',
    subtitle: 'Design for Manufacturing',
    duration: 'Woche 9-11',
    description: 'Konstruktive Abstimmung mit Werkzeugbauern und Spritzgießern. Festlegung von Entformungsschrägen, Wanddicken, Schiebern, Bindenähten und engen Fertigungstoleranzen.',
    deliverables: ['Werkzeugfallende Fertigungsdaten', 'Toleranz- und Spaltmaßplan', 'DFM-Freigabeprotokoll', 'Lieferanten-Abstimmung'],
    tools: ['DFM-Analyse', 'Moldflow-Simulation', 'Toleranzberechnung']
  },
  {
    number: '06',
    title: 'Serienreife & Begleitung',
    subtitle: 'Qualität & Marktreife',
    duration: 'Woche 12+',
    description: 'Begleitung der ersten Nullserie (First Article Inspection). Freigabe der Werkzeugmuster (Golden Samples), Feinabstimmung der Oberflächen und Unterstützung beim Unboxing-Erlebnis.',
    deliverables: ['Erstmusterprüfbericht (EMPB)', 'Golden Sample Freigabe', 'Verpackungs- & CMF-Dokumentation', 'Serienreifes Produkt'],
    tools: ['Erstmusterprüfung (FAI)', 'Qualitätskontrolle', 'Serienanlauf']
  }
];
