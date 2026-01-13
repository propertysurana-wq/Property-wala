// // pages/services/nakal-map-extraction.tsx

// 'use client'
// import { FileText, Check, Phone, Mail, MapPin, ArrowRight, Download, Clock, FileSearch, Building, ChevronDown, Shield } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function NakalMapExtractionPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const documents = [
//     {
//       icon: FileText,
//       title: "Khatauni Nakal",
//       hindiTitle: "खतौनी नकल",
//       description: "Official copy of land ownership records showing current owner details and land measurements."
//     },
//     {
//       icon: Download,
//       title: "Khasra Map",
//       hindiTitle: "खसरा नक्शा",
//       description: "Detailed survey map showing plot boundaries, adjacent lands, and geographical features."
//     },
//     {
//       icon: FileSearch,
//       title: "B1 Khasra",
//       hindiTitle: "बी-1 खसरा",
//       description: "Revenue record showing land details, crop information, and irrigation sources."
//     },
//     {
//       icon: Building,
//       title: "Property Map",
//       hindiTitle: "संपत्ति नक्शा",
//       description: "Official property layout map from municipal or development authority records."
//     }
//   ];

//   const services = [
//     "Khatauni Copy (खतौनी नकल)",
//     "Khasra Map (खसरा नक्शा)",
//     "B1 Khasra Extract",
//     "Mutation Records (दाखिल खारिज)",
//     "Land Measurement Records",
//     "Revenue Court Records",
//     "Tehsil Records",
//     "Old Property Records"
//   ];

//   const process = [
//     { step: 1, title: "Document Request", description: "Share your property details - Khasra number, village, tehsil, and district." },
//     { step: 2, title: "Fee Estimation", description: "We provide transparent cost estimation including government fees." },
//     { step: 3, title: "Processing", description: "Our team visits concerned offices and applies for required documents." },
//     { step: 4, title: "Verification", description: "Documents are verified for accuracy and completeness." },
//     { step: 5, title: "Delivery", description: "Receive certified copies at your doorstep or digitally." }
//   ];

//   const faqs = [
//     {
//       question: "What information do I need to provide for Nakal extraction?",
//       answer: "You need to provide the Khasra number, village name, tehsil, and district. If you have the owner's name or previous sale deed, it helps in faster processing."
//     },
//     {
//       question: "How long does it take to get property records?",
//       answer: "Standard processing takes 3-7 working days. For urgent requirements, we offer express services that can deliver within 24-48 hours (subject to availability)."
//     },
//     {
//       question: "Are the documents legally valid?",
//       answer: "Yes, all documents we provide are official certified copies obtained from government offices and are legally valid for all purposes including bank loans, registration, and court proceedings."
//     },
//     {
//       question: "Can you extract old/historical property records?",
//       answer: "Yes, we can help extract historical records going back several decades. Old records may require additional time and may need visits to central record rooms."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-24 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-[#e15e5e] rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e8734a] rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <Link href="/#services" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
//             <ArrowRight className="rotate-180 mr-2" size={20} />
//             Back to Services
//           </Link>
          
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="flex-1">
//               <div className="w-20 h-20 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-2xl flex items-center justify-center mb-6">
//                 <FileText className="text-white" size={40} />
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                 Nakal & Map Extraction
//               </h1>
//               <p className="text-2xl text-[#e8734a] font-semibold mb-6">
//                 नक़ल और नक्शा निकालना
//               </p>
//               <p className="text-xl text-gray-300 mb-8 max-w-2xl">
//                 Quick and accurate extraction of property records, maps, and official documents 
//                 from government revenue offices. Get certified copies delivered to your doorstep.
//               </p>
              
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <div className="flex items-center text-gray-300">
//                   <Clock className="mr-2 text-[#e8734a]" size={20} />
//                   <span>3-7 Days Processing</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Shield className="mr-2 text-[#e8734a]" size={20} />
//                   <span>Certified Copies</span>
//                 </div>
//               </div>
              
