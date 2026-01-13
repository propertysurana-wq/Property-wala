// "use client";

// import React, { useState } from "react";
// import {
//   Heart,
//   MapPin,
//   Bed,
//   Bath,
//   Maximize,
//   Search,
//   Grid,
//   List,
//   SlidersHorizontal,
//   Filter,
//   CheckCircle,
// } from "lucide-react";
// import { useRouter } from "next/navigation";
// import Header from "@/components/header/header";
// import Footer from "../footer/footer";

// export default function RealEstateBuyList() {
//   const router = useRouter();
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [favorites, setFavorites] = useState<Set<number>>(new Set());

//   const properties = [
//     {
//       id: 1,
//       title: "लग्जरी विला (Luxury Villa)",
//       price: "₹1.5 Cr",
//       image:
//         "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
//       location: "सिविल लाइन्स, जयपुर",
//       bedrooms: 4,
//       baths: 3,
//       sqft: "300 गज़",
//       tag: "बिक्री के लिए",
//       tagColor: "bg-green-600"
//     },
//     {
//       id: 2,
//       title: "मॉडर्न फ्लैट (Modern Flat)",
//       price: "₹45 लाख",
//       image:
//         "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
//       location: "वैशाली नगर, दिल्ली",
//       bedrooms: 2,
//       baths: 2,
//       sqft: "1200 Sq Ft",
//       tag: "नया",
//       tagColor: "bg-black"
//     },
//     {
//       id: 3,
//       title: "फार्म हाउस (Farm House)",
//       price: "₹85 लाख",
//       image:
//         "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
//       location: "उदयपुर रोड, राजस्थान",
//       bedrooms: 3,
//       baths: 2,
//       sqft: "5 बीघा",
//       tag: "कृषि भूमि",
//       tagColor: "bg-green-700"
//     },
//     {
//       id: 4,
//       title: "बंगला (Bungalow)",
//       price: "₹2.1 Cr",
//       image:
//         "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
//       location: "जोधपुर, राजस्थान",
//       bedrooms: 5,
//       baths: 4,
//       sqft: "500 गज़",
//       tag: "हॉट डील",
//       tagColor: "bg-red-500"
//     },
//   ];

//   const toggleFavorite = (id: number, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setFavorites((prev) => {
//       const updated = new Set(prev);
//       updated.has(id) ? updated.delete(id) : updated.add(id);
//       return updated;
//     });
//   };

//   const handleCardClick = () => {
//     router.push(`/listdeatils`);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header/>
      
//       {/* Hero Section */}
//       <div className="bg-black border-b-4 border-green-600 pt-16 pb-20 px-4 relative overflow-hidden">
//         {/* Decorative Circle */}
//         <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-green-50 rounded-full z-0"></div>
        
//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <span className="text-green-700 font-bold uppercase tracking-widest text-xs bg-green-100 px-3 py-1 rounded-full mb-4 inline-block border border-green-200">
//             Exclusive Listings
//           </span>
//          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
//   अपनी <span className="text-green-500">पसंद की प्रॉपर्टी</span> खोजें
// </h1>
//           <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
//             Find the best Homes, Land, and Shops in your budget.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 -mt-10 pb-12 relative z-20">
//         <div className="flex flex-col lg:flex-row gap-8">
          
//           {/* Sidebar */}
//           <aside className="w-full lg:w-80 space-y-6">
            
//             {/* Search Box */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
//               <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-green-600 transition-all">
//                 <Search className="w-5 h-5 text-green-600" />
//                 <input
//                   type="text"
//                   placeholder="खोजें (Search)..."
//                   className="flex-1 outline-none text-sm bg-transparent placeholder:text-slate-400 text-slate-900 font-medium"
//                 />
//               </div>
//             </div>

//             {/* Filter Box */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 space-y-6">
//               <div className="flex justify-between items-center pb-4 border-b border-slate-100">
//                 <div className="flex items-center gap-2">
//                   <Filter className="w-5 h-5 text-green-600" />
//                   <h3 className="font-bold text-lg text-slate-900">Filters</h3>
//                 </div>
//                 <button className="text-green-600 text-xs font-bold uppercase hover:underline">
//                   Reset
//                 </button>
//               </div>

//               {/* Location Filter */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   स्थान (Location)
//                 </label>
//                 <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium">
//                   <option>Select Location</option>
//                   <option>Jaipur</option>
//                   <option>Udaipur</option>
//                   <option>Delhi</option>
//                 </select>
//               </div>

//               {/* Property Type Filter */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   प्रॉपर्टी टाइप (Type)
//                 </label>
//                 <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium">
//                   <option>All Types</option>
//                   <option>Apartment</option>
//                   <option>Villa</option>
//                   <option>Land</option>
//                 </select>
//               </div>

//               {/* Price Range */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   कीमत (Price)
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     type="text"
//                     placeholder="Min"
//                     className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Max"
//                     className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
//                   />
//                 </div>
//               </div>

//               {/* Apply Button */}
//               <button className="w-full bg-black hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-all transform active:scale-95 border-b-4 border-green-600">
//                 Apply Filters
//               </button>
//             </div>
//           </aside>

//           {/* Main Content */}
//           <main className="flex-1">
//             {/* Results Header */}
//             <div className="bg-white rounded-2xl p-4 shadow-md mb-6 border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-slate-500 font-medium">
//                 Showing <span className="text-slate-900 font-bold">1–4</span> of <span className="text-slate-900 font-bold">4</span> results
//               </p>
              
//               <div className="flex items-center gap-3">
//                 <span className="text-xs font-bold text-slate-400 uppercase">View:</span>
//                 <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
//                   <button
//                     onClick={() => setViewMode("grid")}
//                     className={`p-2 rounded-md transition-all ${
//                       viewMode === "grid"
//                         ? "bg-white text-green-600 shadow-sm border border-slate-200"
//                         : "text-slate-400 hover:text-slate-600"
//                     }`}
//                   >
//                     <Grid className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode("list")}
//                     className={`p-2 rounded-md transition-all ${
//                       viewMode === "list"
//                         ? "bg-white text-green-600 shadow-sm border border-slate-200"
//                         : "text-slate-400 hover:text-slate-600"
//                     }`}
//                   >
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Property Cards Grid */}
//             <div
//               className={`grid ${
//                 viewMode === "grid" ? "md:grid-cols-2" : "grid-cols-1"
//               } gap-6`}
//             >
//               {properties.map((p) => (
//                 <div
//                   key={p.id}
//                   onClick={handleCardClick}
//                   className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-green-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
//                 >
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={p.image}
//                       alt={p.title}
//                       className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
                    
//                     {/* Gradient Overlay for better text visibility */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

//                     {/* Tag Badge */}
//                     {p.tag && (
//                       <div className="absolute top-4 left-4">
//                         <span className={`${p.tagColor} text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md`}>
//                           {p.tag}
//                         </span>
//                       </div>
//                     )}

//                     {/* Favorite Button */}
//                     <button
//                       onClick={(e) => toggleFavorite(p.id, e)}
//                       className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white p-2.5 rounded-full hover:bg-white transition-all group/heart shadow-sm"
//                     >
//                       <Heart
//                         className={`w-5 h-5 transition-colors ${
//                           favorites.has(p.id)
//                             ? "fill-red-500 text-red-500"
//                             : "text-slate-600 group-hover/heart:text-red-500"
//                         }`}
//                       />
//                     </button>

//                     {/* Price Tag (Over Image) */}
//                     <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-lg shadow-lg border-l-4 border-green-600">
//                        <p className="text-xl font-bold text-slate-900">{p.price}</p>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className="mb-4">
//                       <h3 className="font-bold text-xl text-slate-900 group-hover:text-green-700 transition-colors line-clamp-1 mb-1">
//                         {p.title}
//                       </h3>
//                       <div className="flex items-center text-sm text-slate-500 gap-2 font-medium">
//                         <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
//                         <span className="line-clamp-1">{p.location}</span>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//                       <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                         <Bed className="w-4 h-4 text-green-600" />
//                         <span>{p.bedrooms} Beds</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                         <Bath className="w-4 h-4 text-green-600" />
//                         <span>{p.baths} Baths</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                         <Maximize className="w-4 h-4 text-green-600" />
//                         <span>{p.sqft}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center items-center gap-2 mt-12">
//               <button className="px-6 py-3 border border-slate-200 bg-white rounded-xl hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all font-bold text-sm text-slate-500">
//                 Previous
//               </button>
//               <button className="px-5 py-3 bg-black text-white rounded-xl font-bold shadow-lg border-b-4 border-green-600">
//                 1
//               </button>
//               <button className="px-5 py-3 border border-slate-200 bg-white rounded-xl hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all font-bold text-slate-500">
//                 2
//               </button>
//               <button className="px-6 py-3 border border-slate-200 bg-white rounded-xl hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all font-bold text-sm text-slate-500">
//                 Next
//               </button>
//             </div>
//           </main>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }      
// 
// 
// "use client";
// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import {
//   Heart,
//   MapPin,
//   Bed,
//   Maximize,
//   Grid,
//   List,
//   Search,
//   Filter,
//   X,
//   Home,
//   Sparkles,
// } from "lucide-react";

