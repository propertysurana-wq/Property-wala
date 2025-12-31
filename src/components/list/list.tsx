"use client";

import React, { useState } from "react";
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Search,
  Grid,
  List,
  SlidersHorizontal,
  Filter,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "../footer/footer";

export default function RealEstateBuyList() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const properties = [
    {
      id: 1,
      title: "लग्जरी विला (Luxury Villa)",
      price: "₹1.5 Cr",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      location: "सिविल लाइन्स, जयपुर",
      bedrooms: 4,
      baths: 3,
      sqft: "300 गज़",
      tag: "बिक्री के लिए",
      tagColor: "bg-green-600"
    },
    {
      id: 2,
      title: "मॉडर्न फ्लैट (Modern Flat)",
      price: "₹45 लाख",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      location: "वैशाली नगर, दिल्ली",
      bedrooms: 2,
      baths: 2,
      sqft: "1200 Sq Ft",
      tag: "नया",
      tagColor: "bg-black"
    },
    {
      id: 3,
      title: "फार्म हाउस (Farm House)",
      price: "₹85 लाख",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      location: "उदयपुर रोड, राजस्थान",
      bedrooms: 3,
      baths: 2,
      sqft: "5 बीघा",
      tag: "कृषि भूमि",
      tagColor: "bg-green-700"
    },
    {
      id: 4,
      title: "बंगला (Bungalow)",
      price: "₹2.1 Cr",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      location: "जोधपुर, राजस्थान",
      bedrooms: 5,
      baths: 4,
      sqft: "500 गज़",
      tag: "हॉट डील",
      tagColor: "bg-red-500"
    },
  ];

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const handleCardClick = () => {
    router.push(`/listdeatils`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header/>
      
      {/* Hero Section */}
      <div className="bg-black border-b-4 border-green-600 pt-16 pb-20 px-4 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-green-50 rounded-full z-0"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-green-700 font-bold uppercase tracking-widest text-xs bg-green-100 px-3 py-1 rounded-full mb-4 inline-block border border-green-200">
            Exclusive Listings
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            अपनी <span className="text-green-600">पसंद की प्रॉपर्टी</span> खोजें
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Find the best Homes, Land, and Shops in your budget.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 pb-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
            
            {/* Search Box */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 focus-within:border-green-600 transition-all">
                <Search className="w-5 h-5 text-green-600" />
                <input
                  type="text"
                  placeholder="खोजें (Search)..."
                  className="flex-1 outline-none text-sm bg-transparent placeholder:text-slate-400 text-slate-900 font-medium"
                />
              </div>
            </div>

            {/* Filter Box */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-lg text-slate-900">Filters</h3>
                </div>
                <button className="text-green-600 text-xs font-bold uppercase hover:underline">
                  Reset
                </button>
              </div>

              {/* Location Filter */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
                  स्थान (Location)
                </label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium">
                  <option>Select Location</option>
                  <option>Jaipur</option>
                  <option>Udaipur</option>
                  <option>Delhi</option>
                </select>
              </div>

              {/* Property Type Filter */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
                  प्रॉपर्टी टाइप (Type)
                </label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all cursor-pointer font-medium">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Land</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-2 block uppercase tracking-wider">
                  कीमत (Price)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Min"
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
                  />
                  <input
                    type="text"
                    placeholder="Max"
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:border-green-600 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-black hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-all transform active:scale-95 border-b-4 border-green-600">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-2xl p-4 shadow-md mb-6 border border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500 font-medium">
                Showing <span className="text-slate-900 font-bold">1–4</span> of <span className="text-slate-900 font-bold">4</span> results
              </p>
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase">View:</span>
                <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === "grid"
                        ? "bg-white text-green-600 shadow-sm border border-slate-200"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === "list"
                        ? "bg-white text-green-600 shadow-sm border border-slate-200"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Property Cards Grid */}
            <div
              className={`grid ${
                viewMode === "grid" ? "md:grid-cols-2" : "grid-cols-1"
              } gap-6`}
            >
              {properties.map((p) => (
                <div
                  key={p.id}
                  onClick={handleCardClick}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-green-500 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                    {/* Tag Badge */}
                    {p.tag && (
                      <div className="absolute top-4 left-4">
                        <span className={`${p.tagColor} text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md`}>
                          {p.tag}
                        </span>
                      </div>
                    )}

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(p.id, e)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-white p-2.5 rounded-full hover:bg-white transition-all group/heart shadow-sm"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          favorites.has(p.id)
                            ? "fill-red-500 text-red-500"
                            : "text-slate-600 group-hover/heart:text-red-500"
                        }`}
                      />
                    </button>

                    {/* Price Tag (Over Image) */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-lg shadow-lg border-l-4 border-green-600">
                       <p className="text-xl font-bold text-slate-900">{p.price}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-slate-900 group-hover:text-green-700 transition-colors line-clamp-1 mb-1">
                        {p.title}
                      </h3>
                      <div className="flex items-center text-sm text-slate-500 gap-2 font-medium">
                        <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="line-clamp-1">{p.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                        <Bed className="w-4 h-4 text-green-600" />
                        <span>{p.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                        <Bath className="w-4 h-4 text-green-600" />
                        <span>{p.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                        <Maximize className="w-4 h-4 text-green-600" />
                        <span>{p.sqft}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-6 py-3 border border-slate-200 bg-white rounded-xl hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all font-bold text-sm text-slate-500">
                Previous
              </button>
              <button className="px-5 py-3 bg-black text-white rounded-xl font-bold shadow-lg border-b-4 border-green-600">
                1
              </button>
              <button className="px-5 py-3 border border-slate-200 bg-white rounded-xl hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all font-bold text-slate-500">
                2
              </button>
              <button className="px-6 py-3 border border-slate-200 bg-white rounded-xl hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all font-bold text-sm text-slate-500">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}