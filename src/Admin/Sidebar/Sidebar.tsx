// // // 
// // 'use client';

// // import {
// //   Home, MapPin, Settings, LogOut, ChevronLeft, Building2, Layers, Phone, Mail, Users
// // } from 'lucide-react';
// // import Link from 'next/link';
// // import { usePathname, useRouter } from 'next/navigation';

// // interface SidebarProps {
// //   sidebarOpen: boolean;
// //   setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
// // }

// // export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
// //   const pathname = usePathname();
// //   const router = useRouter();

// //   const menuItems = [
// //     { name: 'Dashboard', icon: Home, href: '/dashboard' },
// //     { name: 'City Manager', icon: MapPin, href: '/Adminarea' },
// //     { name: 'Property Types', icon: Layers, href: '/PropertyTypes' },
// //     { name: 'Add Property', icon: Building2, href: '/property' },
// //     { name: 'Property List', icon: ListIcon, href: '/propertylist' },
// //     { name: 'Contact Information', icon: Settings, href: '/contactinfromation' },
// //     { name: 'ContactInquiries', icon: Mail, href: '/contactfrom' },
// //      { name: 'Buy/Sell Properties', icon: Mail, href: '/buysellfrom' },
// //       { name: 'Document Request', icon: Mail, href: '/documentrequest' },
// //        { name: 'Patta Request ', icon: Mail, href: '/pattainquiry' },
// //          { name: 'Registry Request ', icon: Mail, href: '/registrylist' },
// //           { name: 'legalconsultations Request  ', icon: Mail, href: '/legalconsultations' },
// //   ];


// //   const handleLogout = () => {
// //     if (confirm('Are you sure you want to logout?')) {
// //       localStorage.removeItem('adminToken'); // Clear token if used
// //       router.push('/Adminlogin'); // Redirect to login page
// //     }
// //   };

// //   return (
// //     <>
// //       {/* MOBILE OVERLAY */}
// //       <div
// //         className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
// //           sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
// //         }`}
// //         onClick={() => setSidebarOpen(false)}
// //       />

// //       {/* SIDEBAR */}
// //       <aside
// //         className={`fixed lg:static top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col border-r border-zinc-800 ${
// //           sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
// //         }`}
// //       >
// //         {/* HEADER */}
// //         <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-800">
// //           <div className="flex items-center gap-3">
// //             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
// //               <span className="text-black font-bold text-xl">P</span>
// //             </div>
// //             <span className="font-bold text-lg tracking-wide">
// //               Property<span className="text-zinc-400">Sathi</span>
// //             </span>
// //           </div>

// //           <button
// //             onClick={() => setSidebarOpen(false)}
// //             className="lg:hidden text-zinc-400 hover:text-white transition-colors"
// //           >
// //             <ChevronLeft size={24} />
// //           </button>
// //         </div>

// //         {/* MENU */}
// //         <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 scrollbar-hide">
// //           <p className="px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-3">
// //             Main Navigation
// //           </p>

// //           {menuItems.map((item) => {
// //             const isActive = pathname === item.href;

// //             return (
// //               <Link
// //                 key={item.href}
// //                 href={item.href}
// //                 className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
// //                   isActive
// //                     ? 'bg-white text-black shadow-lg shadow-white/10 font-bold'
// //                     : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
// //                 }`}
// //               >
// //                 <item.icon
// //                   size={20}
// //                   className={`transition-colors ${
// //                     isActive ? 'text-black' : 'text-zinc-500 group-hover:text-white'
// //                   }`}
// //                 />
// //                 <span className="text-sm">{item.name}</span>
// //                 {isActive && (
// //                   <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black"></div>
// //                 )}
// //               </Link>
// //             );
// //           })}
// //         </nav>

// //         {/* FOOTER */}
// //         <div className="p-4 border-t border-zinc-800 bg-black">
// //           {/* <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-xl bg-zinc-900/50 border border-zinc-800">
// //             <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
// //               <Users size={16} className="text-zinc-400" />
// //             </div>
// //             <div className="flex-1 min-w-0">
// //               <p className="text-sm font-medium text-white truncate">Admin User</p>
// //               <p className="text-xs text-zinc-500 truncate">admin@property.com</p>
// //             </div>
// //           </div> */}

// //           <button 
// //             onClick={handleLogout}
// //             className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium border border-transparent hover:border-red-900/30"
// //           >
// //             <LogOut size={18} />
// //             <span>Sign Out</span>
// //           </button>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // }

