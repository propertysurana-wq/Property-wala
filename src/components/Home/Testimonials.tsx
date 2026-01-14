// import { Star, ShieldCheck, Quote, MapPin } from "lucide-react";

// export default function TestimonialsSection() {
//   const testimonials = [
//     {
//       stars: 5,
//       text: "बहुत ही अच्छी सेवा मिली। प्रॉपर्टी की रजिस्ट्री में कोई परेशानी नहीं हुई। सभी कागज़ात सही समय पर तैयार हो गए।",
//       name: "रमेश शर्मा",
//       location: "भीलवाड़ा",
//       role: "किसान"
//     },
//     {
//       stars: 5,
//       text: "प्रॉपर्टी साथी की टीम बहुत मददगार है। नक़ल और पट्टा बनवाने में बहुत आसानी हुई। पूरी तरह से भरोसेमंद सेवा।",
//       name: "सुनीता देवी",
//       location: "मांडल",
//       role: "गृहणी"
//     },
//     {
//       stars: 5,
//       text: "मैंने यहाँ से अपनी जमीन बेची थी। बहुत ही अच्छी कीमत मिली और सारा काम बहुत जल्दी हो गया। धन्यवाद!",
//       name: "विकास गुप्ता",
//       location: "आसीन्द",
//       role: "व्यापारी"
//     },
//     {
//       stars: 5,
//       text: "कानूनी सलाह बहुत अच्छी मिली। प्रॉपर्टी में कोई समस्या नहीं थी, लेकिन फिर भी सब कुछ चेक करवाया। बहुत संतुष्ट हूँ।",
//       name: "प्रिया अग्रवाल",
//       location: "गुलाबपुरा",
//       role: "निवेशक"
//     },
//     {
//       stars: 5,
//       text: "बहुत ही ईमानदार और मेहनती टीम है। मुझे लगा था कि प्रॉपर्टी का काम बहुत मुश्किल होगा, लेकिन यहाँ सब आसान हो गया।",
//       name: "अजय मीणा",
//       location: "शाहपुरा",
//       role: "सरकारी कर्मचारी"
//     },
//     {
//       stars: 5,
//       text: "24 घंटे सेवा का वादा सच में निभाते हैं। रात को भी फोन किया तो तुरंत जवाब मिला। बहुत अच्छी सेवा।",
//       name: "कमला जैन",
//       location: "बनेड़ा",
//       role: "शिक्षिका"
//     },
//   ];

//   return (
//     <section className="py-24 bg-slate-50 font-sans  border-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-green-200">
//             <Star className="w-4 h-4 fill-green-600 text-green-600" />
//             Client Reviews
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
//             लोगों का <span className="text-green-600">भरोसा</span>
//           </h2>
//           <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
//             हमारे खुश ग्राहकों की जुबानी, हमारी कहानी।
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-green-500 group relative flex flex-col h-full"
//             >
//               {/* Quote Icon */}
//               <div className="absolute top-6 right-6 text-green-100 group-hover:text-green-500 transition-colors duration-300">
//                 <Quote size={40} className="fill-current" />
//               </div>

//               {/* Stars */}
//               <div className="flex mb-4">
//                 {[...Array(testimonial.stars)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={18}
//                     className="fill-yellow-400 text-yellow-400 mr-1"
//                   />
//                 ))}
//               </div>

//               {/* Text */}
//               <p className="text-lg text-slate-700 mb-6 leading-relaxed flex-grow font-medium">
//                 "{testimonial.text}"
//               </p>

