// "use client";

// import { useEffect, useState } from "react";
// import { Phone, Trash2, Loader2 } from "lucide-react";
// import Navbar from "@/Admin/Navbar/Navbar";
// import Sidebar from "@/Admin/Sidebar/Sidebar";

// interface PattaInquiry {
//   _id: string;
//   name: string;
//   phone: string;
//   pattaType: string;
//   address: string;
//   createdAt: string;
// }

// export default function PattaInquiryListPage() {
//   const [data, setData] = useState<PattaInquiry[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   /* ---------------- FETCH DATA ---------------- */
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch("https://propertybackend-6bou.onrender.com/api/patta-inquiry");
//       const result = await res.json();

//       if (!res.ok) throw new Error(result.message || "Failed to fetch");

//       setData(result.data);
//     } catch (err: any) {
//       setError(err.message || "Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   /* ---------------- DELETE (OPTIONAL) ---------------- */
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this inquiry?")) return;

//     try {
//       const res = await fetch(
//         `https://propertybackend-6bou.onrender.com/api/patta-inquiry/${id}`,
//         { method: "DELETE" }
//       );

//       if (!res.ok) throw new Error("Delete failed");

//       fetchData();
//     } catch (err: any) {
//       alert(err.message);
//     }
//   };

//   /* ---------------- LOADING ---------------- */
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Loader2 className="animate-spin text-emerald-600" size={36} />
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
//     <div className="flex h-screen bg-slate-100">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       <div className="flex-1 flex flex-col">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="p-6 overflow-auto">
//           <h1 className="text-3xl font-extrabold mb-6 text-slate-800">
//             📋 Patta Inquiry List
//           </h1>

//           {data.length === 0 ? (
//             <div className="bg-white p-8 rounded-xl text-center text-slate-500">
//               No inquiries found
//             </div>
//           ) : (
//             <div className="bg-white rounded-xl shadow overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead className="bg-slate-100 text-slate-700">
//                   <tr>
//                     <th className="p-4 text-left">#</th>
//                     <th className="p-4 text-left">Name</th>
//                     <th className="p-4 text-left">Phone</th>
//                     <th className="p-4 text-left">Patta Type</th>
//                     <th className="p-4 text-left">Address</th>
//                     <th className="p-4 text-left">Date</th>
//                     <th className="p-4 text-center">Action</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {data.map((item, index) => (
//                     <tr
//                       key={item._id}
//                       className="border-t hover:bg-slate-50 transition"
//                     >
//                       <td className="p-4">{index + 1}</td>

//                       <td className="p-4 font-semibold">
//                         {item.name}
//                       </td>

//                       <td className="p-4 flex items-center gap-2">
//                         <Phone size={16} className="text-emerald-600" />
//                         <a
//                           href={`tel:${item.phone}`}
//                           className="text-blue-600 hover:underline"
//                         >
//                           {item.phone}
//                         </a>
//                       </td>

//                       <td className="p-4">
//                         <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
//                           {item.pattaType}
//                         </span>
//                       </td>

//                       <td className="p-4 text-slate-600 max-w-xs truncate">
//                         {item.address}
//                       </td>

//                       <td className="p-4 text-slate-500">
//                         {new Date(item.createdAt).toLocaleDateString()}
//                       </td>

//                       <td className="p-4 text-center">
//                         <button
//                           onClick={() => handleDelete(item._id)}
//                           className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
//                           title="Delete"
//                         >
//                           <Trash2 size={16} />
//                         </button>
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
"use client";

import { useEffect, useState } from "react";
import { 
  Phone, Trash2, Loader2, Search, ChevronLeft, ChevronRight, 
  MapPin, Calendar, FileText, Filter, X 
} from "lucide-react";
import Navbar from "@/Admin/Navbar/Navbar";
import Sidebar from "@/Admin/Sidebar/Sidebar";

/* ================= TYPES ================= */
interface PattaInquiry {
  _id: string;
  name: string;
  phone: string;
  pattaType: string;
  address: string;
  createdAt: string;
}

