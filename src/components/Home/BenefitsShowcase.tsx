import React from 'react';
import { Users, Clock, Heart, ShieldCheck, Home, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DesiWhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "अनुभवी टीम",
      titleEn: "Expert Team",
      description: "हमारे पास स्थानीय बाज़ार की गहरी समझ रखने वाले अनुभवी लोग हैं।",
    },
    {
      icon: Clock,
      title: "तेज़ सेवा",
      titleEn: "Quick Process",
      description: "हम आपका समय बचाते हैं और कागज़ी काम फटाफट निपटाते हैं।",
    },
    {
      icon: ShieldCheck,
      title: "100% सुरक्षित",
      titleEn: "100% Secure",
      description: "पूरी पारदर्शिता के साथ कानूनी रूप से वैध लेन-देन।",
    },
    {
      icon: Home,
      title: "सही कीमत",
      titleEn: "Best Price",
      description: "बिना किसी छुपे हुए चार्ज के प्रॉपर्टी की सही कीमत पाएं।",
    },
    {
      icon: Heart,
      title: "भरोसेमंद साथी",
      titleEn: "Trusted Partner",
      description: "हम सिर्फ प्रॉपर्टी नहीं बेचते, रिश्ते बनाते हैं।",
    },
    {
      icon: MessageSquare,
      title: "24/7 सहायता",
      titleEn: "Full Support",
      description: "किसी भी सवाल या शंका के लिए हम हमेशा उपलब्ध हैं।",
    },
  ];

  const heroImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80";

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden font-sans border-t border-slate-800">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-800 rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            हमे ही क्यों चुनें?
          </h2>
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
            We bring trust, transparency, and expertise to every deal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {features.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-300"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition-colors" />
                </div>
                
                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 group-hover:text-slate-400">
                  {item.titleEn}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Image Card */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[40px] overflow-hidden border-8 border-slate-900 shadow-2xl group">
              
              {/* Image */}
              <div className="h-[600px] w-full relative">
                <img 
                  src={heroImage} 
                  alt="Trusted Property Dealer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 animate-pulse">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  आपका भरोसा,<br/>
                  <span className="text-emerald-400">हमारी जिम्मेदारी</span>
                </h3>
                <p className="text-slate-300 text-lg mb-6">
                  Your Trust, Our Responsibility.
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-bold text-white">15+</p>
                    <p className="text-xs text-emerald-400 uppercase font-bold">Years Exp.</p>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div>
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="text-xs text-emerald-400 uppercase font-bold">Happy Families</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 -bottom-10 -right-10 grid grid-cols-6 gap-2 opacity-30">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-emerald-500"></div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}