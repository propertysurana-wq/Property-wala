// "use client";

// import { useEffect, useState } from "react";
// import { Loader2, Phone, FileText } from "lucide-react";
// import Navbar from "@/Admin/Navbar/Navbar";
// import Sidebar from "@/Admin/Sidebar/Sidebar";

// /* ================= TYPES ================= */
// interface DocumentRequest {
//   _id: string;
//   name: string;
//   phone: string;
//   documentType: string;
//   khasraOrKhataNo: string;
//   addressDetails: string;
//   createdAt: string;
// }

// export default function DocumentRequestListPage() {
//   const [data, setData] = useState<DocumentRequest[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   /* ---------------- FETCH DATA ---------------- */
//   const fetchRequests = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://propertybackend-6bou.onrender.com/api/document-request");
//       const result = await res.json();

//       if (!res.ok) throw new Error("Failed to fetch data");

//       setData(result.data || []);
//     } catch (err: any) {
//       setError(err.message || "Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   /* ---------------- LOADING ---------------- */
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Loader2 className="animate-spin text-emerald-600" size={32} />
//       </div>
//     );
//   }

//   /* ---------------- ERROR ---------------- */
//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center text-red-600 font-bold">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="p-6 overflow-y-auto">
//           <h1 className="text-3xl font-extrabold mb-6 text-slate-800">
//             📄 Document Requests
//           </h1>

//           {data.length === 0 ? (
//             <div className="bg-white p-8 rounded-xl text-center text-slate-500">
//               No document requests found
//             </div>
//           ) : (
//             <div className="bg-white rounded-xl shadow overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-slate-100 text-slate-700">
//                   <tr>
//                     <th className="p-4 text-left">#</th>
//                     <th className="p-4 text-left">Name</th>
//                     <th className="p-4 text-left">Phone/Document</th>
//                     <th className="p-4 text-left">Khasra / Khata</th>
//                     <th className="p-4 text-left">Location</th>
//                     <th className="p-4 text-left">Date</th>
//                     <th className="p-4 text-left">Delete</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {data.map((item, index) => (
//                     <tr
//                       key={item._id}
//                       className="border-t hover:bg-slate-50 transition"
//                     >
//                       <td className="p-4">{index + 1}</td>

//                       <td className="p-4 font-semibold">{item.name}</td>

//                       <td className="p-4 flex items-center gap-2">
//                         <Phone size={14} className="text-emerald-600" />
//                         <a
//                           href={`tel:${item.phone}`}
//                           className="text-blue-600 hover:underline"
//                         >
//                           {item.phone}
//                         </a>
//                       </td>

//                       <td className="p-4 flex items-center gap-2">
//                         <FileText size={14} className="text-slate-500" />
//                         {item.documentType}
//                       </td>

//                       <td className="p-4">{item.khasraOrKhataNo}</td>

//                       <td className="p-4 text-slate-600">
//                         {item.addressDetails}
//                       </td>

//                       <td className="p-4 text-slate-500">
//                         {new Date(item.createdAt).toLocaleDateString()}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { Loader2, Phone, FileText, Trash2, Search, Calendar, MapPin, X } from "lucide-react";
// import Navbar from "@/Admin/Navbar/Navbar";
// import Sidebar from "@/Admin/Sidebar/Sidebar";

// /* ================= TYPES ================= */
// interface DocumentRequest {
//   _id: string;
//   name: string;
//   phone: string;
//   documentType: string;
//   khasraOrKhataNo: string;
//   addressDetails: string;
//   createdAt: string;
// }

// export default function DocumentRequestListPage() {
//   const [data, setData] = useState<DocumentRequest[]>([]);
//   const [filteredData, setFilteredData] = useState<DocumentRequest[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   /* ---------------- FETCH DATA ---------------- */
//   const fetchRequests = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://propertybackend-6bou.onrender.com/api/document-request");
//       const result = await res.json();

//       if (!res.ok) throw new Error("Failed to fetch data");

//       const requests = result.data || [];
//       setData(requests);
//       setFilteredData(requests);
//     } catch (err: any) {
//       setError(err.message || "Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   /* ---------------- SEARCH FILTER ---------------- */
//   useEffect(() => {
//     const lowerTerm = searchTerm.toLowerCase();
//     const results = data.filter(item => 
//       item.name.toLowerCase().includes(lowerTerm) ||
//       item.phone.includes(lowerTerm) ||
//       item.documentType.toLowerCase().includes(lowerTerm) ||
//       item.khasraOrKhataNo.toLowerCase().includes(lowerTerm)
//     );
//     setFilteredData(results);
//   }, [searchTerm, data]);

