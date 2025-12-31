// // pages/services/property-registry.tsx

// 'use client'
// import { Stamp, Check, Phone, Mail, ArrowRight, Calculator, FileCheck, Building, Shield, ChevronDown, Clock, IndianRupee } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function PropertyRegistryPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const services = [
//     {
//       icon: Calculator,
//       title: "Stamp Duty Calculation",
//       hindiTitle: "स्टांप ड्यूटी गणना",
//       description: "Accurate calculation of stamp duty based on property type, location, and current government rates."
//     },
//     {
//       icon: FileCheck,
//       title: "Document Preparation",
//       hindiTitle: "दस्तावेज़ तैयारी",
//       description: "Complete preparation of sale deed, agreement, and all required documents for registration."
//     },
//     {
//       icon: Building,
//       title: "Registration Process",
//       hindiTitle: "रजिस्ट्री प्रक्रिया",
//       description: "End-to-end assistance at sub-registrar office including appointment booking and document submission."
//     },
//     {
//       icon: Shield,
//       title: "Document Verification",
//       hindiTitle: "दस्तावेज़ सत्यापन",
//       description: "Thorough verification of all property documents to ensure clear title and legal compliance."
//     }
//   ];

//   const registrySteps = [
//     "Property title verification",
//     "Stamp duty calculation",
//     "Sale deed drafting",
//     "Stamp paper purchase",
//     "Appointment booking",
//     "Biometric registration",
//     "Document submission",
//     "Registry completion"
//   ];

//   const process = [
//     { step: 1, title: "Document Collection", description: "Collect all property documents, identity proofs, and photographs from both parties." },
//     { step: 2, title: "Title Verification", description: "Verify property title, ownership chain, and check for any encumbrances or disputes." },
//     { step: 3, title: "Stamp Duty Calculation", description: "Calculate exact stamp duty and registration fees based on property value and type." },
//     { step: 4, title: "Agreement Drafting", description: "Prepare sale deed with all terms, conditions, and property details." },
//     { step: 5, title: "Stamp Paper & Appointment", description: "Purchase stamp paper and book appointment at sub-registrar office." },
//     { step: 6, title: "Registration", description: "Complete registration with biometric verification and document submission." }
//   ];

//   const faqs = [
//     {
//       question: "What is the stamp duty rate for property registration?",
//       answer: "Stamp duty rates vary by state and property type. In most states, it ranges from 5-7% of property value. Women buyers often get concessions. We calculate the exact amount based on your property details and current government rates."
//     },
//     {
//       question: "What documents are required for property registration?",
//       answer: "Required documents include: Original sale deed, Previous ownership documents, Property tax receipts, Encumbrance certificate, Identity proof of both parties (Aadhaar, PAN), Address proof, Photographs, and NOC (if applicable)."
//     },
//     {
//       question: "How long does the registration process take?",
//       answer: "The actual registration at the sub-registrar office takes 1-2 hours. However, document preparation and verification may take 7-15 days. With our assistance, we ensure smooth and quick processing."
//     },
//     {
//       question: "Can I register property without physical presence?",
//       answer: "No, physical presence of both buyer and seller is mandatory for biometric verification during registration. However, Power of Attorney holders can represent parties in certain cases with proper documentation."
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
//                 <Stamp className="text-white" size={40} />
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                 Property Registry Assistance
//               </h1>
//               <p className="text-2xl text-[#e8734a] font-semibold mb-6">
//                 प्रॉपर्टी रजिस्ट्री सेवा
//               </p>
//               <p className="text-xl text-gray-300 mb-8 max-w-2xl">
//                 End-to-end registry services with stamp duty calculation, document preparation, 
//                 and complete registration process management at sub-registrar office.
//               </p>
              
//               <div className="flex flex-wrap gap-6 mb-8">
//                 <div className="flex items-center text-gray-300">
//                   <IndianRupee className="mr-2 text-[#e8734a]" size={20} />
//                   <span>Stamp Duty Savings</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Clock className="mr-2 text-[#e8734a]" size={20} />
//                   <span>Quick Processing</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Shield className="mr-2 text-[#e8734a]" size={20} />
//                   <span>100% Legal</span>
//                 </div>
//               </div>
              
