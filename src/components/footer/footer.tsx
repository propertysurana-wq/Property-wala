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
'use client'
import { useState, useEffect } from "react";
import { Home, Phone, MapPin, Clock, Facebook, MessageCircle, Instagram, X, Mail } from "lucide-react";

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
      const response = await fetch('https://propertybackend-6bou.onrender.com/api/contact');
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
    <footer className="bg-black text-white mt-0 pt-0"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + Text */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold block">Property Sathi</span>
                <span className="text-xs text-green-400">Property Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-6">
              Your trusted partner in finding your dream home and perfect property.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-4 text-green-400 text-lg">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/About" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="/Process" className="hover:text-green-400 transition">Properties</a></li>
              <li><a href="/service" className="hover:text-green-400 transition">sevice</a></li>
              <li><a href="/Contact" className="hover:text-green-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold mb-4 text-green-400 text-lg">Services</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition">Buy Property</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Sell Property</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Rent Property</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Property Management</a></li>
            </ul>
          </div>

          {/* Contact Info - Dynamic */}
          <div>
            <h5 className="font-bold mb-4 text-green-400 text-lg">Contact Info</h5>
            {loading ? (
              <div className="text-sm text-gray-400">Loading...</div>
            ) : (
              <ul className="space-y-3 text-sm text-gray-300">
                {/* Office Address */}
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="break-words">{contactInfo.officeAddress}</span>
                </li>

                {/* Phone Numbers */}
                {contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 && 
                  contactInfo.phoneNumbers.map((phone, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <a href={`tel:${phone}`} className="hover:text-green-400 transition">
                        {phone}
                      </a>
                    </li>
                  ))
                }

                {/* Email */}
                {contactInfo.email && (
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="hover:text-green-400 transition break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                )}

                {/* Office Timings */}
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.officeTimings}</span>
                </li>
              </ul>
            )}
          </div>

        </div>

        {/* Social Media & Bottom */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a 
              href={contactInfo.whatsappNumber ? `https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}` : "#"} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all transform hover:scale-110"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all transform hover:scale-110">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-all transform hover:scale-110">
              <X className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Decorative Dots */}
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Property Sathi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}