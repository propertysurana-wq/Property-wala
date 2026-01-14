// import { Home, Phone, MapPin, Clock, Facebook, MessageCircle, Instagram, X } from "lucide-react";

// export default function Footer() {
//   return (
//     // <footer className="bg-gray-900 text-white pt-20 pb-10">
//     //   <div className="container mx-auto px-4">
//     //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//     //       <div>
//     //         <div className="flex items-center space-x-3 mb-6">
//     //           <div className="w-12 h-12 bg-gradient-to-br from-[#e8734a] to-[#cc3f3f] rounded-full flex items-center justify-center">
//     //             <Home className="text-white" size={24} />
//     //           </div>
//     //           <div>
//     //             <span className="font-bold text-xl">Property Sathi</span>
//     //             <div className="text-xs text-gray-400">प्रॉपर्टी साथी</div>
//     //           </div>
//     //         </div>
//     //         <p className="text-gray-300 mb-4 leading-relaxed">
//     //           Your trusted partner for all property-related services in
//     //           Bhilwara and surrounding areas. We make property transactions
//     //           simple and secure.
//     //         </p>
//     //         <p className="text-sm text-gray-400 leading-relaxed">
//     //           भीलवाड़ा और आसपास के क्षेत्रों में सभी प्रॉपर्टी संबंधी
//     //           सेवाओं के लिए आपका भरोसेमंद साथी।
//     //         </p>
//     //       </div>

//     //       <div>
//     //         <h3 className="text-xl font-bold mb-6 text-[#ee8e69]">
//     //           Quick Links
//     //         </h3>
//     //         <ul className="space-y-3">
//     //           {["Home", "About Us", "Services", "Process", "Contact", "Reviews"].map((link) => (
//     //             <li key={link}>
//     //               <button className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//     //                 {link}
//     //               </button>
//     //             </li>
//     //           ))}
//     //         </ul>
//     //       </div>

//     //       <div>
//     //         <h3 className="text-xl font-bold mb-6 text-[#ed8888]">
//     //           Our Services
//     //         </h3>
//     //         <ul className="space-y-3 text-sm">
//     //           {[
//     //             "Property Buy & Sell",
//     //             "Nakal & Map Extraction",
//     //             "Patta Creation",
//     //             "Registry Services",
//     //             "Legal Consultation",
//     //             "Property Verification",
//     //           ].map((service) => (
//     //             <li key={service} className="text-gray-300">
//     //               {service}
//     //             </li>
//     //           ))}
//     //         </ul>
//     //       </div>

//     //       <div>
//     //         <h3 className="text-xl font-bold mb-6 text-[#ee8e69]">
//     //           Contact Information
//     //         </h3>
//     //         <div className="space-y-4">
//     //           <div className="flex items-center space-x-3">
//     //             <Phone className="text-green-500" size={20} />
//     //             <span className="text-gray-300">+91 98765 43210</span>
//     //           </div>
//     //           <div className="flex items-center space-x-3">
//     //             <MapPin className="text-[#e8734a]" size={20} />
//     //             <div className="text-gray-300 text-sm">
//     //               <p>Near City Palace, Bhilwara</p>
//     //               <p>Rajasthan - 311001</p>
//     //             </div>
//     //           </div>
//     //           <div className="flex items-center space-x-3">
//     //             <Clock className="text-blue-500" size={20} />
//     //             <span className="text-gray-300">24/7 Available</span>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>

//     //     <div className="border-t border-gray-800 pt-8">
//     //       <div className="flex flex-col md:flex-row justify-between items-center">
//     //         <p className="text-gray-400 text-sm mb-4 md:mb-0">
//     //           © 2024 Property Sathi. All rights reserved. | प्रॉपर्टी साथी -
//     //           सभी अधिकार सुरक्षित।
//     //         </p>

//     //         <div className="flex space-x-4">
//     //           <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
//     //             <Facebook className="text-white" size={20} />
//     //           </button>
//     //           <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
//     //             <MessageCircle className="text-white" size={20} />
//     //           </button>
//     //           <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
//     //             <Instagram className="text-white" size={20} />
//     //           </button>
//     //           <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
//     //             <X className="text-white" size={20} />
//     //           </button>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </footer>

//      <footer className="bg-black text-white mt-0 pt-0"> 
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

//         {/* Grid Columns */}
//         <div className="grid md:grid-cols-4 gap-8">

