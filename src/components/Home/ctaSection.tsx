// import React from "react";
// import { Check, ArrowRight } from "lucide-react";

// export default function SellPropertySection() {
//   const benefits = [
//     { title: "मुफ्त में लिस्ट करें", sub: "List for Free" },
//     { title: "हजारों खरीदार", sub: "Thousands of Buyers" },
//     { title: "जल्दी बिक्री", sub: "Quick Sale" },
//   ];

//   return (
//   <section
//   id="sell-property"
//   className="py-16 bg-[#F0FFFF] font-sans border-y-4 border-white"
// >
//       <div className="container mx-auto px-4">
        
//         {/* Main Box - Sturdy & Trusted Look */}
//         <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden  ">
//           <div className="grid grid-cols-1 md:grid-cols-2">

//             {/* Left Side - Content */}
//             <div className="p-8 md:p-12 flex flex-col justify-center">
              
//               <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold w-fit mb-4 border border-green-300">
//                 बेचना आसान है
//               </div>

//               <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 leading-tight">
//                 अपनी संपत्ति बेचना चाहते हैं?
//               </h2>
//               <p className="text-lg text-green-700 mb-8 font-medium">
//                 Want to Sell Your Property?
//               </p>

//               {/* Benefits List - Simple Boxes */}
//               <div className="space-y-5 mb-10">
//                 {benefits.map((item, i) => (
//                   <div key={i} className="flex items-center bg-[#f9fdf9] p-4 rounded-lg border border-green-200 shadow-sm hover:border-green-500 transition-colors">
//                     <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white shadow-md">
//                       <Check size={22} strokeWidth={3} />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-lg text-black">{item.title}</h4>
//                       <p className="text-sm text-gray-600 font-medium">{item.sub}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Button - Bold Black & Green */}
//               <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:w-auto border-b-4 border-green-600">
//                 <div className="text-left">
//                   <div className="leading-none text-xl">अभी लिस्ट करें</div>
//                   <div className="text-xs font-normal text-green-400 mt-1">List Property Now</div>
//                 </div>
//                 <ArrowRight size={24} className="text-green-400" />
//               </button>
//             </div>

//             {/* Right Side - Image */}
//             <div className="h-full min-h-[300px] relative border-l-0 md:">
//               <img
//                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0846eb0d0f-69e42afefb978fae2f2c.png"
//                 alt="Happy Indian family selling property"
//                 className="w-full h-full object-cover"
//               />
//               {/* Green Tint Overlay */}
//               <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { Check, ArrowRight } from "lucide-react";

// export default function SellPropertySection() {
//   const benefits = [
//     { title: "मुफ्त में लिस्ट करें", sub: "List for Free" },
//     { title: "हजारों खरीदार", sub: "Thousands of Buyers" },
//     { title: "जल्दी बिक्री", sub: "Quick Sale" },
//   ];

//   return (
//     <section
//       id="sell-property"
//       className="py-12 sm:py-16 font-sans border-y-4 border-white"
//       style={{ backgroundColor: '#fdf2f2' }}
//     >
//       <div className="container mx-auto px-4">
        
//         {/* Main Box */}
//         <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2">

//             {/* Left Side - Content */}
//             <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              
//               <div 
//                 className="inline-block px-4 py-1 rounded-full text-sm font-bold w-fit mb-4 border"
//                 style={{ 
//                   backgroundColor: 'rgba(204, 63, 63, 0.1)',
//                   color: '#cc3f3f',
//                   borderColor: 'rgba(204, 63, 63, 0.3)'
//                 }}
//               >
//                 बेचना आसान है
//               </div>

//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 leading-tight">
//                 अपनी संपत्ति बेचना चाहते हैं?
//               </h2>
//               <p className="text-base sm:text-lg mb-6 sm:mb-8 font-medium" style={{ color: '#cc3f3f' }}>
//                 Want to Sell Your Property?
//               </p>

