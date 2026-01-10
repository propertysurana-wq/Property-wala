// "use client";

import { useEffect, useState } from "react";
import { 
  Trash2, Loader2, Search, ChevronLeft, ChevronRight, 
  MapPin, Phone, Calendar, User, Building, X 
} from "lucide-react";
import Navbar from "@/Admin/Navbar/Navbar";
import Sidebar from "@/Admin/Sidebar/Sidebar";

/* ================= TYPES ================= */
interface Registration {
  _id: string;
  name: string;
  phone: string;
  propertyValue: string;
  location: string;
  createdAt: string;
}

export default function PropertyRegistrationList() {
  // State
  const [data, setData] = useState<Registration[]>([]);
  const [filteredData, setFilteredData] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  /* ---------------- FETCH DATA ---------------- */
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://propertybackend-6bou.onrender.com/api/complete-property-registration",
        { cache: "no-store" }
      );
      const result = await res.json();
      const fetchedData = result.data || [];
      setData(fetchedData);
      setFilteredData(fetchedData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ---------------- SEARCH FILTER ---------------- */
  useEffect(() => {
    const lowerTerm = searchTerm.toLowerCase();
    const results = data.filter(item => 
      item.name.toLowerCase().includes(lowerTerm) ||
      item.phone.includes(lowerTerm) ||
      item.location.toLowerCase().includes(lowerTerm) ||
      item.propertyValue.toLowerCase().includes(lowerTerm)
    );
    setFilteredData(results);
    setCurrentPage(1); // Reset to page 1 on search
  }, [searchTerm, data]);

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      await fetch(
        `https://propertybackend-6bou.onrender.com/api/complete-property-registration/${id}`,
        { method: "DELETE" }
      );
      
      // Update local state directly for speed
      const newData = data.filter(item => item._id !== id);
      setData(newData);
    } catch (error) {
      console.error(error);
      alert("Failed to delete");
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
      <div className="flex h-screen items-center justify-center bg-white">
        <Loader2 className="animate-spin text-black" size={40} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900">
      
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

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* === HEADER & SEARCH === */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black p-6 border border-gray-200 shadow-sm">
              <div>
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="bg-white text-black p-1.5"><Building size={20}/></span>
                  Registration Enquiries
                </h1>
                <p className="text-gray-500 text-sm mt-1 ml-10">Manage property registration leads</p>
              </div>

              <div className="relative w-full md:w-72">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search name, location..." 
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

            {/* === EMPTY STATE === */}
            {filteredData.length === 0 ? (
              <div className="bg-white border border-dashed border-gray-300 p-20 text-center">
                <p className="text-gray-500">No records found matching your criteria.</p>
              </div>
            ) : (
              <>
                {/* === DESKTOP TABLE VIEW (Hidden on Mobile) === */}
                <div className="hidden md:block bg-white border border-gray-200 shadow-sm overflow-hidden">
                  <table className="w-full text-sm text-left">
                      <thead className="bg-black border-b border-gray-700 text-white font-bold uppercase text-xs tracking-wider">
                      <tr>
                        <th className="px-6 py-4 w-16 text-gray-500">#</th>
                        <th className="px-6 py-4">Client Details</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Property Value</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-center">Action</th>
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
                            <div className="flex items-start gap-1.5 text-gray-600 max-w-[200px]">
                              <MapPin size={14} className="mt-0.5 shrink-0" />
                              <span className="truncate">{item.location}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-mono font-bold text-black bg-gray-100 px-2 py-1 border border-gray-200 text-xs">
                              {item.propertyValue}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-500 text-xs font-mono">
                            {new Date(item.createdAt).toLocaleDateString('en-IN', {
                              day: '2-digit', month: 'short', year: 'numeric'
                            })}
                          </td>
                          <td className="px-6 py-4 text-center">
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
                      
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs font-mono text-gray-400">#{indexOfFirstItem + index + 1}</span>
                          <h3 className="font-bold text-black text-lg mt-0.5">{item.name}</h3>
                        </div>
                        <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1">
                          {item.propertyValue}
                        </span>
                      </div>

                      <hr className="border-gray-100" />

                      {/* Details */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <Phone size={14} className="text-black" />
                          <a href={`tel:${item.phone}`} className="text-gray-800 font-medium underline decoration-gray-300">
                            {item.phone}
                          </a>
                        </div>
                        <div className="flex items-start gap-3 text-sm">
                          <MapPin size={14} className="text-black mt-1" />
                          <p className="text-gray-600">{item.location}</p>
                        </div>
                      </div>

                      {/* Footer & Action */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-1">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                           <Calendar size={12} />
                           {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                        <button 
                          onClick={() => handleDelete(item._id)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
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