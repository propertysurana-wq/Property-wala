// // 'use client'
// // import React, { useState } from 'react';
// // import { Phone, Mail, MapPin, MessageSquare, Send, ArrowRight, Clock } from 'lucide-react';
// // import Footer from '../footer/footer';
// // import Header from "@/components/header/header";
// // export default function ContactPage() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     phone: '',
// //     subject: 'Buy Property',
// //     message: ''
// //   });

// //   const handleChange = (e:any) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e:any) => {
// //     e.preventDefault();
// //     // Here you would typically send the data to your backend
// //     alert("आपका संदेश भेज दिया गया है! हम आपसे जल्द संपर्क करेंगे।");
// //   };

// //   return (
// //     <div className="min-h-screen bg-slate-50 font-sans">
// //       <Header/>
// //       {/* --- HERO HEADER --- */}
// //       <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
// //         {/* Background Decorative Elements */}
// //         <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
// //         <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
// //         <div className="container mx-auto px-4 text-center relative z-10">
// //           <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">
// //             Available 24/7 Support
// //           </span>
// //           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
// //             संपर्क करें <span className="text-emerald-500">(Contact Us)</span>
// //           </h1>
// //           <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
// //             Have questions about buying, selling, or legal paperwork? We are just a call or message away.
// //             <span className="block mt-2 text-emerald-400 font-medium">प्रॉपर्टी से जुड़े किसी भी सवाल के लिए हमें अभी कॉल करें।</span>
// //           </p>
// //         </div>
// //       </section>

// //       <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

// //           {/* --- LEFT: CONTACT INFO (4 Columns) --- */}
// //           <div className="lg:col-span-4 space-y-6">
            
// //             {/* Call Card */}
// //             <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:border-emerald-500 transition-all duration-300 group">
// //               <div className="flex items-center justify-between mb-6">
// //                 <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
// //                   <Phone size={28} />
// //                 </div>
// //                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Now</span>
// //               </div>
// //               <h3 className="text-2xl font-bold text-slate-900 mb-1">फ़ोन करें</h3>
// //               <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
// //                 <Clock size={14} /> 9:00 AM - 8:00 PM
// //               </p>
// //               <div className="space-y-3">
// //                 <a href="tel:+919876543210" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 group/link transition-colors">
// //                   <span className="text-lg font-bold text-slate-800 group-hover/link:text-emerald-700">+91 98765 43210</span>
// //                   <ArrowRight size={18} className="text-slate-400 group-hover/link:text-emerald-600" />
// //                 </a>
// //                 <a href="tel:+919876543211" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 group/link transition-colors">
// //                   <span className="text-lg font-bold text-slate-800 group-hover/link:text-emerald-700">+91 98765 43211</span>
// //                   <ArrowRight size={18} className="text-slate-400 group-hover/link:text-emerald-600" />
// //                 </a>
// //               </div>
// //             </div>

// //             {/* WhatsApp / Email Card */}
// //             <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
// //               <div className="relative z-10">
// //                 <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10">
// //                   <MessageSquare size={28} />
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-2">व्हाट्सएप / ईमेल</h3>
// //                 <p className="text-slate-400 text-sm mb-8">दस्तावेज़ भेजने के लिए (Send Documents)</p>
                
// //                 <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all mb-4 shadow-lg shadow-emerald-900/50">
// //                   WhatsApp Chat
// //                 </a>
// //                 <a href="mailto:info@property.com" className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all border border-white/10">
// //                   info@property.com
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Address Card */}
// //             <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4">
// //               <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
// //               <div>
// //                 <h3 className="text-lg font-bold text-slate-900 mb-2">हमारा ऑफिस (Office)</h3>
// //                 <p className="text-slate-600 leading-relaxed">
// //                   Shop No. 12, Main Market, <br/>
// //                   Bhilwara Road, Rajasthan - 311001
// //                 </p>
// //               </div>
// //             </div>

// //           </div>

