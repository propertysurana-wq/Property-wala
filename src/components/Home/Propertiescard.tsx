// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

// // interface Property {
// //   id: number;
// //   title: string;
// //   name: string;
// //   location: string;
// //   price: number;
// //   beds: number;
// //   baths: number;
// //   sqft: number;
// //   image: string;
// //   forSale?: boolean;
// //   forRent?: boolean;
// // }

// // interface PropertyListingGridProps {
// //   properties?: Property[];
// //   showFilters?: boolean;
// // }

// // const PropertyListingGrid: React.FC<PropertyListingGridProps> = ({
// //   properties: customProperties,
// //   showFilters = true,
// // }) => {
// //   const router = useRouter();
// //   const [activeFilter, setActiveFilter] = useState<"all" | "sale" | "rent">("all");
// //   const [favorites, setFavorites] = useState<Set<number>>(new Set());

// //   const defaultProperties: Property[] = [
// //     {
// //       id: 1,
// //       title: "दुकान",
// //       name: "Commercial Shop",
// //       location: "Jaipur, Rajasthan",
// //       price: 5200000,
// //       image:
// //         "https://staticimg.amarujala.com/assets/images/4cplus/2025/12/10/cathapara-oita-marakata-ma-bna-kara-tayara-thakana-aarakaiva_2d2013e0e38d5a78da253d3fd9b879e8.jpeg?w=414&dpr=1.0&q=80",
// //       forSale: true,
// //       beds: 0,
// //       baths: 1,
// //       sqft: 900,
// //     },
// //     {
// //       id: 2,
// //       title: "Urban Loft",
// //       name: "Luxury Loft",
// //       location: "Manhattan, New York",
// //       price: 4850,
// //       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
// //       forRent: true,
// //       beds: 2,
// //       baths: 2,
// //       sqft: 1100,
// //     },
// //   ];

// //   const properties = customProperties || defaultProperties;

// //   const toggleFavorite = (id: number) => {
// //     setFavorites((prev) => {
// //       const newFav = new Set(prev);
// //       newFav.has(id) ? newFav.delete(id) : newFav.add(id);
// //       return newFav;
// //     });
// //   };

// //   const filteredProperties = properties.filter((property) => {
// //     if (activeFilter === "sale") return property.forSale;
// //     if (activeFilter === "rent") return property.forRent;
// //     return true;
// //   });

// //   const handleCardClick = () => {
// //     router.push("list"); // ✅ बस list page पर redirect
// //   };

// //   return (
// //     <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header */}
// //         <div className="flex justify-between items-end mb-12 flex-col md:flex-row gap-6">
// //           <div>
// //             <span className="text-emerald-600 font-bold text-xs uppercase">Featured Listings</span>
// //             <h2 className="text-3xl font-extrabold tracking-tight mt-2 text-slate-900">
// //               Discover Popular Properties
// //             </h2>
// //           </div>

// //           {showFilters && (
// //             <div className="flex gap-2 bg-slate-50 p-2 rounded-xl border">
// //               {["all", "sale"].map((f) => (
// //                 <button
// //                   key={f}
// //                   onClick={() => setActiveFilter(f as any)}
// //                   className={`px-6 py-2 rounded-lg text-sm font-semibold ${
// //                     activeFilter === f
// //                       ? "bg-slate-900 text-white"
// //                       : "text-slate-600 hover:text-black"
// //                   }`}
// //                 >
// //                   {f === "all" ? "All Items" : "For Sale"}
// //                 </button>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Properties Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {filteredProperties.map((property) => (
// //             <div
// //               key={property.id}
// //               className="group bg-white rounded-3xl shadow hover:shadow-xl transition relative overflow-hidden cursor-pointer"
// //               onClick={handleCardClick} // ✅ सभी कार्ड same list page open
// //             >
// //               <div className="relative h-64">
// //                 <img
// //                   src={property.image}
// //                   alt={property.name}
// //                   className="w-full h-full object-cover duration-700 group-hover:scale-110"
// //                 />