// // // Helper Icon for List (if lucide-react version doesn't have List yet, use Menu or similar)
// // function ListIcon(props: any) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <line x1="8" x2="21" y1="6" y2="6" />
// //       <line x1="8" x2="21" y1="12" y2="12" />
// //       <line x1="8" x2="21" y1="18" y2="18" />
// //       <line x1="3" x2="3.01" y1="6" y2="6" />
// //       <line x1="3" x2="3.01" y1="12" y2="12" />
// //       <line x1="3" x2="3.01" y1="18" y2="18" />
// //     </svg>
// //   );
// // }
// "use client";

// import {
//   Home,
//   MapPin,
//   Settings,
//   LogOut,
//   ChevronLeft,
//   Building2,
//   Layers,
//   Mail,
//   ChevronDown,
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// interface SidebarProps {
//   sidebarOpen: boolean;
//   setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // dropdown
//   const [propertyOpen, setPropertyOpen] = useState(false);

//   // open dropdown automatically when inside property routes
//   useEffect(() => {
//     const propertyRoutes = ["/Adminarea", "/PropertyTypes", "/property", "/propertylist"];
//     if (propertyRoutes.includes(pathname)) setPropertyOpen(true);
//   }, [pathname]);

//   const handleLogout = () => {
//     if (confirm("Are you sure you want to logout?")) {
//       localStorage.removeItem("adminToken");
//       router.push("/Adminlogin");
//     }
//   };

//   const isActive = (href: string) => pathname === href;

//   const menuBase =
//     "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group";
//   const menuActive = "bg-white text-black shadow-lg shadow-white/10 font-bold";
//   const menuInactive = "text-zinc-400 hover:bg-zinc-900 hover:text-white";

//   return (
//     <>
//       {/* MOBILE OVERLAY */}
//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
//           sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => setSidebarOpen(false)}
//       />

//       {/* SIDEBAR */}
//       <aside
//         className={`fixed lg:static top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col border-r border-zinc-800 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* HEADER */}
//         <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-800">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
//               <span className="text-black font-bold text-xl">P</span>
//             </div>
//             <span className="font-bold text-lg tracking-wide">
//               Property<span className="text-zinc-400">Sathi</span>
//             </span>
//           </div>

//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="lg:hidden text-zinc-400 hover:text-white transition-colors"
//             aria-label="Close sidebar"
//           >
//             <ChevronLeft size={24} />
//           </button>
//         </div>

//         {/* MENU */}
//         <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 scrollbar-hide">
         

//           {/* Dashboard */}
//           <Link
//             href="/dashboard"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/dashboard") ? menuActive : menuInactive}`}
//           >
//             <Home
//               size={20}
//               className={`transition-colors ${
//                 isActive("/dashboard") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Dashboard</span>
//             {isActive("/dashboard") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>

//           {/* Property Dropdown */}
//           <button
//             type="button"
//             onClick={() => setPropertyOpen((v) => !v)}
//             className={`${menuBase} ${propertyOpen ? "bg-zinc-900/60 text-white" : menuInactive} w-full`}
//           >
//             <Building2
//               size={20}
//               className={`transition-colors ${propertyOpen ? "text-white" : "text-zinc-500 group-hover:text-white"}`}
//             />
//             <span className="flex-1 text-left text-sm">Property</span>
//             <ChevronDown
//               size={18}
//               className={`transition-transform duration-200 ${propertyOpen ? "rotate-180" : ""}`}
//             />
//           </button>

//           {/* Dropdown Items - Changed to use max-height instead of grid-rows */}
//           <div
//             className={`overflow-hidden transition-all duration-300 ease-in-out ${
//               propertyOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="mt-1 ml-3 pl-3 border-l border-zinc-800 space-y-1 pb-1">
//               <Link
//                 href="/Adminarea"
//                 onClick={() => setSidebarOpen(false)}
//                 className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
//                   isActive("/Adminarea")
//                     ? "bg-white text-black font-bold"
//                     : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
//                 }`}
//               >
//                 City Manager
//               </Link>

//               <Link
//                 href="/PropertyTypes"
//                 onClick={() => setSidebarOpen(false)}
//                 className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
//                   isActive("/PropertyTypes")
//                     ? "bg-white text-black font-bold"
//                     : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
//                 }`}
//               >
//                 Property Types
//               </Link>

//               <Link
//                 href="/property"
//                 onClick={() => setSidebarOpen(false)}
//                 className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
//                   isActive("/property")
//                     ? "bg-white text-black font-bold"
//                     : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
//                 }`}
//               >
//                 Add Property
//               </Link>

//               <Link
//                 href="/propertylist"
//                 onClick={() => setSidebarOpen(false)}
//                 className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
//                   isActive("/propertylist")
//                     ? "bg-white text-black font-bold"
//                     : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
//                 }`}
//               >
//                 Property List
//               </Link>
//             </div>
//           </div>

