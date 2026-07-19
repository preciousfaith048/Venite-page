import { Faculty, Stat, TimelineStep, Programme, Testimonial, NewsArticle, FAQItem, CalendarEvent } from './types';

export const stats: Stat[] = [
  { id: 'students', value: 15000, suffix: '+', label: 'Enrolled Students' },
  { id: 'lecturers', value: 500, suffix: '+', label: 'Expert Lecturers' },
  { id: 'programmes', value: 50, suffix: '+', label: 'Academic Programmes' },
  { id: 'employment', value: 95, suffix: '%', label: 'Employment Rate' }
];

export const faculties: Faculty[] = [
  {
    id: 'medicine',
    name: 'Faculty of Medicine',
    description: 'Prepare for a career in healthcare with world-class clinical training, advanced medical labs, and expert mentorship.',
    iconName: 'HeartPulse'
  },
  {
    id: 'engineering',
    name: 'Faculty of Engineering',
    description: 'Learn to design, build, and innovate solutions for today’s challenges, from robotics to civil infrastructure.',
    iconName: 'Cpu'
  },
  {
    id: 'computing',
    name: 'Faculty of Computing & IT',
    description: 'Explore artificial intelligence, software engineering, and cybersecurity using cutting-edge computer systems and labs.',
    iconName: 'Code'
  },
  {
    id: 'business',
    name: 'Faculty of Business',
    description: 'Develop strategic leadership, financial acumen, and entrepreneurial skills to excel in the global commercial arena.',
    iconName: 'Briefcase'
  },
  {
    id: 'law',
    name: 'Faculty of Law',
    description: 'Acquire rigorous analytical and legal skills to champion justice, policy, and human rights across jurisdictions.',
    iconName: 'Scale'
  },
  {
    id: 'arts',
    name: 'Faculty of Arts & Humanities',
    description: 'Cultivate creative thinking, cultural awareness, and communication mastery through visual and liberal arts.',
    iconName: 'Palette'
  }
];

