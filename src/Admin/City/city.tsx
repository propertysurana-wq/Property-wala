// 'use client';

// import { useState, useEffect } from 'react';
// import axios, { AxiosError } from 'axios';
// import { 
//   MapPin, Plus, Edit2, Trash2, Loader2, Search, X, RefreshCw 
// } from 'lucide-react';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';

// const API_URL = 'https://propertybackend-6bou.onrender.com/api/city';

// /* ================= TYPES ================= */

// interface City {
//   _id: string;
//   name: string;
// }

// interface ApiResponse {
//   success: boolean;
//   data?: City[] | City;
//   message?: string;
// }

// /* ================= COMPONENT ================= */

// export default function CitiesPage() {
//   const [cities, setCities] = useState<City[]>([]);
//   const [filteredCities, setFilteredCities] = useState<City[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [formData, setFormData] = useState({ name: '' });
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [fetchLoading, setFetchLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   /* ================= FETCH ================= */

//   const fetchCities = async () => {
//     try {
//       setFetchLoading(true);
//       const res = await axios.get(API_URL);
      
//       let data: City[] = [];
//       if (Array.isArray(res.data)) data = res.data;
//       else if (res.data.success && Array.isArray(res.data.data)) data = res.data.data;
//       else if (res.data.data && Array.isArray(res.data.data)) data = res.data.data;

//       setCities(data);
//       setFilteredCities(data);
//       setError('');
//     } catch (err) {
//       console.error('Fetch error:', err);
//       setError('Failed to load cities. Please check your connection.');
//     } finally {
//       setFetchLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCities();
//   }, []);

//   useEffect(() => {
//     const results = cities.filter(city =>
//       city.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCities(results);
//   }, [searchTerm, cities]);

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name.trim()) return;

//     setLoading(true);
//     setError('');

//     try {
//       if (editingId) {
//         await axios.put(`${API_URL}/${editingId}`, formData);
//       } else {
//         await axios.post(API_URL, formData);
//       }

//       setFormData({ name: '' });
//       setEditingId(null);
//       await fetchCities();
//     } catch (err) {
//       const axiosError = err as AxiosError<ApiResponse>;
//       setError(axiosError.response?.data?.message || 'Operation failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= ACTIONS ================= */

//   const handleEdit = (city: City) => {
//     setFormData({ name: city.name });
//     setEditingId(city._id);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleDelete = async (id: string) => {
//     if (!window.confirm('Are you sure you want to delete this city?')) return;
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       await fetchCities();
//     } catch (err) {
//       alert('Delete failed');
//     }
//   };

//   const cancelEdit = () => {
//     setFormData({ name: '' });
//     setEditingId(null);
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col ">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto p-4 md:p-8">
//           <div className="max-w-5xl mx-auto">
            
//             {/* HEADER */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-900">City Manager</h1>
//                 <p className="text-gray-500 text-sm mt-1">Manage locations for your property listings.</p>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <button 
//                   onClick={fetchCities} 
//                   className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors shadow-sm"
//                   title="Refresh List"
//                 >
//                   <RefreshCw size={18} className={fetchLoading ? "animate-spin" : ""} />
//                 </button>
//               </div>
//             </div>

//             {/* ERROR ALERT */}
//             {error && (
//               <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-sm mb-6 flex items-center justify-between animate-in fade-in slide-in-from-top-2">
//                 <div className="flex items-center">
//                   <span className="text-xl mr-2">⚠️</span>
//                   <p className="text-sm font-medium">{error}</p>
//                 </div>
//                 <button onClick={() => setError('')}><X size={18}/></button>
//               </div>
//             )}

