// // 'use client'
// // import React, { useState, useEffect } from 'react';
// // import { 
// //   Search, 
// //   Phone, 
// //   Mail, 
// //   Calendar, 
// //   Eye, 
// //   Trash2, 
// //   CheckCircle, 
// //   Clock, 
// //   XCircle,
// //   RefreshCw,
// //   ChevronLeft,
// //   ChevronRight
// // } from 'lucide-react';
// // import Navbar from '../Navbar/Navbar';
// // import Sidebar from '../Sidebar/Sidebar';

// // // ============================================
// // // TYPESCRIPT INTERFACES
// // // ============================================

// // interface Contact {
// //   _id: string;
// //   name: string;
// //   phone: string;
// //   subject: 'Buy Property' | 'Sell Property' | 'Documentation' | 'Other';
// //   message: string;
// //   status: 'pending' | 'contacted' | 'resolved';
// //   createdAt: string;
// //   updatedAt: string;
// // }

// // interface StatusStat {
// //   _id: string;
// //   count: number;
// // }

// // interface Stats {
// //   total: number;
// //   todayCount: number;
// //   byStatus: StatusStat[];
// // }

// // interface ApiResponse<T> {
// //   success: boolean;
// //   data?: T;
// //   count?: number;
// //   total?: number;
// //   page?: number;
// //   pages?: number;
// //   message?: string;
// //   errors?: string[];
// // }

// // // ============================================
// // // MAIN COMPONENT
// // // ============================================

// // export default function ContactListView() {
// //   // Sidebar state
// //   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

// //   // State management with proper types
// //   const [contacts, setContacts] = useState<Contact[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const [searchTerm, setSearchTerm] = useState<string>('');
// //   const [statusFilter, setStatusFilter] = useState<string>('all');
// //   const [currentPage, setCurrentPage] = useState<number>(1);
// //   const [totalPages, setTotalPages] = useState<number>(1);
// //   const [totalContacts, setTotalContacts] = useState<number>(0);
// //   const [stats, setStats] = useState<Stats>({
// //     total: 0,
// //     todayCount: 0,
// //     byStatus: []
// //   });

// //   // Fetch contacts from API
// //   const fetchContacts = async (): Promise<void> => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       // Build query parameters
// //       const params = new URLSearchParams({
// //         page: currentPage.toString(),
// //         limit: '10',
// //         ...(statusFilter !== 'all' && { status: statusFilter }),
// //         ...(searchTerm && { search: searchTerm })
// //       });

// //       const response = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts?${params}`);
// //       const data: ApiResponse<Contact[]> = await response.json();

// //       if (response.ok && data.success) {
// //         setContacts(data.data || []);
// //         setTotalPages(data.pages || 1);
// //         setTotalContacts(data.total || 0);
// //       } else {
// //         setError(data.message || 'Failed to fetch contacts');
// //       }
// //     } catch (err) {
// //       console.error('Error fetching contacts:', err);
// //       setError('Network error. Please check your connection.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch statistics
// //   const fetchStats = async (): Promise<void> => {
// //     try {
// //       const response = await fetch('https://propertybackend-6bou.onrender.com/api/contacts/stats/summary');
// //       const data: ApiResponse<Stats> = await response.json();

// //       if (response.ok && data.success && data.data) {
// //         setStats(data.data);
// //       }
// //     } catch (err) {
// //       console.error('Error fetching stats:', err);
// //     }
// //   };

// //   // Delete contact
// //   const handleDelete = async (id: string, name: string): Promise<void> => {
// //     if (!confirm(`Are you sure you want to delete contact: ${name}?`)) {
// //       return;
// //     }

// //     try {
// //       const response = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}`, {
// //         method: 'DELETE'
// //       });

// //       const data: ApiResponse<{ id: string; name: string }> = await response.json();

// //       if (response.ok && data.success) {
// //         alert('Contact deleted successfully!');
// //         fetchContacts();
// //         fetchStats();
// //       } else {
// //         alert(data.message || 'Failed to delete contact');
// //       }
// //     } catch (err) {
// //       console.error('Error deleting contact:', err);
// //       alert('Network error. Please try again.');
// //     }
// //   };

// //   // Update contact status
// //   const handleStatusUpdate = async (id: string, newStatus: string): Promise<void> => {
// //     try {
// //       const response = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}/status`, {
// //         method: 'PATCH',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ status: newStatus })
// //       });

// //       const data: ApiResponse<Contact> = await response.json();

// //       if (response.ok && data.success) {
// //         alert('Status updated successfully!');
// //         fetchContacts();
// //         fetchStats();
// //       } else {
// //         alert(data.message || 'Failed to update status');
// //       }
// //     } catch (err) {
// //       console.error('Error updating status:', err);
// //       alert('Network error. Please try again.');
// //     }
// //   };

// //   // Load contacts on mount and when filters change
// //   useEffect(() => {
// //     fetchContacts();
// //   }, [currentPage, statusFilter, searchTerm]);

// //   // Load stats on mount
// //   useEffect(() => {
// //     fetchStats();
// //   }, []);

// //   // Get status badge color
// //   const getStatusColor = (status: string): string => {
// //     switch (status) {
// //       case 'pending':
// //         return 'bg-yellow-100 text-yellow-800 border-yellow-300';
// //       case 'contacted':
// //         return 'bg-blue-100 text-blue-800 border-blue-300';
// //       case 'resolved':
// //         return 'bg-green-100 text-green-800 border-green-300';
// //       default:
// //         return 'bg-gray-100 text-gray-800 border-gray-300';
// //     }
// //   };

// //   // Format date
// //   const formatDate = (dateString: string): string => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString('en-IN', {
// //       day: '2-digit',
// //       month: 'short',
// //       year: 'numeric',
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   // Get stat count by status
// //   const getStatCount = (status: string): number => {
// //     const stat = stats.byStatus.find((s: StatusStat) => s._id === status);
// //     return stat ? stat.count : 0;
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
// //       {/* Sidebar */}
// //       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col overflow-hidden">
// //         {/* Navbar */}
// //         <Navbar setSidebarOpen={setSidebarOpen} />
        
// //         {/* Page Content */}
// //         <main className="flex-1 overflow-y-auto p-6">
// //           <div className="max-w-7xl mx-auto">
            
// //             {/* Header */}
// //             <div className="mb-8">
// //               <h1 className="text-3xl font-bold text-gray-900 mb-2">
// //                 संपर्क सूची (Contact List)
// //               </h1>
// //               <p className="text-gray-600">
// //                 Manage all contact form submissions
// //               </p>
// //             </div>