// interface Property {
//   _id: string;
//   propertyTypeName: string;
//   price: number;
//   images: string[];
//   address: string;
//   cityName: string;
//   configuration?: string;
//   area?: number;
//   plotArea?: number;
// }

// export default function RealEstateBuyList() {
//   const searchParams = useSearchParams();
//   const cityFromUrl = searchParams.get("city") || "";

//   const [properties, setProperties] = useState<Property[]>([]);
//   const [filtered, setFiltered] = useState<Property[]>([]);
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [favorites, setFavorites] = useState<Set<string>>(new Set());
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState(cityFromUrl);
//   const [type, setType] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [availableCities, setAvailableCities] = useState<string[]>([]);

//   /* ================= FETCH PROPERTIES ================= */
//   useEffect(() => {
//     fetch("https://propertybackend-1-xdbs.onrender.com/api/property")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProperties = data.data || [];
//         setProperties(allProperties);

//         const cities = Array.from(
//           new Set(allProperties.map((p: Property) => p.cityName))
//         );
//         setAvailableCities(cities.sort());

//         if (cityFromUrl) {
//           const filteredByCity = allProperties.filter(
//             (p: Property) =>
//               p.cityName.toLowerCase() === cityFromUrl.toLowerCase()
//           );
//           setFiltered(filteredByCity);
//         } else {
//           setFiltered(allProperties);
//         }
//       })
//       .finally(() => setLoading(false));
//   }, [cityFromUrl]);

//   /* ================= FILTER ================= */
//   const applyFilters = () => {
//     let data = [...properties];

//     if (search) {
//       data = data.filter(
//         (p) =>
//           p.propertyTypeName.toLowerCase().includes(search.toLowerCase()) ||
//           p.address.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (location) {
//       data = data.filter((p) =>
//         p.cityName.toLowerCase().includes(location.toLowerCase())
//       );
//     }

//     if (type) {
//       data = data.filter((p) =>
//         p.propertyTypeName.toLowerCase().includes(type.toLowerCase())
//       );
//     }

//     if (minPrice) data = data.filter((p) => p.price >= Number(minPrice));
//     if (maxPrice) data = data.filter((p) => p.price <= Number(maxPrice));

//     setFiltered(data);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [location, search, type, minPrice, maxPrice, properties]);

//   const resetFilters = () => {
//     setSearch("");
//     setLocation("");
//     setType("");
//     setMinPrice("");
//     setMaxPrice("");
//     setFiltered(properties);

//     if (typeof window !== "undefined") {
//       window.history.pushState({}, "", "/list");
//     }
//   };

//   const toggleFavorite = (id: string, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setFavorites((prev) => {
//       const set = new Set(prev);
//       set.has(id) ? set.delete(id) : set.add(id);
//       return set;
//     });
//   };

//   const navigateToDetails = (id: string) => {
//     if (typeof window !== "undefined") {
//       window.location.href = `/listdeatils/${id}`;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="relative inline-block">
//             <div className="w-24 h-24 border-8 border-slate-200 rounded-full"></div>
//             <div className="w-24 h-24 border-8 border-emerald-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
//           </div>
//           <p className="mt-8 text-lg font-bold text-slate-700 animate-pulse">
//             Loading Properties...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.6s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>

//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
//         {/* Hero Section */}
//         <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
//           {/* Animated Background */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
//             <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
//           </div>

//           <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
//             <div className="text-center space-y-6">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-6 py-2.5 rounded-full backdrop-blur-sm">
//                 <Sparkles className="w-4 h-4 text-emerald-400" />
//                 <span className="text-emerald-300 font-semibold text-sm tracking-wide">
//                   PREMIUM LISTINGS
//                 </span>
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
//                 {cityFromUrl ? (
//                   <>
//                     Properties in
//                     <br />
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
//                       {cityFromUrl}
//                     </span>
//                   </>
//                 ) : (
//                   <>
//                     Find Your
//                     <br />
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
//                       Dream Property
//                     </span>
//                   </>
//                 )}
//               </h1>

//               {/* Subheading */}
//               <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
//                 Discover premium homes, lands, and commercial spaces tailored to your lifestyle
//               </p>

//               {/* Stats */}
//               <div className="flex justify-center gap-8 md:gap-12 pt-8">
//                 <div className="text-center">
//                   <div className="text-3xl md:text-4xl font-black text-white">
//                     {properties.length}+
//                   </div>
//                   <div className="text-sm text-slate-400 font-medium mt-1">
//                     Properties
//                   </div>
//                 </div>
//                 <div className="w-px bg-slate-700"></div>
//                 <div className="text-center">
//                   <div className="text-3xl md:text-4xl font-black text-white">
//                     {availableCities.length}+
//                   </div>
//                   <div className="text-sm text-slate-400 font-medium mt-1">
//                     Cities
//                   </div>
//                 </div>
//                 <div className="w-px bg-slate-700"></div>
//                 <div className="text-center">
//                   <div className="text-3xl md:text-4xl font-black text-white">
//                     100%
//                   </div>
//                   <div className="text-sm text-slate-400 font-medium mt-1">
//                     Verified
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Wave Divider */}
//           <div className="absolute bottom-0 left-0 right-0">
//             <svg
//               className="w-full h-16 md:h-24 text-slate-50"
//               preserveAspectRatio="none"
//               viewBox="0 0 1200 120"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill="currentColor"
//                 d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7L1200,53.3L1200,120L1152,120C1104,120,1008,120,912,120C816,120,720,120,624,120C528,120,432,120,336,120C240,120,144,120,48,120L0,120Z"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 pb-16">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Sidebar */}
//             <aside className="w-full lg:w-80 space-y-6">
//               {/* Active City Badge */}
//               {cityFromUrl && (
//                 <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-500 p-5 animate-fadeIn" style={{ animationDelay: "100ms" }}>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2.5 bg-emerald-100 rounded-xl">
//                         <MapPin className="w-5 h-5 text-emerald-600" />
//                       </div>
//                       <div>
//                         <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
//                           Location
//                         </p>
//                         <p className="text-base font-black text-slate-900">
//                           {cityFromUrl}
//                         </p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => {
//                         setLocation("");
//                         if (typeof window !== "undefined") {
//                           window.history.pushState({}, "", "/list");
//                         }
//                       }}
//                       className="p-2 hover:bg-red-50 rounded-lg transition-all"
//                     >
//                       <X className="w-4 h-4 text-red-500" />
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Search Box */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
//                 <label className="text-xs font-black text-slate-700 mb-3 block uppercase tracking-wider">
//                   Quick Search
//                 </label>
//                 <div className="relative">
//                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search properties..."
//                     className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white outline-none transition-all"
//                   />
//                 </div>
//               </div>

//               {/* Filters */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 animate-fadeIn" style={{ animationDelay: "300ms" }}>
//                 <div className="flex justify-between items-center pb-4 border-b-2 border-slate-100">
//                   <div className="flex items-center gap-2">
//                     <Filter className="w-5 h-5 text-emerald-600" />
//                     <h3 className="font-black text-lg text-slate-900">Filters</h3>
//                   </div>
//                   <button
//                     onClick={resetFilters}
//                     className="text-emerald-600 text-xs font-bold uppercase hover:text-emerald-700 transition-colors"
//                   >
//                     Reset
//                   </button>
//                 </div>

//                 {/* Location */}
//                 <div>
//                   <label className="text-xs font-black text-slate-700 mb-3 block uppercase tracking-wider">
//                     स्थान (Location)
//                   </label>
//                   <select
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 focus:border-emerald-500 focus:bg-white outline-none transition-all cursor-pointer"
//                   >
//                     <option value="">All Locations</option>
//                     {availableCities.map((city) => (
//                       <option key={city} value={city}>
//                         {city}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Property Type */}
//                 <div>
//                   <label className="text-xs font-black text-slate-700 mb-3 block uppercase tracking-wider">
//                     Property Type
//                   </label>
//                   <select
//                     value={type}
//                     onChange={(e) => setType(e.target.value)}
//                     className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-700 focus:border-emerald-500 focus:bg-white outline-none transition-all cursor-pointer"
//                   >
//                     <option value="">All Types</option>
//                     <option value="Villa">Villa</option>
//                     <option value="Flat">Flat</option>
//                     <option value="Plot">Plot</option>
//                     <option value="House">House</option>
//                     <option value="Commercial">Commercial</option>
//                     <option value="Shop">Shop</option>
//                   </select>
//                 </div>

//                 {/* Price Range */}
//                 <div>
//                   <label className="text-xs font-black text-slate-700 mb-3 block uppercase tracking-wider">
//                     कीमत (Price Range)
//                   </label>
//                   <div className="grid grid-cols-2 gap-3">
//                     <input
//                       type="number"
//                       value={minPrice}
//                       onChange={(e) => setMinPrice(e.target.value)}
//                       placeholder="Min ₹"
//                       className="bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 focus:border-emerald-500 focus:bg-white outline-none transition-all"
//                     />
//                     <input
//                       type="number"
//                       value={maxPrice}
//                       onChange={(e) => setMaxPrice(e.target.value)}
//                       placeholder="Max ₹"
//                       className="bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700 focus:border-emerald-500 focus:bg-white outline-none transition-all"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </aside>

