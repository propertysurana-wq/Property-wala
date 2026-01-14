// import {
//   ArrowLeftRight,
//   FileText,
//   Award,
//   Stamp,
//   Scale3d,
//   Search,
//   Check,
// } from "lucide-react";
// import Link from "next/link";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: ArrowLeftRight,
//       title: "Property Buy & Sell Deals",
//       hindiTitle: "प्रॉपर्टी खरीद और बिक्री सहायता",
//       description:
//         "Complete assistance in property buying and selling with legal verification and best price negotiation.",
//       features: [
//         "Market Price Analysis",
//         "Legal Documentation",
//         "Negotiation Support",
//       ],
//       route: "/property-buy-sell",
//     },
//     {
//       icon: FileText,
//       title: "Nakal & Map Extraction",
//       hindiTitle: "नक़ल और नक्शा निकालना",
//       description:
//         "Quick and accurate extraction of property records, maps, and official documents from government offices.",
//       features: ["Revenue Records", "Survey Maps", "Mutation Records"],
//       route: "/nakal-map-extraction",
//     },
//     {
//       icon: Award,
//       title: "Patta Creation",
//       hindiTitle: "पट्टा बनवाना",
//       description:
//         "Complete patta creation services with proper verification and government approval process.",
//       features: [
//         "Document Preparation",
//         "Government Liaison",
//         "Quick Processing",
//       ],
//       route: "/patta-creation",
//     },
//     {
//       icon: Stamp,
//       title: "Property Registry Assistance",
//       hindiTitle: "प्रॉपर्टी रजिस्ट्री सेवा",
//       description:
//         "End-to-end registry services with stamp duty calculation and registration process management.",
//       features: [
//         "Stamp Duty Calculation",
//         "Registration Process",
//         "Document Verification",
//       ],
//       route: "/property-registry",
//     },
//     {
//       icon: Scale3d,
//       title: "Legal Consultancy Support",
//       hindiTitle: "कानूनी सलाह सहयोग",
//       description:
//         "Expert legal advice on property matters, dispute resolution, and documentation guidance.",
//       features: [
//         "Legal Documentation",
//         "Dispute Resolution",
//         "Expert Consultation",
//       ],
//       route: "/legal-consultancy",
//     },
//     {
//       icon: Search,
//       title: "Property Verification",
//       hindiTitle: "प्रॉपर्टी जांच सेवा",
//       description:
//         "Comprehensive property verification services to ensure clear title and legal compliance.",
//       features: ["Title Verification", "Encumbrance Check", "Legal Clearance"],
//       route: "/property-verification",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Our Complete Property Services
//           </h2>
//           <p className="text-xl text-[#b54035] mb-2 font-semibold">
//             हमारी संपूर्ण प्रॉपर्टी सेवाएं
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const bgColorFrom =
//               index % 2 === 0
//                 ? "from-[#fefdf9] to-[#fef7f0]"
//                 : "from-[#fefdf9] to-[#fdf2f2]";
//             const borderColor =
//               index % 2 === 0 ? "border-[#fdeee0]" : "border-[#fce8e8]";
//             const iconBgFrom =
//               index % 2 === 0
//                 ? "from-[#e8734a] to-[#cc3f3f]"
//                 : "from-[#e15e5e] to-[#d9543f]";
//             const textColor =
//               index % 2 === 0 ? "text-[#b54035]" : "text-[#a73232]";

//             return (
//               <Link
//                 key={index}
//                 href={service.route}
//                 className={`group bg-gradient-to-br ${bgColorFrom} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${borderColor} cursor-pointer block`}
//               >
//                 {/* <div
//                  key={index}
//                  className={`group bg-gradient-to-br ${bgColorFrom} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${borderColor}`}
//                > */}
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${iconBgFrom} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
//                 >
//                   <service.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className={`text-lg ${textColor} mb-4 font-semibold`}>
//                   {service.hindiTitle}
//                 </p>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <ul className="space-y-2 text-sm text-gray-600">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-center">
//                       <Check className="text-green-500 mr-2" size={18} />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 {/* </div> */}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
// import { MapPin, Home, ShieldCheck } from 'lucide-react';

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <MapPin className="w-8 h-8 text-teal-600" />,
//       number: "01",
//       title: "Search Property",
//       subTitle: "सत्यापित संपत्ति",
//       description: "Explore our curated list of verified properties to find your dream home quickly."
//     },
//     {
//       icon: <Home className="w-8 h-8 text-teal-600" />,
//       number: "02",
//       title: "Meet the Owner",
//       subTitle: "सीधे मालिक से बात",
//       description: "Connect directly. No hidden fees, no middlemen, just transparent conversations."
//     },
//     {
//       icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
//       number: "03",
//       title: "Secure Deal",
//       subTitle: "सुरक्षित और भरोसेमंद",
//       description: "Close the deal with complete peace of mind using our secure verification process."
//     }
//   ];

