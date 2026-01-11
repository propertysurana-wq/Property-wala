'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Link from 'next/link';

/* ================= API URLS ================= */
const PROPERTY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property';
const BASE_URL = 'https://propertybackend-1-xdbs.onrender.com';

/* ================= TYPES ================= */
interface Property {
  _id: string;
  cityName: string;
  propertyTypeName: string;
  address: string;
  price: number;
  description?: string;
  status: string;
  images: string[];
  area?: number;
  plotArea?: number;
  carpetArea?: number;
  configuration?: string;
  createdAt: string;
}

/* ================= COMPONENT ================= */
export default function PropertyListPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    search: '',
    status: 'all'
  });

  /* ================= FETCH PROPERTIES ================= */
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(PROPERTY_API_URL);
      const data = response.data.data || response.data || [];
      setProperties(data);
    } catch (err) {
      console.error('Error fetching properties:', err);
      // alert('Failed to load properties');
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE PROPERTY ================= */
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this property?')) return;

    try {
      await axios.delete(`${PROPERTY_API_URL}/${id}`);
      alert('Property deleted successfully!');
      fetchProperties();
    } catch (err) {
      console.error('Error deleting property:', err);
      alert('Failed to delete property');
    }
  };

  /* ================= FILTER PROPERTIES ================= */
  const filteredProperties = properties.filter(property => {
    const matchesSearch = 
      property.address.toLowerCase().includes(filter.search.toLowerCase()) ||
      property.cityName.toLowerCase().includes(filter.search.toLowerCase()) ||
      property.propertyTypeName.toLowerCase().includes(filter.search.toLowerCase());
    
    const matchesStatus = filter.status === 'all' || property.status === filter.status;

    return matchesSearch && matchesStatus;
  });

  /* ================= FORMATTERS ================= */
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  /* ================= SKELETON LOADER ================= */
  const SkeletonLoader = () => (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-80 h-64 md:h-auto bg-gray-200"></div>
            <div className="flex-1 p-6 md:p-8 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
              <div className="flex gap-2 pt-4">
                <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
                <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  /* ================= UI ================= */
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen}  />
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Property Listings</h1>
                <p className="text-gray-500 text-sm mt-1">
                  Manage your real estate portfolio efficiently
                </p>
              </div>
              
              {/* Add Property Button - Black */}
              <Link 
                href="/property"
                className="bg-gray-900 hover:bg-black text-white font-bold px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-gray-900/40 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Property
              </Link>
            </div>

            {/* Filter Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Search */}
                <div className="md:col-span-8 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by address, city, or type..."
                    value={filter.search}
                    onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all text-sm"
                  />
                </div>

                {/* Status Filter */}
                <div className="md:col-span-4 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <select
                    value={filter.status}
                    onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                    className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="sold">Sold</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Content Area */}
            {loading ? (
              <SkeletonLoader />
            ) : filteredProperties.length === 0 ? (
              /* Empty State */
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-4xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Properties Found</h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  {filter.search || filter.status !== 'all' 
                    ? 'No properties match your current filters. Try adjusting your search.'
                    : 'Get started by adding your first property to the listing.'}
                </p>
                <Link 
                  href="/property/"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-colors shadow-lg shadow-gray-900/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create Listing
                </Link>
              </div>
            ) : (
              /* Property Grid */
              <div className="grid grid-cols-1 gap-6 pb-10">
                {filteredProperties.map((property) => (
                  <div 
                    key={property._id}
                    className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row">
                      
                      {/* Image Section */}
                      <div className="lg:w-80 xl:w-96 h-64 lg:h-auto bg-gray-100 flex-shrink-0 relative overflow-hidden">
                        {property.images && property.images.length > 0 ? (
                          <>
                            <img
                              src={`${BASE_URL}${property.images[0]}`}
                              alt={property.address}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/e2e8f0/64748b?text=No+Image';
                              }}
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Badges */}
                            <div className="absolute top-4 left-4">
                              <span className="bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide shadow-sm">
                                {property.propertyTypeName}
                              </span>
                            </div>
                            
                            {property.images.length > 1 && (
                              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur text-white px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {property.images.length}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                            <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-6 lg:p-8 flex flex-col">
                        
                        {/* Top Row: Status & Actions */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                              property.status === 'active' 
                                ? 'bg-green-100 text-green-800'
                                : property.status === 'sold'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                property.status === 'active' ? 'bg-green-600' : property.status === 'sold' ? 'bg-red-600' : 'bg-gray-500'
                              }`}></span>
                              {property.status}
                            </span>
                          </div>
                          
                          {/* Hover Actions (Desktop) */}
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity lg:opacity-0">
                            <Link
                              href={`/propertyedit/${property._id}`}
                              className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </Link>
                            <button
                              onClick={() => handleDelete(property._id)}
                              className="p-2 bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Title & Location */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors line-clamp-1">
                            {property.address}
                          </h3>
                          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">{property.cityName}</span>
                          </div>
                        </div>

                        {/* Description */}
                        {property.description && (
                          <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                            {property.description}
                          </p>
                        )}

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                          {property.area && (
                            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                              <div className="text-xs text-gray-500 mb-1">Area</div>
                              <div className="font-bold text-gray-900 text-sm">{property.area} sqft</div>
                            </div>
                          )}
                          {property.plotArea && (
                            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                              <div className="text-xs text-gray-500 mb-1">Plot</div>
                              <div className="font-bold text-gray-900 text-sm">{property.plotArea} sqft</div>
                            </div>
                          )}
                          {property.carpetArea && (
                            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                              <div className="text-xs text-gray-500 mb-1">Carpet</div>
                              <div className="font-bold text-gray-900 text-sm">{property.carpetArea} sqft</div>
                            </div>
                          )}
                          {property.configuration && (
                            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                              <div className="text-xs text-gray-500 mb-1">Config</div>
                              <div className="font-bold text-gray-900 text-sm truncate" title={property.configuration}>{property.configuration}</div>
                            </div>
                          )}
                        </div>

                        {/* Footer: Price & Date & Actions */}
                        <div className="mt-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
                              <span className="text-xs text-gray-400 font-semibold block uppercase tracking-wider mb-0.5">Price</span>
                              <span className="text-xl font-bold">{formatPrice(property.price)}</span>
                            </div>
                            <div className="text-xs text-gray-500">
                              <span className="block">Listed</span>
                              <span className="font-medium text-gray-700">{formatDate(property.createdAt)}</span>
                            </div>
                          </div>

                          {/* Mobile Actions (Always Visible) */}
                          <div className="flex gap-3 lg:hidden">
                             <Link
                              href={`/propertyedit/${property._id}`}
                              className="flex-1 bg-gray-900 hover:bg-black text-white font-bold px-4 py-2.5 rounded-lg text-center transition-colors"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(property._id)}
                              className="flex-1 bg-white border-2 border-gray-900 text-gray-900 font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                          
                          {/* Desktop Actions (Hidden on Mobile, shown on group hover) */}
                          <div className="hidden lg:flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0">
                            <Link
                              href={`/propertyedit/${property._id}`}
                              className="bg-gray-900 hover:bg-black text-white font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-gray-900/30"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(property._id)}
                              className="bg-white hover:bg-red-50 border-2 border-gray-900 text-gray-900 hover:text-red-600 font-bold px-6 py-2.5 rounded-lg transition-all"
                            >
                              Delete
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}