//             {/* Main Content */}
//             <main className="flex-1 space-y-6">
//               {/* Results Header */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2.5 bg-emerald-100 rounded-xl">
//                     <Home className="w-5 h-5 text-emerald-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-slate-600 font-medium">
//                       Showing{" "}
//                       <span className="text-emerald-600 font-black text-lg">
//                         {filtered.length}
//                       </span>{" "}
//                       {filtered.length === 1 ? "property" : "properties"}
//                     </p>
//                     {cityFromUrl && (
//                       <p className="text-xs text-slate-500 mt-0.5">
//                         in {cityFromUrl}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
//                     View:
//                   </span>
//                   <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
//                     <button
//                       onClick={() => setViewMode("grid")}
//                       className={`p-2.5 rounded-lg transition-all ${
//                         viewMode === "grid"
//                           ? "bg-white text-emerald-600 shadow-md"
//                           : "text-slate-400 hover:text-slate-600"
//                       }`}
//                     >
//                       <Grid className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={() => setViewMode("list")}
//                       className={`p-2.5 rounded-lg transition-all ${
//                         viewMode === "list"
//                           ? "bg-white text-emerald-600 shadow-md"
//                           : "text-slate-400 hover:text-slate-600"
//                       }`}
//                     >
//                       <List className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Property Grid */}
//               {filtered.length === 0 ? (
//                 <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
//                   <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <MapPin className="w-10 h-10 text-emerald-600" />
//                   </div>
//                   <h3 className="text-2xl font-black text-slate-900 mb-3">
//                     No Properties Found
//                   </h3>
//                   <p className="text-slate-500 mb-8 max-w-md mx-auto">
//                     {cityFromUrl
//                       ? `No properties available in ${cityFromUrl} matching your criteria`
//                       : "Try adjusting your filters to see more results"}
//                   </p>
//                   <button
//                     onClick={resetFilters}
//                     className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
//                   >
//                     Reset All Filters
//                   </button>
//                 </div>
//               ) : (
//                 <div className={`grid ${viewMode === "grid" ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
//                   {filtered.map((p, index) => (
//                     <div
//                       key={p._id}
//                       onClick={() => navigateToDetails(p._id)}
//                       className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fadeIn hover:-translate-y-2"
//                       style={{ animationDelay: `${index * 50}ms` }}
//                     >
//                       {/* Image */}
//                       <div className="relative overflow-hidden h-72">
//                         <img
//                           src={p.images?.length ? `https://propertybackend-1-xdbs.onrender.com${p.images[0]}` : "/no-image.png"}
//                           alt={p.propertyTypeName}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

//                         <div className="absolute top-4 left-4">
//                           <span className="bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg">
//                             {p.propertyTypeName}
//                           </span>
//                         </div>

//                         <button
//                           onClick={(e) => toggleFavorite(p._id, e)}
//                           className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all shadow-lg group/fav"
//                         >
//                           <Heart
//                             className={`w-5 h-5 transition-all ${
//                               favorites.has(p._id)
//                                 ? "fill-red-500 text-red-500 scale-110"
//                                 : "text-slate-600 group-hover/fav:text-red-500 group-hover/fav:scale-110"
//                             }`}
//                           />
//                         </button>

//                         <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl">
//                           <p className="text-2xl font-black text-slate-900">
//                             ₹{p.price.toLocaleString("en-IN")}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="p-6 space-y-4">
//                         <div>
//                           <h3 className="font-black text-xl text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1 mb-2">
//                             {p.propertyTypeName}
//                           </h3>
//                           <div className="flex items-center text-sm text-slate-600 gap-2">
//                             <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
//                             <span className="line-clamp-1 font-medium">
//                               {p.address}, {p.cityName}
//                             </span>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-4 pt-4 border-t-2 border-slate-100">
//                           {p.configuration && (
//                             <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                               <Bed className="w-4 h-4 text-emerald-600" />
//                               <span>{p.configuration}</span>
//                             </div>
//                           )}
//                           {p.area && (
//                             <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                               <Maximize className="w-4 h-4 text-emerald-600" />
//                               <span>{p.area} sqft</span>
//                             </div>
//                           )}
//                           {p.plotArea && (
//                             <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                               <Maximize className="w-4 h-4 text-emerald-600" />
//                               <span>{p.plotArea} sqyd</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </main>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// 
// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Heart,
//   MapPin,
//   Bed,
//   Maximize,
//   Grid,
//   List,
//   Search,
//   Filter,
//   Home,
// } from "lucide-react";
// import Footer from "../footer/footer";
// import Header from "@/components/header/header";
// interface Property {
//   _id: string;
//   propertyTypeName: string;
//   price: number;
//   images: string[];
//   address: string;
//   cityName: string;
//   configuration?: string;
//   area?: number;
//   plotArea?: number;
// }

// export default function RealEstateBuyList() {
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [filtered, setFiltered] = useState<Property[]>([]);
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [loading, setLoading] = useState(true);
  
//   // Filters
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [type, setType] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [availableCities, setAvailableCities] = useState<string[]>([]);
//   const [availableTypes, setAvailableTypes] = useState<string[]>([]);

//   /* ================= GET URL PARAMETERS ================= */
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const cityParam = params.get('city') || '';
//     const typeParam = params.get('type') || '';
//     const minPriceParam = params.get('minPrice') || '';
//     const maxPriceParam = params.get('maxPrice') || '';
    
//     setLocation(cityParam);
//     setType(typeParam);
//     setMinPrice(minPriceParam);
//     setMaxPrice(maxPriceParam);
//   }, []);

//   /* ================= FETCH PROPERTIES ================= */
//   useEffect(() => {
//     fetch("https://propertybackend-1-xdbs.onrender.com/api/property")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProperties = data.data || [];
//         setProperties(allProperties);

//         const cities = Array.from(new Set(allProperties.map((p: Property) => p.cityName))).sort();
//         const types = Array.from(new Set(allProperties.map((p: Property) => p.propertyTypeName))).sort();
        
//         setAvailableCities(cities as string[]);
//         setAvailableTypes(types as string[]);
//       })
//       .catch(err => console.error("Failed to fetch properties:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   /* ================= FILTER LOGIC ================= */
//   const applyFilters = () => {
//     let data = [...properties];

//     if (search) {
//       data = data.filter(
//         (p) =>
//           p.propertyTypeName.toLowerCase().includes(search.toLowerCase()) ||
//           p.address.toLowerCase().includes(search.toLowerCase()) ||
//           p.cityName.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (location) {
//       data = data.filter((p) =>
//         p.cityName.toLowerCase() === location.toLowerCase()
//       );
//     }

//     if (type) {
//       data = data.filter((p) =>
//         p.propertyTypeName.toLowerCase() === type.toLowerCase()
//       );
//     }

//     if (minPrice) data = data.filter((p) => p.price >= Number(minPrice));
//     if (maxPrice) data = data.filter((p) => p.price <= Number(maxPrice));

//     setFiltered(data);
//   };

//   useEffect(() => {
//     if (properties.length > 0) {
//       applyFilters();
//     }
//   }, [location, search, type, minPrice, maxPrice, properties]);

//   const resetFilters = () => {
//     setSearch("");
//     setLocation("");
//     setType("");
//     setMinPrice("");
//     setMaxPrice("");
//     setFiltered(properties);
//     window.history.pushState({}, "", "/list");
//   };

//   const navigateToDetails = (id: string) => {
//     window.location.href = `/listdeatils/${id}`;
//   };

//   const formatPrice = (price: number) => {
//     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} Lac`;
//     return `₹${price.toLocaleString("en-IN")}`;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-slate-600 font-semibold">Loading Properties...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//        <Header />
//       {/* Hero Header */}
//       <div className="bg-black border-b-4 border-green-600 pt-16 pb-20 px-4 relative overflow-hidden">
//         <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-green-50 rounded-full z-0"></div>
//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <span className="text-green-700 font-bold uppercase tracking-widest text-xs bg-green-100 px-3 py-1 rounded-full mb-4 inline-block border border-green-200">
//             Exclusive Listings
//           </span>
//           <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
//             अपनी <span className="text-emerald-400">पसंद की प्रॉपर्टी</span> खोजें
//           </h1>
//           <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium mt-4">
//             Find the best Homes, Land, and Shops in your budget.
//           </p>
          
//           {/* Active Filters Display */}
//           {(location || type || minPrice || maxPrice) && (
//             <div className="mt-6 flex flex-wrap justify-center gap-2">
//               {location && (
//                 <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   📍 {location}
//                 </span>
//               )}
//               {type && (
//                 <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   🏠 {type}
//                 </span>
//               )}
//               {(minPrice || maxPrice) && (
//                 <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   💰 {minPrice && `₹${Number(minPrice).toLocaleString()}`} 
//                   {minPrice && maxPrice && ' - '}
//                   {maxPrice && `₹${Number(maxPrice).toLocaleString()}`}
//                 </span>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 -mt-10 pb-12 relative z-20">
//         <div className="flex flex-col lg:flex-row gap-8">
          
