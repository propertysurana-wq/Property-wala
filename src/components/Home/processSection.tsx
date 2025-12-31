import { Phone, MessageCircle, FileCheck, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      hindiTitle: "हमसे संपर्क करें",
      description: "Call us or WhatsApp anytime. We are ready to listen to your property goals.",
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
    },
  ];

  return (
    <section id="process" className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm bg-emerald-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-emerald-100">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our Simple <span className="text-emerald-600">Process</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            हमारी आसान 4-चरण प्रक्रिया
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-slate-200 via-emerald-200 to-slate-200 border-t border-dashed border-slate-300 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Icon Circle */}
              <div className="relative mb-8">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="w-28 h-28 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-2xl relative z-10 transition-all duration-300
                  group-hover:bg-slate-900
                  group-hover:scale-110
                ">
                  <step.icon className="text-white w-10 h-10 transition-transform duration-300 group-hover:text-emerald-500 group-hover:rotate-12" strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm font-bold border-2 border-slate-100 shadow-md">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="w-full bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-emerald-600 mb-4 font-serif">
                  {step.hindiTitle}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
