// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { 
//   Building, CheckCircle, MapPin, Tag, List, Users, Plus, TrendingUp, DollarSign, Activity 
// } from 'lucide-react';
// import Navbar from '@/Admin/Navbar/Navbar';
// import Sidebar from '@/Admin/Sidebar/Sidebar';

// /* ================= API URL ================= */
// const API_BASE_URL = 'https://propertybackend-1-xdbs.onrender.com/api';

// /* ================= TYPES ================= */
// interface DashboardStats {
//   totalProperties: number;
//   activeProperties: number;
//   soldProperties: number;
//   totalCities: number;
//   totalPropertyTypes: number;
//   totalInquiries: number;
//   recentProperties: Property[];
//   recentInquiries: Inquiry[];
// }

// interface Property {
//   _id: string;
//   address: string;
//   price: number;
//   status: string;
//   propertyTypeName?: string;
//   cityName?: string;
//   images?: string[];
//   createdAt: string;
// }

// interface Inquiry {
//   _id: string;
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   createdAt: string;
//   status: string;
// }

// /* ================= COMPONENT ================= */
// export default function DashboardPage() {
//   const router = useRouter();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [stats, setStats] = useState<DashboardStats>({
//     totalProperties: 0,
//     activeProperties: 0,
//     soldProperties: 0,
//     totalCities: 0,
//     totalPropertyTypes: 0,
//     totalInquiries: 0,
//     recentProperties: [],
//     recentInquiries: [],
//   });

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       setLoading(true);
//       const [propertiesRes, citiesRes, typesRes, inquiriesRes] = await Promise.all([
//         axios.get(`${API_BASE_URL}/property`).catch(() => ({ data: [] })),
//         axios.get(`${API_BASE_URL}/city`).catch(() => ({ data: [] })),
//         axios.get(`${API_BASE_URL}/property-type`).catch(() => ({ data: [] })),
//         axios.get(`${API_BASE_URL}/inquiry`).catch(() => ({ data: [] })),
//       ]);

//       const getArray = (res: any) => Array.isArray(res.data) ? res.data : (res.data?.data || []);

//       const properties = getArray(propertiesRes);
//       const cities = getArray(citiesRes);
//       const types = getArray(typesRes);
//       const inquiries = getArray(inquiriesRes);

//       setStats({
//         totalProperties: properties.length,
//         activeProperties: properties.filter((p: Property) => p.status === 'active').length,
//         soldProperties: properties.filter((p: Property) => p.status === 'sold').length,
//         totalCities: cities.length,
//         totalPropertyTypes: types.length,
//         totalInquiries: inquiries.length,
//         recentProperties: properties.slice(0, 5),
//         recentInquiries: inquiries.slice(0, 5),
//       });
//     } catch (err) {
//       console.error('Dashboard Error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= HELPERS ================= */
//   const formatPrice = (price: number) => {
//     if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
//     if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
//     return `₹${price.toLocaleString()}`;
//   };

//   const formatDate = (date: string) => {
//     return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col overflow-hidden relative">
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         <main className="flex-1 overflow-y-auto p-4 md:p-8">
//           <div className="max-w-7xl mx-auto space-y-8">
            
//             {/* HEADER */}
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
//               <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
//             </div>

//             {/* STATS GRID */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               <StatCard 
//                 title="Total Properties" 
//                 value={stats.totalProperties} 
//                 icon={<Building className="text-blue-600" />} 
//                 trend="+12% this month"
//                 color="bg-blue-50 border-blue-100"
//               />
//               <StatCard 
//                 title="Active Listings" 
//                 value={stats.activeProperties} 
//                 icon={<Activity className="text-green-600" />} 
//                 trend="85% occupancy"
//                 color="bg-green-50 border-green-100"
//               />
//               <StatCard 
//                 title="Properties Sold" 
//                 value={stats.soldProperties} 
//                 icon={<DollarSign className="text-purple-600" />} 
//                 trend="+5% from last week"
//                 color="bg-purple-50 border-purple-100"
//               />
//               <StatCard 
//                 title="Total Inquiries" 
//                 value={stats.totalInquiries} 
//                 icon={<Users className="text-orange-600" />} 
//                 trend="New leads today"
//                 color="bg-orange-50 border-orange-100"
//               />
//             </div>

//             {/* MAIN CONTENT SPLIT */}
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
//               {/* LEFT: RECENT PROPERTIES (2 Cols) */}
//               <div className="xl:col-span-2 space-y-6">
                