//           {/* Sidebar */}
//           <aside className="w-full lg:w-80 space-y-6">
            
//             {/* Search */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
//               <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-green-600 transition-all">
//                 <Search className="w-5 h-5 text-green-600" />
//                 <input
//                   type="text"
//                   placeholder="खोजें (Search)..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="flex-1 outline-none text-sm bg-transparent placeholder:text-slate-400 text-slate-900 font-medium"
//                 />
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 space-y-6">
//               <div className="flex justify-between items-center pb-4 border-b border-slate-100">
//                 <div className="flex items-center gap-2">
//                   <Filter className="w-5 h-5 text-green-600" />
//                   <h3 className="font-bold text-lg text-slate-900">Filters</h3>
//                 </div>
//                 <button onClick={resetFilters} className="text-green-600 text-xs font-bold uppercase hover:underline">
//                   Reset
//                 </button>
//               </div>

//               {/* Location */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   स्थान (Location)
//                 </label>
//                 <select
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium"
//                 >
//                   <option value="">All Locations</option>
//                   {availableCities.map((city) => (
//                     <option key={city} value={city}>{city}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Type */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   प्रॉपर्टी टाइप (Type)
//                 </label>
//                 <select
//                   value={type}
//                   onChange={(e) => setType(e.target.value)}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium"
//                 >
//                   <option value="">All Types</option>
//                   {availableTypes.map((t) => (
//                     <option key={t} value={t}>{t}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Price */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   कीमत (Price Range)
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     type="number"
//                     placeholder="Min"
//                     value={minPrice}
//                     onChange={(e) => setMinPrice(e.target.value)}
//                     className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
//                   />
//                   <input
//                     type="number"
//                     placeholder="Max"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                     className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
//                   />
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Main Content */}
//           <main className="flex-1">
            
//             {/* Toolbar */}
//             <div className="bg-white rounded-2xl p-4 shadow-md mb-6 border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-slate-500 font-medium">
//                 Showing <span className="text-slate-900 font-bold">{filtered.length}</span> properties
//               </p>
              
//               <div className="flex items-center gap-3">
//                 <span className="text-xs font-bold text-slate-400 uppercase">View:</span>
//                 <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
//                   <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white text-green-600 shadow-sm" : "text-slate-400"}`}>
//                     <Grid className="w-4 h-4" />
//                   </button>
//                   <button onClick={() => setViewMode("list")} className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white text-green-600 shadow-sm" : "text-slate-400"}`}>
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Grid/List View */}
//             {filtered.length === 0 ? (
//               <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
//                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Home className="w-10 h-10 text-slate-300" />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900">No Properties Found</h3>
//                 <p className="text-slate-500 mt-2">Try adjusting your search filters.</p>
//                 <button onClick={resetFilters} className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">
//                   Reset Filters
//                 </button>
//               </div>
//             ) : (
//               <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}`}>
//                 {filtered.map((property) => (
//                   <div 
//                     key={property._id}
//                     onClick={() => navigateToDetails(property._id)}
//                     className={`group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-green-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
//                       viewMode === "list" ? "flex flex-row" : ""
//                     }`}
//                   >
//                     {/* Image */}
//                     <div className={`relative overflow-hidden ${viewMode === "list" ? "w-80 flex-shrink-0" : "h-64"}`}>
//                       <img
//                         src={property.images?.length > 0 ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}` : "https://via.placeholder.com/600x400?text=No+Image"}
//                         alt={property.propertyTypeName}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=No+Image"; }}
//                       />
                      
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

//                       <div className="absolute top-4 left-4">
//                         <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md">
//                           {property.propertyTypeName}
//                         </span>
//                       </div>

//                       <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-lg shadow-lg border-l-4 border-green-600">
//                         <p className="text-xl font-bold text-slate-900">{formatPrice(property.price)}</p>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
//                       <div className="mb-4">
//                         <h3 className="font-bold text-xl text-slate-900 group-hover:text-green-700 transition-colors line-clamp-1 mb-1">
//                           {property.propertyTypeName}
//                         </h3>
//                         <div className="flex items-center text-sm text-slate-500 gap-2 font-medium">
//                           <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
//                           <span className="line-clamp-1">{property.address}, {property.cityName}</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
//                         {property.configuration && (
//                           <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                             <Bed className="w-4 h-4 text-green-600" />
//                             <span>{property.configuration}</span>
//                           </div>
//                         )}
//                         {property.plotArea && (
//                           <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                             <Maximize className="w-4 h-4 text-green-600" />
//                             <span>{property.plotArea} sqft</span>
//                           </div>
//                         )}
//                         {property.area && (
//                           <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                             <Maximize className="w-4 h-4 text-green-600" />
//                             <span>{property.area} sqft</span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Heart,
//   MapPin,
//   Bed,
//   Maximize,
//   Grid,
//   List,
//   Search,
//   Filter,
//   Home,
//   ChevronLeft, // Added for pagination
//   ChevronRight, // Added for pagination
// } from "lucide-react";
// import Footer from "../footer/footer";
// import Header from "@/components/header/header";

// interface Property {
//   _id: string;
//   propertyTypeName: string;
//   price: number;
//   images: string[];
//   address: string;
//   cityName: string;
//   configuration?: string;
//   area?: number;
//   plotArea?: number;
// }

// export default function RealEstateBuyList() {
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [filtered, setFiltered] = useState<Property[]>([]);
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [loading, setLoading] = useState(true);

//   // Filters
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [type, setType] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [availableCities, setAvailableCities] = useState<string[]>([]);
//   const [availableTypes, setAvailableTypes] = useState<string[]>([]);

//   // Pagination States
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 20; // एक पेज पर 20 कार्ड दिखाएं

//   /* ================= GET URL PARAMETERS ================= */
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const cityParam = params.get('city') || '';
//     const typeParam = params.get('type') || '';
//     const minPriceParam = params.get('minPrice') || '';
//     const maxPriceParam = params.get('maxPrice') || '';

//     setLocation(cityParam);
//     setType(typeParam);
//     setMinPrice(minPriceParam);
//     setMaxPrice(maxPriceParam);
//   }, []);

//   /* ================= FETCH PROPERTIES ================= */
//   useEffect(() => {
//     fetch("https://propertybackend-1-xdbs.onrender.com/api/property")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProperties = data.data || [];
//         setProperties(allProperties);

//         const cities = Array.from(new Set(allProperties.map((p: Property) => p.cityName))).sort();
//         const types = Array.from(new Set(allProperties.map((p: Property) => p.propertyTypeName))).sort();

//         setAvailableCities(cities as string[]);
//         setAvailableTypes(types as string[]);
//       })
//       .catch(err => console.error("Failed to fetch properties:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   /* ================= FILTER LOGIC ================= */
//   const applyFilters = () => {
//     let data = [...properties];

//     if (search) {
//       data = data.filter(
//         (p) =>
//           p.propertyTypeName.toLowerCase().includes(search.toLowerCase()) ||
//           p.address.toLowerCase().includes(search.toLowerCase()) ||
//           p.cityName.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (location) {
//       data = data.filter((p) =>
//         p.cityName.toLowerCase() === location.toLowerCase()
//       );
//     }

//     if (type) {
//       data = data.filter((p) =>
//         p.propertyTypeName.toLowerCase() === type.toLowerCase()
//       );
//     }

//     if (minPrice) data = data.filter((p) => p.price >= Number(minPrice));
//     if (maxPrice) data = data.filter((p) => p.price <= Number(maxPrice));

//     setFiltered(data);
//     setCurrentPage(1); // फ़िल्टर लागू होने पर पेज को 1 पर रीसेट करें
//   };

//   useEffect(() => {
//     if (properties.length > 0) {
//       applyFilters();
//     }
//   }, [location, search, type, minPrice, maxPrice, properties]);

//   const resetFilters = () => {
//     setSearch("");
//     setLocation("");
//     setType("");
//     setMinPrice("");
//     setMaxPrice("");
//     setFiltered(properties);
//     setCurrentPage(1); // फ़िल्टर रीसेट होने पर भी पेज को 1 पर रीसेट करें
//     window.history.pushState({}, "", "/list");
//   };

//   const navigateToDetails = (id: string) => {
//     window.location.href = `/listdeatils/${id}`;
//   };

//   const formatPrice = (price: number) => {
//     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} Lac`;
//     return `₹${price.toLocaleString("en-IN")}`;
//   };

//   // Pagination calculations
//   const totalPages = Math.ceil(filtered.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentProperties = filtered.slice(startIndex, endIndex);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//     window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-slate-600 font-semibold">Loading Properties...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//        <Header />
//       {/* Hero Header */}
//       <div className="bg-black border-b-4 border-green-600 pt-16 pb-20 px-4 relative overflow-hidden">
//         <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-green-50 rounded-full z-0"></div>
//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <span className="text-green-700 font-bold uppercase tracking-widest text-xs bg-green-100 px-3 py-1 rounded-full mb-4 inline-block border border-green-200">
//             Exclusive Listings
//           </span>
//           <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
//             अपनी <span className="text-emerald-400">पसंद की प्रॉपर्टी</span> खोजें
//           </h1>
//           <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium mt-4">
//             Find the best Homes, Land, and Shops in your budget.
//           </p>

