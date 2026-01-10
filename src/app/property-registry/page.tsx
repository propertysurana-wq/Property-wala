// // // pages/services/property-registry.tsx

// // 'use client'
// // import { Stamp, Check, Phone, Mail, ArrowRight, Calculator, FileCheck, Building, Shield, ChevronDown, Clock, IndianRupee } from "lucide-react";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function PropertyRegistryPage() {
// //   const [openFaq, setOpenFaq] = useState<number | null>(null);

// //   const services = [
// //     {
// //       icon: Calculator,
// //       title: "Stamp Duty Calculation",
// //       hindiTitle: "स्टांप ड्यूटी गणना",
// //       description: "Accurate calculation of stamp duty based on property type, location, and current government rates."
// //     },
// //     {
// //       icon: FileCheck,
// //       title: "Document Preparation",
// //       hindiTitle: "दस्तावेज़ तैयारी",
// //       description: "Complete preparation of sale deed, agreement, and all required documents for registration."
// //     },
// //     {
// //       icon: Building,
// //       title: "Registration Process",
// //       hindiTitle: "रजिस्ट्री प्रक्रिया",
// //       description: "End-to-end assistance at sub-registrar office including appointment booking and document submission."
// //     },
// //     {
// //       icon: Shield,
// //       title: "Document Verification",
// //       hindiTitle: "दस्तावेज़ सत्यापन",
// //       description: "Thorough verification of all property documents to ensure clear title and legal compliance."
// //     }
// //   ];

// //   const registrySteps = [
// //     "Property title verification",
// //     "Stamp duty calculation",
// //     "Sale deed drafting",
// //     "Stamp paper purchase",
// //     "Appointment booking",
// //     "Biometric registration",
// //     "Document submission",
// //     "Registry completion"
// //   ];

// //   const process = [
// //     { step: 1, title: "Document Collection", description: "Collect all property documents, identity proofs, and photographs from both parties." },
// //     { step: 2, title: "Title Verification", description: "Verify property title, ownership chain, and check for any encumbrances or disputes." },
// //     { step: 3, title: "Stamp Duty Calculation", description: "Calculate exact stamp duty and registration fees based on property value and type." },
// //     { step: 4, title: "Agreement Drafting", description: "Prepare sale deed with all terms, conditions, and property details." },
// //     { step: 5, title: "Stamp Paper & Appointment", description: "Purchase stamp paper and book appointment at sub-registrar office." },
// //     { step: 6, title: "Registration", description: "Complete registration with biometric verification and document submission." }
// //   ];

// //   const faqs = [
// //     {
// //       question: "What is the stamp duty rate for property registration?",
// //       answer: "Stamp duty rates vary by state and property type. In most states, it ranges from 5-7% of property value. Women buyers often get concessions. We calculate the exact amount based on your property details and current government rates."
// //     },
// //     {
// //       question: "What documents are required for property registration?",
// //       answer: "Required documents include: Original sale deed, Previous ownership documents, Property tax receipts, Encumbrance certificate, Identity proof of both parties (Aadhaar, PAN), Address proof, Photographs, and NOC (if applicable)."
// //     },
// //     {
// //       question: "How long does the registration process take?",
// //       answer: "The actual registration at the sub-registrar office takes 1-2 hours. However, document preparation and verification may take 7-15 days. With our assistance, we ensure smooth and quick processing."
// //     },
// //     {
// //       question: "Can I register property without physical presence?",
// //       answer: "No, physical presence of both buyer and seller is mandatory for biometric verification during registration. However, Power of Attorney holders can represent parties in certain cases with proper documentation."
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Hero Section */}
// //       <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-24 overflow-hidden">
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="absolute top-20 left-20 w-72 h-72 bg-[#e15e5e] rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e8734a] rounded-full blur-3xl"></div>
// //         </div>
        
