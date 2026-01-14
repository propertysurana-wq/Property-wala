// 'use client'
// import { useState } from "react";
// import { ChevronDown, Plus, Minus } from "lucide-react";

// export default function FAQSection() {
//   const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0); // First one open by default

//   const toggleFAQ = (index: number) => {
//     setExpandedFAQ(expandedFAQ === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "प्रॉपर्टी रजिस्ट्री में कितना समय लगता है?",
//       answer: "सामान्यतः प्रॉपर्टी रजिस्ट्री में 7-15 दिन का समय लगता है। यह सभी दस्तावेजों की उपलब्धता और सरकारी कार्यालय की व्यस्तता पर निर्भर करता है। हम पूरी प्रक्रिया को तेज़ करने के लिए अपनी तरफ से पूरी कोशिश करते हैं।",
//     },
//     {
//       question: "नक़ल निकालने के लिए क्या दस्तावेज चाहिए?",
//       answer: "नक़ल निकालने के लिए खसरा नंबर, गाटा नंबर या जमीन का पता चाहिए। अगर आपके पास ये जानकारी नहीं है तो हम आपकी मदद करके ये डिटेल्स निकाल सकते हैं।",
//     },
//     {
//       question: "आपकी सेवा का शुल्क कितना है?",
//       answer: "हमारा शुल्क काम के अनुसार अलग-अलग होता है। सभी कीमतें बिल्कुल पारदर्शी हैं और कोई छुपा हुआ चार्ज नहीं है। काम शुरू करने से पहले हम पूरी फीस के बारे में बता देते हैं।",
//     },
//     {
//       question: "क्या आप गांव की जमीन का भी काम करते हैं?",
//       answer: "जी हाँ, हम शहर और गांव दोनों की जमीन का काम करते हैं। हमारी टीम को ग्रामीण और शहरी दोनों तरह की प्रॉपर्टी का अनुभव है। गांव की जमीन के लिए विशेष प्रक्रिया की जरूरत होती है जिसमें हम एक्सपर्ट हैं।",
//     },
//     {
//       question: "प्रॉपर्टी खरीदते समय किन बातों का ध्यान रखें?",
//       answer: "प्रॉपर्टी खरीदते समय टाइटल क्लियर होना, सभी कागज़ात सही होना, मार्केट रेट चेक करना, और कानूनी जांच जरूरी है। हमारी टीम इन सभी चीजों की पूरी जांच करके आपको सुरक्षित डील दिलाती है।",
//     },
//   ];

//   return (
//     <section className="py-24 bg-white font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="mb-12">
//           <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
//           <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
//             Frequently Asked <span className="text-emerald-600">Questions</span>
//           </h2>
//           <p className="text-lg text-slate-500 mt-2 font-serif">
//             अक्सर पूछे जाने वाले सवाल
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
//           {/* LEFT: FAQ List (Span 7 cols) */}
//           <div className="lg:col-span-7 space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
//                   expandedFAQ === index 
//                     ? "bg-slate-50 border-emerald-500 shadow-md" 
//                     : "bg-white border-slate-200 hover:border-emerald-200"
//                 }`}
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full p-6 text-left flex items-start justify-between gap-4"
//                 >
//                   <span className={`text-lg font-bold ${expandedFAQ === index ? 'text-emerald-700' : 'text-slate-800'}`}>
//                     {faq.question}
//                   </span>
                  
//                   <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
//                     expandedFAQ === index ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'
//                   }`}>
//                     {expandedFAQ === index ? <Minus size={18} /> : <Plus size={18} />}
//                   </div>
//                 </button>

//                 {/* Answer */}
//                 <div 
//                   className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                     expandedFAQ === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="px-6 pb-6 text-slate-600 leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT: 3 Images (Span 5 cols) */}
//           <div className="lg:col-span-5 flex flex-col gap-6">
            
//             {/* Image 1 - Large Top */}
//             <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
//               <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all duration-500" />
//               <img 
//                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" 
//                 alt="Consultation" 
//                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//               />
//             </div>

//             {/* Bottom Row - 2 Images */}
//             <div className="grid grid-cols-2 gap-6 h-48">
//               {/* Image 2 */}
//               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
//                 <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-all duration-500" />
//                 <img 
//                   src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80" 
//                   alt="Documents" 
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>

