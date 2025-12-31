// // "use client";

// // import React, { useState } from 'react';
// // import { 
// //   ChevronLeft, ChevronRight, Heart, Share2, MapPin, 
// //   Bed, Bath, Maximize, Calendar, Phone, Mail, 
// //   ShieldCheck, Star, Car, Home, ArrowLeft, X, CheckCircle 
// // } from 'lucide-react';
// // import Header from "@/components/header/header";
// // import Footer from '../footer/footer';
// // export default function PropertyDetail() {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const [isLiked, setIsLiked] = useState(false);
// //   const [showEnquiryModal, setShowEnquiryModal] = useState(false);

// //   // Sample Data (Replace with API fetch)
// //   const property = {
// //     id: 1,
// //     title: "आलीशान विला गार्डन के साथ",
// //     engTitle: "Luxury Villa with Private Garden",
// //     price: "₹1,50,00,000",
// //     location: "वैशाली नगर, जयपुर",
// //     address: "Plot No. 45, Vaishali Nagar, Jaipur, Rajasthan",
// //     type: "विला / Villa",
// //     status: "बिक्री के लिए (For Sale)",
// //     bedrooms: 4,
// //     bathrooms: 4,
// //     area: "3200 Sq. Ft.",
// //     yearBuilt: "2023",
// //     description: "यह शानदार विला जयपुर के सबसे पॉश इलाके वैशाली नगर में स्थित है। इसमें 4 बड़े बेडरूम, मॉड्यूलर किचन, और एक सुंदर प्राइवेट गार्डन है। यह घर वास्तु के अनुसार बनाया गया है और इसमें दिन भर प्राकृतिक रोशनी रहती है। आस-पास स्कूल, अस्पताल और बाज़ार की सुविधा उपलब्ध है।",
// //     features: [
// //       "मॉड्यूलर किचन", "प्राइवेट गार्डन", "3 कार पार्किंग", "24/7 पानी", 
// //       "सीसीटीवी सुरक्षा", "क्लब हाउस", "पावर बैकअप", "रूफटॉप टेरेस"
// //     ],
// //     images: [
// //       "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
// //       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop"
// //     ],
// //     agent: {
// //       name: "राजेश खन्ना",
// //       role: "Senior Agent",
// //       phone: "+91 98765 43210",
// //       email: "rajesh@property.com",
// //       verified: true
// //     }
// //   };

// //   const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
// //   const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);

// //   return (
// //     <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900">
// //       <Header/>

// //       {/* --- HERO IMAGE SLIDER --- */}
// //       <div className="relative h-[60vh] md:h-[75vh] w-full bg-slate-900 group">
        
// //         {/* Main Image */}
// //         <img 
// //           src={property.images[currentImageIndex]} 
// //           alt="Property View" 
// //           className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
// //         />
        
// //         {/* Gradient Overlay */}
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

// //         {/* Top Navigation */}
// //         <div className="absolute top-6 left-0 right-0 px-4 md:px-8 flex justify-between z-20">
          
// //           <div className="flex gap-3">
// //             <button 
// //               onClick={() => setIsLiked(!isLiked)} 
// //               className={`p-3 rounded-full backdrop-blur-md border border-white/20 transition-all ${isLiked ? 'bg-green-600 text-white border-green-600' : 'bg-black/30 text-white hover:bg-white/20'}`}
// //             >
// //               <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
// //             </button>
// //             <button className="p-3 rounded-full bg-black/30 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all">
// //               <Share2 className="w-5 h-5" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Slider Controls */}
// //         <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-green-600 transition-all border border-white/20 hidden md:block opacity-0 group-hover:opacity-100">
// //           <ChevronLeft className="w-8 h-8" />
// //         </button>
// //         <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full hover:bg-green-600 transition-all border border-white/20 hidden md:block opacity-0 group-hover:opacity-100">
// //           <ChevronRight className="w-8 h-8" />
// //         </button>

// //         {/* Image Counter */}
// //         <div className="absolute bottom-32 right-8 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">
// //           {currentImageIndex + 1} / {property.images.length} Photos
// //         </div>