//               {/* Benefits List */}
//               <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
//                 {benefits.map((item, i) => (
//                   <div 
//                     key={i} 
//                     className="flex items-center p-3 sm:p-4 rounded-lg border shadow-sm hover:border-red-400 transition-colors"
//                     style={{ 
//                       backgroundColor: '#fff5f5',
//                       borderColor: 'rgba(204, 63, 63, 0.2)'
//                     }}
//                   >
//                     <div 
//                       className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-white shadow-md"
//                       style={{ backgroundColor: '#cc3f3f' }}
//                     >
//                       <Check size={20} strokeWidth={3} className="sm:w-[22px] sm:h-[22px]" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-base sm:text-lg text-black">{item.title}</h4>
//                       <p className="text-xs sm:text-sm text-gray-600 font-medium">{item.sub}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Button */}
//               <button 
//                 className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:w-auto border-b-4"
//                 style={{ 
//                   backgroundColor: '#cc3f3f',
//                   borderBottomColor: '#a03333'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = '#b33939';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = '#cc3f3f';
//                 }}
//               >
//                 <div className="text-left">
//                   <div className="leading-none text-lg sm:text-xl">अभी लिस्ट करें</div>
//                   <div className="text-xs font-normal text-white opacity-90 mt-1">List Property Now</div>
//                 </div>
//                 <ArrowRight size={20} className="text-white sm:w-6 sm:h-6" />
//               </button>
//             </div>

//             {/* Right Side - Image */}
//             <div className="h-64 sm:h-80 md:h-auto md:min-h-[500px] relative">
//               <img
//                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0846eb0d0f-69e42afefb978fae2f2c.png"
//                 alt="Happy Indian family selling property"
//                 className="w-full h-full object-cover object-center"
//               />
//               {/* Red Tint Overlay */}
//               <div 
//                 className="absolute inset-0 mix-blend-multiply"
//                 style={{ backgroundColor: 'rgba(204, 63, 63, 0.1)' }}
//               ></div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import { Send, MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

// export default function ContactSection() {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0]">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Contact Us for Property Help
//           </h2>
//           <p className="text-xl text-[#b54035] mb-2 font-semibold">
//             प्रॉपर्टी सहायता के लिए संपर्क करें
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#fdeee0] hover:border-[#e8734a]/30 transition-all duration-300">
//             <div className="mb-8">
//               <h3 className="text-3xl font-bold text-gray-800 mb-2">
//                 Quick Contact Form
//               </h3>
//               <p className="text-lg text-[#b54035] font-semibold">
//                 तुरंत संपर्क फॉर्म
//               </p>
//             </div>

//             <form className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Name / नाम
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
//                   placeholder="Enter your name / अपना नाम लिखें"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Phone Number / फोन नंबर
//                 </label>
//                 <input
//                   type="tel"
//                   className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
//                   placeholder="+91 98765 43210"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Service Needed / सेवा की आवश्यकता
//                 </label>
//                 <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]">
//                   <option>Property Buy/Sell - प्रॉपर्टी खरीद/बिक्री</option>
//                   <option>Nakal & Map - नक़ल और नक्शा</option>
//                   <option>Patta Creation - पट्टा बनवाना</option>
//                   <option>Registry Service - रजिस्ट्री सेवा</option>
//                   <option>Legal Consultation - कानूनी सलाह</option>
//                   <option>Property Verification - प्रॉपर्टी जांच</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Message / संदेश
//                 </label>
//                 <textarea
//                   className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all h-32 bg-[#fefdf9] resize-none"
//                   placeholder="Describe your requirement / अपनी आवश्यकता बताएं"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] text-white py-4 rounded-xl font-semibold text-lg hover:from-[#d9543f] hover:to-[#b54035] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
//               >
//                 <Send size={20} />
//                 Send Message / संदेश भेजें
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             {/* WhatsApp Card */}
//             <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <MessageCircle className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     WhatsApp Us
//                   </h3>
//                   <p className="text-[#b54035] font-semibold">
//                     व्हाट्सऐप करें
//                   </p>
//                 </div>
//               </div>
//               <a 
//                 href="https://wa.me/919876543210"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
//               >
//                 <MessageCircle size={20} />
//                 +91 98765 43210
//               </a>
//             </div>

