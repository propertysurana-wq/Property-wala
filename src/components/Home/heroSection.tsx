// // import { Handshake, Phone } from "lucide-react";

// // export default function HeroSection() {
// //   return (
// //     <section className="relative h-[700px] bg-gradient-to-r from-[#fdeee0] via-[#fefbf0] to-[#fce8e8] overflow-hidden">
// //       <div className="absolute inset-0">
// //         <img
// //           className="w-full h-full object-cover opacity-30"
// //           src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
// //           alt="Traditional Rajasthani houses with modern city buildings"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-r from-[#752e2f]/70 via-[#742d2d]/60 to-transparent"></div>
// //       </div>

// //       <div className="relative container mx-auto px-4 h-full flex items-center">
// //         <div className="max-w-4xl">
// //           <div className="mb-6">
// //             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
// //               Your Trusted Property & Registry Partner in Bhilwara
// //             </h1>
// //             <h2 className="text-2xl md:text-3xl text-[#fcf5d9] mb-6 font-semibold">
// //               आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
// //             </h2>
// //           </div>

// //           <p className="text-xl text-[#fefbf0] mb-4 max-w-2xl">
// //             We make buying, selling, and paperwork simple
// //           </p>
// //           <p className="text-lg text-[#fcf5d9] mb-8 max-w-2xl">
// //             प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4">
// //             <button className="bg-[#d9543f] hover:bg-[#b54035] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
// //               <Handshake size={20} />
// //               Get Property Help
// //             </button>
// //             <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d9543f] px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-3">
// //               <Phone size={20} />
// //               प्रॉपर्टी सहायता लें
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Floating Stats */}
// //       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
// //         <div className="text-center">
// //           <div className="text-2xl font-bold text-[#d9543f]">15+</div>
// //           <div className="text-sm text-gray-600">Years Experience</div>
// //         </div>
// //         <div className="text-center border-l border-gray-300 pl-8">
// //           <div className="text-2xl font-bold text-[#cc3f3f]">500+</div>
// //           <div className="text-sm text-gray-600">Happy Clients</div>
// //         </div>
// //         <div className="text-center border-l border-gray-300 pl-8">
// //           <div className="text-2xl font-bold text-green-600">100%</div>
// //           <div className="text-sm text-gray-600">Success Rate</div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // 
// 'use client';

// import { Handshake, Phone } from "lucide-react";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <Image
//           className="object-cover opacity-40"
//           src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
//           alt="Traditional Rajasthani houses with modern city buildings"
//           fill
//           priority
//           sizes="100vw"
//         />
//         {/* Mauve/Rose overlay */}
//         <div 
//           className="absolute inset-0" 
//           style={{ backgroundColor: 'rgba(157, 123, 123, 0.85)' }}
//         ></div>
//       </div>

//       {/* Content */}
//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-16 sm:py-20">
//         <div className="w-full max-w-4xl">
//           <div className="mb-6 sm:mb-8">
//             {/* Main Heading - Responsive sizes */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
//               Your Trusted Property & Registry Partner in Bhilwara
//             </h1>
//             {/* Hindi Subtitle - Responsive sizes */}
//             <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-4 sm:mb-6 font-semibold">
//               आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
//             </h2>
//           </div>

//           {/* Description - Responsive text */}
//           <p className="text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-3 max-w-2xl">
//             We make buying, selling, and paperwork simple
//           </p>
//           <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 max-w-2xl">
//             प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
//           </p>

//           {/* CTA Buttons - Stack on mobile, row on desktop */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
//             <button 
//               className="text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
//               style={{ backgroundColor: '#E85D4A' }}
//               aria-label="Get property help"
//             >
//               <Handshake size={18} />
//               <span>Get Property Help</span>
//             </button>
            
