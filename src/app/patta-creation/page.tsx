// 'use client'
// import { Award, Check, Phone, Mail, ArrowRight, FileCheck, Clock, Users, ShieldCheck, ChevronDown, Building2, Landmark, FileText } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Footer from "@/components/footer/footer";
// import Header from "@/components/header/header";
// export default function PattaCreationPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const pattaTypes = [
//     {
//       icon: Building2,
//       title: "Residential Patta",
//       hindiTitle: "आवासीय पट्टा",
//       description: "Patta creation for residential plots and housing purposes with complete legal documentation."
//     },
//     {
//       icon: Landmark,
//       title: "Commercial Patta",
//       hindiTitle: "व्यावसायिक पट्टा",
//       description: "Commercial land patta for shops, offices, and business establishments."
//     },
//     {
//       icon: FileText,
//       title: "Agricultural Patta",
//       hindiTitle: "कृषि पट्टा",
//       description: "Patta for agricultural land with proper land use classification and records."
//     },
//     {
//       icon: FileCheck,
//       title: "Government Patta",
//       hindiTitle: "सरकारी पट्टा",
//       description: "Assistance in obtaining patta for government allotted lands and schemes."
//     }
//   ];

//   const benefits = [
//     "Legal ownership proof (कानूनी मालिकाना हक)",
//     "Bank loan eligibility (बैंक लोन में आसानी)",
//     "Property registration (प्रॉपर्टी रजिस्ट्री)",
//     "Mutation process (नामांतरण)",
//     "Building permission (निर्माण अनुमति)",
//     "Government scheme benefits (सरकारी योजनाओं का लाभ)",
//     "Property tax assessment (प्रॉपर्टी टैक्स)",
//     "Inheritance transfer (उत्तराधिकार)"
//   ];

//   const process = [
//     { step: 1, title: "Document Collection", description: "हम आपके सभी ज़रूरी दस्तावेज़ इकट्ठे करेंगे (आधार, पुराने कागज़ आदि)।" },
//     { step: 2, title: "File Preparation", description: "पट्टा आवेदन सही फॉर्मेट में तैयार करेंगे।" },
//     { step: 3, title: "Office Submission", description: "तहसील या नगर पालिका में फाइल जमा करेंगे।" },
//     { step: 4, title: "Site Verification", description: "सरकारी अधिकारी द्वारा मौका मुआयना (Site Inspection)।" },
//     { step: 5, title: "Approval", description: "सक्षम अधिकारी द्वारा पट्टा मंज़ूरी।" },
//     { step: 6, title: "Patta Delivery", description: "आपको आपका पट्टा मिल जाएगा।" }
//   ];

//   const faqs = [
//     {
//       question: "पट्टा क्या है और क्यों ज़रूरी है?",
//       englishQuestion: "What is Patta?",
//       answer: "पट्टा जमीन के मालिकाना हक का सबसे बड़ा सरकारी सबूत है। इसके बिना बैंक लोन नहीं मिलता और जमीन बेचना मुश्किल होता है।"
//     },
//     {
//       question: "पट्टा बनवाने में कौन से दस्तावेज़ लगते हैं?",
//       englishQuestion: "Documents required?",
//       answer: "आधार कार्ड, पहचान पत्र, पुराना बैनामा (Sale Deed), शपथ पत्र (Affidavit), और जमीन के पुराने रिकॉर्ड।"
//     },
//     {
//       question: "कितना समय लगता है?",
//       englishQuestion: "Time taken?",
//       answer: "पूरी प्रक्रिया में आमतौर पर 30 से 90 दिन लगते हैं। हम कोशिश करते हैं कि काम जल्दी हो।"
//     },
//     {
//       question: "खर्च कितना आएगा?",
//       englishQuestion: "Cost involved?",
//       answer: "खर्च जमीन के क्षेत्रफल (Area) और सरकारी फीस पर निर्भर करता है। हम आपको पहले ही पूरा एस्टीमेट बता देंगे।"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header/>
//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-slate-900 py-24 overflow-hidden">
//         {/* Background Glow */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
//           <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-700 rounded-full blur-[100px]"></div>
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
//                 <Award className="w-4 h-4 text-emerald-400" />
//                 <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Official Process</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
//                 पट्टा बनवाएं <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">कानूनी और पक्का</span>
//               </h1>
              
