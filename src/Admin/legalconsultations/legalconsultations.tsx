// "use client";

// import { useEffect, useState } from "react";
// import { 
//   Phone, Trash2, Loader2, Search, ChevronLeft, ChevronRight, 
//   Scale, FileText, Calendar, X 
// } from "lucide-react";
// import Navbar from "@/Admin/Navbar/Navbar";
// import Sidebar from "@/Admin/Sidebar/Sidebar";

// /* ================= TYPES ================= */
// interface LegalConsultation {
//   _id: string;
//   name: string;
//   phone: string;
//   matterType: string;
//   description: string;
//   createdAt: string;
// }

// export default function LegalConsultationListPage() {
//   // State
//   const [data, setData] = useState<LegalConsultation[]>([]);
//   const [filteredData, setFilteredData] = useState<LegalConsultation[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   /* ================= FETCH DATA ================= */
//   const fetchConsultations = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/legal-consultation");
//       const result = await res.json();

//       if (!res.ok) throw new Error(result.message || "Failed to fetch");

//       const fetchedData = result.data || [];
//       setData(fetchedData);
//       setFilteredData(fetchedData);
//     } catch (err: any) {
//       setError(err.message || "Server Error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchConsultations();
//   }, []);

//   /* ================= SEARCH FILTER ================= */
//   useEffect(() => {
//     const lowerTerm = searchTerm.toLowerCase();
//     const results = data.filter(item => 
//       item.name.toLowerCase().includes(lowerTerm) ||
//       item.phone.includes(lowerTerm) ||
//       item.matterType.toLowerCase().includes(lowerTerm)
//     );
//     setFilteredData(results);
//     setCurrentPage(1); // Reset to page 1 on search
//   }, [searchTerm, data]);

//   /* ================= DELETE ================= */
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this record?")) return;

//     try {
//       await fetch(`https://propertybackend-1-xdbs.onrender.com/api/legal-consultation/${id}`, { method: "DELETE" });
      
//       // Update local state immediately
//       const newData = data.filter((item) => item._id !== id);
//       setData(newData);
//     } catch (err) {
//       alert("Delete error");
//     }
//   };

//   /* ================= PAGINATION LOGIC ================= */
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   /* ================= LOADING STATE ================= */
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <div className="flex flex-col items-center gap-3">
//           <Loader2 className="animate-spin text-black" size={40} />
//           <p className="text-gray-500 font-sans text-sm">Loading Cases...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-white font-sans text-gray-900">
      
//       {/* Import Inter Font */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
//         body { font-family: 'Inter', sans-serif; }
//       `}</style>

//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-100">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto space-y-6">

//             {/* HEADER & SEARCH */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black p-6 border border-gray-200 shadow-sm">
//               <div>
//                 <h1 className="text-2xl font-bold text-white flex items-center gap-2">
//                   <span className="bg-white text-black p-1.5"><Scale size={20}/></span>
//                   Legal Consultations
//                 </h1>
//                 <p className="text-gray-500 text-sm mt-1 ml-10">Manage legal inquiries & cases</p>
//               </div>