//                 {/* Quick Actions */}
//                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                   <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <ActionBtn icon={<Plus />} label="Add Property" onClick={() => router.push('/property')} color="bg-gray-900 text-white hover:bg-black" />
//                     <ActionBtn icon={<MapPin />} label="Add City" onClick={() => router.push('/Adminarea')} color="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700" />
//                     <ActionBtn icon={<Tag />} label="Add Type" onClick={() => router.push('/PropertyTypes')} color="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700" />
//                     <ActionBtn icon={<List />} label="View All" onClick={() => router.push('/propertylist')} color="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700" />
//                   </div>
//                 </div>

//                 {/* Recent List */}
//                 <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//                   <div className="p-6 border-b border-gray-100 flex justify-between items-center">
//                     <h3 className="font-bold text-lg text-gray-900">Recent Listings</h3>
//                     <button onClick={() => router.push('/property-list')} className="text-sm text-blue-600 font-semibold hover:underline">View All</button>
//                   </div>
                  
//                   <div className="divide-y divide-gray-100">
//                     {stats.recentProperties.map((property) => (
//                       <div key={property._id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => router.push(`/propertyedit/${property._id}`)}>
//                         <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
//                           {property.images && property.images[0] ? (
//                             <img src={`https://propertybackend-1-xdbs.onrender.com${property.images[0]}`} alt="" className="w-full h-full object-cover" />
//                           ) : (
//                             <div className="w-full h-full flex items-center justify-center text-gray-400"><Building size={20} /></div>
//                           )}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-semibold text-gray-900 truncate">{property.address}</h4>
//                           <p className="text-xs text-gray-500">{property.cityName} • {property.propertyTypeName}</p>
//                           <div className="flex items-center gap-2 mt-1">
//                             <span className="font-bold text-gray-900 text-sm">{formatPrice(property.price)}</span>
//                             <StatusBadge status={property.status} />
//                           </div>
//                         </div>
//                         <div className="text-right text-xs text-gray-400 hidden sm:block">
//                           {formatDate(property.createdAt)}
//                         </div>
//                       </div>
//                     ))}
//                     {stats.recentProperties.length === 0 && (
//                       <div className="p-8 text-center text-gray-500">No properties found.</div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: INQUIRIES & SUMMARY (1 Col) */}
//               <div className="space-y-6">
                
//                 {/* Market Overview */}
//                 <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-lg">
//                   <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
//                     <TrendingUp size={20} className="text-green-400" /> Market Overview
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-400 text-sm">Sold Ratio</span>
//                       <span className="font-bold text-lg">{stats.totalProperties > 0 ? ((stats.soldProperties / stats.totalProperties) * 100).toFixed(0) : 0}%</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <div className="bg-green-500 h-2 rounded-full" style={{ width: `${stats.totalProperties > 0 ? (stats.soldProperties / stats.totalProperties) * 100 : 0}%` }}></div>
//                     </div>
                    
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-400 text-sm">Cities Covered</span>
//                       <span className="font-bold text-lg">{stats.totalCities}</span>
//                     </div>
                    
//                     <div className="pt-4 border-t border-gray-700">
//                       <div className="flex justify-between">
//                         <div className="text-center">
//                           <p className="text-xs text-gray-400 uppercase">Active</p>
//                           <p className="font-bold text-xl">{stats.activeProperties}</p>
//                         </div>
//                         <div className="text-center">
//                           <p className="text-xs text-gray-400 uppercase">Sold</p>
//                           <p className="font-bold text-xl text-green-400">{stats.soldProperties}</p>
//                         </div>
//                         <div className="text-center">
//                           <p className="text-xs text-gray-400 uppercase">Total</p>
//                           <p className="font-bold text-xl">{stats.totalProperties}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Recent Inquiries */}
//                 <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//                   <div className="p-5 border-b border-gray-100 flex justify-between items-center">
//                     <h3 className="font-bold text-gray-900">Recent Inquiries</h3>
//                     <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">New</span>
//                   </div>
//                   <div className="divide-y divide-gray-100">
//                     {stats.recentInquiries.map((inquiry) => (
//                       <div key={inquiry._id} className="p-4 hover:bg-gray-50 transition-colors">
//                         <div className="flex justify-between items-start mb-1">
//                           <h4 className="font-bold text-sm text-gray-900">{inquiry.name}</h4>
//                           <span className="text-[10px] text-gray-400">{formatDate(inquiry.createdAt)}</span>
//                         </div>
//                         <p className="text-xs text-gray-500 line-clamp-2">{inquiry.message}</p>
//                         <div className="mt-2 flex gap-2">
//                           <a href={`tel:${inquiry.phone}`} className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded font-bold hover:bg-green-100">Call</a>
//                           <a href={`mailto:${inquiry.email}`} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded font-bold hover:bg-blue-100">Email</a>
//                         </div>
//                       </div>
//                     ))}
//                     {stats.recentInquiries.length === 0 && (
//                       <div className="p-6 text-center text-gray-400 text-sm">No new inquiries.</div>
//                     )}
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// /* ================= HELPER COMPONENTS ================= */

