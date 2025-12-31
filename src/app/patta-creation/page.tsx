'use client'
import { Award, Check, Phone, Mail, ArrowRight, FileCheck, Clock, Users, ShieldCheck, ChevronDown, Building2, Landmark, FileText } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
export default function PattaCreationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pattaTypes = [
    {
      icon: Building2,
      title: "Residential Patta",
      hindiTitle: "आवासीय पट्टा",
      description: "Patta creation for residential plots and housing purposes with complete legal documentation."
    },
    {
      icon: Landmark,
      title: "Commercial Patta",
      hindiTitle: "व्यावसायिक पट्टा",
      description: "Commercial land patta for shops, offices, and business establishments."
    },
    {
      icon: FileText,
      title: "Agricultural Patta",
      hindiTitle: "कृषि पट्टा",
      description: "Patta for agricultural land with proper land use classification and records."
    },
    {
      icon: FileCheck,
      title: "Government Patta",
      hindiTitle: "सरकारी पट्टा",
      description: "Assistance in obtaining patta for government allotted lands and schemes."
    }
  ];

  const benefits = [
    "Legal ownership proof (कानूनी मालिकाना हक)",
    "Bank loan eligibility (बैंक लोन में आसानी)",
    "Property registration (प्रॉपर्टी रजिस्ट्री)",
    "Mutation process (नामांतरण)",
    "Building permission (निर्माण अनुमति)",
    "Government scheme benefits (सरकारी योजनाओं का लाभ)",
    "Property tax assessment (प्रॉपर्टी टैक्स)",
    "Inheritance transfer (उत्तराधिकार)"
  ];

  const process = [
    { step: 1, title: "Document Collection", description: "हम आपके सभी ज़रूरी दस्तावेज़ इकट्ठे करेंगे (आधार, पुराने कागज़ आदि)।" },
    { step: 2, title: "File Preparation", description: "पट्टा आवेदन सही फॉर्मेट में तैयार करेंगे।" },
    { step: 3, title: "Office Submission", description: "तहसील या नगर पालिका में फाइल जमा करेंगे।" },
    { step: 4, title: "Site Verification", description: "सरकारी अधिकारी द्वारा मौका मुआयना (Site Inspection)।" },
    { step: 5, title: "Approval", description: "सक्षम अधिकारी द्वारा पट्टा मंज़ूरी।" },
    { step: 6, title: "Patta Delivery", description: "आपको आपका पट्टा मिल जाएगा।" }
  ];

  const faqs = [
    {
      question: "पट्टा क्या है और क्यों ज़रूरी है?",
      englishQuestion: "What is Patta?",
      answer: "पट्टा जमीन के मालिकाना हक का सबसे बड़ा सरकारी सबूत है। इसके बिना बैंक लोन नहीं मिलता और जमीन बेचना मुश्किल होता है।"
    },
    {
      question: "पट्टा बनवाने में कौन से दस्तावेज़ लगते हैं?",
      englishQuestion: "Documents required?",
      answer: "आधार कार्ड, पहचान पत्र, पुराना बैनामा (Sale Deed), शपथ पत्र (Affidavit), और जमीन के पुराने रिकॉर्ड।"
    },
    {
      question: "कितना समय लगता है?",
      englishQuestion: "Time taken?",
      answer: "पूरी प्रक्रिया में आमतौर पर 30 से 90 दिन लगते हैं। हम कोशिश करते हैं कि काम जल्दी हो।"
    },
    {
      question: "खर्च कितना आएगा?",
      englishQuestion: "Cost involved?",
      answer: "खर्च जमीन के क्षेत्रफल (Area) और सरकारी फीस पर निर्भर करता है। हम आपको पहले ही पूरा एस्टीमेट बता देंगे।"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header/>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-700 rounded-full blur-[100px]"></div>
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
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Official Process</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                पट्टा बनवाएं <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">कानूनी और पक्का</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We handle the complete Patta creation process. From documentation to government approval, get your legal land ownership hassle-free.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm font-medium text-slate-300">
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <Clock className="mr-2 text-emerald-400" size={18} />
                  <span>30-90 Days Process</span>
                </div>
                <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <ShieldCheck className="mr-2 text-emerald-400" size={18} />
                  <span>100% Legal Work</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="tel:+919876543210" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
                <a href="#apply" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2">
                  <FileCheck size={20} /> Apply Now
                </a>
              </div>
            </div>
            
            {/* Right Form Card */}
            <div id="apply" className="flex-1 w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Apply for Patta</h3>
                <p className="text-slate-500 mb-6 text-sm">Fill details to start the process.</p>
                
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
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Patta Type</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm text-slate-700 cursor-pointer">
                      <option>Select Type...</option>
                      <option>Residential (आवासीय)</option>
                      <option>Commercial (व्यावसायिक)</option>
                      <option>Agricultural (कृषि)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Address/Location</label>
                    <textarea rows={2} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm resize-none" placeholder="Property Address"></textarea>
                  </div>

                  <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg mt-2">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PATTA TYPES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Types of Patta
            </h2>
            <p className="text-emerald-600 font-bold text-lg">
              हम इन सभी प्रकार के पट्टे बनवाते हैं
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pattaTypes.map((type, index) => (
              <div key={index} className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 text-center">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm group-hover:bg-emerald-600 transition-colors">
                  <type.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{type.title}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-3">{type.hindiTitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS LIST --- */}
      <section className="py-20 bg-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Benefits of Patta</h3>
            <p className="text-slate-500 text-center mb-10">पट्टा होने के फायदे</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-emerald-100 p-1.5 rounded-full mr-3 text-emerald-600">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-slate-700">{benefit}</span>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Process Flow</h2>
            <p className="text-slate-500 text-lg">Simple 6-Step Patta Process</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md border-2 border-white">
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
            <p className="text-emerald-600 font-medium">Patta Related Questions</p>
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
          <h2 className="text-3xl font-bold mb-6">Start Your Patta Process Today</h2>
          <p className="text-emerald-100 text-lg mb-8">Secure your property ownership with legal documents.</p>
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