// //             {/* Statistics Cards */}
// //             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// //               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-600 mb-1">Total Contacts</p>
// //                     <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
// //                   </div>
// //                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
// //                     <Mail className="text-blue-600" size={24} />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-600 mb-1">Pending</p>
// //                     <p className="text-3xl font-bold text-yellow-600">{getStatCount('pending')}</p>
// //                   </div>
// //                   <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
// //                     <Clock className="text-yellow-600" size={24} />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-600 mb-1">Contacted</p>
// //                     <p className="text-3xl font-bold text-blue-600">{getStatCount('contacted')}</p>
// //                   </div>
// //                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
// //                     <Phone className="text-blue-600" size={24} />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-600 mb-1">Resolved</p>
// //                     <p className="text-3xl font-bold text-green-600">{getStatCount('resolved')}</p>
// //                   </div>
// //                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
// //                     <CheckCircle className="text-green-600" size={24} />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Filters and Search */}
// //             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
// //               <div className="flex flex-col md:flex-row gap-4">
                
// //                 {/* Search */}
// //                 <div className="flex-1">
// //                   <div className="relative">
// //                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
// //                     <input
// //                       type="text"
// //                       placeholder="Search by name or phone..."
// //                       value={searchTerm}
// //                       onChange={(e) => setSearchTerm(e.target.value)}
// //                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Status Filter */}
// //                 <div className="w-full md:w-48">
// //                   <select
// //                     value={statusFilter}
// //                     onChange={(e) => {
// //                       setStatusFilter(e.target.value);
// //                       setCurrentPage(1);
// //                     }}
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer"
// //                   >
// //                     <option value="all">All Status</option>
// //                     <option value="pending">Pending</option>
// //                     <option value="contacted">Contacted</option>
// //                     <option value="resolved">Resolved</option>
// //                   </select>
// //                 </div>

// //                 {/* Refresh Button */}
// //                 <button
// //                   onClick={() => {
// //                     fetchContacts();
// //                     fetchStats();
// //                   }}
// //                   className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
// //                 >
// //                   <RefreshCw size={18} />
// //                   Refresh
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Contact List */}
// //             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              
// //               {/* Loading State */}
// //               {loading && (
// //                 <div className="flex items-center justify-center py-20">
// //                   <div className="flex flex-col items-center gap-4">
// //                     <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
// //                     <p className="text-gray-600">Loading contacts...</p>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Error State */}
// //               {error && !loading && (
// //                 <div className="flex items-center justify-center py-20">
// //                   <div className="text-center">
// //                     <XCircle className="mx-auto mb-4 text-red-500" size={48} />
// //                     <p className="text-red-600 font-semibold mb-2">Error Loading Contacts</p>
// //                     <p className="text-gray-600">{error}</p>
// //                     <button
// //                       onClick={fetchContacts}
// //                       className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
// //                     >
// //                       Try Again
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Empty State */}
// //               {!loading && !error && contacts.length === 0 && (
// //                 <div className="flex items-center justify-center py-20">
// //                   <div className="text-center">
// //                     <Mail className="mx-auto mb-4 text-gray-400" size={48} />
// //                     <p className="text-gray-600 font-semibold mb-2">No contacts found</p>
// //                     <p className="text-gray-500">Try adjusting your search or filters</p>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Contacts Table */}
// //               {!loading && !error && contacts.length > 0 && (
// //                 <>
// //                   <div className="overflow-x-auto">
// //                     <table className="w-full">
// //                       <thead className="bg-gray-50 border-b border-gray-200">
// //                         <tr>
// //                           <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                             Contact Info
// //                           </th>
// //                           <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                             Subject
// //                           </th>
// //                           <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                             Message
// //                           </th>
// //                           <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                             Status
// //                           </th>
// //                           <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                             Date
// //                           </th>
// //                           <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
// //                             Actions
// //                           </th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="divide-y divide-gray-200">
// //                         {contacts.map((contact: Contact) => (
// //                           <tr key={contact._id} className="hover:bg-gray-50 transition-colors">
                            
// //                             {/* Contact Info */}
// //                             <td className="px-6 py-4">
// //                               <div className="flex flex-col">
// //                                 <span className="font-semibold text-gray-900">{contact.name}</span>
// //                                 <span className="text-sm text-gray-600 flex items-center gap-1 mt-1">
// //                                   <Phone size={12} />
// //                                   {contact.phone}
// //                                 </span>
// //                               </div>
// //                             </td>

// //                             {/* Subject */}
// //                             <td className="px-6 py-4">
// //                               <span className="text-sm text-gray-700">{contact.subject}</span>
// //                             </td>

// //                             {/* Message */}
// //                             <td className="px-6 py-4">
// //                               <div className="text-sm text-gray-600 max-w-xs truncate">
// //                                 {contact.message || <span className="text-gray-400 italic">No message</span>}
// //                               </div>
// //                             </td>

// //                             {/* Status */}
// //                             <td className="px-6 py-4">
// //                               <select
// //                                 value={contact.status}
// //                                 onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
// //                                 className={`px-3 py-1 rounded-full text-xs font-semibold border cursor-pointer ${getStatusColor(contact.status)}`}
// //                               >
// //                                 <option value="pending">Pending</option>
// //                                 <option value="contacted">Contacted</option>
// //                                 <option value="resolved">Resolved</option>
// //                               </select>
// //                             </td>

// //                             {/* Date */}
// //                             <td className="px-6 py-4">
// //                               <div className="flex items-center gap-1 text-sm text-gray-600">
// //                                 <Calendar size={14} />
// //                                 {formatDate(contact.createdAt)}
// //                               </div>
// //                             </td>

// //                             {/* Actions */}
// //                             <td className="px-6 py-4">
// //                               <div className="flex items-center justify-end gap-2">
// //                                 {/* <button
// //                                   onClick={() => alert(`View details for: ${contact.name}\n\nMessage: ${contact.message}`)}
// //                                   className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
// //                                   title="View Details"
// //                                 >
// //                                   <Eye size={18} />
// //                                 </button> */}
// //                                 <button
// //                                   onClick={() => handleDelete(contact._id, contact.name)}
// //                                   className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
// //                                   title="Delete"
// //                                 >
// //                                   <Trash2 size={18} />
// //                                 </button>
// //                               </div>
// //                             </td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>