// //         {/* Bottom Hero Content */}
// //         <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white z-10 max-w-7xl mx-auto">
// //           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
// //             <div>
// //               <div className="flex flex-wrap gap-2 mb-3">
// //                 <span className="bg-green-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-lg">Verified</span>
// //                 <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-white/20">{property.status}</span>
// //                 <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider border border-white/20">{property.type}</span>
// //               </div>
// //               <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight drop-shadow-lg">{property.title}</h1>
// //               <p className="text-gray-300 text-lg md:text-xl font-medium mb-2">{property.engTitle}</p>
// //               <div className="flex items-center text-gray-300 text-sm md:text-base font-medium bg-black/30 backdrop-blur-sm w-fit px-3 py-1.5 rounded-lg border border-white/10">
// //                 <MapPin className="w-4 h-4 mr-2 text-green-600" />
// //                 {property.address}
// //               </div>
// //             </div>
// //             <div className="text-left md:text-right bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
// //               <p className="text-4xl md:text-5xl font-bold text-green-600 drop-shadow-md">{property.price}</p>
// //               <p className="text-xs text-gray-300 mt-1 uppercase tracking-wide font-semibold text-right">Negotiable Price</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* --- MAIN CONTENT AREA --- */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         <div className="grid lg:grid-cols-3 gap-8">
          
// //           {/* LEFT: Property Details */}
// //           <div className="lg:col-span-2 space-y-8">
            
// //             {/* Quick Stats Bar */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4">
// //               {[
// //                 { icon: Bed, val: property.bedrooms, label: "Bedrooms" },
// //                 { icon: Bath, val: property.bathrooms, label: "Bathrooms" },
// //                 { icon: Maximize, val: property.area, label: "Area" },
// //                 { icon: Calendar, val: property.yearBuilt, label: "Built Year" },
// //               ].map((stat, i) => (
// //                 <div key={i} className="flex flex-col items-center justify-center p-3 text-center bg-gray-50 rounded-xl hover:bg-green-50 transition-colors border border-gray-100">
// //                   <stat.icon className="w-7 h-7 text-green-600 mb-2" />
// //                   <span className="text-xl font-bold text-slate-900">{stat.val}</span>
// //                   <span className="text-xs text-slate-500 uppercase font-bold tracking-wide">{stat.label}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Description */}
// //             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
// //               <h3 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
// //                 <span className="w-1.5 h-8 bg-green-600 rounded-full"></span>
// //                 विवरण (Description)
// //               </h3>
// //               <p className="text-slate-600 leading-loose text-lg">
// //                 {property.description}
// //               </p>
// //             </div>

// //             {/* Features Grid */}
// //             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
// //               <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
// //                 <span className="w-1.5 h-8 bg-green-600 rounded-full"></span>
// //                 सुविधाएं (Amenities)
// //               </h3>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //                 {property.features.map((feature, i) => (
// //                   <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-green-50 hover:border-green-300 border border-transparent transition-all group">
// //                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:border-green-600">
// //                        <CheckCircle className="w-4 h-4 text-green-600" />
// //                     </div>
// //                     <span className="text-slate-700 font-semibold text-sm">{feature}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Map Placeholder */}
// //             <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
// //                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
// //                 <span className="w-1.5 h-8 bg-green-600 rounded-full"></span>
// //                 लोकेशन (Location)
// //               </h3>
// //               <div className="bg-slate-100 rounded-xl h-64 w-full flex flex-col items-center justify-center relative overflow-hidden border border-gray-300">
// //                  <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Jaipur&zoom=12&size=600x300&sensor=false')] bg-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
// //                  <div className="z-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg text-center">
// //                     <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
// //                     <p className="font-bold text-slate-900">View on Map</p>
// //                     <p className="text-xs text-slate-500">Click to open Google Maps</p>
// //                  </div>
// //               </div>
// //             </div>

// //           </div>

// //           {/* RIGHT: Sticky Sidebar */}
// //           <div className="lg:col-span-1">
// //             <div className="sticky top-24 space-y-6">
              
// //               {/* Agent Card */}
// //               <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden">
// //                 <div className="absolute top-0 left-0 w-full h-2 bg-green-600"></div>
                