//   return (
//     <section className="bg-white py-24 font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//             How It Works
//           </h2>
//           <p className="text-lg text-gray-500 max-w-2xl mx-auto">
//             A simple three-step process to get you into your new home.
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          
//           {/* Connector Line (Desktop Only) */}
//           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-100 border-t-2 border-dashed border-gray-200 -z-0" />

//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center text-center relative z-10 group">
              
//               {/* Icon Circle */}
//               <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
//                 {/* Outer Glow */}
//                 <div className="absolute inset-0 bg-teal-50 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500 ease-out" />
//                 {/* Inner White Circle */}
//                 <div className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-50 group-hover:-translate-y-1 transition-transform duration-300">
//                   {step.icon}
//                 </div>
//                 {/* Floating Number */}
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
//                   {step.number}
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="px-4">
//                 <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
//                   {step.title}
//                 </h3>
//                 <span className="text-sm font-medium text-gray-400 mb-3 block">
//                   {step.subTitle}
//                 </span>
//                 <p className="text-gray-500 leading-relaxed text-base">
//                   {step.description}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import { MapPin, Home, ShieldCheck } from 'lucide-react';

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <MapPin className="w-8 h-8" style={{ color: '#E85D4A' }} />,
//       number: "01",
//       title: "प्रॉपर्टी खोजें",
//       subTitle: "सत्यापित संपत्ति",
//       description: "अपने सपनों का घर जल्दी खोजने के लिए हमारी सत्यापित संपत्तियों की सूची देखें।"
//     },
//     {
//       icon: <Home className="w-8 h-8" style={{ color: '#E85D4A' }} />,
//       number: "02",
//       title: "मालिक से मिलें",
//       subTitle: "सीधे मालिक से बात",
//       description: "सीधे संपर्क करें। कोई छिपी हुई फीस नहीं, कोई बिचौलिया नहीं, केवल पारदर्शी बातचीत।"
//     },
//     {
//       icon: <ShieldCheck className="w-8 h-8" style={{ color: '#E85D4A' }} />,
//       number: "03",
//       title: "सुरक्षित डील",
//       subTitle: "सुरक्षित और भरोसेमंद",
//       description: "हमारी सुरक्षित सत्यापन प्रक्रिया का उपयोग करके पूर्ण मन की शांति के साथ सौदा पूरा करें।"
//     }
//   ];

//   return (
//     <section className="bg-white py-24 font-sans overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <div 
//               className="w-2 h-2 rounded-full"
//               style={{ backgroundColor: '#E85D4A' }}
//             />
//             <span 
//               className="font-bold uppercase text-sm tracking-wide"
//               style={{ color: '#E85D4A' }}
//             >
//               कैसे काम करता है
//             </span>
//             <div 
//               className="w-2 h-2 rounded-full"
//               style={{ backgroundColor: '#E85D4A' }}
//             />
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//             यह कैसे <span style={{ color: '#E85D4A' }}>काम करता है</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
//             आपको आपके नए घर में पहुंचाने के लिए एक सरल तीन-चरणीय प्रक्रिया
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          
//           {/* Connector Line (Desktop Only) */}
//           <div 
//             className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] border-t-2 border-dashed -z-0"
//             style={{ borderColor: 'rgba(232, 93, 74, 0.3)' }}
//           />

//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center text-center relative z-10 group">
              
