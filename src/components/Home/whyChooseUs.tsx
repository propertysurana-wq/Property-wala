// import { Users, Clock, Heart, Shield, Home, MessageCircle } from "lucide-react";

// export default function WhyChooseUsSection() {
//   const features = [
//     {
//       icon: Users,
//       title: "Expert Team",
//       description: "Experienced professionals with deep knowledge of local property laws and market conditions.",
//     },
//     {
//       icon: Clock,
//       title: "Quick Service",
//       description: "Fast processing of documents and property transactions without compromising on quality.",
//     },
//     {
//       icon: Heart,
//       title: "Local Understanding",
//       description: "Deep understanding of local culture and customs, making rural clients feel comfortable.",
//     },
//     {
//       icon: Shield,
//       title: "100% Legal",
//       description: "All transactions are completely legal and verified through proper government channels.",
//     },
//     {
//       icon: Home,
//       title: "Fair Pricing",
//       description: "Transparent and competitive pricing with no hidden charges or surprise fees.",
//     },
//     {
//       icon: MessageCircle,
//       title: "24/7 Support",
//       description: "Round-the-clock customer support for all your property-related queries and concerns.",
//     },
//   ];

//   return (
//     <section id="why-choose-us" className="py-20 bg-slate-900 from-[#fefdf9] to-[#fef7f0]">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Why Choose Property Sathi?
//           </h2>
//           <p className="text-xl text-[#b54035] mb-2 font-semibold">
//             प्रॉपर्टी साथी क्यों चुनें?
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fdeee0]"
//             >
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
//                 <item.icon className="text-white" size={32} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// 
// 
import { Phone, MessageCircle, Settings, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      hindiTitle: "हमसे संपर्क करें",
      description: "Call us or WhatsApp to discuss your property needs. We're available 24/7 for consultation.",
    },
    {
      icon: MessageCircle,
      title: "Discuss Your Need",
      hindiTitle: "ज़रूरत बताइए",
      description: "Share your requirements with our experts. We'll understand your needs and provide the best solution.",
    },
    {
      icon: Settings,
      title: "We Manage Papers & Deal",
      hindiTitle: "कागज़ और डील हमारी ज़िम्मेदारी",
      description: "Our team handles all paperwork, legal formalities, and negotiations on your behalf.",
    },
    {
      icon: CheckCircle,
      title: "Get Property Solved",
      hindiTitle: "समाधान प्राप्त करें",
      description: "Receive your completed documents and successful property transaction with full satisfaction.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-[#fef7f0] via-[#fefdf9] to-[#fdf2f2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Simple 4-Step Process
          </h2>
          <p className="text-xl text-[#b54035] mb-2 font-semibold">
            हमारी आसान 4-चरण प्रक्रिया
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group flex flex-col">
              <div className="w-24 h-24 bg-gradient-to-br from-[#e8734a] to-[#cc3f3f] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-300">
                <step.icon className="text-white" size={48} />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fdeee0] flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-[#b54035] mb-3 font-semibold">
                  {step.hindiTitle}
                </p>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}