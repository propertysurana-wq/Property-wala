// import { Handshake, Phone } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative h-[700px] bg-gradient-to-r from-[#fdeee0] via-[#fefbf0] to-[#fce8e8] overflow-hidden">
//       <div className="absolute inset-0">
//         <img
//           className="w-full h-full object-cover opacity-30"
//           src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
//           alt="Traditional Rajasthani houses with modern city buildings"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#752e2f]/70 via-[#742d2d]/60 to-transparent"></div>
//       </div>

//       <div className="relative container mx-auto px-4 h-full flex items-center">
//         <div className="max-w-4xl">
//           <div className="mb-6">
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//               Your Trusted Property & Registry Partner in Bhilwara
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-[#fcf5d9] mb-6 font-semibold">
//               आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
//             </h2>
//           </div>

//           <p className="text-xl text-[#fefbf0] mb-4 max-w-2xl">
//             We make buying, selling, and paperwork simple
//           </p>
//           <p className="text-lg text-[#fcf5d9] mb-8 max-w-2xl">
//             प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-[#d9543f] hover:bg-[#b54035] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
//               <Handshake size={20} />
//               Get Property Help
//             </button>
//             <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d9543f] px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-3">
//               <Phone size={20} />
//               प्रॉपर्टी सहायता लें
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Stats */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
//         <div className="text-center">
//           <div className="text-2xl font-bold text-[#d9543f]">15+</div>
//           <div className="text-sm text-gray-600">Years Experience</div>
//         </div>
//         <div className="text-center border-l border-gray-300 pl-8">
//           <div className="text-2xl font-bold text-[#cc3f3f]">500+</div>
//           <div className="text-sm text-gray-600">Happy Clients</div>
//         </div>
//         <div className="text-center border-l border-gray-300 pl-8">
//           <div className="text-2xl font-bold text-green-600">100%</div>
//           <div className="text-sm text-gray-600">Success Rate</div>
//         </div>
//       </div>
//     </section>
//   );
// }
// 
'use client';

import { Handshake, Phone } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          className="object-cover opacity-40"
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
          alt="Traditional Rajasthani houses with modern city buildings"
          fill
          priority
          sizes="100vw"
        />
        {/* Mauve/Rose overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(157, 123, 123, 0.85)' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-16 sm:py-20">
        <div className="w-full max-w-4xl">
          <div className="mb-6 sm:mb-8">
            {/* Main Heading - Responsive sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Your Trusted Property & Registry Partner in Bhilwara
            </h1>
            {/* Hindi Subtitle - Responsive sizes */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-4 sm:mb-6 font-semibold">
              आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
            </h2>
          </div>

          {/* Description - Responsive text */}
          <p className="text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-3 max-w-2xl">
            We make buying, selling, and paperwork simple
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-2xl">
            प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
          </p>

          {/* CTA Buttons - Stack on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button 
              className="text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{ backgroundColor: '#E85D4A' }}
              aria-label="Get property help"
            >
              <Handshake size={18} />
              <span>Get Property Help</span>
            </button>
            
            <a 
              href="tel:+919876543210"
              className="bg-transparent border-2 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-white"
              style={{ borderColor: '#ffffff' }}
              aria-label="Call for property assistance"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#E85D4A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <Phone size={18} />
              <span>प्रॉपर्टी सहायता लें</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stats - Responsive positioning */}
    
    </section>
  );
}