//           {/* Active Filters Display */}
//           {(location || type || minPrice || maxPrice) && (
//             <div className="mt-6 flex flex-wrap justify-center gap-2">
//               {location && (
//                 <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   📍 {location}
//                 </span>
//               )}
//               {type && (
//                 <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   🏠 {type}
//                 </span>
//               )}
//               {(minPrice || maxPrice) && (
//                 <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   💰 {minPrice && `₹${Number(minPrice).toLocaleString()}`}
//                   {minPrice && maxPrice && ' - '}
//                   {maxPrice && `₹${Number(maxPrice).toLocaleString()}`}
//                 </span>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 -mt-10 pb-12 relative z-20">
//         <div className="flex flex-col lg:flex-row gap-8">

//           {/* Sidebar */}
//           <aside className="w-full lg:w-80 space-y-6">

//             {/* Search */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
//               <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-green-600 transition-all">
//                 <Search className="w-5 h-5 text-green-600" />
//                 <input
//                   type="text"
//                   placeholder="खोजें (Search)..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="flex-1 outline-none text-sm bg-transparent placeholder:text-slate-400 text-slate-900 font-medium"
//                 />
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 space-y-6">
//               <div className="flex justify-between items-center pb-4 border-b border-slate-100">
//                 <div className="flex items-center gap-2">
//                   <Filter className="w-5 h-5 text-green-600" />
//                   <h3 className="font-bold text-lg text-slate-900">Filters</h3>
//                 </div>
//                 <button onClick={resetFilters} className="text-green-600 text-xs font-bold uppercase hover:underline">
//                   Reset
//                 </button>
//               </div>

//               {/* Location */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   स्थान (Location)
//                 </label>
//                 <select
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium"
//                 >
//                   <option value="">All Locations</option>
//                   {availableCities.map((city) => (
//                     <option key={city} value={city}>{city}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Type */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   प्रॉपर्टी टाइप (Type)
//                 </label>
//                 <select
//                   value={type}
//                   onChange={(e) => setType(e.target.value)}
//                   className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium"
//                 >
//                   <option value="">All Types</option>
//                   {availableTypes.map((t) => (
//                     <option key={t} value={t}>{t}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Price */}
//               <div>
//                 <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
//                   कीमत (Price Range)
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     type="number"
//                     placeholder="Min"
//                     value={minPrice}
//                     onChange={(e) => setMinPrice(e.target.value)}
//                     className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
//                   />
//                   <input
//                     type="number"
//                     placeholder="Max"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                     className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
//                   />
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Main Content */}
//           <main className="flex-1">

//             {/* Toolbar */}
//             <div className="bg-white rounded-2xl p-4 shadow-md mb-6 border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-slate-500 font-medium">
//                 Showing <span className="text-slate-900 font-bold">{filtered.length}</span> properties
//               </p>

//               <div className="flex items-center gap-3">
//                 <span className="text-xs font-bold text-slate-400 uppercase">View:</span>
//                 <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
//                   <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white text-green-600 shadow-sm" : "text-slate-400"}`}>
//                     <Grid className="w-4 h-4" />
//                   </button>
//                   <button onClick={() => setViewMode("list")} className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white text-green-600 shadow-sm" : "text-slate-400"}`}>
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Grid/List View */}
//             {filtered.length === 0 ? (
//               <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
//                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Home className="w-10 h-10 text-slate-300" />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900">No Properties Found</h3>
//                 <p className="text-slate-500 mt-2">Try adjusting your search filters.</p>
//                 <button onClick={resetFilters} className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition">
//                   Reset Filters
//                 </button>
//               </div>
//             ) : (
//               <> {/* Added a Fragment here to wrap both properties and pagination */}
//                 <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}`}>
//                   {/* Changed from filtered.map to currentProperties.map */}
//                   {currentProperties.map((property) => (
//                     <div
//                       key={property._id}
//                       onClick={() => navigateToDetails(property._id)}
//                       className={`group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-green-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
//                         viewMode === "list" ? "flex flex-row" : ""
//                       }`}
//                     >
//                       {/* Image */}
//                       <div className={`relative overflow-hidden ${viewMode === "list" ? "w-80 flex-shrink-0" : "h-64"}`}>
//                         <img
//                           src={property.images?.length > 0 ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}` : "https://via.placeholder.com/600x400?text=No+Image"}
//                           alt={property.propertyTypeName}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                           onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=No+Image"; }}
//                         />

//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

//                         <div className="absolute top-4 left-4">
//                           <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md">
//                             {property.propertyTypeName}
//                           </span>
//                         </div>

//                         <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-lg shadow-lg border-l-4 border-green-600">
//                           <p className="text-xl font-bold text-slate-900">{formatPrice(property.price)}</p>
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
//                         <div className="mb-4">
//                           <h3 className="font-bold text-xl text-slate-900 group-hover:text-green-700 transition-colors line-clamp-1 mb-1">
//                             {property.propertyTypeName}
//                           </h3>
//                           <div className="flex items-center text-sm text-slate-500 gap-2 font-medium">
//                             <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
//                             <span className="line-clamp-1">{property.address}, {property.cityName}</span>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
//                           {property.configuration && (
//                             <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                               <Bed className="w-4 h-4 text-green-600" />
//                               <span>{property.configuration}</span>
//                             </div>
//                           )}
//                           {property.plotArea && (
//                             <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                               <Maximize className="w-4 h-4 text-green-600" />
//                               <span>{property.plotArea} sqft</span>
//                             </div>
//                           )}
//                           {property.area && (
//                             <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
//                               <Maximize className="w-4 h-4 text-green-600" />
//                               <span>{property.area} sqft</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Pagination Controls */}
//                 {totalPages > 1 && (
//                   <div className="flex justify-center items-center mt-8 space-x-4">
//                     <button
//                       onClick={handlePreviousPage}
//                       disabled={currentPage === 1}
//                       className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
//                     >
//                       <ChevronLeft className="w-4 h-4" /> Previous
//                     </button>
//                     <span className="text-slate-700 font-medium">
//                       Page <span className="font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span>
//                     </span>
//                     <button
//                       onClick={handleNextPage}
//                       disabled={currentPage === totalPages}
//                       className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
//                     >
//                       Next <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </main>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   MapPin,
//   Bed,
//   Maximize,
//   Grid,
//   List,
//   Search,
//   Home,
//   ChevronLeft,
//   ChevronRight,
//   Phone,
//   MessageCircle,
//   Filter,
// } from "lucide-react";
// import Footer from "../footer/footer";
// import Header from "@/components/header/header";
// interface Property {
//   _id: string;
//   propertyTypeName: string;
//   price: number;
//   images: string[];
//   address: string;
//   cityName: string;
//   configuration?: string;
//   area?: number;
//   plotArea?: number;
// }

// export default function RealEstateBuyList() {
//   const [properties, setProperties] = useState<Property[]>([]);
//   const [filtered, setFiltered] = useState<Property[]>([]);
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [type, setType] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [availableCities, setAvailableCities] = useState<string[]>([]);
//   const [availableTypes, setAvailableTypes] = useState<string[]>([]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 20;

//   // Get URL params on load
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const cityParam = params.get("city") || "";
//     const typeParam = params.get("type") || "";
//     const minPriceParam = params.get("minPrice") || "";
//     const maxPriceParam = params.get("maxPrice") || "";

//     setLocation(cityParam);
//     setType(typeParam);
//     setMinPrice(minPriceParam);
//     setMaxPrice(maxPriceParam);
//   }, []);

//   // Fetch properties
//   useEffect(() => {
//     fetch("https://propertybackend-1-xdbs.onrender.com/api/property")
//       .then((res) => res.json())
//       .then((data) => {
//         const allProperties = data.data || [];
//         setProperties(allProperties);

//         const cities = Array.from(
//           new Set(allProperties.map((p: Property) => p.cityName))
//         ).sort();
//         const types = Array.from(
//           new Set(allProperties.map((p: Property) => p.propertyTypeName))
//         ).sort();

//         setAvailableCities(cities as string[]);
//         setAvailableTypes(types as string[]);
//       })
//       .catch((err) => console.error("Failed to fetch properties:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   // Apply filters
//   const applyFilters = () => {
//     let data = [...properties];

//     if (search) {
//       data = data.filter(
//         (p) =>
//           p.propertyTypeName.toLowerCase().includes(search.toLowerCase()) ||
//           p.address.toLowerCase().includes(search.toLowerCase()) ||
//           p.cityName.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (location) {
//       data = data.filter(
//         (p) => p.cityName.toLowerCase() === location.toLowerCase()
//       );
//     }

//     if (type) {
//       data = data.filter(
//         (p) => p.propertyTypeName.toLowerCase() === type.toLowerCase()
//       );
//     }

//     if (minPrice) data = data.filter((p) => p.price >= Number(minPrice));
//     if (maxPrice) data = data.filter((p) => p.price <= Number(maxPrice));

//     setFiltered(data);
//     setCurrentPage(1);
//   };

