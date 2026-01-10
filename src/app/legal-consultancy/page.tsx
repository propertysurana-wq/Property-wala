
// 'use client'
// import { Scale, Check, Phone, Mail, ArrowRight, FileText, Users, Shield, ChevronDown, Gavel, FileSearch, AlertTriangle, PenTool, Scale3d } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Footer from "@/components/footer/footer";
// import Header from "@/components/header/header";
// export default function LegalConsultancyPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const services = [
//     {
//       icon: FileText,
//       title: "Legal Documentation",
//       hindiTitle: "कानूनी दस्तावेज़",
//       description: "Drafting of sale deeds, agreements, POA, wills, and all property-related legal papers."
//     },
//     {
//       icon: Gavel,
//       title: "Dispute Resolution",
//       hindiTitle: "विवाद समाधान",
//       description: "Expert assistance in resolving property disputes through mediation or legal action."
//     },
//     {
//       icon: FileSearch,
//       title: "Title Search Report",
//       hindiTitle: "टाइटल सर्च रिपोर्ट",
//       description: "Legal opinion on property title, ownership history, and encumbrance check."
//     },
//     {
//       icon: PenTool,
//       title: "Agreement Drafting",
//       hindiTitle: "एग्रीमेंट ड्राफ्टिंग",
//       description: "Drafting of rent agreements, partnership deeds, and collaboration contracts."
//     }
//   ];

//   const legalServices = [
//     "Property Title Verification (टाइटल जांच)",
//     "Sale Deed Drafting (बैनामा लेखन)",
//     "Gift Deed (उपहार विलेख)",
//     "Will & Testament (वसीयत)",
//     "Power of Attorney (मुख्तारनामा)",
//     "Partition Deed (बंटवारा)",
//     "Lease Agreement (किरायानामा)",
//     "Boundary Disputes (सीमा विवाद)",
//     "Inheritance Matters (विरासत)",
//     "Revenue Court Cases (राजस्व मामले)"
//   ];

//   const whyChooseUs = [
//     {
//       icon: Users,
//       title: "Experienced Lawyers",
//       description: "Our panel of expert property lawyers ensures accurate legal advice."
//     },
//     {
//       icon: Shield,
//       title: "100% Confidential",
//       description: "We maintain strict confidentiality of all your legal documents and matters."
//     },
//     {
//       icon: AlertTriangle,
//       title: "Risk Analysis",
//       description: "We identify potential legal risks before you sign any deal."
//     }
//   ];

//   const faqs = [
//     {
//       question: "आप कौन से कानूनी मामले देखते हैं?",
//       englishQuestion: "What matters do you handle?",
//       answer: "हम प्रॉपर्टी से जुड़े सभी मामले देखते हैं - टाइटल चेक, बैनामा, विवाद, वसीयत, बंटवारा, और कोर्ट केस।"
//     },
//     {
//       question: "कानूनी सलाह की फीस कितनी है?",
//       englishQuestion: "Consultation Cost?",
//       answer: "पहली सलाह (Initial Consultation) मुफ्त है। अगर विस्तृत रिपोर्ट या ड्राफ्टिंग चाहिए, तो फीस केस की जटिलता पर निर्भर करेगी।"
//     },
//     {
//       question: "क्या आप कोर्ट में केस लड़ते हैं?",
//       englishQuestion: "Court Representation?",
//       answer: "जी हाँ, हमारे अनुभवी वकील दीवानी (Civil) और राजस्व (Revenue) कोर्ट में आपका पक्ष रख सकते हैं।"
//     },
//     {
//       question: "विवाद सुलझाने में कितना समय लगता है?",
//       englishQuestion: "Time for resolution?",
//       answer: "यह केस पर निर्भर करता है। आपसी समझौते (Mediation) से मामला जल्दी सुलझ सकता है, कोर्ट केस में समय लग सकता है।"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header/>
//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-slate-900 py-24 overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
//           <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-800 rounded-full blur-[100px]"></div>
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
//                 <Scale className="w-4 h-4 text-emerald-400" />
//                 <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Expert Legal Advice</span>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
//                 कानूनी सलाह <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">और सहयोग</span>
//               </h1>
              
//               <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
//                 Expert legal guidance for property disputes, documentation, and compliance. Protect your rights with professional support.
//               </p>
              