//             {/* GRID LAYOUT: FORM & LIST */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
//               {/* LEFT: ADD/EDIT FORM */}
//               <div className="lg:col-span-1">
//                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
//                   <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
//                     {editingId ? <Edit2 size={18} className="text-blue-600"/> : <Plus size={18} className="text-green-600"/>}
//                     {editingId ? 'Edit City' : 'Add New City'}
//                   </h2>
                  
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                       <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
//                         City Name
//                       </label>
//                       <div className="relative">
//                         <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                         <input
//                           type="text"
//                           placeholder="e.g. Mumbai, Delhi"
//                           value={formData.name}
//                           onChange={(e) => setFormData({ name: e.target.value })}
//                           className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm font-medium"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="flex gap-2 pt-2">
//                       <button
//                         type="submit"
//                         disabled={loading}
//                         className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white shadow-md transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ${
//                           editingId 
//                             ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' 
//                             : 'bg-gray-900 hover:bg-black shadow-gray-200'
//                         }`}
//                       >
//                         {loading ? <Loader2 size={16} className="animate-spin" /> : (editingId ? 'Update' : 'Add City')}
//                       </button>
                      
//                       {editingId && (
//                         <button
//                           type="button"
//                           onClick={cancelEdit}
//                           className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl font-bold text-sm transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </form>
//                 </div>
//               </div>

//               {/* RIGHT: CITY LIST */}
//               <div className="lg:col-span-2">
                
//                 {/* Search Bar */}
//                 <div className="relative mb-6">
//                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                   <input
//                     type="text"
//                     placeholder="Search cities..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none shadow-sm transition-all text-sm"
//                   />
//                 </div>

//                 {/* Loading State */}
//                 {fetchLoading ? (
//                   <div className="flex flex-col items-center justify-center py-12 text-gray-400">
//                     <Loader2 size={32} className="animate-spin mb-3 text-blue-500" />
//                     <p className="text-sm font-medium">Loading cities...</p>
//                   </div>
//                 ) : filteredCities.length === 0 ? (
//                   <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
//                     <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <MapPin size={32} className="text-gray-300" />
//                     </div>
//                     <h3 className="text-gray-900 font-bold">No cities found</h3>
//                     <p className="text-gray-500 text-sm mt-1">Try adding a new city or change your search.</p>
//                   </div>
//                 ) : (
//                   <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//                     <div className="grid grid-cols-1 divide-y divide-gray-100">
//                       {filteredCities.map((city, index) => (
//                         <div 
//                           key={city._id} 
//                           className="group flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
//                         >
//                           <div className="flex items-center gap-4">
//                             <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold">
//                               {index + 1}
//                             </span>
//                             <div>
//                               <h3 className="font-semibold text-gray-900">{city.name}</h3>
//                               <p className="text-xs text-gray-400 font-mono mt-0.5">ID: {city._id.slice(-6)}</p>
//                             </div>
//                           </div>

//                           <div className="flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
//                             <button
//                               onClick={() => handleEdit(city)}
//                               className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
//                               title="Edit"
//                             >
//                               <Edit2 size={16} />
//                             </button>
//                             <button
//                               onClick={() => handleDelete(city._id)}
//                               className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
//                               title="Delete"
//                             >
//                               <Trash2 size={16} />
//                             </button>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
                
//                 {/* Count Footer */}
//                 {!fetchLoading && (
//                   <div className="mt-4 text-center">
//                     <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
//                       Total: {filteredCities.length} Cities
//                     </span>
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState, useEffect } from 'react';
// import axios, { AxiosError } from 'axios';
// import { 
//   MapPin, Plus, Edit2, Trash2, Loader2, Search, X, RefreshCw 
// } from 'lucide-react';
// import Navbar from '@/Admin/Navbar/Navbar';
// import Sidebar from '@/Admin/Sidebar/Sidebar';

// const API_URL = 'https://propertybackend-6bou.onrender.com/api/city';

// /* ================= TYPES ================= */

// interface City {
//   _id: string;
//   name: string;
// }

// interface ApiResponse {
//   success: boolean;
//   data?: City[] | City;
//   message?: string;
// }

// /* ================= COMPONENT ================= */