// //           {/* --- RIGHT: MESSAGE FORM (8 Columns) --- */}
// //           <div className="lg:col-span-8">
// //             <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-200 h-full flex flex-col">
              
// //               <div className="bg-slate-50 p-8 border-b border-slate-100">
// //                 <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
// //                   <Mail className="text-emerald-600" />
// //                   संदेश भेजें (Send Message)
// //                 </h2>
// //                 <p className="text-slate-500 mt-2">Fill the form below, and we will call you back within 24 hours.</p>
// //               </div>

// //               <div className="p-8 md:p-12 flex-grow">
// //                 <form onSubmit={handleSubmit} className="space-y-8">
                  
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                     <div className="space-y-2">
// //                       <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex gap-1">
// //                         Name <span className="text-red-500">*</span>
// //                       </label>
// //                       <input 
// //                         type="text" 
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="आपका पूरा नाम"
// //                         className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
// //                         required
// //                       />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex gap-1">
// //                         Phone Number <span className="text-red-500">*</span>
// //                       </label>
// //                       <input 
// //                         type="tel" 
// //                         name="phone"
// //                         value={formData.phone}
// //                         onChange={handleChange}
// //                         placeholder="आपका मोबाइल नंबर"
// //                         className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">
// //                       Subject (विषय)
// //                     </label>
// //                     <div className="relative">
// //                       <select 
// //                         name="subject"
// //                         value={formData.subject}
// //                         onChange={handleChange}
// //                         className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-700 font-medium appearance-none cursor-pointer"
// //                       >
// //                         <option value="Buy Property">प्रॉपर्टी खरीदनी है (Buy Property)</option>
// //                         <option value="Sell Property">प्रॉपर्टी बेचनी है (Sell Property)</option>
// //                         <option value="Documentation">दस्तावेज़/कागजात बनवाने हैं (Documentation)</option>
// //                         <option value="Other">अन्य पूछताछ (Other Inquiry)</option>
// //                       </select>
// //                       <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
// //                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">
// //                       Message (संदेश)
// //                     </label>
// //                     <textarea 
// //                       name="message"
// //                       value={formData.message}
// //                       onChange={handleChange}
// //                       rows={6}
// //                       placeholder="विस्तार से लिखें..."
// //                       className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400 resize-none"
// //                     ></textarea>
// //                   </div>

// //                   <div className="pt-4">
// //                     <button 
// //                       type="submit"
// //                       className="w-full md:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95"
// //                     >
// //                       <Send className="w-5 h-5" />
// //                       संदेश भेजें (Send Message)
// //                     </button>
// //                   </div>

// //                 </form>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       {/* --- MAP SECTION --- */}
// //       <section className="h-[400px] w-full bg-slate-200 relative border-t border-slate-300">
// //         <iframe 
// //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.4676837077365!2d74.63991631500473!3d25.34796098382755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2368724738f%3A0x673c683b771631f2!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
// //           width="100%" 
// //           height="100%" 
// //           style={{border:0}} 
// //           allowFullScreen={true} 
// //           loading="lazy"
// //           className="filter grayscale hover:grayscale-0 transition-all duration-700"
// //         ></iframe>
// //       </section>
// // <Footer/>
// //     </div>
// //   );
// // }
// 'use client'
// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, MessageSquare, Send, ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';
// import Footer from '../footer/footer';
// import Header from "@/components/header/header";

// export default function ContactPage() {
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
//     error: null
//   });

//   // Handle input changes
//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
    
//     // Clear error when user starts typing
//     if (submitStatus.error) {
//       setSubmitStatus({ loading: false, success: false, error: null });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
    
//     // Set loading state
//     setSubmitStatus({ loading: true, success: false, error: null });

//     try {
//       // Make API call to backend
//       const response = await fetch('https://propertybackend-6bou.onrender.com/api/contacts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         // Success - show message
//         setSubmitStatus({ loading: false, success: true, error: null });
        