//   /* ---------------- DELETE ACTION ---------------- */
//   const handleDelete = async (id: string) => {
//     if(confirm("Are you sure you want to delete this request?")) {
//       try {
//         await fetch(`https://propertybackend-6bou.onrender.com/api/document-request/${id}`, { method: 'DELETE' });
//         // Optimistic UI Update
//         const newData = data.filter(item => item._id !== id);
//         setData(newData);
//         setFilteredData(newData);
//       } catch (err) {
//         alert("Failed to delete");
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen bg-white font-sans text-gray-900">
      
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-200">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto">
            
//             {/* HEADER */}
//            <div className="bg-black text-white rounded-xl p-6 mb-6 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-bold flex items-center gap-2">
//                 <span>📋</span> Consultation Requests
//               </h1>
//               <p className="text-gray-400 text-sm mt-1">
//                 Manage your customer inquiries and leads
//               </p>
//             </div>
            
//             {/* Optional: Add Filter or Export Buttons Here */}
//             <div className="flex gap-2">
//                <div className="relative">
//                   <input 
//                     type="text" 
//                     placeholder="Search..." 
//                     className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-white transition w-48"
//                   />
//                   <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
//                </div>
//             </div>
          
              
//               {/* SEARCH BAR */}
             
//             </div>

//             {/* ERROR STATE */}
//             {error && (
//               <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium text-center">
//                 {error}
//               </div>
//             )}

//             {/* LOADING STATE */}
//             {loading ? (
//               <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//                 <Loader2 size={40} className="animate-spin mb-4 text-black opacity-20" />
//                 <p className="text-sm font-medium">Loading requests...</p>
//               </div>
//             ) : filteredData.length === 0 ? (
//               /* EMPTY STATE */
//               <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-16 text-center">
//                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100">
//                   <FileText size={32} className="text-gray-300" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">No Requests Found</h3>
//                 <p className="text-gray-500 text-sm max-w-xs mx-auto">
//                   {searchTerm ? "Try adjusting your search query." : "No document requests received yet."}
//                 </p>
//               </div>
//             ) : (
//               /* TABLE CARD */
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm text-left">
//                     <thead className="bg-gray-50 border-b border-gray-200">
//                       <tr>
//                         <th className="px-6 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider w-16">#</th>
//                         <th className="px-6 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Applicant</th>
//                         <th className="px-6 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Document Details</th>
//                         <th className="px-6 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Property Info</th>
//                         <th className="px-6 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Date</th>
//                         <th className="px-6 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider text-right">Actions</th>
//                       </tr>
//                     </thead>

//                     <tbody className="divide-y divide-gray-100">
//                       {filteredData.map((item, index) => (
//                         <tr key={item._id} className="hover:bg-gray-50 transition-colors group">
                          
//                           {/* Index */}
//                           <td className="px-6 py-4 text-gray-400 font-mono text-xs">
//                             {index + 1}
//                           </td>
                          
//                           {/* Name & Phone */}
//                           <td className="px-6 py-4">
//                             <div className="flex flex-col">
//                               <span className="font-bold text-gray-900 text-base">{item.name}</span>
//                               <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-gray-500 hover:text-black transition-colors text-xs mt-1 font-mono">
//                                 <Phone size={12} /> {item.phone}
//                               </a>
//                             </div>
//                           </td>

//                           {/* Document Type */}
//                           <td className="px-6 py-4">
//                             <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide bg-black text-white border border-black">
//                               {item.documentType}
//                             </span>
//                           </td>

//                           {/* Property Details (Khasra + Address) */}
//                           <td className="px-6 py-4">
//                             <div className="flex flex-col gap-1">
//                               <span className="font-semibold text-gray-800 text-xs bg-gray-100 px-2 py-1 rounded w-fit">
//                                 Khasra: {item.khasraOrKhataNo}
//                               </span>
//                               <div className="flex items-start gap-1.5 text-gray-500 text-xs mt-1 max-w-[200px] truncate">
//                                 <MapPin size={12} className="mt-0.5 flex-shrink-0" />
//                                 <span title={item.addressDetails}>{item.addressDetails}</span>
//                               </div>
//                             </div>
//                           </td>