// export default function CitiesPage() {
//   const [cities, setCities] = useState<City[]>([]);
//   const [filteredCities, setFilteredCities] = useState<City[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [formData, setFormData] = useState({ name: '' });
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [fetchLoading, setFetchLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   /* ================= FETCH ================= */

//   const fetchCities = async () => {
//     try {
//       setFetchLoading(true);
//       const res = await axios.get(API_URL);
      
//       let data: City[] = [];
//       if (Array.isArray(res.data)) data = res.data;
//       else if (res.data.success && Array.isArray(res.data.data)) data = res.data.data;
//       else if (res.data.data && Array.isArray(res.data.data)) data = res.data.data;

//       setCities(data);
//       setFilteredCities(data);
//       setError('');
//     } catch (err) {
//       console.error('Fetch error:', err);
//       setError('Failed to load cities. Please check your connection.');
//     } finally {
//       setFetchLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCities();
//   }, []);

//   useEffect(() => {
//     const results = cities.filter(city =>
//       city.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCities(results);
//   }, [searchTerm, cities]);

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name.trim()) return;

//     setLoading(true);
//     setError('');

//     try {
//       if (editingId) {
//         await axios.put(`${API_URL}/${editingId}`, formData);
//       } else {
//         await axios.post(API_URL, formData);
//       }

//       setFormData({ name: '' });
//       setEditingId(null);
//       await fetchCities();
//     } catch (err) {
//       const axiosError = err as AxiosError<ApiResponse>;
//       setError(axiosError.response?.data?.message || 'Operation failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= ACTIONS ================= */

//   const handleEdit = (city: City) => {
//     setFormData({ name: city.name });
//     setEditingId(city._id);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleDelete = async (id: string) => {
//     if (!window.confirm('Are you sure you want to delete this city?')) return;
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       await fetchCities();
//     } catch (err) {
//       alert('Delete failed');
//     }
//   };

//   const cancelEdit = () => {
//     setFormData({ name: '' });
//     setEditingId(null);
//   };

//   /* ================= UI ================= */

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN CONTENT AREA */}
//       <div className="flex-1 flex flex-col overflow-hidden relative border-l border-gray-200">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-white/50">
//           <div className="max-w-6xl mx-auto">
            
//             {/* PAGE HEADER */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
//                   City Manager
//                 </h1>
//                 <p className="text-gray-500 text-sm mt-1">
//                   Manage locations for your property listings efficiently.
//                 </p>
//               </div>
              
//               <button 
//                 onClick={fetchCities} 
//                 className="self-start md:self-auto p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-black text-gray-500 transition-all shadow-sm active:scale-95"
//                 title="Refresh List"
//               >
//                 <RefreshCw size={20} className={fetchLoading ? "animate-spin text-black" : ""} />
//               </button>
//             </div>

//             {/* ERROR ALERT */}
//             {error && (
//               <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-sm mb-8 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-300">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-red-100 p-1.5 rounded-full">
//                     <X size={16} className="text-red-600" />
//                   </div>
//                   <p className="text-sm font-medium">{error}</p>
//                 </div>
//                 <button onClick={() => setError('')} className="text-red-400 hover:text-red-700 transition-colors">
//                   <X size={18}/>
//                 </button>
//               </div>
//             )}

//             {/* MAIN GRID LAYOUT */}
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
//               {/* LEFT COLUMN: ADD/EDIT FORM (4 cols) */}
//               <div className="lg:col-span-4">
//                 <div className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 p-6 sticky top-6">
//                   <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
//                     <div className={`p-2 rounded-lg ${editingId ? 'bg-black text-white' : 'bg-black text-white'}`}>
//                       {editingId ? <Edit2 size={20} /> : <Plus size={20} />}
//                     </div>
//                     <h2 className="text-lg font-bold text-gray-800">
//                       {editingId ? 'Edit City' : 'Add New City'}
//                     </h2>
//                   </div>
                  
//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     <div>
//                       <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
//                         City Name <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative group">
//                         <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
//                         <input
//                           type="text"
//                           placeholder="e.g. Mumbai, New York"
//                           value={formData.name}
//                           onChange={(e) => setFormData({ name: e.target.value })}
//                           className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-sm font-medium text-gray-900 placeholder:text-gray-400"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="flex gap-3 pt-2">
//                       <button
//                         type="submit"
//                         disabled={loading}
//                         className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white shadow-lg shadow-gray-200 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ${
//                           editingId 
//                             ? 'bg-black hover:bg-gray-800' 
//                             : 'bg-black hover:bg-gray-800'
//                         }`}
//                       >
//                         {loading ? (
//                           <>
//                             <Loader2 size={18} className="animate-spin" />
//                             <span>Processing...</span>
//                           </>
//                         ) : (
//                           editingId ? 'Update City' : 'Add City'
//                         )}
//                       </button>
                      