// const StatCard = ({ title, value, icon, trend, color }: any) => (
//   <div className={`p-6 rounded-2xl border ${color} bg-white shadow-sm transition-transform hover:-translate-y-1`}>
//     <div className="flex justify-between items-start mb-4">
//       <div>
//         <p className="text-gray-500 text-sm font-medium">{title}</p>
//         <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
//       </div>
//       <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">{icon}</div>
//     </div>
//     <p className="text-xs font-semibold text-gray-400">{trend}</p>
//   </div>
// );

// const ActionBtn = ({ icon, label, onClick, color }: any) => (
//   <button 
//     onClick={onClick}
//     className={`${color} flex flex-col items-center justify-center p-4 rounded-xl shadow-sm transition-all active:scale-95 gap-2 h-24`}
//   >
//     {icon}
//     <span className="text-xs font-bold">{label}</span>
//   </button>
// );

// const StatusBadge = ({ status }: { status: string }) => {
//   const styles = {
//     active: 'bg-green-100 text-green-700',
//     sold: 'bg-red-100 text-red-700',
//     inactive: 'bg-gray-100 text-gray-600',
//   };
//   const style = styles[status.toLowerCase() as keyof typeof styles] || styles.inactive;
  
//   return (
//     <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${style}`}>
//       {status}
//     </span>
//   );
// };
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { 
  Building, CheckCircle, MapPin, Tag, List, Users, Plus, TrendingUp, DollarSign, Activity 
} from 'lucide-react';
import Navbar from '@/Admin/Navbar/Navbar';
import Sidebar from '@/Admin/Sidebar/Sidebar';

/* ================= API URL ================= */
const API_BASE_URL = 'https://propertybackend-1-xdbs.onrender.com/api';

/* ================= TYPES ================= */
interface DashboardStats {
  totalProperties: number;
  activeProperties: number;
  soldProperties: number;
  totalCities: number;
  totalPropertyTypes: number;
  totalInquiries: number;
  recentProperties: Property[];
  recentInquiries: Inquiry[];
}

interface Property {
  _id: string;
  address: string;
  price: number;
  status: string;
  propertyTypeName?: string;
  cityName?: string;
  images?: string[];
  createdAt: string;
}

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  status: string;
}