//               <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 mb-8 max-w-md mx-auto lg:mx-0 border border-slate-700">
//                 <p className="text-emerald-400 font-bold flex items-center justify-center lg:justify-start gap-2">
//                   <Check size={18} /> Free Initial Consultation
//                 </p>
//                 <p className="text-slate-400 text-sm mt-1">Talk to our lawyers before proceeding.</p>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <a href="tel:+919876543210" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
//                   <Phone size={20} /> Call Lawyer
//                 </a>
//                 <a href="#consult" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2">
//                   <Gavel size={20} /> Book Appointment
//                 </a>
//               </div>
//             </div>
            
//             {/* Right Form Card */}
//             <div id="consult" className="flex-1 w-full max-w-md">
//               <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Legal Consultation</h3>
//                 <p className="text-slate-500 mb-6 text-sm">Tell us your legal issue.</p>
                
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
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Matter Type</label>
//                     <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer">
//                       <option>Select Issue...</option>
//                       <option>Dispute Resolution</option>
//                       <option>Documentation</option>
//                       <option>Title Check</option>
//                       <option>Other</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Description</label>
//                     <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm resize-none" placeholder="Briefly describe your case"></textarea>
//                   </div>

//                   <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2">
//                     Request Call Back
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES GRID --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
//               Our Legal Services
//             </h2>
//             <p className="text-emerald-600 font-bold text-lg">
//               कानूनी सेवाएं
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//               <div key={index} className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center">
//                 <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:bg-emerald-600 transition-colors">
//                   <service.icon size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
//                 <p className="text-emerald-600 font-bold text-sm mb-3">{service.hindiTitle}</p>
//                 <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- WHY CHOOSE US --- */}
//       <section className="py-20 bg-emerald-50/50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Choose Us?</h2>
//             <p className="text-slate-500">Expertise you can trust</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {whyChooseUs.map((item, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 text-center hover:shadow-md transition-all">
//                 <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4 mx-auto">
//                   <item.icon size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
//                 <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FULL LIST --- */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Areas of Practice</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {legalServices.map((service, index) => (
//                 <div key={index} className="flex items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors">
//                   <Scale className="text-emerald-600 w-5 h-5 mr-3 flex-shrink-0" />
//                   <span className="font-medium text-slate-700">{service}</span>
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
//             <p className="text-emerald-600 font-medium">Legal Questions</p>
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
//           <h2 className="text-3xl font-bold mb-6">Need Legal Advice?</h2>
//           <p className="text-emerald-100 text-lg mb-8">Contact us for a confidential discussion about your property matters.</p>
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

"use client";