//                           {/* Date */}
//                           <td className="px-6 py-4 text-gray-500 text-xs">
//                             <div className="flex items-center gap-1.5">
//                               <Calendar size={12} className="text-gray-400" />
//                               {new Date(item.createdAt).toLocaleDateString('en-IN', {
//                                   day: '2-digit', month: 'short', year: 'numeric'
//                               })}
//                             </div>
//                           </td>

//                           {/* Actions */}
//                           <td className="px-6 py-4 text-right">
//                             <button
//                               onClick={() => handleDelete(item._id)}
//                               className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
//                               title="Delete Request"
//                             >
//                               <Trash2 size={16} />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
                
//                 {/* Footer Count */}
//                 <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-right">
//                   <span className="text-xs font-medium text-gray-500">
//                     Total Requests: <span className="text-black font-bold">{filteredData.length}</span>
//                   </span>
//                 </div>
//               </div>
//             )}

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
// // 
// "use client";

// import { useEffect, useState } from "react";
// import { 
//   Loader2, Phone, FileText, Trash2, Search, Calendar, 
//   MapPin, X, ChevronLeft, ChevronRight, Filter 
// } from "lucide-react";
// import Navbar from "@/Admin/Navbar/Navbar";
// import Sidebar from "@/Admin/Sidebar/Sidebar";

// /* ================= TYPES ================= */
// interface DocumentRequest {
//   _id: string;
//   name: string;
//   phone: string;
//   documentType: string;
//   khasraOrKhataNo: string;
//   addressDetails: string;
//   createdAt: string;
// }

// export default function DocumentRequestListPage() {
//   // State
//   const [data, setData] = useState<DocumentRequest[]>([]);
//   const [filteredData, setFilteredData] = useState<DocumentRequest[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   /* ---------------- FETCH DATA ---------------- */
//   const fetchRequests = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://propertybackend-6bou.onrender.com/api/document-request");
//       const result = await res.json();

//       if (!res.ok) throw new Error("Failed to fetch data");

//       const requests = result.data || [];
//       setData(requests);
//       setFilteredData(requests);
//     } catch (err: any) {
//       setError(err.message || "Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   /* ---------------- SEARCH & FILTER ---------------- */
//   useEffect(() => {
//     const lowerTerm = searchTerm.toLowerCase();
//     const results = data.filter(item => 
//       item.name.toLowerCase().includes(lowerTerm) ||
//       item.phone.includes(lowerTerm) ||
//       item.documentType.toLowerCase().includes(lowerTerm) ||
//       item.khasraOrKhataNo.toLowerCase().includes(lowerTerm)
//     );
//     setFilteredData(results);
//     setCurrentPage(1); // Reset to page 1 on search
//   }, [searchTerm, data]);

//   /* ---------------- PAGINATION LOGIC ---------------- */
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   /* ---------------- DELETE ACTION ---------------- */
//   const handleDelete = async (id: string) => {
//     if(confirm("Are you sure you want to delete this request?")) {
//       try {
//         await fetch(`https://propertybackend-6bou.onrender.com/api/document-request/${id}`, { method: 'DELETE' });
//         const newData = data.filter(item => item._id !== id);
//         setData(newData);
//         // Effect will update filteredData automatically
//       } catch (err) {
//         alert("Failed to delete");
//       }
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#f3f4f6] font-sans text-slate-800">
//       {/* Import Inter Font for modern look */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
//         body { font-family: 'Inter', sans-serif; }
//       `}</style>
      
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto p-4 md:p-8">
//           <div className="max-w-7xl mx-auto space-y-6">
            
//             {/* HEADER SECTION */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
//               <div>
//                 <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
//                   <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText size={20}/></span>
//                   Property Requests
//                 </h1>
//                 <p className="text-slate-500 text-sm mt-1 ml-11">Manage incoming document requests</p>
//               </div>
              
//               <div className="relative w-full md:w-72">
//                 <input 
//                   type="text" 
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search name, phone, khasra..." 
//                   className="w-full bg-slate-50 border border-slate-200 text-slate-900 pl-10 pr-10 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
//                 />
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
//                   <Search size={18} />
//                 </div>
//                 {searchTerm && (
//                   <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
//                     <X size={16} />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* ERROR STATE */}
//             {error && (
//               <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r shadow-sm">
//                 <p className="font-medium">Error</p>
//                 <p className="text-sm">{error}</p>
//               </div>
//             )}

