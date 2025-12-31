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
import { Users, Clock, Heart, Shield, Home, MessageCircle, CheckCircle, Star } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Users,
      title: "अनुभवी टीम",
      englishTitle: "Expert Team",
      description: "हमारे पास अनुभवी लोग हैं जो जमीन के सारे कानून और बाजार भाव अच्छे से जानते हैं।",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "तेज सेवा",
      englishTitle: "Quick Service",
      description: "कागजात और रजिस्ट्री का काम जल्दी होता है। समय की बचत, क्वालिटी में कोई कमी नहीं।",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Heart,
      title: "देसी समझ",
      englishTitle: "Local Understanding",
      description: "हम गाँव-शहर की बोली और रीति-रिवाज समझते हैं। आप अपने जैसा महसूस करेंगे।",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "100% कानूनी",
      englishTitle: "100% Legal",
      description: "सारा काम पूरी तरह कानूनी है। सरकारी दफ्तर से वेरिफाई करके ही आगे बढ़ते हैं।",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Home,
      title: "सही दाम",
      englishTitle: "Fair Pricing",
      description: "साफ-साफ और सही कीमत। कोई छुपा हुआ चार्ज नहीं, कोई सरप्राइज फीस नहीं।",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "24/7 मदद",
      englishTitle: "24/7 Support",
      description: "दिन-रात आपकी मदद के लिए तैयार। कभी भी फोन करें, हम जवाब देंगे।",
      color: "from-green-600 to-green-700"
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section - Eye Catching */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border-2 border-green-300">
              ⭐ क्यों चुनें हमें
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            हम <span className="text-green-600 relative">
              खास
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 -z-10 rounded"></div>
            </span> क्यों हैं?
          </h2>
          
          <p className="text-2xl md:text-3xl text-green-700 font-bold mb-4">
            Why Choose Property Sathi?
          </p>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            हम सिर्फ जमीन-मकान नहीं बेचते, हम आपके सपनों को पूरा करते हैं। 
            भरोसे और ईमानदारी के साथ।
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-20 h-1 bg-green-600 rounded-full"></div>
            <Star className="text-green-600 fill-green-600" size={24} />
            <div className="w-20 h-1 bg-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Features Grid - Beautiful Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-green-100 hover:border-green-400 transform hover:-translate-y-2"
            >
              {/* Corner Badge */}
              <div className="absolute -top-3 -right-3 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white">
                {index + 1}
              </div>
              
              {/* Icon with Gradient */}
              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <item.icon className="text-white" size={40} strokeWidth={2.5} />
              </div>
              
              {/* Title in Hindi */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                {item.title}
              </h3>
              
              {/* English Title */}
              <p className="text-lg text-green-600 font-bold mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="flex-shrink-0" />
                {item.englishTitle}
              </p>
              
              {/* Divider */}
              <div className="w-16 h-1 bg-green-200 group-hover:bg-green-500 rounded-full mb-4 transition-colors"></div>
              
              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed">
                {item.description}
              </p>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-green-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-10 shadow-2xl max-w-4xl mx-auto border-4 border-green-500">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              अब देर किस बात की? 🎉
            </h3>
            <p className="text-xl text-white mb-6">
              आज ही संपर्क करें और अपनी जमीन-मकान का काम शुरू करें!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210" 
                className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 border-4 border-green-300"
              >
                📞 फोन करें
              </a>
              <a 
                href="#contact" 
                className="border-4 border-white text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white hover:text-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                📝 संदेश भेजें
              </a>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-700 font-semibold">खुश ग्राहक</div>
            <div className="text-gray-500 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-700 font-semibold">साल अनुभव</div>
            <div className="text-gray-500 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-700 font-semibold">भरोसेमंद</div>
            <div className="text-gray-500 text-sm">Trusted</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-700 font-semibold">सेवा</div>
            <div className="text-gray-500 text-sm">Service</div>
          </div>
        </div>
        
      </div>
    </section>
  );
}