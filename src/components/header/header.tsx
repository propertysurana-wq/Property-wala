// "use client";

// import { useState } from "react";
// import { Home, Menu, X } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Top Navbar */}
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Home className="w-8 h-8 text-teal-500" />
//             <span className="text-xl font-bold text-gray-900">Surana Homes</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="nav-link">Home</Link>
//             <Link href="/About" className="nav-link">About</Link>
//             <Link href="/service" className="nav-link">Services</Link>
//             <Link href="/Process" className="nav-link">Process</Link>
//             <Link href="/Contact" className="nav-link">Contact</Link>
//             {/* <Link href="/Adminlogin" className="nav-link">Contact</Link> */}
//           </div>
          

//           {/* Desktop Buttons */}
//            <div className="hidden md:flex items-center space-x-4">
//             <Link href="/userlogin">
//               <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition">
//                 Sign In
//               </button>
//             </Link>
// <Link href="/Adminlogin">
//   <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition">
//     Admin
//   </button>
//    </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>

//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t animate-fadeDown">
//             <div className="flex flex-col space-y-4">

//               <Link href="/" className="mobile-link">Home</Link>
//               <Link href="/About" className="mobile-link">About</Link>
//               <Link href="/service" className="mobile-link">Services</Link>
//               <Link href="/Process" className="mobile-link">Process</Link>
//               <Link href="/Contact" className="mobile-link">Contact</Link>

//               {/* Mobile Buttons */}
//               <div className="flex flex-col space-y-3 pt-4">
//                 <Link href="/userlogin">
//                   <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition w-full">
//                     Sign In
//                   </button>
//                 </Link>

//                 <Link href="/Adminlogin">
//   <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition">
//     Admin
//   </button>
//    </Link>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         .nav-link {
//           @apply text-gray-700 hover:text-teal-500 font-medium transition;
//         }
//         .mobile-link {
//           @apply text-gray-800 hover:text-teal-600 text-lg font-semibold transition;
//         }

//         /* Desktop Green Buttons */
//         .btn-desktop-green {
//           @apply px-6 py-2 bg-green-600 text-white rounded-lg font-medium 
//                  shadow-sm hover:bg-green-700 active:scale-95 transition-all;
//         }

//         /* Mobile Green Buttons */
//         .btn-mobile-green {
//           @apply w-full bg-green-600 text-white py-3 rounded-full font-bold 
//                  text-center shadow-md hover:bg-green-700 active:scale-95 
//                  transition-all;
//         }

//         .animate-fadeDown {
//           animation: fadeDown 0.3s ease;
//         }

//         @keyframes fadeDown {
//           from { opacity: 0; transform: translateY(-5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </nav>
//   );
// }
// "use client";

// import { useState } from "react";
// import { Home, Menu, X, Phone, User } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-[#d9543f]/20 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Top Navbar */}
//         <div className="flex justify-between items-center h-20">

//           {/* Logo Section */}
//           <Link href="/" className="flex items-center space-x-3 group">
//             <div 
//               className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
//               style={{ background: 'linear-gradient(to bottom right, #e8734a, #cc3f3f)' }}
//             >
//               <Home className="w-6 h-6 text-white" />
//             </div>
//             <div className="flex flex-col">
//               <span className="text-xl font-bold text-gray-800 leading-none">
//                Surana Homes
//               </span>
//               <span 
//                 className="text-xs font-medium tracking-wider"
//                 style={{ color: '#d9543f' }}
//               >
//                सुराना होम्स
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="nav-link">Home</Link>
//             <Link href="/About" className="nav-link">About</Link>
//             <Link href="/service" className="nav-link">Services</Link>
//             <Link href="/Process" className="nav-link">Process</Link>
//             <Link href="/Contact" className="nav-link">Contact</Link>
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href="/userlogin">
//   <button className="bg-[#cc3f3f] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#b33636] transition w-full">
//     Sign In
//   </button>
// </Link>
//             {/* <Link href="/Adminlogin">
//               <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition shadow-md text-sm border-2 border-transparent hover:border-[#d9543f]">
//                 <User size={16} /> Admin
//               </button>
//             </Link> */}
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>

//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-gray-100 bg-white absolute w-full left-0 px-4 shadow-xl animate-fadeDown">
//             <div className="flex flex-col space-y-4">