/* ================= COMPONENT ================= */
export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalProperties: 0,
    activeProperties: 0,
    soldProperties: 0,
    totalCities: 0,
    totalPropertyTypes: 0,
    totalInquiries: 0,
    recentProperties: [],
    recentInquiries: [],
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [propertiesRes, citiesRes, typesRes, inquiriesRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/property`).catch(() => ({ data: [] })),
        axios.get(`${API_BASE_URL}/city`).catch(() => ({ data: [] })),
        axios.get(`${API_BASE_URL}/property-type`).catch(() => ({ data: [] })),
        axios.get(`${API_BASE_URL}/inquiry`).catch(() => ({ data: [] })),
      ]);

      const getArray = (res: any) => Array.isArray(res.data) ? res.data : (res.data?.data || []);

      const properties = getArray(propertiesRes);
      const cities = getArray(citiesRes);
      const types = getArray(typesRes);
      const inquiries = getArray(inquiriesRes);

      setStats({
        totalProperties: properties.length,
        activeProperties: properties.filter((p: Property) => p.status === 'active').length,
        soldProperties: properties.filter((p: Property) => p.status === 'sold').length,
        totalCities: cities.length,
        totalPropertyTypes: types.length,
        totalInquiries: inquiries.length,
        recentProperties: properties.slice(0, 6),
        recentInquiries: inquiries.slice(0, 5),
      });
    } catch (err) {
      console.error('Dashboard Error:', err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= HELPERS ================= */
  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
    return `₹${price.toLocaleString()}`;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* HEADER */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
              <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="Total Properties" 
                value={stats.totalProperties} 
                icon={<Building className="text-blue-600" />} 
                trend="+12% this month"
                color="bg-blue-50 border-blue-100"
              />
              <StatCard 
                title="Active Listings" 
                value={stats.activeProperties} 
                icon={<Activity className="text-green-600" />} 
                trend="85% occupancy"
                color="bg-green-50 border-green-100"
              />
              <StatCard 
                title="Properties Sold" 
                value={stats.soldProperties} 
                icon={<DollarSign className="text-purple-600" />} 
                trend="+5% from last week"
                color="bg-purple-50 border-purple-100"
              />
              <StatCard 
                title="Total Inquiries" 
                value={stats.totalInquiries} 
                icon={<Users className="text-orange-600" />} 
                trend="New leads today"
                color="bg-orange-50 border-orange-100"
              />
            </div>

            {/* MAIN CONTENT SPLIT */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* LEFT: RECENT PROPERTIES (2 Cols) */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ActionBtn icon={<Plus />} label="Add Property" onClick={() => router.push('/property')} color="bg-gray-900 text-white hover:bg-black" />
                    <ActionBtn icon={<MapPin />} label="Add City" onClick={() => router.push('/Adminarea')} color="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700" />
                    <ActionBtn icon={<Tag />} label="Add Type" onClick={() => router.push('/PropertyTypes')} color="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700" />
                    <ActionBtn icon={<List />} label="View All" onClick={() => router.push('/propertylist')} color="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700" />
                  </div>
                </div>

                {/* Recent List */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-gray-900">Recent Listings</h3>
                    <button onClick={() => router.push('/propertylist')} className="text-sm text-blue-600 font-semibold hover:underline">View All</button>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {stats.recentProperties.map((property) => (
                      <div key={property._id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => router.push(`/propertyedit/${property._id}`)}>
                        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          {property.images && property.images[0] ? (
                            <img src={`https://propertybackend-1-xdbs.onrender.com${property.images[0]}`} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400"><Building size={20} /></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">{property.address}</h4>
                          <p className="text-xs text-gray-500">{property.cityName} • {property.propertyTypeName}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-bold text-gray-900 text-sm">{formatPrice(property.price)}</span>
                            <StatusBadge status={property.status} />
                          </div>
                        </div>
                        <div className="text-right text-xs text-gray-400 hidden sm:block">
                          {formatDate(property.createdAt)}
                        </div>
                      </div>
                    ))}
                    {stats.recentProperties.length === 0 && (
                      <div className="p-8 text-center text-gray-500">No properties found.</div>
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT: INQUIRIES & SUMMARY (1 Col) */}
              <div className="space-y-6">
                
                {/* Market Overview */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp size={20} className="text-green-400" /> Market Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Sold Ratio</span>
                      <span className="font-bold text-lg">{stats.totalProperties > 0 ? ((stats.soldProperties / stats.totalProperties) * 100).toFixed(0) : 0}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${stats.totalProperties > 0 ? (stats.soldProperties / stats.totalProperties) * 100 : 0}%` }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Cities Covered</span>
                      <span className="font-bold text-lg">{stats.totalCities}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between">
                        <div className="text-center">
                          <p className="text-xs text-gray-400 uppercase">Active</p>
                          <p className="font-bold text-xl">{stats.activeProperties}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-400 uppercase">Sold</p>
                          <p className="font-bold text-xl text-green-400">{stats.soldProperties}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-400 uppercase">Total</p>
                          <p className="font-bold text-xl">{stats.totalProperties}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Inquiries */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-900">Recent Inquiries</h3>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">New</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {stats.recentInquiries.map((inquiry) => (
                      <div key={inquiry._id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-sm text-gray-900">{inquiry.name}</h4>
                          <span className="text-[10px] text-gray-400">{formatDate(inquiry.createdAt)}</span>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2">{inquiry.message}</p>
                        <div className="mt-2 flex gap-2">
                          <a href={`tel:${inquiry.phone}`} className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded font-bold hover:bg-green-100">Call</a>
                          <a href={`mailto:${inquiry.email}`} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded font-bold hover:bg-blue-100">Email</a>
                        </div>
                      </div>
                    ))}
                    {stats.recentInquiries.length === 0 && (
                      <div className="p-6 text-center text-gray-400 text-sm">No new inquiries.</div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

const StatCard = ({ title, value, icon, trend, color }: any) => (
  <div className={`p-6 rounded-2xl border ${color} bg-white shadow-sm transition-transform hover:-translate-y-1`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
      </div>
      <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">{icon}</div>
    </div>
    <p className="text-xs font-semibold text-gray-400">{trend}</p>
  </div>
);

const ActionBtn = ({ icon, label, onClick, color }: any) => (
  <button 
    onClick={onClick}
    className={`${color} flex flex-col items-center justify-center p-4 rounded-xl shadow-sm transition-all active:scale-95 gap-2 h-24`}
  >
    {icon}
    <span className="text-xs font-bold">{label}</span>
  </button>
);

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    active: 'bg-green-100 text-green-700',
    sold: 'bg-red-100 text-red-700',
    inactive: 'bg-gray-100 text-gray-600',
  };
  const style = styles[status.toLowerCase() as keyof typeof styles] || styles.inactive;
  
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${style}`}>
      {status}
    </span>
  );
};