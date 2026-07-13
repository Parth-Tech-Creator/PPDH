/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Every string below is sample content standing in for the real thing.
 * Swap it for your own bio, projects, and links — nothing else in the app
 * needs to change; every component reads from this file.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: 'Parth',
  role: 'Robotics & AI Engineer',
  tagline: 'Engineering Intelligent Systems for the Future.',
  subtitleWords: [
    'Robotics',
    'Artificial Intelligence',
    'Computer Vision',
    'Machine Learning',
    'Full-Stack Development',
  ],
  bio: `I'm a Robotics & AI undergraduate passionate about building intelligent
systems that bridge software and the physical world. My interests span
computer vision, autonomous robotics, AI-powered applications, full-stack
development and simulation. Every project I build is another step toward
creating intelligent machines capable of solving real-world problems.`,
  location: 'Mohali, Punjab, India',
  availability: 'Open to Internships, Research Opportunities & Collaboration',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'universe', label: 'Universe' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const socials = {
  github: 'https://github.com/Parth-Tech-Creator',
  githubUsername: 'Parth-Tech-Creator',
  linkedin: 'https://www.linkedin.com/in/parth-2a4607349/',
  email: 'parth.321.06@gmail.com',
  resumeUrl: '/projects/Arbind_Resume.pdf',
};

/**
 * PROJECTS — rendered as planets in the ProjectsOrbit section.
 * `accent` drives the planet's glow / ring / satellite color.
 * `size` is a relative scale (1 = baseline).
 */
export const projects = [
  {
    id: 'policylens',
    name: 'PolicyLens',
    tagline: 'AI powered policy analysis platform',
    description:
      'An intelligent platform that simplifies complex government policies and documents using AI-powered summarization, semantic search and contextual explanations.',
    tech: [
      'React',
      'FastAPI',
      'Python',
      'LLMs',
      'RAG',
      'MongoDB'
    ],
    github: '',
    demo: '',
    accent: '#7c5cff',
    size: 1.15,
    orbitRadius: 170,
    orbitDuration: 36,
  },

  {
    id: 'horizon',
    name: 'Horizon',
    tagline: 'AI learning & exploration platform',
    description:
      'A platform designed to help students discover educational content, learn through AI-guided experiences and broaden their perspectives using personalized recommendations.',
    tech: [
      'React',
      'Node.js',
      'Firebase',
      'Python'
    ],
    github: '',
    demo: '',
    accent: '#2bd5ff',
    size: 1.05,
    orbitRadius: 250,
    orbitDuration: 52,
  },

  {
    id: 'drone',
    name: 'Autonomous Drone',
    tagline: 'Simulation driven intelligent drone',
    description:
      'A robotics project focused on autonomous drone navigation using ROS2, Gazebo, computer vision and AI for real-world applications.',
    tech: [
      'ROS2',
      'Gazebo',
      'Python',
      'OpenCV',
      'YOLO'
    ],
    github: '',
    demo: '',
    accent: '#4a8dff',
    size: 1.08,
    orbitRadius: 330,
    orbitDuration: 68,
  },

  {
    id: 'maga',
    name: 'MAGA',
    tagline: 'Multi-Agent Generative AI Platform',
    description:
      'An experimental multi-agent AI ecosystem where specialized agents collaborate to solve complex tasks using reasoning, planning and tool execution.',
    tech: [
      'Python',
      'LangChain',
      'LLMs',
      'FastAPI',
      'Docker'
    ],
    github: '',
    demo: '',
    accent: '#b58cff',
    size: 0.95,
    orbitRadius: 410,
    orbitDuration: 82,
  },

  {
    id: 'simpleworld',
    name: 'Simple World',
    tagline: 'Intelligent virtual ecosystem',
    description:
      'A simulated virtual environment where autonomous AI entities learn, interact and evolve through environmental feedback and intelligent decision making.',
    tech: [
      'Python',
      'Unity / Godot',
      'Machine Learning',
      'Simulation'
    ],
    github: '',
    demo: '',
    accent: '#78e7ff',
    size: 1.0,
    orbitRadius: 490,
    orbitDuration: 95,
  },
];

/**
 * TECH CONSTELLATION — each star is a technology; `links` are the ids of
 * other stars it should draw an energy line to.
 */