//               <div className="relative w-full md:w-72">
//                 <input 
//                   type="text" 
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search client, case type..." 
//                   className="w-full bg-white border border-gray-300 text-black pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-gray-400"
//                 />
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 {searchTerm && (
//                   <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
//                     <X size={14} />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* ERROR STATE */}
//             {error && (
//               <div className="bg-white border border-black p-4 text-black font-medium">
//                 Error: {error}
//               </div>
//             )}

//             {/* EMPTY STATE */}
//             {filteredData.length === 0 ? (
//               <div className="bg-white border border-dashed border-gray-300 p-20 text-center">
//                 <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
//                   <FileText className="text-gray-400" size={24} />
//                 </div>
//                 <h3 className="text-lg font-bold text-black">No Records Found</h3>
//                 <p className="text-gray-500 text-sm">Try adjusting your search or add new data.</p>
//               </div>
//             ) : (
//               <>
//                 {/* === DESKTOP TABLE VIEW (Hidden on Mobile) === */}
//                 <div className="hidden md:block bg-white border border-gray-200 shadow-sm overflow-hidden">
//                   <table className="w-full text-sm text-left">
//                       <thead className="bg-black border-b border-gray-700 text-white font-bold uppercase text-xs tracking-wider">
//                       <tr>
//                         <th className="px-6 py-4 w-16 text-gray-500">#</th>
//                         <th className="px-6 py-4">Client Name</th>
//                         <th className="px-6 py-4">Contact</th>
//                         <th className="px-6 py-4">Issue Type</th>
//                         <th className="px-6 py-4">Description</th>
//                         <th className="px-6 py-4">Date</th>
//                         <th className="px-6 py-4 text-center">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {currentItems.map((item, index) => (
//                         <tr key={item._id} className="hover:bg-gray-50 transition-colors group">
//                           <td className="px-6 py-4 text-gray-400 font-mono text-xs">
//                             {indexOfFirstItem + index + 1}
//                           </td>
//                           <td className="px-6 py-4 font-bold text-gray-900">
//                             {item.name}
//                           </td>
//                           <td className="px-6 py-4">
//                             <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-gray-600 hover:text-black hover:underline decoration-1 underline-offset-4 transition-all">
//                               <Phone size={14} /> {item.phone}
//                             </a>
//                           </td>
//                           <td className="px-6 py-4">
//                             <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold bg-black text-white border border-black uppercase tracking-wider">
//                               {item.matterType}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4">
//                             <p className="text-gray-600 max-w-[250px] truncate" title={item.description}>
//                               {item.description}
//                             </p>
//                           </td>
//                           <td className="px-6 py-4 text-gray-500 text-xs font-mono">
//                             {new Date(item.createdAt).toLocaleDateString('en-IN', {
//                               day: '2-digit', month: 'short', year: 'numeric'
//                             })}
//                           </td>
//                           <td className="px-6 py-4 text-center">
//                             <button
//                               onClick={() => handleDelete(item._id)}
//                               className="p-2 text-gray-400 hover:bg-black hover:text-white transition-all rounded-none"
//                               title="Delete"
//                             >
//                               <Trash2 size={16} />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* === MOBILE CARD VIEW (Hidden on Desktop) === */}
//                 <div className="md:hidden grid gap-4">
//                   {currentItems.map((item, index) => (
//                     <div key={item._id} className="bg-white p-5 border border-gray-200 shadow-sm flex flex-col gap-4 relative">
                      
//                       {/* Header */}
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <span className="text-xs font-mono text-gray-400">#{indexOfFirstItem + index + 1}</span>
//                           <h3 className="font-bold text-black text-lg mt-0.5">{item.name}</h3>
//                         </div>
//                         <span className="px-2 py-1 text-[10px] font-bold bg-black text-white uppercase">
//                           {item.matterType}
//                         </span>
//                       </div>

//                       <hr className="border-gray-100" />

//                       {/* Details */}
//                       <div className="space-y-3">
//                         <div className="flex items-center gap-3 text-sm">
//                           <Phone size={14} className="text-black" />
//                           <a href={`tel:${item.phone}`} className="text-gray-800 font-medium underline decoration-gray-300">
//                             {item.phone}
//                           </a>
//                         </div>
//                         <div className="flex items-start gap-3 text-sm">
//                           <FileText size={14} className="text-black mt-1" />
//                           <p className="text-gray-600 leading-snug line-clamp-2">{item.description}</p>
//                         </div>
//                       </div>

//                       {/* Footer & Action */}
//                       <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-1">
//                         <div className="flex items-center gap-1 text-xs text-gray-400">
//                            <Calendar size={12} />
//                            {new Date(item.createdAt).toLocaleDateString()}
//                         </div>
//                         <button 
//                           onClick={() => handleDelete(item._id)}
//                           className="text-gray-400 hover:text-red-600 transition-colors p-2"
//                         >
//                           <Trash2 size={18} />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* === PAGINATION === */}
//                 {totalPages > 1 && (
//                   <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 p-4 gap-4 shadow-sm">
//                     <span className="text-xs text-gray-500 font-medium">
//                       Showing <span className="text-black font-bold">{indexOfFirstItem + 1}</span> - <span className="text-black font-bold">{Math.min(indexOfLastItem, filteredData.length)}</span> of {filteredData.length}
//                     </span>

//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="p-2 border border-gray-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-400 transition-colors"
//                       >
//                         <ChevronLeft size={16} />
//                       </button>

//                       <div className="flex gap-1">
//                         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                           <button
//                             key={page}
//                             onClick={() => handlePageChange(page)}
//                             className={`w-8 h-8 text-xs font-bold transition-colors border ${
//                               currentPage === page
//                                 ? "bg-black text-white border-black"
//                                 : "bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black"
//                             }`}
//                           >
//                             {page}
//                           </button>
//                         ))}
//                       </div>

//                       <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                         className="p-2 border border-gray-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-400 transition-colors"
//                       >
//                         <ChevronRight size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
// "use client"; // Next.js 13+ के लिए जरूरी
// import {
//   ArrowLeftRight,
//   FileText,
//   Award,
//   Stamp,
//   Scale3d,
//   Search,
//   Check,
//   ChevronRight,
//   PhoneCall,
// } from "lucide-react";
// import Link from "next/link";
// import Header from "@/components/header/header";
// import Footer from "@/components/footer/footer";


// export default function ServicesSection() {
//   const services = [
//     {
//       icon: ArrowLeftRight,
//       title: "Property Buy & Sell Deals",
//       hindiTitle: "प्रॉपर्टी खरीद और बिक्री सहायता",
//       description:
//         "Complete assistance in property buying and selling with legal verification, best price negotiation & zero hidden charges.",
//       features: [
//         "Real‑time Market Price Analysis",
//         "Legal Documentation & Verification",
//         "Expert Negotiation Support",
//         "Post‑Sale Assistance",
//       ],
//       route: "/property-buy-sell",
//       color: "from-[#ff9a8b] to-[#ff6a88]",
//     },
//     {
//       icon: FileText,
//       title: "Nakal & Map Extraction",
//       hindiTitle: "नक़ल और नक्शा निकालना",
//       description:
//         "Instant & accurate extraction of property records, maps, and official documents from all government offices.",
//       features: [
//         "Revenue Records (खसरा)",
//         "Survey Maps (नक्शा)",
//         "Mutation Records (म्यूटेशन)",
//         "Online Download Option",
//       ],
//       route: "/nakal-map-extraction",
//       color: "from-[#a1c4fd] to-[#c2e9fb]",
//     },
//     {
//       icon: Award,
//       title: "Patta Creation",
//       hindiTitle: "पट्टा बनवाना",
//       description:
//         "Hassle‑free patta creation with end‑to‑end government approval, document preparation & verification.",
//       features: [
//         "Document Preparation",
//         "Government Liaison",
//         "Quick Processing (7‑15 Days)",
//         "24/7 Support",
//       ],
//       route: "/patta-creation",
//       color: "from-[#d4fc79] to-[#96e6a1]",
//     },
//     {
//       icon: Stamp,
//       title: "Property Registry Assistance",
//       hindiTitle: "प्रॉपर्टी रजिस्ट्री सेवा",
//       description:
//         "Full‑cycle registry services — stamp duty calculation, registration process management & document verification.",
//       features: [
//         "Accurate Stamp Duty Calculation",
//         "Online Registration Process",
//         "Document Verification",
//         "E‑Stamping Support",
//       ],
//       route: "/property-registry",
//       color: "from-[#fda7df] to-[#ff6b81]",
//     },
//     {
//       icon: Scale3d,
//       title: "Legal Consultancy Support",
//       hindiTitle: "कानूनी सलाह सहयोग",
//       description:
//         "Expert legal advice on property disputes, documentation, inheritance issues & litigation support.",
//       features: [
//         "Property Dispute Resolution",
//         "Legal Documentation Review",
//         "Expert Consultation (Video Call)",
//         "Court Liaison Service",
//       ],
//       route: "/legal-consultancy",
//       color: "from-[#8ec5fc] to-[#e0c3fc]",
//     },
//     {
//       icon: Search,
//       title: "Property Verification",
//       hindiTitle: "प्रॉपर्टी जांच सेवा",
//       description:
//         "Comprehensive verification to ensure clear title, no encumbrances & 100% legal compliance.",
//       features: [
//         "Title Verification",
//         "Encumbrance Check",
//         "Legal Clearance Certificate",
//         "Owner History Report",
//       ],
//       route: "/property-verification",
//       color: "from-[#83a4d4] to-[#b6fbff]",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb]">
//       <Header/>

//       {/* Hero Wave */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] h-48 -skew-y-6 transform origin-top-right"></div>
//       </div>

//       {/* Services Section */}
//       <section id="services" className="py-20 relative z-10">
//         <div className="container mx-auto px-4 max-w-7xl">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="inline-block px-4 py-2 bg-[#fef5f5] rounded-full text-[#e15e5e] font-semibold mb-4">
//               हमारी सेवाएं
//             </div>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
//               हमारी <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">
//                 संपूर्ण प्रॉपर्टी सेवाएं
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               प्रॉपर्टी खरीद, बिक्री, रजिस्ट्री, कानूनी सलाह से लेकर
//               पत्ता बनवाने तक — हम हर स्टेप पर आपके साथ हैं!
//             </p>
//             <div className="w-32 h-1.5 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full mt-6"></div>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
//             {services.map((service, index) => (
//               <Link
//                 key={index}
//                 href={service.route}
//                 className="
//                   group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
//                   transition-all duration-500 transform hover:-translate-y-2 
//                   border border-gray-100 overflow-hidden
//                   flex flex-col h-full
//                 "
//               >
//                 {/* Gradient Border Effect */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

//                 <div className="relative z-10 flex flex-col h-full">
//                   {/* Icon */}
//                   <div
//                     className={`
//                       w-20 h-20 rounded-2xl flex items-center justify-center 
//                       mb-6 mx-auto
//                       bg-gradient-to-br ${service.color}
//                       shadow-lg group-hover:scale-110 transition-transform duration-500
//                     `}
//                   >
//                     <service.icon
//                       className="text-white"
//                       size={36}
//                       strokeWidth={1.5}
//                     />
//                   </div>

//                   {/* Titles */}
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
//                     {service.title}
//                   </h3>
//                   <p className="text-lg text-[#e15e5e] font-semibold mb-4 text-center">
//                     {service.hindiTitle}
//                   </p>

//                   {/* Description */}
//                   <p className="text-gray-600 mb-6 text-center leading-relaxed">
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <ul className="space-y-3 flex-grow">
//                     {service.features.map((feature, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start bg-gray-50 rounded-lg p-3"
//                       >
//                         <div className="flex-shrink-0 mt-1">
//                           <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
//                             <Check
//                               className="text-green-600"
//                               size={14}
//                             />
//                           </div>
//                         </div>
//                         <span className="ml-3 text-gray-700 text-sm">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* CTA Button */}
//                   <button
//                     className="
//                       mt-8 w-full py-3.5 px-4 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] 
//                       text-white font-semibold rounded-lg 
//                       flex items-center justify-center
//                       transition-all duration-300
//                       hover:shadow-lg hover:from-[#d45c35] hover:to-[#c94949]
//                       group-hover:translate-y-0
//                     "
//                   >
//                     सेवा देखें
//                     <ChevronRight className="ml-2" size={18} />
//                   </button>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Contact Banner */}
//           <div className="mt-20 bg-gradient-to-r from-[#fef5f5] to-[#fff5f5] rounded-2xl p-8 text-center max-w-4xl mx-auto border border-[#ffebee]">
//             <PhoneCall className="w-12 h-12 text-[#e15e5e] mx-auto mb-4" />
//             <h3 className="text-2xl font-bold text-gray-900 mb-3">
//               अभी कोई सवाल है?
//             </h3>
//             <p className="text-gray-600 mb-6">
//               हमारे विशेषज्ञ से सीधे बात करें — 24x7 सहायता!
//             </p>
//             <a
//               href="tel:+919876543210"
//               className="
//                 inline-flex items-center px-8 py-4 
//                 bg-[#e8734a] text-white font-bold rounded-full 
//                 hover:bg-[#d45c35] transition-colors duration-300
//                 text-lg shadow-lg hover:shadow-xl
//               "
//             >
//               <PhoneCall className="mr-2" size={20} />
//               कॉल करें: +91 98765 43210
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client"; // Next.js 13+ के लिए जरूरी
import {
  ArrowLeftRight,
  FileText,
  Award,
  Stamp,
  Scale3d,
  Search,
  Check,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function ServicesSection() {
  const services = [
    {
      icon: ArrowLeftRight,
      title: "Property Buy & Sell Deals",
      hindiTitle: "प्रॉपर्टी खरीद और बिक्री सहायता",
      description:
        "Complete assistance in property buying and selling with legal verification, best price negotiation & zero hidden charges.",
      features: [
        "Real‑time Market Price Analysis",
        "Legal Documentation & Verification",
        "Expert Negotiation Support",
        "Post‑Sale Assistance",
      ],
      route: "/property-buy-sell",
      color: "from-[#ff9a8b] to-[#ff6a88]",
    },
    {
      icon: FileText,
      title: "Nakal & Map Extraction",
      hindiTitle: "नक़ल और नक्शा निकालना",
      description:
        "Instant & accurate extraction of property records, maps, and official documents from all government offices.",
      features: [
        "Revenue Records (खसरा)",
        "Survey Maps (नक्शा)",
        "Mutation Records (म्यूटेशन)",
        "Online Download Option",
      ],
      route: "/nakal-map-extraction",
      color: "from-[#a1c4fd] to-[#c2e9fb]",
    },
    {
      icon: Award,
      title: "Patta Creation",
      hindiTitle: "पट्टा बनवाना",
      description:
        "Hassle‑free patta creation with end‑to‑end government approval, document preparation & verification.",
      features: [
        "Document Preparation",
        "Government Liaison",
        "Quick Processing (7‑15 Days)",
        "24/7 Support",
      ],
      route: "/patta-creation",
      color: "from-[#d4fc79] to-[#96e6a1]",
    },
    {
      icon: Stamp,
      title: "Property Registry Assistance",
      hindiTitle: "प्रॉपर्टी रजिस्ट्री सेवा",
      description:
        "Full‑cycle registry services — stamp duty calculation, registration process management & document verification.",
      features: [
        "Accurate Stamp Duty Calculation",
        "Online Registration Process",
        "Document Verification",
        "E‑Stamping Support",
      ],
      route: "/property-registry",
      color: "from-[#fda7df] to-[#ff6b81]",
    },
    {
      icon: Scale3d,
      title: "Legal Consultancy Support",
      hindiTitle: "कानूनी सलाह सहयोग",
      description:
        "Expert legal advice on property disputes, documentation, inheritance issues & litigation support.",
      features: [
        "Property Dispute Resolution",
        "Legal Documentation Review",
        "Expert Consultation (Video Call)",
        "Court Liaison Service",
      ],
      route: "/legal-consultancy",
      color: "from-[#8ec5fc] to-[#e0c3fc]",
    },
    {
      icon: Search,
      title: "Property Verification",
      hindiTitle: "प्रॉपर्टी जांच सेवा",
      description:
        "Comprehensive verification to ensure clear title, no encumbrances & 100% legal compliance.",
      features: [
        "Title Verification",
        "Encumbrance Check",
        "Legal Clearance Certificate",
        "Owner History Report",
      ],
      route: "/property-verification",
      color: "from-[#83a4d4] to-[#b6fbff]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb]">
      <Header />

      {/* Hero Wave */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] h-48 -skew-y-6 transform origin-top-right"></div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#fef5f5] rounded-full text-[#e15e5e] font-semibold mb-4">
              हमारी सेवाएं
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              हमारी <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8734a] to-[#e15e5e]">
                संपूर्ण प्रॉपर्टी सेवाएं
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              प्रॉपर्टी खरीद, बिक्री, रजिस्ट्री, कानूनी सलाह से लेकर
              पत्ता बनवाने तक — हम हर स्टेप पर आपके साथ हैं!
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.route}
                className="
                  group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-2 
                  border border-gray-100 overflow-hidden
                  flex flex-col h-full
                "
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`
                      w-20 h-20 rounded-2xl flex items-center justify-center 
                      mb-6 mx-auto
                      bg-gradient-to-br ${service.color}
                      shadow-lg group-hover:scale-110 transition-transform duration-500
                    `}
                  >
                    <service.icon
                      className="text-white"
                      size={36}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Titles */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#e15e5e] font-semibold mb-4 text-center">
                    {service.hindiTitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 flex-grow">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start bg-gray-50 rounded-lg p-3"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <Check
                              className="text-green-600"
                              size={14}
                            />
                          </div>
                        </div>
                        <span className="ml-3 text-gray-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className="
                      mt-8 w-full py-3.5 px-4 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] 
                      text-white font-semibold rounded-lg 
                      flex items-center justify-center
                      transition-all duration-300
                      hover:shadow-lg hover:from-[#d45c35] hover:to-[#c94949]
                      group-hover:translate-y-0
                    "
                  >
                    सेवा देखें
                    <ChevronRight className="ml-2" size={18} />
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-20 bg-gradient-to-r from-[#fef5f5] to-[#fff5f5] rounded-2xl p-8 text-center max-w-4xl mx-auto border border-[#ffebee]">
            <PhoneCall className="w-12 h-12 text-[#e15e5e] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              अभी कोई सवाल है?
            </h3>
            <p className="text-gray-600 mb-6">
              हमारे विशेषज्ञ से सीधे बात करें — 24x7 सहायता!
            </p>
            <a
              href="tel:+919876543210"
              className="
                inline-flex items-center px-8 py-4 
                bg-[#e8734a] text-white font-bold rounded-full 
                hover:bg-[#d45c35] transition-colors duration-300
                text-lg shadow-lg hover:shadow-xl
              "
            >
              <PhoneCall className="mr-2" size={20} />
              कॉल करें: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}