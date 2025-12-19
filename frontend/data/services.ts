import { Brain, Database, Eye, TrendingUp, Lightbulb, Cpu, BarChart3 } from 'lucide-react';

export type Service = {
  icon: typeof Brain;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  slug: string;
  color: string;
};

export const services: Service[] = [
  {
    icon: Brain,
    title: 'AIMA',
    subtitle: 'Artificial Intelligence, Machine Learning & Agent',
    description:
      'AIMA harnesses Agentic AI, machine learning, and autonomous multi-agent systems to revolutionize Industry 4.0/5.0 operations with intelligent automation.',
    features: [
      'Adaptive Industrial Intelligence',
      'Autonomous Production Optimization',
      'Cognitive Multi-Agent Collaboration',
      'Intelligent Legacy Revitalization',
      'Predictive & Prescriptive Analytics',
      'Scalable AI Infrastructure',
    ],
    slug: 'artificial-intelligence-machine-learning-agent',
    color: 'from-primary to-secondary',
  },
  {
    icon: Database,
    title: 'AIDA',
    subtitle: 'Artificial Intelligence & Data Analysis',
    description:
      'We empower organizations with Agentic AI–driven data analytics that turn raw information into actionable intelligence for medical, enterprise, and SaaS platforms.',
    features: [
      'Context-Aware Data Agents',
      'Real-Time Data Processing',
      'Cognitive Pattern Recognition',
      'Adaptive Anomaly Intelligence',
      'Cross-Domain Data Integration',
      'Scalable Analytics Ecosystem',
    ],
    slug: 'artificial-intelligence-data-analysis',
    color: 'from-secondary to-teal-light',
  },
  {
    icon: Eye,
    title: 'VisionAI',
    subtitle: 'AI Solutions',
    description:
      'VisionAI pairs Agentic AI with multimodal understanding to deliver real-time visual automation that sees, interprets, and acts like a human operator.',
    features: [
      'Autonomous Visual Agents',
      'Multimodal Interaction',
      'Edge-Based Image Analytics',
      'Behavioral Pattern Detection',
      'Adaptive Object & Scene Understanding',
      'Vision-Driven Process Automation',
    ],
    slug: 'vision-ai',
    color: 'from-primary to-navy-light',
  },
  {
    icon: Lightbulb,
    title: 'CyTI',
    subtitle: 'Cyber Tech Innovation',
    description:
      'CyTI delivers Agentic AI-driven cybersecurity and IoT defenses that adapt, predict, and neutralize threats in real time for resilient Industry 4.0/5.0 ecosystems.',
    features: [
      'Autonomous Threat Response',
      'AI-Enhanced IoT Security',
      'Predictive Vulnerability Analysis',
      'Self-Healing Security Systems',
      'Quantum-Resilient Encryption',
      'Continuous Adaptive Risk Management',
    ],
    slug: 'cyber-tech-innovation',
    color: 'from-secondary to-primary',
  },
  {
    icon: Cpu,
    title: 'Cubebotics',
    subtitle: 'Embedded Systems & IoT',
    description:
      'Cubebotics equips enterprises with embedded systems, autonomous IoT ecosystems, and intelligent drones that self-optimize and orchestrate real-time operations.',
    features: [
      'Edge AI Processing',
      'Swarm-Enabled Drone Networks',
      'Context-Aware IoT Devices',
      'Autonomous M2M Communication',
      'Ultra-Low Power Embedded Design',
      'Predictive Maintenance Intelligence',
    ],
    slug: 'cubebotics',
    color: 'from-navy-light to-secondary',
  },
  {
    icon: TrendingUp,
    title: 'DCE',
    subtitle: 'Data & Cloud Engineering',
    description:
      'DCE delivers Agentic AI data engineering and intelligent cloud transformation with autonomous pipelines, self-optimizing infrastructure, and predictive orchestration.',
    features: [
      'Autonomous Data Pipelines',
      'Agentic Cloud Orchestration',
      'Serverless & Event-Driven Architecture',
      'Intelligent Data Governance',
      'Predictive Infrastructure Scaling',
      'Cross-Platform Cloud Interoperability',
    ],
    slug: 'data-cloud-engineering',
    color: 'from-secondary to-primary',
  },
  {
    icon: BarChart3,
    title: 'Tech Solution',
    subtitle: 'Future Technology & Services',
    description:
      'Tech Solution blends self-optimizing applications, autonomous experiences, and data-driven strategies to accelerate growth for Industry 4.0/5.0 enterprises.',
    features: [
      'Intelligent Web Platforms',
      'AI-Augmented Mobile Apps',
      'Autonomous Business Process Consulting',
      'Next-Gen Digital Experience Design',
      'Voice & Conversational Interfaces',
      'Data-Driven Marketing Automation',
      'API-First & Microservices Architecture',
      'Cloud-Native Enterprise Solutions',
    ],
    slug: 'tech-solution',
    color: 'from-primary to-secondary',
  },
];
