import { Users, Clock, Heart, Shield, Home, MessageCircle } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      hindiTitle: "विशेषज्ञ टीम",
      description: "Experienced professionals with deep knowledge of local property laws and market conditions.",
    },
    {
      icon: Clock,
      title: "Quick Service",
      hindiTitle: "तेज़ सेवा",
      description: "Fast processing of documents and property transactions without compromising on quality.",
    },
    {
      icon: Heart,
      title: "Local Understanding",
      hindiTitle: "स्थानीय समझ",
      description: "Deep understanding of local culture and customs, making rural clients feel comfortable.",
    },
    {
      icon: Shield,
      title: "100% Legal",
      hindiTitle: "पूर्णतः कानूनी",
      description: "All transactions are completely legal and verified through proper government channels.",
    },
    {
      icon: Home,
      title: "Fair Pricing",
      hindiTitle: "उचित मूल्य",
      description: "Transparent and competitive pricing with no hidden charges or surprise fees.",
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      hindiTitle: "24/7 सहायता",
      description: "Round-the-clock customer support for all your property-related queries and concerns.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Property Sathi?
          </h2>
          <p className="text-xl text-[#b54035] mb-2 font-semibold">
            प्रॉपर्टी साथी क्यों चुनें?
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const iconColors = [
              "from-[#e8734a] to-[#cc3f3f]",
              "from-[#e15e5e] to-[#d9543f]",
              "from-[#e8734a] to-[#b54035]",
              "from-[#cc3f3f] to-[#a73232]",
              "from-[#d9543f] to-[#b54035]",
              "from-[#e15e5e] to-[#cc3f3f]",
            ];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#fdeee0] hover:border-[#e8734a]/30 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${iconColors[index]} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-[#b54035] mb-3 font-semibold">
                  {item.hindiTitle}
                </p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}