// //                 <div className="flex items-center gap-4 mb-6 mt-2">
// //                   <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-white border-4 border-green-100 shadow-md">
// //                     {property.agent.name.charAt(0)}
// //                   </div>
// //                   <div>
// //                     <h3 className="text-xl font-bold text-slate-900">{property.agent.name}</h3>
// //                     <div className="flex items-center gap-1 text-xs text-green-600 font-bold uppercase mt-1 bg-green-50 px-2 py-0.5 rounded-full w-fit">
// //                       <ShieldCheck className="w-3 h-3" /> Verified Agent
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="space-y-3">
// //                   <a href={`tel:${property.agent.phone}`} className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/30">
// //                     <Phone className="w-5 h-5" />
// //                     Call Now
// //                   </a>
// //                   <button onClick={() => setShowEnquiryModal(true)} className="flex items-center justify-center gap-3 w-full py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-xl font-bold hover:bg-green-50 hover:border-green-600 hover:text-green-600 transition-all">
// //                     <Mail className="w-5 h-5" />
// //                     Send Enquiry
// //                   </button>
// //                 </div>

// //                 <div className="mt-6 pt-4 border-t border-gray-100 text-center">
// //                    <p className="text-xs text-gray-400">Response time: usually within 1 hour</p>
// //                 </div>
// //               </div>

// //               {/* Safety Badge */}
// //               <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4">
// //                 <div className="bg-green-100 p-2 rounded-full">
// //                    <ShieldCheck className="w-6 h-6 text-green-600" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-bold text-green-600 text-sm mb-1">Safe Transaction</h4>
// //                   <p className="text-xs text-green-700 leading-relaxed">
// //                     This property has been physically verified by our team. Papers are clear.
// //                   </p>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>

// //         </div>
// //       </main>

// //       {/* --- ENQUIRY MODAL --- */}
// //       {showEnquiryModal && (
// //         <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
// //           <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
// //             <button onClick={() => setShowEnquiryModal(false)} className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
// //               <X className="w-5 h-5 text-gray-600" />
// //             </button>
            
// //             <div className="text-center mb-6">
// //                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
// //                  <Mail className="w-6 h-6 text-green-600" />
// //                </div>
// //                <h3 className="text-2xl font-bold text-slate-900">Contact Agent</h3>
// //                <p className="text-sm text-gray-500">Interested in {property.title}?</p>
// //             </div>
            
// //             <form className="space-y-4">
// //               <div>
// //                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Your Name</label>
// //                 <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all font-medium" />
// //               </div>
// //               <div>
// //                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Mobile Number</label>
// //                 <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all font-medium" />
// //               </div>
// //               <div>
// //                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Message</label>
// //                 <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all resize-none font-medium"></textarea>
// //               </div>
// //               <button className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform active:scale-95 text-lg mt-2">
// //                 Send Request Now
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// // <Footer/>
      
// //     </div>
// //   );
// // }
// "use client";

// import React, { useState, useEffect } from 'react';
// import { 
//   ChevronLeft, ChevronRight, Heart, Share2, MapPin, 
//   Bed, Bath, Maximize, Calendar, Phone, Mail, 
//   ShieldCheck, Star, Car, Home, ArrowLeft, X, CheckCircle 
// } from 'lucide-react';
// import Header from "@/components/header/header";
// import Footer from '../footer/footer';

// export default function PropertyDetail() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [showEnquiryModal, setShowEnquiryModal] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   // Sample Data
//   const property = {
//     id: 1,
//     title: "आलीशान विला गार्डन के साथ",
//     engTitle: "Luxury Villa with Private Garden",
//     price: "₹1,50,00,000",
//     location: "वैशाली नगर, जयपुर",
//     address: "Plot No. 45, Vaishali Nagar, Jaipur, Rajasthan",
//     type: "विला / Villa",
//     status: "बिक्री के लिए (For Sale)",
//     bedrooms: 4,
//     bathrooms: 4,
//     area: "3200 Sq. Ft.",
//     yearBuilt: "2023",
//     description: "यह शानदार विला जयपुर के सबसे पॉश इलाके वैशाली नगर में स्थित है। इसमें 4 बड़े बेडरूम, मॉड्यूलर किचन, और एक सुंदर प्राइवेट गार्डन है। यह घर वास्तु के अनुसार बनाया गया है और इसमें दिन भर प्राकृतिक रोशनी रहती है। आस-पास स्कूल, अस्पताल और बाज़ार की सुविधा उपलब्ध है।",
//     features: [
//       "मॉड्यूलर किचन", "प्राइवेट गार्डन", "3 कार पार्किंग", "24/7 पानी", 
//       "सीसीटीवी सुरक्षा", "क्लब हाउस", "पावर बैकअप", "रूफटॉप टेरेस"
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop"
//     ],
//     agent: {
//       name: "राजेश खन्ना",
//       role: "Senior Agent",
//       phone: "+91 98765 43210",
//       email: "rajesh@property.com",
//       verified: true
//     }
//   };

