// import { Award, ShieldCheck, Users, CheckCircle2, ArrowRight } from "lucide-react";
// import Header from "@/components/header/header"
// import Footer from "../footer/footer";
// export default function AboutSection() {
//   return (
//      <div className="min-h-screen bg-slate-50 font-sans">
//           <Header/>
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
//     <Footer/>
//     </div>
//   );
// }
import { Award, ShieldCheck, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/header/header"
import Footer from "../footer/footer";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header/>
      <section id="about" className="py-24 bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] font-sans overflow-hidden"> 

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <span className="text-[#e8734a] font-bold tracking-widest uppercase text-xs bg-[#fef7f0] px-3 py-1 rounded-full border border-[#fdeee0]">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-2 tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">Surana Homes</span>
              </h2>
              <p className="text-lg text-[#b54035] font-semibold mb-8">
               सुराना होम्स के बारे में
              </p>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  We simplify property transactions for the people of Bhilwara. Our expert team ensures every deal is transparent, legally sound, and hassle-free.
                </p>
                <p className="text-slate-500 italic border-l-4 border-[#e8734a] pl-4 py-1">
                  "हम भीलवाड़ा और आसपास के गांवों के लोगों की प्रॉपर्टी लेन-देन और कानूनी कागज़ात में मदद करते हैं।"
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-10 mb-10">
                <div className="bg-white p-6 rounded-2xl border border-[#fdeee0] hover:border-[#e8734a] hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mb-1">15+</div>
                  <div className="text-sm font-semibold text-[#b54035] uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#fdeee0] hover:border-[#e8734a] hover:shadow-lg transition-all">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mb-1">500+</div>
                  <div className="text-sm font-semibold text-[#b54035] uppercase tracking-wide">Happy Clients</div>
                </div>
              </div>

              {/* Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-[#e8734a]/30 transition-all flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-slate-900 border-2 border-[#fdeee0] px-8 py-4 rounded-full font-bold hover:border-[#e8734a] hover:text-[#e8734a] transition-all flex items-center justify-center">
                  View Portfolio
                </button>
              </div> */}
            </div>

            {/* Right Image Section */}
            <div className="relative order-1 lg:order-2">
              
              {/* Main Image Container */}
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop"
                  alt="Modern Property Discussion"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Card 1 (Top Right) */}
              <div className="absolute -top-6 -right-6 lg:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-[#fdeee0] animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e8734a] to-[#e15e5e] rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Security</p>
                    <p className="text-sm font-bold text-slate-900">100% Safe Deals</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 (Bottom Left) */}
            

              {/* Decorative Dots */}
              <div className="absolute -z-10 top-10 -left-10 text-[#fdeee0]">
                <svg width="100" height="100" fill="currentColor" viewBox="0 0 100 100">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}