//               {/* Image 3 */}
//               <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
//                 <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all duration-500" />
//                 <img 
//                   src="https://images.unsplash.com/photo-1593696140826-c58b5e636894?w=400&q=80" 
//                   alt="Handshake" 
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//             </div>

//             {/* Decorative Element */}
//             <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 text-center mt-2">
//               <p className="text-emerald-800 font-bold text-lg mb-1">Need Immediate Help?</p>
//               <p className="text-slate-500 text-sm mb-3">Talk to our experts directly.</p>
//               <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors w-full">
//                 Contact Support
//               </button>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
'use client'
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "प्रॉपर्टी रजिस्ट्री में कितना समय लगता है?",
      answer: "सामान्यतः प्रॉपर्टी रजिस्ट्री में 7-15 दिन का समय लगता है। यह सभी दस्तावेजों की उपलब्धता और सरकारी कार्यालय की व्यस्तता पर निर्भर करता है। हम पूरी प्रक्रिया को तेज़ करने के लिए अपनी तरफ से पूरी कोशिश करते हैं।",
    },
    {
      question: "नक़ल निकालने के लिए क्या दस्तावेज चाहिए?",
      answer: "नक़ल निकालने के लिए खसरा नंबर, गाटा नंबर या जमीन का पता चाहिए। अगर आपके पास ये जानकारी नहीं है तो हम आपकी मदद करके ये डिटेल्स निकाल सकते हैं।",
    },
    {
      question: "आपकी सेवा का शुल्क कितना है?",
      answer: "हमारा शुल्क काम के अनुसार अलग-अलग होता है। सभी कीमतें बिल्कुल पारदर्शी हैं और कोई छुपा हुआ चार्ज नहीं है। काम शुरू करने से पहले हम पूरी फीस के बारे में बता देते हैं।",
    },
    {
      question: "क्या आप गांव की जमीन का भी काम करते हैं?",
      answer: "जी हाँ, हम शहर और गांव दोनों की जमीन का काम करते हैं। हमारी टीम को ग्रामीण और शहरी दोनों तरह की प्रॉपर्टी का अनुभव है। गांव की जमीन के लिए विशेष प्रक्रिया की जरूरत होती है जिसमें हम एक्सपर्ट हैं।",
    },
    {
      question: "प्रॉपर्टी खरीदते समय किन बातों का ध्यान रखें?",
      answer: "प्रॉपर्टी खरीदते समय टाइटल क्लियर होना, सभी कागज़ात सही होना, मार्केट रेट चेक करना, और कानूनी जांच जरूरी है। हमारी टीम इन सभी चीजों की पूरी जांच करके आपको सुरक्षित डील दिलाती है।",
    },
  ];

  return (
  <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#cc3f3f] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <HelpCircle className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#b54035] mb-2 font-semibold">
            अक्सर पूछे जाने वाले प्रश्न
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
                expandedFAQ === index 
                  ? "border-[#e8734a] shadow-xl" 
                  : "border-[#fdeee0] hover:border-[#e8734a]/30"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-start justify-between hover:bg-gradient-to-r hover:from-[#fefdf9] hover:to-[#fef7f0] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    expandedFAQ === index 
                      ? "bg-gradient-to-br from-[#e8734a] to-[#cc3f3f]" 
                      : "bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#fef7f0] group-hover:to-[#fdeee0]"
                  }`}>
                    <span className={`font-bold transition-colors duration-300 ${
                      expandedFAQ === index ? "text-white" : "text-gray-600"
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-800 leading-relaxed pr-4">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`text-[#d9543f] transition-all duration-300 flex-shrink-0 ${
                    expandedFAQ === index ? "transform rotate-180 scale-110" : "group-hover:scale-110"
                  }`}
                  size={24}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedFAQ === index 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pl-12 pr-4 pt-2 border-l-4 border-[#e8734a]/30">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <p className="text-[#b54035] font-semibold">
            और सवाल हैं? हम आपकी मदद के लिए हैं!
          </p>
        </div>
      </div>
    </section>
  );
}