// import { Send, MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

// export default function ContactSection() {
//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0]">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Contact Us for Property Help
//           </h2>
//           <p className="text-xl text-[#b54035] mb-2 font-semibold">
//             प्रॉपर्टी सहायता के लिए संपर्क करें
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#fdeee0] hover:border-[#e8734a]/30 transition-all duration-300">
//             <div className="mb-8">
//               <h3 className="text-3xl font-bold text-gray-800 mb-2">
//                 Quick Contact Form
//               </h3>
//               <p className="text-lg text-[#b54035] font-semibold">
//                 तुरंत संपर्क फॉर्म
//               </p>
//             </div>

//             <form className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Name / नाम
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
//                   placeholder="Enter your name / अपना नाम लिखें"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Phone Number / फोन नंबर
//                 </label>
//                 <input
//                   type="tel"
//                   className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
//                   placeholder="+91 98765 43210"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Service Needed / सेवा की आवश्यकता
//                 </label>
//                 <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]">
//                   <option>Property Buy/Sell - प्रॉपर्टी खरीद/बिक्री</option>
//                   <option>Nakal & Map - नक़ल और नक्शा</option>
//                   <option>Patta Creation - पट्टा बनवाना</option>
//                   <option>Registry Service - रजिस्ट्री सेवा</option>
//                   <option>Legal Consultation - कानूनी सलाह</option>
//                   <option>Property Verification - प्रॉपर्टी जांच</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Message / संदेश
//                 </label>
//                 <textarea
//                   className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all h-32 bg-[#fefdf9] resize-none"
//                   placeholder="Describe your requirement / अपनी आवश्यकता बताएं"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] text-white py-4 rounded-xl font-semibold text-lg hover:from-[#d9543f] hover:to-[#b54035] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
//               >
//                 <Send size={20} />
//                 Send Message / संदेश भेजें
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             {/* WhatsApp Card */}
//             <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <MessageCircle className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     WhatsApp Us
//                   </h3>
//                   <p className="text-[#b54035] font-semibold">
//                     व्हाट्सऐप करें
//                   </p>
//                 </div>
//               </div>
//               <a 
//                 href="https://wa.me/919876543210"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
//               >
//                 <MessageCircle size={20} />
//                 +91 98765 43210
//               </a>
//             </div>

//             {/* Phone Card */}
//             <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#d9543f] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <Phone className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     Call Directly
//                   </h3>
//                   <p className="text-[#b54035] font-semibold">
//                     सीधे कॉल करें
//                   </p>
//                 </div>
//               </div>
//               <a 
//                 href="tel:+919876543210"
//                 className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] hover:from-[#d9543f] hover:to-[#b54035] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
//               >
//                 <Phone size={20} />
//                 +91 98765 43210
//               </a>
//             </div>

//             {/* Address Card */}
//             <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//               <div className="flex items-center gap-6 mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#a73232] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <MapPin className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800">
//                     Visit Our Office
//                   </h3>
//                   <p className="text-[#b54035] font-semibold">
//                     हमारे ऑफिस आएं
//                   </p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-xl p-6 border border-[#fdeee0]">
//                 <p className="font-bold text-gray-800 text-lg mb-2">Surana Homes Office</p>
//                 <p className="text-gray-700 mb-1">Near City Palace, Bhilwara</p>
//                 <p className="text-gray-700 mb-3">Rajasthan - 311001</p>
//                 <div className="border-t border-[#fdeee0] pt-3 mt-3">
//                   <p className="text-[#b54035] font-semibold">सिटी पैलेस के पास, भीलवाड़ा</p>
//                   <p className="text-[#b54035] font-semibold">राजस्थान - 311001</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hours Card */}
//             <div className="group bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300">
//               <div className="flex items-center gap-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#cc3f3f] to-[#b54035] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                   <Clock className="text-white" size={32} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-1">
//                     Open Hours
//                   </h3>
//                   <p className="text-[#b54035] font-semibold text-lg">
//                     24/7 Available / हमेशा उपलब्ध
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         {/* <div className="mt-16 text-center bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] rounded-3xl p-8 shadow-2xl">
//           <h3 className="text-3xl font-bold text-white mb-3">
//             Ready to Get Started?
//           </h3>
//           <p className="text-xl text-white/90 mb-2 font-semibold">
//             शुरू करने के लिए तैयार हैं?
//           </p>
//           <p className="text-white/80 text-lg">
//             Contact us today and let us handle all your property needs!
//           </p>
//         </div> */}
//       </div>
//     </section>
//   );
// }
// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Phone, Mail, MapPin, MessageSquare, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// export default function ContactPage() {
//   // Contact Information State
//   const [contactInfo, setContactInfo] = useState({
//     officeTimings: "Mon - Sat: 9:00 AM - 8:00 PM",
//     phoneNumbers: [],
//     whatsappNumber: "",
//     email: "",
//     officeAddress: "",
//     mapLocation: {
//       embedUrl: "",
//       latitude: null,
//       longitude: null
//     }
//   });