//   useEffect(() => {
//     if (properties.length > 0) {
//       applyFilters();
//     }
//   }, [location, search, type, minPrice, maxPrice, properties]);

//   // Reset all filters
//   const resetFilters = () => {
//     setSearch("");
//     setLocation("");
//     setType("");
//     setMinPrice("");
//     setMaxPrice("");
//     setFiltered(properties);
//     setCurrentPage(1);
//     window.history.pushState({}, "", "/list");
//   };

//   // Navigate to property details
//   const navigateToDetails = (id: string) => {
//     window.location.href = `/listdeatils/${id}`;
//   };

//   // Handle Call button
//   const handleCall = (e: React.MouseEvent, property: Property) => {
//     e.stopPropagation();
//     window.location.href = "tel:+919876543210"; // Replace with actual number
//   };

//   // Handle WhatsApp button
//   const handleWhatsApp = (e: React.MouseEvent, property: Property) => {
//     e.stopPropagation();
//     const message = `नमस्ते, मुझे ${property.propertyTypeName} में रुचि है।\n\n ${property.address}, ${property.cityName}\n कीमत: ${formatPrice(property.price)}\n\nकृपया जानकारी दें।`;
//     const phone = "919876543210"; // Replace with actual number
//     window.open(
//       `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   // Format price in Indian format
//   const formatPrice = (price: number) => {
//     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} Lac`;
//     return `₹${price.toLocaleString("en-IN")}`;
//   };

//   // Pagination
//   const totalPages = Math.ceil(filtered.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentProperties = filtered.slice(startIndex, endIndex);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div
//         className="min-h-screen flex items-center justify-center"
//         style={{ backgroundColor: "#f5f5f5" }}
//       >
//         <div className="text-center">
//           <div
//             className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4"
//             style={{ borderColor: "#cc3f3f", borderTopColor: "transparent" }}
//           ></div>
//           <p className="text-gray-600 font-semibold text-lg">
//              प्रॉपर्टी लोड हो रही है...
//           </p>
//           <p className="text-gray-400 text-sm mt-1">कृपया थोड़ा इंतज़ार करें</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen font-sans" style={{ backgroundColor: "#f5f5f5" }}>
//       <Header/>
//       {/* ========== HERO HEADER ========== */}
//       <div
//         className="bg-black border-b-4 pt-16 pb-20 px-4 relative overflow-hidden"
//         style={{ borderBottomColor: "#cc3f3f" }}
//       >
//         <div
//           className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full z-0"
//           style={{ backgroundColor: "rgba(204, 63, 63, 0.1)" }}
//         ></div>
//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <span
//             className="font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4 inline-block border"
//             style={{
//               color: "#cc3f3f",
//               backgroundColor: "rgba(204, 63, 63, 0.1)",
//               borderColor: "rgba(204, 63, 63, 0.3)",
//             }}
//           >
//             🏡 Exclusive Listings
//           </span>
//           <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
//             अपनी <span style={{ color: "#cc3f3f" }}>पसंद की प्रॉपर्टी</span> खोजें
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium mt-4">
//              मकान &nbsp;  ज़मीन &nbsp;  दुकान &nbsp;  फ्लैट
//           </p>

//           {/* Active Filters Display */}
//           {(location || type || minPrice || maxPrice) && (
//             <div className="mt-6 flex flex-wrap justify-center gap-2">
//               {location && (
//                 <span
//                   className="text-white px-4 py-2 rounded-full text-sm font-semibold"
//                   style={{ backgroundColor: "#cc3f3f" }}
//                 >
//                    {location}
//                 </span>
//               )}
//               {type && (
//                 <span
//                   className="text-white px-4 py-2 rounded-full text-sm font-semibold"
//                   style={{ backgroundColor: "#cc3f3f" }}
//                 >
//                    {type}
//                 </span>
//               )}
//               {(minPrice || maxPrice) && (
//                 <span
//                   className="text-white px-4 py-2 rounded-full text-sm font-semibold"
//                   style={{ backgroundColor: "#cc3f3f" }}
//                 >
//                    {minPrice && `₹${Number(minPrice).toLocaleString()}`}
//                   {minPrice && maxPrice && " - "}
//                   {maxPrice && `₹${Number(maxPrice).toLocaleString()}`}
//                 </span>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ========== MAIN CONTENT ========== */}
//       <div className="max-w-7xl mx-auto px-4 -mt-10 pb-12 relative z-20">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* ========== SIDEBAR ========== */}
//           <aside className="w-full lg:w-80 space-y-6">
//             {/* Search Box */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//               <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-red-400 transition-all">
//                 <Search className="w-5 h-5" style={{ color: "#cc3f3f" }} />
//                 <input
//                   type="text"
//                   placeholder=" खोजें (Search)..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="flex-1 outline-none text-sm bg-transparent placeholder:text-gray-400 text-gray-900 font-medium"
//                 />
//               </div>
//             </div>

//             {/* Filters Box */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 space-y-6">
//               <div className="flex justify-between items-center pb-4 border-b border-gray-100">
//                 <div className="flex items-center gap-2">
//                   <Filter className="w-5 h-5" style={{ color: "#cc3f3f" }} />
//                   <h3 className="font-bold text-lg text-gray-900"> फ़िल्टर</h3>
//                 </div>
//                 <button
//                   onClick={resetFilters}
//                   className="text-xs font-bold uppercase hover:underline"
//                   style={{ color: "#cc3f3f" }}
//                 >
//                    Reset
//                 </button>
//               </div>

//               {/* Location Filter */}
//               <div>
//                 <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wider">
//                    स्थान (Location)
//                 </label>
//                 <select
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all cursor-pointer font-medium focus:border-red-400"
//                 >
//                   <option value="">सभी शहर (All Locations)</option>
//                   {availableCities.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Type Filter */}
//               <div>
//                 <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wider">
//                    प्रॉपर्टी टाइप (Type)
//                 </label>
//                 <select
//                   value={type}
//                   onChange={(e) => setType(e.target.value)}
//                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all cursor-pointer font-medium focus:border-red-400"
//                 >
//                   <option value="">सभी प्रकार (All Types)</option>
//                   {availableTypes.map((t) => (
//                     <option key={t} value={t}>
//                       {t}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Price Filter */}
//               <div>
//                 <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wider">
//                    कीमत (Price Range)
//                 </label>
//                 <div className="grid grid-cols-2 gap-3">
//                   <input
//                     type="number"
//                     placeholder="कम से कम"
//                     value={minPrice}
//                     onChange={(e) => setMinPrice(e.target.value)}
//                     className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all font-medium focus:border-red-400"
//                   />
//                   <input
//                     type="number"
//                     placeholder="ज़्यादा से ज़्यादा"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                     className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all font-medium focus:border-red-400"
//                   />
//                 </div>
//               </div>

//               {/* Reset Button */}
//               <button
//                 onClick={resetFilters}
//                 className="w-full py-3 rounded-xl font-bold text-white transition hover:opacity-90"
//                 style={{ backgroundColor: "#cc3f3f" }}
//               >
//                  सब  हटाएं
//               </button>
//             </div>

//             {/* Help Box */}
//             {/* <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-5 text-white text-center shadow-lg">
//               <p className="text-2xl mb-2">🤝</p>
//               <p className="font-bold">मदद चाहिए?</p>
//               <p className="text-sm text-white/80 mb-3">हमें कॉल करें!</p>
//               <a
//                 href="tel:+919876543210"
//                 className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition"
//               >
//                 📞 कॉल करें
//               </a>
//             </div> */}
//           </aside>

//           {/* ========== MAIN CONTENT AREA ========== */}
//           <main className="flex-1">
//             {/* Results Info Bar */}
//             <div className="bg-white rounded-2xl p-4 shadow-md mb-6 border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-gray-500 font-medium">
//                 🏠कुल{" "}
//                 <span className="text-gray-900 font-bold text-lg">
//                   {filtered.length}
//                 </span>{" "}
//                 प्रॉपर्टी मिली
//               </p>

