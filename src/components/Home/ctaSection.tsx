import React from "react";
import { Check, ArrowRight } from "lucide-react";

export default function SellPropertySection() {
  const benefits = [
    { title: "मुफ्त में लिस्ट करें", sub: "List for Free" },
    { title: "हजारों खरीदार", sub: "Thousands of Buyers" },
    { title: "जल्दी बिक्री", sub: "Quick Sale" },
  ];

  return (
  <section
  id="sell-property"
  className="py-16 bg-[#F0FFFF] font-sans border-y-4 border-white"
>
      <div className="container mx-auto px-4">
        
        {/* Main Box - Sturdy & Trusted Look */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden  ">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Side - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold w-fit mb-4 border border-green-300">
                बेचना आसान है
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 leading-tight">
                अपनी संपत्ति बेचना चाहते हैं?
              </h2>
              <p className="text-lg text-green-700 mb-8 font-medium">
                Want to Sell Your Property?
              </p>

              {/* Benefits List - Simple Boxes */}
              <div className="space-y-5 mb-10">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center bg-[#f9fdf9] p-4 rounded-lg border border-green-200 shadow-sm hover:border-green-500 transition-colors">
                    <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white shadow-md">
                      <Check size={22} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black">{item.title}</h4>
                      <p className="text-sm text-gray-600 font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button - Bold Black & Green */}
              <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:w-auto border-b-4 border-green-600">
                <div className="text-left">
                  <div className="leading-none text-xl">अभी लिस्ट करें</div>
                  <div className="text-xs font-normal text-green-400 mt-1">List Property Now</div>
                </div>
                <ArrowRight size={24} className="text-green-400" />
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="h-full min-h-[300px] relative border-l-0 md:">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0846eb0d0f-69e42afefb978fae2f2c.png"
                alt="Happy Indian family selling property"
                className="w-full h-full object-cover"
              />
              {/* Green Tint Overlay */}
              <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}