//                       {editingId && (
//                         <button
//                           type="button"
//                           onClick={cancelEdit}
//                           className="px-4 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl font-bold text-sm transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       )}
//                     </div>
//                   </form>
//                 </div>
//               </div>

//               {/* RIGHT COLUMN: CITY LIST (8 cols) */}
//               <div className="lg:col-span-8">
                
//                 {/* SEARCH BAR */}
//                 <div className="relative mb-6 group">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Search className="h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" />
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Search cities..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black shadow-sm transition-all text-sm font-medium"
//                   />
//                   {searchTerm && (
//                     <button 
//                       onClick={() => setSearchTerm('')}
//                       className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
//                     >
//                       <X size={16} />
//                     </button>
//                   )}
//                 </div>

//                 {/* CONTENT AREA */}
//                 <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden min-h-[400px] flex flex-col">
                  
//                   {fetchLoading ? (
//                     <div className="flex-1 flex flex-col items-center justify-center py-12 text-gray-400">
//                       <Loader2 size={40} className="animate-spin mb-4 text-black opacity-20" />
//                       <p className="text-sm font-medium">Loading cities...</p>
//                     </div>
//                   ) : filteredCities.length === 0 ? (
//                     <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
//                       <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
//                         <MapPin size={32} className="text-gray-300" />
//                       </div>
//                       <h3 className="text-gray-900 font-bold text-lg mb-2">No cities found</h3>
//                       <p className="text-gray-500 text-sm max-w-xs mx-auto">
//                         {searchTerm ? `No results for "${searchTerm}"` : "Get started by adding your first city using the form."}
//                       </p>
//                       {searchTerm && (
//                         <button 
//                           onClick={() => setSearchTerm('')}
//                           className="mt-6 text-black text-sm font-bold hover:underline"
//                         >
//                           Clear Search
//                         </button>
//                       )}
//                     </div>
//                   ) : (
//                     <>
//                       {/* TABLE HEADER (Hidden on mobile) */}
//                       <div className="hidden md:grid grid-cols-12 bg-gray-50 border-b border-gray-100 px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
//                         <div className="col-span-1 text-center">#</div>
//                         <div className="col-span-8">City Name</div>
//                         <div className="col-span-3 text-right">Actions</div>
//                       </div>

//                       {/* CITY LIST */}
//                       <div className="divide-y divide-gray-100">
//                         {filteredCities.map((city, index) => (
//                           <div 
//                             key={city._id} 
//                             className="group md:grid md:grid-cols-12 flex flex-col md:items-center p-4 md:px-6 md:py-4 hover:bg-gray-50/80 transition-colors duration-200"
//                           >
//                             {/* Index */}
//                             <div className="hidden md:block col-span-1 text-center">
//                               <span className="w-6 h-6 rounded flex items-center justify-center bg-gray-100 text-gray-500 text-[10px] font-bold">
//                                 {index + 1}
//                               </span>
//                             </div>

//                             {/* Name & ID */}
//                             <div className="col-span-8 mb-3 md:mb-0">
//                               <h3 className="font-bold text-gray-800 text-sm md:text-base flex items-center gap-2">
//                                 <span className="md:hidden w-6 h-6 rounded flex items-center justify-center bg-gray-100 text-gray-500 text-xs font-bold mr-2">
//                                   {index + 1}
//                                 </span>
//                                 {city.name}
//                               </h3>
//                               <p className="text-[10px] text-gray-400 font-mono mt-1 pl-8 md:pl-0 truncate opacity-0 group-hover:opacity-100 transition-opacity">
//                                 ID: {city._id}
//                               </p>
//                             </div>