//   // Auto-play slider
//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
//       }, 3000); // Change image every 3 seconds

//       return () => clearInterval(interval);
//     }
//   }, [isPaused, property.images.length]);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
//       <Header/>

//       {/* --- HERO IMAGE SLIDER --- */}
//       <div 
//         className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full bg-slate-900 group"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//       >
        
//         {/* Main Image */}
//         <img 
//           src={property.images[currentImageIndex]} 
//           alt="Property View" 
//           className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
//         />
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

//         {/* Top Action Buttons */}
//         <div className="absolute top-3 sm:top-6 left-0 right-0 px-3 sm:px-4 md:px-8 flex justify-between items-center z-20">
//           <div className="flex gap-2 sm:gap-3">
//             <button 
//               onClick={() => setIsLiked(!isLiked)} 
//               className={`p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/20 transition-all ${isLiked ? 'bg-green-600 text-white border-green-600' : 'bg-black/30 text-white hover:bg-white/20'}`}
//             >
//               <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`} />
//             </button>
//             <button className="p-2 sm:p-3 rounded-full bg-black/30 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all">
//               <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Slider Controls */}
//         <button onClick={prevImage} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 text-white rounded-full hover:bg-green-600 transition-all border border-white/20 z-10">
//           <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
//         </button>
//         <button onClick={nextImage} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 text-white rounded-full hover:bg-green-600 transition-all border border-white/20 z-10">
//           <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
//         </button>

//         {/* Image Counter & Dots */}
//         <div className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-3 sm:right-8 bg-black/60 backdrop-blur-md text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold border border-white/10">
//           {currentImageIndex + 1} / {property.images.length}
//         </div>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-24 sm:bottom-32 md:bottom-36 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {property.images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
//                 index === currentImageIndex 
//                   ? 'bg-green-600 w-6 sm:w-8' 
//                   : 'bg-white/50 hover:bg-white/80'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Bottom Hero Content - Mobile Optimized */}
//         <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 md:p-10 text-white z-10">
//           <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            
//             {/* Badges */}
//             <div className="flex flex-wrap gap-1.5 sm:gap-2">
//               <span className="bg-green-600 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">Verified</span>
//               <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/20">{property.status}</span>
//               <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/20">{property.type}</span>
//             </div>
            
//             {/* Title */}
//             <div>
//               <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-1 sm:mb-2 leading-tight drop-shadow-lg">
//                 {property.title}
//               </h1>
//               <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-1 sm:mb-2">
//                 {property.engTitle}
//               </p>
//               <div className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base font-medium bg-black/30 backdrop-blur-sm w-fit px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/10">
//                 <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600 flex-shrink-0" />
//                 <span className="line-clamp-1">{property.address}</span>
//               </div>
//             </div>

//             {/* Price - Mobile Optimized */}
//             <div className="bg-black/40 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 w-full sm:w-auto sm:self-start">
//               <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 drop-shadow-md">
//                 {property.price}
//               </p>
//               <p className="text-[10px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1 uppercase tracking-wide font-semibold">
//                 Negotiable Price
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT AREA --- */}
//       <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-12">
//         <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
//           {/* LEFT: Property Details */}
//           <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            
//             {/* Quick Stats Bar - Mobile Optimized */}
//             <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
//               {[
//                 { icon: Bed, val: property.bedrooms, label: "Bedrooms" },
//                 { icon: Bath, val: property.bathrooms, label: "Bathrooms" },
//                 { icon: Maximize, val: property.area, label: "Area" },
//                 { icon: Calendar, val: property.yearBuilt, label: "Built" },
//               ].map((stat, i) => (
//                 <div key={i} className="flex flex-col items-center justify-center p-2 sm:p-3 text-center bg-gray-50 rounded-lg sm:rounded-xl hover:bg-green-50 transition-colors border border-gray-100">
//                   <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 mb-1 sm:mb-2" />
//                   <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900">{stat.val}</span>
//                   <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wide">{stat.label}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Description - Mobile Optimized */}
//             <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-5 flex items-center gap-2">
//                 <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-green-600 rounded-full"></span>
//                 विवरण (Description)
//               </h3>
//               <p className="text-slate-600 leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg">
//                 {property.description}
//               </p>
//             </div>

