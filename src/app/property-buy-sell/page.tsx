// 'use client'
// import { ArrowLeftRight, Check, Phone, Mail, MapPin, ArrowRight, Shield, TrendingUp, Users, FileCheck, ChevronDown, Home, Key, BadgeCheck } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";
// export default function PropertyBuySellPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const features = [
//     {
//       icon: TrendingUp,
//       title: "सही दाम की गारंटी",
//       englishTitle: "Best Price Guarantee",
//       description: "आपकी जमीन या मकान का बाजार भाव देखकर सही कीमत लगाएंगे। कोई धोखा नहीं, पूरी ईमानदारी से काम करेंगे।"
//     },
//     {
//       icon: FileCheck,
//       title: "कागजात की पक्की जांच",
//       englishTitle: "Document Check",
//       description: "रजिस्ट्री, नक्शा, पट्टा - सब कुछ बारीकी से चेक होगा। आपकी सुरक्षा हमारी जिम्मेदारी है।"
//     },
//     {
//       icon: Users,
//       title: "बातचीत में पूरा सहयोग",
//       englishTitle: "Negotiation Help",
//       description: "खरीदार या बेचने वाले से अच्छी बातचीत करके आपको फायदे में रखेंगे। आपका नुकसान नहीं होने देंगे।"
//     },
//     {
//       icon: Shield,
//       title: "धोखे से सुरक्षा",
//       englishTitle: "Fraud Protection",
//       description: "नकली कागजात और धोखेबाज लोगों से सावधान रहें। हम पूरी जांच-पड़ताल करके ही सौदा पक्का करते हैं।"
//     }
//   ];

//   const process = [
//     { 
//       step: 1, 
//       title: "मुलाकात करें", 
//       englishTitle: "Meet Us",
//       description: "हमें बताएं कि आपको क्या चाहिए - खरीदना है या बेचना? बजट क्या है?",
//       icon: Users
//     },
//     { 
//       step: 2, 
//       title: "प्रॉपर्टी देखें", 
//       englishTitle: "Property Visit",
//       description: "हम आपको सबसे बेहतरीन जमीन या मकान दिखाएंगे जो आपके बजट में हो।",
//       icon: MapPin
//     },
//     { 
//       step: 3, 
//       title: "सौदा पक्का करें", 
//       englishTitle: "Finalize Deal",
//       description: "कागजात चेक करने के बाद, सही दाम पर सौदा तय करेंगे।",
//       icon: Handshake
//     },
//     { 
//       step: 4, 
//       title: "रजिस्ट्री और चाबी", 
//       englishTitle: "Registry & Handover",
//       description: "सरकारी काम पूरा करके आपको आपकी नई प्रॉपर्टी की चाबी सौंपेंगे।",
//       icon: Key
//     }
//   ];

//   // Helper component for Icon in Process
//   function Handshake(props: any) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="m11 17 2 2a1 1 0 1 0 3-3" />
//         <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 2.85-.27l2.17-2.17a1 1 0 0 0-1.42-1.42l-2.17 2.17a1 1 0 0 1-1.42 0L8.09 1.49a3 3 0 0 0-4.24 0l-.17.17a1 1 0 0 1-1.42 0L.88 3.07a1 1 0 0 0 0 1.42l3.88 3.88a3 3 0 0 0 0 4.24l-2.12 2.12a1 1 0 0 0 0 1.42l2.12 2.12a3 3 0 0 0 4.24 0l.88-.88a1 1 0 0 1 3-3Z" />
//       </svg>
//     )
//   }

//   const faqs = [
//     {
//       question: "जमीन बेचने के लिए कौन से कागजात चाहिए?",
//       englishQuestion: "Documents needed to sell?",
//       answer: "पुरानी रजिस्ट्री, जमाबंदी, आधार कार्ड, पैन कार्ड और फोटो। बाकी हम आपको बता देंगे।"
//     },
//     {
//       question: "कितना समय लगता है?",
//       englishQuestion: "Time taken?",
//       answer: "कागजात सही होने पर 15-20 दिन में रजिस्ट्री हो सकती है।"
//     },
//     {
//       question: "आपकी फीस क्या है?",
//       englishQuestion: "Service Charges?",
//       answer: "फीस डील पर निर्भर करती है। हम काम शुरू करने से पहले ही सब कुछ साफ बता देते हैं।"
//     },
//     {
//       question: "क्या लोन मिल सकता है?",
//       englishQuestion: "Loan Assistance?",
//       answer: "जी हाँ, हम बैंक लोन पास कराने में भी आपकी पूरी मदद करते हैं।"
//     }
//   ];