// //                 <button
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     toggleFavorite(property.id);
// //                   }}
// //                   className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex justify-center items-center shadow"
// //                 >
// //                   <Heart
// //                     className={`w-4 h-4 ${
// //                       favorites.has(property.id) ? "fill-red-500 text-red-500" : "text-slate-700"
// //                     }`}
// //                   />
// //                 </button>
// //               </div>

// //               <div className="p-6 space-y-3">
// //                 <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600">
// //                   {property.title} — <span className="text-slate-500 text-sm">{property.name}</span>
// //                 </h3>

// //                 <p className="flex items-center text-sm text-slate-600">
// //                   <MapPin className="w-4 h-4 mr-1 text-emerald-500" /> {property.location}
// //                 </p>

// //                 <p className="text-xl font-bold text-slate-900">
// //                   ${property.price.toLocaleString()}
// //                 </p>

// //                 <div className="flex justify-between pt-3 border-t text-sm text-slate-600">
// //                   <span>
// //                     <Bed className="w-4 inline text-emerald-500" /> {property.beds}
// //                   </span>
// //                   <span>
// //                     <Bath className="w-4 inline text-emerald-500" /> {property.baths}
// //                   </span>
// //                   <span>
// //                     <Square className="w-4 inline text-emerald-500" /> {property.sqft} sqft
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Button */}
// //         <div className="mt-14 flex justify-center">
// //           <button className="px-8 py-4 rounded-full bg-slate-900 text-white flex items-center gap-2 font-bold hover:bg-emerald-600">
// //             Browse All Properties <ArrowRight className="w-4" />
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PropertyListingGrid;
// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Heart, MapPin, Bed, Bath, Square, ArrowRight, Tag } from "lucide-react";

// interface Property {
//   id: number;
//   title: string;
//   name: string;
//   location: string;
//   price: string;
//   beds: number;
//   baths: number;
//   sqft: string;
//   image: string;
//   forSale?: boolean;
//   forRent?: boolean;
//   tag: string;
// }

// interface PropertyListingGridProps {
//   properties?: Property[];
//   showFilters?: boolean;
// }

// const PropertyListingGrid: React.FC<PropertyListingGridProps> = ({
//   properties: customProperties,
//   showFilters = true,
// }) => {
//   const router = useRouter();
//   const [activeFilter, setActiveFilter] = useState<"all" | "sale" | "rent">("all");
//   const [favorites, setFavorites] = useState<Set<number>>(new Set());

//   // Deshi Style Hindi Data
//   const defaultProperties: Property[] = [
//     {
//       id: 1,
//       title: "दुकान (Shop)",
//       name: "कमर्शियल स्पेस",
//       location: "जयपुर, राजस्थान",
//       price: "₹52 लाख",
//       image: "https://staticimg.amarujala.com/assets/images/4cplus/2025/12/10/cathapara-oita-marakata-ma-bna-kara-tayara-thakana-aarakaiva_2d2013e0e38d5a78da253d3fd9b879e8.jpeg?w=414&dpr=1.0&q=80",
//       forSale: true,
//       beds: 0,
//       baths: 1,
//       sqft: "900 गज़",
//       tag: "बिक्री के लिए"
//     },
//     {
//       id: 2,
//       title: "विला (Villa)",
//       name: "लग्जरी घर",
//       location: "उदयपुर, राजस्थान",
//       price: "₹1.2 करोड़",
//       image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
//       forSale: true,
//       beds: 4,
//       baths: 3,
//       sqft: "2500 गज़",
//       tag: "नया निर्माण"
//     },
//     {
//       id: 3,
//       title: "खेत (Farm)",
//       name: "कृषि भूमि",
//       location: "भीलवाड़ा, राजस्थान",
//       price: "₹85 लाख",
//       image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
//       forSale: true,
//       beds: 0,
//       baths: 0,
//       sqft: "10 बीघा",
//       tag: "उपजाऊ जमीन"
//     },
//      {
//       id: 4,
//       title: "दुकान (Shop)",
//       name: "कमर्शियल स्पेस",
//       location: "जयपुर, राजस्थान",
//       price: "₹52 लाख",
//       image: "https://staticimg.amarujala.com/assets/images/4cplus/2025/12/10/cathapara-oita-marakata-ma-bna-kara-tayara-thakana-aarakaiva_2d2013e0e38d5a78da253d3fd9b879e8.jpeg?w=414&dpr=1.0&q=80",
//       forSale: true,
//       beds: 0,
//       baths: 1,
//       sqft: "900 गज़",
//       tag: "बिक्री के लिए"
//     },
//     {
//       id: 5,
//       title: "विला (Villa)",
//       name: "लग्जरी घर",
//       location: "उदयपुर, राजस्थान",
//       price: "₹1.2 करोड़",
//       image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
//       forSale: true,
//       beds: 4,
//       baths: 3,
//       sqft: "2500 गज़",
//       tag: "नया निर्माण"
//     },
//     {
//       id: 5,
//       title: "खेत (Farm)",
//       name: "कृषि भूमि",
//       location: "भीलवाड़ा, राजस्थान",
//       price: "₹85 लाख",
//       image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
//       forSale: true,
//       beds: 0,
//       baths: 0,
//       sqft: "10 बीघा",
//       tag: "उपजाऊ जमीन"
//     },
//   ];