//         // Reset form after 3 seconds
//         setTimeout(() => {
//           setFormData({
//             name: '',
//             phone: '',
//             subject: 'Buy Property',
//             message: ''
//           });
//           setSubmitStatus({ loading: false, success: false, error: null });
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
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Header/>
      
//       {/* HERO SECTION */}
//       <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">
//             Available 24/7 Support
//           </span>
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
//             संपर्क करें <span className="text-emerald-500">(Contact Us)</span>
//           </h1>
//           <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//             Have questions about buying, selling, or legal paperwork? We are just a call or message away.
//             <span className="block mt-2 text-emerald-400 font-medium">प्रॉपर्टी से जुड़े किसी भी सवाल के लिए हमें अभी कॉल करें।</span>
//           </p>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//           {/* LEFT SIDEBAR - CONTACT INFO */}
//           <div className="lg:col-span-4 space-y-6">
            
//             {/* Phone Card */}
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:border-emerald-500 transition-all duration-300 group">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
//                   <Phone size={28} />
//                 </div>
//                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Now</span>
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-1">फ़ोन करें</h3>
//               <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
//                 <Clock size={14} /> 9:00 AM - 8:00 PM
//               </p>
//               <div className="space-y-3">
//                 <a href="tel:+919876543210" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 group/link transition-colors">
//                   <span className="text-lg font-bold text-slate-800 group-hover/link:text-emerald-700">+91 98765 43210</span>
//                   <ArrowRight size={18} className="text-slate-400 group-hover/link:text-emerald-600" />
//                 </a>
//                 <a href="tel:+919876543211" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 group/link transition-colors">
//                   <span className="text-lg font-bold text-slate-800 group-hover/link:text-emerald-700">+91 98765 43211</span>
//                   <ArrowRight size={18} className="text-slate-400 group-hover/link:text-emerald-600" />
//                 </a>
//               </div>
//             </div>

//             {/* WhatsApp / Email Card */}
//             <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10">
//                   <MessageSquare size={28} />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-2">व्हाट्सएप / ईमेल</h3>
//                 <p className="text-slate-400 text-sm mb-8">दस्तावेज़ भेजने के लिए (Send Documents)</p>
                
//                 <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all mb-4 shadow-lg shadow-emerald-900/50">
//                   WhatsApp Chat
//                 </a>
//                 <a href="mailto:info@property.com" className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all border border-white/10">
//                   info@property.com
//                 </a>
//               </div>
//             </div>

//             {/* Address Card */}
//             <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4">
//               <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
//               <div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-2">हमारा ऑफिस (Office)</h3>
//                 <p className="text-slate-600 leading-relaxed">
//                   Shop No. 12, Main Market, <br/>
//                   Bhilwara Road, Rajasthan - 311001
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT SIDE - CONTACT FORM */}
//           <div className="lg:col-span-8">
//             <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-200 h-full flex flex-col">
              
//               {/* Form Header */}
//               <div className="bg-slate-50 p-8 border-b border-slate-100">
//                 <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
//                   <Mail className="text-emerald-600" />
//                   संदेश भेजें (Send Message)
//                 </h2>
//                 <p className="text-slate-500 mt-2">Fill the form below, and we will call you back within 24 hours.</p>
//               </div>

//               {/* Form Body */}
//               <div className="p-8 md:p-12 flex-grow">
//                 <form onSubmit={handleSubmit} className="space-y-8">
                  
//                   {/* Success Message */}
//                   {submitStatus.success && (
//                     <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 animate-fade-in">
//                       <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
//                       <div>
//                         <p className="text-emerald-800 font-bold">आपका संदेश भेज दिया गया है!</p>
//                         <p className="text-emerald-700 text-sm">हम आपसे जल्द संपर्क करेंगे।</p>
//                       </div>
//                     </div>
//                   )}

//                   {/* Error Message */}
//                   {submitStatus.error && (
//                     <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-fade-in">
//                       <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
//                       <div>
//                         <p className="text-red-800 font-bold">त्रुटि!</p>
//                         <p className="text-red-700 text-sm">{submitStatus.error}</p>
//                       </div>
//                     </div>
//                   )}
                  