//             <a 
//               href="tel:+919876543210"
//               className="bg-transparent border-2 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-white"
//               style={{ borderColor: '#ffffff' }}
//               aria-label="Call for property assistance"
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#ffffff';
//                 e.currentTarget.style.color = '#E85D4A';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = 'transparent';
//                 e.currentTarget.style.color = '#ffffff';
//               }}
//             >
//               <Phone size={18} />
//               <span>प्रॉपर्टी सहायता लें</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Floating Stats - Responsive positioning */}
//       <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-auto sm:right-8 flex flex-col sm:flex-row bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden sm:max-w-none">
//         {/* Years Experience */}
//         <div className="text-center px-4 sm:px-6 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-gray-200 flex-1">
//           <div 
//             className="text-2xl sm:text-3xl font-bold mb-1" 
//             style={{ color: '#E85D4A' }}
//           >
//             15+
//           </div>
//           <div className="text-xs text-gray-600 font-medium whitespace-nowrap">
//             Years Experience
//           </div>
//         </div>
        
//         {/* Happy Clients */}
//         <div className="text-center px-4 sm:px-6 py-4 sm:py-5 border-b sm:border-b-0 sm:border-r border-gray-200 flex-1">
//           <div 
//             className="text-2xl sm:text-3xl font-bold mb-1" 
//             style={{ color: '#E85D4A' }}
//           >
//             500+
//           </div>
//           <div className="text-xs text-gray-600 font-medium whitespace-nowrap">
//             Happy Clients
//           </div>
//         </div>
        
//         {/* Success Rate */}
//         <div className="text-center px-4 sm:px-6 py-4 sm:py-5 flex-1">
//           <div 
//             className="text-2xl sm:text-3xl font-bold mb-1" 
//             style={{ color: '#00C853' }}
//           >
//             100%
//           </div>
//           <div className="text-xs text-gray-600 font-medium whitespace-nowrap">
//             Success Rate
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// 'use client';

// import { Handshake, Phone, CheckCircle, Users, FileCheck } from "lucide-react";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative h-[700px] bg-gradient-to-r from-[#fdeee0] via-[#fefbf0] to-[#fce8e8] overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <Image
//           className="object-cover opacity-40"
//           src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
//           alt="Traditional Rajasthani houses with modern city buildings"
//           fill
//           priority
//           sizes="100vw"
//         />
//         {/* Brand Color Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[rgba(157, 123, 123, 0.85]/90 via-[rgba(157, 123, 123, 0.85]/85 to-[#d9543f]/90"></div>
//       </div>

//       {/* Content */}
//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-12 sm:py-16 lg:py-20">
//         <div className="w-full max-w-6xl">
//           <div className="mb-4 sm:mb-6 lg:mb-8">
//             {/* Main Heading - Responsive sizes */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight">
//               Your Trusted Property & Registry Partner in Bhilwara
//             </h1>
//             {/* Hindi Subtitle - Responsive sizes */}
//             <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-3 sm:mb-4 lg:mb-6 font-semibold">
//               आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
//             </h2>
//           </div>

//           {/* Description - Responsive text */}
//           <div className="mb-6 sm:mb-8 lg:mb-10">
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-1 sm:mb-2 max-w-2xl leading-relaxed">
//               We make buying, selling, and paperwork simple
//             </p>
//             <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl">
//               प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
//             </p>
//           </div>

//           {/* CTA Buttons - Stack on mobile, row on desktop */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
//             <button 
//               className="bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
//               aria-label="Get property help"
//             >
//               <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span>Get Property Help</span>
//             </button>
            
//             <a 
//               href="tel:+919876543210"
//               className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold transition-all flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto hover:bg-white hover:text-[#e8734a] active:scale-95 shadow-lg"
//               aria-label="Call for property assistance"
//             >
//               <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span>प्रॉपर्टी सहायता लें</span>
//             </a>
//           </div>

//           {/* Floating Stats - Fully Responsive Grid */}
//           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl">
//             {/* Stat Card 1 */}
//             <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 shadow-lg transform transition-all hover:scale-105 active:scale-95">
//               <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                   <CheckCircle className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
//                 </div>
//                 <div>
//                   <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-none mb-0.5 sm:mb-1">500+</p>
//                   <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 font-medium">Deals Done</p>
//                   <p className="text-[9px] sm:text-[10px] lg:text-xs text-white/80">सफल सौदे</p>
//                 </div>
//               </div>
//             </div>

