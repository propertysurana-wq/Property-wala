// import { useState, useEffect } from 'react';
// import { Search, Home, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// export default function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: "https://4.imimg.com/data4/CQ/TD/MY-24860456/land-plots-for-sale-near-narasapura-industrial-area.jpg",
//       title: "Find Your Best Dream House for Rental, Buy & Sell...",
//       description: "Properties for sale / rent in your location. We have more than 3000+ listings for you to choose."
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2074&auto=format&fit=crop",
//       title: "Discover Luxury Living Spaces",
//       description: "Explore premium properties with modern amenities and stunning views."
//     },
//     {
//       image: "https://cdn.prod.website-files.com/5e5717f541472a2c2b58bd84/5e5ea3aa56e82fa888e7ec8f_Row%20Crop%20with%20Tree.png",
//       title: "Your Perfect Home Awaits",
//       description: "Browse through our exclusive collection of properties tailored to your needs."
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   const nextSlide = () =>
//     setCurrentSlide((prev) => (prev + 1) % slides.length);

//   const prevSlide = () =>
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative w-full h-auto flex items-center justify-center font-sans overflow-hidden">

//       {/* Background Slider */}
//       <div className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px]">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt="slide"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 p-3 rounded-full text-white hover:bg-white hover:text-black duration-300 hidden md:flex"
//       >
//         <ChevronLeft size={26} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/15 p-3 rounded-full text-white hover:bg-white hover:text-black duration-300 hidden md:flex"
//       >
//         <ChevronRight size={26} />
//       </button>

//       {/* Content */}
//       <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center px-4 sm:px-6 text-center">
//         <div className="max-w-4xl space-y-4 sm:space-y-6 w-full">
          
//           <div className="flex items-center justify-center">
            
//           </div>

//           <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold drop-shadow-md leading-tight px-2">
//             {slides[currentSlide].title}
//           </h1>

//           <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-2">
//             {slides[currentSlide].description}
//           </p>

//           {/* Search Box */}
//           <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-3 sm:p-5 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto mt-4 sm:mt-6 shadow-xl">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">

//               <div className="md:col-span-4 flex items-center bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3">
//                 <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mr-2 sm:mr-3 flex-shrink-0" />
//                 <input type="text" placeholder="City, Zip, Address" 
//                   className="w-full bg-transparent outline-none text-sm sm:text-base"/>
//               </div>

//               <div className="md:col-span-3 relative">
//                 <select className="w-full bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none font-semibold text-sm sm:text-base">
//                   <option>Property Type</option>
//                   <option>Residential</option>
//                   <option>Commercial</option>
//                   <option>Land</option>
//                 </select>
//               </div>

//               <div className="md:col-span-3 relative">
//                 <select className="w-full bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none font-semibold text-sm sm:text-base">
//                   <option>Price Range</option>
//                   <option>$100k - $500k</option>
//                   <option>$500k - $1M</option>
//                 </select>
//               </div>