//             {/* Phone Card */}
//             <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#d9543f] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <Phone className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     Call Directly
//                   </h3>
//                   <p className="text-[#b54035] font-semibold">
//                     सीधे कॉल करें
//                   </p>
//                 </div>
//               </div>
//               <a 
//                 href="tel:+919876543210"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] hover:from-[#d9543f] hover:to-[#b54035] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
//               >
//                 <Phone size={20} />
//                 +91 98765 43210
//               </a>
//             </div>

//             {/* Address Card */}
//             <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#a73232] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <MapPin className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     Visit Our Office
//                   </h3>
//                   <p className="text-[#b54035] font-semibold">
//                     हमारे ऑफिस आएं
//                   </p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-xl p-6 border border-[#fdeee0]">
//                 <p className="font-bold text-gray-800 text-lg mb-2">Property Sathi Office</p>
//                 <p className="text-gray-700 mb-1">Near City Palace, Bhilwara</p>
//                 <p className="text-gray-700 mb-3">Rajasthan - 311001</p>
//                 <div className="border-t border-[#fdeee0] pt-3 mt-3">
//                   <p className="text-[#b54035] font-semibold">सिटी पैलेस के पास, भीलवाड़ा</p>
//                   <p className="text-[#b54035] font-semibold">राजस्थान - 311001</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hours Card */}
//             <div className="group bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300">
//               <div className="flex items-center gap-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#cc3f3f] to-[#b54035] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <Clock className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-1">
//                     Open Hours
//                   </h3>
//                   <p className="text-[#b54035] font-semibold text-lg">
//                     24/7 Available / हमेशा उपलब्ध
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] rounded-3xl p-8 shadow-2xl">
//           <h3 className="text-3xl font-bold text-white mb-3">
//             Ready to Get Started?
//           </h3>
//           <p className="text-xl text-white/90 mb-2 font-semibold">
//             शुरू करने के लिए तैयार हैं?
//           </p>
//           <p className="text-white/80 text-lg">
//             Contact us today and let us handle all your property needs!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// 
'use client'
import { useState, useEffect } from "react";
import { Phone, MessageCircle, Clock, Shield, Handshake } from "lucide-react";

export default function CTASection() {
  const [contactInfo, setContactInfo] = useState({
    phoneNumbers: ["+91 98765 43210"],
    whatsappNumber: "+91 98765 43210"
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contact');
      const data = await response.json();
      
      if (data.success && data.data) {
        setContactInfo({
          phoneNumbers: data.data.phoneNumbers || ["+91 98765 43210"],
          whatsappNumber: data.data.whatsappNumber || "+91 98765 43210"
        });
      }
    } catch (err) {
      console.error('Failed to fetch contact information:', err);
    } finally {
      setLoading(false);
    }
  };

  const primaryPhone = contactInfo.phoneNumbers[0];
  const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <section className="py-20 bg-gradient-to-r from-[#d9543f] via-[#cc3f3f] to-[#b54035] relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=400&fit=crop"
          alt="Traditional Rajasthani architecture patterns"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Solve Your Property Issues?
          </h2>
          <p className="text-2xl text-[#fcf5d9] mb-8 font-semibold">
            अपनी प्रॉपर्टी की समस्या हल करने के लिए तैयार हैं?
          </p>

          <p className="text-xl text-[#fefbf0] mb-10 leading-relaxed">
            Don't let property paperwork stress you out. Our expert team is
            here to handle everything from buying and selling to documentation
            and registry. Contact us today for a hassle-free experience!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`tel:${primaryPhone}`}
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-110 shadow-2xl flex items-center gap-3"
            >
              <Phone size={24} />
              {loading ? "Loading..." : `Call Now: ${primaryPhone}`}
            </a>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#fefdf9] text-[#d9543f] px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-110 shadow-2xl flex items-center gap-3"
            >
              <MessageCircle className="text-green-500" size={24} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="text-[#fcf5d9] text-3xl mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">
                24/7 Available
              </h3>
              <p className="text-[#fcf5d9]">हमेशा उपलब्ध</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="text-[#fcf5d9] text-3xl mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">
                100% Safe
              </h3>
              <p className="text-[#fcf5d9]">पूर्ण सुरक्षा</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Handshake className="text-[#fcf5d9] text-3xl mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">
                Trusted Service
              </h3>
              <p className="text-[#fcf5d9]">भरोसेमंद सेवा</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}