//             {/* LOADING STATE */}
//             {loading ? (
//               <div className="flex flex-col items-center justify-center py-32">
//                 <Loader2 size={48} className="animate-spin text-blue-600 mb-4" />
//                 <p className="text-slate-500 font-medium animate-pulse">Fetching records...</p>
//               </div>
//             ) : filteredData.length === 0 ? (
//               /* EMPTY STATE */
//               <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-20 text-center">
//                 <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <Filter size={32} className="text-slate-300" />
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">No Requests Found</h3>
//                 <p className="text-slate-500 text-sm">
//                   {searchTerm ? "No results match your search." : "Your list is currently empty."}
//                 </p>
//               </div>
//             ) : (
//               <>
//                 {/* === DESKTOP TABLE VIEW (Hidden on Mobile) === */}
//                 <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
//                   <table className="w-full text-sm text-left">
//                     <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-xs tracking-wider">
//                       <tr>
//                         <th className="px-6 py-4 w-16">#</th>
//                         <th className="px-6 py-4">Applicant</th>
//                         <th className="px-6 py-4">Doc Type</th>
//                         <th className="px-6 py-4">Property Info</th>
//                         <th className="px-6 py-4">Date</th>
//                         <th className="px-6 py-4 text-right">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-slate-100">
//                       {currentItems.map((item, index) => (
//                         <tr key={item._id} className="hover:bg-blue-50/50 transition-colors group">
//                           <td className="px-6 py-4 text-slate-400 font-mono text-xs">
//                             {indexOfFirstItem + index + 1}
//                           </td>
//                           <td className="px-6 py-4">
//                             <div className="flex flex-col">
//                               <span className="font-bold text-slate-900 text-[15px]">{item.name}</span>
//                               <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors text-xs mt-1">
//                                 <Phone size={12} /> {item.phone}
//                               </a>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4">
//                             <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
//                               {item.documentType}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4">
//                             <div className="space-y-1">
//                               <div className="text-xs font-semibold text-slate-700">
//                                 Khasra: <span className="font-mono text-slate-900">{item.khasraOrKhataNo}</span>
//                               </div>
//                               <div className="flex items-start gap-1 text-slate-500 text-xs max-w-[220px]">
//                                 <MapPin size={12} className="mt-0.5 shrink-0" />
//                                 <span className="truncate">{item.addressDetails}</span>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-slate-500 text-xs">
//                             <div className="flex items-center gap-1.5 bg-slate-50 w-fit px-2 py-1 rounded border border-slate-100">
//                               <Calendar size={12} />
//                               {new Date(item.createdAt).toLocaleDateString('en-IN', {
//                                 day: '2-digit', month: 'short', year: 'numeric'
//                               })}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-right">
//                             <button
//                               onClick={() => handleDelete(item._id)}
//                               className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
//                               title="Delete"
//                             >
//                               <Trash2 size={18} />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* === MOBILE CARD VIEW (Hidden on Desktop) === */}
//                 <div className="md:hidden grid gap-4">
//                   {currentItems.map((item, index) => (
//                     <div key={item._id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-4">
                      
//                       {/* Card Header */}
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <div className="flex items-center gap-2 mb-1">
//                             <span className="text-xs font-mono text-slate-400">#{indexOfFirstItem + index + 1}</span>
//                             <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
//                           </div>
//                           <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-900 text-white tracking-wide">
//                             {item.documentType}
//                           </span>
//                         </div>
//                         <button
//                           onClick={() => handleDelete(item._id)}
//                           className="p-2 text-slate-400 bg-slate-50 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>

//                       <hr className="border-slate-100" />

//                       {/* Card Details */}
//                       <div className="space-y-3">
//                         <div className="flex items-center gap-3 text-sm">
//                           <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
//                             <Phone size={14} />
//                           </div>
//                           <a href={`tel:${item.phone}`} className="font-medium text-slate-700">{item.phone}</a>
//                         </div>

//                         <div className="flex items-start gap-3 text-sm">
//                           <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
//                             <FileText size={14} />
//                           </div>
//                           <div>
//                             <p className="text-xs text-slate-500 uppercase font-bold">Khasra / Khata</p>
//                             <p className="font-mono text-slate-900 font-medium">{item.khasraOrKhataNo}</p>
//                           </div>
//                         </div>

//                         <div className="flex items-start gap-3 text-sm">
//                           <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
//                             <MapPin size={14} />
//                           </div>
//                           <p className="text-slate-600 leading-snug pt-1">{item.addressDetails}</p>
//                         </div>
//                       </div>

//                       {/* Card Footer */}
//                       <div className="text-xs text-slate-400 pt-2 flex items-center justify-end gap-1">
//                         <Calendar size={12} />
//                         {new Date(item.createdAt).toLocaleDateString('en-IN', {
//                           day: 'numeric', month: 'long', year: 'numeric'
//                         })}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* === PAGINATION CONTROLS === */}
//                 {totalPages > 1 && (
//                   <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm mt-4">
//                     <span className="text-sm text-slate-500 hidden md:inline-block">
//                       Showing <span className="font-bold text-slate-900">{indexOfFirstItem + 1}</span> to <span className="font-bold text-slate-900">{Math.min(indexOfLastItem, filteredData.length)}</span> of {filteredData.length} entries
//                     </span>
                    
//                     <div className="flex items-center gap-2 mx-auto md:mx-0">
//                       <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                       >
//                         <ChevronLeft size={18} />
//                       </button>
                      
//                       {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                         <button
//                           key={page}
//                           onClick={() => handlePageChange(page)}
//                           className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
//                             currentPage === page
//                               ? "bg-black text-white shadow-md"
//                               : "text-slate-600 hover:bg-slate-100"
//                           }`}
//                         >
//                           {page}
//                         </button>
//                       ))}

//                       <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                         className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                       >
//                         <ChevronRight size={18} />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { 
  Loader2, Phone, FileText, Trash2, Search, Calendar, 
  MapPin, X, ChevronLeft, ChevronRight, Filter 
} from "lucide-react";
import Navbar from "@/Admin/Navbar/Navbar";
import Sidebar from "@/Admin/Sidebar/Sidebar";

/* ================= TYPES ================= */
interface DocumentRequest {
  _id: string;
  name: string;
  phone: string;
  documentType: string;
  khasraOrKhataNo: string;
  addressDetails: string;
  createdAt: string;
}