//               <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
//               <Link href="/About" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</Link>
//               <Link href="/service" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
//               <Link href="/Process" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Process</Link>
//               <Link href="/Contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>

//               {/* Mobile Buttons */}
//               <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100 mt-2">
//                 {/* <Link href="tel:+919876543210">
//                   <button 
//                     className="w-full text-white px-5 py-3 rounded-xl font-semibold transition shadow-lg flex items-center justify-center gap-2"
//                     style={{ backgroundColor: '#16a34a' }}
//                   >
//                     <Phone size={18} />
//                     Call Now
//                   </button>
//                 </Link> */}
//                  <Link href="/userlogin">
//                  <button className="bg-[#cc3f3f]-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition w-full">
//                   Sign In
//                   </button>
//           </Link>

//                 {/* <Link href="/Adminlogin">
//                   <button className="w-full bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition shadow-md flex items-center justify-center gap-2">
//                     <User size={18} /> Admin Access
//                   </button>
//                 </Link> */}
//               </div>

//             </div>
//           </div>
//         )}
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         .nav-link {
//           @apply text-gray-700 font-medium text-sm uppercase tracking-wide transition-colors relative;
//         }
//         .nav-link:hover {
//           color: #d9543f;
//         }
//         .nav-link:hover::after {
//           content: '';
//           position: absolute;
//           bottom: -4px;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background-color: #d9543f;
//           border-radius: 2px;
//         }
//         .mobile-link {
//           @apply text-gray-800 text-lg font-semibold transition-colors border-b border-gray-50 pb-2;
//         }
//         .mobile-link:hover {
//           color: #d9543f;
//         }

//         .animate-fadeDown {
//           animation: fadeDown 0.3s ease-out forwards;
//         }

//         @keyframes fadeDown {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import { Home, Menu, X, Phone, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-[#cc3f3f]/20 font-sans">
      <div className="max-w-7xl mx-auto ">
        {/* Top Navbar */}
        <div className="flex justify-between items-center h-20">

          {/* Logo Section - IMAGE */}
          <Link href="/" className="flex items-center group">
            {/* Logo Image - Replace '/logo.png' with your actual logo path */}
           <img 
  src="/image/logo3.png" 
  alt="Surana Homes Logo"
 className="h-14 sm:h-16 md:h-16 w-auto object-contain 
           transition-transform group-hover:scale-105 
           m-0 p-0 block align-middle"

  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) fallback.style.display = 'flex';
  }}
/>

            
            
            {/* Fallback Logo (Icon + Text) - Shows only if image fails */}
            {/* <div className="hidden items-center space-x-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(to bottom right, #e8734a, #cc3f3f)' }}
              >
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 leading-none">
                  Surana Homes
                </span>
                <span 
                  className="text-xs font-medium tracking-wider"
                  style={{ color: '#cc3f3f' }}
                >
                  सुराना होम्स
                </span>
              </div> */}
            {/* </div>
          // </Link> */}
</Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/About" className="nav-link">About</Link>
            <Link href="/service" className="nav-link">Services</Link>
            <Link href="/Process" className="nav-link">Process</Link>
            <Link href="/Contact" className="nav-link">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/userlogin">
              <button className="bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] hover:from-[#cc3f3f] hover:to-[#b54035] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white absolute w-full left-0 px-4 shadow-xl animate-fadeDown">
            <div className="flex flex-col space-y-4">

              <Link href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/About" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/service" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/Process" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Process</Link>
              <Link href="/Contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100 mt-2">
                <Link href="/userlogin">
                  <button className="w-full bg-gradient-to-r from-[#e8734a] to-[#cc3f3f] hover:from-[#cc3f3f] hover:to-[#b54035] text-white px-5 py-3 rounded-full font-semibold transition-all shadow-lg">
                    Sign In
                  </button>
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          @apply text-gray-700 font-medium text-sm uppercase tracking-wide transition-colors relative;
        }
        .nav-link:hover {
          color: #cc3f3f;
        }
        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #cc3f3f;
          border-radius: 2px;
        }
        .mobile-link {
          @apply text-gray-800 text-lg font-semibold transition-colors border-b border-gray-50 pb-2;
        }
        .mobile-link:hover {
          color: #cc3f3f;
        }

        .animate-fadeDown {
          animation: fadeDown 0.3s ease-out forwards;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}