// "use client";
// import React from 'react';
// import { Home, Building2, Building, Tractor, ArrowRight } from 'lucide-react';

// interface PropertyType {
//   icon: React.ReactNode;
//   name: string;
//   label: string; // Hindi Label
//   image: string;
// }

// const PropertyTypeExplorer: React.FC = () => {
//   const propertyTypes: PropertyType[] = [
//     { 
//       icon: <Home className="w-6 h-6" />, 
//       name: 'Residential', 
//       label: "घर / मकान", 
//       image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80" 
//     },
//     { 
//       icon: <Building2 className="w-6 h-6" />, 
//       name: 'Apartments', 
//       label: "फ्लैट", 
//       image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80" 
//     },
//     { 
//       icon: <Building className="w-6 h-6" />, 
//       name: 'Shops', 
//       label: "दुकान", 
//       image: "https://staticimg.amarujala.com/assets/images/4cplus/2025/12/10/cathapara-oita-marakata-ma-bna-kara-tayara-thakana-aarakaiva_2d2013e0e38d5a78da253d3fd9b879e8.jpeg?w=414&dpr=1.0&q=80" 
//     },
//     { 
//       icon: <Tractor className="w-6 h-6" />, 
//       name: 'Agriculture Land', 
//       label: "कृषि भूमि / खेत", 
//       image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80" 
//     },
//   ];

//   return (
//     <section className="w-full bg-black py-20 px-4 border-t-4  font-sans">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block bg-green-900/30 text-green-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-green-600/50">
//             Categories
//           </div>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
//             किस तरह की संपत्ति चाहिए?
//           </h2>
//           <p className="text-lg text-gray-400 font-semibold mt-2">
//             Choose Property Type
//           </p>
//           <div className="w-24 h-1.5 bg-green-600 mx-auto mt-6 rounded-full" />
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {propertyTypes.map((property, index) => (
//             <div
//               key={index}
//               className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg hover:shadow-green-900/20 hover:border-green-600 transition-all duration-300 group cursor-pointer"
//             >
              
//               {/* Image Section */}
//               <div className="w-full h-52 overflow-hidden relative">
//                 <img 
//                   src={property.image} 
//                   alt={property.label} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
//                 />
//                 {/* Dark Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
//               </div>

//               {/* Content Section */}
//               <div className="p-6 relative">
//                 {/* Floating Icon overlapping image border */}
//                 <div className="absolute -top-8 left-6 w-14 h-14 rounded-full bg-white text-green-500 flex items-center justify-center border-4 border-zinc-900 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors shadow-xl">
//                   {property.icon}
//                 </div>

//                 <div className="mt-6 flex justify-between items-end">
//                   <div>
//                     <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-1">
//                       {property.label}
//                     </h3>
//                     <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">
//                       {property.name}
//                     </p>
//                   </div>

//                   <div className="bg-zinc-800 p-2 rounded-full group-hover:bg-green-600 transition-colors">
//                     <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
//                   </div>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PropertyTypeExplorer;
"use client";
import React from 'react';
import { Home, Building2, Building, Tractor, ArrowRight } from 'lucide-react';

interface PropertyType {
  icon: React.ReactNode;
  name: string;
  label: string;
  image: string;
}

const PropertyTypeExplorer: React.FC = () => {
  const propertyTypes: PropertyType[] = [
    { 
      icon: <Home className="w-6 h-6" />, 
      name: 'Residential', 
      label: "घर / मकान", 
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&q=80" 
    },
    { 
      icon: <Building2 className="w-6 h-6" />, 
      name: 'Apartments', 
      label: "फ्लैट", 
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80" 
    },
    { 
      icon: <Building className="w-6 h-6" />, 
      name: 'Shops', 
      label: "दुकान", 
      image: "https://staticimg.amarujala.com/assets/images/4cplus/2025/12/10/cathapara-oita-marakata-ma-bna-kara-tayara-thakana-aarakaiva_2d2013e0e38d5a78da253d3fd9b879e8.jpeg?w=414&dpr=1.0&q=80" 
    },
    { 
      icon: <Tractor className="w-6 h-6" />, 
      name: 'Agriculture Land', 
      label: "कृषि भूमि / खेत", 
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80" 
    },
  ];

  return (
    <section className="w-full py-20 px-4  font-sans bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border" style={{ backgroundColor: 'rgba(204, 63, 63, 0.1)', color: '#cc3f3f', borderColor: 'rgba(204, 63, 63, 0.3)' }}>
            Categories
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-2">
            किस तरह की संपत्ति चाहिए?
          </h2>
          <p className="text-lg text-gray-600 font-semibold mt-2">
            Choose Property Type
          </p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#cc3f3f' }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {propertyTypes.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ 
                borderColor: '#f5d5d5',
                '--hover-border': '#cc3f3f',
                '--hover-shadow': 'rgba(204, 63, 63, 0.15)'
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#cc3f3f';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(204, 63, 63, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#f5d5d5';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              
              {/* Image Section */}
              <div className="w-full h-52 overflow-hidden relative">
                <img 
                  src={property.image} 
                  alt={property.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Light Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Floating Icon overlapping image border */}
                <div 
                  className="absolute -top-8 left-6 w-14 h-14 rounded-full bg-white flex items-center justify-center border-4 transition-all shadow-xl group-hover:text-white"
                  style={{ 
                    color: '#cc3f3f',
                    borderColor: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#cc3f3f';
                    e.currentTarget.style.borderColor = '#cc3f3f';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'white';
                  }}
                >
                  {property.icon}
                </div>

                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 transition-colors mb-1 group-hover:text-[#cc3f3f]">
                      {property.label}
                    </h3>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                      {property.name}
                    </p>
                  </div>

                  <div 
                    className="p-2 rounded-full transition-colors"
                    style={{ backgroundColor: '#fdf2f2' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#cc3f3f';
                      const icon = e.currentTarget.querySelector('svg') as SVGElement | null;
                      if (icon) icon.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fdf2f2';
                      const icon = e.currentTarget.querySelector('svg') as SVGElement | null;
                      if (icon) icon.style.color = '#9ca3af';
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-gray-400 transition-colors" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyTypeExplorer;