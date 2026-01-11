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
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  MapPin,
  Bed,
  Square,
  ArrowRight,
  Tag,
  Home,
  CheckCircle,
} from "lucide-react";

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

export default function PropertyListingGrid() {
  const router = useRouter();

  const [properties, setProperties] = useState<Property[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  /* ================= FETCH PROPERTIES ================= */
  useEffect(() => {
    fetchTopProperties();
  }, []);

  const fetchTopProperties = async () => {
    try {
      const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/property/top");
      const json = await res.json();
      let props: Property[] = json.data || [];

      // ✅ Make unique by propertyTypeName using Map
      const map = new Map<string, Property>();
      for (const p of props) {
        const key = p.propertyTypeName.trim().toLowerCase();
        if (!map.has(key)) {
          map.set(key, p); // only first occurrence
        }
      }

      setProperties(Array.from(map.values()));
    } catch (err) {
      console.error("Property load error", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= FAVORITE ================= */
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const set = new Set(prev);
      set.has(id) ? set.delete(id) : set.add(id);
      return set;
    });
  };

  /* ================= UI ================= */
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 font-sans border-t-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold uppercase border mb-3">
            <Tag className="w-4 h-4" />
            चुनिंदा प्रॉपर्टी
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-black">
            आपके लिए बेस्ट प्रॉपर्टी
          </h2>

          <p className="text-green-700 font-medium text-lg mt-2">
            सही कीमत • सही एरिया • भरोसेमंद सौदा
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500 font-semibold">
            प्रॉपर्टी लोड हो रही है...
          </p>
        )}

        {/* Properties Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property._id}
                onClick={() => router.push(`/listdeatils/${property._id}`)}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all cursor-pointer overflow-hidden border hover:border-green-600"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      property.images?.length
                        ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}`
                        : "/no-image.png"
                    }
                    alt={property.propertyTypeName}
                    className="w-full h-full object-cover group-hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md">
                    बिक्री के लिए
                  </div>

                  {/* Favorite */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(property._id);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(property._id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>

                  {/* Price */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-2xl font-bold">
                      ₹{property.price.toLocaleString("en-IN")}
                    </p>
                    <p className="text-sm opacity-90">Best Price</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-green-700">
                    <Home className="w-5 h-5 text-green-600" />
                    {property.propertyTypeName}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    📍 {property.address}
                  </p>

                  <p className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1 text-green-600" />
                    {property.cityName}
                  </p>

                  {/* Property Details */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t text-sm font-semibold text-gray-700">
                    {property.configuration && (
                      <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100 text-green-800">
                        <Bed className="w-4 h-4 text-green-600" /> {property.configuration}
                      </span>
                    )}
                    {property.area && (
                      <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100 text-green-800">
                        <Square className="w-4 h-4 text-green-600" /> {property.area} sqft
                      </span>
                    )}
                    {property.carpetArea && (
                      <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100 text-green-800">
                        <Square className="w-4 h-4 text-green-600" /> {property.carpetArea} CA
                      </span>
                    )}
                    {property.plotArea && (
                      <span className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md border border-green-100 text-green-800">
                        <Square className="w-4 h-4 text-green-600" /> {property.plotArea} गज़
                      </span>
                    )}
                  </div>

                  {/* Verified Info */}
                  {/* <div className="flex items-center justify-center gap-2 bg-green-50 text-green-700 text-xs font-bold py-2 rounded-lg border border-green-200">
                    <CheckCircle className="w-4 h-4" />
                    100% Verified • No Brokerage • Best Location
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => router.push("/list")}
            className="px-10 py-4 rounded-xl bg-black text-white flex items-center gap-2 font-bold text-lg hover:bg-green-700 transition-all shadow-xl"
          >
            सभी प्रॉपर्टी देखें <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