//           {/* Logo + Text */}
//           <div>
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="bg-green-500 p-2 rounded-lg">
//                 <Home className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold block">घर संपत्ति</span>
//                 <span className="text-xs text-green-400">Property Solutions</span>
//               </div>
//             </div>
//             <p className="text-gray-300 text-sm leading-6">
//               आपके सपनों का घर खोजने में आपका विश्वसनीय साथी।
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h5 className="font-bold mb-4 text-green-400 text-lg">त्वरित लिंक</h5>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-green-400 transition">हमारे बारे में</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">प्रॉपर्टीज</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">एजेंट्स</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">संपर्क करें</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h5 className="font-bold mb-4 text-green-400 text-lg">सेवाएं</h5>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-green-400 transition">संपत्ति खरीदें</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">संपत्ति बेचें</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">किराया</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">प्रॉपर्टी मैनेजमेंट</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h5 className="font-bold mb-4 text-green-400 text-lg">संपर्क जानकारी</h5>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li>123 मुख्य मार्ग</li>
//               <li>नई दिल्ली, 110001</li>
//               <li>+91 98765 43210</li>
//               <li>info@gharsampatti.com</li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="mt-8 pt-8 text-center">
//           <div className="flex justify-center space-x-2 mb-4">
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-white rounded-full"></div>
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//           </div>
//           <p className="text-gray-400 text-sm">
//             &copy; {new Date().getFullYear()} घर संपत्ति। सर्वाधिकार सुरक्षित।
//           </p>
//         </div>

//       </div>
//     </footer>


//   );
// }
// 
// 'use client'
// import { useState, useEffect } from "react";
// import { Home, Phone, MapPin, Clock, Facebook, MessageCircle, Instagram, X, Mail } from "lucide-react";

// export default function Footer() {
//   const [contactInfo, setContactInfo] = useState({
//     officeTimings: "Mon - Sat: 9:00 AM - 8:00 PM",
//     phoneNumbers: ["+91 98765 43210"],
//     whatsappNumber: "+91 98765 43210",
//     email: "info@propertysathi.com",
//     officeAddress: "123 Main Street, New Delhi, 110001",
//     mapLocation: {
//       embedUrl: "",
//       latitude: null,
//       longitude: null
//     }
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchContactInfo();
//   }, []);

//   const fetchContactInfo = async () => {
//     try {
//       const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contact');
//       const data = await response.json();
      
//       if (data.success && data.data) {
//         setContactInfo(data.data);
//       }
//     } catch (err) {
//       console.error('Failed to fetch contact information:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="bg-black text-white mt-0 pt-0"> 
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

//         {/* Grid Columns */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {/* Logo + Text */}
//           <div>
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="bg-green-500 p-2 rounded-lg">
//                 <Home className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <span className="text-xl sm:text-2xl font-bold block">Property Sathi</span>
//                 <span className="text-xs text-green-400">Property Solutions</span>
//               </div>
//             </div>
//             <p className="text-gray-300 text-sm leading-6">
//               Your trusted partner in finding your dream home and perfect property.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h5 className="font-bold mb-4 text-green-400 text-lg">Quick Links</h5>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="/About" className="hover:text-green-400 transition">About Us</a></li>
//               <li><a href="/Process" className="hover:text-green-400 transition">Properties</a></li>
//               <li><a href="/service" className="hover:text-green-400 transition">sevice</a></li>
//               <li><a href="/Contact" className="hover:text-green-400 transition">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h5 className="font-bold mb-4 text-green-400 text-lg">Services</h5>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-green-400 transition">Buy Property</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">Sell Property</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">Rent Property</a></li>
//               <li><a href="#" className="hover:text-green-400 transition">Property Management</a></li>
//             </ul>
//           </div>

//           {/* Contact Info - Dynamic */}
//           <div>
//             <h5 className="font-bold mb-4 text-green-400 text-lg">Contact Info</h5>
//             {loading ? (
//               <div className="text-sm text-gray-400">Loading...</div>
//             ) : (
//               <ul className="space-y-3 text-sm text-gray-300">
//                 {/* Office Address */}
//                 <li className="flex items-start gap-2">
//                   <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
//                   <span className="break-words">{contactInfo.officeAddress}</span>
//                 </li>

//                 {/* Phone Numbers */}
//                 {contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 && 
//                   contactInfo.phoneNumbers.map((phone, index) => (
//                     <li key={index} className="flex items-center gap-2">
//                       <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
//                       <a href={`tel:${phone}`} className="hover:text-green-400 transition">
//                         {phone}
//                       </a>
//                     </li>
//                   ))
//                 }

//                 {/* Email */}
//                 {contactInfo.email && (
//                   <li className="flex items-center gap-2">
//                     <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
//                     <a 
//                       href={`mailto:${contactInfo.email}`} 
//                       className="hover:text-green-400 transition break-all"
//                     >
//                       {contactInfo.email}
//                     </a>
//                   </li>
//                 )}

