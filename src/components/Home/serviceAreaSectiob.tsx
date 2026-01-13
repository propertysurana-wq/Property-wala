// // import { MapPin, Navigation, Map } from "lucide-react";

// // export default function ServiceAreasSection() {
// //   const areas = [
// //     { hindi: "भीलवाड़ा", english: "Bhilwara" },
// //     { hindi: "मांडल", english: "Mandal" },
// //     { hindi: "आसीन्द", english: "Asind" },
// //     { hindi: "शाहपुरा", english: "Shahpura" },
// //     { hindi: "गुलाबपुरा", english: "Gulabpura" },
// //     { hindi: "बनेड़ा", english: "Banera" },
// //     { hindi: "रायपुर", english: "Raipur" },
// //     { hindi: "सवाई माधोपुर", english: "Sawai Madhopur" },
// //   ];

// //   return (
// //     <section className="relative py-24 bg-slate-900 overflow-hidden font-sans border-t border-slate-800">
      
// //       {/* Decorative Background Pattern */}
// //       <div className="absolute inset-0 opacity-10 pointer-events-none">
// //         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
// //           <defs>
// //             <pattern id="grid-pattern-dark" width="40" height="40" patternUnits="userSpaceOnUse">
// //               <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="#10b981" strokeWidth="1" fill="none"/>
// //             </pattern>
// //           </defs>
// //           <rect width="100%" height="100%" fill="url(#grid-pattern-dark)" />
// //         </svg>
// //       </div>

// //       {/* Radial Gradient Background for Depth */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

// //       <div className="container mx-auto px-4 relative z-10">
        
// //         {/* Header */}
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <div className="flex items-center justify-center gap-2 mb-4">
// //             <Map className="w-4 h-4 text-emerald-400" />
// //             <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">
// //               Service Locations
// //             </span>
// //           </div>
// //           <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 tracking-tight">
// //             Serving Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Rajasthan</span>
// //           </h2>
// //           <p className="text-lg text-slate-400 font-medium font-serif">
// //             प्रमुख शहरों में हमारी उपस्थिती
// //           </p>
// //         </div>

// //         {/* Areas Grid */}
// //         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {areas.map((area, index) => (
// //             <div
// //               key={index}
// //               className="group relative bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/40 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center overflow-hidden"
// //             >
// //               {/* Hover Background Splash */}
// //               <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

// //               {/* Icon Container */}
// //               <div className="relative mb-5 w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all duration-300 group-hover:rotate-12 shadow-inner">
// //                 <MapPin className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors duration-300" />
// //               </div>

// //               {/* Text */}
// //               <div className="relative">
// //                 <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-white transition-colors">
// //                   {area.english}
// //                 </h3>
// //                 <p className="text-sm font-medium text-slate-500 font-serif group-hover:text-emerald-400 transition-colors">
// //                   {area.hindi}
// //                 </p>
// //               </div>

// //               {/* Arrow Indicator (Visible on Hover) */}
// //               <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
// //                 <Navigation className="w-3 h-3 text-emerald-400" />
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom CTA */}
// //         <div className="mt-20 text-center">
// //           <p className="text-slate-400 mb-6 text-sm">Don't see your city listed?</p>
// //           <button className="px-8 py-3.5 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-colors duration-300 shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 mx-auto">
// //             <MapPin className="w-4 h-4" />
// //             Check Availability
// //           </button>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import { MapPin, Navigation, Map } from "lucide-react";
// import { useRouter } from "next/navigation";   // routing import

// export default function ServiceAreasSection() {
//   const router = useRouter();

//   const areas = [
//     { hindi: "भीलवाड़ा", english: "Bhilwara" },
//     { hindi: "मांडल", english: "Mandal" },
//     { hindi: "आसीन्द", english: "Asind" },
//     { hindi: "शाहपुरा", english: "Shahpura" },
//     { hindi: "गुलाबपुरा", english: "Gulabpura" },
//     { hindi: "बनेड़ा", english: "Banera" },
//     { hindi: "रायपुर", english: "Raipur" },
//     { hindi: "सवाई माधोपुर", english: "Sawai Madhopur" },
//   ];

//   const openListPage = () => {
//     router.push("/list");   // <--- Same page open on click
//   };

//   return (
//     <section className="relative py-24 bg-slate-900 overflow-hidden font-sans border-t border-slate-800">