//   const [loadingContact, setLoadingContact] = useState(true);

//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     subject: 'Buy Property',
//     message: ''
//   });

//   // Submit status state
//   const [submitStatus, setSubmitStatus] = useState({
//     loading: false,
//     success: false,
//     error: ""
//   });

//   // Fetch Contact Information on mount
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
//       setLoadingContact(false);
//     }
//   };

//   // Handle input changes
//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
    
//     // Clear error when user starts typing
//     if (submitStatus.error) {
//       setSubmitStatus({ loading: false, success: false, error: "" });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
    
//     // Set loading state
//     setSubmitStatus({ loading: true, success: false, error: "" });

//     try {
//       // Make API call to backend
//       const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contacts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         // Success - show message
//         setSubmitStatus({ loading: false, success: true, error: "" });
        
//         // Reset form after 3 seconds
//         setTimeout(() => {
//           setFormData({
//             name: '',
//             phone: '',
//             subject: 'Buy Property',
//             message: ''
//           });
//           setSubmitStatus({ loading: false, success: false, error: "" });
//         }, 3000);
//       } else {
//         // Error from API
//         setSubmitStatus({ 
//           loading: false, 
//           success: false, 
//           error: data.message || 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।' 
//         });
//       }
//     } catch (error) {
//       // Network error
//       console.error('Error submitting form:', error);
//       setSubmitStatus({ 
//         loading: false, 
//         success: false, 
//         error: 'सर्वर से कनेक्ट नहीं हो पा रहा। कृपया बाद में पुनः प्रयास करें।' 
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white font-sans">
     

//       {/* HERO SECTION */}
//       <section className="relative bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0] pt-32 pb-20">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-[#e8734a] rounded-full blur-[150px] opacity-10"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e15e5e] rounded-full blur-[150px] opacity-10"></div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
//             Contact Us for Property Help
//           </h1>
//           <p className="text-2xl md:text-3xl text-[#b54035] mb-6 font-semibold">
//             प्रॉपर्टी सहायता के लिए संपर्क करें
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full mb-6"></div>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Have questions about buying, selling, or legal paperwork? We are just a call or message away.
//           </p>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className="py-20 bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0]">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

//             {/* LEFT SIDE - CONTACT FORM */}
//             <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#fdeee0] hover:border-[#e8734a]/30 transition-all duration-300">
//               <div className="mb-8">
//                 <h3 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
//                   <Mail className="text-[#e8734a]" />
//                   Quick Contact Form
//                 </h3>
//                 <p className="text-lg text-[#b54035] font-semibold">
//                   तुरंत संपर्क फॉर्म
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
                
//                 {/* Success Message */}
//                 {submitStatus.success && (
//                   <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3 animate-fade-in">
//                     <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
//                     <div>
//                       <p className="text-green-800 font-bold">आपका संदेश भेज दिया गया है!</p>
//                       <p className="text-green-700 text-sm">हम आपसे जल्द संपर्क करेंगे।</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Error Message */}
//                 {submitStatus.error && (
//                   <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3 animate-fade-in">
//                     <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
//                     <div>
//                       <p className="text-red-800 font-bold">त्रुटि!</p>
//                       <p className="text-red-700 text-sm">{submitStatus.error}</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Name Field */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Name / नाम <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
//                     placeholder="Enter your name / अपना नाम लिखें"
//                     required
//                     disabled={submitStatus.loading}
//                   />
//                 </div>

//                 {/* Phone Field */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Phone Number / फोन नंबर <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     pattern="[0-9]{10}"
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
//                     placeholder="+91 98765 43210"
//                     required
//                     disabled={submitStatus.loading}
//                   />
//                 </div>