//               {/* Icon Circle */}
//               <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
//                 {/* Outer Glow */}
//                 <div 
//                   className="absolute inset-0 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
//                   style={{ backgroundColor: 'rgba(232, 93, 74, 0.1)' }}
//                 />
//                 {/* Inner White Circle */}
//                 <div className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 group-hover:-translate-y-1 transition-transform duration-300">
//                   {step.icon}
//                 </div>
//                 {/* Floating Number */}
//                 <div 
//                   className="absolute -top-2 -right-2 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md"
//                   style={{ backgroundColor: '#E85D4A' }}
//                 >
//                   {step.number}
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="px-4">
//                 <h3 
//                   className="text-xl font-bold text-gray-900 mb-2 transition-colors"
//                   style={{
//                     color: '#1f2937'
//                   }}
//                   onMouseEnter={(e) => e.currentTarget.style.color = '#E85D4A'}
//                   onMouseLeave={(e) => e.currentTarget.style.color = '#1f2937'}
//                 >
//                   {step.title}
//                 </h3>
//                 <span 
//                   className="text-sm font-medium mb-3 block"
//                   style={{ color: '#9ca3af' }}
//                 >
//                   {step.subTitle}
//                 </span>
//                 <p className="text-gray-600 leading-relaxed text-base">
//                   {step.description}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <p className="text-gray-600 text-base font-medium mb-4">
//             आज ही शुरू करें और अपना सपनों का घर पाएं
//           </p>
//           <button 
//             className="px-8 py-3 text-white font-semibold rounded-full shadow-lg transition-all transform hover:scale-105"
//             style={{ backgroundColor: '#E85D4A' }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d94d3a'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E85D4A'}
//           >
//             अभी शुरू करें
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
// import { MapPin, Home, ShieldCheck, ArrowRight } from 'lucide-react';

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       number: "01",
//       title: "प्रॉपर्टी खोजें",
//       subTitle: "सत्यापित संपत्ति",
//       description: "अपने सपनों का घर जल्दी खोजने के लिए हमारी सत्यापित संपत्तियों की सूची देखें।"
//     },
//     {
//       icon: <Home className="w-6 h-6" />,
//       number: "02",
//       title: "मालिक से मिलें",
//       subTitle: "सीधे मालिक से बात",
//       description: "सीधे संपर्क करें। कोई छिपी हुई फीस नहीं, कोई बिचौलिया नहीं, केवल पारदर्शी बातचीत।"
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6" />,
//       number: "03",
//       title: "सुरक्षित डील",
//       subTitle: "सुरक्षित और भरोसेमंद",
//       description: "हमारी सुरक्षित सत्यापन प्रक्रिया का उपयोग करके पूर्ण मन की शांति के साथ सौदा पूरा करें।"
//     }
//   ];

//   return (
//     <section className="bg-gray-50 py-20 md:py-28 font-sans">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#E85D4A] animate-pulse" />
//             <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#E85D4A]">
//               कैसे काम करता है
//             </span>
//           </div>
          
//           <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
//             अपना सपनों का घर पाने का <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E85D4A] to-[#d94d3a]">
//               सरल तरीका
//             </span>
//           </h2>
          
//           <p className="text-gray-600 text-lg font-light leading-relaxed">
//             बस तीन आसान चरणों में अपनी नई प्रॉपर्टी बुक करें। कोई झंझट नहीं, कोई बिचौलिया नहीं।
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
//           {/* Connecting Line (Desktop) */}
//           <div className="hidden md:block absolute top-16 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent z-0" />

//           {steps.map((step, index) => (
//             <div 
//               key={index} 
//               className="relative z-10 group"
//             >
//               <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 h-full flex flex-col">
                
//                 {/* Icon & Number Row */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="relative">
//                     {/* Glow Effect */}
//                     <div className="absolute inset-0 bg-[#E85D4A] opacity-10 rounded-full blur-md group-hover:opacity-20 transition-opacity" />
//                     {/* Icon Container */}
//                     <div className="relative w-12 h-12 bg-[#E85D4A] text-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 transform group-hover:scale-110 transition-transform duration-300">
//                       {step.icon}
//                     </div>
//                   </div>
//                   <span className="font-mono text-2xl font-bold text-gray-200 group-hover:text-[#E85D4A] transition-colors">
//                     {step.number}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#E85D4A] transition-colors">
//                     {step.title}
//                   </h3>
//                   <span className="text-sm font-semibold text-gray-500 mb-3 block tracking-wide uppercase">
//                     {step.subTitle}
//                   </span>
//                   <p className="text-gray-600 leading-relaxed text-sm mb-6">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Decorative Arrow (appears on hover) */}
//                 <div className="mt-auto flex items-center text-[#E85D4A] opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-sm font-semibold">
//                   आगे बढ़ें <ArrowRight className="w-4 h-4 ml-1" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex flex-col items-center gap-4">
//             <p className="text-gray-800 text-lg font-medium">
//               तैयार हैं अपना नया घर ढूंढने के लिए?
//             </p>
//             <button 
//               className="group relative px-8 py-4 bg-[#E85D4A] text-white font-bold rounded-full overflow-hidden shadow-lg shadow-orange-200 transition-all hover:shadow-orange-300 hover:-translate-y-1"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 अभी शुरू करें
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <div className="absolute inset-0 bg-[#d94d3a] opacity-0 group-hover:opacity-100 transition-opacity" />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
// 
// import { MapPin, Home, ShieldCheck, ArrowRight } from 'lucide-react';

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       number: "01",
//       title: "प्रॉपर्टी खोजें",
//       subTitle: "सत्यापित संपत्ति",
//       description: "अपने सपनों का घर जल्दी खोजने के लिए हमारी सत्यापित संपत्तियों की सूची देखें।"
//     },
//     {
//       icon: <Home className="w-6 h-6" />,
//       number: "02",
//       title: "मालिक से मिलें",
//       subTitle: "सीधे मालिक से बात",
//       description: "सीधे संपर्क करें। कोई छिपी हुई फीस नहीं, कोई बिचौलिया नहीं, केवल पारदर्शी बातचीत।"
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6" />,
//       number: "03",
//       title: "सुरक्षित डील",
//       subTitle: "सुरक्षित और भरोसेमंद",
//       description: "हमारी सुरक्षित सत्यापन प्रक्रिया का उपयोग करके पूर्ण मन की शांति के साथ सौदा पूरा करें।"
//     }
//   ];