//       <div className="container mx-auto px-4 relative z-10">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Map className="w-4 h-4 text-emerald-400" />
//             <span className="text-emerald-400 font-bold uppercase text-xs">Service Locations</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//             Serving Across <span className="text-emerald-400">Rajasthan</span>
//           </h2>
//           <p className="text-lg text-slate-400">प्रमुख शहरों में हमारी उपस्थिती</p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {areas.map((area, index) => (
//             <div
//               key={index}
//               onClick={openListPage}  // <--- single list page navigate
//               className="group relative bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-emerald-900/40 
//               border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 
//               hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center overflow-hidden"
//             >

//               <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 opacity-0 group-hover:opacity-100 transition" />

//               <div className="relative mb-5 w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center 
//               border border-slate-700 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all">
//                 <MapPin className="w-6 h-6 text-slate-400 group-hover:text-black transition" />
//               </div>

//               <h3 className="text-lg font-bold text-slate-100 group-hover:text-white">{area.english}</h3>
//               <p className="text-sm text-slate-500 group-hover:text-emerald-400">{area.hindi}</p>

//               <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition">
//                 <Navigation className="w-3 h-3 text-emerald-400" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import { MapPin, Navigation, Map } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Property {
//   cityName: string;
// }

// export default function ServiceAreasSection() {
//   const router = useRouter();
//   const [cities, setCities] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch all properties and extract unique city names
//     fetch("https://propertybackend-1-xdbs.onrender.com/api/property")
//       .then((res) => res.json())
//       .then((data) => {
//         const allCities: string[] = data.data.map((p: Property) => p.cityName);
//         const uniqueCities = Array.from(new Set(allCities)); // unique only
//         setCities(uniqueCities);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const openListPage = (city: string) => {
//     router.push(`/list?city=${encodeURIComponent(city)}`);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-96 text-white">
//         Loading cities...
//       </div>
//     );
//   }

//   return (
//     <section className="relative py-24 bg-slate-900 overflow-hidden font-sans border-t border-slate-800">
//       <div className="container mx-auto px-4 relative z-10">

//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Map className="w-4 h-4 text-emerald-400" />
//             <span className="text-emerald-400 font-bold uppercase text-xs">Service Locations</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//             Serving Across <span className="text-emerald-400">Rajasthan</span>
//           </h2>
//           <p className="text-lg text-slate-400">हमारे सभी शहरों में उपलब्ध प्रॉपर्टीज़</p>
//         </div>

//         {/* Cities Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cities.map((city, index) => (
//             <div
//               key={index}
//               onClick={() => openListPage(city)}
//               className="group relative bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-emerald-900/40 
//               border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 
//               hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center overflow-hidden"
//             >
//               {/* Hover Background */}
//               <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 opacity-0 group-hover:opacity-100 transition" />

//               {/* Icon */}
//               <div className="relative mb-5 w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center 
//               border border-slate-700 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all">
//                 <MapPin className="w-6 h-6 text-slate-400 group-hover:text-black transition" />
//               </div>

//               {/* City Name */}
//               <h3 className="text-lg font-bold text-slate-100 group-hover:text-white">{city}</h3>

//               {/* Arrow */}
//               <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition">
//                 <Navigation className="w-3 h-3 text-emerald-400" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";

interface Property {
  cityName: string;
}

export default function ServiceAreasSection() {
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all properties and extract unique city names
    fetch("https://propertybackend-1-xdbs.onrender.com/api/property")
      .then((res) => res.json())
      .then((data) => {
        const allCities: string[] = data.data.map((p: Property) => p.cityName);
        const uniqueCities = Array.from(new Set(allCities));
        setCities(uniqueCities);
      })
      .finally(() => setLoading(false));
  }, []);

  const openListPage = (city: string) => {
    // Using window.location instead of Next.js router for demo
    window.location.href = `/list?city=${encodeURIComponent(city)}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-800">
        Loading cities...
      </div>
    );
  }

  return (
    <section className="py-20" style={{ backgroundColor: '#fff5f5' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Service Areas
          </h2>
          <p className="text-xl text-red-700 mb-2 font-semibold">
            हमारे सेवा क्षेत्र
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mb-12">
          <button 
            onClick={() => openListPage('')}
            className="inline-flex flex-col sm:flex-row items-center gap-4 text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            सभी शहर देखें / View All Cities
            <Navigation className="w-4 h-4" />
          </button>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              onClick={() => openListPage(city)}
              className="group relative bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl 
              transition-all duration-300 border border-orange-100 hover:border-orange-300 
              cursor-pointer hover:-translate-y-1"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              {/* Icon */}
              <div className="relative mb-3 mx-auto w-12 h-12 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600 group-hover:text-orange-600 transition-colors" />
              </div>

              {/* City Name */}
              <h3 className="relative font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                {city}
              </h3>

              {/* Arrow */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                <Navigation className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}