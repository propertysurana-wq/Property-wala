// 
"use client";

import { useEffect, useState } from "react";
import { 
  Phone, Trash2, Loader2, Search, ChevronLeft, ChevronRight, 
  User, Calendar, ArrowUpRight, Filter 
} from "lucide-react";
import Navbar from "@/Admin/Navbar/Navbar";
import Sidebar from "@/Admin/Sidebar/Sidebar";

/* ================= TYPES ================= */
interface Consultation {
  _id: string;
  name: string;
  phone: string;
  type: "Buy" | "Sell";
  createdAt: string;
}

export default function ConsultationsListPage() {
  const [data, setData] = useState<Consultation[]>([]);
  const [filteredData, setFilteredData] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Changed to 10 as per request

  /* ---------------- FETCH DATA ---------------- */
  const fetchConsultations = async () => {
    try {
      setLoading(true);
      // Removed artificial delay for production feel, add back if needed
      const res = await fetch("https://propertybackend-1-xdbs.onrender.com/api/consultation");
      const result = await res.json();

      if (!res.ok) throw new Error("Failed to fetch data");

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
    fetchConsultations();
  }, []);

  /* ---------------- SEARCH FILTER ---------------- */
  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const results = data.filter(item => 
      item.name.toLowerCase().includes(lowerTerm) ||
      item.phone.includes(lowerTerm) ||
      item.type.toLowerCase().includes(lowerTerm)
    );
    setFilteredData(results);
    setCurrentPage(1); // Reset to page 1 when searching
  }, [searchTerm, data]);

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id: string) => {
    if(confirm("Are you sure you want to delete this request?")) {
      try {
        // Optimistic update
        const newData = data.filter(item => item._id !== id);
        setData(newData);
        
        // Call API to delete
        await fetch(`https://propertybackend-1-xdbs.onrender.com/api/consultation/${id}`, { method: 'DELETE' });
      } catch (err) {
        alert("Failed to delete on server");
        fetchConsultations(); // Revert on error
      }
    }
  };

  /* ---------------- PAGINATION CALCS ---------------- */
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const goToPage = (page: number) => setCurrentPage(page);
  const goToPrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-black" size={40} />
          <p className="text-gray-500 font-sans text-sm tracking-wide">Loading Requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white font-sans text-gray-900">
      
      {/* Inject Inter Font */}
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
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* === HEADER === */}
          <div className="bg-black border border-gray-700 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
  <div>
    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
  <span className="bg-white text-black p-1.5 rounded-none">
    <ArrowUpRight size={20}/>
  </span>
  <span className="text-white">Property Buy & Sell</span>
</h1>
    <p className="text-white text-sm mt-1 ml-10">
      Manage customer inquiries efficiently
    </p>
  </div>
  
              
              <div className="relative w-full md:w-64">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search name or phone..." 
                  className="w-full bg-gray-50 border border-gray-300 text-black px-4 py-2.5 pl-10 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-gray-400"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* === ERROR STATE === */}
            {error && (
              <div className="border border-red-200 bg-red-50 text-red-600 p-4 text-sm font-medium">
                Error: {error}
              </div>
            )}

            {/* === EMPTY STATE === */}
            {filteredData.length === 0 && !loading ? (
              <div className="bg-white border border-dashed border-gray-300 p-16 text-center">
                <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">
                  <Filter className="text-gray-300" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">No Requests Found</h3>
                <p className="text-gray-500 text-sm mt-1">Try adjusting your search or wait for new data.</p>
              </div>
            ) : (
              <>
                {/* === DESKTOP TABLE (Hidden on Mobile) === */}
                <div className="hidden md:block bg-white border border-gray-200 shadow-sm overflow-hidden">
                  <table className="w-full text-sm text-left">
                   <thead className="bg-black border-b border-gray-700 text-white font-bold uppercase text-xs tracking-wider">
                      <tr>
                        <th className="px-6 py-4 w-16">#</th>
                        <th className="px-6 py-4">Customer Name</th>
                        <th className="px-6 py-4">Contact</th>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {currentData.map((item, index) => (
                        <tr key={item._id} className="hover:bg-gray-50 transition-colors group">
                          <td className="px-6 py-4 text-gray-400 font-mono text-xs">
                            {startIndex + index + 1}
                          </td>
                          
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-bold rounded-full">
                                {item.name.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-bold text-gray-900">{item.name}</span>
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <a href={`tel:${item.phone}`} className="text-gray-600 hover:text-black hover:underline decoration-1 underline-offset-4 flex items-center gap-2">
                              <Phone size={14} />
                              {item.phone}
                            </a>
                          </td>

                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${
                              item.type === "Buy" 
                                ? "bg-black text-white border-black" 
                                : "bg-white text-black border-gray-300"
                            }`}>
                              {item.type}
                            </span>
                          </td>

                          <td className="px-6 py-4 text-gray-500 text-xs font-mono">
                            {new Date(item.createdAt).toLocaleDateString('en-IN', {
                                day: '2-digit', month: 'short', year: 'numeric'
                            })}
                          </td>

                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="text-gray-400 hover:text-red-600 p-2 hover:bg-red-50 transition-all rounded"
                              title="Delete Request"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* === MOBILE CARD VIEW (Hidden on Desktop) === */}
                <div className="md:hidden grid gap-4">
                  {currentData.map((item, index) => (
                    <div key={item._id} className="bg-white p-5 border border-gray-200 shadow-sm flex flex-col gap-4 relative">
                      
                      {/* Top Row */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-black text-white flex items-center justify-center text-sm font-bold">
                            {item.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{item.name}</h3>
                            <span className="text-xs text-gray-400 font-mono">#{startIndex + index + 1}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wide border ${
                          item.type === "Buy" 
                            ? "bg-black text-white border-black" 
                            : "bg-white text-black border-gray-900"
                        }`}>
                          {item.type}
                        </span>
                      </div>

                      <hr className="border-gray-100" />

                      {/* Details */}
                      <div className="space-y-3">
                        <a href={`tel:${item.phone}`} className="flex items-center gap-3 text-sm text-gray-700 p-2 bg-gray-50 border border-gray-100">
                          <Phone size={16} />
                          <span className="font-semibold">{item.phone}</span>
                        </a>

                        <div className="flex items-center gap-2 text-xs text-gray-500 justify-end">
                          <Calendar size={12} />
                          {new Date(item.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric', month: 'long', year: 'numeric'
                          })}
                        </div>
                      </div>

                      {/* Delete Action */}
                      <button 
                        onClick={() => handleDelete(item._id)}
                        className="w-full mt-2 py-2 border border-gray-200 text-gray-400 text-sm hover:bg-black hover:text-white hover:border-black transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 size={14} /> Delete Request
                      </button>
                    </div>
                  ))}
                </div>

                {/* === PAGINATION === */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 p-4 gap-4">
                    <span className="text-xs text-gray-500 font-medium">
                      Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={goToPrevious}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 hover:bg-black hover:text-white hover:border-black disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-gray-300 transition-all"
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <div className="flex gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-8 h-8 text-xs font-bold transition-all border ${
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
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-300 hover:bg-black hover:text-white hover:border-black disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-gray-300 transition-all"
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