//                 {/* Subject Field */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Service Needed / सेवा की आवश्यकता
//                   </label>
//                   <select 
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
//                     disabled={submitStatus.loading}
//                   >
//                     <option value="Buy Property">Property Buy/Sell - प्रॉपर्टी खरीद/बिक्री</option>
//                     <option value="Sell Property">Nakal & Map - नक़ल और नक्शा</option>
//                     <option value="Documentation">Patta Creation - पट्टा बनवाना</option>
//                     <option value="Registry">Registry Service - रजिस्ट्री सेवा</option>
//                     <option value="Legal">Legal Consultation - कानूनी सलाह</option>
//                     <option value="Verification">Property Verification - प्रॉपर्टी जांच</option>
//                     <option value="Other">Other - अन्य</option>
//                   </select>
//                 </div>

//                 {/* Message Field */}
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Message / संदेश
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all h-32 bg-[#fefdf9] resize-none"
//                     placeholder="Describe your requirement / अपनी आवश्यकता बताएं"
//                     disabled={submitStatus.loading}
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={submitStatus.loading}
//                   className="w-full bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] text-white py-4 rounded-xl font-semibold text-lg hover:from-[#d9543f] hover:to-[#b54035] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                 >
//                   {submitStatus.loading ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       भेजा जा रहा है...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={20} />
//                       Send Message / संदेश भेजें
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* RIGHT SIDE - CONTACT INFORMATION */}
//             <div className="space-y-6">
              
//               {/* WhatsApp Card - DYNAMIC */}
//               <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//                 <div className="flex items-center gap-6 mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                     {/* Real WhatsApp Icon */}
//                     <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800">
//                       WhatsApp Us
//                     </h3>
//                     <p className="text-[#b54035] font-semibold">
//                       व्हाट्सऐप करें
//                     </p>
//                   </div>
//                 </div>
//                 {loadingContact ? (
//                   <div className="text-center text-gray-400 py-4">Loading...</div>
//                 ) : contactInfo.whatsappNumber ? (
//                   <a 
//                     href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
//                   >
//                     {/* Real WhatsApp Icon in Button */}
//                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//                     </svg>
//                     {contactInfo.whatsappNumber}
//                   </a>
//                 ) : (
//                   <p className="text-gray-400">WhatsApp not available</p>
//                 )}
//               </div>

//               {/* Phone Card - DYNAMIC */}
//               {/* <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//                 <div className="flex items-center gap-6 mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#d9543f] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                     <Phone className="text-white" size={32} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800">
//                       Call Directly
//                     </h3>
//                     <p className="text-[#b54035] font-semibold">
//                       सीधे कॉल करें
//                     </p>
//                   </div>
//                 </div>
//                 {loadingContact ? (
//                   <div className="text-center text-gray-400 py-4">Loading...</div>
//                 ) : contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 ? (
//                   <div className="space-y-3">
//                     {contactInfo.phoneNumbers.map((phone, index) => (
//                       <a 
//                         key={index}
//                         href={`tel:${phone}`}
//                         className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] hover:from-[#d9543f] hover:to-[#b54035] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg w-full justify-center"
//                       >
//                         <Phone size={20} />
//                         {phone}
//                       </a>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-gray-400">Phone numbers not available</p>
//                 )}
//               </div> */}

//               {/* Address Card - DYNAMIC */}
//               <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//                 <div className="flex items-center gap-6 mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#a73232] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                     <MapPin className="text-white" size={32} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800">
//                       Visit Our Office
//                     </h3>
//                     <p className="text-[#b54035] font-semibold">
//                       हमारे ऑफिस आएं
//                     </p>
//                   </div>
//                 </div>
//                 <div className="bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-xl p-6 border border-[#fdeee0]">
//                   {loadingContact ? (
//                     <p className="text-gray-400">Loading address...</p>
//                   ) : (
//                     <>
//                       <p className="font-bold text-gray-800 text-lg mb-2">Surana Homes Office</p>
//                       <p className="text-gray-700 mb-3">{contactInfo.officeAddress || 'Address not available'}</p>
//                     </>
//                   )}
//                 </div>
//               </div>

