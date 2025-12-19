import { Mail, Instagram, Phone, Linkedin } from 'lucide-react';

const SocialMediaLinks = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/cubeaisolutions_tech?igsh=MThscnVzemdxODhjNQ==' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/cubeaisolutions-tech-pvt-ltd/' },
    { icon: Phone, label: 'Call', href: 'tel:+919486938781' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@cubeaisolutions.com' },
  ];

  return (
    <div className="fixed top-1/3 right-6 hidden lg:flex flex-col gap-3 z-20">
      {socialLinks.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-white/90 border border-gray-300 flex items-center justify-center text-gray-700 shadow-lg transition hover:-translate-y-1"
            aria-label={action.label}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