export default function PattaInquiryListPage() {
  const [data, setData] = useState<PattaInquiry[]>([]);
  const [filteredData, setFilteredData] = useState<PattaInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  /* ---------------- FETCH DATA ---------------- */
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://propertybackend-6bou.onrender.com/api/patta-inquiry");
      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Failed to fetch");

      const fetchedData = result.data || [];
      setData(fetchedData);
      setFilteredData(fetchedData);
    } catch (err: any) {
      setError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ---------------- SEARCH & FILTER ---------------- */
  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const results = data.filter(item => 
      item.name.toLowerCase().includes(lowerTerm) ||
      item.phone.includes(lowerTerm) ||
      item.pattaType.toLowerCase().includes(lowerTerm) ||
      item.address.toLowerCase().includes(lowerTerm)
    );
    setFilteredData(results);
    setCurrentPage(1); // Reset to page 1 on search
  }, [searchTerm, data]);

  /* ---------------- DELETE ACTION ---------------- */
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      await fetch(`https://propertybackend-6bou.onrender.com/api/patta-inquiry/${id}`, { method: "DELETE" });
      
      // Update local state without refetching
      const newData = data.filter(item => item._id !== id);
      setData(newData);
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  /* ---------------- PAGINATION LOGIC ---------------- */
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-black" size={40} />
          <p className="text-gray-500 font-mono text-sm">Loading Data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900">
      
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-100">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* HEADER & SEARCH */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black p-6 border border-gray-200 shadow-sm">
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="bg-white text-black p-1.5"><FileText size={20}/></span>
                  Patta Inquiries
                </h1>
                <p className="text-gray-500 text-sm mt-1 ml-10">Manage land record requests</p>
              </div>

              <div className="relative w-full md:w-72">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search name, phone..." 
                  className="w-full bg-white border border-gray-300 text-black pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-gray-400"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* ERROR DISPLAY */}
            {error && (
              <div className="bg-white border border-black p-4 text-black font-medium">
                Error: {error}
              </div>
            )}

            {/* EMPTY STATE */}
            {filteredData.length === 0 ? (
              <div className="bg-white border border-dashed border-gray-300 p-20 text-center">
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <Filter className="text-gray-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-black">No Inquiries Found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search query.</p>
              </div>
            ) : (
              <>
                {/* === DESKTOP TABLE VIEW (Hidden on Mobile) === */}
                <div className="hidden md:block bg-white border border-gray-200 shadow-sm overflow-hidden">
                  <table className="w-full text-sm text-left">
                     <thead className="bg-black border-b border-gray-700 text-white font-bold uppercase text-xs tracking-wider">
                      <tr>
                        <th className="px-6 py-4 w-16 text-gray-500">#</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Contact</th>
                        <th className="px-6 py-4">Patta Type</th>
                        <th className="px-6 py-4">Address</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {currentItems.map((item, index) => (
                        <tr key={item._id} className="hover:bg-gray-50 transition-colors group">
                          <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                            {indexOfFirstItem + index + 1}
                          </td>
                          <td className="px-6 py-4 font-bold text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-6 py-4">
                            <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-black hover:underline decoration-1 underline-offset-4 transition-all">
                              <Phone size={14} /> {item.phone}
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold bg-black text-white uppercase tracking-wider">
                              {item.pattaType}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600 max-w-[200px] truncate" title={item.address}>
                            {item.address}
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

                {/* === MOBILE CARD VIEW (Hidden on Desktop) === */}
                <div className="md:hidden grid gap-4">
                  {currentItems.map((item, index) => (
                    <div key={item._id} className="bg-white p-5 border border-gray-200 shadow-sm flex flex-col gap-4 relative">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs font-mono text-gray-400">#{indexOfFirstItem + index + 1}</span>
                          <h3 className="font-bold text-black text-lg mt-0.5">{item.name}</h3>
                        </div>
                        <span className="px-2 py-1 text-[10px] font-bold bg-black text-white uppercase">
                          {item.pattaType}
                        </span>
                      </div>

                      <hr className="border-gray-100" />

                      {/* Card Body */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <Phone size={14} className="text-black" />
                          <a href={`tel:${item.phone}`} className="text-gray-800 font-medium underline decoration-gray-300">
                            {item.phone}
                          </a>
                        </div>
                        <div className="flex items-start gap-3 text-sm">
                          <MapPin size={14} className="text-black mt-1" />
                          <p className="text-gray-600 leading-snug">{item.address}</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <Calendar size={14} className="text-black" />
                          <span>{new Date(item.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                      </div>

                      {/* Card Action */}
                      <button 
                        onClick={() => handleDelete(item._id)}
                        className="w-full mt-2 py-2 border border-gray-200 text-gray-500 text-sm hover:bg-black hover:text-white hover:border-black transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 size={14} /> Delete Entry
                      </button>
                    </div>
                  ))}
                </div>

                {/* === PAGINATION === */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 p-4 gap-4 shadow-sm">
                    <span className="text-xs text-gray-500 font-medium">
                      Showing <span className="text-black font-bold">{indexOfFirstItem + 1}</span> - <span className="text-black font-bold">{Math.min(indexOfLastItem, filteredData.length)}</span> of {filteredData.length}
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
        </main>
      </div>
    </div>
  );
}