export const campusLife = [
  {
    id: 'sports',
    title: 'Elite Sports Facilities',
    description: 'Olympic-sized pools, multi-sport indoor arenas, and state-of-the-art athletics tracks for all-round physical excellence.',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hub',
    title: 'Student Innovation Hub',
    description: 'A vibrant sandbox for tech incubators, 3D printing labs, and collaborative team spaces to launch next-gen startups.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'library',
    title: 'Centennial Library',
    description: 'An expansive library housing over 1 million physical and digital resources, private study pods, and 24/7 research support.',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hostels',
    title: 'Modern On-Campus Hostels',
    description: 'Cozy, high-speed Wi-Fi equipped, secure and eco-friendly resident halls that feel just like a second home.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'B.Sc. Computer Science (Final Year)',
    quote: 'Choosing Venite University was the best decision of my life. The hands-on learning at the Innovation Hub helped me land a software engineering internship at Google before graduating.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'M.B.A. Alumnus (Class of 2024)',
    quote: 'The rigorous curriculum and executive network provided by the Business School empowered me to pivot from finance into a Chief Operations role at a top-tier European startup.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Dr. Elena Rostova',
    role: 'Postgraduate Researcher, Bio-Pharmacy',
    quote: 'Venite University prioritizes research above all else. The generous funding, state-of-the-art laboratories, and collaborative environment make it a leading beacon of global science.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];

export const latestNews: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Venite University Launches Groundbreaking Renewable Energy Research Initiative',
    category: 'Research & Innovation',
    date: 'July 15, 2026',
    excerpt: 'The engineering faculty secures a $10 million European Union grant to pioneer next-generation solar storage and smart grid technology for developing communities.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'news-2',
    title: 'Men’s Athletics Team Triumphs at the National Inter-University Championship',
    category: 'Campus Sports',
    date: 'July 10, 2026',
    excerpt: 'Venite Falcons bring home 12 Gold Medals, sealing the overall team championship for the third consecutive year amid spectacular relays and historic high-jump feats.',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'news-3',
    title: 'Inauguration of the New High-Performance Computing Sandbox',
    category: 'Campus Facilities',
    date: 'June 28, 2026',
    excerpt: 'The Computing Faculty unmasks a state-of-the-art supercomputing lab designed to accelerate student-led AI model development, quantum logic simulation, and Big Data studies.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
  }
];

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: 'Requirement Analysis',
    subtitle: 'Understanding core vision & scope',
    details: [
      'Engaged with Venite academic board to understand branding guidelines.',
      'Identified critical page structure: Home, About, Programmes, and Contact.',
      'Documented and planned user flows for standard application procedures.'
    ],
    iconName: 'FileSearch'
  },
  {
    step: 2,
    title: 'Planning & Architecture',
    subtitle: 'Creating visual and structure blueprints',
    details: [
      'Drafted skeletal user layouts (wireframes) for desktop, tablet, and mobile.',
      'Devised an intuitive, hierarchical sitemap with sticky header navigation.',
      'Chose the Royal Blue and Premium White color palette with clean Poppins typography.'
    ],
    iconName: 'Map'
  },
  {
    step: 3,
    title: 'UI/UX Interactive Design',
    subtitle: 'Polishing visuals and modern transitions',
    details: [
      'Engineered an immersive glassmorphic look for information cards.',
      'Ensured high accessibility contrast with AA and AAA WCAG standards.',
      'Fleshed out micro-interactions (e.g., scale hooks, hover states, scroll cues).'
    ],
    iconName: 'Layers'
  },
  {
    step: 4,
    title: 'Frontend Engineering',
    subtitle: 'Transforming designs into production-ready code',
    details: [
      'Structured using modular semantic HTML5 and clean CSS3 Tailwind rules.',
      'Programmed interactive React templates, sliding carousels, and accordion components.',
      'Integrated Framer Motion for responsive entrance and layout animations.'
    ],
    iconName: 'Terminal'
  },
  {
    step: 5,
    title: 'Rigorous Verification',
    subtitle: 'Assuring quality across viewports & engines',
    details: [
      'Conducted extensive multi-device layout checks (mobile, tablet, desktop).',
      'Tested form fields with custom validator engines in JavaScript.',
      'Validated and corrected any compilation and lint warnings.'
    ],
    iconName: 'ShieldCheck'
  },
  {
    step: 6,
    title: 'Deployment & Support',
    subtitle: 'Publishing and future development setup',
    details: [
      'Packaged standalone HTML/CSS/JS files for easy host mirroring.',
      'Established systematic documentation of structural assets for the university IT board.',
      'Configured continuous hosting preview engines.'
    ],
    iconName: 'CloudLightning'
  }
];