//           {/* Other menus */}
//           <p className="px-4 pt-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
//             Requests
//           </p>
//  <Link
//             href="/contactinfromation"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/contactinfromation") ? menuActive : menuInactive}`}
//           >
//             <Mail
//               size={20}
//               className={`transition-colors ${
//                 isActive("/contactinfromation") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Contact Infromation</span>
//             {isActive("/contactinfromation") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>
//           <Link
//             href="/contactfrom"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/contactfrom") ? menuActive : menuInactive}`}
//           >
//             <Mail
//               size={20}
//               className={`transition-colors ${
//                 isActive("/contactfrom") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Contact Inquiries</span>
//             {isActive("/contactfrom") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>

//           <Link
//             href="/buysellfrom"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/buysellfrom") ? menuActive : menuInactive}`}
//           >
//             <Mail
//               size={20}
//               className={`transition-colors ${
//                 isActive("/buysellfrom") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Buy / Sell Requests</span>
//             {isActive("/buysellfrom") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>

//           <Link
//             href="/documentrequest"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/documentrequest") ? menuActive : menuInactive}`}
//           >
//             <Mail
//               size={20}
//               className={`transition-colors ${
//                 isActive("/documentrequest") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Document Request</span>
//             {isActive("/documentrequest") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>

//           <Link
//             href="/pattainquiry"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/pattainquiry") ? menuActive : menuInactive}`}
//           >
//             <Mail
//               size={20}
//               className={`transition-colors ${
//                 isActive("/pattainquiry") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Patta Request</span>
//             {isActive("/pattainquiry") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>

//           <Link
//             href="/registrylist"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/registrylist") ? menuActive : menuInactive}`}
//           >
//             <Mail
//               size={20}
//               className={`transition-colors ${
//                 isActive("/registrylist") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Registry Requests</span>
//             {isActive("/registrylist") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>

//           <Link
//             href="/legalconsultations"
//             onClick={() => setSidebarOpen(false)}
//             className={`${menuBase} ${isActive("/legalconsultations") ? menuActive : menuInactive}`}
//           >
//             <Mail
//               size={20}
//               className={`transition-colors ${
//                 isActive("/legalconsultations") ? "text-black" : "text-zinc-500 group-hover:text-white"
//               }`}
//             />
//             <span className="text-sm">Legal Consultations</span>
//             {isActive("/legalconsultations") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
//           </Link>
//         </nav>

//         {/* LOGOUT */}
//         <div className="p-4 border-t border-zinc-800 bg-black">
//           <button
//             onClick={handleLogout}
//             className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium border border-transparent hover:border-red-900/30"
//           >
//             <LogOut size={18} />
//             <span>Sign Out</span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }
"use client";

