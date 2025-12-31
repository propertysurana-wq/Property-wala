// // pages/services/legal-consultancy.tsx

// 'use client'
// import { Scale3d, Check, Phone, Mail, ArrowRight, FileText, Users, Shield, ChevronDown, Gavel, FileSearch, AlertTriangle, Handshake } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function LegalConsultancyPage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   const services = [
//     {
//       icon: FileText,
//       title: "Legal Documentation",
//       hindiTitle: "कानूनी दस्तावेज़",
//       description: "Drafting and review of sale deeds, agreements, POA, will, and all property-related legal documents."
//     },
//     {
//       icon: Gavel,
//       title: "Dispute Resolution",
//       hindiTitle: "विवाद समाधान",
//       description: "Expert assistance in resolving property disputes through mediation, negotiation, or legal proceedings."
//     },
//     {
//       icon: FileSearch,
//       title: "Title Opinion",
//       hindiTitle: "टाइटल ओपिनियन",
//       description: "Comprehensive legal opinion on property title and ownership after thorough document analysis."
//     },
//     {
//       icon: Handshake,
//       title: "Agreement Drafting",
//       hindiTitle: "समझौता ड्राफ्टिंग",
//       description: "Professional drafting of rent agreements, partnership deeds, and business contracts."
//     }
//   ];

//   const legalServices = [
//     "Property Title Verification",
//     "Sale Deed Drafting",
//     "Gift Deed Preparation",
//     "Will & Testament",
//     "Power of Attorney",
//     "Partition Deed",
//     "Lease Agreement",
//     "Property Dispute Cases",
//     "Boundary Disputes",
//     "Inheritance Matters",
//     "Land Acquisition Cases",
//     "Revenue Court Matters"
//   ];

//   const whyChooseUs = [
//     {
//       icon: Users,
//       title: "Experienced Legal Team",
//       description: "Our team of experienced lawyers and legal experts specialize in property law."
//     },
//     {
//       icon: Shield,
//       title: "Confidential Service",
//       description: "All consultations and documents are handled with strict confidentiality."
//     },
//     {
//       icon: AlertTriangle,
//       title: "Risk Assessment",
//       description: "Thorough risk analysis before any property transaction or investment."
//     }
//   ];

//   const faqs = [
//     {
//       question: "What property legal matters do you handle?",
//       answer: "We handle all property-related legal matters including title verification, sale/purchase agreements, dispute resolution, succession matters, partition cases, boundary disputes, tenant issues, and documentation. Our experts provide comprehensive legal support."
//     },
//     {
//       question: "How much does a legal consultation cost?",
//       answer: "Initial consultation is free. For detailed legal opinion and documentation, our charges depend on the complexity of the case. We provide transparent pricing upfront before starting any work."
//     },
//     {
//       question: "Can you represent me in court for property disputes?",
//       answer: "Yes, we have a panel of experienced property lawyers who can represent you in revenue courts, civil courts, and high courts for various property disputes and cases."
//     },
//     {
//       question: "How long does dispute resolution take?",
//       answer: "Timeline varies based on dispute complexity. Mediation cases may resolve in weeks, while court cases can take months to years. We always try alternative dispute resolution first for quicker settlements."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-24 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-[#e8734a] rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e15e5e] rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <Link href="/#services" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
//             <ArrowRight className="rotate-180 mr-2" size={20} />
//             Back to Services
//           </Link>
          
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="flex-1">
//               <div className="w-20 h-20 bg-gradient-to-br from-[#e8734a] to-[#cc3f3f] rounded-2xl flex items-center justify-center mb-6">
//                 <Scale3d className="text-white" size={40} />
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                 Legal Consultancy Support
//               </h1>
//               <p className="text-2xl text-[#e8734a] font-semibold mb-6">
//                 कानूनी सलाह सहयोग
//               </p>
//               <p className="text-xl text-gray-300 mb-8 max-w-2xl">
//                 Expert legal advice on property matters, dispute resolution, documentation guidance, 
//                 and complete legal support for all your real estate needs.
//               </p>
              
//               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 max-w-md">
//                 <p className="text-white font-semibold">✓ Free Initial Consultation</p>
//                 <p className="text-gray-300 text-sm">Discuss your case with our legal experts at no cost</p>
//               </div>
              