//   return (
//     <section 
//       className="py-20 md:py-28 font-sans"
//       style={{ backgroundColor: '#ffffff' }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div 
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6"
//             style={{ 
//               backgroundColor: 'rgba(204, 63, 63, 0.1)',
//               borderColor: 'rgba(204, 63, 63, 0.2)'
//             }}
//           >
//             <span 
//               className="w-2 h-2 rounded-full animate-pulse" 
//               style={{ backgroundColor: '#cc3f3f' }}
//             />
//             <span 
//               className="text-xs md:text-sm font-bold uppercase tracking-wider"
//               style={{ color: '#cc3f3f' }}
//             >
//               कैसे काम करता है
//             </span>
//           </div>
          
//           <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
//             अपना सपनों का घर पाने का <br />
//             <span 
//               className="text-transparent bg-clip-text"
//               style={{ 
//                 backgroundImage: 'linear-gradient(to right, #cc3f3f, #b33636)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent'
//               }}
//             >
//               सरल तरीका
//             </span>
//           </h2>
          
//           <p className="text-gray-600 text-lg font-light leading-relaxed">
//             बस तीन आसान चरणों में अपनी नई प्रॉपर्टी बुक करें। कोई झंझट नहीं, कोई बिचौलिया नहीं।
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
//           {/* Connecting Line (Desktop) */}
//           <div 
//             className="hidden md:block absolute top-16 left-8 right-8 h-0.5 z-0"
//             style={{ 
//               backgroundImage: 'linear-gradient(to right, transparent, rgba(204, 63, 63, 0.3), transparent)' 
//             }}
//           />

//           {steps.map((step, index) => (
//             <div 
//               key={index} 
//               className="relative z-10 group"
//             >
//               <div 
//                 className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border h-full flex flex-col"
//                 style={{ borderColor: '#f3f4f6' }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = 'rgba(204, 63, 63, 0.3)';
//                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(204, 63, 63, 0.2)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = '#f3f4f6';
//                   e.currentTarget.style.boxShadow = '';
//                 }}
//               >
                
//                 {/* Icon & Number Row */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="relative">
//                     {/* Glow Effect */}
//                     <div 
//                       className="absolute inset-0 rounded-full blur-md group-hover:opacity-20 transition-opacity"
//                       style={{ 
//                         backgroundColor: '#cc3f3f',
//                         opacity: 0.1 
//                       }}
//                     />
//                     {/* Icon Container */}
//                     <div 
//                       className="relative w-12 h-12 text-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
//                       style={{ 
//                         backgroundColor: '#cc3f3f',
//                         boxShadow: '0 10px 15px -3px rgba(204, 63, 63, 0.3)'
//                       }}
//                     >
//                       {step.icon}
//                     </div>
//                   </div>
//                   <span 
//                     className="font-mono text-2xl font-bold text-gray-200 transition-colors"
//                     style={{
//                       color: '#e5e7eb'
//                     }}
//                     onMouseEnter={(e) => e.currentTarget.style.color = '#cc3f3f'}
//                     onMouseLeave={(e) => e.currentTarget.style.color = '#e5e7eb'}
//                   >
//                     {step.number}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3 
//                     className="text-xl font-bold text-gray-900 mb-1 transition-colors"
//                     onMouseEnter={(e) => e.currentTarget.style.color = '#cc3f3f'}
//                     onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
//                   >
//                     {step.title}
//                   </h3>
//                   <span className="text-sm font-semibold text-gray-500 mb-3 block tracking-wide uppercase">
//                     {step.subTitle}
//                   </span>
//                   <p className="text-gray-600 leading-relaxed text-sm mb-6">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Decorative Arrow (appears on hover) */}
//                 <div 
//                   className="mt-auto flex items-center opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-sm font-semibold"
//                   style={{ color: '#cc3f3f' }}
//                 >
//                   आगे बढ़ें <ArrowRight className="w-4 h-4 ml-1" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex flex-col items-center gap-4">
//             <p className="text-gray-800 text-lg font-medium">
//               तैयार हैं अपना नया घर ढूंढने के लिए?
//             </p>
//             <button 
//               className="group relative px-8 py-4 text-white font-bold rounded-full overflow-hidden shadow-lg transition-all hover:-translate-y-1"
//               style={{ 
//                 backgroundColor: '#cc3f3f',
//                 boxShadow: '0 10px 15px -3px rgba(204, 63, 63, 0.3)'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#b33636';
//                 e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(204, 63, 63, 0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#cc3f3f';
//                 e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(204, 63, 63, 0.3)';
//               }}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 अभी शुरू करें
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </button>
//           </div>
//         </div>

