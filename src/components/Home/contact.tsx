import { Send, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us for Property Help
          </h2>
          <p className="text-xl text-[#b54035] mb-2 font-semibold">
            प्रॉपर्टी सहायता के लिए संपर्क करें
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e8734a] to-[#e15e5e] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#fefdf9] to-[#fef7f0] rounded-3xl p-8 shadow-xl border border-[#fdeee0]">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Quick Contact Form
            </h3>
            <p className="text-lg text-[#b54035] mb-6 font-semibold">
              तुरंत संपर्क फॉर्म
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name / नाम
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-[#fad9c1] focus:border-[#e8734a] focus:outline-none transition-colors"
                  placeholder="Enter your name / अपना नाम लिखें"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number / फोन नंबर
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-[#fad9c1] focus:border-[#e8734a] focus:outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Needed / सेवा की आवश्यकता
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-[#fad9c1] focus:border-[#e8734a] focus:outline-none transition-colors">
                  <option>Property Buy/Sell - प्रॉपर्टी खरीद/बिक्री</option>
                  <option>Nakal & Map - नक़ल और नक्शा</option>
                  <option>Patta Creation - पट्टा बनवाना</option>
                  <option>Registry Service - रजिस्ट्री सेवा</option>
                  <option>Legal Consultation - कानूनी सलाह</option>
                  <option>Property Verification - प्रॉपर्टी जांच</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message / संदेश
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-[#fad9c1] focus:border-[#e8734a] focus:outline-none transition-colors h-32"
                  placeholder="Describe your requirement / अपनी आवश्यकता बताएं"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d9543f] to-[#cc3f3f] text-white py-4 rounded-xl font-semibold text-lg hover:from-[#b54035] hover:to-[#a73232] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Send Message / संदेश भेजें
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-6">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    WhatsApp Us
                  </h3>
                  <p className="text-green-700 font-semibold">
                    व्हाट्सऐप करें
                  </p>
                </div>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-3">
                <MessageCircle size={20} />
                +91 98765 43210
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6">
                  <Phone className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Call Directly
                  </h3>
                  <p className="text-blue-700 font-semibold">
                    सीधे कॉल करें
                  </p>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-3">
                <Phone size={20} />
                +91 98765 43210
              </button>
            </div>

            {/* Address Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-6">
                  <MapPin className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Visit Our Office
                  </h3>
                  <p className="text-purple-700 font-semibold">
                    हमारे ऑफिस आएं
                  </p>
                </div>
              </div>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold">Property Sathi Office</p>
                <p>Near City Palace, Bhilwara</p>
                <p>Rajasthan - 311001</p>
                <p className="text-sm">सिटी पैलेस के पास, भीलवाड़ा</p>
                <p className="text-sm">राजस्थान - 311001</p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Open Hours
              </h3>
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-500" size={24} />
                <span className="text-gray-700 font-semibold">
                  24/7 Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}