//               <div className="flex flex-wrap gap-4">
//                 <a href="tel:+919876543210" className="bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#e8734a]/30 transition-all flex items-center">
//                   <Phone className="mr-2" size={20} />
//                   Call Now
//                 </a>
//                 <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition-all">
//                   Book Consultation
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex-1 max-w-md">
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold text-white mb-6">Legal Consultation</h3>
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
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   />
//                   <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-400 focus:outline-none focus:border-[#e8734a]">
//                     <option value="">Type of Legal Help Needed</option>
//                     <option value="documentation">Documentation</option>
//                     <option value="dispute">Dispute Resolution</option>
//                     <option value="title">Title Verification</option>
//                     <option value="agreement">Agreement Drafting</option>
//                     <option value="other">Other</option>
//                   </select>
//                   <textarea
//                     placeholder="Brief description of your case"
//                     rows={3}
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#e8734a]"
//                   ></textarea>
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-[#e8734a] to-[#e15e5e] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
//                   >
//                     Request Consultation
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fef7f0]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Our Legal Services
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               हमारी कानूनी सेवाएं
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-[#fdeee0] text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#cc3f3f] rounded-xl flex items-center justify-center mb-4 mx-auto">
//                   <service.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
//                 <p className="text-[#b54035] font-semibold mb-3">{service.hindiTitle}</p>
//                 <p className="text-gray-600 text-sm">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* All Legal Services */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Complete Legal Support
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               संपूर्ण कानूनी सहायता
//             </p>
//           </div>
          
//           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
//             {legalServices.map((service, index) => (
//               <div key={index} className="flex items-center bg-gradient-to-r from-[#fefdf9] to-[#fef7f0] p-4 rounded-xl border border-[#fdeee0]">
//                 <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
//                 <span className="font-medium text-gray-700">{service}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-gradient-to-br from-[#fefdf9] to-[#fdf2f2]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Why Choose Us
//             </h2>
//             <p className="text-xl text-[#b54035] font-semibold">
//               हमें क्यों चुनें
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {whyChooseUs.map((item, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center border border-[#fce8e8]">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#e15e5e] rounded-full flex items-center justify-center mb-4 mx-auto">
//                   <item.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
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
//                   <ChevronDown className={`text-[#e8734a] transition-transform ${openFaq === index ? 'rotate-180' : ''}`} size={24} />
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
//       <section className="py-20 bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Need Legal Help for Property Matters?
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Get expert legal consultation today. First consultation is FREE!
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a href="tel:+919876543210" className="bg-white text-[#e8734a] px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
//               <Phone className="mr-2" size={20} />
//               +91 98765 43210
//             </a>
//             <a href="mailto:info@example.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#e8734a] transition-all flex items-center">
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
import { Scale, Check, Phone, Mail, ArrowRight, FileText, Users, Shield, ChevronDown, Gavel, FileSearch, AlertTriangle, PenTool, Scale3d } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
export default function LegalConsultancyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: FileText,
      title: "Legal Documentation",
      hindiTitle: "कानूनी दस्तावेज़",
      description: "Drafting of sale deeds, agreements, POA, wills, and all property-related legal papers."
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      hindiTitle: "विवाद समाधान",
      description: "Expert assistance in resolving property disputes through mediation or legal action."
    },
    {
      icon: FileSearch,
      title: "Title Search Report",
      hindiTitle: "टाइटल सर्च रिपोर्ट",
      description: "Legal opinion on property title, ownership history, and encumbrance check."
    },
    {
      icon: PenTool,
      title: "Agreement Drafting",
      hindiTitle: "एग्रीमेंट ड्राफ्टिंग",
      description: "Drafting of rent agreements, partnership deeds, and collaboration contracts."
    }
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
    "Revenue Court Cases (राजस्व मामले)"
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Lawyers",
      description: "Our panel of expert property lawyers ensures accurate legal advice."
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "We maintain strict confidentiality of all your legal documents and matters."
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      description: "We identify potential legal risks before you sign any deal."
    }
  ];

  const faqs = [
    {
      question: "आप कौन से कानूनी मामले देखते हैं?",
      englishQuestion: "What matters do you handle?",
      answer: "हम प्रॉपर्टी से जुड़े सभी मामले देखते हैं - टाइटल चेक, बैनामा, विवाद, वसीयत, बंटवारा, और कोर्ट केस।"
    },
    {
      question: "कानूनी सलाह की फीस कितनी है?",
      englishQuestion: "Consultation Cost?",
      answer: "पहली सलाह (Initial Consultation) मुफ्त है। अगर विस्तृत रिपोर्ट या ड्राफ्टिंग चाहिए, तो फीस केस की जटिलता पर निर्भर करेगी।"
    },
    {
      question: "क्या आप कोर्ट में केस लड़ते हैं?",
      englishQuestion: "Court Representation?",
      answer: "जी हाँ, हमारे अनुभवी वकील दीवानी (Civil) और राजस्व (Revenue) कोर्ट में आपका पक्ष रख सकते हैं।"
    },
    {
      question: "विवाद सुलझाने में कितना समय लगता है?",
      englishQuestion: "Time for resolution?",
      answer: "यह केस पर निर्भर करता है। आपसी समझौते (Mediation) से मामला जल्दी सुलझ सकता है, कोर्ट केस में समय लग सकता है।"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header/>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-800 rounded-full blur-[100px]"></div>
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
                <Scale className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Expert Legal Advice</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                कानूनी सलाह <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">और सहयोग</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Expert legal guidance for property disputes, documentation, and compliance. Protect your rights with professional support.
              </p>
              
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 mb-8 max-w-md mx-auto lg:mx-0 border border-slate-700">
                <p className="text-emerald-400 font-bold flex items-center justify-center lg:justify-start gap-2">
                  <Check size={18} /> Free Initial Consultation
                </p>
                <p className="text-slate-400 text-sm mt-1">Talk to our lawyers before proceeding.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+919876543210" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} /> Call Lawyer
                </a>
                <a href="#consult" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2">
                  <Gavel size={20} /> Book Appointment
                </a>
              </div>
            </div>
            
            {/* Right Form Card */}
            <div id="consult" className="flex-1 w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Legal Consultation</h3>
                <p className="text-slate-500 mb-6 text-sm">Tell us your legal issue.</p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm" placeholder="Mobile Number" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Matter Type</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer">
                      <option>Select Issue...</option>
                      <option>Dispute Resolution</option>
                      <option>Documentation</option>
                      <option>Title Check</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Description</label>
                    <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm resize-none" placeholder="Briefly describe your case"></textarea>
                  </div>

                  <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2">
                    Request Call Back
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
            <p className="text-emerald-600 font-bold text-lg">
              कानूनी सेवाएं
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

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 bg-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-500">Expertise you can trust</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 text-center hover:shadow-md transition-all">
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
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Areas of Practice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalServices.map((service, index) => (
                <div key={index} className="flex items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors">
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
          <h2 className="text-3xl font-bold mb-6">Need Legal Advice?</h2>
          <p className="text-emerald-100 text-lg mb-8">Contact us for a confidential discussion about your property matters.</p>
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