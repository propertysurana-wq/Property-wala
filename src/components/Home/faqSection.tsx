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
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center lg:text-left">
          <span 
            className="font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block"
            style={{ color: '#cc3f3f' }}
          >
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            Frequently Asked <span style={{ color: '#cc3f3f' }}>Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            अक्सर पूछे जाने वाले सवाल
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          
          {/* LEFT: FAQ List */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedFAQ === index 
                    ? "border-2 shadow-md" 
                    : "border hover:border-red-200"
                }`}
                style={{
                  backgroundColor: expandedFAQ === index ? '#fff5f5' : 'white',
                  borderColor: expandedFAQ === index ? '#cc3f3f' : '#e5e7eb'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex items-start justify-between gap-3 sm:gap-4"
                >
                  <span 
                    className="text-sm sm:text-base md:text-lg font-bold"
                    style={{ color: expandedFAQ === index ? '#cc3f3f' : '#1f2937' }}
                  >
                    {faq.question}
                  </span>
                  
                  <div 
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: expandedFAQ === index ? '#cc3f3f' : '#f3f4f6',
                      color: expandedFAQ === index ? 'white' : '#6b7280'
                    }}
                  >
                    {expandedFAQ === index ? <Minus size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />}
                  </div>
                </button>

                {/* Answer */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Single Image */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            
            {/* Single Large Image */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
              <img 
                src="/image/frequently.png" 
                alt="Property Consultation" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Contact Card */}
            <div 
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl border text-center mt-2"
              style={{ 
                backgroundColor: '#fff5f5',
                borderColor: 'rgba(204, 63, 63, 0.2)'
              }}
            >
              <p className="font-bold text-base sm:text-lg mb-1" style={{ color: '#cc3f3f' }}>
                Need Immediate Help?
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-3">
                Talk to our experts directly.
              </p>
              <button 
                className="text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-full"
                style={{ backgroundColor: '#cc3f3f' }}
              >
                Contact Support
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}