//   const propertyTypes = [
//     { name: "रिहायशी प्लॉट", english: "Residential Plot", icon: "🏘️" },
//     { name: "खेती की जमीन", english: "Agricultural Land", icon: "🌾" },
//     { name: "दुकान/गोदाम", english: "Commercial", icon: "🏪" },
//     { name: "बना हुआ घर", english: "Ready House", icon: "🏠" },
//   ];
// const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [type, setType] = useState<"Buy" | "Sell" | "">("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (!name || !phone || !type) {
//       setError("Please fill all fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("https://propertybackend-6bou.onrender.com/api/consultation", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, phone, type }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Something went wrong");
//       }

//       setSuccess(true);
//       setName("");
//       setPhone("");
//       setType("");
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header/>
//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
//         {/* Background Patterns */}
//         <div className="absolute inset-0 opacity-20">
//             <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-600 rounded-full blur-[100px]"></div>
//             <div className="absolute top-1/2 -right-24 w-80 h-80 bg-green-500 rounded-full blur-[100px]"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
          
//           {/* Back Link */}
//           <Link href="/#services" className="inline-flex items-center text-green-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
//             <ArrowRight className="rotate-180 mr-2" size={16} />
//             Back to Services
//           </Link>

//           <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            
//             {/* Left Content */}
//             <div className="flex-1 text-center lg:text-left">
//               <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
//                 <BadgeCheck className="w-4 h-4 text-green-400" />
//                 <span className="text-green-100 text-xs font-bold uppercase tracking-wider">Trusted by 500+ Families</span>
//               </div>
              
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
//                 प्रॉपर्टी खरीदें या बेचें <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">भरोसे के साथ</span>
//               </h1>
              
//               <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 Buy, Sell & Rent Properties with complete transparency. We handle everything from paperwork to possession.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a href="tel:+919876543210" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2">
//                   <Phone size={20} /> Call Now
//                 </a>
//                 <a href="#contact" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2">
//                   <Mail size={20} /> Enquiry
//                 </a>
//               </div>
//             </div>

//             {/* Right Form Card */}
            
//         <div className="container mx-auto px-4 flex justify-center">
//           <div className="w-full max-w-md">
//             <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-2 bg-green-500" />

//               <h3 className="text-2xl font-bold text-slate-900 mb-1">
//                 Free Consultation
//               </h3>
//               <p className="text-slate-500 mb-6 text-sm">
//                 Fill the form to get expert advice on property.
//               </p>

//               {/* SUCCESS MESSAGE */}
//               {success && (
//                 <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-4">
//                   <CheckCircle size={18} />
//                   <span className="text-sm font-semibold">
//                     Request submitted successfully
//                   </span>
//                 </div>
//               )}

//               {/* ERROR MESSAGE */}
//               {error && (
//                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm font-semibold">
//                   {error}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* NAME */}
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
//                     placeholder="Your Name"
//                   />
//                 </div>

//                 {/* PHONE */}
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
//                     placeholder="Mobile Number"
//                   />
//                 </div>

//                 {/* BUY / SELL */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
//                     type === "Buy"
//                       ? "border-green-500 bg-green-50"
//                       : "border-slate-200"
//                   }`}>
//                     <input
//                       type="radio"
//                       name="type"
//                       value="Buy"
//                       checked={type === "Buy"}
//                       onChange={() => setType("Buy")}
//                       className="accent-green-600"
//                     />
//                     <span className="font-bold text-slate-700">Buy</span>
//                   </label>

//                   <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
//                     type === "Sell"
//                       ? "border-green-500 bg-green-50"
//                       : "border-slate-200"
//                   }`}>
//                     <input
//                       type="radio"
//                       name="type"
//                       value="Sell"
//                       checked={type === "Sell"}
//                       onChange={() => setType("Sell")}
//                       className="accent-green-600"
//                     />
//                     <span className="font-bold text-slate-700">Sell</span>
//                   </label>
//                 </div>

//                 {/* SUBMIT */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <Loader2 className="animate-spin" size={18} />
//                       Submitting...
//                     </>
//                   ) : (
//                     "Submit Request"
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
     

