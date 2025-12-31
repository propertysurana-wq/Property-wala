import { Phone, MessageCircle, FileCheck, CheckCircle2 } from "lucide-react";
import Footer from "../footer/footer";
import Header from "@/components/header/header";

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      hindiTitle: "हमसे संपर्क करें",
      description: "Call or WhatsApp us anytime. We are ready to listen to your property goals.",
    },
    {
      icon: MessageCircle,
      title: "Discuss Needs",
      hindiTitle: "ज़रूरत बताइए",
      description: "Share your requirements. We analyze your needs to find the perfect match.",
    },
    {
      icon: FileCheck,
      title: "Paperwork & Deal",
      hindiTitle: "कागज़ और डील",
      description: "We handle all legal formalities, documentation, and negotiations seamlessly.",
    },
    {
      icon: CheckCircle2,
      title: "Problem Solved",
      hindiTitle: "समाधान प्राप्त करें",
      description: "Walk away with the keys and papers. A successful transaction, guaranteed.",
    }
  ];

  return (
    <>
      <Header />
      
      <section className="py-24 bg-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-24">
            <span className="text-green-600 font-bold tracking-widest uppercase text-xs bg-green-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-green-100">
              Work Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              How We <span className="text-green-600">Work</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              हमारी आसान 4-चरण प्रक्रिया
            </p>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Background Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[50px] left-[15%] right-[15%] h-1 bg-gray-100 -z-0">
              <div className="h-full w-full bg-gradient-to-r from-green-200 via-green-400 to-green-200 rounded-full opacity-50"></div>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Icon Circle */}
                <div className="relative mb-8 transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Outer Ring */}
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-green-500 flex items-center justify-center shadow-lg relative z-10 group-hover:bg-green-600 group-hover:border-green-600 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white shadow-md z-20">
                    STEP {index + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-green-600 mb-4 font-serif">
                    {step.hindiTitle}
                  </p>
                  <div className="w-10 h-0.5 bg-slate-200 mx-auto mb-4 group-hover:bg-green-400 transition-colors"></div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}