//             {/* Stat Card 2 */}
//             <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 shadow-lg transform transition-all hover:scale-105 active:scale-95">
//               <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                   <Users className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
//                 </div>
//                 <div>
//                   <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-none mb-0.5 sm:mb-1">1000+</p>
//                   <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 font-medium">Happy Clients</p>
//                   <p className="text-[9px] sm:text-[10px] lg:text-xs text-white/80">खुश ग्राहक</p>
//                 </div>
//               </div>
//             </div>

//             {/* Stat Card 3 - Full width on single column, normal on grid */}
//             <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 shadow-lg transform transition-all hover:scale-105 active:scale-95 xs:col-span-2 sm:col-span-1">
//               <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                   <FileCheck className="text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
//                 </div>
//                 <div>
//                   <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-none mb-0.5 sm:mb-1">100%</p>
//                   <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 font-medium">Legal Process</p>
//                   <p className="text-[9px] sm:text-[10px] lg:text-xs text-white/80">कानूनी प्रक्रिया</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










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
// import { Handshake, Phone } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           className="w-full h-full object-cover opacity-30"
//           src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
//           alt="Bhilwara Property Background"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#752e2f]/80 via-[#742d2d]/60 to-transparent"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative container mx-auto px-4 z-10 flex flex-col justify-center h-full pt-10 pb-24 md:py-0">
//         <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          
//           <div className="mb-4 md:mb-6">
//             <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mb-2 leading-tight">
//               Your Trusted Property Partner in Bhilwara
//             </h1>
//             <h2 className="text-base sm:text-lg md:text-3xl text-[#fcf5d9] font-medium">
//               आपका भरोसेमंद प्रॉपर्टी और पट्टा साथी
//             </h2>
//           </div>

//           <p className="text-sm sm:text-lg text-[#fefbf0] mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 opacity-90">
//             Buying, selling, and paperwork made simple. <br className="hidden md:block"/>
//             प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान।
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
//             <button className="bg-[#d9543f] hover:bg-[#b54035] text-white px-6 py-2.5 md:py-4 rounded-full text-sm md:text-lg font-semibold shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95">
//               <Handshake size={18} />
//               Get Help
//             </button>
//             <button className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-[#d9543f] px-6 py-2.5 md:py-4 rounded-full text-sm md:text-lg font-semibold flex items-center justify-center gap-2 transition-colors">
//               <Phone size={18} />
//               सहायता लें
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Stats - Very Compact for Mobile */}
//       <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-auto md:bottom-8 md:w-auto md:transform md:-translate-x-1/2 md:left-1/2">
//         <div className="flex justify-between md:justify-center items-center bg-white rounded-xl p-3 md:p-6 shadow-xl gap-2 md:gap-8">
          
//           <div className="text-center flex-1">
//             <div className="text-lg md:text-3xl font-bold text-[#d9543f]">15+</div>
//             <div className="text-[10px] md:text-sm text-gray-600">Years</div>
//           </div>
          
//           <div className="w-px h-6 md:h-10 bg-gray-200"></div>
          
//           <div className="text-center flex-1">
//             <div className="text-lg md:text-3xl font-bold text-[#cc3f3f]">500+</div>
//             <div className="text-[10px] md:text-sm text-gray-600">Clients</div>
//           </div>
          
//           <div className="w-px h-6 md:h-10 bg-gray-200"></div>
          
//           <div className="text-center flex-1">
//             <div className="text-lg md:text-3xl font-bold text-green-600">100%</div>
//             <div className="text-[10px] md:text-sm text-gray-600">Success</div>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }
// import { Handshake, Phone } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-[500px] sm:min-h-[550px] md:h-[700px] bg-gradient-to-r from-[#fdeee0] via-[#fefbf0] to-[#fce8e8] overflow-hidden">
//       <div className="absolute inset-0">
//         <img
//           className="w-full h-full object-cover opacity-30"
//           src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
//           alt="Traditional Rajasthani houses with modern city buildings"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#752e2f]/70 via-[#742d2d]/60 to-transparent"></div>
//       </div>

