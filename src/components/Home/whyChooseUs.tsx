// import { Users, Clock, Heart, Shield, Home, MessageCircle } from "lucide-react";

// export default function WhyChooseUsSection() {
//   const features = [
//     {
//       icon: Users,
//       title: "Expert Team",
//       description: "Experienced professionals with deep knowledge of local property laws and market conditions.",
//     },
//     {
//       icon: Clock,
//       title: "Quick Service",
//       description: "Fast processing of documents and property transactions without compromising on quality.",
//     },
//     {
//       icon: Heart,
//       title: "Local Understanding",
//       description: "Deep understanding of local culture and customs, making rural clients feel comfortable.",
//     },
//     {
//       icon: Shield,
//       title: "100% Legal",
//       description: "All transactions are completely legal and verified through proper government channels.",
//     },
//     {
//       icon: Home,
//       title: "Fair Pricing",
//       description: "Transparent and competitive pricing with no hidden charges or surprise fees.",
//     },
//     {
//       icon: MessageCircle,
//       title: "24/7 Support",
//       description: "Round-the-clock customer support for all your property-related queries and concerns.",
//     },
//   ];

//   return (
//     <section id="why-choose-us" className="py-20 bg-slate-900 from-[#fefdf9] to-[#fef7f0]">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Why Choose Property Sathi?
//           </h2>
//           <p className="text-xl text-[#b54035] mb-2 font-semibold">
//             प्रॉपर्टी साथी क्यों चुनें?
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fdeee0]"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <item.icon className="text-white" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// 
import { Users, Clock, Heart, Shield, Home, MessageCircle } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Users,
      title: "अनुभवी टीम",
      englishTitle: "Expert Team",
      description: "हमारी टीम में अनुभवी लोग हैं जो प्रॉपर्टी के कानून और यहाँ की बाज़ार को अच्छे से जानते हैं।",
    },
    {
      icon: Clock,
      title: "जल्दी काम",
      englishTitle: "Quick Service",
      description: "आपके सभी कागज़ात और प्रॉपर्टी के काम जल्दी और सही तरीके से पूरे होते हैं।",
    },
    {
      icon: Heart,
      title: "स्थानीय समझ",
      englishTitle: "Local Understanding",
      description: "हम यहाँ की संस्कृति और रीति-रिवाज़ को समझते हैं, इसलिए गाँव के लोग भी आराम से काम करा सकते हैं।",
    },
    {
      icon: Shield,
      title: "100% कानूनी",
      englishTitle: "100% Legal",
      description: "सभी लेन-देन पूरी तरह कानूनी हैं और सरकारी दफ्तर से सही तरीके से जाँचे जाते हैं।",
    },
    {
      icon: Home,
      title: "उचित दाम",
      englishTitle: "Fair Pricing",
      description: "सभी खर्चे साफ़-साफ़ बताए जाते हैं। कोई छिपा हुआ खर्चा या अचानक से पैसे नहीं माँगे जाते।",
    },
    {
      icon: MessageCircle,
      title: "24/7 मदद",
      englishTitle: "24/7 Support",
      description: "प्रॉपर्टी से जुड़े किसी भी सवाल या परेशानी के लिए हम हमेशा आपकी मदद के लिए तैयार हैं।",
    },
  ];

  return (
    <section 
      id="why-choose-us" 
      className="py-20"
      style={{ 
        backgroundImage: 'linear-gradient(to bottom right, #f7f7f7, #fff5f5)' 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4"
            style={{ 
              backgroundColor: 'rgba(204, 63, 63, 0.1)',
              borderColor: 'rgba(204, 63, 63, 0.2)'
            }}
          >
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: '#cc3f3f' }}
            />
            <span 
              className="text-xs md:text-sm font-bold uppercase tracking-wider"
              style={{ color: '#cc3f3f' }}
            >
              हमें क्यों चुनें
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
            प्रॉपर्टी साथी <span style={{ color: '#cc3f3f' }}>क्यों चुनें?</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Why Choose Property Sathi?
          </p>
          <div 
            className="w-24 h-1 mx-auto rounded-full mt-4"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #cc3f3f, #b33636)' 
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group"
              style={{ borderColor: '#f3f4f6' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(204, 63, 63, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f3f4f6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ 
                  backgroundImage: 'linear-gradient(to bottom right, #cc3f3f, #b33636)',
                  boxShadow: '0 10px 15px -3px rgba(204, 63, 63, 0.3)'
                }}
              >
                <item.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3 font-medium">
                {item.englishTitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg font-medium mb-4">
            हम आपके सपनों के घर को सच करने में मदद करते हैं
          </p>
          <p className="text-gray-600 text-base">
            We help make your dream home come true
          </p>
        </div> */}
      </div>
    </section>
  );
}