//                 {/* Office Timings */}
//                 <li className="flex items-start gap-2">
//                   <Clock className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
//                   <span>{contactInfo.officeTimings}</span>
//                 </li>
//               </ul>
//             )}
//           </div>

//         </div>

//         {/* Social Media & Bottom */}
//         <div className="mt-10 pt-8 border-t border-gray-800">
          
//           {/* Social Icons */}
//           <div className="flex justify-center space-x-4 mb-6">
//             <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110">
//               <Facebook className="w-5 h-5 text-white" />
//             </a>
//             <a 
//               href={contactInfo.whatsappNumber ? `https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}` : "#"} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all transform hover:scale-110"
//             >
//               <MessageCircle className="w-5 h-5 text-white" />
//             </a>
//             <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all transform hover:scale-110">
//               <Instagram className="w-5 h-5 text-white" />
//             </a>
//             <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all transform hover:scale-110">
//               <X className="w-5 h-5 text-white" />
//             </a>
//           </div>

//           {/* Decorative Dots */}
//           <div className="flex justify-center space-x-2 mb-4">
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-white rounded-full"></div>
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//           </div>

//           {/* Copyright */}
//           <p className="text-gray-400 text-sm text-center">
//             &copy; {new Date().getFullYear()} Property Sathi. All rights reserved.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }
// 'use client'
// import { useState, useEffect } from "react";
// import { Home, Phone, MapPin, Clock, Facebook, MessageCircle, Instagram, X, Mail } from "lucide-react";

// export default function Footer() {
//   const [contactInfo, setContactInfo] = useState({
//     officeTimings: "Mon - Sat: 9:00 AM - 8:00 PM",
//     phoneNumbers: ["+91 98765 43210"],
//     whatsappNumber: "+91 98765 43210",
//     email: "info@propertysathi.com",
//     officeAddress: "123 Main Street, New Delhi, 110001",
//     mapLocation: {
//       embedUrl: "",
//       latitude: null,
//       longitude: null
//     }
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchContactInfo();
//   }, []);

//   const fetchContactInfo = async () => {
//     try {
//       const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contact');
//       const data = await response.json();
      
//       if (data.success && data.data) {
//         setContactInfo(data.data);
//       }
//     } catch (err) {
//       console.error('Failed to fetch contact information:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer className="bg-gray-900 text-white pt-20 pb-10">
//       <div className="container mx-auto px-4">
//         {/* Grid Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

