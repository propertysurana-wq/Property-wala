'use client'
import Footer from "@/components/footer/footer";
import { Search, Check, FileCheck, ShieldCheck, AlertTriangle, FileText, Home, Scale, ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header/header";
export default function PropertyVerificationPage() {
  const verificationServices = [
    {
      icon: FileCheck,
      title: "Title Verification",
      hindiTitle: "टाइटल सत्यापन",
      description: "Complete verification of property ownership documents to ensure clear and marketable title.",
      details: [
        "Chain of ownership check (मालिकी की जांच)",
        "Previous sale deed examination (पुराने बैनामे)",
        "Inheritance checks (विरासत/उत्तराधिकार)",
        "Power of attorney check (मुख्तारनामा)"
      ]
    },
    {
      icon: Shield,
      title: "Encumbrance Check",
      hindiTitle: "भार मुक्त जांच",
      description: "Thorough investigation of any legal or financial burdens on the property.",
      details: [
        "Mortgage/Loan check (लोन या गिरवी)",
        "Pending litigation (कोर्ट केस)",
        "Tax arrears (बकाया टैक्स)",
        "Seizure status (कुर्की)"
      ]
    },
    {
      icon: Scale,
      title: "Legal Clearance",
      hindiTitle: "कानूनी मंजूरी",
      description: "Comprehensive legal scrutiny to ensure the property is free from disputes.",
      details: [
        "Revenue records (जमाबंदी/खसरा)",
        "Boundary disputes (सीमा विवाद)",
        "Land use check (जमीन का उपयोग)",
        "Govt acquisition check (सरकारी अधिग्रहण)"
      ]
    },
    {
      icon: Home,
      title: "Physical Inspection",
      hindiTitle: "मौका मुआयना",
      description: "On-ground verification to match documents with actual property specifications.",
      details: [
        "Measurement check (नापतोल)",
        "Possession check (कब्ज़ा)",
        "Construction approval (निर्माण मंजूरी)",
        "Road access (रास्ते की जांच)"
      ]
    }
  ];

  const verificationProcess = [
    {
      step: 1,
      title: "Document Collection",
      hindiTitle: "दस्तावेज़ संग्रह",
      description: "हम मालिक और सरकारी दफ्तरों से सभी जरूरी कागजात इकट्ठे करते हैं।"
    },
    {
      step: 2,
      title: "Record Verification",
      hindiTitle: "रिकॉर्ड सत्यापन",
      description: "पुराने रिकॉर्ड और राजस्व विभाग (Revenue) के दस्तावेजों की गहन जांच।"
    },
    {
      step: 3,
      title: "Legal Review",
      hindiTitle: "कानूनी राय",
      description: "वकील द्वारा जांच कि कोई कानूनी पेंच या धोखाधड़ी तो नहीं है।"
    },
    {
      step: 4,
      title: "Site Visit",
      hindiTitle: "मौका निरीक्षण",
      description: "जमीन पर जाकर देखना कि नक्शे और कागजात हकीकत से मेल खाते हैं या नहीं।"
    },
    {
      step: 5,
      title: "Final Report",
      hindiTitle: "फाइनल रिपोर्ट",
      description: "पूरी जांच के बाद आपको एक विस्तृत रिपोर्ट दी जाती है (Clear/Not Clear)।"
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Fraud Protection",
      hindiTitle: "धोखाधड़ी से बचाव",
      description: "नकली कागजात और धोखेबाज विक्रेताओं से बचें।"
    },
    {
      icon: CheckCircle2,
      title: "Clear Title",
      hindiTitle: "साफ मालिकाना हक",
      description: "सुनिश्चित करें कि संपत्ति पर कोई विवाद नहीं है।"
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      hindiTitle: "जोखिम की जांच",
      description: "भविष्य में होने वाली कानूनी परेशानियों को पहले ही जानें।"
    },
    {
      icon: Scale,
      title: "Legal Safety",
      hindiTitle: "कानूनी सुरक्षा",
      description: "मजबूत कानूनी आधार के साथ सुरक्षित निवेश करें।"
    }
  ];

  const documentsChecked = [
    "Sale Deed / बिक्री विलेख (बैनामा)",
    "Title Deed / टाइटल डीड",
    "Encumbrance Certificate / भार मुक्त प्रमाण पत्र",
    "Property Tax Receipts / प्रॉपर्टी टैक्स रसीद",
    "Approved Map / पास नक्शा",
    "Possession Letter / कब्ज़ा पत्र",
    "NOC / अनापत्ति प्रमाण पत्र",
    "Mutation (Dakhil-Kharij) / दाखिल खारिज",
    "Jamabandi / जमाबंदी (खतौनी)",
    "Power of Attorney / पावर ऑफ अटॉर्नी"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header/>
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-800 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Secure Your Investment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              प्रॉपर्टी जाँच / वेरिफिकेशन <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">धोखे से बचें</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Complete legal verification of property documents and physical inspection. Ensure the property is safe to buy with our expert Due Diligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                Get Verification Report
              </Link>
              <Link 
                href="#process" 
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <FileText size={20} /> Check Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY VERIFICATION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Verification is Critical?
            </h2>
            <p className="text-xl text-emerald-600 font-bold">
              प्रॉपर्टी की जांच क्यों जरूरी है?
            </p>
            <p className="text-lg text-slate-500 mt-4 leading-relaxed">
              Property fraud is common. Verification protects you from fake owners, disputed lands, and illegal constructions. Don't invest your hard-earned money without checking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:bg-emerald-600 transition-colors">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-emerald-600 font-bold text-sm mb-3">
                  {benefit.hindiTitle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES LIST --- */}
      <section className="py-20 bg-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              What We Check?
            </h2>
            <p className="text-xl text-emerald-600 font-bold">
              हम क्या-क्या जांचते हैं?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {verificationServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-emerald-100"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-700">
                    <service.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-lg text-emerald-600 font-semibold">
                      {service.hindiTitle}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed border-b border-slate-100 pb-4">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-slate-700 font-medium">
                      <CheckCircle2 className="text-emerald-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS STEPS --- */}
      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Verification Process
            </h2>
            <p className="text-xl text-emerald-600 font-bold">
              सत्यापन प्रक्रिया
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {verificationProcess.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-emerald-100 group-hover:border-emerald-500 transition-colors shadow-lg">
                    {item.step}
                  </div>
                  {index < verificationProcess.length - 1 && (
                    <div className="w-1 h-full bg-slate-200 mt-2 group-hover:bg-emerald-200 transition-colors"></div>
                  )}
                </div>
                <div className="flex-1 pb-8 bg-slate-50 rounded-2xl p-6 border border-slate-100 group-hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-emerald-600 font-bold text-sm mb-3 uppercase tracking-wide">{item.hindiTitle}</p>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DOCUMENTS LIST --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Required Documents
              </h2>
              <p className="text-xl text-emerald-400 font-bold">
                इन दस्तावेजों की जांच की जाएगी
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentsChecked.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all group"
                >
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                    <FileText className="text-white" size={20} />
                  </div>
                  <span className="text-slate-200 font-medium text-lg">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section id="contact" className="py-20 bg-emerald-600 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Safe Deal, Safe Future!
            </h2>
            <p className="text-2xl mb-4 font-bold text-emerald-100">
              सुरक्षित डील, सुरक्षित भविष्य
            </p>
            <p className="text-lg mb-8 text-emerald-50/90 leading-relaxed">
              Don't take risks with property. Get a professional verification report today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-emerald-800 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2"
              >
                Start Verification <ArrowRight size={20} />
              </Link>
              <Link 
                href="tel:+919876543210" 
                className="bg-emerald-700 border-2 border-emerald-400 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all flex items-center gap-2"
              >
                <Phone size={20} /> +91 98765 43210
              </Link>
            </div>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  );
}