export default function DocumentRequestListPage() {
  // State
  const [data, setData] = useState<DocumentRequest[]>([]);
  const [filteredData, setFilteredData] = useState<DocumentRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  /* ---------------- FETCH DATA ---------------- */
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://propertybackend-6bou.onrender.com/api/document-request");
      const result = await res.json();

      if (!res.ok) throw new Error("Failed to fetch data");

      const requests = result.data || [];
      setData(requests);
      setFilteredData(requests);
    } catch (err: any) {
      setError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  /* ---------------- SEARCH & FILTER ---------------- */
  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const results = data.filter(item => 
      item.name.toLowerCase().includes(lowerTerm) ||
      item.phone.includes(lowerTerm) ||
      item.documentType.toLowerCase().includes(lowerTerm) ||
      item.khasraOrKhataNo.toLowerCase().includes(lowerTerm)
    );
    setFilteredData(results);
    setCurrentPage(1); // Reset to page 1 on search
  }, [searchTerm, data]);

  /* ---------------- PAGINATION LOGIC ---------------- */
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  /* ---------------- DELETE ACTION ---------------- */
  const handleDelete = async (id: string) => {
    if(confirm("Are you sure you want to delete this request?")) {
      try {
        await fetch(`https://propertybackend-6bou.onrender.com/api/document-request/${id}`, { method: 'DELETE' });
        const newData = data.filter(item => item._id !== id);
        setData(newData);
      } catch (err) {
        alert("Failed to delete");
      }
    }
  };

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
      <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-200">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* HEADER SECTION - Black & White Style */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black p-6 rounded-none border border-gray-200 shadow-sm">
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="bg-white text-black p-2">
                    <FileText size={20}/>
                  </div>
                  Property Requests
                </h1>
                <p className="text-gray-500 text-sm mt-1 ml-12">Manage your document list</p>
              </div>
              
              <div className="relative w-full md:w-72">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..." 
                  className="w-full bg-white border border-gray-300 text-black pl-10 pr-10 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-gray-400"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={18} />
                </div>
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* ERROR STATE */}
            {error && (
              <div className="border border-black text-black p-4 bg-white">
                <p className="font-bold">Error: {error}</p>
              </div>
            )}

            {/* LOADING STATE */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32">
                <Loader2 size={40} className="animate-spin text-black mb-4" />
                <p className="text-gray-500 font-medium">Loading data...</p>
              </div>
            ) : filteredData.length === 0 ? (
              /* EMPTY STATE */
              <div className="bg-white border border-dashed border-gray-300 p-20 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">No Requests Found</h3>
                <p className="text-gray-500 text-sm">
                  The list is currently empty.
                </p>
              </div>
            ) : (
              <>
                {/* === DESKTOP TABLE VIEW (Minimalist B&W) === */}
                <div className="hidden md:block bg-white border border-gray-200">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-black border-b border-gray-700 text-white font-bold uppercase text-xs tracking-wider">
                      <tr>
                        <th className="px-6 py-4 w-16 text-gray-500">#</th>
                        <th className="px-6 py-4">Applicant Name</th>
                        <th className="px-6 py-4">Document Type</th>
                        <th className="px-6 py-4">Property Info</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {currentItems.map((item, index) => (
                        <tr key={item._id} className="hover:bg-gray-50 transition-colors group">
                          <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                            {indexOfFirstItem + index + 1}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="font-bold text-black text-[15px]">{item.name}</span>
                              <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-gray-500 hover:text-black transition-colors text-xs mt-1">
                                <Phone size={12} /> {item.phone}
                              </a>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 text-xs font-bold bg-black text-white uppercase tracking-wider">
                              {item.documentType}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="text-xs font-bold text-gray-900 border border-gray-200 px-2 py-0.5 w-fit bg-gray-50">
                                Khasra: {item.khasraOrKhataNo}
                              </div>
                              <div className="flex items-start gap-1 text-gray-500 text-xs max-w-[220px]">
                                <MapPin size={12} className="mt-0.5 shrink-0" />
                                <span className="truncate">{item.addressDetails}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-500 text-xs font-mono">
                            {new Date(item.createdAt).toLocaleDateString('en-IN', {
                              day: '2-digit', month: 'short', year: 'numeric'
                            })}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="p-2 text-gray-400 hover:bg-black hover:text-white transition-all rounded-none"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* === MOBILE CARD VIEW (Minimalist B&W) === */}
                <div className="md:hidden grid gap-4">
                  {currentItems.map((item, index) => (
                    <div key={item._id} className="bg-white p-5 border border-gray-200 shadow-sm flex flex-col gap-4 relative">
                      
                      {/* Count Badge */}
                      <div className="absolute top-0 left-0 bg-gray-100 text-gray-500 px-3 py-1 text-xs font-mono border-r border-b border-gray-200">
                        #{indexOfFirstItem + index + 1}
                      </div>

                      {/* Header */}
                      <div className="mt-4 flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-black text-lg">{item.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-black text-white px-2 py-0.5 uppercase font-bold">
                              {item.documentType}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-2 text-gray-400 border border-gray-200 hover:bg-black hover:text-white transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <hr className="border-gray-100" />

                      {/* Details */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <Phone size={14} className="text-black" />
                          <a href={`tel:${item.phone}`} className="font-medium text-gray-700 underline decoration-gray-300 underline-offset-4">{item.phone}</a>
                        </div>

                        <div className="flex items-start gap-3 text-sm">
                          <FileText size={14} className="text-black mt-1" />
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Khasra No</span>
                            <p className="font-mono text-black font-bold">{item.khasraOrKhataNo}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 text-sm">
                          <MapPin size={14} className="text-black mt-1" />
                          <p className="text-gray-600">{item.addressDetails}</p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="text-xs text-gray-400 pt-2 border-t border-gray-100 flex items-center justify-end gap-1">
                        <Calendar size={12} />
                        {new Date(item.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'long', year: 'numeric'
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* === PAGINATION (Black & White) === */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 border border-gray-200 gap-4">
                    <span className="text-xs text-gray-500">
                      Showing <span className="font-bold text-black">{indexOfFirstItem + 1}</span> - <span className="font-bold text-black">{Math.min(indexOfLastItem, filteredData.length)}</span> of {filteredData.length}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-400 transition-colors"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-8 h-8 text-sm font-bold border transition-colors ${
                            currentPage === page
                              ? "bg-black text-white border-black"
                              : "bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black"
                          }`}
                        >
                          {page}
                        </button>
                      ))}

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
        </main>
      </div>
    </div>
  );
}