//           {/* Logo + Text */}
//           <div>
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-gradient-to-br from-[#e8734a] to-[#cc3f3f] rounded-full flex items-center justify-center">
//                 <Home className="text-white" size={24} />
//               </div>
//               <div>
//                 <span className="font-bold text-xl">Property Sathi</span>
//                 <div className="text-xs text-gray-400">प्रॉपर्टी साथी</div>
//               </div>
//             </div>
//             <p className="text-gray-300 mb-4 leading-relaxed">
//               Your trusted partner for all property-related services in
//               Bhilwara and surrounding areas. We make property transactions
//               simple and secure.
//             </p>
//             <p className="text-sm text-gray-400 leading-relaxed">
//               भीलवाड़ा और आसपास के क्षेत्रों में सभी प्रॉपर्टी संबंधी
//               सेवाओं के लिए आपका भरोसेमंद साथी।
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 text-[#ee8e69]">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="/" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/About" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/service" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="/Process" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//                   Process
//                 </a>
//               </li>
//               <li>
//                 <a href="/Contact" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="/reviews" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//                   Reviews
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 text-[#ed8888]">
//               Our Services
//             </h3>
//             <ul className="space-y-3 text-sm text-gray-300">
//               <li>Property Buy & Sell</li>
//               <li>Nakal & Map Extraction</li>
//               <li>Patta Creation</li>
//               <li>Registry Services</li>
//               <li>Legal Consultation</li>
//               <li>Property Verification</li>
//             </ul>
//           </div>

//           {/* Contact Info - Dynamic */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 text-[#ee8e69]">
//               Contact Information
//             </h3>
//             {loading ? (
//               <div className="text-sm text-gray-400">Loading...</div>
//             ) : (
//               <div className="space-y-4">
//                 {/* Phone Numbers */}
//                 {contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 && 
//                   contactInfo.phoneNumbers.map((phone, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <Phone className="text-green-500" size={20} />
//                       <a href={`tel:${phone}`} className="text-gray-300 hover:text-[#ee8e69] transition-colors">
//                         {phone}
//                       </a>
//                     </div>
//                   ))
//                 }

//                 {/* Office Address */}
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="text-[#e8734a] flex-shrink-0 mt-1" size={20} />
//                   <div className="text-gray-300 text-sm">
//                     <p>{contactInfo.officeAddress}</p>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 {contactInfo.email && (
//                   <div className="flex items-center space-x-3">
//                     <Mail className="text-blue-500 flex-shrink-0" size={20} />
//                     <a 
//                       href={`mailto:${contactInfo.email}`} 
//                       className="text-gray-300 hover:text-[#ee8e69] transition-colors break-all text-sm"
//                     >
//                       {contactInfo.email}
//                     </a>
//                   </div>
//                 )}

//                 {/* Office Timings */}
//                 <div className="flex items-center space-x-3">
//                   <Clock className="text-blue-500" size={20} />
//                   <span className="text-gray-300">{contactInfo.officeTimings}</span>
//                 </div>
//               </div>
//             )}
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm mb-4 md:mb-0">
//               © {new Date().getFullYear()} Property Sathi. All rights reserved. | प्रॉपर्टी साथी - सभी अधिकार सुरक्षित।
//             </p>

//             {/* Social Icons */}
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
//                 <Facebook className="text-white" size={20} />
//               </a>
//               <a 
//                 href={contactInfo.whatsappNumber ? `https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}` : "#"} 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
//               >
//                 <MessageCircle className="text-white" size={20} />
//               </a>
//               <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
//                 <Instagram className="text-white" size={20} />
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
//                 <X className="text-white" size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }
'use client'
import { useState, useEffect } from "react";
import { Home, Phone, MapPin, Clock, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const [contactInfo, setContactInfo] = useState({
    officeTimings: "Mon - Sat: 9:00 AM - 8:00 PM",
    phoneNumbers: ["+91 98765 43210"],
    whatsappNumber: "+91 98765 43210",
    email: "info@propertysathi.com",
    officeAddress: "123 Main Street, New Delhi, 110001",
    mapLocation: {
      embedUrl: "",
      latitude: null,
      longitude: null
    }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contact');
      const data = await response.json();
      
      if (data.success && data.data) {
        setContactInfo(data.data);
      }
    } catch (err) {
      console.error('Failed to fetch contact information:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo + Text */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e8734a] to-[#cc3f3f] rounded-full flex items-center justify-center">
                <Home className="text-white" size={24} />
              </div>
              <div>
                <span className="font-bold text-xl">Property Sathi</span>
                <div className="text-xs text-gray-400">प्रॉपर्टी साथी</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for all property-related services in
              Bhilwara and surrounding areas. We make property transactions
              simple and secure.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              भीलवाड़ा और आसपास के क्षेत्रों में सभी प्रॉपर्टी संबंधी
              सेवाओं के लिए आपका भरोसेमंद साथी।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ee8e69]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/About" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/Process" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="/Contact" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-gray-300 hover:text-[#ee8e69] transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ed8888]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Property Buy & Sell</li>
              <li>Nakal & Map Extraction</li>
              <li>Patta Creation</li>
              <li>Registry Services</li>
              <li>Legal Consultation</li>
              <li>Property Verification</li>
            </ul>
          </div>

          {/* Contact Info - Dynamic */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ee8e69]">
              Contact Information
            </h3>
            {loading ? (
              <div className="text-sm text-gray-400">Loading...</div>
            ) : (
              <div className="space-y-4">
                {/* Phone Numbers */}
                {contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 && 
                  contactInfo.phoneNumbers.map((phone, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Phone className="text-green-500" size={20} />
                      <a href={`tel:${phone}`} className="text-gray-300 hover:text-[#ee8e69] transition-colors">
                        {phone}
                      </a>
                    </div>
                  ))
                }

                {/* Office Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="text-[#e8734a] flex-shrink-0 mt-1" size={20} />
                  <div className="text-gray-300 text-sm">
                    <p>{contactInfo.officeAddress}</p>
                  </div>
                </div>

                {/* Email */}
                {contactInfo.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-500 flex-shrink-0" size={20} />
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-gray-300 hover:text-[#ee8e69] transition-colors break-all text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                )}

                {/* Office Timings */}
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-500" size={20} />
                  <span className="text-gray-300">{contactInfo.officeTimings}</span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Property Sathi. All rights reserved. | प्रॉपर्टी साथी - सभी अधिकार सुरक्षित।
            </p>

            {/* Social Icons - Real Brand Icons */}
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="text-white" size={20} />
              </a>
              
              {/* WhatsApp - Real Icon */}
              <a 
                href={contactInfo.whatsappNumber ? `https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}` : "#"} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              
              {/* Instagram - Real Icon with Gradient */}
              <a href="#" className="w-10 h-10 bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Twitter/X - Real Icon */}
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}