//                   {/* Name and Phone Fields */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="space-y-2">
//                       <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex gap-1">
//                         Name <span className="text-red-500">*</span>
//                       </label>
//                       <input 
//                         type="text" 
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="आपका पूरा नाम"
//                         className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
//                         required
//                         disabled={submitStatus.loading}
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex gap-1">
//                         Phone Number <span className="text-red-500">*</span>
//                       </label>
//                       <input 
//                         type="tel" 
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="आपका मोबाइल नंबर"
//                         pattern="[0-9]{10}"
//                         className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
//                         required
//                         disabled={submitStatus.loading}
//                       />
//                     </div>
//                   </div>

//                   {/* Subject Field */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">
//                       Subject (विषय)
//                     </label>
//                     <div className="relative">
//                       <select 
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-700 font-medium appearance-none cursor-pointer"
//                         disabled={submitStatus.loading}
//                       >
//                         <option value="Buy Property">प्रॉपर्टी खरीदनी है (Buy Property)</option>
//                         <option value="Sell Property">प्रॉपर्टी बेचनी है (Sell Property)</option>
//                         <option value="Documentation">दस्तावेज़/कागजात बनवाने हैं (Documentation)</option>
//                         <option value="Other">अन्य पूछताछ (Other Inquiry)</option>
//                       </select>
//                       <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Message Field */}
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">
//                       Message (संदेश)
//                     </label>
//                     <textarea 
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={6}
//                       placeholder="विस्तार से लिखें..."
//                       className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400 resize-none"
//                       disabled={submitStatus.loading}
//                     ></textarea>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="pt-4">
//                     <button 
//                       type="submit"
//                       disabled={submitStatus.loading}
//                       className="w-full md:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                     >
//                       {submitStatus.loading ? (
//                         <>
//                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                           भेजा जा रहा है...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5" />
//                           संदेश भेजें (Send Message)
//                         </>
//                       )}
//                     </button>
//                   </div>

//                 </form>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* MAP SECTION */}
//       <section className="h-[400px] w-full bg-slate-200 relative border-t border-slate-300">
//         <iframe 
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.4676837077365!2d74.63991631500473!3d25.34796098382755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2368724738f%3A0x673c683b771631f2!2sBhilwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
//           width="100%" 
//           height="100%" 
//           style={{border:0}} 
//           allowFullScreen={true} 
//           loading="lazy"
//           className="filter grayscale hover:grayscale-0 transition-all duration-700"
//         ></iframe>
//       </section>

//       <Footer/>
//     </div>
//   );
// }
'use client'
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, ArrowRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '../header/header';
import Footer from '../footer/footer';