//             {/* Features Grid - Mobile Optimized */}
//             <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
//                 <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-green-600 rounded-full"></span>
//                 सुविधाएं (Amenities)
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
//                 {property.features.map((feature, i) => (
//                   <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-green-50 hover:border-green-300 border border-transparent transition-all group">
//                     <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:border-green-600 flex-shrink-0">
//                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
//                     </div>
//                     <span className="text-slate-700 font-semibold text-xs sm:text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Map - Mobile Optimized */}
//             <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
//                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
//                 <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-green-600 rounded-full"></span>
//                 लोकेशन (Location)
//               </h3>
//               <div className="bg-slate-100 rounded-lg sm:rounded-xl h-48 sm:h-56 md:h-64 w-full flex flex-col items-center justify-center relative overflow-hidden border border-gray-300">
//                  <div className="absolute inset-0 bg-[url('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.4676837077365!2d74.63991631500473!3d25.34796098382755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2368724738f%3A0x673c683b771631f2!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin')] bg-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
//                  <div className="z-10 bg-white/90 backdrop-blur p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg text-center">
//                     <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-1 sm:mb-2" />
//                     <p className="font-bold text-slate-900 text-sm sm:text-base">View on Map</p>
//                     <p className="text-[10px] sm:text-xs text-slate-500">Click to open Google Maps</p>
//                  </div>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT: Sidebar - Mobile as Bottom */}
//           <div className="lg:col-span-1">
//             <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
              
//               {/* Agent Card - Mobile Optimized */}
//               <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-green-600"></div>
                
//                 <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 mt-1 sm:mt-2">
//                   <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white border-2 sm:border-4 border-green-100 shadow-md flex-shrink-0">
//                     {property.agent.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">{property.agent.name}</h3>
//                     <div className="flex items-center gap-1 text-[10px] sm:text-xs text-green-600 font-bold uppercase mt-0.5 sm:mt-1 bg-green-50 px-1.5 py-0.5 sm:px-2 rounded-full w-fit">
//                       <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Verified Agent
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-2 sm:space-y-3">
//                   <a href={`tel:${property.agent.phone}`} className="flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg text-sm sm:text-base">
//                     <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Call Now
//                   </a>
//                   <button onClick={() => setShowEnquiryModal(true)} className="flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-xl font-bold hover:bg-green-50 hover:border-green-600 hover:text-green-600 transition-all text-sm sm:text-base">
//                     <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
//                     Send Enquiry
//                   </button>
//                 </div>

//                 <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 text-center">
//                    <p className="text-[10px] sm:text-xs text-gray-400">Response time: usually within 1 hour</p>
//                 </div>
//               </div>

//               {/* Safety Badge - Mobile Optimized */}
//               <div className="bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex items-start gap-3 sm:gap-4">
//                 <div className="bg-green-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
//                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-green-600 text-xs sm:text-sm mb-0.5 sm:mb-1">Safe Transaction</h4>
//                   <p className="text-[10px] sm:text-xs text-green-700 leading-relaxed">
//                     This property has been physically verified by our team. Papers are clear.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </main>

//       {/* --- ENQUIRY MODAL - Mobile Optimized --- */}
//       {showEnquiryModal && (
//         <div className="fixed inset-0 bg-black/80 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-sm">
//           <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md p-6 sm:p-8 relative shadow-2xl animate-slide-up sm:animate-none max-h-[90vh] overflow-y-auto">
//             <button onClick={() => setShowEnquiryModal(false)} className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
//               <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
//             </button>
            
//             <div className="text-center mb-5 sm:mb-6">
//                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
//                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
//                </div>
//                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Agent</h3>
//                <p className="text-xs sm:text-sm text-gray-500 mt-1">Interested in {property.title}?</p>
//             </div>
            
//             <form className="space-y-3 sm:space-y-4">
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Your Name</label>
//                 <input type="text" className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all font-medium text-sm sm:text-base" />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Mobile Number</label>
//                 <input type="tel" className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all font-medium text-sm sm:text-base" />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Message</label>
//                 <textarea rows={3} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all resize-none font-medium text-sm sm:text-base"></textarea>
//               </div>
//               <button type="submit" className="w-full py-3 sm:py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform active:scale-95 text-base sm:text-lg mt-2">
//                 Send Request Now
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <Footer/>
      