// //         <div className="container mx-auto px-4 relative z-10">
// //           <Link href="/#services" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
// //             <ArrowRight className="rotate-180 mr-2" size={20} />
// //             Back to Services
// //           </Link>
          
// //           <div className="flex flex-col lg:flex-row items-center gap-12">
// //             <div className="flex-1">
// //               <div className="w-20 h-20 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-2xl flex items-center justify-center mb-6">
// //                 <Stamp className="text-white" size={40} />
// //               </div>
// //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
// //                 Property Registry Assistance
// //               </h1>
// //               <p className="text-2xl text-[#e8734a] font-semibold mb-6">
// //                 प्रॉपर्टी रजिस्ट्री सेवा
// //               </p>
// //               <p className="text-xl text-gray-300 mb-8 max-w-2xl">
// //                 End-to-end registry services with stamp duty calculation, document preparation, 
// //                 and complete registration process management at sub-registrar office.
// //               </p>
              
// //               <div className="flex flex-wrap gap-6 mb-8">
// //                 <div className="flex items-center text-gray-300">
// //                   <IndianRupee className="mr-2 text-[#e8734a]" size={20} />
// //                   <span>Stamp Duty Savings</span>
// //                 </div>
// //                 <div className="flex items-center text-gray-300">
// //                   <Clock className="mr-2 text-[#e8734a]" size={20} />
// //                   <span>Quick Processing</span>
// //                 </div>
// //                 <div className="flex items-center text-gray-300">
// //                   <Shield className="mr-2 text-[#e8734a]" size={20} />
// //                   <span>100% Legal</span>
// //                 </div>
// //               </div>
              
// //               <div className="flex flex-wrap gap-4">
// //                 <a href="tel:+919876543210" className="bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#e8734a]/30 transition-all flex items-center">
// //                   <Phone className="mr-2" size={20} />
// //                   Call Now
// //                 </a>
// //                 <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition-all">
// //                   Get Free Quote
// //                 </a>
// //               </div>
// //             </div>
            