//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES / FEATURES --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2 block">Why Choose Us</span>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">हमारी सेवाएं सबसे खास क्यों?</h2>
//             <p className="text-slate-500 text-lg">We ensure transparency and trust in every deal.</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((item, index) => (
//               <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-green-100 group">
//                 <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 transition-colors">
//                   <item.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
//                 <p className="text-xs font-bold text-green-600 uppercase mb-3">{item.englishTitle}</p>
//                 <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- HOW IT WORKS --- */}
//       <section className="py-24 bg-slate-900 text-white overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between mb-16">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-2">काम करने का तरीका</h2>
//               <p className="text-green-400 font-medium">Simple 4-Step Process</p>
//             </div>
//             <div className="hidden md:block">
//                <div className="flex gap-2">
//                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
//                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
//                </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8 relative">
//             {/* Connecting Line */}
//             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-0"></div>

//             {process.map((step, index) => (
//               <div key={index} className="relative z-10 group">
//                 <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center mb-6 mx-auto group-hover:border-green-500 transition-colors shadow-xl">
//                   <step.icon className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors" />
//                   <div className="absolute top-0 right-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold border-4 border-slate-900">
//                     {step.step}
//                   </div>
//                 </div>
//                 <div className="text-center px-2">
//                   <h3 className="text-xl font-bold mb-1">{step.title}</h3>
//                   <p className="text-green-400 text-xs font-bold uppercase mb-3">{step.englishTitle}</p>
//                   <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROPERTY TYPES --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-extrabold text-slate-900 mb-12">किस तरह की प्रॉपर्टी?</h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {propertyTypes.map((type, idx) => (
//               <div key={idx} className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-lg transition-all cursor-pointer">
//                 <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{type.icon}</div>
//                 <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">{type.name}</h3>
//                 <p className="text-slate-500 text-sm mt-1">{type.english}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FAQ --- */}
//       <section className="py-24 bg-slate-50 border-t border-slate-200">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-extrabold text-slate-900 mb-2">सवाल-जवाब (FAQ)</h2>
//             <p className="text-slate-500">Frequently Asked Questions</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-green-300 transition-colors">
//                 <button
//                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                   className="w-full flex items-center justify-between p-5 text-left"
//                 >
//                   <div className="flex-1 pr-4">
//                     <span className="text-lg font-bold text-slate-800 block">{faq.question}</span>
//                     <span className="text-xs font-bold text-green-600 uppercase mt-1 block">{faq.englishQuestion}</span>
//                   </div>
//                   <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
//                 </button>
//                 <div className={`px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 ${openFaq === index ? 'block' : 'hidden'}`}>
//                   {faq.answer}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CTA FOOTER --- */}
//       <section className="py-20 bg-green-600 text-white text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-5xl font-extrabold mb-6">आज ही शुरुआत करें!</h2>
//           <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
//             चाहे घर खरीदना हो या बेचना, हम आपके साथ हैं। अभी संपर्क करें और मुफ्त सलाह लें।
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a href="tel:+919876543210" className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
//               <Phone size={20} /> कॉल करें
//             </a>
//             <a href="#contact" className="bg-green-700 text-white border-2 border-green-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-all flex items-center justify-center gap-2">
//               <Mail size={20} /> मैसेज भेजें
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
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   Shield,
//   TrendingUp,
//   Users,
//   FileCheck,
//   ChevronDown,
//   Key,
//   BadgeCheck,
//   Loader2,
//   CheckCircle,
// } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";

// /* ---------- Handshake Icon ---------- */
// function Handshake(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m11 17 2 2a1 1 0 1 0 3-3" />
//       <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 2.85-.27l2.17-2.17a1 1 0 0 0-1.42-1.42l-2.17 2.17a1 1 0 0 1-1.42 0Z" />
//     </svg>
//   );
// }