//       </div>  
//     </section>
//   );
// }
import {
  ArrowLeftRight,
  FileText,
  Award,
  Stamp,
  Scale3d,
  Search,
  Check,
} from "lucide-react";
import Link from "next/link";


export default function ServicesSection() {
  const services = [
    {
      icon: ArrowLeftRight,
      title: "Property Buy & Sell Deals",
      hindiTitle: "प्रॉपर्टी खरीद और बिक्री सहायता",
      description:
        "Complete assistance in property buying and selling with legal verification and best price negotiation.",
      features: [
        "Market Price Analysis",
        "Legal Documentation",
        "Negotiation Support",
      ],
      route: "/property-buy-sell",
    },
    {
      icon: FileText,
      title: "Nakal & Map Extraction",
      hindiTitle: "नक़ल और नक्शा निकालना",
      description:
        "Quick and accurate extraction of property records, maps, and official documents from government offices.",
      features: ["Revenue Records", "Survey Maps", "Mutation Records"],
      route: "/nakal-map-extraction",
    },
    {
      icon: Award,
      title: "Patta Creation",
      hindiTitle: "पट्टा बनवाना",
      description:
        "Complete patta creation services with proper verification and government approval process.",
      features: [
        "Document Preparation",
        "Government Liaison",
        "Quick Processing",
      ],
      route: "/patta-creation",
    },
    {
      icon: Stamp,
      title: "Property Registry Assistance",
      hindiTitle: "प्रॉपर्टी रजिस्ट्री सेवा",
      description:
        "End-to-end registry services with stamp duty calculation and registration process management.",
      features: [
        "Stamp Duty Calculation",
        "Registration Process",
        "Document Verification",
      ],
      route: "/property-registry",
    },
    {
      icon: Scale3d,
      title: "Legal Consultancy Support",
      hindiTitle: "कानूनी सलाह सहयोग",
      description:
        "Expert legal advice on property matters, dispute resolution, and documentation guidance.",
      features: [
        "Legal Documentation",
        "Dispute Resolution",
        "Expert Consultation",
      ],
      route: "/legal-consultancy",
    },
    {
      icon: Search,
      title: "Property Verification",
      hindiTitle: "प्रॉपर्टी जांच सेवा",
      description:
        "Comprehensive property verification services to ensure clear title and legal compliance.",
      features: ["Title Verification", "Encumbrance Check", "Legal Clearance"],
      route: "/property-verification",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefdf9] to-white">
      
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Complete Property Services
            </h2>
            <p className="text-xl text-[#b54035] mb-2 font-semibold">
              हमारी संपूर्ण प्रॉपर्टी सेवाएं
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const bgColorFrom =
                index % 2 === 0
                  ? "from-[#fefdf9] to-[#fef7f0]"
                  : "from-[#fefdf9] to-[#fdf2f2]";
              const borderColor =
                index % 2 === 0 ? "border-[#fdeee0]" : "border-[#fce8e8]";
              const iconBgFrom =
                index % 2 === 0
                  ? "from-[#e8734a] to-[#cc3f3f]"
                  : "from-[#e15e5e] to-[#d9543f]";
              const textColor =
                index % 2 === 0 ? "text-[#b54035]" : "text-[#a73232]";

              return (
                <Link
                  key={index}
                  href={service.route}
                  className={`group bg-gradient-to-br ${bgColorFrom} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${borderColor} cursor-pointer block`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${iconBgFrom} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}
                  >
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className={`text-lg ${textColor} mb-4 font-semibold`}>
                    {service.hindiTitle}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="text-green-500 mr-2 flex-shrink-0" size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    
    </div>
  );
}