//       <div className="relative container mx-auto px-4 h-full flex items-center py-12 sm:py-16 md:py-0">
//         <div className="max-w-4xl w-full">
//           <div className="mb-4 sm:mb-6">
//             <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight">
//               Your Trusted Property & Registry Partner in Bhilwara
//             </h1>
//             <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#fcf5d9] mb-4 sm:mb-6 font-semibold">
//               आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
//             </h2>
//           </div>

//           <p className="text-base sm:text-lg md:text-xl text-[#fefbf0] mb-2 sm:mb-3 max-w-2xl">
//             We make buying, selling, and paperwork simple
//           </p>
//           <p className="text-sm sm:text-base md:text-lg text-[#fcf5d9] mb-6 sm:mb-8 max-w-2xl">
//             प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <button className="bg-[#d9543f] hover:bg-[#b54035] text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 sm:gap-3">
//               <Handshake size={18} className="sm:w-5 sm:h-5" />
//               Get Property Help
//             </button>
//             <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d9543f] px-5 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all flex items-center justify-center gap-2 sm:gap-3">
//               <Phone size={18} className="sm:w-5 sm:h-5" />
//               प्रॉपर्टी सहायता लें
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Stats - Responsive */}
//       <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-auto">
//         <div className="flex flex-row justify-around sm:justify-center sm:space-x-6 md:space-x-8 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl">
//           <div className="text-center">
//             <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#d9543f]">15+</div>
//             <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Years Experience</div>
//           </div>
//           <div className="text-center sm:border-l border-gray-300 sm:pl-6 md:pl-8">
//             <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#cc3f3f]">500+</div>
//             <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Happy Clients</div>
//           </div>
//           <div className="text-center sm:border-l border-gray-300 sm:pl-6 md:pl-8">
//             <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">100%</div>
//             <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Success Rate</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Handshake, Phone } from "lucide-react";



export default function HeroSection() {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-[700px] bg-gradient-to-r from-[#fdeee0] via-[#fefbf0] to-[#fce8e8] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
          alt="Traditional Rajasthani houses with modern city buildings"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#752e2f]/70 via-[#742d2d]/60 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center py-6 sm:py-8 md:py-0">
        <div className="max-w-4xl w-full">
          <div className="mb-3 sm:mb-4 md:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
              Your Trusted Property & Registry Partner in Bhilwara
            </h1>
            <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-[#fcf5d9] mb-3 sm:mb-4 md:mb-6 font-semibold">
              आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-[#fefbf0] mb-1 sm:mb-2 md:mb-3 max-w-2xl">
            We make buying, selling, and paperwork simple
          </p>
          <p className="text-[10px] sm:text-xs md:text-base lg:text-lg text-[#fcf5d9] mb-3 sm:mb-4 md:mb-8 max-w-2xl">
            प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <button className="bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] hover:from-[#cc3f3f] hover:to-[#b54035] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              <Handshake size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
              <span className="whitespace-nowrap">Get Property Help</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#cc3f3f] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all flex items-center justify-center gap-2">
              <Phone size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
              <span className="whitespace-nowrap">प्रॉपर्टी सहायता लें</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats - Responsive */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 w-[96%] sm:w-[90%] md:w-auto">
        <div className="flex flex-row justify-around sm:justify-center sm:gap-4 md:gap-6 lg:gap-8 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-2xl">
          <div className="text-center flex-1 sm:flex-none">
            <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-[#cc3f3f]">15+</div>
            <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-gray-600 mt-0.5">
              Years<br className="sm:hidden" /> Experience
            </div>
          </div>
          <div className="text-center flex-1 sm:flex-none sm:border-l border-gray-300 sm:pl-4 md:pl-6 lg:pl-8">
            <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-[#cc3f3f]">500+</div>
            <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-gray-600 mt-0.5">
              Happy<br className="sm:hidden" /> Clients
            </div>
          </div>
          <div className="text-center flex-1 sm:flex-none sm:border-l border-gray-300 sm:pl-4 md:pl-6 lg:pl-8">
            <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-green-600">100%</div>
            <div className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-gray-600 mt-0.5">
              Success<br className="sm:hidden" /> Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}