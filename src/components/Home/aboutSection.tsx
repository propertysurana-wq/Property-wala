// import { Award, ShieldCheck, Users, CheckCircle2, ArrowRight } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section id="about" className="py-24 bg-white font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
//           {/* Left Content */}
//           <div className="order-2 lg:order-1">
//             <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
//               Who We Are
//             </span>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-2 tracking-tight">
//               About Property Sathi
//             </h2>
//             <p className="text-lg text-emerald-700 font-medium mb-8 font-serif">
//               प्रॉपर्टी साथी के बारे में
//             </p>

//             <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
//               <p>
//                 We simplify property transactions for the people of Bhilwara. Our expert team ensures every deal is transparent, legally sound, and hassle-free.
//               </p>
//               <p className="text-slate-500 italic border-l-4 border-emerald-500 pl-4 py-1">
//                 "हम भीलवाड़ा और आसपास के गांवों के लोगों की प्रॉपर्टी लेन-देन और कानूनी कागज़ात में मदद करते हैं।"
//               </p>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-6 mt-10 mb-10">
//               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
//                 <div className="text-4xl font-bold text-slate-900 mb-1">15+</div>
//                 <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Years Experience</div>
//               </div>
//               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
//                 <div className="text-4xl font-bold text-slate-900 mb-1">500+</div>
//                 <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Happy Clients</div>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-900/20 flex items-center justify-center gap-2 group">
//                 Learn More
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className="relative order-1 lg:order-2">
            
//             {/* Main Image Container */}
//             <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
//               <img
//                 className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
//                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop"
//                 alt="Modern Property Discussion"
//               />
              
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
//             </div>

//             {/* Floating Card 1 (Top Right) */}
//             <div className="absolute -top-6 -right-6 lg:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
//                   <ShieldCheck className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-500 font-medium uppercase">Security</p>
//                   <p className="text-sm font-bold text-slate-900">100% Safe Deals</p>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Card 2 (Bottom Left) */}
//             <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-slate-900 p-5 rounded-2xl shadow-2xl">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
//                   <Award className="w-6 h-6" />
//                 </div>
//                 <div className="text-white">
//                   <p className="text-lg font-bold">#1 Choice</p>
//                   <p className="text-xs text-slate-300">in Bhilwara</p>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Dots */}
//             <div className="absolute -z-10 top-10 -left-10 text-emerald-200">
//               <svg width="100" height="100" fill="currentColor" viewBox="0 0 100 100">
//                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//                   <circle cx="2" cy="2" r="2" />
//                 </pattern>
//                 <rect width="100" height="100" fill="url(#dots)" />
//               </svg>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Award, Shield, CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#fff5f5' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-4 sm:mb-6"
              style={{
                backgroundColor: 'rgba(204, 63, 63, 0.1)',
                borderColor: 'rgba(204, 63, 63, 0.2)'
              }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ backgroundColor: '#cc3f3f' }}
              />
              <span 
                className="text-xs sm:text-sm font-bold uppercase tracking-wider"
                style={{ color: '#cc3f3f' }}
              >
                हमारे बारे में
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">
              सुराना होम्स <br className="hidden sm:block" />
              <span style={{ color: '#cc3f3f' }}>के बारे में</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-500 mb-4 sm:mb-6 font-medium">
              About Surana Homes
            </p>

            {/* Hindi Description */}
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              हम भीलवाड़ा और आसपास के गांवों के लोगों की प्रॉपर्टी खरीद-बिक्री
              और कानूनी कागज़ात में मदद करते हैं। हमारी अनुभवी टीम पूर्ण
              पारदर्शिता और भरोसे के साथ हर ग्राहक को सबसे अच्छी सेवा देती है।
            </p>

            {/* English Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We help people of Bhilwara and nearby villages with smooth
              property transactions and legal paperwork. Our experienced team
              ensures that every client gets the best service with complete
              transparency and trust.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div 
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ borderColor: 'rgba(204, 63, 63, 0.2)' }}
              >
                <div 
                  className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2"
                  style={{ color: '#cc3f3f' }}
                >
                  15+
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-semibold mb-0.5 sm:mb-1">
                  साल का अनुभव
                </div>
                <div className="text-xs text-gray-500">Years Experience</div>
              </div>
              
              <div 
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ borderColor: 'rgba(204, 63, 63, 0.2)' }}
              >
                <div 
                  className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2"
                  style={{ color: '#cc3f3f' }}
                >
                  500+
                </div>
                <div className="text-sm sm:text-base text-gray-700 font-semibold mb-0.5 sm:mb-1">
                  खुश ग्राहक
                </div>
                <div className="text-xs text-gray-500">Happy Clients</div>
              </div>
            </div>

            {/* Key Points */}
            <div 
              className="bg-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-md border" 
              style={{ borderColor: 'rgba(204, 63, 63, 0.1)' }}
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#cc3f3f' }} />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    100% कानूनी और सुरक्षित लेन-देन
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#cc3f3f' }} />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    कोई छिपा हुआ खर्चा नहीं
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#cc3f3f' }} />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    अनुभवी और भरोसेमंद टीम
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: '#cc3f3f' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b33636'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#cc3f3f'}
              >
                और जानें
              </button>
              <button 
                className="bg-white border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg w-full sm:w-auto"
                style={{ 
                  borderColor: '#cc3f3f',
                  color: '#cc3f3f'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#cc3f3f';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#cc3f3f';
                }}
              >
                हमारा काम देखें
              </button>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="relative order-1 lg:order-2">
            <div 
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative"
              style={{ 
                background: 'linear-gradient(to bottom right, rgba(204, 63, 63, 0.1), rgba(204, 63, 63, 0.05))' 
              }}
            >
              <img
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                src="/image/about.png"
                alt="Professional Indian property consultant"
              />

              {/* Trusted Dealer Badge */}
              <div 
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-2"
                style={{ borderColor: 'rgba(204, 63, 63, 0.2)' }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#cc3f3f' }}
                  >
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">
                      भरोसेमंद डीलर
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      भीलवाड़ा में
                    </div>
                  </div>
                </div>
              </div>

              {/* 100% Safe Badge */}
              <div 
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border-2"
                style={{ borderColor: 'rgba(204, 63, 63, 0.2)' }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#cc3f3f' }}
                  >
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-base">
                      100% सुरक्षित
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      लेन-देन
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Blur Element - Hidden on mobile */}
            <div 
              className="hidden lg:block absolute -z-10 top-8 right-8 w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: '#cc3f3f' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}