//       <style jsx>{`
//         @keyframes slide-up {
//           from {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//         .animate-slide-up {
//           animation: slide-up 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Heart, Share2, MapPin, 
  Bed, Bath, Maximize, Calendar, Phone, Mail, 
  ShieldCheck, Star, Car, Home, ArrowLeft, X, CheckCircle 
} from 'lucide-react';
import Header from "@/components/header/header";
import Footer from '../footer/footer';

export default function PropertyDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Sample Data
  const property = {
    id: 1,
    title: "आलीशान विला गार्डन के साथ",
    engTitle: "Luxury Villa with Private Garden",
    price: "₹1,50,00,000",
    location: "वैशाली नगर, जयपुर",
    address: "Plot No. 45, Vaishali Nagar, Jaipur, Rajasthan",
    type: "विला / Villa",
    status: "बिक्री के लिए (For Sale)",
    bedrooms: 4,
    bathrooms: 4,
    area: "3200 Sq. Ft.",
    yearBuilt: "2023",
    description: "यह शानदार विला जयपुर के सबसे पॉश इलाके वैशाली नगर में स्थित है। इसमें 4 बड़े बेडरूम, मॉड्यूलर किचन, और एक सुंदर प्राइवेट गार्डन है। यह घर वास्तु के अनुसार बनाया गया है और इसमें दिन भर प्राकृतिक रोशनी रहती है। आस-पास स्कूल, अस्पताल और बाज़ार की सुविधा उपलब्ध है।",
    features: [
      "मॉड्यूलर किचन", "प्राइवेट गार्डन", "3 कार पार्किंग", "24/7 पानी", 
      "सीसीटीवी सुरक्षा", "क्लब हाउस", "पावर बैकअप", "रूफटॉप टेरेस"
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop"
    ],
    agent: {
      name: "राजेश खन्ना",
      role: "Senior Agent",
      phone: "+91 98765 43210",
      email: "rajesh@property.com",
      verified: true
    }
  };

  // Auto-play slider
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, property.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <Header/>

      {/* --- HERO IMAGE SLIDER --- */}
      <div 
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full bg-slate-900 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Main Image */}
        <img 
          src={property.images[currentImageIndex]} 
          alt="Property View" 
          className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

        {/* Top Action Buttons */}
        <div className="absolute top-3 sm:top-6 left-0 right-0 px-3 sm:px-4 md:px-8 flex justify-between items-center z-20">
          <div className="flex gap-2 sm:gap-3">
            <button 
              onClick={() => setIsLiked(!isLiked)} 
              className={`p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/20 transition-all ${isLiked ? 'bg-green-600 text-white border-green-600' : 'bg-black/30 text-white hover:bg-white/20'}`}
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 sm:p-3 rounded-full bg-black/30 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all">
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Slider Controls */}
        <button onClick={prevImage} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 text-white rounded-full hover:bg-green-600 transition-all border border-white/20 z-10">
          <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>
        <button onClick={nextImage} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 text-white rounded-full hover:bg-green-600 transition-all border border-white/20 z-10">
          <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>

        {/* Image Counter & Dots */}
        <div className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-3 sm:right-8 bg-black/60 backdrop-blur-md text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold border border-white/10">
          {currentImageIndex + 1} / {property.images.length}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-24 sm:bottom-32 md:bottom-36 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-green-600 w-6 sm:w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Bottom Hero Content - Mobile Optimized */}
        <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 md:p-10 text-white z-10">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
            
            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="bg-green-600 px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">Verified</span>
              <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/20">{property.status}</span>
              <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/20">{property.type}</span>
            </div>
            
            {/* Title */}
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-1 sm:mb-2 leading-tight drop-shadow-lg">
                {property.title}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-1 sm:mb-2">
                {property.engTitle}
              </p>
              <div className="flex items-center text-gray-300 text-xs sm:text-sm md:text-base font-medium bg-black/30 backdrop-blur-sm w-fit px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600 flex-shrink-0" />
                <span className="line-clamp-1">{property.address}</span>
              </div>
            </div>

            {/* Price - Mobile Optimized */}
            <div className="bg-black/40 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10 w-full sm:w-auto sm:self-start">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 drop-shadow-md">
                {property.price}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1 uppercase tracking-wide font-semibold">
                Negotiable Price
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* LEFT: Property Details */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* Quick Stats Bar - Mobile Optimized */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {[
                { icon: Bed, val: property.bedrooms, label: "Bedrooms" },
                { icon: Bath, val: property.bathrooms, label: "Bathrooms" },
                { icon: Maximize, val: property.area, label: "Area" },
                { icon: Calendar, val: property.yearBuilt, label: "Built" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-2 sm:p-3 text-center bg-gray-50 rounded-lg sm:rounded-xl hover:bg-green-50 transition-colors border border-gray-100">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 mb-1 sm:mb-2" />
                  <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900">{stat.val}</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Description - Mobile Optimized */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-5 flex items-center gap-2">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-green-600 rounded-full"></span>
                विवरण (Description)
              </h3>
              <p className="text-slate-600 leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg">
                {property.description}
              </p>
            </div>

            {/* Features Grid - Mobile Optimized */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-green-600 rounded-full"></span>
                सुविधाएं (Amenities)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-green-50 hover:border-green-300 border border-transparent transition-all group">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 group-hover:border-green-600 flex-shrink-0">
                       <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 font-semibold text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map - Mobile Optimized */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
                <span className="w-1 sm:w-1.5 h-6 sm:h-8 bg-green-600 rounded-full"></span>
                लोकेशन (Location)
              </h3>
              <div className="rounded-lg sm:rounded-xl h-64 sm:h-72 md:h-80 w-full overflow-hidden border border-gray-300 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825625477!2d75.65046970990669!3d26.885135179428736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                {/* Overlay button */}
                <a 
                  href="https://www.google.com/maps/search/Vaishali+Nagar,+Jaipur,+Rajasthan/@26.885135,75.650469,12z" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:bg-green-50 hover:text-green-600 border border-gray-200 hover:border-green-300"
                >
                  <MapPin className="w-4 h-4 text-green-600" />
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Sidebar - Mobile as Bottom */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
              
              {/* Agent Card - Mobile Optimized */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-green-600"></div>
                
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 mt-1 sm:mt-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white border-2 sm:border-4 border-green-100 shadow-md flex-shrink-0">
                    {property.agent.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">{property.agent.name}</h3>
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-green-600 font-bold uppercase mt-0.5 sm:mt-1 bg-green-50 px-1.5 py-0.5 sm:px-2 rounded-full w-fit">
                      <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Verified Agent
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <a href={`tel:${property.agent.phone}`} className="flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg text-sm sm:text-base">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Now
                  </a>
                  <button onClick={() => setShowEnquiryModal(true)} className="flex items-center justify-center gap-2 sm:gap-3 w-full py-3 sm:py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-xl font-bold hover:bg-green-50 hover:border-green-600 hover:text-green-600 transition-all text-sm sm:text-base">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Enquiry
                  </button>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 text-center">
                   <p className="text-[10px] sm:text-xs text-gray-400">Response time: usually within 1 hour</p>
                </div>
              </div>

              {/* Safety Badge - Mobile Optimized */}
              <div className="bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex items-start gap-3 sm:gap-4">
                <div className="bg-green-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                   <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-green-600 text-xs sm:text-sm mb-0.5 sm:mb-1">Safe Transaction</h4>
                  <p className="text-[10px] sm:text-xs text-green-700 leading-relaxed">
                    This property has been physically verified by our team. Papers are clear.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* --- ENQUIRY MODAL - Mobile Optimized --- */}
      {showEnquiryModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-sm">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md p-6 sm:p-8 relative shadow-2xl animate-slide-up sm:animate-none max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowEnquiryModal(false)} className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
            
            <div className="text-center mb-5 sm:mb-6">
               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                 <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
               </div>
               <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Contact Agent</h3>
               <p className="text-xs sm:text-sm text-gray-500 mt-1">Interested in {property.title}?</p>
            </div>
            
            <form className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Your Name</label>
                <input type="text" className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all font-medium text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Mobile Number</label>
                <input type="tel" className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all font-medium text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Message</label>
                <textarea rows={3} className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all resize-none font-medium text-sm sm:text-base"></textarea>
              </div>
              <button type="submit" className="w-full py-3 sm:py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform active:scale-95 text-base sm:text-lg mt-2">
                Send Request Now
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer/>
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}