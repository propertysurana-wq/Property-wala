// import {
//   ArrowLeftRight,
//   FileText,
//   Award,
//   Stamp,
//   Scale3d,
//   Search,
//   Check,
// } from "lucide-react";
// import Link from "next/link";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: ArrowLeftRight,
//       title: "Property Buy & Sell Deals",
//       hindiTitle: "प्रॉपर्टी खरीद और बिक्री सहायता",
//       description:
//         "Complete assistance in property buying and selling with legal verification and best price negotiation.",
//       features: [
//         "Market Price Analysis",
//         "Legal Documentation",
//         "Negotiation Support",
//       ],
//       route: "/property-buy-sell",
//     },
//     {
//       icon: FileText,
//       title: "Nakal & Map Extraction",
//       hindiTitle: "नक़ल और नक्शा निकालना",
//       description:
//         "Quick and accurate extraction of property records, maps, and official documents from government offices.",
//       features: ["Revenue Records", "Survey Maps", "Mutation Records"],
//       route: "/nakal-map-extraction",
//     },
//     {
//       icon: Award,
//       title: "Patta Creation",
//       hindiTitle: "पट्टा बनवाना",
//       description:
//         "Complete patta creation services with proper verification and government approval process.",
//       features: [
//         "Document Preparation",
//         "Government Liaison",
//         "Quick Processing",
//       ],
//       route: "/patta-creation",
//     },
//     {
//       icon: Stamp,
//       title: "Property Registry Assistance",
//       hindiTitle: "प्रॉपर्टी रजिस्ट्री सेवा",
//       description:
//         "End-to-end registry services with stamp duty calculation and registration process management.",
//       features: [
//         "Stamp Duty Calculation",
//         "Registration Process",
//         "Document Verification",
//       ],
//       route: "/property-registry",
//     },
//     {
//       icon: Scale3d,
//       title: "Legal Consultancy Support",
//       hindiTitle: "कानूनी सलाह सहयोग",
//       description:
//         "Expert legal advice on property matters, dispute resolution, and documentation guidance.",
//       features: [
//         "Legal Documentation",
//         "Dispute Resolution",
//         "Expert Consultation",
//       ],
//       route: "/legal-consultancy",
//     },
//     {
//       icon: Search,
//       title: "Property Verification",
//       hindiTitle: "प्रॉपर्टी जांच सेवा",
//       description:
//         "Comprehensive property verification services to ensure clear title and legal compliance.",
//       features: ["Title Verification", "Encumbrance Check", "Legal Clearance"],
//       route: "/property-verification",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Our Complete Property Services
//           </h2>
//           <p className="text-xl text-[#b54035] mb-2 font-semibold">
//             हमारी संपूर्ण प्रॉपर्टी सेवाएं
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const bgColorFrom =
//               index % 2 === 0
//                 ? "from-[#fefdf9] to-[#fef7f0]"
//                 : "from-[#fefdf9] to-[#fdf2f2]";
//             const borderColor =
//               index % 2 === 0 ? "border-[#fdeee0]" : "border-[#fce8e8]";
//             const iconBgFrom =
//               index % 2 === 0
//                 ? "from-[#e8734a] to-[#cc3f3f]"
//                 : "from-[#e15e5e] to-[#d9543f]";
//             const textColor =
//               index % 2 === 0 ? "text-[#b54035]" : "text-[#a73232]";

//             return (
//               <Link
//                 key={index}
//                 href={service.route}
//                 className={`group bg-gradient-to-br ${bgColorFrom} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${borderColor} cursor-pointer block`}
//               >
//                 {/* <div
//                  key={index}
//                  className={`group bg-gradient-to-br ${bgColorFrom} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${borderColor}`}
//                > */}
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${iconBgFrom} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
//                 >
//                   <service.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className={`text-lg ${textColor} mb-4 font-semibold`}>
//                   {service.hindiTitle}
//                 </p>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <ul className="space-y-2 text-sm text-gray-600">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-center">
//                       <Check className="text-green-500 mr-2" size={18} />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 {/* </div> */}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
import { MapPin, Home, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-teal-600" />,
      number: "01",
      title: "Search Property",
      subTitle: "सत्यापित संपत्ति",
      description: "Explore our curated list of verified properties to find your dream home quickly."
    },
    {
      icon: <Home className="w-8 h-8 text-teal-600" />,
      number: "02",
      title: "Meet the Owner",
      subTitle: "सीधे मालिक से बात",
      description: "Connect directly. No hidden fees, no middlemen, just transparent conversations."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      number: "03",
      title: "Secure Deal",
      subTitle: "सुरक्षित और भरोसेमंद",
      description: "Close the deal with complete peace of mind using our secure verification process."
    }
  ];

  return (
    <section className="bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A simple three-step process to get you into your new home.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-100 border-t-2 border-dashed border-gray-200 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 group">
              
              {/* Icon Circle */}
              <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-teal-50 rounded-full scale-100 group-hover:scale-110 transition-transform duration-500 ease-out" />
                {/* Inner White Circle */}
                <div className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-50 group-hover:-translate-y-1 transition-transform duration-300">
                  {step.icon}
                </div>
                {/* Floating Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <div className="px-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                  {step.title}
                </h3>
                <span className="text-sm font-medium text-gray-400 mb-3 block">
                  {step.subTitle}
                </span>
                <p className="text-gray-500 leading-relaxed text-base">
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