// //                   {/* Pagination */}
// //                   <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
// //                     <div className="flex items-center justify-between">
// //                       <div className="text-sm text-gray-600">
// //                         Showing <span className="font-semibold">{((currentPage - 1) * 10) + 1}</span> to{' '}
// //                         <span className="font-semibold">{Math.min(currentPage * 10, totalContacts)}</span> of{' '}
// //                         <span className="font-semibold">{totalContacts}</span> contacts
// //                       </div>

// //                       <div className="flex items-center gap-2">
// //                         <button
// //                           onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
// //                           disabled={currentPage === 1}
// //                           className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
// //                         >
// //                           <ChevronLeft size={18} />
// //                           Previous
// //                         </button>

// //                         <div className="flex items-center gap-1">
// //                           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
// //                             let pageNum: number;
// //                             if (totalPages <= 5) {
// //                               pageNum = i + 1;
// //                             } else if (currentPage <= 3) {
// //                               pageNum = i + 1;
// //                             } else if (currentPage >= totalPages - 2) {
// //                               pageNum = totalPages - 4 + i;
// //                             } else {
// //                               pageNum = currentPage - 2 + i;
// //                             }

// //                             return (
// //                               <button
// //                                 key={i}
// //                                 onClick={() => setCurrentPage(pageNum)}
// //                                 className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
// //                                   currentPage === pageNum
// //                                     ? 'bg-blue-600 text-white'
// //                                     : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
// //                                 }`}
// //                               >
// //                                 {pageNum}
// //                               </button>
// //                             );
// //                           })}
// //                         </div>

// //                         <button
// //                           onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
// //                           disabled={currentPage === totalPages}
// //                           className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
// //                         >
// //                           Next
// //                           <ChevronRight size={18} />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </>
// //               )}
// //             </div>

// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // } 
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { 
//   Search, Phone, Mail, Trash2, Loader2, X, RefreshCw, Clock, CheckCircle, Filter 
// } from 'lucide-react';
// import Navbar from '@/Admin/Navbar/Navbar';
// import Sidebar from '@/Admin/Sidebar/Sidebar';

// /* ================= TYPES ================= */
// interface Contact {
//   _id: string;
//   name: string;
//   phone: string;
//   subject: string;
//   message: string;
//   status: 'pending' | 'contacted' | 'resolved';
//   createdAt: string;
// }

// interface Stats {
//   total: number;
//   pending: number;
//   contacted: number;
//   resolved: number;
// }

// /* ================= COMPONENT ================= */
// export default function ContactListPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [fetchLoading, setFetchLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, contacted: 0, resolved: 0 });

//   /* ================= FETCH DATA ================= */
//   const fetchContacts = async () => {
//     try {
//       setFetchLoading(true);
//       const res = await fetch('https://propertybackend-6bou.onrender.com/api/contacts'); // Backend endpoint
//       const data = await res.json();

//       if (data.success) {
//         const contactsData: Contact[] = Array.isArray(data.data) ? data.data : [];
//         setContacts(contactsData);
//         setFilteredContacts(contactsData);

//         // Calculate stats
//         setStats({
//           total: contactsData.length,
//           pending: contactsData.filter(c => c.status === 'pending').length,
//           contacted: contactsData.filter(c => c.status === 'contacted').length,
//           resolved: contactsData.filter(c => c.status === 'resolved').length,
//         });

//         setError('');
//       } else {
//         throw new Error(data.message || 'Failed to fetch contacts');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load contacts. Please check your connection.');
//     } finally {
//       setLoading(false);
//       setFetchLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   /* ================= FILTERING ================= */
//   useEffect(() => {
//     let results = [...contacts];

//     if (searchTerm) {
//       const lowerTerm = searchTerm.toLowerCase();
//       results = results.filter(c =>
//         c.name.toLowerCase().includes(lowerTerm) ||
//         c.phone.includes(lowerTerm) ||
//         c.subject.toLowerCase().includes(lowerTerm)
//       );
//     }

//     if (statusFilter !== 'all') {
//       results = results.filter(c => c.status === statusFilter);
//     }

//     setFilteredContacts(results);
//   }, [searchTerm, statusFilter, contacts]);

//   /* ================= ACTIONS ================= */
//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this inquiry?')) return;

//     try {
//       const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}`, { method: 'DELETE' });
//       const data = await res.json();
//       if (data.success) fetchContacts();
//       else alert('Failed to delete contact');
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting contact');
//     }
//   };

//   const handleStatusChange = async (id: string, status: string) => {
//     try {
//       const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}/status`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status }),
//       });
//       const data = await res.json();
//       if (data.success) fetchContacts();
//       else alert('Failed to update status');
//     } catch (err) {
//       console.error(err);
//       alert('Error updating status');
//     }
//   };

//   const formatDate = (date: string) => 
//     new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

//   /* ================= UI ================= */
//   return (
//     <div className="flex h-screen bg-white text-gray-900">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-200">
//         <Navbar setSidebarOpen={setSidebarOpen} />
//         <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto">
            
//             {/* Header */}
//             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold">Inquiries</h1>
//                 <p className="text-gray-500 text-sm mt-1">Manage customer contact requests.</p>
//               </div>
//               <button onClick={fetchContacts} className="p-2.5 bg-white border rounded-lg hover:bg-gray-100">
//                 <RefreshCw size={18} className={fetchLoading ? 'animate-spin' : ''} />
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//               <StatCard label="Total" value={stats.total} icon={<Mail size={20} />} />
//               <StatCard label="Pending" value={stats.pending} icon={<Clock size={20} />} active />
//               <StatCard label="Contacted" value={stats.contacted} icon={<Phone size={20} />} />
//               <StatCard label="Resolved" value={stats.resolved} icon={<CheckCircle size={20} />} />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-col md:flex-row gap-4 bg-white border p-4 rounded-xl shadow-sm mb-6">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search name, phone, or subject..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-black/5"
//                 />
//                 {searchTerm && (
//                   <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     <X size={16} />
//                   </button>
//                 )}
//               </div>
//               <div className="relative min-w-[200px]">
//                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   className="w-full pl-9 pr-8 py-2.5 border rounded-lg text-sm"
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="pending">Pending</option>
//                   <option value="contacted">Contacted</option>
//                   <option value="resolved">Resolved</option>
//                 </select>
//               </div>
//             </div>

//             {/* Contact List */}
//             <div className="bg-white rounded-xl border shadow-sm overflow-hidden min-h-[400px]">
//               {loading ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//                   <Loader2 size={40} className="animate-spin mb-4 text-black opacity-20" />
//                   <p className="text-sm font-medium">Loading inquiries...</p>
//                 </div>
//               ) : filteredContacts.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-gray-500">
//                   <Mail size={24} className="mb-4 text-gray-400" />
//                   <h3 className="text-base font-bold mb-1">No Inquiries Found</h3>
//                   <p className="text-sm text-gray-400">{searchTerm ? 'Try adjusting your search filters.' : 'You have no messages.'}</p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-gray-100">
//                   <div className="hidden md:grid grid-cols-12 bg-gray-50 px-6 py-3 text-xs font-bold text-gray-500 uppercase border-b">
//                     <div className="col-span-3">User Details</div>
//                     <div className="col-span-3">Subject</div>
//                     <div className="col-span-3">Message</div>
//                     <div className="col-span-2">Status</div>
//                     <div className="col-span-1 text-right">Action</div>
//                   </div>

//                   {filteredContacts.map(contact => (
//                     <div key={contact._id} className="group md:grid md:grid-cols-12 flex flex-col p-4 md:px-6 md:py-4 hover:bg-gray-50">
//                       <div className="col-span-3 mb-2 md:mb-0">
//                         <p className="font-bold">{contact.name}</p>
//                         <a href={`tel:${contact.phone}`} className="flex items-center gap-1 text-gray-500 text-xs">
//                           <Phone size={12} /> {contact.phone}
//                         </a>
//                         <p className="text-[10px] text-gray-400 mt-1">{formatDate(contact.createdAt)}</p>
//                       </div>
//                       <div className="col-span-3 mb-2 md:mb-0 font-medium text-gray-700">{contact.subject}</div>
//                       <div className="col-span-3 mb-3 md:mb-0 text-gray-500 line-clamp-2">{contact.message}</div>
//                       <div className="col-span-2 mb-3 md:mb-0">
//                         <select
//                           value={contact.status}
//                           onChange={(e) => handleStatusChange(contact._id, e.target.value)}
//                           className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase border cursor-pointer ${
//                             contact.status === 'pending' ? 'bg-orange-50 text-orange-600 border-orange-200' :
//                             contact.status === 'contacted' ? 'bg-blue-50 text-blue-600 border-blue-200' :
//                             'bg-green-50 text-green-600 border-green-200'
//                           }`}
//                         >
//                           <option value="pending">Pending</option>
//                           <option value="contacted">Contacted</option>
//                           <option value="resolved">Resolved</option>
//                         </select>
//                       </div>
//                       <div className="col-span-1 flex justify-end">
//                         <button onClick={() => handleDelete(contact._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ================= HELPER COMPONENT ================= */
// function StatCard({ label, value, icon, active }: { label: string, value: number, icon: React.ReactNode, active?: boolean }) {
//   return (
//     <div className={`p-5 rounded-xl border ${active ? 'border-black shadow-md' : 'border-gray-200 shadow-sm'} bg-white`}>
//       <div className="flex justify-between mb-2">
//         <span className="text-xs font-bold uppercase text-gray-500">{label}</span>
//         <div className={`p-1.5 rounded-lg ${active ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>{icon}</div>
//       </div>
//       <p className="text-2xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { 
//   Search, Phone, Mail, Trash2, Loader2, X, RefreshCw, Clock, CheckCircle, Filter, Eye, ChevronDown 
// } from 'lucide-react';
// import Navbar from '@/Admin/Navbar/Navbar';
// import Sidebar from '@/Admin/Sidebar/Sidebar';

// /* ================= TYPES ================= */
// interface Contact {
//   _id: string;
//   name: string;
//   phone: string;
//   subject: string;
//   message: string;
//   status: 'pending' | 'contacted' | 'resolved';
//   createdAt: string;
// }

// interface Stats {
//   total: number;
//   pending: number;
//   contacted: number;
//   resolved: number;
// }

// /* ================= COMPONENT ================= */
// export default function ContactListPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [fetchLoading, setFetchLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, contacted: 0, resolved: 0 });
//   const [expandedContact, setExpandedContact] = useState<string | null>(null);

//   /* ================= FETCH DATA ================= */
//   const fetchContacts = async () => {
//     try {
//       setFetchLoading(true);
//       const res = await fetch('https://propertybackend-6bou.onrender.com/api/contacts');
//       const data = await res.json();

//       if (data.success) {
//         const contactsData: Contact[] = Array.isArray(data.data) ? data.data : [];
//         setContacts(contactsData);
//         setFilteredContacts(contactsData);

//         setStats({
//           total: contactsData.length,
//           pending: contactsData.filter(c => c.status === 'pending').length,
//           contacted: contactsData.filter(c => c.status === 'contacted').length,
//           resolved: contactsData.filter(c => c.status === 'resolved').length,
//         });

//         setError('');
//       } else {
//         throw new Error(data.message || 'Failed to fetch contacts');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load contacts. Please check your connection.');
//     } finally {
//       setLoading(false);
//       setFetchLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   /* ================= FILTERING ================= */
//   useEffect(() => {
//     let results = [...contacts];

//     if (searchTerm) {
//       const lowerTerm = searchTerm.toLowerCase();
//       results = results.filter(c =>
//         c.name.toLowerCase().includes(lowerTerm) ||
//         c.phone.includes(lowerTerm) ||
//         c.subject.toLowerCase().includes(lowerTerm) ||
//         c.message.toLowerCase().includes(lowerTerm)
//       );
//     }

//     if (statusFilter !== 'all') {
//       results = results.filter(c => c.status === statusFilter);
//     }

//     setFilteredContacts(results);
//   }, [searchTerm, statusFilter, contacts]);

//   /* ================= ACTIONS ================= */
//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this inquiry?')) return;

//     try {
//       const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}`, { method: 'DELETE' });
//       const data = await res.json();
//       if (data.success) fetchContacts();
//       else alert('Failed to delete contact');
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting contact');
//     }
//   };

//   const handleStatusChange = async (id: string, status: string) => {
//     try {
//       const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}/status`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status }),
//       });
//       const data = await res.json();
//       if (data.success) fetchContacts();
//       else alert('Failed to update status');
//     } catch (err) {
//       console.error(err);
//       alert('Error updating status');
//     }
//   };

//   const formatDate = (date: string) => 
//     new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

//   /* ================= UI ================= */
//   return (
//     <div className="flex h-screen bg-white text-gray-900">
//        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-200">
//           <Navbar setSidebarOpen={setSidebarOpen} />
        
//         <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto">
            
//             {/* Header */}
//             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold">Inquiries</h1>
//                 <p className="text-gray-500 text-sm mt-1">Manage customer contact requests.</p>
//               </div>
//               <button onClick={fetchContacts} className="p-2.5 bg-white border rounded-lg hover:bg-gray-100">
//                 <RefreshCw size={18} className={fetchLoading ? 'animate-spin' : ''} />
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//               <StatCard label="Total" value={stats.total} icon={<Mail size={20} />} />
//               <StatCard label="Pending" value={stats.pending} icon={<Clock size={20} />} active />
//               <StatCard label="Contacted" value={stats.contacted} icon={<Phone size={20} />} />
//               <StatCard label="Resolved" value={stats.resolved} icon={<CheckCircle size={20} />} />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-col md:flex-row gap-4 bg-white border p-4 rounded-xl shadow-sm mb-6">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search name, phone, subject, or message..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-black/5"
//                 />
//                 {searchTerm && (
//                   <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//                     <X size={16} />
//                   </button>
//                 )}
//               </div>
//               <div className="relative min-w-[200px]">
//                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   className="w-full pl-9 pr-8 py-2.5 border rounded-lg text-sm"
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="pending">Pending</option>
//                   <option value="contacted">Contacted</option>
//                   <option value="resolved">Resolved</option>
//                 </select>
//               </div>
//             </div>

//             {/* Contact List */}
//             <div className="bg-white rounded-xl border shadow-sm overflow-hidden min-h-[400px]">
//               {loading ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//                   <Loader2 size={40} className="animate-spin mb-4 text-black opacity-20" />
//                   <p className="text-sm font-medium">Loading inquiries...</p>
//                 </div>
//               ) : filteredContacts.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-gray-500">
//                   <Mail size={24} className="mb-4 text-gray-400" />
//                   <h3 className="text-base font-bold mb-1">No Inquiries Found</h3>
//                   <p className="text-sm text-gray-400">{searchTerm ? 'Try adjusting your search filters.' : 'You have no messages.'}</p>
//                 </div>
//               ) : (
//                 <div className="divide-y divide-gray-100">
//                   {/* Desktop Header */}
//                   <div className="hidden md:grid grid-cols-12 bg-gray-50 px-6 py-3 text-xs font-bold text-gray-500 uppercase border-b">
//                     <div className="col-span-2">User Details</div>
//                     <div className="col-span-2">Subject</div>
//                     <div className="col-span-4">Message</div>
//                     <div className="col-span-2">Status</div>
//                     <div className="col-span-1">Date</div>
//                     <div className="col-span-1 text-right">Action</div>
//                   </div>

//                   {/* Contact Rows */}
//                   {filteredContacts.map(contact => (
//                     <div key={contact._id} className="group">
//                       {/* Desktop View */}
//                       <div className="hidden md:grid md:grid-cols-12 px-6 py-4 hover:bg-gray-50 items-start">
//                         <div className="col-span-2">
//                           <p className="font-bold text-sm">{contact.name}</p>
//                           <a href={`tel:${contact.phone}`} className="flex items-center gap-1 text-gray-500 text-xs mt-1">
//                             <Phone size={12} /> {contact.phone}
//                           </a>
//                         </div>
                        
//                         <div className="col-span-2">
//                           <span className="text-sm font-medium text-gray-700">{contact.subject}</span>
//                         </div>
                        
//                         <div className="col-span-4">
//                           <div className="text-sm text-gray-600">
//                             {expandedContact === contact._id ? (
//                               <div className="whitespace-pre-wrap break-words">{contact.message || 'No message'}</div>
//                             ) : (
//                               <div className="line-clamp-2">{contact.message || 'No message'}</div>
//                             )}
//                             {contact.message && contact.message.length > 100 && (
//                               <button
//                                 onClick={() => setExpandedContact(expandedContact === contact._id ? null : contact._id)}
//                                 className="text-blue-600 text-xs mt-1 hover:underline flex items-center gap-1"
//                               >
//                                 {expandedContact === contact._id ? 'Show less' : 'Show more'}
//                                 <ChevronDown size={12} className={expandedContact === contact._id ? 'rotate-180' : ''} />
//                               </button>
//                             )}
//                           </div>
//                         </div>
                        
//                         <div className="col-span-2">
//                           <select
//                             value={contact.status}
//                             onChange={(e) => handleStatusChange(contact._id, e.target.value)}
//                             className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase border cursor-pointer ${
//                               contact.status === 'pending' ? 'bg-orange-50 text-orange-600 border-orange-200' :
//                               contact.status === 'contacted' ? 'bg-blue-50 text-blue-600 border-blue-200' :
//                               'bg-green-50 text-green-600 border-green-200'
//                             }`}
//                           >
//                             <option value="pending">Pending</option>
//                             <option value="contacted">Contacted</option>
//                             <option value="resolved">Resolved</option>
//                           </select>
//                         </div>
                        
//                         <div className="col-span-1">
//                           <p className="text-[11px] text-gray-400">{formatDate(contact.createdAt)}</p>
//                         </div>
                        
//                         <div className="col-span-1 flex justify-end">
//                           <button onClick={() => handleDelete(contact._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Mobile View */}
//                       <div className="md:hidden p-4 hover:bg-gray-50">
//                         <div className="flex justify-between items-start mb-3">
//                           <div className="flex-1">
//                             <p className="font-bold text-sm">{contact.name}</p>
//                             <a href={`tel:${contact.phone}`} className="flex items-center gap-1 text-gray-500 text-xs mt-1">
//                               <Phone size={12} /> {contact.phone}
//                             </a>
//                           </div>
//                           <button onClick={() => handleDelete(contact._id)} className="p-2 text-gray-400 hover:text-red-600">
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
                        
//                         <div className="mb-2">
//                           <span className="text-xs font-semibold text-gray-500 uppercase">Subject</span>
//                           <p className="text-sm font-medium text-gray-700 mt-1">{contact.subject}</p>
//                         </div>
                        
//                         <div className="mb-3">
//                           <span className="text-xs font-semibold text-gray-500 uppercase">Message</span>
//                           <div className="text-sm text-gray-600 mt-1">
//                             {expandedContact === contact._id ? (
//                               <div className="whitespace-pre-wrap break-words">{contact.message || 'No message'}</div>
//                             ) : (
//                               <div className="line-clamp-3">{contact.message || 'No message'}</div>
//                             )}
//                             {contact.message && contact.message.length > 100 && (
//                               <button
//                                 onClick={() => setExpandedContact(expandedContact === contact._id ? null : contact._id)}
//                                 className="text-blue-600 text-xs mt-1 hover:underline"
//                               >
//                                 {expandedContact === contact._id ? 'Show less' : 'Show more'}
//                               </button>
//                             )}
//                           </div>
//                         </div>
                        
//                         <div className="flex justify-between items-center">
//                           <select
//                             value={contact.status}
//                             onChange={(e) => handleStatusChange(contact._id, e.target.value)}
//                             className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase border cursor-pointer ${
//                               contact.status === 'pending' ? 'bg-orange-50 text-orange-600 border-orange-200' :
//                               contact.status === 'contacted' ? 'bg-blue-50 text-blue-600 border-blue-200' :
//                               'bg-green-50 text-green-600 border-green-200'
//                             }`}
//                           >
//                             <option value="pending">Pending</option>
//                             <option value="contacted">Contacted</option>
//                             <option value="resolved">Resolved</option>
//                           </select>
//                           <p className="text-[11px] text-gray-400">{formatDate(contact.createdAt)}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ================= HELPER COMPONENT ================= */
// function StatCard({ label, value, icon, active }: { label: string, value: number, icon: React.ReactNode, active?: boolean }) {
//   return (
//     <div className={`p-5 rounded-xl border ${active ? 'border-black shadow-md' : 'border-gray-200 shadow-sm'} bg-white`}>
//       <div className="flex justify-between mb-2">
//         <span className="text-xs font-bold uppercase text-gray-500">{label}</span>
//         <div className={`p-1.5 rounded-lg ${active ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>{icon}</div>
//       </div>
//       <p className="text-2xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { 
//   Search, Phone, Mail, Trash2, Loader2, X, RefreshCw, Clock, CheckCircle, Filter, Calendar 
// } from 'lucide-react';
// import Navbar from '@/Admin/Navbar/Navbar';
// import Sidebar from '@/Admin/Sidebar/Sidebar';

// /* ================= TYPES ================= */
// interface Contact {
//   _id: string;
//   name: string;
//   phone: string;
//   subject: string;
//   message: string;
//   status: 'pending' | 'contacted' | 'resolved';
//   createdAt: string;
// }

// interface Stats {
//   total: number;
//   pending: number;
//   contacted: number;
//   resolved: number;
// }

// /* ================= COMPONENT ================= */
// export default function ContactListPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [contacts, setContacts] = useState<Contact[]>([]);
//   const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [loading, setLoading] = useState(true);
//   const [fetchLoading, setFetchLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, contacted: 0, resolved: 0 });

//   /* ================= FETCH DATA ================= */
//   const fetchContacts = async () => {
//     try {
//       setFetchLoading(true);
//       const res = await fetch('https://propertybackend-6bou.onrender.com/api/contacts');
//       const data = await res.json();

//       if (data.success) {
//         const contactsData: Contact[] = Array.isArray(data.data) ? data.data : [];
//         setContacts(contactsData);
//         setFilteredContacts(contactsData);

//         setStats({
//           total: contactsData.length,
//           pending: contactsData.filter(c => c.status === 'pending').length,
//           contacted: contactsData.filter(c => c.status === 'contacted').length,
//           resolved: contactsData.filter(c => c.status === 'resolved').length,
//         });

//         setError('');
//       } else {
//         throw new Error(data.message || 'Failed to fetch contacts');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load contacts. Please check your connection.');
//     } finally {
//       setLoading(false);
//       setFetchLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   /* ================= FILTERING ================= */
//   useEffect(() => {
//     let results = [...contacts];

//     if (searchTerm) {
//       const lowerTerm = searchTerm.toLowerCase();
//       results = results.filter(c =>
//         c.name.toLowerCase().includes(lowerTerm) ||
//         c.phone.includes(lowerTerm) ||
//         c.subject.toLowerCase().includes(lowerTerm) ||
//         c.message.toLowerCase().includes(lowerTerm)
//       );
//     }

//     if (statusFilter !== 'all') {
//       results = results.filter(c => c.status === statusFilter);
//     }

//     setFilteredContacts(results);
//   }, [searchTerm, statusFilter, contacts]);

//   /* ================= ACTIONS ================= */
//   const handleDelete = async (id: string) => {
//     if (!confirm('Are you sure you want to delete this inquiry?')) return;

//     try {
//       const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}`, { method: 'DELETE' });
//       const data = await res.json();
//       if (data.success) fetchContacts();
//       else alert('Failed to delete contact');
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting contact');
//     }
//   };

//   const handleStatusChange = async (id: string, status: string) => {
//     try {
//       const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}/status`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status }),
//       });
//       const data = await res.json();
//       if (data.success) fetchContacts();
//       else alert('Failed to update status');
//     } catch (err) {
//       console.error(err);
//       alert('Error updating status');
//     }
//   };

//   const formatDate = (date: string) => 
//     new Date(date).toLocaleDateString('en-IN', { 
//       day: '2-digit', 
//       month: 'short', 
//       year: 'numeric', 
//       hour: '2-digit', 
//       minute: '2-digit' 
//     });

//   /* ================= UI ================= */
//   return (
//     <div className="flex h-screen bg-white text-gray-900">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-200">
//         <Navbar setSidebarOpen={setSidebarOpen} />
//         <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
//           <div className="max-w-7xl mx-auto">
            
//             {/* Header */}
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900">Contact Inquiries</h1>
//                 <p className="text-gray-500 text-sm mt-1">Manage and track all customer contact requests</p>
//               </div>
//               <button 
//                 onClick={fetchContacts} 
//                 className="flex items-center gap-2 px-4 py-2.5 bg-white border rounded-lg hover:bg-gray-100 transition-colors"
//               >
//                 <RefreshCw size={18} className={fetchLoading ? 'animate-spin' : ''} />
//                 <span className="text-sm font-medium">Refresh</span>
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//               <StatCard label="Total" value={stats.total} icon={<Mail size={20} />} />
//               <StatCard label="Pending" value={stats.pending} icon={<Clock size={20} />} active />
//               <StatCard label="Contacted" value={stats.contacted} icon={<Phone size={20} />} />
//               <StatCard label="Resolved" value={stats.resolved} icon={<CheckCircle size={20} />} />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-col md:flex-row gap-4 bg-white border p-4 rounded-xl shadow-sm mb-6">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search name, phone, subject, or message..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 />
//                 {searchTerm && (
//                   <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                     <X size={16} />
//                   </button>
//                 )}
//               </div>
//               <div className="relative min-w-[200px]">
//                 <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   className="w-full pl-9 pr-8 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white cursor-pointer"
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="pending">Pending</option>
//                   <option value="contacted">Contacted</option>
//                   <option value="resolved">Resolved</option>
//                 </select>
//               </div>
//             </div>

//             {/* Results count */}
//             <div className="mb-3 text-sm text-gray-600">
//               Showing <span className="font-semibold text-gray-900">{filteredContacts.length}</span> of <span className="font-semibold text-gray-900">{stats.total}</span> contacts
//             </div>

//             {/* Contact List - TABLE VIEW */}
//             <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
//               {loading ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//                   <Loader2 size={40} className="animate-spin mb-4 text-black opacity-20" />
//                   <p className="text-sm font-medium">Loading inquiries...</p>
//                 </div>
//               ) : filteredContacts.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-gray-500">
//                   <Mail size={24} className="mb-4 text-gray-400" />
//                   <h3 className="text-base font-bold mb-1">No Inquiries Found</h3>
//                   <p className="text-sm text-gray-400">
//                     {searchTerm || statusFilter !== 'all' 
//                       ? 'Try adjusting your search filters.' 
//                       : 'You have no messages.'}
//                   </p>
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     {/* Table Header */}
//                     <thead>
//                       <tr className="bg-gray-50 border-b border-gray-200">
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                           Contact Info
//                         </th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                           Subject
//                         </th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                           Message
//                         </th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                           Status
//                         </th>
//                         <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
//                           Date & Time
//                         </th>
//                         <th className="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
//                           Action
//                         </th>
//                       </tr>
//                     </thead>

//                     {/* Table Body */}
//                     <tbody className="divide-y divide-gray-100">
//                       {filteredContacts.map(contact => (
//                         <tr key={contact._id} className="hover:bg-gray-50 transition-colors">
//                           {/* Contact Info */}
//                           <td className="px-6 py-4">
//                             <div className="flex flex-col gap-1">
//                               <p className="font-semibold text-gray-900">{contact.name}</p>
//                               <div className="flex items-center gap-1.5 text-sm text-gray-600">
//                                 <Phone size={14} />
//                                 <a href={`tel:${contact.phone}`} className="hover:text-blue-600 transition-colors">
//                                   {contact.phone}
//                                 </a>
//                               </div>
//                             </div>
//                           </td>

//                           {/* Subject */}
//                           <td className="px-6 py-4">
//                             <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-800">
//                               {contact.subject}
//                             </span>
//                           </td>

//                           {/* Message */}
//                           <td className="px-6 py-4">
//                             <div className="max-w-xs">
//                               <p className="text-sm text-gray-700 line-clamp-2 leading-relaxed">
//                                 {contact.message || <span className="text-gray-400 italic">No message</span>}
//                               </p>
//                             </div>
//                           </td>

//                           {/* Status */}
//                           <td className="px-6 py-4">
//                             <select
//                               value={contact.status}
//                               onChange={(e) => handleStatusChange(contact._id, e.target.value)}
//                               className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase border cursor-pointer transition-all hover:shadow-md ${
//                                 contact.status === 'pending' 
//                                   ? 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100' 
//                                   : contact.status === 'contacted' 
//                                   ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100' 
//                                   : 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
//                               }`}
//                             >
//                               <option value="pending">Pending</option>
//                               <option value="contacted">Contacted</option>
//                               <option value="resolved">Resolved</option>
//                             </select>
//                           </td>

//                           {/* Date & Time */}
//                           <td className="px-6 py-4">
//                             <div className="flex items-center gap-1.5 text-sm text-gray-600">
//                               <Calendar size={14} className="text-gray-400" />
//                               <span>{formatDate(contact.createdAt)}</span>
//                             </div>
//                           </td>

//                           {/* Action */}
//                           <td className="px-6 py-4">
//                             <div className="flex justify-center">
//                               <button 
//                                 onClick={() => handleDelete(contact._id)} 
//                                 className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
//                                 title="Delete inquiry"
//                               >
//                                 <Trash2 size={18} />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ================= HELPER COMPONENT ================= */
// function StatCard({ label, value, icon, active }: { label: string, value: number, icon: React.ReactNode, active?: boolean }) {
//   return (
//     <div className={`p-5 rounded-xl border transition-all ${
//       active 
//         ? 'border-black shadow-md bg-gradient-to-br from-gray-50 to-white' 
//         : 'border-gray-200 shadow-sm bg-white hover:shadow-md'
//     }`}>
//       <div className="flex justify-between items-start mb-3">
//         <span className="text-xs font-bold uppercase text-gray-500 tracking-wide">{label}</span>
//         <div className={`p-2 rounded-lg transition-all ${
//           active 
//             ? 'bg-black text-white' 
//             : 'bg-gray-100 text-gray-500'
//         }`}>
//           {icon}
//         </div>
//       </div>
//       <p className="text-3xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, Phone, Mail, Trash2, Loader2, X, RefreshCw, Clock, CheckCircle, Filter, Calendar, User
} from 'lucide-react';
import Navbar from '@/Admin/Navbar/Navbar';
import Sidebar from '@/Admin/Sidebar/Sidebar';