//               <div className="flex flex-wrap gap-4">
//                 <a href="tel:+919876543210" className="bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#e8734a]/30 transition-all flex items-center">
//                   <Phone className="mr-2" size={20} />
//                   Call Now
//                 </a>
//                 <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition-all">
//                   Get Free Quote
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex-1 max-w-md">
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold text-white mb-6">Registry Enquiry</h3>
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
//                   <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-400 focus:outline-none focus:border-[#e8734a]">
//                     <option value="">Property Type</option>
//                     <option value="residential">Residential</option>
//                     <option value="commercial">Commercial</option>
//                     <option value="agricultural">Agricultural Land</option>
//                     <option value="plot">Plot</option>
//                   </select>
//                   <input
//                     type="text"
//                     placeholder="Property Value (Approx)"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Property Location"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
//                   >
//                     Get Stamp Duty Estimate
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fdf2f2]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Our Registry Services
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               हमारी रजिस्ट्री सेवाएं
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#fce8e8] text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-xl flex items-center justify-center mb-4 mx-auto">
//                   <service.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
//                 <p className="text-[#a73232] font-semibold mb-3">{service.hindiTitle}</p>
//                 <p className="text-gray-600 text-sm">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Checklist */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Registry Process Checklist
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               रजिस्ट्री प्रक्रिया चेकलिस्ट
//             </p>
//           </div>
          
//           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
//             {registrySteps.map((step, index) => (
//               <div key={index} className="flex items-center bg-gradient-to-r from-[#fefdf9] to-[#fdf2f2] p-4 rounded-xl border border-[#fce8e8]">
//                 <div className="w-8 h-8 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-sm">
//                   {index + 1}
//                 </div>
//                 <span className="font-medium text-gray-700">{step}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fef7f0]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               How We Help
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               हम कैसे मदद करते हैं
//             </p>
//           </div>
          