export default function ContactPage() {
  // Contact Information State
  const [contactInfo, setContactInfo] = useState({
    officeTimings: "9:00 AM - 8:00 PM",
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
      const response = await fetch('https://propertybackend-6bou.onrender.com/api/contact');
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
      const response = await fetch('https://propertybackend-6bou.onrender.com/api/contacts', {
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
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar/>
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[150px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-800 rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">
            Available 24/7 Support
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            संपर्क करें <span className="text-emerald-500">(Contact Us)</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about buying, selling, or legal paperwork? We are just a call or message away.
            <span className="block mt-2 text-emerald-400 font-medium">प्रॉपर्टी से जुड़े किसी भी सवाल के लिए हमें अभी कॉल करें।</span>
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT SIDEBAR - CONTACT INFO */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Phone Card - DYNAMIC */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:border-emerald-500 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Now</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">फ़ोन करें</h3>
              <p className="text-slate-500 text-sm mb-6 flex items-center gap-2">
                <Clock size={14} /> {loadingContact ? 'Loading...' : contactInfo.officeTimings}
              </p>
              <div className="space-y-3">
                {loadingContact ? (
                  <div className="text-center text-slate-400 py-4">Loading phone numbers...</div>
                ) : contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 ? (
                  contactInfo.phoneNumbers.map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone}`} 
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 group/link transition-colors"
                    >
                      <span className="text-lg font-bold text-slate-800 group-hover/link:text-emerald-700">{phone}</span>
                      <ArrowRight size={18} className="text-slate-400 group-hover/link:text-emerald-600" />
                    </a>
                  ))
                ) : (
                  <div className="text-center text-slate-400 py-4">No phone numbers available</div>
                )}
              </div>
            </div>

            {/* WhatsApp / Email Card - DYNAMIC */}
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">व्हाट्सएप / ईमेल</h3>
                <p className="text-slate-400 text-sm mb-8">दस्तावेज़ भेजने के लिए (Send Documents)</p>
                
                {loadingContact ? (
                  <div className="text-center text-slate-300 py-4">Loading...</div>
                ) : (
                  <>
                    {contactInfo.whatsappNumber && (
                      <a 
                        href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all mb-4 shadow-lg shadow-emerald-900/50"
                      >
                        WhatsApp Chat
                      </a>
                    )}
                    {contactInfo.email && (
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all border border-white/10 break-all"
                      >
                        {contactInfo.email}
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Address Card - DYNAMIC */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4">
              <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">हमारा ऑफिस (Office)</h3>
                {loadingContact ? (
                  <p className="text-slate-400">Loading address...</p>
                ) : (
                  <p className="text-slate-600 leading-relaxed">
                    {contactInfo.officeAddress || 'Address not available'}
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-200 h-full flex flex-col">
              
              {/* Form Header */}
              <div className="bg-slate-50 p-8 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <Mail className="text-emerald-600" />
                  संदेश भेजें (Send Message)
                </h2>
                <p className="text-slate-500 mt-2">Fill the form below, and we will call you back within 24 hours.</p>
              </div>

              {/* Form Body */}
              <div className="p-8 md:p-12 flex-grow">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Success Message */}
                  {submitStatus.success && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 animate-fade-in">
                      <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="text-emerald-800 font-bold">आपका संदेश भेज दिया गया है!</p>
                        <p className="text-emerald-700 text-sm">हम आपसे जल्द संपर्क करेंगे।</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus.error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-fade-in">
                      <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="text-red-800 font-bold">त्रुटि!</p>
                        <p className="text-red-700 text-sm">{submitStatus.error}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Name and Phone Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex gap-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="आपका पूरा नाम"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                        required
                        disabled={submitStatus.loading}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 uppercase tracking-wide flex gap-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="आपका मोबाइल नंबर"
                        pattern="[0-9]{10}"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                        required
                        disabled={submitStatus.loading}
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                      Subject (विषय)
                    </label>
                    <div className="relative">
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-700 font-medium appearance-none cursor-pointer"
                        disabled={submitStatus.loading}
                      >
                        <option value="Buy Property">प्रॉपर्टी खरीदनी है (Buy Property)</option>
                        <option value="Sell Property">प्रॉपर्टी बेचनी है (Sell Property)</option>
                        <option value="Documentation">दस्तावेज़/कागजात बनवाने हैं (Documentation)</option>
                        <option value="Other">अन्य पूछताछ (Other Inquiry)</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                      Message (संदेश)
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="विस्तार से लिखें..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900 font-medium placeholder:text-slate-400 resize-none"
                      disabled={submitStatus.loading}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={submitStatus.loading}
                      className="w-full md:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submitStatus.loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          भेजा जा रहा है...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          संदेश भेजें (Send Message)
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MAP SECTION - DYNAMIC */}
      <section className="h-[400px] w-full bg-slate-200 relative border-t border-slate-300">
        {loadingContact ? (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-slate-300 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
              Loading map...
            </div>
          </div>
        ) : contactInfo.mapLocation?.embedUrl ? (
          <iframe 
            src={contactInfo.mapLocation.embedUrl}
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            className="filter grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-100">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-slate-300" />
              <p className="font-medium">Map location not available</p>
            </div>
          </div>
        )}
      </section>
<Footer/>
    </div>
  );
}