// import { Handshake, Phone } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative h-[700px] bg-gradient-to-r from-[#fdeee0] via-[#fefbf0] to-[#fce8e8] overflow-hidden">
//       <div className="absolute inset-0">
//         <img
//           className="w-full h-full object-cover opacity-30"
//           src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop"
//           alt="Traditional Rajasthani houses with modern city buildings"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#752e2f]/70 via-[#742d2d]/60 to-transparent"></div>
//       </div>

//       <div className="relative container mx-auto px-4 h-full flex items-center">
//         <div className="max-w-4xl">
//           <div className="mb-6">
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//               Your Trusted Property & Registry Partner in Bhilwara
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-[#fcf5d9] mb-6 font-semibold">
//               आपका भरोसेमंद प्रॉपर्टी और पट्टा रजिस्ट्रेशन साथी
//             </h2>
//           </div>

//           <p className="text-xl text-[#fefbf0] mb-4 max-w-2xl">
//             We make buying, selling, and paperwork simple
//           </p>
//           <p className="text-lg text-[#fcf5d9] mb-8 max-w-2xl">
//             प्रॉपर्टी खरीद, बिक्री और कागज़ात अब आसान
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-[#d9543f] hover:bg-[#b54035] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
//               <Handshake size={20} />
//               Get Property Help
//             </button>
//             <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d9543f] px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-3">
//               <Phone size={20} />
//               प्रॉपर्टी सहायता लें
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Stats */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
//         <div className="text-center">
//           <div className="text-2xl font-bold text-[#d9543f]">15+</div>
//           <div className="text-sm text-gray-600">Years Experience</div>
//         </div>
//         <div className="text-center border-l border-gray-300 pl-8">
//           <div className="text-2xl font-bold text-[#cc3f3f]">500+</div>
//           <div className="text-sm text-gray-600">Happy Clients</div>
//         </div>
//         <div className="text-center border-l border-gray-300 pl-8">
//           <div className="text-2xl font-bold text-green-600">100%</div>
//           <div className="text-sm text-gray-600">Success Rate</div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState, useEffect } from 'react';
import { Search, Home, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://4.imimg.com/data4/CQ/TD/MY-24860456/land-plots-for-sale-near-narasapura-industrial-area.jpg",
      title: "Find Your Best Dream House for Rental, Buy & Sell...",
      description: "Properties for sale / rent in your location. We have more than 3000+ listings for you to choose."
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2074&auto=format&fit=crop",
      title: "Discover Luxury Living Spaces",
      description: "Explore premium properties with modern amenities and stunning views."
    },
    {
      image: "https://cdn.prod.website-files.com/5e5717f541472a2c2b58bd84/5e5ea3aa56e82fa888e7ec8f_Row%20Crop%20with%20Tree.png",
      title: "Your Perfect Home Awaits",
      description: "Browse through our exclusive collection of properties tailored to your needs."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-auto flex items-center justify-center font-sans overflow-hidden">

      {/* Background Slider */}
      <div className="relative w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[750px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="slide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 p-3 rounded-full text-white hover:bg-white hover:text-black duration-300 hidden md:flex"
      >
        <ChevronLeft size={26} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 p-3 rounded-full text-white hover:bg-white hover:text-black duration-300 hidden md:flex"
      >
        <ChevronRight size={26} />
      </button>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-6">
          
          <div className="flex items-center justify-center">
            
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold drop-shadow-md">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>

          {/* Search Box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-5 rounded-3xl max-w-4xl mx-auto mt-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

              <div className="md:col-span-4 flex items-center bg-white rounded-xl px-4 py-3">
                <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                <input type="text" placeholder="Enter City, Zip, Address" 
                  className="w-full bg-transparent outline-none"/>
              </div>

              <div className="md:col-span-3 relative">
                <select className="w-full bg-white rounded-xl px-4 py-3 outline-none font-semibold">
                  <option>Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </div>

              <div className="md:col-span-3 relative">
                <select className="w-full bg-white rounded-xl px-4 py-3 outline-none font-semibold">
                  <option>Price Range</option>
                  <option>$100k - $500k</option>
                  <option>$500k - $1M</option>
                </select>
              </div>

              <button className="md:col-span-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold text-lg">
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-10 pt-6 text-white">
            <div>
              <h2 className="text-3xl font-bold">12k+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="border-x px-10">
              <h2 className="text-3xl font-bold">15k+</h2>
              <p>Listings Added</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">28+</h2>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 transition-all rounded-full ${
              currentSlide === i ? "bg-white w-8" : "bg-white/40 w-3"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
