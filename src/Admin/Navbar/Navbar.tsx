// 'use client';

// import { Menu, Bell, UserCircle } from 'lucide-react';

// interface NavbarProps {
//   setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export default function Navbar({ setSidebarOpen }: NavbarProps) {
//   return (
//     <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30 px-6 py-3 flex items-center justify-between shadow-sm">
//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => setSidebarOpen((prev) => !prev)}
//           className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
//           aria-label="Toggle Sidebar"
//         >
//           <Menu size={24} />
//         </button>
//         <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider hidden sm:block">
//           Dashboard
//         </h2>
//       </div>

//       <div className="flex items-center gap-4">
//         {/* <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full relative transition-all">
//           <Bell size={20} />
//           <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//         </button> */}
        
//         {/* <div className="flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer group">
//           <div className="text-right hidden sm:block">
//             <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Admin User</p>
//             <p className="text-xs text-gray-500">Super Admin</p>
//           </div>
//           <div className="bg-gray-100 p-1 rounded-full border border-gray-200 group-hover:border-blue-200 transition-colors">
//             <UserCircle size={32} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
//           </div>
//         </div> */}
//       </div>
//     </header>
//   );
// }
'use client';

import { Menu, Bell, UserCircle } from 'lucide-react';

interface NavbarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen?: boolean; // Optional: to show current state
}

export default function Navbar({ setSidebarOpen, sidebarOpen }: NavbarProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30 px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          aria-label="Toggle Sidebar"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider hidden sm:block">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {/* <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full relative transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button> */}
        
        {/* <div className="flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Admin User</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
          <div className="bg-gray-100 p-1 rounded-full border border-gray-200 group-hover:border-blue-200 transition-colors">
            <UserCircle size={32} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
        </div> */}
      </div>
    </header>
  );
}