import {
  Scale,
  Check,
  Phone,
  ArrowRight,
  FileText,
  Users,
  Shield,
  ChevronDown,
  Gavel,
  FileSearch,
  AlertTriangle,
  PenTool,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function LegalConsultancyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  /* ================= FORM STATE ================= */
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    matterType: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://propertybackend-6bou.onrender.com/api/legal-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        alert("✅ Consultation request submitted successfully");
        setFormData({ name: "", phone: "", matterType: "", description: "" });
      } else {
        alert(data?.message || "Error");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= STATIC DATA ================= */
  const services = [
    {
      icon: FileText,
      title: "Legal Documentation",
      hindiTitle: "कानूनी दस्तावेज़",
      description:
        "Drafting of sale deeds, agreements, POA, wills, and all property-related legal papers.",
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      hindiTitle: "विवाद समाधान",
      description:
        "Expert assistance in resolving property disputes through mediation or legal action.",
    },
    {
      icon: FileSearch,
      title: "Title Search Report",
      hindiTitle: "टाइटल सर्च रिपोर्ट",
      description: "Legal opinion on property title, ownership history, and encumbrance check.",
    },
    {
      icon: PenTool,
      title: "Agreement Drafting",
      hindiTitle: "एग्रीमेंट ड्राफ्टिंग",
      description: "Drafting of rent agreements, partnership deeds, and collaboration contracts.",
    },
  ];

  const legalServices = [
    "Property Title Verification (टाइटल जांच)",
    "Sale Deed Drafting (बैनामा लेखन)",
    "Gift Deed (उपहार विलेख)",
    "Will & Testament (वसीयत)",
    "Power of Attorney (मुख्तारनामा)",
    "Partition Deed (बंटवारा)",
    "Lease Agreement (किरायानामा)",
    "Boundary Disputes (सीमा विवाद)",
    "Inheritance Matters (विरासत)",
    "Revenue Court Cases (राजस्व मामले)",
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Lawyers",
      description: "Our panel of expert property lawyers ensures accurate legal advice.",
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "We maintain strict confidentiality of all your legal documents and matters.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      description: "We identify potential legal risks before you sign any deal.",
    },
  ];

  const faqs = [
    {
      question: "आप कौन से कानूनी मामले देखते हैं?",
      englishQuestion: "What matters do you handle?",
      answer:
        "हम प्रॉपर्टी से जुड़े सभी मामले देखते हैं - टाइटल चेक, बैनामा, विवाद, वसीयत, बंटवारा, और कोर्ट केस।",
    },
    {
      question: "कानूनी सलाह की फीस कितनी है?",
      englishQuestion: "Consultation Cost?",
      answer:
        "पहली सलाह (Initial Consultation) मुफ्त है। अगर विस्तृत रिपोर्ट या ड्राफ्टिंग चाहिए, तो फीस केस की जटिलता पर निर्भर करेगी।",
    },
    {
      question: "क्या आप कोर्ट में केस लड़ते हैं?",
      englishQuestion: "Court Representation?",
      answer:
        "जी हाँ, हमारे अनुभवी वकील दीवानी (Civil) और राजस्व (Revenue) कोर्ट में आपका पक्ष रख सकते हैं।",
    },
    {
      question: "विवाद सुलझाने में कितना समय लगता है?",
      englishQuestion: "Time for resolution?",
      answer:
        "यह केस पर निर्भर करता है। आपसी समझौते (Mediation) से मामला जल्दी सुलझ सकता है, कोर्ट केस में समय लग सकता है।",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-800 rounded-full blur-[100px]" />
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
                <Scale className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">
                  Expert Legal Advice
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                कानूनी सलाह <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  और सहयोग
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Expert legal guidance for property disputes, documentation, and compliance. Protect
                your rights with professional support.
              </p>

              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 mb-8 max-w-md mx-auto lg:mx-0 border border-slate-700">
                <p className="text-emerald-400 font-bold flex items-center justify-center lg:justify-start gap-2">
                  <Check size={18} /> Free Initial Consultation
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  Talk to our lawyers before proceeding.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+919876543210"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Call Lawyer
                </a>
                <a
                  href="#consult"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Gavel size={20} /> Book Appointment
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div id="consult" className="flex-1 w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Legal Consultation
                </h3>
                <p className="text-slate-500 mb-6 text-sm">Tell us your legal issue.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      placeholder="Your Name"
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
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Matter Type
                    </label>
                    <select
                      name="matterType"
                      value={formData.matterType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer"
                      required
                    >
                      <option value="">Select Issue...</option>
                      <option value="Dispute Resolution">Dispute Resolution</option>
                      <option value="Documentation">Documentation</option>
                      <option value="Title Check">Title Check</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm resize-none"
                      placeholder="Briefly describe your case"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Submitting...
                      </>
                    ) : (
                      "Request Call Back"
                    )}
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
              Our Legal Services
            </h2>
            <p className="text-emerald-600 font-bold text-lg">कानूनी सेवाएं</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center"
              >
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:bg-emerald-600 transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-3">
                  {service.hindiTitle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 bg-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-slate-500">Expertise you can trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 text-center hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FULL LIST --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Areas of Practice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors"
                >
                  <Scale className="text-emerald-600 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{service}</span>
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
            <p className="text-emerald-600 font-medium">Legal Questions</p>
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
                  <div>
                    <span className="font-bold text-slate-800 block text-lg">{faq.question}</span>
                    <span className="text-xs font-bold text-emerald-600 uppercase mt-1 block">
                      {faq.englishQuestion}
                    </span>
                  </div>
                  <ChevronDown
                    className={`text-slate-400 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
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
          <h2 className="text-3xl font-bold mb-6">Need Legal Advice?</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Contact us for a confidential discussion about your property matters.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-white text-emerald-800 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Phone size={20} /> +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}