//   const properties = customProperties || defaultProperties;

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) => {
//       const newFav = new Set(prev);
//       newFav.has(id) ? newFav.delete(id) : newFav.add(id);
//       return newFav;
//     });
//   };

//   const filteredProperties = properties.filter((property) => {
//     if (activeFilter === "sale") return property.forSale;
//     if (activeFilter === "rent") return property.forRent;
//     return true;
//   });

//   const handleCardClick = () => {
//     router.push("/list"); // Redirect to List Page
//   };

//   return (
//     <section className="w-full  py-20 px-4 sm:px-6 lg:px-8 font-sans border-t-8 ">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex justify-between items-end mb-12 flex-col md:flex-row gap-6">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-2 border border-green-300">
//               <Tag className="w-4 h-4" />
//               खास प्रॉपर्टी
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-black mt-2">
//               लोकप्रिय प्रॉपर्टी देखें
//             </h2>
//             <p className="text-green-700 font-medium text-lg mt-1">
//               शहर की सबसे बेहतरीन जगहें
//             </p>
//           </div>

//           {showFilters && (
//             <div className="flex gap-2 bg-white p-2 rounded-xl border border-green-200 shadow-sm">
//               <button
//                 onClick={() => setActiveFilter("all")}
//                 className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
//                   activeFilter === "all"
//                     ? "bg-black text-white shadow-md"
//                     : "text-gray-600 hover:bg-green-50 hover:text-green-700"
//                 }`}
//               >
//                 सभी देखें
//               </button>
//               <button
//                 onClick={() => setActiveFilter("sale")}
//                 className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
//                   activeFilter === "sale"
//                     ? "bg-green-600 text-white shadow-md"
//                     : "text-gray-600 hover:bg-green-50 hover:text-green-700"
//                 }`}
//               >
//                 बिक्री के लिए
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Properties Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProperties.map((property) => (
//             <div
//               key={property.id}
//               className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden cursor-pointer border-2 border-transparent hover:border-green-500"
//               onClick={handleCardClick}
//             >
              
//               {/* Image Area */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={property.image}
//                   alt={property.name}
//                   className="w-full h-full object-cover duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

//                 {/* Tag Badge */}
//                 <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wide">
//                   {property.tag}
//                 </div>

//                 {/* Like Button */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     toggleFavorite(property.id);
//                   }}
//                   className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex justify-center items-center shadow-lg hover:bg-white transition-all"
//                 >
//                   <Heart
//                     className={`w-5 h-5 transition-colors ${
//                       favorites.has(property.id) ? "fill-red-500 text-red-500" : "text-gray-700"
//                     }`}
//                   />
//                 </button>

//                 {/* Price on Image */}
//                 <div className="absolute bottom-4 left-4 text-white">
//                    <p className="text-2xl font-bold">{property.price}</p>
//                 </div>
//               </div>

//               {/* Content Area */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-black mb-1 group-hover:text-green-700 transition-colors">
//                   {property.title} <span className="text-gray-500 text-base font-medium">| {property.name}</span>
//                 </h3>

//                 <p className="flex items-center text-sm text-gray-600 font-medium mb-4">
//                   <MapPin className="w-4 h-4 mr-1 text-green-600" /> {property.location}
//                 </p>

//                 {/* Amenities Divider */}
//                 <div className="flex justify-between items-center pt-4 border-t border-green-100 text-sm font-semibold text-gray-700">
//                   {property.beds > 0 && (
//                     <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100">
//                       <Bed className="w-4 h-4 text-green-600" /> {property.beds} बेड
//                     </span>
//                   )}
//                   {property.baths > 0 && (
//                     <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100">
//                       <Bath className="w-4 h-4 text-green-600" /> {property.baths} बाथ
//                     </span>
//                   )}
//                   <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100">
//                     <Square className="w-4 h-4 text-green-600" /> {property.sqft}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="mt-16 flex justify-center">
//           <button 
//             onClick={handleCardClick}
//             className="px-10 py-4 rounded-xl bg-black text-white flex items-center gap-2 font-bold text-lg hover:bg-green-700 transition-all shadow-xl hover:shadow-green-500/30 transform hover:-translate-y-1"
//           >
//             सभी प्रॉपर्टी देखें <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PropertyListingGrid;
// 
// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Heart,
//   MapPin,
//   Bed,
//   Square,
//   ArrowRight,
//   Home,
//   CheckCircle,
//   Star,
// } from "lucide-react";

// interface Property {
//   _id: string;
//   propertyTypeName: string;
//   cityName: string;
//   address: string;
//   price: number;
//   images: string[];
//   configuration?: string;
//   area?: number;
//   carpetArea?: number;
//   plotArea?: number;
//   status: string;
// }

// export default function PropertyListingGrid() {
//   const router = useRouter();

//   const [properties, setProperties] = useState<Property[]>([]);
//   const [favorites, setFavorites] = useState<Set<string>>(new Set());
//   const [loading, setLoading] = useState(true);

//   /* ================= FETCH PROPERTIES ================= */
//   useEffect(() => {
//     fetchTopProperties();
//   }, []);

//   const fetchTopProperties = async () => {
//     try {
//       const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/property/top");
//       const json = await res.json();
//       let props: Property[] = json.data || [];

//       // ✅ Make unique by propertyTypeName using Map
//       const map = new Map<string, Property>();
//       for (const p of props) {
//         const key = p.propertyTypeName.trim().toLowerCase();
//         if (!map.has(key)) {
//           map.set(key, p); // only first occurrence
//         }
//       }

//       setProperties(Array.from(map.values()));
//     } catch (err) {
//       console.error("Property load error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= FAVORITE ================= */
//   const toggleFavorite = (id: string) => {
//     setFavorites((prev) => {
//       const set = new Set(prev);
//       set.has(id) ? set.delete(id) : set.add(id);
//       return set;
//     });
//   };

//   /* ================= UI ================= */
//   return (
//     <section 
//       className="w-full py-20 px-4 sm:px-6 lg:px-8 font-sans"
//       style={{ backgroundColor: '#ffffff' }}
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="mb-14 text-center">
//           <div 
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase border mb-4"
//             style={{
//               backgroundColor: 'rgba(204, 63, 63, 0.1)',
//               color: '#cc3f3f',
//               borderColor: 'rgba(204, 63, 63, 0.3)'
//             }}
//           >
//             <Star className="w-4 h-4" />
//             चुनिंदा प्रॉपर्टी
//           </div>

//           <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
//             आपके लिए <span style={{ color: '#cc3f3f' }}>बेस्ट प्रॉपर्टी</span>
//           </h2>

//           <p className="text-gray-700 font-medium text-lg">
//             सही कीमत • सही जगह • पक्का सौदा
//           </p>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <p className="text-center text-gray-600 font-semibold text-lg">
//             प्रॉपर्टी दिख रही है... कृपया इंतज़ार करें
//           </p>
//         )}

//         {/* Properties Grid */}
//         {!loading && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {properties.map((property) => (
//               <div
//                 key={property._id}
//                 onClick={() => router.push(`/listdeatils/${property._id}`)}
//                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden border-2"
//                 style={{ borderColor: '#f3f4f6' }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = '#cc3f3f';
//                   e.currentTarget.style.transform = 'translateY(-4px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = '#f3f4f6';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 {/* Image */}
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={
//                       property.images?.length
//                         ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}`
//                         : "/no-image.png"
//                     }
//                     alt={property.propertyTypeName}
//                     className="w-full h-full object-cover group-hover:scale-110 duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

//                   {/* Tag */}
//                   <div 
//                     className="absolute top-4 left-4 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md"
//                     style={{ backgroundColor: '#cc3f3f' }}
//                   >
//                     बिक्री के लिए
//                   </div>

//                   {/* Favorite */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleFavorite(property._id);
//                     }}
//                     className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
//                   >
//                     <Heart
//                       className={`w-5 h-5 ${
//                         favorites.has(property._id)
//                           ? "fill-red-500 text-red-500"
//                           : "text-gray-600"
//                       }`}
//                     />
//                   </button>

//                   {/* Price */}
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <p className="text-3xl font-extrabold drop-shadow-lg">
//                       ₹{property.price.toLocaleString("en-IN")}
//                     </p>
//                     <p className="text-sm font-medium opacity-90">सबसे अच्छी कीमत</p>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 space-y-4">
//                   <h3 className="text-xl font-bold flex items-center gap-2 text-gray-900 group-hover:text-[#cc3f3f] transition-colors">
//                     <Home className="w-5 h-5" style={{ color: '#cc3f3f' }} />
//                     {property.propertyTypeName}
//                   </h3>

//                   <p className="text-sm text-gray-600 line-clamp-2 flex items-start gap-2">
//                     <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#cc3f3f' }} />
//                     <span>{property.address}, {property.cityName}</span>
//                   </p>

//                   {/* Property Details */}
//                   <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-gray-100">
//                     {property.configuration && (
//                       <span 
//                         className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold border-2"
//                         style={{
//                           backgroundColor: 'rgba(204, 63, 63, 0.05)',
//                           borderColor: 'rgba(204, 63, 63, 0.2)',
//                           color: '#cc3f3f'
//                         }}
//                       >
//                         <Bed className="w-4 h-4" /> {property.configuration}
//                       </span>
//                     )}
//                     {property.area && (
//                       <span 
//                         className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold border-2"
//                         style={{
//                           backgroundColor: 'rgba(204, 63, 63, 0.05)',
//                           borderColor: 'rgba(204, 63, 63, 0.2)',
//                           color: '#cc3f3f'
//                         }}
//                       >
//                         <Square className="w-4 h-4" /> {property.area} sqft
//                       </span>
//                     )}
//                     {property.carpetArea && (
//                       <span 
//                         className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold border-2"
//                         style={{
//                           backgroundColor: 'rgba(204, 63, 63, 0.05)',
//                           borderColor: 'rgba(204, 63, 63, 0.2)',
//                           color: '#cc3f3f'
//                         }}
//                       >
//                         <Square className="w-4 h-4" /> {property.carpetArea} CA
//                       </span>
//                     )}
//                     {property.plotArea && (
//                       <span 
//                         className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold border-2"
//                         style={{
//                           backgroundColor: 'rgba(204, 63, 63, 0.05)',
//                           borderColor: 'rgba(204, 63, 63, 0.2)',
//                           color: '#cc3f3f'
//                         }}
//                       >
//                         <Square className="w-4 h-4" /> {property.plotArea} गज़
//                       </span>
//                     )}
//                   </div>

//                   {/* Verified Badge */}
//                   <div 
//                     className="flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-lg border-2"
//                     style={{
//                       backgroundColor: 'rgba(204, 63, 63, 0.05)',
//                       borderColor: 'rgba(204, 63, 63, 0.2)',
//                       color: '#cc3f3f'
//                     }}
//                   >
//                     <CheckCircle className="w-4 h-4" />
//                     जाँचा हुआ • कोई दलाली नहीं • अच्छी जगह
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* View All Button */}
//         <div className="mt-16 flex justify-center">
//           <button
//             onClick={() => router.push("/list")}
//             className="px-10 py-4 rounded-full text-white flex items-center gap-3 font-bold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
//             style={{ backgroundColor: '#cc3f3f' }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b33636'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#cc3f3f'}
//           >
//             सभी प्रॉपर्टी देखें <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Bottom Info */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-700 text-base font-medium">
//             और भी प्रॉपर्टी देखने के लिए ऊपर बटन दबाएं
//           </p>
//           <p className="text-gray-500 text-sm mt-1">
//             हम आपके सपनों का घर ढूंढने में मदद करेंगे
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface Property {
//   _id: string;
//   propertyTypeName: string;
//   cityName: string;
//   address: string;
//   price: number;
//   images: string[];
//   configuration?: string;
//   area?: number;
//   carpetArea?: number;
//   plotArea?: number;
//   status: string;
// }

// export default function DesiPropertyListing() {
//   const router = useRouter();
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTopProperties();
//   }, []);

//   const fetchTopProperties = async () => {
//     try {
//       const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/property/top");
//       const json = await res.json();
//       let props: Property[] = json.data || [];

//       // Make unique by propertyTypeName
//       const map = new Map<string, Property>();
//       for (const p of props) {
//         const key = p.propertyTypeName.trim().toLowerCase();
//         if (!map.has(key)) {
//           map.set(key, p);
//         }
//       }

//       setProperties(Array.from(map.values()));
//     } catch (err) {
//       console.error("Property load error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getPropertyIcon = (type: string) => {
//     const typeLower = type.toLowerCase();
//     if (typeLower.includes("खेत") || typeLower.includes("agriculture") || typeLower.includes("कृषि")) return "🌾";
//     if (typeLower.includes("प्लॉट") || typeLower.includes("plot")) return "🏡";
//     if (typeLower.includes("मकान") || typeLower.includes("house") || typeLower.includes("residential")) return "🏠";
//     if (typeLower.includes("दुकान") || typeLower.includes("shop")) return "🏢";
//     if (typeLower.includes("बंगला") || typeLower.includes("villa")) return "🏰";
//     if (typeLower.includes("फ्लैट") || typeLower.includes("apartment")) return "🏢";
//     return "🏘️";
//   };

//   const getStatusBadgeColor = (index: number) => {
//     const colors = ['#cc3f3f', '#3b82f6', '#8b5cf6', '#16a34a'];
//     return colors[index % colors.length];
//   };

//   const handleCall = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     // Add your call functionality here
//     alert("कॉल फंक्शनलिटी यहाँ add करें");
//   };

//   const handleViewProperty = (propertyId: string) => {
//     router.push(`/listdeatils/${propertyId}`);
//   };

//   return (
//     <section className="py-12 font-sans" style={{ backgroundColor: 'white' }}>
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <h2 
//           className="text-3xl md:text-4xl font-bold text-center mb-4"
//           style={{ color: '#cc3f3f' }}
//         >
//           नई लिस्टेड प्रॉपर्टीज़
//         </h2>
//         <p className="text-center text-gray-600 mb-10 text-lg">
//           अभी देखें और जल्दी डील करें
//         </p>

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center py-20">
//             <p className="text-gray-600 font-semibold text-lg">
//               प्रॉपर्टी दिख रही है... कृपया इंतज़ार करें
//             </p>
//           </div>
//         )}

//         {/* Property Grid */}
//         {!loading && properties.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {properties.map((property, index) => (
//               <div
//                 key={property._id}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
//                 onClick={() => handleViewProperty(property._id)}
//               >
//                 {/* Image Section */}
//                 <div className="relative">
//                   <img
//                     src={
//                       property.images && property.images.length > 0
//                         ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}`
//                         : "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"
//                     }
//                     alt={property.propertyTypeName}
//                     className="w-full h-48 object-cover"
//                     onError={(e) => {
//                       const target = e.target as HTMLImageElement;
//                       target.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600";
//                     }}
//                   />
                  
//                   {/* Status Badge */}
                
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-5">
//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
//                     {property.propertyTypeName}
//                     {property.configuration && ` - ${property.configuration}`}
//                   </h3>

//                   {/* Location */}
//                   <p className="text-gray-600 mb-2 line-clamp-2">
//                      {property.address}, {property.cityName}
//                   </p>

//                   {/* Price */}
//                   <div 
//                     className="flex items-center gap-2 font-bold text-lg mb-3"
//                     style={{ color: '#cc3f3f' }}
//                   >
//                     <span></span>
//                     <span>₹{property.price.toLocaleString("en-IN")}</span>
//                     <span className="text-sm font-normal text-gray-500">
//                       (तक़रीबन)
//                     </span>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-2">
//                     <button
//                       onClick={handleCall}
//                       className="flex-1 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-1 transition-colors"
//                       style={{ backgroundColor: '#16a34a' }}
//                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
//                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
//                     >
//                      कॉल करें
//                     </button>
//                     <button
//                       className="flex-1 text-white py-2 rounded-lg font-bold transition-colors"
//                       style={{ backgroundColor: '#d97706' }}
//                       onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b45309'}
//                       onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d97706'}
//                     >
//                       देखें
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* No Properties Found */}
//         {!loading && properties.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-gray-600 font-semibold text-lg">
//               कोई प्रॉपर्टी नहीं मिली
//             </p>
//           </div>
//         )}

//         {/* View More Button */}
//         {!loading && properties.length > 0 && (
//           <div className="text-center mt-8">
//             <button
//               onClick={() => router.push("/list")}
//               className="text-white px-8 py-3 rounded-xl font-bold text-lg transition-colors"
//               style={{ backgroundColor: '#cc3f3f' }}
//               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b33636'}
//               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#cc3f3f'}
//             >
//               और प्रॉपर्टी देखें →
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, X } from "lucide-react";

interface Property {
  _id: string;
  propertyTypeName: string;
  cityName: string;
  address: string;
  price: number;
  images: string[];
  configuration?: string;
  area?: number;
  carpetArea?: number;
  plotArea?: number;
  status: string;
}

interface ContactInfo {
  phoneNumbers: string[];
}

export default function DesiPropertyListing() {
  const router = useRouter();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Contact Info State
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  
  // Dropdown State
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  // --- FIX: Define function inside component with explicit return type ---
  const getStatusBadgeColor = (index: number): string => {
    const colors = ['#cc3f3f', '#3b82f6', '#8b5cf6', '#16a34a'];
    return colors[index % colors.length];
  };

  useEffect(() => {
    fetchTopProperties();
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const res = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contact');
      const data = await res.json();
      if (data.success && data.data) {
        setContactInfo(data.data);
      }
    } catch (err) {
      console.error('Error fetching contact info:', err);
    }
  };

  const fetchTopProperties = async () => {
    try {
      const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/property/top");
      const json = await res.json();
      let props: Property[] = json.data || [];

      const map = new Map<string, Property>();
      for (const p of props) {
        const key = p.propertyTypeName.trim().toLowerCase();
        if (!map.has(key)) {
          map.set(key, p);
        }
      }
      setProperties(Array.from(map.values()));
    } catch (err) {
      console.error("Property load error", err);
    } finally {
      setLoading(false);
    }
  };

  const getPropertyIcon = (type: string) => {
    const typeLower = type.toLowerCase();
    if (typeLower.includes("खेत") || typeLower.includes("agriculture") || typeLower.includes("कृषि")) return "🌾";
    if (typeLower.includes("प्लॉट") || typeLower.includes("plot")) return "🏡";
    if (typeLower.includes("मकान") || typeLower.includes("house") || typeLower.includes("residential")) return "🏠";
    if (typeLower.includes("दुकान") || typeLower.includes("shop")) return "🏢";
    if (typeLower.includes("बंगला") || typeLower.includes("villa")) return "🏰";
    if (typeLower.includes("फ्लैट") || typeLower.includes("apartment")) return "🏢";
    return "🏘️";
  };

  // --- SMART CALL LOGIC ---
  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!contactInfo || !contactInfo.phoneNumbers || contactInfo.phoneNumbers.length === 0) {
      alert("Contact number not available");
      return;
    }

    // Check if Mobile/Tablet
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      // Mobile: Direct call to FIRST number
      const firstNumber = contactInfo.phoneNumbers[0];
      window.location.href = `tel:${firstNumber}`;
    } else {
      // Desktop: Show Dropdown
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX
      });
      setShowDropdown(true);
    }
  };

  const handleDirectPhoneCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
    setShowDropdown(false);
  };

  const handleViewProperty = (propertyId: string) => {
    router.push(`/listdeatils/${propertyId}`);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      if (showDropdown) setShowDropdown(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [showDropdown]);

  return (
    <section className="py-12 font-sans" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#cc3f3f' }}>
          नई लिस्टेड प्रॉपर्टीज़
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          अभी देखें और जल्दी डील करें
        </p>

        {loading && (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: '#cc3f3f', borderTopColor: 'transparent' }}></div>
            <p className="text-gray-600 font-semibold text-lg">प्रॉपर्टी दिख रही है...</p>
          </div>
        )}

        {!loading && properties.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <div
                key={property._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer border border-gray-100"
                onClick={() => handleViewProperty(property._id)}
              >
                <div className="relative">
                  <img
                    src={
                      property.images && property.images.length > 0
                        ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}`
                        : "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"
                    }
                    alt={property.propertyTypeName}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600";
                    }}
                  />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-md font-bold text-lg">
                    {getPropertyIcon(property.propertyTypeName)}
                  </div>

                  {/* Status Badge - Now works without error */}
                  <div 
                    className="absolute top-3 right-3 text-white px-2 py-1 rounded-md text-xs font-bold uppercase shadow-md"
                    style={{ backgroundColor: getStatusBadgeColor(index) }}
                  >
                    {property.status || "New"}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 hover:text-[#cc3f3f] transition-colors">
                    {property.propertyTypeName}
                    {property.configuration && ` - ${property.configuration}`}
                  </h3>

                  <p className="text-gray-600 mb-2 line-clamp-2 text-sm">
                    📍 {property.address}, {property.cityName}
                  </p>

                  <div className="flex items-center gap-2 font-bold text-lg mb-3" style={{ color: '#cc3f3f' }}>
                    <span>₹{property.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm font-normal text-gray-500">(Approx)</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCall}
                      className="flex-1 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-1 transition-colors hover:opacity-90"
                      style={{ backgroundColor: '#16a34a' }}
                    >
                      <Phone className="w-4 h-4" /> कॉल करें
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewProperty(property._id);
                      }}
                      className="flex-1 text-white py-2 rounded-lg font-bold transition-colors hover:opacity-90"
                      style={{ backgroundColor: '#cc3f3f' }}
                    >
                      देखें
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && properties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 font-semibold text-lg">कोई प्रॉपर्टी नहीं मिली</p>
          </div>
        )}

        {!loading && properties.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => router.push("/list")}
              className="text-white px-8 py-3 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ backgroundColor: '#cc3f3f' }}
            >
              और प्रॉपर्टी देखें →
            </button>
          </div>
        )}
      </div>

      {/* Dropdown for Desktop */}
      {showDropdown && (
        <div 
          className="fixed bg-white rounded-xl shadow-2xl border-2 border-gray-200 overflow-hidden z-50 animate-fadeIn"
          style={{ 
            top: dropdownPosition.top, 
            left: dropdownPosition.left,
            minWidth: '250px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Number</span>
            <button onClick={() => setShowDropdown(false)} className="text-gray-400 hover:text-red-500">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {contactInfo?.phoneNumbers.map((phone, index) => (
              <button
                key={index}
                onClick={() => handleDirectPhoneCall(phone)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#fdf2f2] transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fdf2f2' }}>
                  <Phone className="w-4 h-4" style={{ color: '#cc3f3f' }} />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{phone}</p>
                  <p className="text-xs text-gray-500">Office Line {index + 1}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}