//               {/* Hours Card - DYNAMIC */}
//               <div className="group bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300">
//                 <div className="flex items-center gap-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#cc3f3f] to-[#b54035] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                     <Clock className="text-white" size={32} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-800 mb-1">
//                       Open Hours
//                     </h3>
//                     {loadingContact ? (
//                       <p className="text-gray-400">Loading...</p>
//                     ) : (
//                       <p className="text-[#b54035] font-semibold text-lg">
//                         {contactInfo.officeTimings}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Email Card - DYNAMIC */}
//               {contactInfo.email && (
//                 <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
//                   <div className="flex items-center gap-6 mb-6">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#4285F4] to-[#2563EB] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
//                       <Mail className="text-white" size={32} />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-gray-800">
//                         Email Us
//                       </h3>
//                       <p className="text-[#b54035] font-semibold">
//                         ईमेल करें
//                       </p>
//                     </div>
//                   </div>
//                   <a 
//                     href={`mailto:${contactInfo.email}`}
//                     className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4285F4] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg break-all"
//                   >
//                     <Mail size={20} />
//                     {contactInfo.email}
//                   </a>
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* MAP SECTION - DYNAMIC */}
   

    
//     </div>
//   );
// }
'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  // Contact Information State
  const [contactInfo, setContactInfo] = useState({
    officeTimings: "Mon - Sat: 9:00 AM - 8:00 PM",
    phoneNumbers: [],
    whatsappNumber: "",
    email: "",
    officeAddress: "",
    mapLocation: {
      embedUrl: "",
      latitude: null,
      longitude: null
    }
  });

  const [loadingContact, setLoadingContact] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Buy Property',
    message: ''
  });

  // Submit status state
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: ""
  });

  // Fetch Contact Information on mount
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
      setLoadingContact(false);
    }
  };

  // Handle input changes
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Clear error when user starts typing
    if (submitStatus.error) {
      setSubmitStatus({ loading: false, success: false, error: "" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    // Set loading state
    setSubmitStatus({ loading: true, success: false, error: "" });

    try {
      // Make API call to backend
      const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success - show message
        setSubmitStatus({ loading: false, success: true, error: "" });
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            subject: 'Buy Property',
            message: ''
          });
          setSubmitStatus({ loading: false, success: false, error: "" });
        }, 3000);
      } else {
        // Error from API
        setSubmitStatus({ 
          loading: false, 
          success: false, 
          error: data.message || 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।' 
        });
      }
    } catch (error) {
      // Network error
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: 'सर्वर से कनेक्ट नहीं हो पा रहा। कृपया बाद में पुनः प्रयास करें।' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
     
      {/* HERO SECTION - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0] pt-20 sm:pt-24 md:pt-32 pb-12 md:pb-16 lg:pb-20">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#e8734a] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#e15e5e] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
            Contact Us for Property Help
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#b54035] mb-4 md:mb-6 font-semibold">
            प्रॉपर्टी सहायता के लिए संपर्क करें
          </p>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have questions about buying, selling, or legal paperwork? We are just a call or message away.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT - Mobile Optimized */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

            {/* LEFT SIDE - CONTACT FORM - Mobile Optimized */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border-2 border-[#fdeee0] hover:border-[#e8734a]/30 transition-all duration-300">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2 md:gap-3">
                  <Mail className="text-[#e8734a] w-6 h-6 md:w-7 md:h-7" />
                  <span className="leading-tight">Quick Contact Form</span>
                </h3>
                <p className="text-base sm:text-lg text-[#b54035] font-semibold">
                  तुरंत संपर्क फॉर्म
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                
                {/* Success Message - Mobile Optimized */}
                {submitStatus.success && (
                  <div className="p-3 md:p-4 bg-green-50 border-2 border-green-200 rounded-lg md:rounded-xl flex items-start gap-2 md:gap-3 animate-fade-in">
                    <CheckCircle className="text-green-600 flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-bold text-sm md:text-base">आपका संदेश भेज दिया गया है!</p>
                      <p className="text-green-700 text-xs md:text-sm">हम आपसे जल्द संपर्क करेंगे।</p>
                    </div>
                  </div>
                )}

                {/* Error Message - Mobile Optimized */}
                {submitStatus.error && (
                  <div className="p-3 md:p-4 bg-red-50 border-2 border-red-200 rounded-lg md:rounded-xl flex items-start gap-2 md:gap-3 animate-fade-in">
                    <AlertCircle className="text-red-600 flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-bold text-sm md:text-base">त्रुटि!</p>
                      <p className="text-red-700 text-xs md:text-sm break-words">{submitStatus.error}</p>
                    </div>
                  </div>
                )}

                {/* Name Field - Mobile Optimized */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Name / नाम <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9] text-sm md:text-base"
                    placeholder="Enter your name / अपना नाम लिखें"
                    required
                    disabled={submitStatus.loading}
                  />
                </div>

                {/* Phone Field - Mobile Optimized */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Phone Number / फोन नंबर <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9] text-sm md:text-base"
                    placeholder="+91 98765 43210"
                    required
                    disabled={submitStatus.loading}
                  />
                </div>

                {/* Subject Field - Mobile Optimized */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Service Needed / सेवा की आवश्यकता
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9] text-sm md:text-base"
                    disabled={submitStatus.loading}
                  >
                    <option value="Buy Property">Property Buy/Sell - प्रॉपर्टी खरीद/बिक्री</option>
                    <option value="Sell Property">Nakal & Map - नक़ल और नक्शा</option>
                    <option value="Documentation">Patta Creation - पट्टा बनवाना</option>
                    <option value="Registry">Registry Service - रजिस्ट्री सेवा</option>
                    <option value="Legal">Legal Consultation - कानूनी सलाह</option>
                    <option value="Verification">Property Verification - प्रॉपर्टी जांच</option>
                    <option value="Other">Other - अन्य</option>
                  </select>
                </div>

                {/* Message Field - Mobile Optimized */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Message / संदेश
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all h-28 md:h-32 bg-[#fefdf9] resize-none text-sm md:text-base"
                    placeholder="Describe your requirement / अपनी आवश्यकता बताएं"
                    disabled={submitStatus.loading}
                  ></textarea>
                </div>

                {/* Submit Button - Mobile Optimized */}
                <button
                  type="submit"
                  disabled={submitStatus.loading}
                  className="w-full bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] text-white py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg hover:from-[#d9543f] hover:to-[#b54035] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-95"
                >
                  {submitStatus.loading ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm md:text-base">भेजा जा रहा है...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">Send Message / संदेश भेजें</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT SIDE - CONTACT INFORMATION - Mobile Optimized */}
            <div className="space-y-4 md:space-y-6">
              
              {/* WhatsApp Card - Mobile Optimized */}
              <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    {/* Real WhatsApp Icon */}
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                      WhatsApp Us
                    </h3>
                    <p className="text-[#b54035] font-semibold text-sm md:text-base">
                      व्हाट्सऐप करें
                    </p>
                  </div>
                </div>
                {loadingContact ? (
                  <div className="text-center text-gray-400 py-4 text-sm md:text-base">Loading...</div>
                ) : contactInfo.whatsappNumber ? (
                  <a 
                    href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all transform hover:scale-105 shadow-lg w-full active:scale-95"
                  >
                    {/* Real WhatsApp Icon in Button */}
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="break-all">{contactInfo.whatsappNumber}</span>
                  </a>
                ) : (
                  <p className="text-gray-400 text-sm md:text-base">WhatsApp not available</p>
                )}
              </div>

              {/* Address Card - Mobile Optimized */}
              <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#e15e5e] to-[#a73232] rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="text-white w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                      Visit Our Office
                    </h3>
                    <p className="text-[#b54035] font-semibold text-sm md:text-base">
                      हमारे ऑफिस आएं
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-lg md:rounded-xl p-4 md:p-6 border border-[#fdeee0]">
                  {loadingContact ? (
                    <p className="text-gray-400 text-sm md:text-base">Loading address...</p>
                  ) : (
                    <>
                      <p className="font-bold text-gray-800 text-base md:text-lg mb-2">Surana Homes Office</p>
                      <p className="text-gray-700 text-sm md:text-base mb-3 leading-relaxed">{contactInfo.officeAddress || 'Address not available'}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Hours Card - Mobile Optimized */}
              <div className="group bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#cc3f3f] to-[#b54035] rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                    <Clock className="text-white w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 leading-tight">
                      Open Hours
                    </h3>
                    {loadingContact ? (
                      <p className="text-gray-400 text-sm md:text-base">Loading...</p>
                    ) : (
                      <p className="text-[#b54035] font-semibold text-base md:text-lg break-words">
                        {contactInfo.officeTimings}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Email Card - Mobile Optimized */}
              {contactInfo.email && (
                <div className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#4285F4] to-[#2563EB] rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="text-white w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                        Email Us
                      </h3>
                      <p className="text-[#b54035] font-semibold text-sm md:text-base">
                        ईमेल करें
                      </p>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#4285F4] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all transform hover:scale-105 shadow-lg w-full break-all active:scale-95"
                  >
                    <Mail size={18} className="md:w-5 md:h-5 flex-shrink-0" />
                    <span className="break-all">{contactInfo.email}</span>
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}