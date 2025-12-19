import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Database, Sparkles, Brain, BarChart3, Cpu, Factory, HeartPulse, ShieldCheck, ServerCog, Globe, Grid, Phone, Mail, MapPin, Search, Palette, Code, Rocket, Users, Heart, Award, Shield, Target, Zap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { products } from '@/data/products';
import '@/home2.css';

// ==================== HEADER COMPONENT ====================

// ==================== HERO SECTION ====================
const HeroSection = () => {
  const heroServices = [
    { icon: Brain, label: 'AI & ML Solutions', angle: 0 },
    { icon: Database, label: 'Data Analytics', angle: 45 },
    { icon: Bot, label: 'Computer Vision', angle: 90 },
    { icon: Sparkles, label: 'NLP Solutions', angle: 135 },
    { icon: BarChart3, label: 'Business Intelligence', angle: 180 },
    { icon: Cpu, label: 'AI Consulting', angle: 225 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroServices.length);
      setRotation((prev) => prev + 60);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden section-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 fade-up">
              <Sparkles size={16} />
              <span>AI-Powered Innovation</span>
            </div>

            <h1 className="section-title text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 fade-up stagger-1">
              AI Solutions That{' '}
              <span className="text-gradient">Transform</span>{' '}
              Businesses
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 fade-up stagger-2">
              CubeAI Solutions empowers organizations with intelligent AI, data-driven insights, and scalable digital solutions to drive growth and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up stagger-3">
              <Button asChild className="btn-primary rounded-full text-base px-8 py-6">
                <a href="#about">
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-secondary rounded-full text-base px-8 py-6">
                <Link to="/contact">Connect Now</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-card rounded-full shadow-xl flex flex-col items-center justify-center border border-border/50 pulse-glow p-4">
                  <img
                    src="/cube-ai-logo.ico"
                    alt="CubeAI Solutions logo"
                    className="w-10 h-10 md:w-20 md:h-20 object-contain mb-2"
                  />
                  <span className="font-heading font-bold text-sm text-foreground">CubeAI</span>
                  <span className="text-xs text-muted-foreground">Solutions</span>
                </div>
              </div>

              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-out"
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/20" />
                
                {heroServices.map((service, index) => {
                  const Icon = service.icon;
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transition-all duration-500"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`,
                      }}
                    >
                      <div
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-card shadow-lg scale-110 border border-secondary/50'
                            : 'bg-card/80 scale-90 opacity-60'
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-br from-primary to-secondary'
                              : 'bg-secondary/10'
                          }`}
                        >
                          <Icon
                            size={24}
                            className={isActive ? 'text-primary-foreground' : 'text-secondary'}
                          />
                        </div>
                        <span
                          className={`text-xs font-medium text-center whitespace-nowrap ${
                            isActive ? 'text-foreground' : 'text-muted-foreground'
                          }`}
                        >
                          {service.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT SECTION ====================
const AboutSection = () => {
  const features = [
    {
      icon: Database,
      title: 'Comprehensive AI Portfolio',
      description: 'Our service portfolio encompasses a wide range of AI capabilities designed to support customers across various sectors and business functions.',
    },
    {
      icon: Sparkles,
      title: 'Data-Driven Innovation',
      description: 'A foundation of well-governed, timely, and trusted data is essential for activating cutting-edge use cases like Generative AI and advanced analytics.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'We partner with technology leaders and employ a team of experienced AI engineers and data scientists to craft next-generation enterprise solutions.',
    },
    {
      icon: Brain,
      title: 'AI Engineering Excellence',
      description: 'We specialize in both research and implementation, delivering top-notch AI engineering solutions for our customers and their stakeholders.',
    },
    {
      icon: Rocket,
      title: 'Future-Focused Solutions',
      description: 'Through our consulting and implementation services, we assist organizations in developing innovative AI solutions that drive business transformation.',
    },
  ];

  const serviceAreas = [
    { icon: Database, label: 'Data Services' },
    { icon: Brain, label: 'Artificial Intelligence Solutions' },
    { icon: Users, label: 'Microsoft Consulting Practice' },
    { icon: Sparkles, label: 'Salesforce Consulting Practice' },
    { icon: Rocket, label: 'Product Engineering' },
    { icon: Database, label: 'Startup Solutions' },
    { icon: Brain, label: 'Staffing Solutions' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full max-w-[480px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
              <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 md:border-4 border-primary/20 bg-gradient-to-tr from-background via-muted/30 to-background shadow-inner mx-auto flex-shrink-0">
                <div className="absolute inset-0 m-6 md:m-10 border-2 border-secondary/30 rounded-full" />
                <div className="absolute inset-0 m-10 md:m-14 border-2 border-primary/30 rounded-full" />
                <div className="absolute inset-0 m-16 md:m-24 border-2 border-primary/70 rounded-full" />
                <div className="flex items-center justify-center h-full">
                  <div className="w-24 md:w-40 h-24 md:h-40 flex items-center justify-center relative z-10">
                    <img
                      src="/cube-ai-logo.ico"
                      alt="CubeAI logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:gap-5 md:ml-0 lg:ml-12 w-full md:w-auto">
                {serviceAreas.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="service-link">
                      <div className="service-bubble">
                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-foreground line-clamp-2">{service.label}</span>
                      </div>
                      <span className="connector-tail hidden md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            <h2 className="section-title mb-2 text-2xl md:text-4xl">About CubeAI Solutions</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              CubeAI Solutions is a technology-driven company specializing in artificial intelligence, machine learning, and data analytics. We help businesses unlock the power of data through intelligent automation, predictive analytics, and custom AI solutions tailored to real-world challenges.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="feature-check">
                  <div className="feature-check-icon">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SERVICES SECTION ====================
const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <p className="text-sm uppercase tracking-[0.5em] text-secondary">Our Services</p>
          <h2 className="section-title">AI-Powered Business Solutions</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Comprehensive AI-powered services designed to transform your business and drive innovation across industries. Built on a foundation of Agentic AI, IoT, and cloud engineering, we deliver future-ready automation that scales.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Explore our AI products and learn about the state of AI in business as we guide organizations through machine learning, data analytics, cybersecurity, IoT, and cloud transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service: any, index: number) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`service-icon bg-gradient-to-br ${service.color} bg-opacity-10`}>
                  <Icon size={32} className="text-secondary" />
                </div>

                <div className="flex flex-col gap-1 mb-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{service.title}</span>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.subtitle}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted-foreground">
                  {service.features.map((feature: string) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-secondary font-semibold text-sm hover:text-primary transition-colors group"
                  >
                    Get Details
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

// ==================== PROJECTS SECTION ====================
const ProjectsSection = () => {
  const statHighlights = [
    { value: '70+', label: 'Projects', detail: 'Delivered across manufacturing, finance, healthcare, and logistics.' },
    { value: '40+', label: 'Happy Clients', detail: 'Partners who rely on CubeAI for AI transformation.' },
    { value: '50+', label: 'Collaborations', detail: 'Cross-industry programs blending AI, cloud, and automation.' },
    { value: '150+', label: 'AI Product Solution', detail: 'Purpose-built tools streamlining CRM, ERP, and HRM workflows.' },
  ];

  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description:
        'AI-driven automation, predictive maintenance, and digital twins that maximize throughput and reliability.',
      slug: 'manufacturing',
    },
    {
      icon: ShieldCheck,
      title: 'Finance',
      description:
        'Transparent risk insights, fraud detection, and compliance automation powered by responsible AI practices.',
      slug: 'finance',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare & Life Sciences',
      description:
        'Medical data analytics, AI diagnostics, and patient experience orchestration that respect privacy and ethics.',
      slug: 'healthcare',
    },
    {
      icon: Globe,
      title: 'Logistics & Telecom',
      description:
        'Intelligent routing, performance monitoring, and IoT-enabled visibility for distributed operations.',
      slug: 'telecom',
    },
    {
      icon: ServerCog,
      title: 'Human Resources',
      description:
        'AI assistants that streamline talent acquisition, onboarding, and HR operations across global teams.',
      slug: 'hr',
    },
    {
      icon: Grid,
      title: 'Industry Automation',
      description:
        'Integrated AI, cloud, and embedded systems orchestration that turns data into action in real time.',
      slug: 'automation',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-secondary tracking-[0.3em] mb-3">Projects</p>
          <h2 className="section-title">Real-world impact across industries</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            70+ successful AI engagements across manufacturing, finance, healthcare, and logistics. Our teams combine AI,
            IoT, cloud, and automation to deliver measurable ROI for every partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 relative z-10">
          {statHighlights.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/70 border border-border/50 p-6 rounded-3xl flex flex-col gap-3 shadow-lg"
            >
              <span className="text-3xl font-bold text-primary font-heading">{stat.value}</span>
              <h3 className="text-lg font-semibold text-foreground">{stat.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article
                key={industry.title}
                className="bg-gradient-to-br from-secondary/10 to-background border border-secondary/20 rounded-3xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
                <Link
                  to={`/industry/${industry.slug}`}
                  className="text-secondary text-sm font-semibold hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  Explore {industry.title}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

// ==================== PRODUCTS SECTION ====================
const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-muted/50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-secondary">Our Products</p>
            <h2 className="section-title">AI-Powered Enterprise Products</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Discover our suite of AI-powered solutions designed to streamline operations, enhance customer relationships,
              and accelerate digital transformation with cutting-edge intelligence and automation.
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Explore our business transformation tools – from CRM and ERP enrichment to orchestrated workflows and
              customer data management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: any) => (
              <article
                key={product.slug}
                className="bg-background/90 border border-border/60 rounded-3xl p-6 flex flex-col gap-4 shadow-xl"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== WHY CHOOSE US SECTION ====================
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Industry-Focused AI Expertise',
      description: 'Deep domain knowledge across multiple industries with proven AI implementation experience.',
    },
    {
      icon: Shield,
      title: 'Scalable & Secure Architectures',
      description: 'Enterprise-grade AI solutions built with security and scalability at the core.',
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored AI solutions designed specifically for your unique business challenges.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced AI engineers, data scientists, and consultants with proven track records.',
    },
    {
      icon: Zap,
      title: 'Innovation & Quality',
      description: 'Committed to delivering cutting-edge AI solutions with uncompromising quality standards.',
    },
  ];

  const stats = [
    { value: '500+', label: 'AI Models Deployed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '15+', label: 'Industries Served' },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-primary-foreground">
            Why Choose CubeAI Solutions
          </h2>
          <p className="section-subtitle text-primary-foreground/70">
            Partner with industry leaders in AI transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

// ==================== APPROACH SECTION ====================
const ApproachSection = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery',
      description:
        'We analyze your business needs and identify opportunities for AI integration with comprehensive assessments.',
    },
    {
      icon: Palette,
      number: '02',
      title: 'Strategy',
      description:
        'We develop a comprehensive AI strategy tailored to your specific business requirements and objectives.',
    },
    {
      icon: Code,
      number: '03',
      title: 'Development',
      description: 'Our expert team builds and implements cutting-edge AI solutions using the latest technologies.',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Optimization',
      description:
        'We continuously monitor and optimize every engagement to maximize impact and deliver sustainable results.',
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <p className="text-sm uppercase tracking-[0.5em] text-secondary">Process</p>
          <h2 className="section-title">Our AI Solution Development Process</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            How we deliver exceptional AI solutions with proven methodologies.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-secondary/20 via-secondary/50 to-secondary/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step group mx-auto text-center">
                  <div className="relative flex justify-center mb-4">
                    <div className="process-step-number group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon size={24} className="text-secondary-foreground" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <div className="absolute -inset-4 rounded-2xl bg-card opacity-0 group-hover:opacity-100 -z-10 transition-all duration-300 shadow-lg" />
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

// ==================== TECHNOLOGIES SECTION ====================
const TechnologiesSection = () => {
  const technologies = [
    'Python',
    'TensorFlow',
    'PyTorch',
    'OpenCV',
    'NLP',
    'Scikit-Learn',
    'AWS',
    'Azure',
    'Google Cloud',
    'Big Data',
    'Spark',
    'Power BI',
    'Tableau',
    'Docker',
    'Kubernetes',
    'React',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'FastAPI',
  ];

  return (
    <section id="technologies" className="py-20 md:py-32 relative overflow-hidden section-gradient">
      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Technologies We Use</h2>
          <p className="section-subtitle">
            Leveraging cutting-edge technologies to build powerful AI solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-badge"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We continuously evaluate and adopt the latest technologies to ensure our clients 
            receive the most innovative and effective AI solutions available.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

// ==================== CULTURE SECTION ====================
const CultureSection = () => {
  const values = [
    {
      icon: Users,
      title: 'People First',
      description: 'Our team comprises dedicated experts who are deeply committed to providing value and ensuring customer satisfaction. We prioritize taking care of our team, and our team takes care of our customers.',
    },
    {
      icon: Sparkles,
      title: 'Engaging Work',
      description: 'We foster an environment where projects are infused with energy, creativity, and engagement, ensuring that every team member finds their work interesting and motivating.',
    },
    {
      icon: Heart,
      title: 'Relationships Beyond Projects',
      description: 'Building connections with clients, partners, and stakeholders that extend beyond mere transactions, focusing on fostering genuine, long-lasting relationships based on trust and collaboration.',
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="section-title mb-6">Our Culture</h2>
            <p className="text-lg text-muted-foreground mb-8">
              CubeAI Solutions' foundation rests upon the principles of collaboration. We nurture a diverse and cooperative culture, fueled by a genuine passion for nurturing business growth. Our resolute dedication lies in educating and working alongside our clients, equipping them with top-notch products and processes for sustained success.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                      <Icon size={24} className="text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 font-heading">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
              <div className="absolute top-4 right-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
              
              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src="/cube-ai-logo.ico"
                    alt="CubeAI Solutions logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                  Innovation Through Collaboration
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  We believe that the best AI solutions emerge from collaborative partnerships 
                  between our team and our clients.
                </p>

                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary font-heading">100+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary font-heading">70+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary font-heading">50+</div>
                    <div className="text-sm text-muted-foreground">Collaborations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION ====================
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-primary-foreground text-4xl md:text-5xl mb-6">
            Let's Build Intelligent Solutions Together
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Partner with CubeAI Solutions to accelerate innovation and achieve smarter business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="mailto:contact@cubeaisolutions.com">
                <Mail className="mr-2" size={20} />
                Contact Us
              </a>
            </Button>
            <Button
              asChild
              className="bg-cyan-400 text-slate-900 rounded-full px-8 py-6 text-lg font-medium shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-cyan-300"
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Mail size={24} className="text-secondary" />
              </div>
              <h4 className="text-primary-foreground font-semibold mb-1">Email</h4>
              <a href="mailto:cubeaisolutions@gmail.com" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                cubeaisolutions@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <Phone size={24} className="text-secondary" />
              </div>
              <h4 className="text-primary-foreground font-semibold mb-1">Phone</h4>
              <a href="tel:+919486938781" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                +91 94869 38781
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-secondary" />
              </div>
              <h4 className="text-primary-foreground font-semibold mb-1">Location</h4>
              <span className="text-primary-foreground/70 text-center">
                CubeAISolutions Tech Pvt Ltd
                <br />
                Shri Anathanager, Bangalore - 560100
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN HOME PAGE ====================
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <ApproachSection />
        <TechnologiesSection />
        <CultureSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