//           <div className="max-w-4xl mx-auto">
//             {process.map((item, index) => (
//               <div key={index} className="flex gap-6 mb-8 last:mb-0">
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#e15e5e] to-[#d9543f] rounded-full flex items-center justify-center text-white font-bold text-lg">
//                     {item.step}
//                   </div>
//                   {index < process.length - 1 && (
//                     <div className="w-0.5 h-full bg-gradient-to-b from-[#e15e5e] to-[#d9543f] mt-2"></div>
//                   )}
//                 </div>
//                 <div className="flex-1 pb-8">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
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

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-[#e15e5e] to-[#d9543f]">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready for Property Registration?
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Get hassle-free registry services with complete assistance.
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
'use client'
import { Stamp, Check, Phone, Mail, ArrowRight, Calculator, FileText, Building, ShieldCheck, ChevronDown, Clock, IndianRupee, FileCheck2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
export default function PropertyRegistryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Calculator,
      title: "Stamp Duty Calculation",
      hindiTitle: "स्टांप ड्यूटी गणना",
      description: "Accurate calculation of stamp duty based on property value and government rates."
    },
    {
      icon: FileText,
      title: "Deed Drafting",
      hindiTitle: "बैनामा लेखन",
      description: "Professional drafting of Sale Deed, Agreement to Sell, and Power of Attorney."
    },
    {
      icon: Building,
      title: "Office Assistance",
      hindiTitle: "रजिस्ट्रार ऑफिस में मदद",
      description: "Full support at the Sub-Registrar office for biometric and photo process."
    },
    {
      icon: ShieldCheck,
      title: "Document Verification",
      hindiTitle: "दस्तावेज़ सत्यापन",
      description: "Checking all papers before registry to avoid rejection or legal issues."
    }
  ];

  const registrySteps = [
    "Title Verification (टाइटल जांच)",
    "Stamp Duty Check (स्टांप ड्यूटी)",
    "Sale Deed Drafting (बैनामा)",
    "Challan Payment (चालान)",
    "Slot Booking (अपॉइंटमेंट)",
    "Bio-metric (अंगूठा/फोटो)",
    "Submission (जमा करना)",
    "Final Registry (पक्की रजिस्ट्री)"
  ];

  const process = [
    { step: 1, title: "Papers Check", description: "हम आपके और बेचने वाले के कागजात चेक करेंगे।" },
    { step: 2, title: "Duty Calculation", description: "सरकारी फीस और स्टांप का सही हिसाब लगाएंगे।" },
    { step: 3, title: "Drafting", description: "वकील द्वारा पक्का बैनामा (Sale Deed) तैयार कराया जाएगा।" },
    { step: 4, title: "Appointment", description: "रजिस्ट्रार ऑफिस में आपकी सुविधा अनुसार समय लेंगे।" },
    { step: 5, title: "Registry Day", description: "पूरी प्रक्रिया हमारे साथ पूरी करवाएंगे।" },
    { step: 6, title: "Handover", description: "पक्की रजिस्ट्री आपके हाथ में।" }
  ];

  const faqs = [
    {
      question: "रजिस्ट्री के लिए स्टांप ड्यूटी कितनी लगती है?",
      englishQuestion: "Stamp Duty Rate?",
      answer: "यह राज्य और संपत्ति की कीमत पर निर्भर करता है (आमतौर पर 5% - 7%)। महिलाओं के नाम पर छूट भी मिलती है।"
    },
    {
      question: "रजिस्ट्री के समय कौन से कागजात चाहिए?",
      englishQuestion: "Documents required?",
      answer: "आधार कार्ड, पैन कार्ड, पुराना बैनामा, जमाबंदी, गवाहों के आईडी और फोटो।"
    },
    {
      question: "क्या रजिस्ट्री के लिए दोनों पार्टियों का होना जरूरी है?",
      englishQuestion: "Both parties needed?",
      answer: "जी हाँ, खरीदार और बेचने वाले दोनों का अंगूठा और फोटो उसी समय होता है। गवाहों का भी होना जरूरी है।"
    },
    {
      question: "रजिस्ट्री में कितना समय लगता है?",
      englishQuestion: "Time required?",
      answer: "कागजात तैयार होने के बाद, ऑफिस का काम 1-2 घंटे में हो जाता है। अपॉइंटमेंट पहले से लेनी पड़ती है।"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header/>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-600 via-transparent to-transparent opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/#services" className="inline-flex items-center text-emerald-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider">
            <ArrowRight className="rotate-180 mr-2" size={16} />
            Back to Services
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
                <Stamp className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Official Registry Partner</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                पक्की रजिस्ट्री <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">बिना किसी परेशानी के</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Complete property registration services. We handle Stamp Duty, Documentation, and Sub-Registrar office work for you.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium text-slate-300">
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <IndianRupee className="mr-2 text-emerald-400" size={18} />
                  <span>Correct Valuation</span>
                </div>
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <Clock className="mr-2 text-emerald-400" size={18} />
                  <span>Fast Appointment</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+919876543210" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
                <a href="#quote" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2">
                  <Calculator size={20} /> Get Quote
                </a>
              </div>
            </div>
            
            {/* Right Form Card */}
            <div id="quote" className="flex-1 w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Registry Cost Estimate</h3>
                <p className="text-slate-500 mb-6 text-sm">Calculate stamp duty & fees.</p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Mobile Number" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Value</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="₹ Value" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Gender</label>
                      <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer">
                        <option>Male</option>
                        <option>Female (Rebate)</option>
                        <option>Joint</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Area / Tehsil" />
                  </div>

                  <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2">
                    Get Estimate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Registry Services
            </h2>
            <p className="text-emerald-600 font-bold text-lg">
              हम आपकी रजिस्ट्री कैसे कराते हैं
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:bg-emerald-600 transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-3">{service.hindiTitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHECKLIST --- */}
      <section className="py-20 bg-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Registry Checklist</h3>
            <p className="text-slate-500 text-center mb-10">ये काम हम करेंगे</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {registrySteps.map((step, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600 flex-shrink-0">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Process</h2>
            <p className="text-slate-500 text-lg">Registry in 6 Easy Steps</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all group">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md border-2 border-white group-hover:bg-emerald-600 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">FAQ</h2>
            <p className="text-emerald-600 font-medium">Registry Related Questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-300 transition-colors shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div>
                    <span className="font-bold text-slate-800 block text-lg">{faq.question}</span>
                    <span className="text-xs font-bold text-emerald-600 uppercase mt-1 block">{faq.englishQuestion}</span>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-emerald-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-16 bg-emerald-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready for Registry?</h2>
          <p className="text-emerald-100 text-lg mb-8">Let us handle the legal work while you celebrate your new property.</p>
          <div className="flex justify-center gap-4">
            <a href="tel:+919876543210" className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
              <Phone size={20} /> +91 98765 43210
            </a>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  );
}