export const programmes: Programme[] = [
  // Undergraduate
  {
    id: 'cs',
    name: 'B.Sc. Computer Science',
    duration: '4 Years',
    faculty: 'Computing',
    description: 'Immerse in algorithmic theory, deep machine learning models, cloud system scaling, and solid software architecture methodologies.',
    degreeType: 'undergraduate'
  },
  {
    id: 'nursing',
    name: 'B.Sc. Nursing',
    duration: '5 Years',
    faculty: 'Medicine',
    description: 'Engage in expert clinical practice, compassionate patient diagnostics, anatomy, and advanced medical simulations under top hospital partners.',
    degreeType: 'undergraduate'
  },
  {
    id: 'medicine-ug',
    name: 'Bachelor of Medicine & Surgery (MBBS)',
    duration: '6 Years',
    faculty: 'Medicine',
    description: 'Prepare to become a medical leader through intensive human biology study, surgical internships, and clinical pathology rotations.',
    degreeType: 'undergraduate'
  },
  {
    id: 'pharmacy',
    name: 'Doctor of Pharmacy (Pharm.D)',
    duration: '5 Years',
    faculty: 'Medicine',
    description: 'Dive deep into pharmaceutical chemistry, industrial toxicology, patient medication advice, and clinical pharmacy trials.',
    degreeType: 'undergraduate'
  },
  {
    id: 'accounting',
    name: 'B.Sc. Accounting',
    duration: '4 Years',
    faculty: 'Business',
    description: 'Master financial modeling, international audit regulations, corporate tax planning, and strategic budget management.',
    degreeType: 'undergraduate'
  },
  {
    id: 'law-ug',
    name: 'Bachelor of Laws (LL.B)',
    duration: '5 Years',
    faculty: 'Law',
    description: 'Learn advocacy, constitutional law drafting, maritime regulations, international commerce arbitration, and mock court trial pleading.',
    degreeType: 'undergraduate'
  },
  {
    id: 'economics',
    name: 'B.Sc. Economics',
    duration: '4 Years',
    faculty: 'Business',
    description: 'Analyze micro/macro-economic forces, public policy impacts, game theory, and algorithmic quantitative market analysis.',
    degreeType: 'undergraduate'
  },
  {
    id: 'engineering-ug',
    name: 'B.Eng. Mechanical & Robotics Engineering',
    duration: '5 Years',
    faculty: 'Engineering',
    description: 'Build automated control systems, thermodynamic engines, structural materials, and next-generation smart robotic frames.',
    degreeType: 'undergraduate'
  },
  {
    id: 'masscomm',
    name: 'B.A. Mass Communication',
    duration: '4 Years',
    faculty: 'Arts',
    description: 'Explore investigative print journalism, digital video broadcast production, public relations management, and social media media theory.',
    degreeType: 'undergraduate'
  },

  // Postgraduate
  {
    id: 'masters-cs',
    name: 'M.Sc. Advanced Artificial Intelligence',
    duration: '2 Years',
    faculty: 'Computing',
    description: 'A deep graduate-level focus on natural language processing, deep generative neural networks, and scalable distributed big-data pipelines.',
    degreeType: 'postgraduate'
  },
  {
    id: 'mba',
    name: 'Master of Business Administration (Executive MBA)',
    duration: '1.5 Years',
    faculty: 'Business',
    description: 'Designed for corporate leaders. Emphasizes global risk analytics, corporate mergers and acquisitions, and modern leadership ethics.',
    degreeType: 'postgraduate'
  },
  {
    id: 'msc-finance',
    name: 'M.Sc. Global Finance & Wealth Management',
    duration: '2 Years',
    faculty: 'Business',
    description: 'Covers algorithmic trading portfolios, venture capital operations, banking policies, and complex derivative market hedging.',
    degreeType: 'postgraduate'
  },
  {
    id: 'phd-law',
    name: 'Ph.D. in International Law & Human Rights',
    duration: '3-4 Years',
    faculty: 'Law',
    description: 'Advanced legal research focusing on international court arbitration, global peace agreements, and multi-lateral treaties.',
    degreeType: 'postgraduate'
  },

  // Certifications
  {
    id: 'cert-cyber',
    name: 'Professional Certificate in Cybersecurity Operations',
    duration: '6 Months',
    faculty: 'Computing',
    description: 'Intense practical training covering network penetration testing, digital forensics, ethical hacking, and real-time network defense.',
    degreeType: 'certification'
  },
  {
    id: 'cert-pm',
    name: 'Agile Project Management & Leadership (PMP Prep)',
    duration: '3 Months',
    faculty: 'Business',
    description: 'Master scrum sprints, lean management, stakeholder relationships, resource scheduling, and project cost control cycles.',
    degreeType: 'certification'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I apply for admission to Venite University?',
    answer: 'You can apply easily by clicking any of the "Apply Now" buttons across our website. This will direct you to our central admissions form where you can submit academic credentials, personal statements, and pay the basic application processing fee. Applications are processed on a rolling basis.'
  },
  {
    id: 'faq-2',
    question: 'What are the scholarship opportunities available?',
    answer: 'Venite University awards over $5 million in academic scholarships annually. These include: Academic Excellence Scholarships (covering 100% tuition for students in top 3% percentile), Athletic Merit Scholarships, and Need-Based Grants. Applications for scholarships open immediately after receiving an admission offer.'
  },
  {
    id: 'faq-3',
    question: 'Are there on-campus accommodation facilities?',
    answer: 'Yes! We have state-of-the-art residential halls with single and shared occupancy setups. All hostels are highly secure with 24/7 security guard patrols, biometric access systems, continuous electrical grid back-ups, study libraries, laundry facilities, and common dining halls serving gourmet meals.'
  },
  {
    id: 'faq-4',
    question: 'What is the student-to-lecturer ratio at the university?',
    answer: 'We maintain an impressive average student-to-lecturer ratio of 15:1. This guarantees that every student receives dedicated support, personalized career guidance, and academic mentorship directly from our 500+ world-class doctoral and professional lecturers.'
  },
  {
    id: 'faq-5',
    question: 'Does the university offer career placement support?',
    answer: 'Absolutely. Our career services center partners with over 300+ leading global corporations (Google, McKinsey, Pfizer, etc.). We organize bi-annual career expos, mock interviews, and resume-building workshops. Over 95% of our graduates secure full-time, high-paying jobs within 6 months of graduation.'
  }
];

