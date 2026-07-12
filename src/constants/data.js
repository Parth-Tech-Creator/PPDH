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
  name: 'Alex Rivera',
  role: 'Robotics & AI Engineer',
  tagline: 'I Build Intelligent Systems.',
  subtitleWords: [
    'Robotics',
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Full-Stack Development',
  ],
  bio: `Systems engineer working at the intersection of perception and
    autonomy — training models that see, robots that move, and the
    full-stack platforms that put both in someone's hands.`,
  location: 'San Francisco, CA',
  availability: 'Open to research & engineering roles',
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
  github: 'https://github.com/your-handle',
  githubUsername: 'your-handle', // used to pull live stats on the Space Station
  linkedin: 'https://linkedin.com/in/your-handle',
  email: 'hello@example.com',
  resumeUrl: '/resume.pdf',
};

/**
 * PROJECTS — rendered as planets in the ProjectsOrbit section.
 * `accent` drives the planet's glow / ring / satellite color.
 * `size` is a relative scale (1 = baseline).
 */
export const projects = [
  {
    id: 'vision-nav',
    name: 'VisionNav',
    tagline: 'Monocular SLAM for warehouse drones',
    description:
      'A real-time visual-inertial SLAM stack that lets low-cost drones navigate GPS-denied warehouses using a single camera and an IMU, cutting mapping hardware cost by 80%.',
    tech: ['Python', 'OpenCV', 'ROS', 'PyTorch'],
    github: 'https://github.com/your-handle/vision-nav',
    demo: 'https://example.com/vision-nav',
    accent: '#8b5cf6',
    size: 1.15,
    orbitRadius: 165,
    orbitDuration: 34,
  },
  {
    id: 'gesture-arm',
    name: 'GestureArm',
    tagline: '6-DOF robotic arm, gesture-controlled',
    description:
      'A teleoperation pipeline that maps a operator\'s hand pose — tracked with a depth camera and a lightweight CNN — onto a 6-degree-of-freedom robotic arm in under 40ms of latency.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'ROS'],
    github: 'https://github.com/your-handle/gesture-arm',
    demo: 'https://example.com/gesture-arm',
    accent: '#22d3ee',
    size: 0.95,
    orbitRadius: 240,
    orbitDuration: 48,
  },
  {
    id: 'orbit-api',
    name: 'Orbit API',
    tagline: 'ML inference platform for edge devices',
    description:
      'A FastAPI-based model-serving layer with automatic quantization and batching, built to run vision models on Jetson-class edge hardware at sub-100ms latency.',
    tech: ['FastAPI', 'Docker', 'AWS', 'PyTorch'],
    github: 'https://github.com/your-handle/orbit-api',
    demo: 'https://example.com/orbit-api',
    accent: '#4f7cff',
    size: 1.05,
    orbitRadius: 315,
    orbitDuration: 62,
  },
  {
    id: 'swarm-sim',
    name: 'SwarmSim',
    tagline: 'Multi-agent reinforcement learning sandbox',
    description:
      'A browser-based simulator for training and visualizing swarms of reinforcement-learning agents cooperating on search-and-rescue tasks, with live reward-shaping controls.',
    tech: ['React', 'Python', 'PyTorch', 'MongoDB'],
    github: 'https://github.com/your-handle/swarm-sim',
    demo: 'https://example.com/swarm-sim',
    accent: '#a78bfa',
    size: 0.9,
    orbitRadius: 390,
    orbitDuration: 76,
  },
  {
    id: 'sentry-cv',
    name: 'SentryCV',
    tagline: 'On-device anomaly detection for CCTV',
    description:
      'A self-supervised anomaly detection model that runs entirely on-camera, flagging unusual activity without ever streaming raw video off-device — built for privacy-sensitive deployments.',
    tech: ['TensorFlow', 'OpenCV', 'Docker'],
    github: 'https://github.com/your-handle/sentry-cv',
    demo: 'https://example.com/sentry-cv',
    accent: '#67e8f9',
    size: 1.0,
    orbitRadius: 460,
    orbitDuration: 92,
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
    id: 'log-01',
    date: '2022',
    title: 'Started B.S. in Robotics Engineering',
    description:
      'Began formal study in kinematics, controls, and embedded systems while building small autonomous rovers on the side.',
  },
  {
    id: 'log-02',
    date: '2023',
    title: 'First computer vision internship',
    description:
      'Shipped a defect-detection model to a manufacturing line, cutting manual inspection time by a third.',
  },
  {
    id: 'log-03',
    date: '2024',
    title: 'Published SLAM research',
    description:
      'Co-authored a paper on low-cost visual-inertial SLAM for indoor drones, presented at a regional robotics workshop.',
  },
  {
    id: 'log-04',
    date: '2025',
    title: 'Built GestureArm',
    description:
      'Designed and shipped a real-time gesture-teleoperation pipeline for a 6-DOF robotic arm.',
  },
  {
    id: 'log-05',
    date: '2025',
    title: 'Joined an applied-AI research team',
    description:
      'Moved from side projects to production, deploying edge inference models at scale.',
  },
  {
    id: 'log-06',
    date: '2026',
    title: 'Launched Orbit API',
    description:
      'Released an open-source model-serving layer purpose-built for edge hardware.',
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
      degree: 'B.S. Robotics Engineering',
      school: 'State Institute of Technology',
      period: '2022 — 2026',
    },
  ],
  researchInterests: [
    'Visual-Inertial SLAM',
    'Sim-to-Real Transfer',
    'Multi-Agent RL',
    'Edge Model Compression',
    'Human-Robot Interaction',
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
