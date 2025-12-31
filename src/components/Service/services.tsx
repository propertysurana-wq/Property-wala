import {
  ArrowLeftRight,
  FileText,
  Award,
  Stamp,
  Scale3d,
  Search,
  Check,
} from "lucide-react";
import Link from "next/link";
import  Header  from "@/components/header/header";
import Footer from "../footer/footer";
export default function ServicesSection() {
  const services = [
    {
      icon: ArrowLeftRight,
      title: "Property Buy & Sell Deals",
      hindiTitle: "प्रॉपर्टी खरीद और बिक्री सहायता",
      description:
        "Complete assistance in property buying and selling with legal verification and best price negotiation.",
      features: [
        "Market Price Analysis",
        "Legal Documentation",
        "Negotiation Support",
      ],
      route: "/property-buy-sell",
    },
    {
      icon: FileText,
      title: "Nakal & Map Extraction",
      hindiTitle: "नक़ल और नक्शा निकालना",
      description:
        "Quick and accurate extraction of property records, maps, and official documents from government offices.",
      features: ["Revenue Records", "Survey Maps", "Mutation Records"],
      route: "/nakal-map-extraction",
    },
    {
      icon: Award,
      title: "Patta Creation",
      hindiTitle: "पट्टा बनवाना",
      description:
        "Complete patta creation services with proper verification and government approval process.",
      features: [
        "Document Preparation",
        "Government Liaison",
        "Quick Processing",
      ],
      route: "/patta-creation",
    },
    {
      icon: Stamp,
      title: "Property Registry Assistance",
      hindiTitle: "प्रॉपर्टी रजिस्ट्री सेवा",
      description:
        "End-to-end registry services with stamp duty calculation and registration process management.",
      features: [
        "Stamp Duty Calculation",
        "Registration Process",
        "Document Verification",
      ],
      route: "/property-registry",
    },
    {
      icon: Scale3d,
      title: "Legal Consultancy Support",
      hindiTitle: "कानूनी सलाह सहयोग",
      description:
        "Expert legal advice on property matters, dispute resolution, and documentation guidance.",
      features: [
        "Legal Documentation",
        "Dispute Resolution",
        "Expert Consultation",
      ],
      route: "/legal-consultancy",
    },
    {
      icon: Search,
      title: "Property Verification",
      hindiTitle: "प्रॉपर्टी जांच सेवा",
      description:
        "Comprehensive property verification services to ensure clear title and legal compliance.",
      features: ["Title Verification", "Encumbrance Check", "Legal Clearance"],
      route: "/property-verification",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
          <Header/>
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Complete Property Services
          </h2>
          <p className="text-xl text-green-700 mb-2 font-semibold">
            हमारी संपूर्ण प्रॉपर्टी सेवाएं
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const bgColorFrom =
              index % 2 === 0
                ? "from-green-50 to-white"
                : "from-gray-50 to-white";
            const borderColor =
              index % 2 === 0 ? "border-green-200" : "border-gray-200";
            const iconBgFrom =
              index % 2 === 0
                ? "from-green-600 to-green-700"
                : "from-green-700 to-green-800";
            const textColor =
              index % 2 === 0 ? "text-green-700" : "text-green-800";

            return (
              <Link
                key={index}
                href={service.route}
                className={`group bg-gradient-to-br ${bgColorFrom} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${borderColor} cursor-pointer block`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${iconBgFrom} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className={`text-lg ${textColor} mb-4 font-semibold`}>
                  {service.hindiTitle}
                </p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="text-green-600 mr-2" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}