//               <div className="flex items-center gap-3">
//                 <span className="text-xs font-bold text-gray-400 uppercase">
//                   देखें:
//                 </span>
//                 <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
//                   <button
//                     onClick={() => setViewMode("grid")}
//                     className={`p-2 rounded-md transition-all ${
//                       viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-400"
//                     }`}
//                     style={viewMode === "grid" ? { color: "#cc3f3f" } : {}}
//                   >
//                     <Grid className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode("list")}
//                     className={`p-2 rounded-md transition-all ${
//                       viewMode === "list" ? "bg-white shadow-sm" : "text-gray-400"
//                     }`}
//                     style={viewMode === "list" ? { color: "#cc3f3f" } : {}}
//                   >
//                     <List className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* No Results */}
//             {filtered.length === 0 ? (
//               <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
//                 <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-5xl">😔</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   कोई प्रॉपर्टी नहीं मिली!
//                 </h3>
//                 <p className="text-gray-500 mt-2">
//                   अपनी खोज बदलकर देखें या फ़िल्टर हटाएं
//                 </p>
//                 <button
//                   onClick={resetFilters}
//                   className="mt-6 px-6 py-3 text-white rounded-lg font-bold hover:opacity-90 transition"
//                   style={{ backgroundColor: "#cc3f3f" }}
//                 >
//                    फ़िल्टर हटाएं
//                 </button>
//               </div>
//             ) : (
//               <>
//                 {/* Property Cards */}
//                 <div
//                   className={`${
//                     viewMode === "grid"
//                       ? "grid grid-cols-1 md:grid-cols-2 gap-6"
//                       : "space-y-6"
//                   }`}
//                 >
//                   {currentProperties.map((property) => (
//                     <div
//                       key={property._id}
//                       onClick={() => navigateToDetails(property._id)}
//                       className={`group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer ${
//                         viewMode === "list" ? "flex flex-col sm:flex-row" : ""
//                       }`}
//                     >
//                       {/* Image Container - Fixed Size */}
//                       <div
//                         className={`relative overflow-hidden bg-gray-200 ${
//                           viewMode === "list"
//                             ? "w-full sm:w-72 h-56 sm:h-48 flex-shrink-0"
//                             : "w-full h-52"
//                         }`}
//                       >
//                         <img
//                           src={
//                             property.images?.length > 0
//                               ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}`
//                               : "https://via.placeholder.com/600x400?text=No+Image"
//                           }
//                           alt={property.propertyTypeName}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                           style={{ objectFit: "cover", objectPosition: "center" }}
//                           onError={(e) => {
//                             (e.target as HTMLImageElement).src =
//                               "https://via.placeholder.com/600x400?text=No+Image";
//                           }}
//                         />

//                         {/* Gradient Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

//                         {/* Type Badge */}
//                         <div className="absolute top-3 left-3">
//                           <span
//                             className="text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md"
//                             style={{ backgroundColor: "#cc3f3f" }}
//                           >
//                             🏠 {property.propertyTypeName}
//                           </span>
//                         </div>

//                         {/* Price Badge */}
//                         <div
//                           className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border-l-4"
//                           style={{ borderLeftColor: "#cc3f3f" }}
//                         >
//                           <p className="text-xl font-black text-gray-900">
//                              {formatPrice(property.price)}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Card Content */}
//                       <div
//                         className={`p-5 ${
//                           viewMode === "list"
//                             ? "flex-1 flex flex-col justify-between"
//                             : ""
//                         }`}
//                       >
//                         {/* Location */}
//                         <div className="flex items-start gap-2 mb-3">
//                           <MapPin
//                             className="w-5 h-5 flex-shrink-0 mt-0.5"
//                             style={{ color: "#cc3f3f" }}
//                           />
//                           <div className="min-w-0">
//                             <p className="font-bold text-gray-800 text-base truncate">
//                               {property.address}
//                             </p>
//                             <p className="text-gray-500 text-sm">
//                                {property.cityName}
//                             </p>
//                           </div>
//                         </div>

//                         {/* Property Details */}
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {property.configuration && (
//                             <span
//                               className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold"
//                               style={{
//                                 backgroundColor: "rgba(204, 63, 63, 0.1)",
//                                 color: "#cc3f3f",
//                               }}
//                             >
//                               <Bed className="w-4 h-4" />
//                               {property.configuration}
//                             </span>
//                           )}
//                           {(property.plotArea || property.area) && (
//                             <span
//                               className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold"
//                               style={{
//                                 backgroundColor: "#e0f2fe",
//                                 color: "#0284c7",
//                               }}
//                             >
//                               <Maximize className="w-4 h-4" />
//                               {property.plotArea || property.area} sqft
//                             </span>
//                           )}
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="grid grid-cols-2 gap-3">
//                           <button
//                             onClick={(e) => handleCall(e, property)}
//                             className="text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition hover:opacity-90 shadow-md"
//                             style={{ backgroundColor: "#16a34a" }}
//                           >
//                             <Phone className="w-5 h-5" />
//                              कॉल करें
//                           </button>
//                           <button
//                             onClick={(e) => handleWhatsApp(e, property)}
//                             className="text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition hover:opacity-90 shadow-md"
//                             style={{ backgroundColor: "#25D366" }}
//                           >
//                             <MessageCircle className="w-5 h-5" />
//                             WhatsApp
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Pagination */}
//                 {totalPages > 1 && (
//                   <div className="bg-white rounded-2xl p-5 mt-8 shadow-md border border-gray-200">
//                     <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//                       <button
//                         onClick={handlePreviousPage}
//                         disabled={currentPage === 1}
//                         className="px-5 py-3 text-white rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2 shadow-md"
//                         style={{ backgroundColor: "#cc3f3f" }}
//                       >
//                         <ChevronLeft className="w-5 h-5" />
//                         ⬅️ पिछला पेज
//                       </button>

//                       <div className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-xl">
//                         <span className="text-gray-600 font-medium">पेज</span>
//                         <span
//                           className="text-white px-4 py-1 rounded-lg font-bold text-lg"
//                           style={{ backgroundColor: "#cc3f3f" }}
//                         >
//                           {currentPage}
//                         </span>
//                         <span className="text-gray-600 font-medium">
//                           / {totalPages}
//                         </span>
//                       </div>

//                       <button
//                         onClick={handleNextPage}
//                         disabled={currentPage === totalPages}
//                         className="px-5 py-3 text-white rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2 shadow-md"
//                         style={{ backgroundColor: "#cc3f3f" }}
//                       >
//                         अगला पेज ➡️
//                         <ChevronRight className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </main>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import {
  MapPin,
  Bed,
  Maximize,
  Grid,
  List,
  Search,
  Home,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Filter,
  X,
} from "lucide-react";
import Footer from "../footer/footer";
import Header from "@/components/header/header";

interface Property {
  _id: string;
  propertyTypeName: string;
  price: number;
  images: string[];
  address: string;
  cityName: string;
  configuration?: string;
  area?: number;
  plotArea?: number;
}

// Interface for Contact Info from API
interface ContactInfo {
  phoneNumbers: string[];
  whatsappNumber: string;
  // Add other fields if your API has them
}