//               <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 We handle the complete Patta creation process. From documentation to government approval, get your legal land ownership hassle-free.
//               </p>
              
//               <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium text-slate-300">
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <Clock className="mr-2 text-emerald-400" size={18} />
//                   <span>30-90 Days Process</span>
//                 </div>
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <ShieldCheck className="mr-2 text-emerald-400" size={18} />
//                   <span>100% Legal Work</span>
//                 </div>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a href="tel:+919876543210" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
//                   <Phone size={20} /> Call Now
//                 </a>
//                 <a href="#apply" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2">
//                   <FileCheck size={20} /> Apply Now
//                 </a>
//               </div>
//             </div>
            
//             {/* Right Form Card */}
//             <div id="apply" className="flex-1 w-full max-w-md">
//               <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Apply for Patta</h3>
//                 <p className="text-slate-500 mb-6 text-sm">Fill details to start the process.</p>
                
//                 <form className="space-y-4">
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name</label>
//                     <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Your Name" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone</label>
//                     <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Mobile Number" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Patta Type</label>
//                     <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer">
//                       <option>Select Type...</option>
//                       <option>Residential (आवासीय)</option>
//                       <option>Commercial (व्यावसायिक)</option>
//                       <option>Agricultural (कृषि)</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Address/Location</label>
//                     <textarea rows={2} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm resize-none" placeholder="Property Address"></textarea>
//                   </div>