/* ================= TYPES ================= */
interface Contact {
  _id: string;
  name: string;
  phone: string;
  subject: string;
  message: string;
  status: 'pending' | 'contacted' | 'resolved';
  createdAt: string;
}

interface Stats {
  total: number;
  pending: number;
  contacted: number;
  resolved: number;
}

/* ================= COMPONENT ================= */
export default function ContactListPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, contacted: 0, resolved: 0 });

  /* ================= FETCH DATA ================= */
  const fetchContacts = async () => {
    try {
      setFetchLoading(true);
      // Simulate delay for better UX (remove in production)
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const res = await fetch('https://propertybackend-6bou.onrender.com/api/contacts');
      const data = await res.json();

      if (data.success) {
        const contactsData: Contact[] = Array.isArray(data.data) ? data.data : [];
        setContacts(contactsData);
        setFilteredContacts(contactsData);

        setStats({
          total: contactsData.length,
          pending: contactsData.filter(c => c.status === 'pending').length,
          contacted: contactsData.filter(c => c.status === 'contacted').length,
          resolved: contactsData.filter(c => c.status === 'resolved').length,
        });

        setError('');
      } else {
        throw new Error(data.message || 'Failed to fetch contacts');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load contacts. Please check your connection.');
      // Fallback dummy data for UI testing if API fails
      /* 
      const dummy: Contact[] = [
        { _id: '1', name: 'Rahul Sharma', phone: '9876543210', subject: 'Property Inquiry', message: 'Looking for 2BHK in Mumbai', status: 'pending', createdAt: new Date().toISOString() },
        { _id: '2', name: 'Priya Patel', phone: '8765432109', subject: 'Sell Request', message: 'Want to sell my flat', status: 'contacted', createdAt: new Date().toISOString() },
        { _id: '3', name: 'Amit Kumar', phone: '7654321098', subject: 'General Query', message: 'Just checking prices', status: 'resolved', createdAt: new Date().toISOString() },
      ];
      setContacts(dummy);
      setFilteredContacts(dummy);
      setStats({ total: 3, pending: 1, contacted: 1, resolved: 1 });
      */
    } finally {
      setLoading(false);
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  /* ================= FILTERING ================= */
  useEffect(() => {
    let results = [...contacts];

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      results = results.filter(c =>
        c.name.toLowerCase().includes(lowerTerm) ||
        c.phone.includes(lowerTerm) ||
        c.subject.toLowerCase().includes(lowerTerm) ||
        c.message.toLowerCase().includes(lowerTerm)
      );
    }

    if (statusFilter !== 'all') {
      results = results.filter(c => c.status === statusFilter);
    }

    setFilteredContacts(results);
  }, [searchTerm, statusFilter, contacts]);

  /* ================= ACTIONS ================= */
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    try {
      // Optimistic UI update
      setContacts(prev => prev.filter(c => c._id !== id));
      setFilteredContacts(prev => prev.filter(c => c._id !== id));
      
      const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}`, { method: 'DELETE' });
      const data = await res.json();
      
      if (!data.success) throw new Error('Failed to delete');
      
      // Refresh stats
      fetchContacts();
    } catch (err) {
      console.error(err);
      alert('Error deleting contact');
      // Revert UI if needed
      fetchContacts();
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    // Optimistic update
    setContacts(prev => prev.map(c => c._id === id ? { ...c, status: status as any } : c));
    setFilteredContacts(prev => prev.map(c => c._id === id ? { ...c, status: status as any } : c));

    try {
      const res = await fetch(`https://propertybackend-6bou.onrender.com/api/contacts/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        // Update stats
        fetchContacts();
      } else {
        throw new Error('Failed to update');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating status');
      fetchContacts(); // Revert
    }
  };

  const formatDate = (date: string) => 
    new Date(date).toLocaleDateString('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });

  /* ================= UI ================= */
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Header Section - Dark Theme */}
            <div className="bg-gray-900 text-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2">
                    <Mail size={24} /> Contact Inquiries
                  </h1>
                  <p className="text-gray-400 text-sm mt-1">Manage and track all customer contact requests</p>
                </div>
                <button 
                  onClick={fetchContacts} 
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-all text-sm font-medium"
                >
                  <RefreshCw size={16} className={fetchLoading ? 'animate-spin' : ''} />
                  {fetchLoading ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Total" value={stats.total} icon={<Mail size={20} />} color="gray" />
              <StatCard label="Pending" value={stats.pending} icon={<Clock size={20} />} color="orange" />
              <StatCard label="Contacted" value={stats.contacted} icon={<Phone size={20} />} color="blue" />
              <StatCard label="Resolved" value={stats.resolved} icon={<CheckCircle size={20} />} color="green" />
            </div>

            {/* Filters Bar */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Search */}
                <div className="md:col-span-8 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search by name, phone, subject, or message..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all"
                  />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700">
                      <X size={16} />
                    </button>
                  )}
                </div>
                {/* Status Filter */}
                <div className="md:col-span-4 relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full pl-10 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all appearance-none cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <span className="font-medium text-gray-900">{filteredContacts.length}</span> results found
            </div>

            {/* Main Table Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <Loader2 size={40} className="animate-spin mb-4 text-gray-800" />
                  <p className="text-sm font-medium">Loading inquiries...</p>
                </div>
              ) : filteredContacts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                  <Mail size={48} className="mb-4 text-gray-300" />
                  <h3 className="text-lg font-bold text-gray-700 mb-1">No Inquiries Found</h3>
                  <p className="text-sm text-gray-400">
                    {searchTerm || statusFilter !== 'all' 
                      ? 'Try adjusting your search filters.' 
                      : 'You have no messages.'}
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Subject</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredContacts.map(contact => (
                        <tr key={contact._id} className="hover:bg-gray-50 transition-colors group">
                          {/* Customer */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                <User size={14} />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{contact.name}</p>
                                <a href={`tel:${contact.phone}`} className="text-xs text-gray-500 hover:text-black flex items-center gap-1">
                                  <Phone size={10} /> {contact.phone}
                                </a>
                              </div>
                            </div>
                          </td>

                          {/* Subject */}
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 border border-gray-200">
                              {contact.subject}
                            </span>
                          </td>

                          {/* Message */}
                          <td className="px-6 py-4 max-w-xs">
                            <p className="text-gray-700 truncate" title={contact.message}>
                              {contact.message || <span className="text-gray-400 italic">Empty</span>}
                            </p>
                          </td>

                          {/* Status - Dropdown */}
                          <td className="px-6 py-4">
                            <select
                              value={contact.status}
                              onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase border cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                                contact.status === 'pending' 
                                  ? 'bg-orange-50 text-orange-700 border-orange-200 focus:ring-orange-500' 
                                  : contact.status === 'contacted' 
                                  ? 'bg-blue-50 text-blue-700 border-blue-200 focus:ring-blue-500' 
                                  : 'bg-green-50 text-green-700 border-green-200 focus:ring-green-500'
                              }`}
                            >
                              <option value="pending">Pending</option>
                              <option value="contacted">Contacted</option>
                              <option value="resolved">Resolved</option>
                            </select>
                          </td>

                          {/* Date */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                              <Calendar size={12} />
                              {formatDate(contact.createdAt)}
                            </div>
                          </td>

                          {/* Action */}
                          <td className="px-6 py-4 text-center">
                            <button 
                              onClick={() => handleDelete(contact._id)} 
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all inline-flex items-center justify-center"
                              title="Delete inquiry"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= HELPER COMPONENT ================= */
function StatCard({ label, value, icon, color }: { label: string, value: number, icon: React.ReactNode, color: 'gray' | 'orange' | 'blue' | 'green' }) {
  const styles = {
    gray: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', iconBg: 'bg-gray-200', iconText: 'text-gray-600' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', iconBg: 'bg-orange-200', iconText: 'text-orange-600' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', iconBg: 'bg-blue-200', iconText: 'text-blue-600' },
    green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', iconBg: 'bg-green-200', iconText: 'text-green-600' },
  }[color];

  return (
    <div className={`p-5 rounded-xl border ${styles.border} ${styles.bg} shadow-sm hover:shadow-md transition-all`}>
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">{label}</span>
        <div className={`p-2 rounded-lg ${styles.iconBg} ${styles.iconText}`}>
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}