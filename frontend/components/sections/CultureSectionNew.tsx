"use client";

import { Users, Sparkles, Heart } from 'lucide-react';

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

export default function CultureSectionNew() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-8">
                CubeAI Solutions' foundation rests upon the principles of collaboration. We nurture a diverse and cooperative culture, fueled by a genuine passion for nurturing business growth. Our resolute dedication lies in educating and working alongside our clients, equipping them with top-notch products and processes for sustained success.
              </p>

              <div className="space-y-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex gap-4 group">
                      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-1 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-200">
                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-200 rounded-full blur-xl" />
                
                <div className="relative text-center">
                  <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
                    <img
                      src="/assets/hero-logo.png"
                      alt="CubeAI Solutions logo"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Innovation Through Collaboration
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    We believe that the best AI solutions emerge from collaborative partnerships 
                    between our team and our clients.
                  </p>

                  <div className="flex justify-center gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">100+</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">70+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Collaborations</div>
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
}