//               <button className="md:col-span-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold text-base sm:text-lg py-3 sm:py-0 transition-colors">
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="flex justify-center gap-6 sm:gap-10 pt-4 sm:pt-6 text-white">
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold">12k+</h2>
//               <p className="text-xs sm:text-base">Happy Customers</p>
//             </div>
//             <div className="border-x px-6 sm:px-10">
//               <h2 className="text-2xl sm:text-3xl font-bold">15k+</h2>
//               <p className="text-xs sm:text-base">Listings Added</p>
//             </div>
//             <div>
//               <h2 className="text-2xl sm:text-3xl font-bold">28+</h2>
//               <p className="text-xs sm:text-base">Awards</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             className={`h-2 transition-all rounded-full ${
//               currentSlide === i ? "bg-white w-8" : "bg-white/40 w-3"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
'use client';
import { useState, useEffect } from 'react';
import { Search, Home, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface City {
  _id: string;
  name: string;
}

interface PropertyType {
  _id: string;
  cityId: string;
  cityName: string;
  propertyTypeName: string;
  createdAt?: string;
}

interface Property {
  _id: string;
  cityName: string;
  propertyTypeName: string;
  price: number;
}

interface ApiResponse {
  success: boolean;
  data?: any;
  message?: string;
}

interface SearchForm {
  city: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cities, setCities] = useState<string[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  
  // Search form state
  const [searchForm, setSearchForm] = useState<SearchForm>({
    city: '',
    propertyType: '',
    minPrice: '',
    maxPrice: ''
  });

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

  // Fetch all data from property table
  useEffect(() => {
    fetchPropertyData();
  }, []);

  const fetchPropertyData = async () => {
    try {
      // Fetch all properties
      const propRes = await fetch('https://propertybackend-1-xdbs.onrender.com/api/property');
      const propData: ApiResponse = await propRes.json();
      const allProperties = propData.data || [];
      
      setProperties(allProperties);

      // Extract unique cities from properties
      const uniqueCities = Array.from(
        new Set(allProperties.map((p: Property) => p.cityName))
      ).sort();
      setCities(uniqueCities as string[]);

      // Extract unique property types from properties
      const uniqueTypes = Array.from(
        new Set(allProperties.map((p: Property) => p.propertyTypeName))
      ).sort();
      setPropertyTypes(uniqueTypes as string[]);

    } catch (err) {
      console.error('Failed to fetch property data:', err);
    }
  };

  // Get available property types for selected city
  const getAvailablePropertyTypes = (): string[] => {
    if (!searchForm.city) return propertyTypes;
    
    const cityProperties = properties.filter(p => p.cityName === searchForm.city);
    const availableTypeNames = Array.from(
      new Set(cityProperties.map(p => p.propertyTypeName))
    );
    
    return availableTypeNames;
  };

  // Get price range for selected filters
  const getPriceRange = (): { min: number; max: number } => {
    let filteredProps = properties;
    
    if (searchForm.city) {
      filteredProps = filteredProps.filter(p => p.cityName === searchForm.city);
    }
    
    if (searchForm.propertyType) {
      filteredProps = filteredProps.filter(p => p.propertyTypeName === searchForm.propertyType);
    }

    if (filteredProps.length === 0) return { min: 0, max: 10000000 };

    const prices = filteredProps.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  };

  // Handle search form change
  const handleSearchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchForm(prev => {
      const newForm = { ...prev, [name]: value };
      
      // Reset property type if city changes
      if (name === 'city') {
        newForm.propertyType = '';
        newForm.minPrice = '';
        newForm.maxPrice = '';
      }
      
      // Reset price if property type changes
      if (name === 'propertyType') {
        newForm.minPrice = '';
        newForm.maxPrice = '';
      }
      
      return newForm;
    });
  };

  // Handle search button click
  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (searchForm.city) params.append('city', searchForm.city);
    if (searchForm.propertyType) params.append('type', searchForm.propertyType);
    if (searchForm.minPrice) params.append('minPrice', searchForm.minPrice);
    if (searchForm.maxPrice) params.append('maxPrice', searchForm.maxPrice);

    // Redirect to list page with search parameters
    window.location.href = `/list?${params.toString()}`;
  };

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

  const formatPrice = (price: number): string => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)} Lac`;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const priceRange = getPriceRange();
  const availableTypes = getAvailablePropertyTypes();

  return (
    <div className="relative w-full h-auto flex items-center justify-center font-sans overflow-hidden">

      {/* Background Slider */}
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px]">
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
      <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center px-4 sm:px-6 text-center">
        <div className="max-w-4xl space-y-4 sm:space-y-6 w-full">

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold drop-shadow-md leading-tight px-2">
            {slides[currentSlide].title}
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-2">
            {slides[currentSlide].description}
          </p>

          {/* Search Box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-3 sm:p-5 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto mt-4 sm:mt-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">

              {/* City Dropdown */}
              <div className="md:col-span-3 relative">
                <select 
                  name="city"
                  value={searchForm.city}
                  onChange={handleSearchChange}
                  className="w-full bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none font-semibold text-sm sm:text-base text-gray-700"
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type Dropdown */}
              <div className="md:col-span-3 relative">
                <select 
                  name="propertyType"
                  value={searchForm.propertyType}
                  onChange={handleSearchChange}
                  disabled={!searchForm.city}
                  className="w-full bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none font-semibold text-sm sm:text-base text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Property Type</option>
                  {availableTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Min Price */}
              <div className="md:col-span-2 relative">
                <select
                  name="minPrice"
                  value={searchForm.minPrice}
                  onChange={handleSearchChange}
                  disabled={!searchForm.city}
                  className="w-full bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none font-semibold text-sm sm:text-base text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Min Price</option>
                  <option value="100000">₹1 Lac</option>
                  <option value="500000">₹5 Lac</option>
                  <option value="1000000">₹10 Lac</option>
                  <option value="2500000">₹25 Lac</option>
                  <option value="5000000">₹50 Lac</option>
                  <option value="10000000">₹1 Cr</option>
                </select>
              </div>

              {/* Max Price */}
              <div className="md:col-span-2 relative">
                <select
                  name="maxPrice"
                  value={searchForm.maxPrice}
                  onChange={handleSearchChange}
                  disabled={!searchForm.city}
                  className="w-full bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none font-semibold text-sm sm:text-base text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Max Price</option>
                  <option value="500000">₹5 Lac</option>
                  <option value="1000000">₹10 Lac</option>
                  <option value="2500000">₹25 Lac</option>
                  <option value="5000000">₹50 Lac</option>
                  <option value="10000000">₹1 Cr</option>
                  <option value="50000000">₹5 Cr</option>
                  <option value="100000000">₹10 Cr+</option>
                </select>
              </div>

              {/* Search Button */}
              <button 
                onClick={handleSearch}
                className="md:col-span-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold text-base sm:text-lg py-3 sm:py-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!searchForm.city}
              >
                Search
              </button>
            </div>

            {/* Price Range Info */}
            {searchForm.city && (
              <div className="mt-3 text-white text-xs sm:text-sm text-center">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  Available: {formatPrice(priceRange.min)} - {formatPrice(priceRange.max)}
                </span>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6 sm:gap-10 pt-4 sm:pt-6 text-white">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">12k+</h2>
              <p className="text-xs sm:text-base">Happy Customers</p>
            </div>
            <div className="border-x px-6 sm:px-10">
              <h2 className="text-2xl sm:text-3xl font-bold">15k+</h2>
              <p className="text-xs sm:text-base">Listings Added</p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">28+</h2>
              <p className="text-xs sm:text-base">Awards</p>
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