//               {/* User Profile */}
//               <div className="flex items-center pt-4 border-t border-slate-50">
//                 <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl mr-4 shadow-md border-2 border-white group-hover:border-green-500 transition-colors">
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                   <div className="font-bold text-slate-900 text-lg group-hover:text-green-700 transition-colors">
//                     {testimonial.name}
//                   </div>
//                   <div className="text-xs text-slate-500 font-semibold flex items-center gap-1 uppercase tracking-wide">
//                     <MapPin size={12} className="text-green-500" />
//                     {testimonial.location} • {testimonial.role}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Trust Badge */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
//             <ShieldCheck size={32} className="text-green-400" />
//             <div className="text-left">
//               <div className="font-bold text-xl">100% Verified Service</div>
//               <div className="text-slate-400 text-sm">भरोसेमंद और सुरक्षित लेन-देन</div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
// 
import { Star, ShieldCheck, Quote, MapPin } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      text: "बहुत ही अच्छी सेवा मिली। प्रॉपर्टी की रजिस्ट्री में कोई परेशानी नहीं हुई। सभी कागज़ात सही समय पर तैयार हो गए।",
      name: "श्याम लाल",
      location: "भीलवाड़ा",
      role: "किसान",
      image: "/image/images1.png"
    },
    {
      stars: 5,
      text: "प्रॉपर्टी साथी की टीम बहुत मददगार है। नक़ल और पट्टा बनवाने में बहुत आसानी हुई। पूरी तरह से भरोसेमंद सेवा।",
      name: "सुनीता देवी",
      location: "मांडल",
      role: "गृहणी",
      image: "/image/images2.png"
    },
    {
      stars: 4,
     
      text: "बहुत ही ईमानदार और मेहनती टीम है। मुझे लगा था कि प्रॉपर्टी का काम बहुत मुश्किल होगा, लेकिन यहाँ सब आसान हो गया।",
      name: "विकास गुप्ता",
      location: "आसीन्द",
      role: "व्यापारी",
      image: "/image/images3.png"
    },
    {
      stars: 5,
      text: "कानूनी सलाह बहुत अच्छी मिली। प्रॉपर्टी में कोई समस्या नहीं थी, लेकिन फिर भी सब कुछ चेक करवाया। बहुत संतुष्ट हूँ।",
      name: "प्रिया अग्रवाल",
      location: "गुलाबपुरा",
      role: "निवेशक",
      image: "/image/images4.png"
    },
    {
      stars: 4,
     text: "मैंने यहाँ से अपनी जमीन बेची थी। बहुत ही अच्छी कीमत मिली और सारा काम बहुत जल्दी हो गया। धन्यवाद!",
      name: "रमेश शर्मा",
      location: "शाहपुरा",
      role: "सरकारी कर्मचारी",
      image: "/image/images5.png"
    },
    {
      stars: 5,
      text: "24 घंटे सेवा का वादा सच में निभाते हैं। रात को भी फोन किया तो तुरंत जवाब मिला। बहुत अच्छी सेवा।",
      name: "कमला जैन",
      location: "बनेड़ा",
      role: "शिक्षिका",
      image: "/image/images6.png "
    },
  ];

  return (
    <section className="py-24 font-sans" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"
            style={{ 
              backgroundColor: 'rgba(204, 63, 63, 0.1)', 
              color: '#cc3f3f',
              borderColor: 'rgba(204, 63, 63, 0.3)'
            }}
          >
            <Star className="w-4 h-4" style={{ fill: '#cc3f3f', color: '#cc3f3f' }} />
            Client Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            लोगों का <span style={{ color: '#cc3f3f' }}>भरोसा</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            हमारे खुश ग्राहकों की जुबानी, हमारी कहानी।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border group relative flex flex-col h-full"
              style={{ borderColor: '#f5d5d5' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#cc3f3f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f5d5d5';
              }}
            >
              {/* Quote Icon */}
              <div 
                className="absolute top-6 right-6 transition-colors duration-300"
                style={{ color: '#fdd' }}
                onMouseEnter={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).addEventListener('mouseenter', () => {
                    e.currentTarget.style.color = '#cc3f3f';
                  });
                }}
              >
                <Quote size={40} className="fill-current" />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400 mr-1"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed flex-grow font-medium">
                "{testimonial.text}"
              </p>

              {/* User Profile */}
              <div className="flex items-center pt-4 border-t" style={{ borderColor: '#fdf2f2' }}>
                {/* Real Person Image */}
                <div className="relative mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md border-2 transition-all duration-300 group-hover:border-[#cc3f3f]"
                    style={{ borderColor: '#cc3f3f' }}
                    onError={(e) => {
                      // Fallback to initial if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Initial (hidden by default) */}
                  <div 
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-md border-2 transition-colors absolute top-0 left-0"
                    style={{ 
                      backgroundColor: '#cc3f3f',
                      borderColor: '#cc3f3f',
                      display: 'none'
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div 
                    className="font-bold text-gray-800 text-lg transition-colors"
                    onMouseEnter={(e) => {
                      if (e.currentTarget.closest('.group')?.matches(':hover')) {
                        e.currentTarget.style.color = '#cc3f3f';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-500 font-semibold flex items-center gap-1 uppercase tracking-wide">
                    <MapPin size={12} style={{ color: '#cc3f3f' }} />
                    {testimonial.location} • {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-20 text-center">
          <div 
            className="inline-flex flex-col sm:flex-row items-center gap-4 text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: '#cc3f3f' }}
          >
            <ShieldCheck size={32} className="text-white" />
            <div className="text-left">
              <div className="font-bold text-xl">100% Verified Service</div>
              <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>भरोसेमंद और सुरक्षित लेन-देन</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}