//               <div className="flex flex-wrap gap-4">
//                 <a href="tel:+919876543210" className="bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#e8734a]/30 transition-all flex items-center">
//                   <Phone className="mr-2" size={20} />
//                   Call Now
//                 </a>
//                 <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition-all">
//                   Request Documents
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex-1 max-w-md">
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold text-white mb-6">Request Documents</h3>
//                 <form className="space-y-4">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Khasra Number"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Village / Tehsil / District"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   />
//                   <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-400 focus:outline-none focus:border-[#e8734a]">
//                     <option value="">Select Document Type</option>
//                     <option value="khatauni">Khatauni Nakal</option>
//                     <option value="khasra">Khasra Map</option>
//                     <option value="b1">B1 Khasra</option>
//                     <option value="mutation">Mutation Records</option>
//                     <option value="other">Other</option>
//                   </select>
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
//                   >
//                     Submit Request
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Document Types */}
//       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fdf2f2]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Documents We Extract
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               जो दस्तावेज़ हम निकालते हैं
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {documents.map((doc, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#fce8e8] text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-xl flex items-center justify-center mb-4 mx-auto">
//                   <doc.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">{doc.title}</h3>
//                 <p className="text-[#a73232] font-semibold mb-3">{doc.hindiTitle}</p>
//                 <p className="text-gray-600 text-sm">{doc.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* All Services List */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Complete Document Services
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               संपूर्ण दस्तावेज़ सेवाएं
//             </p>
//           </div>
          
//           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
//             {services.map((service, index) => (
//               <div key={index} className="flex items-center bg-gradient-to-r from-[#fefdf9] to-[#fef7f0] p-4 rounded-xl border border-[#fdeee0]">
//                 <Check className="text-green-500 mr-3 flex-shrink-0" size={24} />
//                 <span className="font-medium text-gray-700">{service}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fef7f0]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               How It Works
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               यह कैसे काम करता है
//             </p>
//           </div>
          
//           <div className="max-w-5xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//               {process.map((item, index) => (
//                 <div key={index} className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
//                     {item.step}
//                   </div>
//                   <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               अक्सर पूछे जाने वाले प्रश्न
//             </p>
//           </div>
          
//           <div className="max-w-3xl mx-auto space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="font-semibold text-gray-800">{faq.question}</span>
//                   <ChevronDown className={`text-[#e15e5e] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} size={24} />
//                 </button>
//                 {openFaq === index && (
//                   <div className="px-6 pb-6 text-gray-600">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-[#e15e5e] to-[#d9543f]">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Need Property Documents?
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Get your Nakal, Maps, and Revenue Records quickly and hassle-free.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a href="tel:+919876543210" className="bg-white text-[#e15e5e] px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
//               <Phone className="mr-2" size={20} />
//               +91 98765 43210
//             </a>
//             <a href="mailto:info@example.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#e15e5e] transition-all flex items-center">
//               <Mail className="mr-2" size={20} />
//               Email Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// 'use client'
// import { FileText, Check, Phone, Mail, MapPin, ArrowRight, Download, Clock, FileSearch, Building, ChevronDown, ShieldCheck, Printer } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Footer from "@/components/footer/footer";
// import Header from "@/components/header/header";
// export default function NakalMapExtractionPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const documents = [
//     {
//       icon: FileText,
//       title: "Khatauni Nakal",
//       hindiTitle: "खतौनी नकल",
//       description: "जमीन के मालिकाना हक का सरकारी रिकॉर्ड (Record of Rights).",
//       color: "bg-emerald-100 text-emerald-700"
//     },
//     {
//       icon: MapPin,
//       title: "Khasra Map",
//       hindiTitle: "खसरा नक्शा",
//       description: "जमीन का नक्शा जिसमें खेत की सीमा और माप होती है।",
//       color: "bg-slate-100 text-slate-700"
//     },
//     {
//       icon: FileSearch,
//       title: "B1 Khasra",
//       hindiTitle: "बी-1 खसरा",
//       description: "फसल और सिंचाई का रिकॉर्ड, लोन और मुआवजे के लिए जरूरी।",
//       color: "bg-emerald-100 text-emerald-700"
//     },
//     {
//       icon: Building,
//       title: "Property Map",
//       hindiTitle: "संपत्ति नक्शा",
//       description: "मकान या प्लॉट का नक्शा जो नगर निगम या अथॉरिटी से पास हो।",
//       color: "bg-slate-100 text-slate-700"
//     }
//   ];

//   const services = [
//     "Khatauni Copy (खतौनी नकल)",
//     "Khasra Map (खसरा नक्शा)",
//     "B1 Khasra Extract",
//     "Mutation Records (दाखिल खारिज)",
//     "Land Measurement Records",
//     "Revenue Court Records",
//     "Tehsil Records",
//     "Old Property Records"
//   ];

//   const process = [
//     { step: 1, title: "Request", description: "Tell us details: Khasra No., Village." },
//     { step: 2, title: "Processing", description: "We visit Tehsil/Govt offices." },
//     { step: 3, title: "Verify", description: "Checking accuracy of records." },
//     { step: 4, title: "Delivery", description: "Get certified copies delivered." }
//   ];

//   const faqs = [
//     {
//       question: "नकल निकलवाने के लिए क्या जानकारी चाहिए?",
//       englishQuestion: "Info needed for Nakal?",
//       answer: "खसरा नंबर, गांव का नाम, तहसील और जिला। अगर मालिक का नाम पता हो तो और आसानी होगी।"
//     },
//     {
//       question: "कितना समय लगता है?",
//       englishQuestion: "Time taken?",
//       answer: "आमतौर पर 3-7 दिन। अगर अर्जेंट है तो हम 24-48 घंटे में भी कोशिश कर सकते हैं।"
//     },
//     {
//       question: "क्या ये दस्तावेज कानूनी रूप से मान्य हैं?",
//       englishQuestion: "Are documents valid?",
//       answer: "जी हाँ, हम सिर्फ सरकारी दफ्तर से सर्टिफाइड (पक्की) नकल ही निकलवा कर देते हैं जो कोर्ट और बैंक में मान्य है।"
//     },
//     {
//       question: "क्या पुराने रिकॉर्ड भी मिल सकते हैं?",
//       englishQuestion: "Old records available?",
//       answer: "जी हाँ, हम पुराने जमाबंदी और रिकॉर्ड भी निकलवा सकते हैं, इसमें थोड़ा समय ज्यादा लग सकता है।"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header/>
//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-slate-900 py-24 overflow-hidden">
//         {/* Abstract Pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
//           <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-700 rounded-full blur-[100px]"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <Link href="/#services" className="inline-flex items-center text-emerald-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider">
//             <ArrowRight className="rotate-180 mr-2" size={16} />
//             Back to Services
//           </Link>
          
//           <div className="flex flex-col lg:flex-row items-center gap-16">
            
//             {/* Left Content */}
//             <div className="flex-1 text-center lg:text-left">
//               <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
//                 <Printer className="w-4 h-4 text-emerald-400" />
//                 <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Fast Document Service</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
//                 नक़ल और नक्शा <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">घर बैठे प्राप्त करें</span>
//               </h1>
              
//               <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 We extract certified property records (Nakal, Khasra, Map) directly from government revenue offices. 100% Legal & Verified.
//               </p>
              
//               <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium text-slate-300">
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <Clock className="mr-2 text-emerald-400" size={18} />
//                   <span>3-7 Days Delivery</span>
//                 </div>
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <ShieldCheck className="mr-2 text-emerald-400" size={18} />
//                   <span>Government Certified</span>
//                 </div>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a href="tel:+919876543210" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
//                   <Phone size={20} /> Call Now
//                 </a>
//                 <a href="#request" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2">
//                   <FileText size={20} /> Request Nakal
//                 </a>
//               </div>
//             </div>
            
//             {/* Right Form Card */}
//             <div id="request" className="flex-1 w-full max-w-md">
//               <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Document Request</h3>
//                 <p className="text-slate-500 mb-6 text-sm">Fill details to get your land records.</p>
                
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name</label>
//                       <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Your Name" />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone</label>
//                       <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Mobile" />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Document Type</label>
//                     <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer">
//                       <option>Select Document...</option>
//                       <option>Khatauni Nakal</option>
//                       <option>Khasra Map</option>
//                       <option>Mutation Copy</option>
//                       <option>Registry Copy</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Details</label>
//                     <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm mb-2" placeholder="Khasra No. / Khata No." />
//                     <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Village, Tehsil & District" />
//                   </div>

//                   <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2">
//                     Submit Request
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- DOCUMENT TYPES GRID --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
//               Documents We Extract
//             </h2>
//             <p className="text-emerald-600 font-bold text-lg">
//               हम ये सभी सरकारी दस्तावेज़ निकलवा सकते हैं
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {documents.map((doc, index) => (
//               <div key={index} className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center">
//                 <div className={`w-16 h-16 ${doc.color} rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:scale-110 transition-transform`}>
//                   <doc.icon size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.title}</h3>
//                 <p className="text-emerald-600 font-bold text-sm mb-3">{doc.hindiTitle}</p>
//                 <p className="text-slate-500 text-sm leading-relaxed">{doc.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FULL LIST --- */}
//       <section className="py-20 bg-emerald-50/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Complete List of Services</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {services.map((service, index) => (
//                 <div key={index} className="flex items-center bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="bg-emerald-100 p-1.5 rounded-full mr-3">
//                     <Check className="text-emerald-600 w-4 h-4" />
//                   </div>
//                   <span className="font-medium text-slate-700">{service}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROCESS STEPS --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">How It Works</h2>
//             <p className="text-slate-500 text-lg">Simple 4-Step Extraction Process</p>
//           </div>
          
//           <div className="max-w-5xl mx-auto">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//               {/* Connector Line (Desktop) */}
//               <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-0"></div>

//               {process.map((item, index) => (
//                 <div key={index} className="relative z-10 flex flex-col items-center text-center group">
//                   <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-xl border-4 border-white group-hover:bg-emerald-600 transition-colors">
//                     {item.step}
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
//                   <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- FAQ --- */}
//       <section className="py-24 bg-slate-50 border-t border-slate-200">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-slate-900 mb-2">FAQ</h2>
//             <p className="text-emerald-600 font-medium">Common Questions about Nakal</p>
//           </div>
          
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-300 transition-colors shadow-sm">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   className="w-full flex items-center justify-between p-5 text-left"
//                 >
//                   <div>
//                     <span className="font-bold text-slate-800 block text-lg">{faq.question}</span>
//                     <span className="text-xs font-bold text-emerald-600 uppercase mt-1 block">{faq.englishQuestion}</span>
//                   </div>
//                   <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
//                 </button>
//                 {openFaq === index && (
//                   <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-emerald-50/30">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER CTA --- */}
//       <section className="py-16 bg-emerald-700 text-white text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6">Need Urgent Documents?</h2>
//           <p className="text-emerald-100 text-lg mb-8">We can help you get them faster. Contact us now.</p>
//           <div className="flex justify-center gap-4">
//             <a href="tel:+919876543210" className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
//               <Phone size={20} /> +91 98765 43210
//             </a>
//           </div>
//         </div>
//       </section>
// <Footer/>
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import { Phone, FileText } from "lucide-react";
// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";

// export default function NakalMapExtractionPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     documentType: "",
//     khasraOrKhataNo: "",
//     addressDetails: ""
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/document-request", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     });

//     const result = await res.json();
//     setLoading(false);

//     if (result.success) {
//       alert("Document request submitted successfully ✅");
//       setFormData({
//         name: "",
//         phone: "",
//         documentType: "",
//         khasraOrKhataNo: "",
//         addressDetails: ""
//       });
//     } else {
//       alert(result.message || "Error");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Header />

//       <section className="py-20">
//         <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl">
//           <h2 className="text-2xl font-bold mb-2">Document Request</h2>
//           <p className="text-slate-500 mb-6">
//             Fill details to get your land records
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="w-full px-4 py-3 border rounded-xl"
//               required
//             />

//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Mobile Number"
//               className="w-full px-4 py-3 border rounded-xl"
//               required
//             />

//             <select
//               name="documentType"
//               value={formData.documentType}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-xl"
//               required
//             >
//               <option value="">Select Document</option>
//               <option>Khatauni Nakal</option>
//               <option>Khasra Map</option>
//               <option>Mutation Copy</option>
//               <option>Registry Copy</option>
//             </select>

//             <input
//               name="khasraOrKhataNo"
//               value={formData.khasraOrKhataNo}
//               onChange={handleChange}
//               placeholder="Khasra / Khata No."
//               className="w-full px-4 py-3 border rounded-xl"
//               required
//             />

//             <input
//               name="addressDetails"
//               value={formData.addressDetails}
//               onChange={handleChange}
//               placeholder="Village, Tehsil & District"
//               className="w-full px-4 py-3 border rounded-xl"
//               required
//             />

//             <button
//               disabled={loading}
//               className="w-full bg-slate-900 text-white py-4 rounded-xl hover:bg-emerald-600 transition"
//             >
//               {loading ? "Submitting..." : "Submit Request"}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <a
//               href="tel:+919876543210"
//               className="inline-flex items-center gap-2 text-emerald-600 font-bold"
//             >
//               <Phone size={18} /> Call Now
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import {
//   FileText,
//   Check,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Clock,
//   FileSearch,
//   Building,
//   ChevronDown,
//   ShieldCheck,
//   Printer,
// } from "lucide-react";
// import Link from "next/link";
// import Footer from "@/components/footer/footer";
// import Header from "@/components/header/header";

// type FormData = {
//   name: string;
//   phone: string;
//   documentType: string;
//   khasraOrKhataNo: string;
//   addressDetails: string;
// };

// export default function NakalMapExtractionPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     phone: "",
//     documentType: "",
//     khasraOrKhataNo: "",
//     addressDetails: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const documents = [
//     {
//       icon: FileText,
//       title: "Khatauni Nakal",
//       hindiTitle: "खतौनी नकल",
//       description: "जमीन के मालिकाना हक का सरकारी रिकॉर्ड (Record of Rights).",
//       color: "bg-emerald-100 text-emerald-700",
//     },
//     {
//       icon: MapPin,
//       title: "Khasra Map",
//       hindiTitle: "खसरा नक्शा",
//       description: "जमीन का नक्शा जिसमें खेत की सीमा और माप होती है।",
//       color: "bg-slate-100 text-slate-700",
//     },
//     {
//       icon: FileSearch,
//       title: "B1 Khasra",
//       hindiTitle: "बी-1 खसरा",
//       description: "फसल और सिंचाई का रिकॉर्ड, लोन और मुआवजे के लिए जरूरी।",
//       color: "bg-emerald-100 text-emerald-700",
//     },
//     {
//       icon: Building,
//       title: "Property Map",
//       hindiTitle: "संपत्ति नक्शा",
//       description: "मकान या प्लॉट का नक्शा जो नगर निगम या अथॉरिटी से पास हो।",
//       color: "bg-slate-100 text-slate-700",
//     },
//   ];

//   const services = [
//     "Khatauni Copy (खतौनी नकल)",
//     "Khasra Map (खसरा नक्शा)",
//     "B1 Khasra Extract",
//     "Mutation Records (दाखिल खारिज)",
//     "Land Measurement Records",
//     "Revenue Court Records",
//     "Tehsil Records",
//     "Old Property Records",
//   ];

//   const process = [
//     { step: 1, title: "Request", description: "Tell us details: Khasra No., Village." },
//     { step: 2, title: "Processing", description: "We visit Tehsil/Govt offices." },
//     { step: 3, title: "Verify", description: "Checking accuracy of records." },
//     { step: 4, title: "Delivery", description: "Get certified copies delivered." },
//   ];

//   const faqs = [
//     {
//       question: "नकल निकलवाने के लिए क्या जानकारी चाहिए?",
//       englishQuestion: "Info needed for Nakal?",
//       answer:
//         "खसरा नंबर, गांव का नाम, तहसील और जिला। अगर मालिक का नाम पता हो तो और आसानी होगी।",
//     },
//     {
//       question: "कितना समय लगता है?",
//       englishQuestion: "Time taken?",
//       answer: "आमतौर पर 3-7 दिन। अगर अर्जेंट है तो हम 24-48 घंटे में भी कोशिश कर सकते हैं।",
//     },
//     {
//       question: "क्या ये दस्तावेज कानूनी रूप से मान्य हैं?",
//       englishQuestion: "Are documents valid?",
//       answer:
//         "जी हाँ, हम सिर्फ सरकारी दफ्तर से सर्टिफाइड (पक्की) नकल ही निकलवा कर देते हैं जो कोर्ट और बैंक में मान्य है।",
//     },
//     {
//       question: "क्या पुराने रिकॉर्ड भी मिल सकते हैं?",
//       englishQuestion: "Old records available?",
//       answer:
//         "जी हाँ, हम पुराने जमाबंदी और रिकॉर्ड भी निकलवा सकते हैं, इसमें थोड़ा समय ज्यादा लग सकता है।",
//     },
//   ];

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/document-request", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json().catch(() => ({}));

//       if (res.ok && result?.success) {
//         alert("Document request submitted successfully ✅");
//         setFormData({
//           name: "",
//           phone: "",
//           documentType: "",
//           khasraOrKhataNo: "",
//           addressDetails: "",
//         });
//       } else {
//         alert(result?.message || "Error submitting request");
//       }
//     } catch (err) {
//       alert("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header />

//       {/* HERO */}
//       <section className="relative bg-slate-900 py-24 overflow-hidden">
//         {/* glow */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
//           <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-700 rounded-full blur-[100px]" />
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <Link
//             href="/#services"
//             className="inline-flex items-center text-emerald-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider"
//           >
//             <ArrowRight className="rotate-180 mr-2" size={16} />
//             Back to Services
//           </Link>

//           <div className="flex flex-col lg:flex-row items-center gap-16">
//             {/* Left */}
//             <div className="flex-1 text-center lg:text-left">
//               <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
//                 <Printer className="w-4 h-4 text-emerald-400" />
//                 <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">
//                   Fast Document Service
//                 </span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
//                 नक़ल और नक्शा <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
//                   घर बैठे प्राप्त करें
//                 </span>
//               </h1>

//               <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 We extract certified property records (Nakal, Khasra, Map) directly from
//                 government revenue offices. 100% Legal &amp; Verified.
//               </p>

//               <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium text-slate-300">
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <Clock className="mr-2 text-emerald-400" size={18} />
//                   <span>3-7 Days Delivery</span>
//                 </div>
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <ShieldCheck className="mr-2 text-emerald-400" size={18} />
//                   <span>Government Certified</span>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a
//                   href="tel:+919876543210"
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
//                 >
//                   <Phone size={20} /> Call Now
//                 </a>
//                 <a
//                   href="#request"
//                   className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2"
//                 >
//                   <FileText size={20} /> Request Nakal
//                 </a>
//               </div>
//             </div>

//             {/* Right Form */}
//             <div id="request" className="flex-1 w-full max-w-md">
//               <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                   Document Request
//                 </h3>
//                 <p className="text-slate-500 mb-6 text-sm">
//                   Fill details to get your land records.
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                         Name
//                       </label>
//                       <input
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         type="text"
//                         className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
//                         placeholder="Your Name"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                         Phone
//                       </label>
//                       <input
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         type="tel"
//                         className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
//                         placeholder="Mobile"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                       Document Type
//                     </label>
//                     <select
//                       name="documentType"
//                       value={formData.documentType}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer"
//                     >
//                       <option value="">Select Document...</option>
//                       <option value="Khatauni Nakal">Khatauni Nakal</option>
//                       <option value="Khasra Map">Khasra Map</option>
//                       <option value="Mutation Copy">Mutation Copy</option>
//                       <option value="Registry Copy">Registry Copy</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                       Property Details
//                     </label>
//                     <input
//                       name="khasraOrKhataNo"
//                       value={formData.khasraOrKhataNo}
//                       onChange={handleChange}
//                       required
//                       type="text"
//                       className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm mb-2"
//                       placeholder="Khasra No. / Khata No."
//                     />
//                     <input
//                       name="addressDetails"
//                       value={formData.addressDetails}
//                       onChange={handleChange}
//                       required
//                       type="text"
//                       className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
//                       placeholder="Village, Tehsil & District"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
//                   >
//                     {loading ? "Submitting..." : "Submit Request"}
//                   </button>

//                   <div className="pt-2 text-center">
//                     <a
//                       href="tel:+919876543210"
//                       className="inline-flex items-center gap-2 text-emerald-600 font-bold"
//                     >
//                       <Phone size={18} /> Call Now
//                     </a>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* DOCUMENT TYPES GRID */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
//               Documents We Extract
//             </h2>
//             <p className="text-emerald-600 font-bold text-lg">
//               हम ये सभी सरकारी दस्तावेज़ निकलवा सकते हैं
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {documents.map((doc, index) => (
//               <div
//                 key={index}
//                 className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center"
//               >
//                 <div
//                   className={`w-16 h-16 ${doc.color} rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:scale-110 transition-transform`}
//                 >
//                   <doc.icon size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-1">
//                   {doc.title}
//                 </h3>
//                 <p className="text-emerald-600 font-bold text-sm mb-3">
//                   {doc.hindiTitle}
//                 </p>
//                 <p className="text-slate-500 text-sm leading-relaxed">
//                   {doc.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FULL LIST */}
//       <section className="py-20 bg-emerald-50/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
//               Complete List of Services
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className="bg-emerald-100 p-1.5 rounded-full mr-3">
//                     <Check className="text-emerald-600 w-4 h-4" />
//                   </div>
//                   <span className="font-medium text-slate-700">{service}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
//               How It Works
//             </h2>
//             <p className="text-slate-500 text-lg">
//               Simple 4-Step Extraction Process
//             </p>
//           </div>

//           <div className="max-w-5xl mx-auto">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//               <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-0" />

//               {process.map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative z-10 flex flex-col items-center text-center group"
//                 >
//                   <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 shadow-xl border-4 border-white group-hover:bg-emerald-600 transition-colors">
//                     {item.step}
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 bg-slate-50 border-t border-slate-200">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-slate-900 mb-2">FAQ</h2>
//             <p className="text-emerald-600 font-medium">
//               Common Questions about Nakal
//             </p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-300 transition-colors shadow-sm"
//               >
//                 <button
//                   type="button"
//                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   className="w-full flex items-center justify-between p-5 text-left"
//                 >
//                   <div>
//                     <span className="font-bold text-slate-800 block text-lg">
//                       {faq.question}
//                     </span>
//                     <span className="text-xs font-bold text-emerald-600 uppercase mt-1 block">
//                       {faq.englishQuestion}
//                     </span>
//                   </div>
//                   <ChevronDown
//                     className={`text-slate-400 transition-transform duration-300 ${
//                       openFaq === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {openFaq === index && (
//                   <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-emerald-50/30">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FOOTER CTA */}
//       <section className="py-16 bg-emerald-700 text-white text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6">Need Urgent Documents?</h2>
//           <p className="text-emerald-100 text-lg mb-8">
//             We can help you get them faster. Contact us now.
//           </p>
//           <div className="flex justify-center gap-4">
//             <a
//               href="tel:+919876543210"
//               className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
//             >
//               <Phone size={20} /> +91 98765 43210
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import {
  FileText,
  Check,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  FileSearch,
  Building,
  ChevronDown,
  ShieldCheck,
  Printer,
  Download,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

type FormData = {
  name: string;
  phone: string;
  documentType: string;
  khasraOrKhataNo: string;
  addressDetails: string;
};

export default function NakalMapExtractionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    documentType: "",
    khasraOrKhataNo: "",
    addressDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const documents = [
    {
      icon: FileText,
      title: "Khatauni Nakal",
      hindiTitle: "खतौनी नकल",
      description: "जमीन के मालिकाना हक का सरकारी रिकॉर्ड।",
      englishDesc: "Official copy of land ownership records with current owner details.",
    },
    {
      icon: MapPin,
      title: "Khasra Map",
      hindiTitle: "खसरा नक्शा",
      description: "जमीन का नक्शा जिसमें खेत की सीमा और माप होती है।",
      englishDesc: "Detailed survey map showing plot boundaries and features.",
    },
    {
      icon: FileSearch,
      title: "B1 Khasra",
      hindiTitle: "बी-1 खसरा",
      description: "फसल और सिंचाई का रिकॉर्ड, लोन और मुआवजे के लिए जरूरी।",
      englishDesc: "Revenue record showing land details and crop information.",
    },
    {
      icon: Building,
      title: "Property Map",
      hindiTitle: "संपत्ति नक्शा",
      description: "मकान या प्लॉट का नक्शा जो नगर निगम या अथॉरिटी से पास हो।",
      englishDesc: "Official property layout map from municipal records.",
    },
  ];

  const services = [
    "Khatauni Copy (खतौनी नकल)",
    "Khasra Map (खसरा नक्शा)",
    "B1 Khasra Extract",
    "Mutation Records (दाखिल खारिज)",
    "Land Measurement Records",
    "Revenue Court Records",
    "Tehsil Records",
    "Old Property Records",
  ];

  const process = [
    { step: 1, title: "दस्तावेज़ अनुरोध", englishTitle: "Document Request", description: "Share property details: Khasra number, village, tehsil." },
    { step: 2, title: "शुल्क अनुमान", englishTitle: "Fee Estimation", description: "Transparent cost including government fees." },
    { step: 3, title: "प्रोसेसिंग", englishTitle: "Processing", description: "Our team visits offices and applies for documents." },
    { step: 4, title: "सत्यापन", englishTitle: "Verification", description: "Documents verified for accuracy and completeness." },
    { step: 5, title: "डिलीवरी", englishTitle: "Delivery", description: "Receive certified copies at doorstep or digitally." },
  ];

  const faqs = [
    {
      question: "नकल निकलवाने के लिए क्या जानकारी चाहिए?",
      englishQuestion: "What information is needed for Nakal?",
      answer:
        "खसरा नंबर, गांव का नाम, तहसील और जिला। अगर मालिक का नाम पता हो तो और आसानी होगी। पुरानी सेल डीड होने से प्रोसेसिंग तेज हो जाती है।",
    },
    {
      question: "कितना समय लगता है?",
      englishQuestion: "How long does it take?",
      answer: "आमतौर पर 3-7 दिन। अगर अर्जेंट है तो हम 24-48 घंटे में भी कोशिश कर सकते हैं। एक्सप्रेस सर्विस उपलब्ध है।",
    },
    {
      question: "क्या ये दस्तावेज कानूनी रूप से मान्य हैं?",
      englishQuestion: "Are documents legally valid?",
      answer:
        "जी हाँ, हम सिर्फ सरकारी दफ्तर से सर्टिफाइड (पक्की) नकल ही निकलवा कर देते हैं जो कोर्ट, बैंक लोन और रजिस्ट्रेशन के लिए मान्य है।",
    },
    {
      question: "क्या पुराने रिकॉर्ड भी मिल सकते हैं?",
      englishQuestion: "Can you get old records?",
      answer:
        "जी हाँ, हम पुराने जमाबंदी और रिकॉर्ड भी निकलवा सकते हैं। पुराने रिकॉर्ड के लिए सेंट्रल रिकॉर्ड रूम जाना पड़ सकता है, इसमें थोड़ा समय ज्यादा लग सकता है।",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone || !formData.documentType) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/document-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result?.success) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          documentType: "",
          khasraOrKhataNo: "",
          addressDetails: "",
        });
      } else {
        setError(result?.message || "Error submitting request");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#e8734a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e15e5e] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#e8734a]/10 border border-[#e8734a]/20 text-[#e8734a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Printer size={14} />
                Fast Document Service
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                नक़ल और नक्शा <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">
                  घर बैठे प्राप्त करें
                </span>
              </h1>

              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Quick and accurate extraction of property records, maps, and official documents 
                from government revenue offices. Get certified copies delivered.
              </p>

              <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium">
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 text-gray-300">
                  <Clock className="mr-2 text-[#e8734a]" size={18} />
                  <span>3-7 Days Delivery</span>
                </div>
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 text-gray-300">
                  <ShieldCheck className="mr-2 text-[#e8734a]" size={18} />
                  <span>Government Certified</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] hover:shadow-lg hover:shadow-[#e8734a]/30 text-white px-8 py-4 rounded-xl font-bold transition-all"
                >
                  <Phone size={20} /> Call Now
                </a>
                <a
                  href="#request"
                  className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-800 transition-all"
                >
                  <FileText size={20} /> Request Nakal
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div id="request" className="w-full max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Document Request
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Fill details to get your land records.
                </p>

                {success ? (
                  <div className="bg-green-500/20 border border-green-500/40 text-white p-4 rounded-xl text-center font-bold mb-4">
                    <Check className="inline mr-2" size={20} />
                    Request Submitted Successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                          Name
                        </label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          type="text"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:border-[#e8734a] focus:outline-none transition-all text-sm"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                          Phone
                        </label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          type="tel"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:border-[#e8734a] focus:outline-none transition-all text-sm"
                          placeholder="Mobile"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                        Document Type
                      </label>
                      <select
                        name="documentType"
                        value={formData.documentType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-gray-400 rounded-xl focus:border-[#e8734a] focus:outline-none transition-all text-sm cursor-pointer"
                      >
                        <option value="">Select Document...</option>
                        <option value="Khatauni Nakal">Khatauni Nakal</option>
                        <option value="Khasra Map">Khasra Map</option>
                        <option value="Mutation Copy">Mutation Copy</option>
                        <option value="Registry Copy">Registry Copy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                        Property Details
                      </label>
                      <input
                        name="khasraOrKhataNo"
                        value={formData.khasraOrKhataNo}
                        onChange={handleChange}
                        required
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:border-[#e8734a] focus:outline-none transition-all text-sm mb-2"
                        placeholder="Khasra No. / Khata No."
                      />
                      <input
                        name="addressDetails"
                        value={formData.addressDetails}
                        onChange={handleChange}
                        required
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:border-[#e8734a] focus:outline-none transition-all text-sm"
                        placeholder="Village, Tehsil & District"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-500/20 border border-red-500/40 text-white p-3 rounded-xl text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Submitting..." : "Submit Request"}
                    </button>

                    <div className="pt-2 text-center">
                      <a
                        href="tel:+919876543210"
                        className="inline-flex items-center gap-2 text-[#e8734a] font-bold hover:text-[#e15e5e] transition-colors"
                      >
                        <Phone size={18} /> Call Now
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DOCUMENT TYPES ---------- */}
      <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fef7f0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Documents We Extract
            </h2>
            <p className="text-xl text-[#b54035] font-semibold">
              हम ये सभी सरकारी दस्तावेज़ निकलवा सकते हैं
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#fce8e8] text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#e15e5e] rounded-xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                  <doc.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {doc.title}
                </h3>
                <p className="text-[#b54035] font-bold text-sm mb-3">
                  {doc.hindiTitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {doc.englishDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVICES LIST ---------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Document Services
            </h2>
            <p className="text-xl text-[#b54035] font-semibold">
              संपूर्ण दस्तावेज़ सेवाएं
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center bg-gradient-to-r from-[#fefdf9] to-[#fef7f0] p-4 rounded-xl border border-[#fdeee0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <Check className="text-green-600 w-4 h-4" />
                </div>
                <span className="font-medium text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fdf2f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[#b54035] font-semibold">
              यह कैसे काम करता है
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#e15e5e] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 text-base">{item.title}</h3>
                  <p className="text-xs font-semibold text-[#b54035] mb-2">{item.englishTitle}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              FAQ (सवाल-जवाब)
            </h2>
            <p className="text-xl text-[#b54035] font-semibold">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="font-bold text-gray-800 block text-lg">
                      {faq.question}
                    </span>
                    <span className="text-xs font-bold text-[#b54035] uppercase mt-1 block">
                      {faq.englishQuestion}
                    </span>
                  </div>
                  <ChevronDown
                    className={`text-[#e8734a] transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="py-20 bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Property Documents?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your Nakal, Maps, and Revenue Records quickly and hassle-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919876543210" className="bg-white text-[#e8734a] px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
              <Phone className="mr-2" size={20} />
              +91 98765 43210
            </a>
            <a href="mailto:info@example.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#e8734a] transition-all flex items-center">
              <Mail className="mr-2" size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}