'use client';

import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { 
  Building, Plus, Edit2, Trash2, Loader2, Search, X, 
  RefreshCw, MapPin, SlidersHorizontal, ChevronLeft, ChevronRight 
} from 'lucide-react';
import Navbar from '@/Admin/Navbar/Navbar';
import Sidebar from '@/Admin/Sidebar/Sidebar';

const CITY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/city';
const PROPERTY_TYPE_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property-type';

/* ================= TYPES ================= */

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

interface ApiResponse {
  success: boolean;
  data?: any;
  message?: string;
}

/* ================= COMPONENT ================= */

export default function PropertyTypesPage() {
  // Data State
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [filteredPropertyTypes, setFilteredPropertyTypes] = useState<PropertyType[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  
  // UI State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [formData, setFormData] = useState({ cityId: '', propertyTypeName: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  /* ================= FETCH DATA ================= */

  const fetchCities = async () => {
    try {
      const res = await axios.get(CITY_API_URL);
      const data = Array.isArray(res.data) ? res.data : (res.data.data || []);
      setCities(data);
    } catch (err) {
      console.error('Fetch cities error:', err);
    }
  };

  const fetchPropertyTypes = async () => {
    try {
      setFetchLoading(true);
      const res = await axios.get(PROPERTY_TYPE_API_URL);
      const data = Array.isArray(res.data) ? res.data : (res.data.data || []);
      setPropertyTypes(data);
      setFilteredPropertyTypes(data);
      setError('');
    } catch (err) {
      console.error('Fetch property types error:', err);
      setError('Failed to load data.');
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchPropertyTypes();
  }, []);

  /* ================= FILTERING ================= */

  useEffect(() => {
    let results = [...propertyTypes];

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      results = results.filter(type =>
        type.propertyTypeName.toLowerCase().includes(lowerTerm) ||
        type.cityName.toLowerCase().includes(lowerTerm)
      );
    }

    if (filterCity) {
      results = results.filter(type => type.cityId === filterCity);
    }

    setFilteredPropertyTypes(results);
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [searchTerm, filterCity, propertyTypes]);

  /* ================= PAGINATION LOGIC ================= */

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPropertyTypes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPropertyTypes.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cityId || !formData.propertyTypeName.trim()) return;

    setLoading(true);
    setError('');

    try {
      const url = editingId 
        ? `${PROPERTY_TYPE_API_URL}/${editingId}` 
        : PROPERTY_TYPE_API_URL;
      
      const method = editingId ? 'put' : 'post';

      // Find city name for optimistic update
      const selectedCity = cities.find(c => c._id === formData.cityId);
      const cityName = selectedCity ? selectedCity.name : 'Unknown';

      // @ts-ignore
      await axios[method](url, { ...formData, cityName });

      setFormData({ cityId: '', propertyTypeName: '' });
      setEditingId(null);
      await fetchPropertyTypes();
    } catch (err) {
      const axiosError = err as AxiosError<ApiResponse>;
      setError(axiosError.response?.data?.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  /* ================= ACTIONS ================= */

  const handleEdit = (pt: PropertyType) => {
    setFormData({ 
      cityId: pt.cityId,
      propertyTypeName: pt.propertyTypeName 
    });
    setEditingId(pt._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this property type?')) return;
    try {
      await axios.delete(`${PROPERTY_TYPE_API_URL}/${id}`);
      // Optimistic update
      setPropertyTypes(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      alert('Delete failed');
      fetchPropertyTypes(); // Revert on error
    }
  };

  const cancelEdit = () => {
    setFormData({ cityId: '', propertyTypeName: '' });
    setEditingId(null);
    setError('');
  };

  /* ================= UI ================= */

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900">
      
      {/* Import Inter Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-100">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            
            {/* PAGE HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-black flex items-center gap-3">
                  <span className="bg-black text-white p-2"><Building size={20}/></span>
                  Property Types
                </h1>
                <p className="text-gray-500 text-sm mt-1 ml-11">Manage property categories.</p>
              </div>
              
              <button 
                onClick={() => { fetchCities(); fetchPropertyTypes(); }}
                className="p-2 bg-white border border-gray-300 rounded hover:bg-black hover:text-white transition-all shadow-sm active:scale-95 text-gray-600 self-start md:self-auto"
                title="Refresh Data"
              >
                <RefreshCw size={18} className={fetchLoading ? "animate-spin" : ""} />
              </button>
            </div>

            {/* ERROR ALERT */}
            {error && (
              <div className="bg-white border border-black p-4 mb-6 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                  <X size={20} className="text-red-600" />
                  <span className="text-sm font-medium text-black">{error}</span>
                </div>
                <button onClick={() => setError('')} className="text-gray-400 hover:text-black">
                  <X size={18} />
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* LEFT: FORM (4 Cols) */}
              <div className="lg:col-span-4">
                <div className="bg-white border border-gray-200 p-6 shadow-sm sticky top-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-black uppercase tracking-wide">
                      {editingId ? 'Edit Type' : 'Add New Type'}
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* CITY SELECT */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Select City
                      </label>
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                        <select
                          value={formData.cityId}
                          onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
                          className="w-full pl-10 pr-10 py-3 bg-white border border-gray-300 focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-sm font-medium appearance-none cursor-pointer"
                          required
                        >
                          <option value="">-- Choose City --</option>
                          {cities.map((city) => (
                            <option key={city._id} value={city._id}>{city.name}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    {/* TYPE NAME INPUT */}
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Property Type Name
                      </label>
                      <div className="relative group">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                        <input
                          type="text"
                          placeholder="e.g. 2BHK Apartment"
                          value={formData.propertyTypeName}
                          onChange={(e) => setFormData({ ...formData, propertyTypeName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-sm font-medium placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 shadow-sm transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                      >
                        {loading ? <Loader2 size={16} className="animate-spin" /> : (editingId ? 'Update' : 'Add Type')}
                      </button>
                      
                      {editingId && (
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="px-4 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-black font-bold text-sm transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              {/* RIGHT: LIST (8 Cols) */}
              <div className="lg:col-span-8">
                
                {/* FILTERS BAR */}
                <div className="bg-white border border-gray-200 p-2 mb-6 flex flex-col sm:flex-row gap-2 shadow-sm">
                  
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search types..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-transparent border-none focus:ring-0 text-sm font-medium placeholder:text-gray-400 text-black"
                    />
                    {searchTerm && (
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-gray-200 hidden sm:block mx-1"></div>

                  {/* Filter Dropdown */}
                  <div className="relative w-full sm:w-48 border-t sm:border-t-0 border-gray-100 sm:border-l sm:pl-2">
                    <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <select
                      value={filterCity}
                      onChange={(e) => setFilterCity(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-transparent border-none focus:ring-0 text-sm font-medium cursor-pointer appearance-none text-gray-700 hover:text-black"
                    >
                      <option value="">All Cities</option>
                      {cities.map((city) => (
                        <option key={city._id} value={city._id}>{city.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="bg-white shadow-sm border border-gray-200 overflow-hidden min-h-[400px] flex flex-col relative">
                  {fetchLoading ? (
                    <div className="flex-1 flex flex-col items-center justify-center py-12 text-gray-400">
                      <Loader2 size={32} className="animate-spin mb-3 text-black" />
                      <p className="text-sm font-medium">Loading data...</p>
                    </div>
                  ) : filteredPropertyTypes.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                        <Building size={24} className="text-gray-300" />
                      </div>
                      <h3 className="text-black font-bold text-base mb-1">No Types Found</h3>
                      <p className="text-gray-500 text-sm">Add a new property type to see it here.</p>
                    </div>
                  ) : (
                    <>
                      {/* === DESKTOP TABLE === */}
                      <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-gray-100 border-b border-gray-200 text-black uppercase text-xs font-bold tracking-wider">
                            <tr>
                              <th className="px-6 py-4 w-16 text-gray-500">#</th>
                              <th className="px-6 py-4">Property Type</th>
                              <th className="px-6 py-4">City</th>
                              <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {currentItems.map((pt, index) => (
                              <tr key={pt._id} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                                  {indexOfFirstItem + index + 1}
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-900">
                                  {pt.propertyTypeName}
                                </td>
                                <td className="px-6 py-4">
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                                    <MapPin size={10} /> {pt.cityName || 'Unknown'}
                                  </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                      onClick={() => handleEdit(pt)}
                                      className="p-2 text-gray-400 hover:bg-black hover:text-white transition-all"
                                      title="Edit"
                                    >
                                      <Edit2 size={16} />
                                    </button>
                                    <button
                                      onClick={() => handleDelete(pt._id)}
                                      className="p-2 text-gray-400 hover:bg-black hover:text-white transition-all"
                                      title="Delete"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* === MOBILE CARD VIEW === */}
                      <div className="md:hidden p-4 space-y-3">
                        {currentItems.map((pt, index) => (
                          <div key={pt._id} className="border border-gray-200 p-4 bg-white relative shadow-sm">
                            <div className="absolute top-0 left-0 bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 font-mono border-b border-r border-gray-200">
                              #{indexOfFirstItem + index + 1}
                            </div>
                            
                            <div className="mt-3 flex justify-between items-start">
                               <div>
                                  <h3 className="font-bold text-black text-lg">{pt.propertyTypeName}</h3>
                                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                    <MapPin size={12} />
                                    <span>{pt.cityName || 'Unknown'}</span>
                                  </div>
                               </div>
                               
                               <div className="flex gap-2">
                                  <button
                                    onClick={() => handleEdit(pt)}
                                    className="p-2 border border-gray-200 text-gray-400 hover:bg-black hover:text-white transition-colors"
                                  >
                                    <Edit2 size={16} />
                                  </button>
                                  <button
                                    onClick={() => handleDelete(pt._id)}
                                    className="p-2 border border-gray-200 text-gray-400 hover:bg-black hover:text-white transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* === PAGINATION === */}
                      {totalPages > 1 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between bg-white border-t border-gray-200 p-4 gap-4 mt-auto">
                           <span className="text-xs text-gray-500">
                             Showing <span className="font-bold text-black">{indexOfFirstItem + 1}</span> - <span className="font-bold text-black">{Math.min(indexOfLastItem, filteredPropertyTypes.length)}</span> of {filteredPropertyTypes.length}
                           </span>
                           
                           <div className="flex items-center gap-2">
                             <button
                               onClick={() => handlePageChange(currentPage - 1)}
                               disabled={currentPage === 1}
                               className="p-2 border border-gray-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-400 transition-colors"
                             >
                               <ChevronLeft size={16} />
                             </button>

                             <div className="flex gap-1">
                               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                 <button
                                   key={page}
                                   onClick={() => handlePageChange(page)}
                                   className={`w-8 h-8 text-xs font-bold transition-colors border ${
                                     currentPage === page
                                       ? "bg-black text-white border-black"
                                       : "bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black"
                                   }`}
                                 >
                                   {page}
                                 </button>
                               ))}
                             </div>

                             <button
                               onClick={() => handlePageChange(currentPage + 1)}
                               disabled={currentPage === totalPages}
                               className="p-2 border border-gray-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-400 transition-colors"
                             >
                               <ChevronRight size={16} />
                             </button>
                           </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}