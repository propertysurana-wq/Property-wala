// src/app/cities/new/page.tsx
'use client';

import AdminArea from "@/Admin/City/city"; // make sure this path is correct

export default function CityPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminArea />
    </div>
  );
}
