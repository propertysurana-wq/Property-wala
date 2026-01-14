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
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Clear error when user starts typing
    if (submitStatus.error) {
      setSubmitStatus({ loading: false, success: false, error: "" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
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
     

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0] pt-32 pb-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e8734a] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e15e5e] rounded-full blur-[150px] opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Contact Us for Property Help
          </h1>
          <p className="text-2xl md:text-3xl text-[#b54035] mb-6 font-semibold">
            प्रॉपर्टी सहायता के लिए संपर्क करें
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about buying, selling, or legal paperwork? We are just a call or message away.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT SIDE - CONTACT FORM */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#fdeee0] hover:border-[#e8734a]/30 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                  <Mail className="text-[#e8734a]" />
                  Quick Contact Form
                </h3>
                <p className="text-lg text-[#b54035] font-semibold">
                  तुरंत संपर्क फॉर्म
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Success Message */}
                {submitStatus.success && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3 animate-fade-in">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-green-800 font-bold">आपका संदेश भेज दिया गया है!</p>
                      <p className="text-green-700 text-sm">हम आपसे जल्द संपर्क करेंगे।</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus.error && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3 animate-fade-in">
                    <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                    <div>
                      <p className="text-red-800 font-bold">त्रुटि!</p>
                      <p className="text-red-700 text-sm">{submitStatus.error}</p>
                    </div>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name / नाम <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
                    placeholder="Enter your name / अपना नाम लिखें"
                    required
                    disabled={submitStatus.loading}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number / फोन नंबर <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
                    placeholder="+91 98765 43210"
                    required
                    disabled={submitStatus.loading}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service Needed / सेवा की आवश्यकता
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all bg-[#fefdf9]"
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

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message / संदेश
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#e8734a] focus:outline-none transition-all h-32 bg-[#fefdf9] resize-none"
                    placeholder="Describe your requirement / अपनी आवश्यकता बताएं"
                    disabled={submitStatus.loading}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus.loading}
                  className="w-full bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] text-white py-4 rounded-xl font-semibold text-lg hover:from-[#d9543f] hover:to-[#b54035] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitStatus.loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      भेजा जा रहा है...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message / संदेश भेजें
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT SIDE - CONTACT INFORMATION */}
            <div className="space-y-6">
              
              {/* WhatsApp Card - DYNAMIC */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {/* Real WhatsApp Icon */}
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      WhatsApp Us
                    </h3>
                    <p className="text-[#b54035] font-semibold">
                      व्हाट्सऐप करें
                    </p>
                  </div>
                </div>
                {loadingContact ? (
                  <div className="text-center text-gray-400 py-4">Loading...</div>
                ) : contactInfo.whatsappNumber ? (
                  <a 
                    href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    {/* Real WhatsApp Icon in Button */}
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {contactInfo.whatsappNumber}
                  </a>
                ) : (
                  <p className="text-gray-400">WhatsApp not available</p>
                )}
              </div>

              {/* Phone Card - DYNAMIC */}
              {/* <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e8734a] to-[#d9543f] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Call Directly
                    </h3>
                    <p className="text-[#b54035] font-semibold">
                      सीधे कॉल करें
                    </p>
                  </div>
                </div>
                {loadingContact ? (
                  <div className="text-center text-gray-400 py-4">Loading...</div>
                ) : contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 ? (
                  <div className="space-y-3">
                    {contactInfo.phoneNumbers.map((phone, index) => (
                      <a 
                        key={index}
                        href={`tel:${phone}`}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] hover:from-[#d9543f] hover:to-[#b54035] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg w-full justify-center"
                      >
                        <Phone size={20} />
                        {phone}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">Phone numbers not available</p>
                )}
              </div> */}

              {/* Address Card - DYNAMIC */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e15e5e] to-[#a73232] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Visit Our Office
                    </h3>
                    <p className="text-[#b54035] font-semibold">
                      हमारे ऑफिस आएं
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-xl p-6 border border-[#fdeee0]">
                  {loadingContact ? (
                    <p className="text-gray-400">Loading address...</p>
                  ) : (
                    <>
                      <p className="font-bold text-gray-800 text-lg mb-2">Surana Homes Office</p>
                      <p className="text-gray-700 mb-3">{contactInfo.officeAddress || 'Address not available'}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Hours Card - DYNAMIC */}
              <div className="group bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#cc3f3f] to-[#b54035] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Clock className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      Open Hours
                    </h3>
                    {loadingContact ? (
                      <p className="text-gray-400">Loading...</p>
                    ) : (
                      <p className="text-[#b54035] font-semibold text-lg">
                        {contactInfo.officeTimings}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Email Card - DYNAMIC */}
              {contactInfo.email && (
                <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-[#fdeee0] hover:border-[#e8734a]/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4285F4] to-[#2563EB] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Email Us
                      </h3>
                      <p className="text-[#b54035] font-semibold">
                        ईमेल करें
                      </p>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4285F4] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg break-all"
                  >
                    <Mail size={20} />
                    {contactInfo.email}
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION - DYNAMIC */}
   

    
    </div>
  );
}
// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';

// export default function ContactPage() {
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
  
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     subject: 'Buy Property',
//     message: ''
//   });

//   const [submitStatus, setSubmitStatus] = useState({
//     loading: false,
//     success: false,
//     error: ""
//   });

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

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (submitStatus.error) {
//       setSubmitStatus({ loading: false, success: false, error: "" });
//     }
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setSubmitStatus({ loading: true, success: false, error: "" });

//     try {
//       const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contacts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setSubmitStatus({ loading: false, success: true, error: "" });
//         setTimeout(() => {
//           setFormData({ name: '', phone: '', subject: 'Buy Property', message: '' });
//           setSubmitStatus({ loading: false, success: false, error: "" });
//         }, 3000);
//       } else {
//         setSubmitStatus({ loading: false, success: false, error: data.message || 'Something went wrong.' });
//       }
//     } catch (error) {
//       setSubmitStatus({ loading: false, success: false, error: 'Network error. Please try again.' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white font-sans">
      
//       {/* HERO SECTION */}
//       {/* <section className="relative bg-gradient-to-r from-[#fdeee0] via-[#fefbf0] to-[#fce8e8] pt-32 pb-24 overflow-hidden">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-[#d9543f] rounded-full blur-[150px] opacity-10"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cc3f3f] rounded-full blur-[150px] opacity-10"></div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <span className="text-[#cc3f3f] font-bold uppercase tracking-widest text-xs border border-[#cc3f3f]/30 bg-white/50 px-4 py-1.5 rounded-full inline-block mb-4">
//             Contact Us
//           </span>
//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
//             We'd love to <span className="text-[#d9543f]">hear from you</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Have questions about buying, selling, or legal paperwork? We are just a call or message away.
//             <span className="block mt-2 text-[#b54035] font-semibold">प्रॉपर्टी सहायता के लिए संपर्क करें</span>
//           </p>
//         </div>
//       </section> */}
//       <section className="relative bg-gradient-to-br from-[#fefdf9] via-white to-[#fef7f0] pt-32 pb-20">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-[#e8734a] rounded-full blur-[150px] opacity-10"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e15e5e] rounded-full blur-[150px] opacity-10"></div>
        
//        <div className="container mx-auto px-4 text-center relative z-10">
//          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
//            Contact Us for Property Help
//         </h1>         <p className="text-2xl md:text-3xl text-[#b54035] mb-6 font-semibold">
//             प्रॉपर्टी सहायता के लिए संपर्क करें
//        </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full mb-6"></div>
//            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//              Have questions about buying, selling, or legal paperwork? We are just a call or message away.
//           </p>
//         </div>       </section>

//       {/* MAIN CONTENT */}
//       <section className="py-20 relative z-20 -mt-16 container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//           {/* LEFT SIDE - CONTACT INFO */}
//           <div className="lg:col-span-4 space-y-6">
            
//             {/* Phone Card */}
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#fdeee0] hover:border-[#d9543f] transition-all duration-300 group">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 bg-[#fce8e8] text-[#cc3f3f] rounded-2xl flex items-center justify-center group-hover:bg-[#cc3f3f] group-hover:text-white transition-colors duration-300">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
//                   <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Direct Line</p>
//                 </div>
//               </div>
              
//               {loadingContact ? (
//                 <div className="h-8 bg-gray-100 rounded w-3/4 animate-pulse"></div>
//               ) : contactInfo.phoneNumbers && contactInfo.phoneNumbers.length > 0 ? (
//                 <div className="space-y-3">
//                   {contactInfo.phoneNumbers.map((phone: any, index: number) => (
//                     <a key={index} href={`tel:${phone}`} className="block text-2xl font-bold text-gray-900 hover:text-[#d9543f] transition-colors">
//                       {phone}
//                     </a>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-400">Loading...</p>
//               )}
//             </div>

//             {/* WhatsApp Card */}
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#fdeee0] hover:border-[#25D366] transition-all duration-300 group">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
//                   <MessageCircle size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900">WhatsApp</h3>
//                   <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Chat with us</p>
//                 </div>
//               </div>
              
//               {contactInfo.whatsappNumber ? (
//                 <a 
//                   href={`https://wa.me/${contactInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-lg gap-2"
//                 >
//                   <MessageCircle size={20} /> Chat Now
//                 </a>
//               ) : (
//                 <p className="text-gray-400">Not Available</p>
//               )}
//             </div>

//             {/* Address & Hours */}
//             <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#fdeee0] space-y-6">
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <MapPin className="text-[#d9543f]" size={20} />
//                   <h4 className="font-bold text-gray-900">Visit Office</h4>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed text-sm ml-8">
//                   {loadingContact ? 'Loading address...' : contactInfo.officeAddress}
//                 </p>
//               </div>
              
//               <div className="pt-6 border-t border-gray-100">
//                 <div className="flex items-center gap-3 mb-2">
//                   <Clock className="text-[#d9543f]" size={20} />
//                   <h4 className="font-bold text-gray-900">Working Hours</h4>
//                 </div>
//                 <p className="text-gray-600 text-sm ml-8 font-medium">
//                   {loadingContact ? 'Loading hours...' : contactInfo.officeTimings}
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT SIDE - FORM */}
//           <div className="lg:col-span-8">
//             <div className="bg-white rounded-[40px] shadow-2xl border border-[#fdeee0] overflow-hidden h-full flex flex-col">
              
//               <div className="bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] p-8 md:p-10 text-white">
//                 <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
//                 <p className="text-white/90">Fill the form and we will get back to you shortly.</p>
//               </div>

//               <div className="p-8 md:p-12 flex-grow bg-[#fffbf2]">
                
//                 {/* Status Messages */}
//                 {submitStatus.success && (
//                   <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-800 animate-in fade-in">
//                     <CheckCircle size={20} />
//                     <div>
//                       <p className="font-bold">Message Sent Successfully!</p>
//                       <p className="text-sm">We will contact you shortly.</p>
//                     </div>
//                   </div>
//                 )}

//                 {submitStatus.error && (
//                   <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-800 animate-in fade-in">
//                     <AlertCircle size={20} />
//                     <p className="font-medium">{submitStatus.error}</p>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Name / नाम <span className="text-[#d9543f]">*</span></label>
//                       <input 
//                         type="text" 
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-5 py-3.5 bg-white border border-[#fdeee0] rounded-xl focus:outline-none focus:border-[#d9543f] focus:ring-4 focus:ring-[#d9543f]/10 transition-all text-gray-900 font-medium placeholder:text-gray-400"
//                         placeholder="Your full name"
//                         required
//                         disabled={submitStatus.loading}
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Phone / फोन <span className="text-[#d9543f]">*</span></label>
//                       <input 
//                         type="tel" 
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         pattern="[0-9]{10}"
//                         className="w-full px-5 py-3.5 bg-white border border-[#fdeee0] rounded-xl focus:outline-none focus:border-[#d9543f] focus:ring-4 focus:ring-[#d9543f]/10 transition-all text-gray-900 font-medium placeholder:text-gray-400"
//                         placeholder="10-digit mobile number"
//                         required
//                         disabled={submitStatus.loading}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Service Needed / सेवा</label>
//                     <select 
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className="w-full px-5 py-3.5 bg-white border border-[#fdeee0] rounded-xl focus:outline-none focus:border-[#d9543f] focus:ring-4 focus:ring-[#d9543f]/10 transition-all text-gray-700 font-medium cursor-pointer appearance-none"
//                       disabled={submitStatus.loading}
//                     >
//                       <option value="Buy Property">Property Buy/Sell</option>
//                       <option value="Sell Property">Nakal & Map Extraction</option>
//                       <option value="Documentation">Patta Creation</option>
//                       <option value="Registry">Registry Assistance</option>
//                       <option value="Legal">Legal Consultancy</option>
//                       <option value="Other">Other Inquiry</option>
//                     </select>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Message / संदेश</label>
//                     <textarea 
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={4}
//                       className="w-full px-5 py-3.5 bg-white border border-[#fdeee0] rounded-xl focus:outline-none focus:border-[#d9543f] focus:ring-4 focus:ring-[#d9543f]/10 transition-all text-gray-900 font-medium placeholder:text-gray-400 resize-none"
//                       placeholder="How can we help you?"
//                       disabled={submitStatus.loading}
//                     ></textarea>
//                   </div>

//                   <button 
//                     type="submit" 
//                     disabled={submitStatus.loading}
//                     className="w-full md:w-auto px-10 py-4 bg-[#d9543f] hover:bg-[#b54035] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-[#d9543f]/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     {submitStatus.loading ? (
//                       <>Processing...</>
//                     ) : (
//                       <>
//                         <Send size={20} /> Send Message
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>

//             </div>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }










  