import {
  Home,
  MapPin,
  Settings,
  LogOut,
  ChevronLeft,
  Building2,
  Layers,
  Mail,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  // dropdown states
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // open dropdown automatically when inside property routes
  // useEffect(() => {
  //   const propertyRoutes = ["/Adminarea", "/PropertyTypes", "/property", "/propertylist"];
  //   if (propertyRoutes.includes(pathname:any)) setPropertyOpen(true);
    
  //   const contactRoutes = ["/contactinfromation", "/contactfrom"];
  //   if (contactRoutes.includes(pathname:any)) setContactOpen(true);
  // }, [pathname]);
  useEffect(() => {
  if (!pathname) return;

  const propertyRoutes = ["/Adminarea", "/PropertyTypes", "/property", "/propertylist"];
  const contactRoutes = ["/contactinfromation", "/contactfrom"];

  setPropertyOpen(propertyRoutes.some(route => pathname.startsWith(route)));
  setContactOpen(contactRoutes.some(route => pathname.startsWith(route)));
}, [pathname]);

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminToken");
      router.push("/Adminlogin");
    }
  };

  const isActive = (href: string) => pathname === href;

  const menuBase =
    "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group";
  const menuActive = "bg-white text-black shadow-lg shadow-white/10 font-bold";
  const menuInactive = "text-zinc-400 hover:bg-zinc-900 hover:text-white";

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col border-r border-zinc-800 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* HEADER */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-lg tracking-wide">
             Surana<span className="text-zinc-400">Homes</span>
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-zinc-400 hover:text-white transition-colors"
            aria-label="Close sidebar"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 scrollbar-hide">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className={`${menuBase} ${isActive("/dashboard") ? menuActive : menuInactive}`}
          >
            <Home
              size={20}
              className={`transition-colors ${
                isActive("/dashboard") ? "text-black" : "text-zinc-500 group-hover:text-white"
              }`}
            />
            <span className="text-sm">Dashboard</span>
            {isActive("/dashboard") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
          </Link>

          {/* Property Dropdown */}
          <button
            type="button"
            onClick={() => setPropertyOpen((v) => !v)}
            className={`${menuBase} ${propertyOpen ? "bg-zinc-900/60 text-white" : menuInactive} w-full`}
          >
            <Building2
              size={20}
              className={`transition-colors ${propertyOpen ? "text-white" : "text-zinc-500 group-hover:text-white"}`}
            />
            <span className="flex-1 text-left text-sm">Property</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${propertyOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Property Dropdown Items */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              propertyOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-1 ml-3 pl-3 border-l border-zinc-800 space-y-1 pb-1">
              <Link
                href="/Adminarea"
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                  isActive("/Adminarea")
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                City Manager
              </Link>

              <Link
                href="/PropertyTypes"
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                  isActive("/PropertyTypes")
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                Property Types
              </Link>

              <Link
                href="/property"
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                  isActive("/property")
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                Add Property
              </Link>

              <Link
                href="/propertylist"
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                  isActive("/propertylist")
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                Property List
              </Link>
            </div>
          </div>

          {/* Requests Section Header */}
          {/* <p className="px-4 pt-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
            Requests
          </p> */}

          {/* Contact Dropdown */}
          <button
            type="button"
            onClick={() => setContactOpen((v) => !v)}
            className={`${menuBase} ${contactOpen ? "bg-zinc-900/60 text-white" : menuInactive} w-full`}
          >
            <Mail
              size={20}
              className={`transition-colors ${contactOpen ? "text-white" : "text-zinc-500 group-hover:text-white"}`}
            />
            <span className="flex-1 text-left text-sm">Contact</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${contactOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Contact Dropdown Items */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              contactOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-1 ml-3 pl-3 border-l border-zinc-800 space-y-1 pb-1">
              <Link
                href="/contactinfromation"
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                  isActive("/contactinfromation")
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                Contact Information
              </Link>

              <Link
                href="/contactfrom"
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                  isActive("/contactfrom")
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                Contact Inquiries
              </Link>
            </div>
          </div>

          {/* Other Request Links */}
          <Link
            href="/buysellfrom"
            onClick={() => setSidebarOpen(false)}
            className={`${menuBase} ${isActive("/buysellfrom") ? menuActive : menuInactive}`}
          >
            <Mail
              size={20}
              className={`transition-colors ${
                isActive("/buysellfrom") ? "text-black" : "text-zinc-500 group-hover:text-white"
              }`}
            />
            <span className="text-sm">Consultation Requests</span>
            {isActive("/buysellfrom") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
          </Link>

          <Link
            href="/documentrequest"
            onClick={() => setSidebarOpen(false)}
            className={`${menuBase} ${isActive("/documentrequest") ? menuActive : menuInactive}`}
          >
            <Mail
              size={20}
              className={`transition-colors ${
                isActive("/documentrequest") ? "text-black" : "text-zinc-500 group-hover:text-white"
              }`}
            />
            <span className="text-sm">Document Request</span>
            {isActive("/documentrequest") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
          </Link>

          <Link
            href="/pattainquiry"
            onClick={() => setSidebarOpen(false)}
            className={`${menuBase} ${isActive("/pattainquiry") ? menuActive : menuInactive}`}
          >
            <Mail
              size={20}
              className={`transition-colors ${
                isActive("/pattainquiry") ? "text-black" : "text-zinc-500 group-hover:text-white"
              }`}
            />
            <span className="text-sm">Patta Creation Request</span>
            {isActive("/pattainquiry") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
          </Link>

          <Link
            href="/registrylist"
            onClick={() => setSidebarOpen(false)}
            className={`${menuBase} ${isActive("/registrylist") ? menuActive : menuInactive}`}
          >
            <Mail
              size={20}
              className={`transition-colors ${
                isActive("/registrylist") ? "text-black" : "text-zinc-500 group-hover:text-white"
              }`}
            />
            <span className="text-sm">Registry Cost Requests</span>
            {isActive("/registrylist") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
          </Link>

          <Link
            href="/legalconsultations"
            onClick={() => setSidebarOpen(false)}
            className={`${menuBase} ${isActive("/legalconsultations") ? menuActive : menuInactive}`}
          >
            <Mail
              size={20}
              className={`transition-colors ${
                isActive("/legalconsultations") ? "text-black" : "text-zinc-500 group-hover:text-white"
              }`}
            />
            <span className="text-sm">Legal Consultation Requests</span>
            {isActive("/legalconsultations") && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
          </Link>
        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t border-zinc-800 bg-black">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium border border-transparent hover:border-red-900/30"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}