//                             {/* Actions */}
//                             <div className="col-span-3 flex items-center justify-end gap-2 pl-8 md:pl-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
//                               <button
//                                 onClick={() => handleEdit(city)}
//                                 className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-all border border-transparent hover:border-gray-200"
//                                 title="Edit"
//                               >
//                                 <Edit2 size={16} />
//                               </button>
//                               <button
//                                 onClick={() => handleDelete(city._id)}
//                                 className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all border border-transparent hover:border-red-100"
//                                 title="Delete"
//                               >
//                                 <Trash2 size={16} />
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </>
//                   )}
//                 </div>
                
//                 {/* FOOTER COUNT */}
//                 {!fetchLoading && filteredCities.length > 0 && (
//                   <div className="mt-4 text-center">
//                     <span className="inline-block px-3 py-1 bg-white text-gray-500 rounded-full text-xs font-medium border border-gray-200 shadow-sm">
//                       Total: {filteredCities.length} Cities
//                     </span>
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { 
  MapPin, Plus, Edit2, Trash2, Loader2, Search, X, 
  RefreshCw, ChevronLeft, ChevronRight, Building 
} from 'lucide-react';
import Navbar from '@/Admin/Navbar/Navbar';
import Sidebar from '@/Admin/Sidebar/Sidebar';

const API_URL = 'https://propertybackend-6bou.onrender.com/api/city';

/* ================= TYPES ================= */

interface City {
  _id: string;
  name: string;
}

interface ApiResponse {
  success: boolean;
  data?: City[] | City;
  message?: string;
}

/* ================= COMPONENT ================= */