export default function RealEstateBuyList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(true);

  // Filter States
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [availableTypes, setAvailableTypes] = useState<string[]>([]);

  // Contact Info State
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  
  // Dropdown State for Desktop Call
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Get URL params on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get("city") || "";
    const typeParam = params.get("type") || "";
    const minPriceParam = params.get("minPrice") || "";
    const maxPriceParam = params.get("maxPrice") || "";

    setLocation(cityParam);
    setType(typeParam);
    setMinPrice(minPriceParam);
    setMaxPrice(maxPriceParam);
  }, []);

  // Fetch properties AND contact info
  useEffect(() => {
    const fetchProperties = fetch("https://propertybackend-1-xdbs.onrender.com/api/property");
    const fetchContact = fetch("https://propertybackend-1-xdbs.onrender.com/api/contact");

    Promise.all([fetchProperties, fetchContact])
      .then(([propRes, contactRes]) => {
        // Handle Properties
        if (propRes.ok) {
          return propRes.json().then((data) => {
            const allProperties = data.data || [];
            setProperties(allProperties);

            const cities = Array.from(new Set(allProperties.map((p: Property) => p.cityName))).sort();
            const types = Array.from(new Set(allProperties.map((p: Property) => p.propertyTypeName))).sort();

            setAvailableCities(cities as string[]);
            setAvailableTypes(types as string[]);
          });
        }
      })
      .then(() => {
        // Handle Contact Info (Separate then to ensure properties load even if contact fails)
        return fetch("https://propertybackend-1-xdbs.onrender.com/api/contact")
          .then((res) => res.json())
          .then((data) => {
            if (data.success && data.data) {
              setContactInfo(data.data);
            }
          });
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  // Apply filters
  const applyFilters = () => {
    let data = [...properties];

    if (search) {
      data = data.filter(
        (p) =>
          p.propertyTypeName.toLowerCase().includes(search.toLowerCase()) ||
          p.address.toLowerCase().includes(search.toLowerCase()) ||
          p.cityName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      data = data.filter(
        (p) => p.cityName.toLowerCase() === location.toLowerCase()
      );
    }

    if (type) {
      data = data.filter(
        (p) => p.propertyTypeName.toLowerCase() === type.toLowerCase()
      );
    }

    if (minPrice) data = data.filter((p) => p.price >= Number(minPrice));
    if (maxPrice) data = data.filter((p) => p.price <= Number(maxPrice));

    setFiltered(data);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (properties.length > 0) {
      applyFilters();
    }
  }, [location, search, type, minPrice, maxPrice, properties]);

  // Reset all filters
  const resetFilters = () => {
    setSearch("");
    setLocation("");
    setType("");
    setMinPrice("");
    setMaxPrice("");
    setFiltered(properties);
    setCurrentPage(1);
    window.history.pushState({}, "", "/list");
  };

  // Navigate to property details
  const navigateToDetails = (id: string) => {
    window.location.href = `/listdeatils/${id}`;
  };

  // --- HANDLE CALL (Smart Logic) ---
  const handleCall = (e: React.MouseEvent, property: Property) => {
    e.stopPropagation();

    if (!contactInfo || !contactInfo.phoneNumbers || contactInfo.phoneNumbers.length === 0) {
      alert("Contact number not available");
      return;
    }

    // Check if Mobile/Tablet
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      // Mobile: Call the FIRST number directly
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
      setShowPhoneDropdown(true);
    }
  };

  // --- HANDLE WHATSAPP ---
  const handleWhatsApp = (e: React.MouseEvent, property: Property) => {
    e.stopPropagation();

    if (!contactInfo || !contactInfo.whatsappNumber) {
      alert("WhatsApp number not available");
      return;
    }

    // Create detailed message
    const message = `नमस्ते, मुझे आपकी साइट पर मौजूद यह प्रॉपर्टी बहुत पसंद आई है:

*प्रॉपर्टी:* ${property.propertyTypeName}
*लोकेशन:* ${property.address}, ${property.cityName}
*कीमत:* ${formatPrice(property.price)}

कृपया मुझे इसके बारे में और जानकारी दें। धन्यवाद!`;

    // Open WhatsApp
    const url = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Handle Direct Number Click from Dropdown
  const handleDirectPhoneCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
    setShowPhoneDropdown(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      if (showPhoneDropdown) setShowPhoneDropdown(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [showPhoneDropdown]);

  // Format price in Indian format
  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} Lac`;
    return `₹${price.toLocaleString("en-IN")}`;
  };

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = filtered.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: "#cc3f3f", borderTopColor: "transparent" }}></div>
          <p className="text-gray-600 font-semibold text-lg">प्रॉपर्टी लोड हो रही है...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f5f5f5" }}>
      <Header/>
      
      {/* ========== HERO HEADER ========== */}
      <div className="bg-black border-b-4 pt-16 pb-20 px-4 relative overflow-hidden" style={{ borderBottomColor: "#cc3f3f" }}>
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full z-0" style={{ backgroundColor: "rgba(204, 63, 63, 0.1)" }}></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4 inline-block border" style={{ color: "#cc3f3f", backgroundColor: "rgba(204, 63, 63, 0.1)", borderColor: "rgba(204, 63, 63, 0.3)" }}>
            🏡 Exclusive Listings
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            अपनी <span style={{ color: "#cc3f3f" }}>पसंद की प्रॉपर्टी</span> खोजें
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium mt-4">
             मकान &nbsp;  ज़मीन &nbsp;  दुकान &nbsp;  फ्लैट
          </p>

          {/* Active Filters Display */}
          {(location || type || minPrice || maxPrice) && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {location && <span className="text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "#cc3f3f" }}>{location}</span>}
              {type && <span className="text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "#cc3f3f" }}>{type}</span>}
              {(minPrice || maxPrice) && (
                <span className="text-white px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "#cc3f3f" }}>
                   {minPrice && `₹${Number(minPrice).toLocaleString()}`}
                  {minPrice && maxPrice && " - "}
                  {maxPrice && `₹${Number(maxPrice).toLocaleString()}`}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 pb-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ========== SIDEBAR ========== */}
          <aside className="w-full lg:w-80 space-y-6">
            {/* Search Box */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-red-400 transition-all">
                <Search className="w-5 h-5" style={{ color: "#cc3f3f" }} />
                <input type="text" placeholder=" खोजें (Search)..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none text-sm bg-transparent placeholder:text-gray-400 text-gray-900 font-medium" />
              </div>
            </div>

            {/* Filters Box */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5" style={{ color: "#cc3f3f" }} />
                  <h3 className="font-bold text-lg text-gray-900"> फ़िल्टर</h3>
                </div>
                <button onClick={resetFilters} className="text-xs font-bold uppercase hover:underline" style={{ color: "#cc3f3f" }}>Reset</button>
              </div>

              {/* Location */}
              <div>
                <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wider">स्थान (Location)</label>
                <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all cursor-pointer font-medium focus:border-red-400">
                  <option value="">सभी शहर (All Locations)</option>
                  {availableCities.map((city) => <option key={city} value={city}>{city}</option>)}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wider">प्रॉपर्टी टाइप (Type)</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all cursor-pointer font-medium focus:border-red-400">
                  <option value="">सभी प्रकार (All Types)</option>
                  {availableTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="text-xs font-bold text-gray-700 mb-2 block uppercase tracking-wider">कीमत (Price Range)</label>
                <div className="grid grid-cols-2 gap-3">
                  <input type="number" placeholder="कम से कम" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all font-medium focus:border-red-400" />
                  <input type="number" placeholder="ज़्यादा से ज़्यादा" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all font-medium focus:border-red-400" />
                </div>
              </div>

              <button onClick={resetFilters} className="w-full py-3 rounded-xl font-bold text-white transition hover:opacity-90" style={{ backgroundColor: "#cc3f3f" }}>सब हटाएं</button>
            </div>
          </aside>

          {/* ========== MAIN CONTENT AREA ========== */}
          <main className="flex-1">
            {/* Results Info Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-md mb-6 border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 font-medium">
                🏠कुल <span className="text-gray-900 font-bold text-lg">{filtered.length}</span> प्रॉपर्टी मिली
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-400 uppercase">देखें:</span>
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                  <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-400"}`} style={viewMode === "grid" ? { color: "#cc3f3f" } : {}}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button onClick={() => setViewMode("list")} className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-white shadow-sm" : "text-gray-400"}`} style={viewMode === "list" ? { color: "#cc3f3f" } : {}}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* No Results */}
            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-5xl">😔</span></div>
                <h3 className="text-xl font-bold text-gray-900">कोई प्रॉपर्टी नहीं मिली!</h3>
                <p className="text-gray-500 mt-2">अपनी खोज बदलकर देखें या फ़िल्टर हटाएं</p>
                <button onClick={resetFilters} className="mt-6 px-6 py-3 text-white rounded-lg font-bold hover:opacity-90 transition" style={{ backgroundColor: "#cc3f3f" }}>फ़िल्टर हटाएं</button>
              </div>
            ) : (
              <>
                {/* Property Cards */}
                <div className={`${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}`}>
                  {currentProperties.map((property) => (
                    <div key={property._id} onClick={() => navigateToDetails(property._id)} className={`group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer ${viewMode === "list" ? "flex flex-col sm:flex-row" : ""}`}>
                      
                      {/* Image */}
                      <div className={`relative overflow-hidden bg-gray-200 ${viewMode === "list" ? "w-full sm:w-72 h-56 sm:h-48 flex-shrink-0" : "w-full h-52"}`}>
                        <img src={property.images?.length > 0 ? `https://propertybackend-1-xdbs.onrender.com${property.images[0]}` : "https://via.placeholder.com/600x400?text=No+Image"} alt={property.propertyTypeName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=No+Image"; }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-3 left-3">
                          <span className="text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md" style={{ backgroundColor: "#cc3f3f" }}>🏠 {property.propertyTypeName}</span>
                        </div>
                        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: "#cc3f3f" }}>
                          <p className="text-xl font-black text-gray-900">{formatPrice(property.price)}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-5 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                        <div className="flex items-start gap-2 mb-3">
                          <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#cc3f3f" }} />
                          <div className="min-w-0">
                            <p className="font-bold text-gray-800 text-base truncate">{property.address}</p>
                            <p className="text-gray-500 text-sm">{property.cityName}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {property.configuration && (
                            <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ backgroundColor: "rgba(204, 63, 63, 0.1)", color: "#cc3f3f" }}>
                              <Bed className="w-4 h-4" />{property.configuration}
                            </span>
                          )}
                          {(property.plotArea || property.area) && (
                            <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ backgroundColor: "#e0f2fe", color: "#0284c7" }}>
                              <Maximize className="w-4 h-4" />{property.plotArea || property.area} sqft
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                          <button onClick={(e) => handleCall(e, property)} className="text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition hover:opacity-90 shadow-md" style={{ backgroundColor: "#16a34a" }}>
                            <Phone className="w-5 h-5" /> कॉल करें
                          </button>
                          <button onClick={(e) => handleWhatsApp(e, property)} className="text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition hover:opacity-90 shadow-md" style={{ backgroundColor: "#25D366" }}>
                            <MessageCircle className="w-5 h-5" /> WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="bg-white rounded-2xl p-5 mt-8 shadow-md border border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                      <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-5 py-3 text-white rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2 shadow-md" style={{ backgroundColor: "#cc3f3f" }}>
                        <ChevronLeft className="w-5 h-5" /> ⬅️ पिछला पेज
                      </button>
                      <div className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-xl">
                        <span className="text-gray-600 font-medium">पेज</span>
                        <span className="text-white px-4 py-1 rounded-lg font-bold text-lg" style={{ backgroundColor: "#cc3f3f" }}>{currentPage}</span>
                        <span className="text-gray-600 font-medium">/ {totalPages}</span>
                      </div>
                      <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-5 py-3 text-white rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2 shadow-md" style={{ backgroundColor: "#cc3f3f" }}>
                        अगला पेज ➡️ <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* --- DROPDOWN FOR DESKTOP CALL --- */}
      {showPhoneDropdown && (
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
            <button onClick={() => setShowPhoneDropdown(false)} className="text-gray-400 hover:text-red-500">
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

      <Footer/>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}