export const techStack = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Component-driven interfaces for every platform I ship.',
    magnitude: 1.1,
    links: ['fastapi', 'mongodb', 'aws'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Core',
    description: 'The connective tissue between research and production.',
    magnitude: 1.3,
    links: ['tensorflow', 'pytorch', 'opencv', 'ros', 'fastapi'],
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'ML',
    description: 'Production training and serving for vision models.',
    magnitude: 1.05,
    links: ['python', 'opencv'],
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'Computer Vision',
    description: 'Classical vision pipelines feeding every learned model.',
    magnitude: 0.95,
    links: ['python', 'ros', 'tensorflow'],
  },
  {
    id: 'ros',
    name: 'ROS',
    category: 'Robotics',
    description: 'Message-passing backbone for every robot I run.',
    magnitude: 1.0,
    links: ['python', 'opencv'],
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ML',
    description: 'Research-first model development and fast iteration.',
    magnitude: 1.1,
    links: ['python', 'fastapi'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Infra',
    description: 'Reproducible environments from laptop to edge device.',
    magnitude: 0.9,
    links: ['aws', 'fastapi', 'mongodb'],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Data',
    description: 'Flexible storage for telemetry and unstructured data.',
    magnitude: 0.85,
    links: ['react', 'docker'],
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Infra',
    description: 'Elastic infrastructure behind every deployed model.',
    magnitude: 1.0,
    links: ['docker', 'react', 'fastapi'],
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend',
    description: 'Low-latency serving layer between models and clients.',
    magnitude: 0.95,
    links: ['python', 'docker', 'aws', 'pytorch'],
  },
];

/**
 * MISSION TIMELINE — chronological log, oldest first. `current: true`
 * marks the most recent / active entry (rendered brightest).
 */
export const timeline = [
  {
    id: '01',
    date: '2024',
    title: 'Started B.Tech in Robotics & AI',
    description:
      'Began my journey into robotics, programming, artificial intelligence and autonomous systems.',
  },

  {
    id: '02',
    date: '2025',
    title: 'Explored Computer Vision',
    description:
      'Built projects involving face recognition, object detection and image processing while learning OpenCV and deep learning fundamentals.',
  },

  {
    id: '03',
    date: '2025',
    title: 'Full Stack & AI Development',
    description:
      'Started building complete AI-powered web applications integrating React, backend APIs and machine learning models.',
  },

  {
    id: '04',
    date: '2026',
    title: 'Building Intelligent Systems',
    description:
      'Started developing larger production-oriented projects focused on robotics, autonomous systems and intelligent applications.',
  },

  {
    id: '05',
    date: 'Future',
    title: 'Research & Robotics',
    description:
      'Working toward research in autonomous robotics, AI systems and real-world deployment while preparing for graduate studies.',
    current: true,
  },
];

export const about = {
  stats: [
    { label: 'Years Building', value: '4+' },
    { label: 'Projects Shipped', value: '18' },
    { label: 'Research Papers', value: '2' },
    { label: 'Robots Debugged', value: '∞' },
  ],
  experience: [
    {
      role: 'AI Engineer',
      org: 'Applied Robotics Lab',
      period: '2025 — Present',
      description:
        'Design and deploy perception models for autonomous field robots, from data pipeline to on-device inference.',
    },
    {
      role: 'Computer Vision Intern',
      org: 'Precision Manufacturing Co.',
      period: '2023 — 2024',
      description:
        'Built a defect-detection system that reduced manual QA inspection time by 33% across two production lines.',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Robotics & Artificial Intelligence',
      school: 'Chandigarh Engineering College, Jhanjeri',
      period: '2024 – Present',
    },
  ],
  researchInterests: [
    'Robotics',
    'Computer Vision',
    'Autonomous Systems',
    'Drone Navigation',
    'Human-Robot Interaction',
    'Machine Learning',
    'Artificial Intelligence',
    'ROS2',
    'Simulation',
    'Multi-Agent Systems',
  ],
};

export const spaceStation = {
  resume: {
    label: 'Resume',
    url: socials.resumeUrl,
  },
  certificates: [
    { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2024' },
    { name: 'AWS Certified Machine Learning', issuer: 'Amazon Web Services', year: '2025' },
  ],
  papers: [
    {
      title: 'Low-Cost Visual-Inertial SLAM for Indoor Micro-Drones',
      venue: 'Regional Robotics Workshop',
      year: '2024',
      url: '#',
    },
  ],
  achievements: [
    'Best Undergraduate Project — Robotics Dept. Showcase 2025',
    '1st Place, Campus Autonomous Navigation Challenge',
  ],
};