export default function CitiesPage() {
  // Data State
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  
  // UI State
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ name: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  /* ================= FETCH ================= */

  const fetchCities = async () => {
    try {
      setFetchLoading(true);
      const res = await axios.get(API_URL);
      
      let data: City[] = [];
      if (Array.isArray(res.data)) data = res.data;
      else if (res.data.success && Array.isArray(res.data.data)) data = res.data.data;
      else if (res.data.data && Array.isArray(res.data.data)) data = res.data.data;

      setCities(data);
      setFilteredCities(data);
      setError('');
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load cities.');
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  /* ================= SEARCH FILTER ================= */

  useEffect(() => {
    const results = cities.filter(city =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(results);
    setCurrentPage(1); // Reset to page 1 on search
  }, [searchTerm, cities]);

  /* ================= PAGINATION LOGIC ================= */

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCities.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setLoading(true);
    setError('');

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }

      setFormData({ name: '' });
      setEditingId(null);
      await fetchCities();
    } catch (err) {
      const axiosError = err as AxiosError<ApiResponse>;
      setError(axiosError.response?.data?.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  /* ================= ACTIONS ================= */

  const handleEdit = (city: City) => {
    setFormData({ name: city.name });
    setEditingId(city._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this city?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Optimistic update
      const newCities = cities.filter(c => c._id !== id);
      setCities(newCities);
    } catch (err) {
      alert('Delete failed');
      fetchCities();
    }
  };

  const cancelEdit = () => {
    setFormData({ name: '' });
    setEditingId(null);
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

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-100">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            
            {/* PAGE HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-black flex items-center gap-3">
                  <span className="bg-black text-white p-2"><Building size={20}/></span>
                  City Manager
                </h1>
                <p className="text-gray-500 text-sm mt-1 ml-11">
                  Manage locations for property listings.
                </p>
              </div>
              
              <button 
                onClick={fetchCities} 
                className="self-start md:self-auto p-2 bg-white border border-gray-300 rounded hover:bg-black hover:text-white transition-all shadow-sm active:scale-95 text-gray-600"
                title="Refresh List"
              >
                <RefreshCw size={18} className={fetchLoading ? "animate-spin" : ""} />
              </button>
            </div>

            {/* ERROR ALERT */}
            {error && (
              <div className="bg-white border border-black p-4 mb-6 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <X size={20} className="text-red-600" />
                  <p className="text-sm font-medium text-black">{error}</p>
                </div>
                <button onClick={() => setError('')} className="text-gray-400 hover:text-black">
                  <X size={18}/>
                </button>
              </div>
            )}

            {/* MAIN GRID LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* LEFT COLUMN: ADD/EDIT FORM (4 cols) */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-none border border-gray-200 p-6 shadow-sm sticky top-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-black uppercase tracking-wide">
                      {editingId ? 'Edit City' : 'Add New City'}
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        City Name
                      </label>
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                        <input
                          type="text"
                          placeholder="e.g. Mumbai"
                          value={formData.name}
                          onChange={(e) => setFormData({ name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-sm font-medium text-black placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ${
                          editingId 
                            ? 'bg-black hover:bg-gray-800' 
                            : 'bg-black hover:bg-gray-800'
                        }`}
                      >
                        {loading ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          editingId ? 'Update' : 'Add City'
                        )}
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

              {/* RIGHT COLUMN: CITY LIST (8 cols) */}
              <div className="lg:col-span-8">
                
                {/* SEARCH BAR */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search cities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-black"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* CONTENT AREA */}
                <div className="bg-white border border-gray-200 shadow-sm min-h-[400px] flex flex-col relative">
                  
                  {fetchLoading ? (
                    <div className="flex-1 flex flex-col items-center justify-center py-12 text-gray-400">
                      <Loader2 size={32} className="animate-spin mb-4 text-black" />
                      <p className="text-sm font-medium">Loading cities...</p>
                    </div>
                  ) : filteredCities.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                        <MapPin size={24} className="text-gray-300" />
                      </div>
                      <h3 className="text-black font-bold text-lg mb-1">No cities found</h3>
                      <p className="text-gray-500 text-sm">
                        {searchTerm ? "Try a different search term." : "Add a city to get started."}
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* === DESKTOP TABLE === */}
                      <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-gray-100 text-black font-bold uppercase text-xs tracking-wider border-b border-gray-200">
                            <tr>
                              <th className="px-6 py-4 w-16 text-gray-500">#</th>
                              <th className="px-6 py-4">City Name</th>
                              <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {currentItems.map((city, index) => (
                              <tr key={city._id} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                                  {indexOfFirstItem + index + 1}
                                </td>
                                <td className="px-6 py-4">
                                  <span className="font-bold text-gray-900 text-base">{city.name}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                      onClick={() => handleEdit(city)}
                                      className="p-2 text-gray-400 hover:bg-black hover:text-white transition-all"
                                      title="Edit"
                                    >
                                      <Edit2 size={16} />
                                    </button>
                                    <button
                                      onClick={() => handleDelete(city._id)}
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
                        {currentItems.map((city, index) => (
                          <div key={city._id} className="border border-gray-200 p-4 shadow-sm bg-white relative">
                             <div className="absolute top-0 left-0 bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 font-mono border-b border-r border-gray-200">
                               #{indexOfFirstItem + index + 1}
                             </div>
                             <div className="mt-2 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-black">{city.name}</h3>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleEdit(city)}
                                    className="p-2 bg-gray-50 border border-gray-200 text-gray-600 hover:bg-black hover:text-white transition-colors"
                                  >
                                    <Edit2 size={16} />
                                  </button>
                                  <button
                                    onClick={() => handleDelete(city._id)}
                                    className="p-2 bg-gray-50 border border-gray-200 text-gray-600 hover:bg-black hover:text-white transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                             </div>
                          </div>
                        ))}
                      </div>

                      {/* === PAGINATION FOOTER === */}
                      {totalPages > 1 && (
                        <div className="border-t border-gray-200 p-4 bg-gray-50 flex items-center justify-between mt-auto">
                           <span className="text-xs text-gray-500 hidden sm:inline-block">
                             Showing <span className="font-bold text-black">{indexOfFirstItem + 1}</span> - <span className="font-bold text-black">{Math.min(indexOfLastItem, filteredCities.length)}</span> of {filteredCities.length}
                           </span>
                           
                           <div className="flex items-center gap-2 mx-auto sm:mx-0">
                             <button
                               onClick={() => handlePageChange(currentPage - 1)}
                               disabled={currentPage === 1}
                               className="p-2 bg-white border border-gray-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-400 transition-colors"
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
                               className="p-2 bg-white border border-gray-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-400 transition-colors"
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