// //             <div className="flex-1 max-w-md">
// //               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
// //                 <h3 className="text-2xl font-bold text-white mb-6">Registry Enquiry</h3>
// //                 <form className="space-y-4">
// //                   <input
// //                     type="text"
// //                     placeholder="Your Name"
// //                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
// //                   />
// //                   <input
// //                     type="tel"
// //                     placeholder="Phone Number"
// //                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
// //                   />
// //                   <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-400 focus:outline-none focus:border-[#e8734a]">
// //                     <option value="">Property Type</option>
// //                     <option value="residential">Residential</option>
// //                     <option value="commercial">Commercial</option>
// //                     <option value="agricultural">Agricultural Land</option>
// //                     <option value="plot">Plot</option>
// //                   </select>
// //                   <input
// //                     type="text"
// //                     placeholder="Property Value (Approx)"
// //                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
// //                   />
// //                   <input
// //                     type="text"
// //                     placeholder="Property Location"
// //                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
// //                   />
// //                   <button
// //                     type="submit"
// //                     className="w-full bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
// //                   >
// //                     Get Stamp Duty Estimate
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services */}
// //       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fdf2f2]">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
// //               Our Registry Services
// //             </h2>
// //             <p className="text-xl text-[#b54035] font-semibold">
// //               हमारी रजिस्ट्री सेवाएं
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {services.map((service, index) => (
// //               <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#fce8e8] text-center">
// //                 <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-xl flex items-center justify-center mb-4 mx-auto">
// //                   <service.icon className="text-white" size={32} />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
// //                 <p className="text-[#a73232] font-semibold mb-3">{service.hindiTitle}</p>
// //                 <p className="text-gray-600 text-sm">{service.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Checklist */}
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
// //               Registry Process Checklist
// //             </h2>
// //             <p className="text-xl text-[#b54035] font-semibold">
// //               रजिस्ट्री प्रक्रिया चेकलिस्ट
// //             </p>
// //           </div>
          
// //           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {registrySteps.map((step, index) => (
// //               <div key={index} className="flex items-center bg-gradient-to-r from-[#fefdf9] to-[#fdf2f2] p-4 rounded-xl border border-[#fce8e8]">
// //                 <div className="w-8 h-8 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-sm">
// //                   {index + 1}
// //                 </div>
// //                 <span className="font-medium text-gray-700">{step}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Process */}
// //       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fef7f0]">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
// //               How We Help
// //             </h2>
// //             <p className="text-xl text-[#b54035] font-semibold">
// //               हम कैसे मदद करते हैं
// //             </p>
// //           </div>
          
// //           <div className="max-w-4xl mx-auto">
// //             {process.map((item, index) => (
// //               <div key={index} className="flex gap-6 mb-8 last:mb-0">
// //                 <div className="flex flex-col items-center">
// //                   <div className="w-12 h-12 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-full flex items-center justify-center text-white font-bold text-lg">
// //                     {item.step}
// //                   </div>
// //                   {index < process.length - 1 && (
// //                     <div className="w-0.5 h-full bg-gradient-to-b from-[#e15e5e] to-[#d9543f] mt-2"></div>
// //                   )}
// //                 </div>
// //                 <div className="flex-1 pb-8">
// //                   <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
// //                   <p className="text-gray-600">{item.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ */}
// //       <section className="py-20 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
// //               Frequently Asked Questions
// //             </h2>
// //             <p className="text-xl text-[#b54035] font-semibold">
// //               अक्सर पूछे जाने वाले प्रश्न
// //             </p>
// //           </div>
          
// //           <div className="max-w-3xl mx-auto space-y-4">
// //             {faqs.map((faq, index) => (
// //               <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
// //                 <button
// //                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
// //                   className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
// //                 >
// //                   <span className="font-semibold text-gray-800">{faq.question}</span>
// //                   <ChevronDown className={`text-[#e15e5e] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} size={24} />
// //                 </button>
// //                 {openFaq === index && (
// //                   <div className="px-6 pb-6 text-gray-600">
// //                     {faq.answer}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-20 bg-gradient-to-r from-[#e15e5e] to-[#d9543f]">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
// //             Ready for Property Registration?
// //           </h2>
// //           <p className="text-xl text-white/90 mb-8">
// //             Get hassle-free registry services with complete assistance.
// //           </p>
// //           <div className="flex flex-wrap justify-center gap-4">
// //             <a href="tel:+919876543210" className="bg-white text-[#e15e5e] px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
// //               <Phone className="mr-2" size={20} />
// //               +91 98765 43210
// //             </a>
// //             <a href="mailto:info@example.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#e15e5e] transition-all flex items-center">
// //               <Mail className="mr-2" size={20} />
// //               Email Us
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// // 
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   Stamp,
//   Check,
//   Phone,
//   ArrowRight,
//   Calculator,
//   FileText,
//   Building,
//   ShieldCheck,
//   ChevronDown,
//   Clock,
//   IndianRupee,
// } from "lucide-react";

// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";

// export default function PropertyRegistryPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   /* ---------------- SERVICES ---------------- */
//   const services = [
//     {
//       icon: Calculator,
//       title: "Stamp Duty Calculation",
//       hindiTitle: "स्टांप ड्यूटी गणना",
//       description:
//         "Accurate calculation of stamp duty based on property value and government rates.",
//     },
//     {
//       icon: FileText,
//       title: "Deed Drafting",
//       hindiTitle: "बैनामा लेखन",
//       description:
//         "Professional drafting of Sale Deed, Agreement to Sell, and Power of Attorney.",
//     },
//     {
//       icon: Building,
//       title: "Office Assistance",
//       hindiTitle: "रजिस्ट्रार ऑफिस सहायता",
//       description:
//         "Complete support at Sub-Registrar office for biometric and photo process.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Document Verification",
//       hindiTitle: "दस्तावेज़ सत्यापन",
//       description:
//         "Verification of all documents to avoid rejection or legal issues.",
//     },
//   ];

//   /* ---------------- CHECKLIST ---------------- */
//   const registrySteps = [
//     "Title Verification (टाइटल जांच)",
//     "Stamp Duty Calculation",
//     "Sale Deed Drafting",
//     "Challan Payment",
//     "Appointment Booking",
//     "Biometric & Photo",
//     "Document Submission",
//     "Final Registry",
//   ];

//   /* ---------------- PROCESS ---------------- */
//   const process = [
//     {
//       step: 1,
//       title: "Documents Check",
//       description: "Buyer & seller documents verification.",
//     },
//     {
//       step: 2,
//       title: "Stamp Duty",
//       description: "Exact government fee & duty calculation.",
//     },
//     {
//       step: 3,
//       title: "Drafting",
//       description: "Sale deed drafting by legal expert.",
//     },
//     {
//       step: 4,
//       title: "Appointment",
//       description: "Slot booking at Sub-Registrar office.",
//     },
//     {
//       step: 5,
//       title: "Registry Day",
//       description: "Biometric, photos & signatures.",
//     },
//     {
//       step: 6,
//       title: "Handover",
//       description: "Registered documents handed over.",
//     },
//   ];

//   /* ---------------- FAQ ---------------- */
//   const faqs = [
//     {
//       q: "स्टांप ड्यूटी कितनी लगती है?",
//       a: "यह राज्य और संपत्ति की कीमत पर निर्भर करती है (आमतौर पर 5–7%)।",
//     },
//     {
//       q: "कौन-कौन से दस्तावेज़ चाहिए?",
//       a: "आधार, पैन, पुराने कागजात, फोटो, गवाहों के आईडी।",
//     },
//     {
//       q: "क्या दोनों पार्टियों का आना ज़रूरी है?",
//       a: "हाँ, बायोमेट्रिक और फोटो के लिए दोनों जरूरी हैं।",
//     },
//     {
//       q: "कितना समय लगता है?",
//       a: "ऑफिस प्रक्रिया 1–2 घंटे में पूरी हो जाती है।",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Header />

//       {/* ---------------- HERO ---------------- */}
//       <section className="bg-slate-900 text-white py-24">
//         <div className="container mx-auto px-4">
//           <Link
//             href="/#services"
//             className="text-emerald-400 flex items-center mb-6 text-sm font-semibold"
//           >
//             <ArrowRight className="rotate-180 mr-2" size={16} />
//             Back to Services
//           </Link>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Stamp className="text-emerald-400" />
//                 <span className="text-sm uppercase font-bold text-emerald-300">
//                   Property Registry Service
//                 </span>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//                 पक्की रजिस्ट्री <br />
//                 <span className="text-emerald-400">बिना परेशानी</span>
//               </h1>

//               <p className="text-slate-300 mb-6 max-w-xl">
//                 Complete assistance for property registration including stamp
//                 duty, documentation & registrar office process.
//               </p>

//               <div className="flex gap-4">
//                 <a
//                   href="tel:+919876543210"
//                   className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2"
//                 >
//                   <Phone size={18} /> Call Now
//                 </a>

//                 <a
//                   href="#quote"
//                   className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2"
//                 >
//                   <Calculator size={18} /> Get Quote
//                 </a>
//               </div>
//             </div>

//             {/* FORM */}
//             <div
//               id="quote"
//               className="bg-white rounded-2xl p-8 shadow-xl text-slate-900"
//             >
//               <h3 className="text-xl font-bold mb-4">
//                 Registry Cost Estimate
//               </h3>

//               <form className="space-y-4">
//                 <input
//                   placeholder="Name"
//                   className="w-full p-3 border rounded-xl"
//                 />
//                 <input
//                   placeholder="Phone"
//                   className="w-full p-3 border rounded-xl"
//                 />
//                 <input
//                   placeholder="Property Value"
//                   className="w-full p-3 border rounded-xl"
//                 />
//                 <input
//                   placeholder="Location"
//                   className="w-full p-3 border rounded-xl"
//                 />
//                 <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-emerald-600">
//                   Get Estimate
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- SERVICES ---------------- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-extrabold text-center mb-12">
//             Registry Services
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((s, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-slate-50 rounded-2xl text-center border hover:shadow-lg"
//               >
//                 <div className="mx-auto w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4">
//                   <s.icon size={28} />
//                 </div>
//                 <h3 className="font-bold">{s.title}</h3>
//                 <p className="text-emerald-600 font-semibold text-sm">
//                   {s.hindiTitle}
//                 </p>
//                 <p className="text-slate-500 text-sm mt-2">
//                   {s.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- CHECKLIST ---------------- */}
//       <section className="py-20 bg-emerald-50">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <h2 className="text-2xl font-bold text-center mb-8">
//             Registry Checklist
//           </h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             {registrySteps.map((s, i) => (
//               <div
//                 key={i}
//                 className="flex items-center bg-white p-4 rounded-xl border"
//               >
//                 <Check className="text-emerald-600 mr-3" />
//                 <span>{s}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- FAQ ---------------- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

//           {faqs.map((f, i) => (
//             <div key={i} className="border rounded-xl mb-4">
//               <button
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 className="w-full p-4 flex justify-between items-center font-semibold"
//               >
//                 {f.q}
//                 <ChevronDown
//                   className={`transition ${
//                     openFaq === i ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {openFaq === i && (
//                 <div className="p-4 text-slate-600 border-t">
//                   {f.a}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import {
//   Stamp,
//   Check,
//   Phone,
//   ArrowRight,
//   Calculator,
//   FileText,
//   Building,
//   ShieldCheck,
//   ChevronDown,
// } from "lucide-react";

// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";

// export default function PropertyRegistryPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const services = [
//     { icon: Calculator, title: "Stamp Duty Calculation", hindiTitle: "स्टांप ड्यूटी गणना", description: "Accurate calculation of stamp duty." },
//     { icon: FileText, title: "Deed Drafting", hindiTitle: "बैनामा लेखन", description: "Professional drafting of documents." },
//     { icon: Building, title: "Office Assistance", hindiTitle: "रजिस्ट्रार ऑफिस सहायता", description: "Complete support at Sub-Registrar office." },
//     { icon: ShieldCheck, title: "Document Verification", hindiTitle: "दस्तावेज़ सत्यापन", description: "Verification of all documents." },
//   ];

//   const registrySteps = [
//     "Title Verification (टाइटल जांच)",
//     "Stamp Duty Calculation",
//     "Sale Deed Drafting",
//     "Challan Payment",
//     "Appointment Booking",
//     "Biometric & Photo",
//     "Document Submission",
//     "Final Registry",
//   ];

//   const faqs = [
//     { q: "स्टांप ड्यूटी कितनी लगती है?", a: "यह राज्य और संपत्ति की कीमत पर निर्भर करती है (5–7%)।" },
//     { q: "कौन-कौन से दस्तावेज़ चाहिए?", a: "आधार, पैन, पुराने कागजात, फोटो, गवाहों के आईडी।" },
//     { q: "क्या दोनों पार्टियों का आना ज़रूरी है?", a: "हाँ, बायोमेट्रिक और फोटो के लिए दोनों जरूरी हैं।" },
//     { q: "कितना समय लगता है?", a: "ऑफिस प्रक्रिया 1–2 घंटे में पूरी हो जाती है।" },
//   ];

//   // ---------------- Form State ----------------
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     propertyValue: "",
//     location: "",
//   });

//   // ---------------- Handle Input Change ----------------
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ---------------- Handle Form Submit ----------------
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/complete-property-registration", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("Enquiry submitted successfully!");
//         setFormData({ name: "", phone: "", propertyValue: "", location: "" });
//       } else {
//         alert("Error: " + data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Header />

//       {/* HERO */}
//       <section className="bg-slate-900 text-white py-24">
//         <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Stamp className="text-emerald-400" />
//               <span className="text-sm uppercase font-bold text-emerald-300">
//                 Property Registry Service
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//               पक्की रजिस्ट्री <br />
//               <span className="text-emerald-400">बिना परेशानी</span>
//             </h1>

//             <p className="text-slate-300 mb-6 max-w-xl">
//               Complete assistance for property registration including stamp duty, documentation & registrar office process.
//             </p>

//             <div className="flex gap-4">
//               <a href="tel:+919876543210" className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
//                 <Phone size={18} /> Call Now
//               </a>
//               <a href="#quote" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
//                 <Calculator size={18} /> Get Quote
//               </a>
//             </div>
//           </div>

//           {/* FORM */}
//           <div id="quote" className="bg-white rounded-2xl p-8 shadow-xl text-slate-900">
//             <h3 className="text-xl font-bold mb-4">Registry Cost Estimate</h3>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <input
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-xl"
//                 required
//               />
//               <input
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-xl"
//                 required
//               />
//               <input
//                 name="propertyValue"
//                 placeholder="Property Value"
//                 value={formData.propertyValue}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-xl"
//                 required
//               />
//               <input
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-xl"
//                 required
//               />
//               <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-emerald-600">
//                 Get Estimate
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-extrabold text-center mb-12">Registry Services</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((s, i) => (
//               <div key={i} className="p-6 bg-slate-50 rounded-2xl text-center border hover:shadow-lg">
//                 <div className="mx-auto w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-4">
//                   <s.icon size={28} />
//                 </div>
//                 <h3 className="font-bold">{s.title}</h3>
//                 <p className="text-emerald-600 font-semibold text-sm">{s.hindiTitle}</p>
//                 <p className="text-slate-500 text-sm mt-2">{s.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CHECKLIST */}
//       <section className="py-20 bg-emerald-50">
//         <div className="container mx-auto px-4 max-w-4xl">
//           <h2 className="text-2xl font-bold text-center mb-8">Registry Checklist</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {registrySteps.map((s, i) => (
//               <div key={i} className="flex items-center bg-white p-4 rounded-xl border">
//                 <Check className="text-emerald-600 mr-3" />
//                 <span>{s}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
//           {faqs.map((f, i) => (
//             <div key={i} className="border rounded-xl mb-4">
//               <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-4 flex justify-between items-center font-semibold">
//                 {f.q}
//                 <ChevronDown className={`transition ${openFaq === i ? "rotate-180" : ""}`} />
//               </button>
//               {openFaq === i && <div className="p-4 text-slate-600 border-t">{f.a}</div>}
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stamp,
  Check,
  Phone,
  ArrowRight,
  Calculator,
  FileText,
  Building,
  ShieldCheck,
  ChevronDown,
  Clock,
  IndianRupee,
  Loader2,
} from "lucide-react";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function PropertyRegistryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  /* ---------------- SERVICES ---------------- */
  const services = [
    {
      icon: Calculator,
      title: "Stamp Duty Calculation",
      hindiTitle: "स्टांप ड्यूटी गणना",
      description: "Accurate calculation of stamp duty.",
    },
    {
      icon: FileText,
      title: "Deed Drafting",
      hindiTitle: "बैनामा लेखन",
      description: "Professional drafting of documents.",
    },
    {
      icon: Building,
      title: "Office Assistance",
      hindiTitle: "रजिस्ट्रार ऑफिस सहायता",
      description: "Complete support at Sub-Registrar office.",
    },
    {
      icon: ShieldCheck,
      title: "Document Verification",
      hindiTitle: "दस्तावेज़ सत्यापन",
      description: "Verification of all documents.",
    },
  ];

  /* ---------------- STEPS ---------------- */
  const registrySteps = [
    "Title Verification (टाइटल जांच)",
    "Stamp Duty Calculation",
    "Sale Deed Drafting",
    "Challan Payment",
    "Appointment Booking",
    "Biometric & Photo",
    "Document Submission",
    "Final Registry",
  ];

  /* ---------------- FAQ ---------------- */
  const faqs = [
    {
      q: "स्टांप ड्यूटी कितनी लगती है?",
      a: "यह राज्य और संपत्ति की कीमत पर निर्भर करती है (5–7%)।",
    },
    {
      q: "कौन-कौन से दस्तावेज़ चाहिए?",
      a: "आधार, पैन, पुराने कागजात, फोटो, गवाहों के आईडी।",
    },
    {
      q: "क्या दोनों पार्टियों का आना ज़रूरी है?",
      a: "हाँ, बायोमेट्रिक और फोटो के लिए दोनों जरूरी हैं।",
    },
    {
      q: "कितना समय लगता है?",
      a: "ऑफिस प्रक्रिया 1–2 घंटे में पूरी हो जाती है।",
    },
  ];

  /* ---------------- FORM STATE ---------------- */
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyValue: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://propertybackend-6bou.onrender.com/api/complete-property-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Submission failed");

      alert("✅ Enquiry submitted successfully!");
      setFormData({ name: "", phone: "", propertyValue: "", location: "" });
    } catch (error: any) {
      alert("❌ " + (error?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* ---------------- HERO (same premium style like your reference) ---------------- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden text-white">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-700 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/#services"
            className="inline-flex items-center text-emerald-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
                <Stamp className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">
                  Property Registry Service
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                पक्की रजिस्ट्री <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  बिना परेशानी
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Complete assistance for property registration including stamp duty, documentation
                &amp; registrar office process.
              </p>

              <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium text-slate-300">
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <IndianRupee className="mr-2 text-emerald-400" size={18} />
                  <span>Accurate Fees</span>
                </div>
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <Clock className="mr-2 text-emerald-400" size={18} />
                  <span>Quick Processing</span>
                </div>
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <ShieldCheck className="mr-2 text-emerald-400" size={18} />
                  <span>100% Legal</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+919876543210"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Call Now
                </a>
                <a
                  href="#quote"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calculator size={20} /> Get Quote
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div id="quote" className="flex-1 w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden text-slate-900">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

                <h3 className="text-2xl font-bold mb-2">Registry Cost Estimate</h3>
                <p className="text-slate-500 mb-6 text-sm">
                  Fill details and get a quick estimate.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Property Value
                    </label>
                    <input
                      name="propertyValue"
                      value={formData.propertyValue}
                      onChange={handleChange}
                      placeholder="Approx Value (₹)"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Location
                    </label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City / Tehsil / District"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      required
                    />
                  </div>

                  <button
                    disabled={loading}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Submitting...
                      </>
                    ) : (
                      "Get Estimate"
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href="tel:+919876543210"
                      className="inline-flex items-center gap-2 text-emerald-600 font-bold"
                    >
                      <Phone size={18} /> Call Now
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Registry Services
            </h2>
            <p className="text-emerald-600 font-bold text-lg">
              हम रजिस्ट्री में पूरी मदद करते हैं
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center"
              >
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:bg-emerald-600 transition-colors">
                  <s.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-3">{s.hindiTitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CHECKLIST ---------------- */}
      <section className="py-20 bg-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              Registry Checklist
            </h3>
            <p className="text-slate-500 text-center mb-10">
              रजिस्ट्री प्रक्रिया के स्टेप्स
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {registrySteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">FAQ</h2>
            <p className="text-emerald-600 font-medium">Common Registry Questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-300 transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  type="button"
                >
                  <span className="font-bold text-slate-800 block text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`text-slate-400 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-emerald-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}