export const contactDetails = {
  address: '100 University Drive, Academic Heights, City of Innovation, CI 40400',
  phone: '+1 (800) 555-VENITE, +1 (555) 987-6543',
  email: 'admissions@venite.edu.ng, contact@venite.edu.ng',
  officeHours: 'Monday – Friday: 8:00 AM – 5:00 PM (GMT +1), Saturday: 9:00 AM – 1:00 PM (Admissions Office Only)',
  socials: [
    { name: 'Facebook', url: '#', icon: 'Facebook' },
    { name: 'Instagram', url: '#', icon: 'Instagram' },
    { name: 'LinkedIn', url: '#', icon: 'Linkedin' },
    { name: 'Twitter', url: '#', icon: 'Twitter' },
    { name: 'YouTube', url: '#', icon: 'Youtube' }
  ]
};

export const calendarEvents: CalendarEvent[] = [
  // Fall Semester 2026
  {
    id: 'f26-1',
    title: 'Fall Semester Resumption & Online Registration',
    date: 'September 1, 2026',
    category: 'admissions',
    semester: 'fall',
    description: 'Portal opens for new and returning undergraduate & postgraduate students to complete course registration and tuition payment.'
  },
  {
    id: 'f26-2',
    title: 'Freshmen Orientation Week',
    date: 'September 7 - 11, 2026',
    category: 'academic',
    semester: 'fall',
    description: 'A dedicated welcoming week introducing first-year students to faculties, campus facilities, research resources, and peer groups.'
  },
  {
    id: 'f26-3',
    title: 'Commencement of Fall Lectures',
    date: 'September 14, 2026',
    category: 'academic',
    semester: 'fall',
    description: 'Official academic lectures begin across all undergraduate faculties and postgraduate schools.'
  },
  {
    id: 'f26-4',
    title: 'Independence Day Holiday',
    date: 'October 1, 2026',
    category: 'holidays',
    semester: 'fall',
    description: 'National holiday. No lectures will hold, and administrative offices remain closed.'
  },
  {
    id: 'f26-5',
    title: 'Fall Mid-Semester Continuous Assessments',
    date: 'October 26 - 30, 2026',
    category: 'exams',
    semester: 'fall',
    description: 'Mid-term evaluation exams, quizzes, and project review assessments for all departments.'
  },
  {
    id: 'f26-6',
    title: 'Thanksgiving Collegiate Break',
    date: 'November 26 - 27, 2026',
    category: 'holidays',
    semester: 'fall',
    description: 'Collegiate recess. Students are permitted to travel, and library hours are scaled back.'
  },
  {
    id: 'f26-7',
    title: 'Fall Semester Final Examinations',
    date: 'December 14 - 18, 2026',
    category: 'exams',
    semester: 'fall',
    description: 'Compulsory semester-end examinations for all registered courses.'
  },
  {
    id: 'f26-8',
    title: 'Christmas & New Year Inter-Semester Recess',
    date: 'December 21, 2026 - January 8, 2027',
    category: 'holidays',
    semester: 'fall',
    description: 'End-of-year holidays. Portals remain open for early spring registrations.'
  },

  // Spring Semester 2027
  {
    id: 's27-1',
    title: 'Spring Semester Resumption & Registration',
    date: 'January 11, 2027',
    category: 'admissions',
    semester: 'spring',
    description: 'Online registration for Spring Semester courses begins. Faculty advisors are available for consulting.'
  },
  {
    id: 's27-2',
    title: 'Commencement of Spring Lectures',
    date: 'January 18, 2027',
    category: 'academic',
    semester: 'spring',
    description: 'Formal spring semester lectures commence across all faculties.'
  },
  {
    id: 's27-3',
    title: 'Venite Founder’s Day Celebration',
    date: 'February 15, 2027',
    category: 'academic',
    semester: 'spring',
    description: 'Annual celebratory symposium highlighting university history, honorary guest awards, and research expos.'
  },
  {
    id: 's27-4',
    title: 'Spring Mid-Semester Assessment Week',
    date: 'March 8 - 12, 2027',
    category: 'exams',
    semester: 'spring',
    description: 'Mid-term written tests, clinical assessments, and laboratory evaluations.'
  },
  {
    id: 's27-5',
    title: 'Good Friday & Easter Recess',
    date: 'April 9 - 13, 2027',
    category: 'holidays',
    semester: 'spring',
    description: 'Easter holiday recess. Lectures resume on April 14.'
  },
  {
    id: 's27-6',
    title: 'Spring Semester Final Examinations',
    date: 'May 10 - 14, 2027',
    category: 'exams',
    semester: 'spring',
    description: 'Semester-ending comprehensive examinations.'
  },
  {
    id: 's27-7',
    title: '15th Annual Convocation & Graduation Ceremony',
    date: 'May 22, 2027',
    category: 'academic',
    semester: 'spring',
    description: 'Commencement and conferral of degrees on all graduating classes at the Grand Assembly Field.'
  },

  // Summer Session 2027
  {
    id: 'su27-1',
    title: 'Summer Term Registration',
    date: 'June 1, 2027',
    category: 'admissions',
    semester: 'summer',
    description: 'Optional accelerated summer term enrolment opens for catch-up or early graduation streams.'
  },
  {
    id: 'su27-2',
    title: 'Commencement of Summer Lectures',
    date: 'June 7, 2027',
    category: 'academic',
    semester: 'summer',
    description: 'High-intensity lectures and lab projects begin.'
  },
  {
    id: 'su27-3',
    title: 'Summer Mid-Course Evaluations',
    date: 'July 5, 2027',
    category: 'exams',
    semester: 'summer',
    description: 'Mid-term check-in quizzes and research abstract defenses.'
  },
  {
    id: 'su27-4',
    title: 'End of Summer Term Presentations',
    date: 'July 30, 2027',
    category: 'academic',
    semester: 'summer',
    description: 'Capstone project exhibitions, oral presentations, and course wraps.'
  },
  {
    id: 'su27-5',
    title: 'Summer Term Final Exams',
    date: 'August 2 - 4, 2027',
    category: 'exams',
    semester: 'summer',
    description: 'Compulsory term exams. Transition phase before the next academic year begins.'
  }
];