//                   <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2">
//                     Submit Application
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PATTA TYPES --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
//               Types of Patta
//             </h2>
//             <p className="text-emerald-600 font-bold text-lg">
//               हम इन सभी प्रकार के पट्टे बनवाते हैं
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {pattaTypes.map((type, index) => (
//               <div key={index} className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center">
//                 <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:bg-emerald-600 transition-colors">
//                   <type.icon size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-1">{type.title}</h3>
//                 <p className="text-emerald-600 font-bold text-sm mb-3">{type.hindiTitle}</p>
//                 <p className="text-slate-500 text-sm leading-relaxed">{type.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- BENEFITS LIST --- */}
//       <section className="py-20 bg-emerald-50/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Benefits of Patta</h3>
//             <p className="text-slate-500 text-center mb-10">पट्टा होने के फायदे</p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {benefits.map((benefit, index) => (
//                 <div key={index} className="flex items-center bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
//                     <Check size={18} strokeWidth={3} />
//                   </div>
//                   <span className="font-medium text-slate-700">{benefit}</span>
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
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Process Flow</h2>
//             <p className="text-slate-500 text-lg">Simple 6-Step Patta Process</p>
//           </div>
          
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {process.map((item, index) => (
//                 <div key={index} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all">
//                   <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md border-2 border-white">
//                     {item.step}
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
//                   <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
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
//             <p className="text-emerald-600 font-medium">Patta Related Questions</p>
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
//           <h2 className="text-3xl font-bold mb-6">Start Your Patta Process Today</h2>
//           <p className="text-emerald-100 text-lg mb-8">Secure your property ownership with legal documents.</p>
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

// import {
//   Award,
//   Check,
//   Phone,
//   ArrowRight,
//   FileCheck,
//   Clock,
//   ShieldCheck,
//   ChevronDown,
//   Building2,
//   Landmark,
//   FileText,
// } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";

// export default function PattaCreationPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);

//   /* ---------------- FORM STATE ---------------- */
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     pattaType: "",
//     address: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//     >
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/patta-inquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();

//       if (!res.ok) throw new Error(result.message);

//       alert("✅ Patta inquiry submitted successfully");

//       setFormData({
//         name: "",
//         phone: "",
//         pattaType: "",
//         address: "",
//       });
//     } catch (error: any) {
//       alert(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- STATIC DATA ---------------- */
//   const pattaTypes = [
//     {
//       icon: Building2,
//       title: "Residential Patta",
//       hindiTitle: "आवासीय पट्टा",
//       description: "Patta for residential plots and housing purposes.",
//     },
//     {
//       icon: Landmark,
//       title: "Commercial Patta",
//       hindiTitle: "व्यावसायिक पट्टा",
//       description: "Patta for shops, offices, and businesses.",
//     },
//     {
//       icon: FileText,
//       title: "Agricultural Patta",
//       hindiTitle: "कृषि पट्टा",
//       description: "Patta for agricultural land records.",
//     },
//   ];

//   const benefits = [
//     "Legal ownership proof",
//     "Bank loan eligibility",
//     "Property registration",
//     "Mutation process",
//     "Building permission",
//     "Government scheme benefits",
//   ];

//   const faqs = [
//     {
//       question: "पट्टा क्या है?",
//       answer:
//         "पट्टा जमीन के मालिकाना हक का सरकारी सबूत होता है।",
//     },
//     {
//       question: "कौन से दस्तावेज़ लगते हैं?",
//       answer:
//         "आधार कार्ड, पहचान पत्र, पुराने जमीन के कागज़।",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Header />

//       {/* ---------------- HERO ---------------- */}
//       <section className="bg-slate-900 py-20 text-white">
//         <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
//           <div>
//             <Link
//               href="/#services"
//               className="text-emerald-400 flex items-center mb-6"
//             >
//               <ArrowRight className="rotate-180 mr-2" size={16} />
//               Back to Services
//             </Link>

//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//               पट्टा बनवाएं <br />
//               <span className="text-emerald-400">कानूनी और पक्का</span>
//             </h1>

//             <p className="text-slate-300 mb-8">
//               Complete patta creation process handled legally and securely.
//             </p>

//             <div className="flex gap-4 mb-8">
//               <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded">
//                 <Clock size={18} className="text-emerald-400" />
//                 30–90 Days
//               </div>
//               <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded">
//                 <ShieldCheck size={18} className="text-emerald-400" />
//                 100% Legal
//               </div>
//             </div>
//           </div>

//           {/* ---------------- FORM ---------------- */}
//           <div id="apply" className="bg-white rounded-2xl p-8 shadow-xl text-black">
//             <h3 className="text-2xl font-bold mb-6">Apply for Patta</h3>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-3 border rounded-xl"
//               />

//               <input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Mobile Number"
//                 required
//                 className="w-full px-4 py-3 border rounded-xl"
//               />

//               <select
//                 name="pattaType"
//                 value={formData.pattaType}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 border rounded-xl"
//               >
//                 <option value="">Select Patta Type</option>
//                 <option value="Residential">Residential</option>
//                 <option value="Commercial">Commercial</option>
//                 <option value="Agricultural">Agricultural</option>
//               </select>

//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Property Address"
//                 required
//                 className="w-full px-4 py-3 border rounded-xl"
//               />

//               <button
//                 disabled={loading}
//                 className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition"
//               >
//                 {loading ? "Submitting..." : "Submit Application"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- PATTA TYPES ---------------- */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
//           {pattaTypes.map((item, i) => (
//             <div
//               key={i}
//               className="p-6 bg-slate-50 rounded-xl text-center border"
//             >
//               <div className="w-16 h-16 mx-auto flex items-center justify-center bg-slate-900 text-white rounded-xl mb-4">
//                 <item.icon size={28} />
//               </div>
//               <h3 className="font-bold text-lg">{item.title}</h3>
//               <p className="text-emerald-600 font-semibold">
//                 {item.hindiTitle}
//               </p>
//               <p className="text-slate-500 text-sm mt-2">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- BENEFITS ---------------- */}
//       <section className="py-16 bg-emerald-50">
//         <div className="container mx-auto px-4 max-w-3xl grid md:grid-cols-2 gap-4">
//           {benefits.map((b, i) => (
//             <div key={i} className="flex items-center bg-white p-4 rounded-xl">
//               <Check className="text-emerald-600 mr-3" />
//               {b}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- FAQ ---------------- */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto px-4 max-w-2xl">
//           {faqs.map((faq, i) => (
//             <div key={i} className="mb-4 bg-white rounded-xl border">
//               <button
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 className="w-full p-4 flex justify-between items-center"
//               >
//                 <span className="font-bold">{faq.question}</span>
//                 <ChevronDown
//                   className={`transition ${
//                     openFaq === i ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openFaq === i && (
//                 <div className="p-4 text-slate-600 border-t">
//                   {faq.answer}
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

// import {
//   Award,
//   Check,
//   Phone,
//   ArrowRight,
//   FileCheck,
//   Clock,
//   ShieldCheck,
//   ChevronDown,
//   Building2,
//   Landmark,
//   FileText,
// } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";

// export default function PattaCreationPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [loading, setLoading] = useState(false);

//   /* ---------------- FORM STATE ---------------- */
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     pattaType: "",
//     address: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/patta-inquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();
//       if (!res.ok) throw new Error(result?.message || "Failed");

//       alert("✅ Patta inquiry submitted successfully");
//       setFormData({ name: "", phone: "", pattaType: "", address: "" });
//     } catch (error: any) {
//       alert(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- STATIC DATA ---------------- */
//   const pattaTypes = [
//     {
//       icon: Building2,
//       title: "Residential Patta",
//       hindiTitle: "आवासीय पट्टा",
//       description:
//         "Patta creation for residential plots and housing purposes with complete legal documentation.",
//     },
//     {
//       icon: Landmark,
//       title: "Commercial Patta",
//       hindiTitle: "व्यावसायिक पट्टा",
//       description: "Commercial land patta for shops, offices, and business establishments.",
//     },
//     {
//       icon: FileText,
//       title: "Agricultural Patta",
//       hindiTitle: "कृषि पट्टा",
//       description: "Patta for agricultural land with proper land use classification and records.",
//     },
//     {
//       icon: FileCheck,
//       title: "Government Patta",
//       hindiTitle: "सरकारी पट्टा",
//       description: "Assistance in obtaining patta for government allotted lands and schemes.",
//     },
//   ];

//   const benefits = [
//     "Legal ownership proof (कानूनी मालिकाना हक)",
//     "Bank loan eligibility (बैंक लोन में आसानी)",
//     "Property registration (प्रॉपर्टी रजिस्ट्री)",
//     "Mutation process (नामांतरण)",
//     "Building permission (निर्माण अनुमति)",
//     "Government scheme benefits (सरकारी योजनाओं का लाभ)",
//     "Property tax assessment (प्रॉपर्टी टैक्स)",
//     "Inheritance transfer (उत्तराधिकार)",
//   ];

//   const process = [
//     {
//       step: 1,
//       title: "Document Collection",
//       description: "हम आपके सभी ज़रूरी दस्तावेज़ इकट्ठे करेंगे (आधार, पुराने कागज़ आदि)।",
//     },
//     { step: 2, title: "File Preparation", description: "पट्टा आवेदन सही फॉर्मेट में तैयार करेंगे।" },
//     { step: 3, title: "Office Submission", description: "तहसील या नगर पालिका में फाइल जमा करेंगे।" },
//     { step: 4, title: "Site Verification", description: "सरकारी अधिकारी द्वारा मौका मुआयना (Site Inspection)।" },
//     { step: 5, title: "Approval", description: "सक्षम अधिकारी द्वारा पट्टा मंज़ूरी।" },
//     { step: 6, title: "Patta Delivery", description: "आपको आपका पट्टा मिल जाएगा।" },
//   ];

//   const faqs = [
//     {
//       question: "पट्टा क्या है और क्यों ज़रूरी है?",
//       englishQuestion: "What is Patta?",
//       answer:
//         "पट्टा जमीन के मालिकाना हक का सबसे बड़ा सरकारी सबूत है। इसके बिना बैंक लोन नहीं मिलता और जमीन बेचना मुश्किल होता है।",
//     },
//     {
//       question: "पट्टा बनवाने में कौन से दस्तावेज़ लगते हैं?",
//       englishQuestion: "Documents required?",
//       answer:
//         "आधार कार्ड, पहचान पत्र, पुराना बैनामा (Sale Deed), शपथ पत्र (Affidavit), और जमीन के पुराने रिकॉर्ड।",
//     },
//     {
//       question: "कितना समय लगता है?",
//       englishQuestion: "Time taken?",
//       answer: "पूरी प्रक्रिया में आमतौर पर 30 से 90 दिन लगते हैं। हम कोशिश करते हैं कि काम जल्दी हो।",
//     },
//     {
//       question: "खर्च कितना आएगा?",
//       englishQuestion: "Cost involved?",
//       answer:
//         "खर्च जमीन के क्षेत्रफल (Area) और सरकारी फीस पर निर्भर करता है। हम आपको पहले ही पूरा एस्टीमेट बता देंगे।",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header />

//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-slate-900 py-24 overflow-hidden">
//         {/* Background Glow */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
//           <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-700 rounded-full blur-[100px]" />
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
//             {/* Left Content */}
//             <div className="flex-1 text-center lg:text-left">
//               <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
//                 <Award className="w-4 h-4 text-emerald-400" />
//                 <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">
//                   Official Process
//                 </span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
//                 पट्टा बनवाएं <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
//                   कानूनी और पक्का
//                 </span>
//               </h1>

//               <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 We handle the complete Patta creation process. From documentation to government
//                 approval, get your legal land ownership hassle-free.
//               </p>

//               <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium text-slate-300">
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <Clock className="mr-2 text-emerald-400" size={18} />
//                   <span>30-90 Days Process</span>
//                 </div>
//                 <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
//                   <ShieldCheck className="mr-2 text-emerald-400" size={18} />
//                   <span>100% Legal Work</span>
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
//                   href="#apply"
//                   className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2"
//                 >
//                   <FileCheck size={20} /> Apply Now
//                 </a>
//               </div>
//             </div>

//             {/* Right Form Card */}
//             <div id="apply" className="flex-1 w-full max-w-md">
//               <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                   Apply for Patta
//                 </h3>
//                 <p className="text-slate-500 mb-6 text-sm">
//                   Fill details to start the process.
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                       Name
//                     </label>
//                     <input
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       type="text"
//                       className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
//                       placeholder="Your Name"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                       Phone
//                     </label>
//                     <input
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       type="tel"
//                       className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
//                       placeholder="Mobile Number"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                       Patta Type
//                     </label>
//                     <select
//                       name="pattaType"
//                       value={formData.pattaType}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer"
//                     >
//                       <option value="">Select Type...</option>
//                       <option value="Residential">Residential (आवासीय)</option>
//                       <option value="Commercial">Commercial (व्यावसायिक)</option>
//                       <option value="Agricultural">Agricultural (कृषि)</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                       Address/Location
//                     </label>
//                     <textarea
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       rows={2}
//                       required
//                       className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm resize-none"
//                       placeholder="Property Address"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
//                   >
//                     {loading ? "Submitting..." : "Submit Application"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PATTA TYPES --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
//               Types of Patta
//             </h2>
//             <p className="text-emerald-600 font-bold text-lg">
//               हम इन सभी प्रकार के पट्टे बनवाते हैं
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {pattaTypes.map((type, index) => (
//               <div
//                 key={index}
//                 className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center"
//               >
//                 <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:bg-emerald-600 transition-colors">
//                   <type.icon size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-1">{type.title}</h3>
//                 <p className="text-emerald-600 font-bold text-sm mb-3">{type.hindiTitle}</p>
//                 <p className="text-slate-500 text-sm leading-relaxed">{type.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- BENEFITS LIST --- */}
//       <section className="py-20 bg-emerald-50/50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
//               Benefits of Patta
//             </h3>
//             <p className="text-slate-500 text-center mb-10">पट्टा होने के फायदे</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {benefits.map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
//                     <Check size={18} strokeWidth={3} />
//                   </div>
//                   <span className="font-medium text-slate-700">{benefit}</span>
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
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
//               Process Flow
//             </h2>
//             <p className="text-slate-500 text-lg">Simple 6-Step Patta Process</p>
//           </div>

//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {process.map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all"
//                 >
//                   <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md border-2 border-white">
//                     {item.step}
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2 mt-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
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
//             <p className="text-emerald-600 font-medium">Patta Related Questions</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-300 transition-colors shadow-sm"
//               >
//                 <button
//                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   className="w-full flex items-center justify-between p-5 text-left"
//                   type="button"
//                 >
//                   <div>
//                     <span className="font-bold text-slate-800 block text-lg">{faq.question}</span>
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

//       {/* --- FOOTER CTA --- */}
//       <section className="py-16 bg-emerald-700 text-white text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6">Start Your Patta Process Today</h2>
//           <p className="text-emerald-100 text-lg mb-8">
//             Secure your property ownership with legal documents.
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

import {
  Award,
  Check,
  Phone,
  Mail,
  ArrowRight,
  FileCheck,
  Clock,
  ShieldCheck,
  ChevronDown,
  Building2,
  Landmark,
  FileText,
  Users,
  Shield,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function PattaCreationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* ---------------- FORM STATE ---------------- */
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pattaType: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone || !formData.pattaType) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/patta-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result?.message || "Failed");

      setSuccess(true);
      setFormData({ name: "", phone: "", pattaType: "", address: "" });
    } catch (error: any) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- STATIC DATA ---------------- */
  const pattaTypes = [
    {
      icon: Building2,
      title: "Residential Patta",
      hindiTitle: "आवासीय पट्टा",
      description:
        "Patta creation for residential plots and housing purposes with complete legal documentation.",
    },
    {
      icon: Landmark,
      title: "Commercial Patta",
      hindiTitle: "व्यावसायिक पट्टा",
      description: "Commercial land patta for shops, offices, and business establishments.",
    },
    {
      icon: Award,
      title: "Agricultural Patta",
      hindiTitle: "कृषि पट्टा",
      description: "Patta for agricultural land with proper land use classification and records.",
    },
    {
      icon: FileCheck,
      title: "Government Patta",
      hindiTitle: "सरकारी पट्टा",
      description: "Assistance in obtaining patta for government allotted lands and schemes.",
    },
  ];

  const benefits = [
    "Legal ownership proof (कानूनी मालिकाना हक)",
    "Bank loan eligibility (बैंक लोन में आसानी)",
    "Property registration (प्रॉपर्टी रजिस्ट्री)",
    "Mutation process (नामांतरण)",
    "Building permission (निर्माण अनुमति)",
    "Government scheme benefits (सरकारी योजनाओं का लाभ)",
    "Property tax assessment (प्रॉपर्टी टैक्स)",
    "Inheritance transfer (उत्तराधिकार)",
  ];

  const process = [
    {
      step: 1,
      title: "Document Collection",
      hindiTitle: "दस्तावेज़ संग्रह",
      description: "Gather all required documents including identity proof, land records, and affidavits.",
    },
    { 
      step: 2, 
      title: "Application Preparation", 
      hindiTitle: "आवेदन तैयारी",
      description: "Prepare and submit patta application with proper format and attachments." 
    },
    { 
      step: 3, 
      title: "Government Submission", 
      hindiTitle: "सरकारी जमा",
      description: "Submit application to tehsil office with required fees." 
    },
    { 
      step: 4, 
      title: "Site Verification", 
      hindiTitle: "साइट सत्यापन",
      description: "Revenue department conducts site inspection and verification." 
    },
    { 
      step: 5, 
      title: "Approval Process", 
      hindiTitle: "अनुमोदन प्रक्रिया",
      description: "Application reviewed and approved by competent authority." 
    },
    { 
      step: 6, 
      title: "Patta Delivery", 
      hindiTitle: "पट्टा वितरण",
      description: "Receive official patta document with all details." 
    },
  ];

  const faqs = [
    {
      question: "पट्टा क्या है और क्यों ज़रूरी है?",
      englishQuestion: "What is Patta and why is it important?",
      answer:
        "पट्टा जमीन के मालिकाना हक का सबसे बड़ा सरकारी सबूत है। इसके बिना बैंक लोन नहीं मिलता और जमीन बेचना मुश्किल होता है। यह प्रॉपर्टी ट्रांजैक्शन, बिल्डिंग परमिशन और कानूनी मामलों में आवश्यक है।",
    },
    {
      question: "पट्टा बनवाने में कौन से दस्तावेज़ लगते हैं?",
      englishQuestion: "What documents are required?",
      answer:
        "आधार कार्ड, पैन कार्ड, पहचान पत्र, पुराना बैनामा (Sale Deed), शपथ पत्र (Affidavit), जमीन के पुराने रिकॉर्ड, फोटोग्राफ्स, और संबंधित पक्षों से NOC।",
    },
    {
      question: "कितना समय लगता है?",
      englishQuestion: "How long does it take?",
      answer: "पूरी प्रक्रिया में आमतौर पर 30 से 90 दिन लगते हैं। यह दस्तावेज़ों की पूर्णता, सत्यापन आवश्यकताओं और सरकारी कार्यालय की प्रोसेसिंग पर निर्भर करता है।",
    },
    {
      question: "खर्च कितना आएगा?",
      englishQuestion: "What is the cost?",
      answer:
        "खर्च में सरकारी फीस (जो जमीन के क्षेत्रफल और स्थान पर निर्भर करती है), स्टाम्प ड्यूटी, दस्तावेज़ शुल्क, और हमारी सेवा शुल्क शामिल है। हम प्रक्रिया शुरू करने से पहले विस्तृत लागत विवरण प्रदान करते हैं।",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] pt-24 pb-32 overflow-hidden">
        {/* Background Glow */}
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
                <Award size={14} />
                Official Process
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                पट्टा बनवाएं <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">
                  कानूनी और पक्का
                </span>
              </h1>

              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Complete patta creation services with proper verification, documentation, 
                and government approval process. Establish your legal land ownership with ease.
              </p>

              <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium">
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 text-gray-300">
                  <Clock className="mr-2 text-[#e8734a]" size={18} />
                  <span>30-90 Days Process</span>
                </div>
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 text-gray-300">
                  <ShieldCheck className="mr-2 text-[#e8734a]" size={18} />
                  <span>100% Legal Work</span>
                </div>
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700 text-gray-300">
                  <Users className="mr-2 text-[#e8734a]" size={18} />
                  <span>Expert Assistance</span>
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
                  href="#apply"
                  className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-gray-800 transition-all"
                >
                  <FileCheck size={20} /> Apply Now
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div id="apply" className="w-full max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Apply for Patta
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Fill details to start the process.
                </p>

                {success ? (
                  <div className="bg-green-500/20 border border-green-500/40 text-white p-4 rounded-xl text-center font-bold mb-4">
                    <Check className="inline mr-2" size={20} />
                    Application Submitted Successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        placeholder="Mobile Number"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                        Patta Type
                      </label>
                      <select
                        name="pattaType"
                        value={formData.pattaType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-gray-400 rounded-xl focus:border-[#e8734a] focus:outline-none transition-all text-sm cursor-pointer"
                      >
                        <option value="">Select Type...</option>
                        <option value="Residential">Residential (आवासीय)</option>
                        <option value="Commercial">Commercial (व्यावसायिक)</option>
                        <option value="Agricultural">Agricultural (कृषि)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                        Address/Location
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={2}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl focus:border-[#e8734a] focus:outline-none transition-all text-sm resize-none"
                        placeholder="Property Address"
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
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PATTA TYPES --- */}
      <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fef7f0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of Patta We Handle
            </h2>
            <p className="text-xl text-[#b54035] font-semibold">
              हम इन सभी प्रकार के पट्टे बनवाते हैं
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pattaTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#fce8e8] text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#e15e5e] rounded-xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                  <type.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{type.title}</h3>
                <p className="text-[#b54035] font-bold text-sm mb-3">{type.hindiTitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS LIST --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Benefits of Having a Patta
            </h2>
            <p className="text-xl text-[#b54035] font-semibold">
              पट्टा होने के फायदे
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gradient-to-r from-[#fefdf9] to-[#fef7f0] p-4 rounded-xl border border-[#fdeee0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-green-100 p-1.5 rounded-full mr-3">
                  <Check className="text-green-600 w-4 h-4" />
                </div>
                <span className="font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fdf2f2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Patta Creation Process
            </h2>
            <p className="text-xl text-[#b54035] font-semibold">
              पट्टा बनाने की प्रक्रिया
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e8734a] to-[#e15e5e] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-[#e8734a] to-[#e15e5e] mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-xs font-semibold text-[#b54035] mb-2">{item.hindiTitle}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
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
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  type="button"
                >
                  <div>
                    <span className="font-bold text-gray-800 block text-lg">{faq.question}</span>
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

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help with Patta Creation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert assistance for hassle-free patta creation process.
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