// export default function PropertyBuySellPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   /* ---------- FORM STATE ---------- */
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [type, setType] = useState<"Buy" | "Sell" | "">("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   /* ---------- SUBMIT ---------- */
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (!name || !phone || !type) {
//       setError("Please fill all fields");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await fetch("https://propertybackend-6bou.onrender.com/api/consultation", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, phone, type }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);

//       setSuccess(true);
//       setName("");
//       setPhone("");
//       setType("");
//     } catch (err: any) {
//       setError(err.message || "Server Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------- DATA ---------- */
//   const features = [
//     { icon: TrendingUp, title: "सही दाम की गारंटी", englishTitle: "Best Price", description: "बाजार भाव के अनुसार सही कीमत।" },
//     { icon: FileCheck, title: "कागजात जांच", englishTitle: "Documents", description: "रजिस्ट्री, नक्शा, पट्टा जांच।" },
//     { icon: Users, title: "बातचीत सहयोग", englishTitle: "Negotiation", description: "आपके फायदे की बात।" },
//     { icon: Shield, title: "धोखे से सुरक्षा", englishTitle: "Fraud Safety", description: "पूरी तरह सुरक्षित सौदा।" },
//   ];

//   const process = [
//     { step: 1, title: "मुलाकात", englishTitle: "Meet Us", icon: Users },
//     { step: 2, title: "प्रॉपर्टी देखें", englishTitle: "Visit", icon: MapPin },
//     { step: 3, title: "सौदा तय", englishTitle: "Deal", icon: Handshake },
//     { step: 4, title: "रजिस्ट्री", englishTitle: "Registry", icon: Key },
//   ];

//   const faqs = [
//     { question: "कौन से कागजात?", englishQuestion: "Documents?", answer: "रजिस्ट्री, आधार, पैन।" },
//     { question: "कितना समय?", englishQuestion: "Time?", answer: "15–20 दिन।" },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Header />

//       {/* ---------- HERO ---------- */}
//       <section className="bg-slate-900 py-20">
//         <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT */}
//           <div className="text-white">
//             <BadgeCheck className="text-green-400 mb-4" />
//             <h1 className="text-4xl font-extrabold mb-4">
//               प्रॉपर्टी खरीदें या बेचें <br />
//               <span className="text-green-400">भरोसे के साथ</span>
//             </h1>
//             <p className="text-slate-300 mb-6">
//               Complete transparency & paperwork handled.
//             </p>
//             <Link href="/#services" className="inline-flex items-center text-green-400">
//               <ArrowRight className="rotate-180 mr-2" /> Back
//             </Link>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl">
//             <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>

//             {success && (
//               <div className="flex gap-2 bg-green-50 p-3 rounded-xl mb-4 text-green-700">
//                 <CheckCircle size={18} /> Submitted Successfully
//               </div>
//             )}

//             {error && (
//               <div className="bg-red-50 text-red-700 p-3 rounded-xl mb-4">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//                 className="w-full p-3 border rounded-xl"
//               />
//               <input
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Phone"
//                 className="w-full p-3 border rounded-xl"
//               />

//               <div className="grid grid-cols-2 gap-4">
//                 {["Buy", "Sell"].map((v) => (
//                   <label key={v} className="border rounded-xl p-3 text-center cursor-pointer">
//                     <input
//                       type="radio"
//                       checked={type === v}
//                       onChange={() => setType(v as any)}
//                       className="mr-2"
//                     />
//                     {v}
//                   </label>
//                 ))}
//               </div>

//               <button className="w-full bg-slate-900 text-white py-3 rounded-xl">
//                 {loading ? <Loader2 className="animate-spin mx-auto" /> : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

'use client'
import { ArrowLeftRight, Check, Phone, Mail, MapPin, ArrowRight, Shield, TrendingUp, Users, FileCheck, ChevronDown, Home, Key, BadgeCheck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { CheckCircle } from "lucide-react";
import { Loader2 } from "lucide-react";
/* ---------- Handshake Icon ---------- */
function Handshake(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 2.85-.27l2.17-2.17a1 1 0 0 0-1.42-1.42l-2.17 2.17a1 1 0 0 1-1.42 0L8.09 1.49a3 3 0 0 0-4.24 0l-.17.17a1 1 0 0 1-1.42 0L.88 3.07a1 1 0 0 0 0 1.42l3.88 3.88a3 3 0 0 0 0 4.24l-2.12 2.12a1 1 0 0 0 0 1.42l2.12 2.12a3 3 0 0 0 4.24 0l.88-.88a1 1 0 0 1 3-3Z" />
    </svg>
  );
}

export default function PropertyBuySellPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ---------- FORM STATE ---------- */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"Buy" | "Sell" | "">("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !phone || !type) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://propertybackend-6bou.onrender.com/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, type }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess(true);
      setName("");
      setPhone("");
      setType("");
    } catch (err: any) {
      setError(err.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- DATA ---------- */
  const features = [
    { icon: TrendingUp, title: "सही दाम की गारंटी", englishTitle: "Best Price", description: "बाजार भाव के अनुसार सही कीमत।" },
    { icon: FileCheck, title: "कागजात जांच", englishTitle: "Documents", description: "रजिस्ट्री, नक्शा, पट्टा जांच।" },
    { icon: Users, title: "बातचीत सहयोग", englishTitle: "Negotiation", description: "आपके फायदे की बात।" },
    { icon: Shield, title: "धोखे से सुरक्षा", englishTitle: "Fraud Safety", description: "पूरी तरह सुरक्षित सौदा।" },
  ];

  const process = [
    { step: 1, title: "मुलाकात", englishTitle: "Meet Us", icon: Users },
    { step: 2, title: "प्रॉपर्टी देखें", englishTitle: "Visit", icon: MapPin },
    { step: 3, title: "सौदा तय", englishTitle: "Deal", icon: Handshake },
    { step: 4, title: "रजिस्ट्री", englishTitle: "Registry", icon: Key },
  ];

  const propertyTypes = [
    { name: "रिहायशी प्लॉट", english: "Residential Plot", icon: "🏘️" },
    { name: "खेती की जमीन", english: "Agricultural Land", icon: "🌾" },
    { name: "दुकान/गोदाम", english: "Commercial", icon: "🏪" },
    { name: "बना हुआ घर", english: "Ready House", icon: "🏠" },
  ];

  const faqs = [
    { question: "कौन से कागजात?", englishQuestion: "Documents?", answer: "रजिस्ट्री, आधार, पैन।" },
    { question: "कितना समय?", englishQuestion: "Time?", answer: "15–20 दिन।" },
    { question: "आपकी फीस?", englishQuestion: "Charges?", answer: "काम होने पर।" },
    { question: "लोन मिलेगा?", englishQuestion: "Loan?", answer: "हाँ, हम मदद करेंगे।" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative bg-slate-900 pt-24 pb-32 overflow-hidden border-b border-green-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-slate-900 to-slate-900 opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <BadgeCheck size={14} /> 100% Trusted Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                प्रॉपर्टी खरीदें या बेचें <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">भरोसे के साथ</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Buy, Sell & Rent Properties with complete transparency. We handle everything from paperwork to possession.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25">
                  <Phone size={20} /> Call Now
                </a>
                <Link href="#contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold border border-white/10 backdrop-blur-sm transition-all">
                  <Mail size={20} /> Enquiry
                </Link>
              </div>
            </div>

            {/* Right Form */}
            <div id="contact" className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden max-w-md mx-auto w-full">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Free Consultation</h3>
                <p className="text-sm text-slate-500 mt-1">Get expert advice instantly</p>
              </div>

              {/* {success ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center justify-center gap-2 font-bold mb-4 border border-green-200">
                  <CheckCircle size={20} /> Request Sent!
                </div>
              ) : ( */}
              {success ? (
  <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center justify-center gap-2 font-bold mb-4 border border-green-200">
    <CheckCircle size={20} />
    Request Sent!
  </div>
) : (
  

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="आपका नाम (Name)"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-medium text-slate-900"
                    required
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="मोबाइल नंबर (Phone)"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-medium text-slate-900"
                    required
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    {["Buy", "Sell"].map((option) => (
                      <label 
                        key={option} 
                        className={`cursor-pointer border rounded-xl p-3 flex items-center justify-center gap-2 font-bold transition-all ${
                          type === option 
                            ? 'bg-green-50 border-green-500 text-green-700' 
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={option}
                          checked={type === option}
                          onChange={() => setType(option as any)}
                          className="w-4 h-4 accent-green-600"
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  <button 
                    disabled={loading}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                  >
                  {loading ? <Loader2 className="animate-spin" /> : "Submit Request"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">हमारी सेवाएं</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We provide end-to-end property solutions with trust and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 transition-colors">
                  <f.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs font-bold text-green-600 uppercase mb-3 tracking-wider">{f.englishTitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">काम करने का तरीका</h2>
            <p className="text-green-400 font-medium">Simple 4-Step Process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>

            {process.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center mb-6 shadow-xl group-hover:border-green-500 transition-colors relative">
                  <step.icon className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold border-4 border-slate-900">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-green-400 transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">{step.englishTitle}</p>
                <p className="text-slate-400 text-sm max-w-[200px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROPERTY TYPES ---------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">किस तरह की प्रॉपर्टी?</h2>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-600"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {propertyTypes.map((t, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center hover:border-green-500 hover:shadow-lg transition-all group cursor-pointer">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{t.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">{t.name}</h3>
                <p className="text-slate-500 text-xs mt-1 font-medium">{t.english}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">FAQ (सवाल-जवाब)</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-green-300 transition-colors shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div>
                    <span className="font-bold text-slate-800 block text-lg">{faq.question}</span>
                    <span className="text-xs font-bold text-green-600 uppercase mt-1 block">{faq.englishQuestion}</span>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 bg-green-50/30">
                    {faq.answer}
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











