export type Product = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  slug: string;
};

export const products: Product[] = [
  {
    title: 'iSpeak AI Voice Agent',
    subtitle: 'AI voice orchestration for CRM, ERP, and contact centers',
    description:
      'Lightning Voice AI delivers real-time voice orchestration across ERP and CRM workflows. Electron Intelligence SLMs understand intent, trigger enterprise stack updates, and keep interactions secured to SOC 2, HIPAA, and PCI standards.',
    features: [
      'Real-time bi-directional voice orchestration',
      'Lightning-grade text-to-speech with human-like latency',
      'Native telephony, CRM, and ERP integrations',
      'Electron SLM intent comprehension and routing',
      'Enterprise compliance: SOC 2 Type II, HIPAA, PCI',
      '16-language multilingual voice library',
    ],
    slug: 'ispeak-voice-agent',
  },
  {
    title: 'Andromeda CRM',
    subtitle: 'Agentic AI customer relationship management',
    description:
      'Andromeda CRM autonomously manages customer interactions with generative AI, predictive intelligence, and automation, delivering actionable insights, smart engagement, and faster decision-making in real time.',
    features: [
      'Intelligent Lead Prioritization',
      'Adaptive Customer Journeys',
      'Smart Interaction Summaries',
      'Autonomous Data Enrichment',
      'Sentiment & Engagement Analysis',
      'Proactive Sales Coaching',
      'Multi-Channel Integration',
    ],
    slug: 'andromeda-crm',
  },
  {
    title: 'Orion ERP',
    subtitle: 'Self-optimizing ERP with enterprise AI solutions',
    description:
      'Orion ERP transforms finance, operations, HR, and supply chain into an AI-powered ecosystem where every workflow self-optimizes through generative AI, automation, and predictive intelligence.',
    features: [
      'Adaptive Process Intelligence',
      'Predictive Resource Management',
      'AI-Driven Decision Support',
      'Hyper-Scalable Infrastructure',
      'Unified Data Ecosystem',
    ],
    slug: 'orion-erp',
  },
  {
    title: 'Nebula CDM',
    subtitle: 'Agentic AI customer data management',
    description:
      'Nebula CDM collects, cleans, and analyzes customer data across channels with Agentic AI, turning scattered datasets into a single knowledge hub that drives compliance and productivity.',
    features: [
      'Autonomous Data Orchestration',
      'Context-Aware Data Enrichment',
      'Intelligent Data Governance',
      'Seamless Cross-Platform Connectivity',
      'Real-Time Insight Generation',
    ],
    slug: 'nebula-cdm',
  },
  {
    title: 'Cosmos Orchestration',
    subtitle: 'Agentic orchestration for enterprise workflows',
    description:
      'Cosmos Orchestration autonomously designs, optimizes, and synchronizes end-to-end workflows so systems, applications, and teams stay in sync for maximum efficiency and agility.',
    features: [
      'Autonomous Workflow Design',
      'Intelligent Process Optimization',
      'Context-Aware Event Handling',
      'Unified Orchestration Hub',
      'Scalable Multi-Environment Sync',
    ],
    slug: 'cosmos-orchestration',
  },
];
