// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter, useParams } from 'next/navigation';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';

// /* ================= API URLS ================= */
// const CITY_API_URL = 'https://propertybackend-6bou.onrender.com/api/city';
// const PROPERTY_TYPE_API_URL = 'https://propertybackend-6bou.onrender.com/api/property-type';
// const PROPERTY_API_URL = 'https://propertybackend-6bou.onrender.com/api/property';
// const BASE_URL = 'https://propertybackend-6bou.onrender.com';

// /* ================= TYPES ================= */
// interface City {
//   _id: string;
//   name: string;
// }

// interface PropertyType {
//   _id: string;
//   propertyTypeName: string;
// }

// /* ================= COMPONENT ================= */
// export default function PropertyEditPage() {
//   const router = useRouter();
//   const params = useParams();
//   const propertyId = params?.id as string;

//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [cities, setCities] = useState<City[]>([]);
//   const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
//   const [selectedType, setSelectedType] = useState('');
//   const [loading, setLoading] = useState(true);
  
//   // Existing images from database
//   const [existingImages, setExistingImages] = useState<string[]>([]);
//   // New images to upload
//   const [selectedImages, setSelectedImages] = useState<File[]>([]);
//   const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  
//   const [form, setForm] = useState({
//     cityId: '',
//     propertyTypeId: '',
//     address: '',
//     description: '',
//     price: '',
//     facilities: '',
//     carpetArea: '',
//     floorNumber: '',
//     propertyAge: '',
//     keyHighlights: '',
//     plotArea: '',
//     extendLandArea: '',
//     facing: '',
//     roadWidth: '',
//     area: '',
//     configuration: '',
//     totalFloors: '',
//     status: 'active',
//   });

//   /* ================= FETCH DATA ================= */
//   useEffect(() => {
//     fetchDropdownData();
//     if (propertyId) {
//       fetchPropertyData();
//     }
//   }, [propertyId]);

//   const extractArray = (res: any) => {
//     if (Array.isArray(res.data)) return res.data;
//     if (Array.isArray(res.data?.data)) return res.data.data;
//     return [];
//   };

//   const fetchDropdownData = async () => {
//     try {
//       const [cityRes, typeRes] = await Promise.all([
//         axios.get(CITY_API_URL),
//         axios.get(PROPERTY_TYPE_API_URL),
//       ]);
//       setCities(extractArray(cityRes));
//       setPropertyTypes(extractArray(typeRes));
//     } catch (err) {
//       console.error('Dropdown Error:', err);
//     }
//   };

//   const fetchPropertyData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${PROPERTY_API_URL}/${propertyId}`);
//       const property = response.data.data || response.data;

//       setForm({
//         cityId: property.cityId || '',
//         propertyTypeId: property.propertyTypeId || '',
//         address: property.address || '',
//         description: property.description || '',
//         price: property.price?.toString() || '',
//         facilities: property.facilities || '',
//         carpetArea: property.carpetArea?.toString() || '',
//         floorNumber: property.floorNumber?.toString() || '',
//         propertyAge: property.propertyAge?.toString() || '',
//         keyHighlights: property.keyHighlights || '',
//         plotArea: property.plotArea?.toString() || '',
//         extendLandArea: property.extendedLandArea?.toString() || '',
//         facing: property.facing || '',
//         roadWidth: property.roadWidth?.toString() || '',
//         area: property.area?.toString() || '',
//         configuration: property.configuration || '',
//         totalFloors: property.totalFloors?.toString() || '',
//         status: property.status || 'active',
//       });

//       setSelectedType(property.propertyTypeName || '');
//       setExistingImages(property.images || []);
//     } catch (err) {
//       console.error('Error fetching property:', err);
//       alert('Failed to load property data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= FORM CHANGE ================= */
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   /* ================= IMAGE HANDLING ================= */
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
    
//     const totalImages = existingImages.length + selectedImages.length + files.length;
//     if (totalImages > 5) {
//       alert('Maximum 5 images allowed');
//       return;
//     }

//     setSelectedImages(prev => [...prev, ...files]);

//     files.forEach(file => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreviews(prev => [...prev, reader.result as string]);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const removeExistingImage = (index: number) => {
//     setExistingImages(prev => prev.filter((_, i) => i !== index));
//   };

//   const removeNewImage = (index: number) => {
//     setSelectedImages(prev => prev.filter((_, i) => i !== index));
//     setImagePreviews(prev => prev.filter((_, i) => i !== index));
//   };

//   /* ================= DYNAMIC FIELDS ================= */
//   const renderFields = () => {
//     const type = selectedType.toLowerCase();

//     if (type === 'plot' || type === 'agriculture land') {
//       return (
//         <>
//           <Input 
//             name="plotArea" 
//             label="Plot Area (sq ft)" 
//             type="number" 
//             value={form.plotArea}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="extendLandArea" 
//             label="Extended Land Area (sq ft)" 
//             type="number" 
//             value={form.extendLandArea}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="price" 
//             label="Price (₹)" 
//             type="number" 
//             value={form.price}
//             onChange={handleChange}
//             required 
//           />
//           <Textarea 
//             name="facilities" 
//             label="Facilities" 
//             value={form.facilities}
//             onChange={handleChange} 
//           />
//         </>
//       );
//     }

//     if (type === 'shop' || type === 'office') {
//       return (
//         <>
//           <Input 
//             name="carpetArea" 
//             label="Carpet Area (sq ft)" 
//             type="number" 
//             value={form.carpetArea}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="floorNumber" 
//             label="Floor Number" 
//             type="number" 
//             value={form.floorNumber}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="propertyAge" 
//             label="Property Age (years)" 
//             type="number" 
//             value={form.propertyAge}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="price" 
//             label="Price (₹)" 
//             type="number" 
//             value={form.price}
//             onChange={handleChange}
//             required 
//           />
//           <Textarea 
//             name="keyHighlights" 
//             label="Key Highlights" 
//             value={form.keyHighlights}
//             onChange={handleChange} 
//           />
//           <Textarea 
//             name="facilities" 
//             label="Facilities" 
//             value={form.facilities}
//             onChange={handleChange} 
//           />
//         </>
//       );
//     }

//     if (type === 'industrial land') {
//       return (
//         <>
//           <Input 
//             name="plotArea" 
//             label="Plot Area (sq ft)" 
//             type="number" 
//             value={form.plotArea}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="price" 
//             label="Price (₹)" 
//             type="number" 
//             value={form.price}
//             onChange={handleChange}
//             required 
//           />
//           <Input 
//             name="facing" 
//             label="Facing Direction" 
//             value={form.facing}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="roadWidth" 
//             label="Road Width (ft)" 
//             type="number" 
//             value={form.roadWidth}
//             onChange={handleChange} 
//           />
//         </>
//       );
//     }

//     if (type === 'house') {
//       return (
//         <>
//           <Input 
//             name="area" 
//             label="Area (sq ft)" 
//             type="number" 
//             value={form.area}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="price" 
//             label="Price (₹)" 
//             type="number" 
//             value={form.price}
//             onChange={handleChange}
//             required 
//           />
//           <Input 
//             name="configuration" 
//             label="Configuration (e.g., 2BHK, 3BHK)" 
//             value={form.configuration}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="totalFloors" 
//             label="Total Floors" 
//             type="number" 
//             value={form.totalFloors}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="facing" 
//             label="Facing Direction" 
//             value={form.facing}
//             onChange={handleChange} 
//           />
//           <Input 
//             name="propertyAge" 
//             label="Property Age (years)" 
//             type="number" 
//             value={form.propertyAge}
//             onChange={handleChange} 
//           />
//           <Textarea 
//             name="facilities" 
//             label="Facilities" 
//             value={form.facilities}
//             onChange={handleChange} 
//           />
//         </>
//       );
//     }

//     return null;
//   };

//   /* ================= SUBMIT ================= */
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     try {
//       const formData = new FormData();
      
//       // Append all form fields
//       Object.entries(form).forEach(([key, value]) => {
//         if (value) formData.append(key, value);
//       });

//       // Append existing images (that weren't removed)
//       formData.append('existingImages', JSON.stringify(existingImages));

//       // Append new images
//       selectedImages.forEach(image => {
//         formData.append('images', image);
//       });

//       await axios.put(`${PROPERTY_API_URL}/${propertyId}`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       alert('Property Updated Successfully!');
//       router.push('/property-list');
//     } catch (err: any) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Failed to update property');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black"></div>
//           <p className="mt-4 text-gray-600">Loading property...</p>
//         </div>
//       </div>
//     );
//   }

//   /* ================= UI ================= */
//   return (
//     <div className="flex h-screen bg-white font-sans text-gray-900">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
//       <div className="flex-1 overflow-auto bg-gray-50">
//         <Navbar setSidebarOpen={setSidebarOpen}  />
        
//         <div className="p-8 max-w-5xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
//             {/* Header */}
//             <div className="mb-8 pb-6 border-b border-gray-200">
//               <h1 className="text-3xl font-bold text-black">Edit Property</h1>
//               <p className="text-gray-600 mt-2">Update property details</p>
//             </div>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* CITY, PROPERTY TYPE & STATUS - Grid Layout */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* CITY */}
//                 <div>
//                   <label className="block text-sm font-semibold text-black mb-2">
//                     City <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="cityId"
//                     value={form.cityId}
//                     onChange={handleChange}
//                     className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black"
//                     required
//                   >
//                     <option value="">Select City</option>
//                     {cities.map((c) => (
//                       <option key={c._id} value={c._id}>
//                         {c.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* PROPERTY TYPE */}
//                 <div>
//                   <label className="block text-sm font-semibold text-black mb-2">
//                     Property Type <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="propertyTypeId"
//                     value={form.propertyTypeId}
//                     onChange={(e) => {
//                       handleChange(e);
//                       const selected = propertyTypes.find(p => p._id === e.target.value);
//                       setSelectedType(selected?.propertyTypeName || '');
//                     }}
//                     className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black"
//                     required
//                   >
//                     <option value="">Select Property Type</option>
//                     {propertyTypes.map((p) => (
//                       <option key={p._id} value={p._id}>
//                         {p.propertyTypeName}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* STATUS */}
//                 <div>
//                   <label className="block text-sm font-semibold text-black mb-2">
//                     Status <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="status"
//                     value={form.status}
//                     onChange={handleChange}
//                     className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black"
//                     required
//                   >
//                     <option value="active">Active</option>
//                     <option value="inactive">Inactive</option>
//                     <option value="sold">Sold</option>
//                   </select>
//                 </div>
//               </div>

//               {/* ADDRESS */}
//               <Input 
//                 name="address" 
//                 label="Property Address" 
//                 value={form.address}
//                 onChange={handleChange} 
//                 required 
//               />

//               {/* DESCRIPTION */}
//               <Textarea 
//                 name="description" 
//                 label="Property Description" 
//                 value={form.description}
//                 onChange={handleChange} 
//               />

//               {/* DYNAMIC FIELDS */}
//               {selectedType && (
//                 <div className="space-y-6 pt-4 border-t border-gray-200">
//                   <h2 className="text-xl font-bold text-black">Property Specifications</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {renderFields()}
//                   </div>
//                 </div>
//               )}

//               {/* IMAGE UPLOAD SECTION */}
//               <div className="space-y-4 pt-6 border-t border-gray-200">
//                 <h2 className="text-xl font-bold text-black">Property Images</h2>

//                 {/* Existing Images */}
//                 {existingImages.length > 0 && (
//                   <div>
//                     <label className="block text-sm font-semibold text-black mb-2">
//                       Current Images
//                     </label>
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                       {existingImages.map((image, index) => (
//                         <div key={index} className="relative group">
//                           <img
//                             src={`${BASE_URL}${image}`}
//                             alt={`Existing ${index + 1}`}
//                             className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 transition-all group-hover:border-black"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => removeExistingImage(index)}
//                             className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-all shadow-lg"
//                           >
//                             ×
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* New Images Upload */}
//                 <div>
//                   <label className="block text-sm font-semibold text-black mb-2">
//                     Add More Images <span className="text-gray-500">(Total Max: 5)</span>
//                   </label>
                  
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-black transition-all">
//                     <input
//                       type="file"
//                       accept="image/jpeg,image/jpg,image/png,image/webp"
//                       multiple
//                       onChange={handleImageChange}
//                       disabled={existingImages.length + selectedImages.length >= 5}
//                       className="hidden"
//                       id="file-upload"
//                     />
//                     <label 
//                       htmlFor="file-upload" 
//                       className={`cursor-pointer ${existingImages.length + selectedImages.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     >
//                       <div className="space-y-2">
//                         <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
//                           <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         <p className="text-sm text-gray-600">Click to upload more images</p>
//                         <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
//                       </div>
//                     </label>
//                   </div>

//                   <p className="text-sm text-gray-600 mt-2">
//                     <span className="font-semibold text-black">
//                       {existingImages.length + selectedImages.length}/5
//                     </span> images total
//                   </p>
//                 </div>

//                 {/* New Image Previews */}
//                 {imagePreviews.length > 0 && (
//                   <div>
//                     <label className="block text-sm font-semibold text-black mb-2">
//                       New Images to Upload
//                     </label>
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                       {imagePreviews.map((preview, index) => (
//                         <div key={index} className="relative group">
//                           <img
//                             src={preview}
//                             alt={`New ${index + 1}`}
//                             className="w-full h-32 object-cover rounded-lg border-2 border-green-200"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => removeNewImage(index)}
//                             className="absolute -top-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg"
//                           >
//                             ×
//                           </button>
//                           <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
//                             NEW
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* ACTION BUTTONS */}
//               <div className="pt-6 border-t border-gray-200 flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => router.push('/property-list')}
//                   className="flex-1 bg-white border-2 border-gray-300 hover:border-black text-black font-bold px-8 py-4 rounded-lg transition-all"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-md"
//                 >
//                   Update Property
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= INPUT COMPONENTS ================= */
// interface InputProps {
//   name: string;
//   label: string;
//   value?: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
//   type?: string;
// }

// const Input = ({ name, label, value, onChange, required, type = 'text' }: InputProps) => (
//   <div>
//     <label className="block text-sm font-semibold text-black mb-2">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       name={name}
//       type={type}
//       value={value}
//       placeholder={`Enter ${label.toLowerCase()}`}
//       onChange={onChange}
//       required={required}
//       className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black placeholder-gray-400"
//     />
//   </div>
// );

// interface TextareaProps {
//   name: string;
//   label: string;
//   value?: string;
//   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
// }

// const Textarea = ({ name, label, value, onChange }: TextareaProps) => (
//   <div>
//     <label className="block text-sm font-semibold text-black mb-2">
//       {label}
//     </label>
//     <textarea
//       name={name}
//       value={value}
//       placeholder={`Enter ${label.toLowerCase()}`}
//       onChange={onChange}
//       className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black placeholder-gray-400 resize-none"
//       rows={4}
//     />
//   </div>
// );








'use client';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

/* ================= API URLS ================= */
const CITY_API_URL = 'https://propertybackend-6bou.onrender.com/api/city';
const PROPERTY_TYPE_API_URL = 'https://propertybackend-6bou.onrender.com/api/property-type';
const PROPERTY_API_URL = 'https://propertybackend-6bou.onrender.com/api/property';
const BASE_URL = 'https://propertybackend-6bou.onrender.com';

/* ================= TYPES ================= */
interface City {
  _id: string;
  name: string;
}

interface PropertyType {
  _id: string;
  propertyTypeName: string;
}

interface PropertyEditProps {
  propertyId: string;
}

/* ================= COMPONENT ================= */
export default function PropertyEdit({ propertyId }: PropertyEditProps) {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [cities, setCities] = useState<City[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [dropdownsLoaded, setDropdownsLoaded] = useState(false);

  // Existing images from database
  const [existingImages, setExistingImages] = useState<string[]>([]);
  // Images to delete (tracking removed existing images)
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  // New images to upload
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const [form, setForm] = useState({
    cityId: '',
    propertyTypeId: '',
    address: '',
    description: '',
    price: '',
    facilities: '',
    carpetArea: '',
    floorNumber: '',
    propertyAge: '',
    keyHighlights: '',
    plotArea: '',
    extendLandArea: '',
    facing: '',
    roadWidth: '',
    area: '',
    configuration: '',
    totalFloors: '',
    status: 'active',
  });

  /* ================= HELPER FUNCTIONS ================= */
  const extractArray = (res: any) => {
    if (Array.isArray(res.data)) return res.data;
    if (Array.isArray(res.data?.data)) return res.data.data;
    return [];
  };

  /* ================= FETCH DROPDOWN DATA ================= */
  const fetchDropdownData = useCallback(async () => {
    try {
      const [cityRes, typeRes] = await Promise.all([
        axios.get(CITY_API_URL),
        axios.get(PROPERTY_TYPE_API_URL),
      ]);
      
      const citiesData = extractArray(cityRes);
      const typesData = extractArray(typeRes);
      
      setCities(citiesData);
      setPropertyTypes(typesData);
      setDropdownsLoaded(true);
      
      return typesData; // Return for use in property fetch
    } catch (err) {
      console.error('Dropdown Error:', err);
      return [];
    }
  }, []);

  /* ================= FETCH PROPERTY DATA ================= */
  const fetchPropertyData = useCallback(async (types: PropertyType[]) => {
    if (!propertyId) return;
    
    try {
      setLoading(true);
      const response = await axios.get(`${PROPERTY_API_URL}/${propertyId}`);
      const property = response.data.data || response.data;

      // Set form data
      setForm({
        cityId: property.cityId?._id || property.cityId || '',
        propertyTypeId: property.propertyTypeId?._id || property.propertyTypeId || '',
        address: property.address || '',
        description: property.description || '',
        price: property.price?.toString() || '',
        facilities: property.facilities || '',
        carpetArea: property.carpetArea?.toString() || '',
        floorNumber: property.floorNumber?.toString() || '',
        propertyAge: property.propertyAge?.toString() || '',
        keyHighlights: property.keyHighlights || '',
        plotArea: property.plotArea?.toString() || '',
        extendLandArea: property.extendedLandArea?.toString() || property.extendLandArea?.toString() || '',
        facing: property.facing || '',
        roadWidth: property.roadWidth?.toString() || '',
        area: property.area?.toString() || '',
        configuration: property.configuration || '',
        totalFloors: property.totalFloors?.toString() || '',
        status: property.status || 'active',
      });

      // Set existing images
      setExistingImages(property.images || []);

      // Find and set property type name
      const propertyTypeId = property.propertyTypeId?._id || property.propertyTypeId;
      
      // First check if property has propertyTypeName directly
      if (property.propertyTypeName) {
        setSelectedType(property.propertyTypeName);
      } else if (property.propertyTypeId?.propertyTypeName) {
        // Check if propertyTypeId is populated object
        setSelectedType(property.propertyTypeId.propertyTypeName);
      } else {
        // Find from types array
        const foundType = types.find(t => t._id === propertyTypeId);
        if (foundType) {
          setSelectedType(foundType.propertyTypeName);
        }
      }
    } catch (err) {
      console.error('Error fetching property:', err);
      alert('Failed to load property data');
    } finally {
      setLoading(false);
    }
  }, [propertyId]);

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    const loadData = async () => {
      const types = await fetchDropdownData();
      if (propertyId) {
        await fetchPropertyData(types);
      }
    };
    
    loadData();
  }, [propertyId, fetchDropdownData, fetchPropertyData]);

  /* ================= UPDATE SELECTED TYPE WHEN PROPERTY TYPE ID CHANGES ================= */
  useEffect(() => {
    if (form.propertyTypeId && propertyTypes.length > 0 && !selectedType) {
      const foundType = propertyTypes.find(t => t._id === form.propertyTypeId);
      if (foundType) {
        setSelectedType(foundType.propertyTypeName);
      }
    }
  }, [form.propertyTypeId, propertyTypes, selectedType]);

  /* ================= FORM CHANGE ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  /* ================= PROPERTY TYPE CHANGE ================= */
  const handlePropertyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, propertyTypeId: value }));
    
    const selected = propertyTypes.find(p => p._id === value);
    setSelectedType(selected?.propertyTypeName || '');
  };

  /* ================= IMAGE HANDLING ================= */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const totalImages = existingImages.length + selectedImages.length + files.length;
    if (totalImages > 5) {
      alert(`Maximum 5 images allowed. You can add ${5 - existingImages.length - selectedImages.length} more.`);
      return;
    }

    setSelectedImages(prev => [...prev, ...files]);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeExistingImage = (index: number) => {
    const imageToRemove = existingImages[index];
    setImagesToDelete(prev => [...prev, imageToRemove]);
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeNewImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  /* ================= DYNAMIC FIELDS ================= */
  const renderFields = () => {
    const type = selectedType.toLowerCase();

    if (type === 'plot' || type === 'agriculture land') {
      return (
        <>
          <Input
            name="plotArea"
            label="Plot Area (sq ft)"
            type="number"
            value={form.plotArea}
            onChange={handleChange}
          />
          <Input
            name="extendLandArea"
            label="Extended Land Area (sq ft)"
            type="number"
            value={form.extendLandArea}
            onChange={handleChange}
          />
          <Input
            name="price"
            label="Price (₹)"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
          <Input
            name="facing"
            label="Facing Direction"
            value={form.facing}
            onChange={handleChange}
          />
          <div className="md:col-span-2">
            <Textarea
              name="facilities"
              label="Facilities"
              value={form.facilities}
              onChange={handleChange}
            />
          </div>
        </>
      );
    }

    if (type === 'shop' || type === 'office') {
      return (
        <>
          <Input
            name="carpetArea"
            label="Carpet Area (sq ft)"
            type="number"
            value={form.carpetArea}
            onChange={handleChange}
          />
          <Input
            name="floorNumber"
            label="Floor Number"
            type="number"
            value={form.floorNumber}
            onChange={handleChange}
          />
          <Input
            name="propertyAge"
            label="Property Age (years)"
            type="number"
            value={form.propertyAge}
            onChange={handleChange}
          />
          <Input
            name="price"
            label="Price (₹)"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
          <div className="md:col-span-2">
            <Textarea
              name="keyHighlights"
              label="Key Highlights"
              value={form.keyHighlights}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              name="facilities"
              label="Facilities"
              value={form.facilities}
              onChange={handleChange}
            />
          </div>
        </>
      );
    }

    if (type === 'industrial land') {
      return (
        <>
          <Input
            name="plotArea"
            label="Plot Area (sq ft)"
            type="number"
            value={form.plotArea}
            onChange={handleChange}
          />
          <Input
            name="price"
            label="Price (₹)"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
          <Input
            name="facing"
            label="Facing Direction"
            value={form.facing}
            onChange={handleChange}
          />
          <Input
            name="roadWidth"
            label="Road Width (ft)"
            type="number"
            value={form.roadWidth}
            onChange={handleChange}
          />
        </>
      );
    }

    if (type === 'house' || type === 'apartment' || type === 'flat') {
      return (
        <>
          <Input
            name="area"
            label="Area (sq ft)"
            type="number"
            value={form.area}
            onChange={handleChange}
          />
          <Input
            name="price"
            label="Price (₹)"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
          <Input
            name="configuration"
            label="Configuration (e.g., 2BHK, 3BHK)"
            value={form.configuration}
            onChange={handleChange}
          />
          <Input
            name="totalFloors"
            label="Total Floors"
            type="number"
            value={form.totalFloors}
            onChange={handleChange}
          />
          <Input
            name="facing"
            label="Facing Direction"
            value={form.facing}
            onChange={handleChange}
          />
          <Input
            name="propertyAge"
            label="Property Age (years)"
            type="number"
            value={form.propertyAge}
            onChange={handleChange}
          />
          <div className="md:col-span-2">
            <Textarea
              name="facilities"
              label="Facilities"
              value={form.facilities}
              onChange={handleChange}
            />
          </div>
        </>
      );
    }

    // Default fields if no type selected or type doesn't match
    return (
      <>
        <Input
          name="price"
          label="Price (₹)"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
        />
        <Input
          name="area"
          label="Area (sq ft)"
          type="number"
          value={form.area}
          onChange={handleChange}
        />
      </>
    );
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.cityId || !form.propertyTypeId) {
      alert('Please select City and Property Type');
      return;
    }

    try {
      const formData = new FormData();

      // Append all form fields
      Object.entries(form).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          formData.append(key, value);
        }
      });

      // Append existing images (that weren't removed)
      formData.append('existingImages', JSON.stringify(existingImages));
      
      // Append images to delete
      formData.append('imagesToDelete', JSON.stringify(imagesToDelete));

      // Append new images
      selectedImages.forEach(image => {
        formData.append('images', image);
      });

      await axios.put(`${PROPERTY_API_URL}/${propertyId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Property Updated Successfully!');
      router.push('/propertylist');
    } catch (err: any) {
      console.error('Update Error:', err);
      alert(err.response?.data?.message || 'Failed to update property');
    }
  };

  /* ================= LOADING STATE ================= */
  if (loading) {
    return (
      <div className="flex h-screen bg-white font-sans text-gray-900">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 overflow-auto bg-gray-50">
          <Navbar setSidebarOpen={setSidebarOpen} />
          <div className="flex h-[calc(100vh-80px)] items-center justify-center">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-black"></div>
              <p className="mt-4 text-gray-600">Loading property...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ================= MAIN UI ================= */
  return (
    <div className="flex h-screen bg-white font-sans text-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 overflow-auto bg-gray-50">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <div className="p-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            {/* Header */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-black">Edit Property</h1>
                  <p className="text-gray-600 mt-2">Update property details</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  form.status === 'active' ? 'bg-green-100 text-green-800' :
                  form.status === 'sold' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* CITY, PROPERTY TYPE & STATUS - Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CITY */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="cityId"
                    value={form.cityId}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black"
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PROPERTY TYPE */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="propertyTypeId"
                    value={form.propertyTypeId}
                    onChange={handlePropertyTypeChange}
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black"
                    required
                  >
                    <option value="">Select Property Type</option>
                    {propertyTypes.map((p) => (
                      <option key={p._id} value={p._id}>
                        {p.propertyTypeName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* STATUS */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black"
                    required
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="sold">Sold</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>

              {/* ADDRESS */}
              <Input
                name="address"
                label="Property Address"
                value={form.address}
                onChange={handleChange}
                required
              />

              {/* DESCRIPTION */}
              <Textarea
                name="description"
                label="Property Description"
                value={form.description}
                onChange={handleChange}
              />

              {/* DYNAMIC FIELDS */}
              {selectedType && (
                <div className="space-y-6 pt-4 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-black">
                    Property Specifications
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({selectedType})
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderFields()}
                  </div>
                </div>
              )}

              {/* IMAGE UPLOAD SECTION */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-bold text-black">Property Images</h2>

                {/* Existing Images */}
                {existingImages.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Current Images ({existingImages.length})
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {existingImages.map((image, index) => (
                        <div key={`existing-${index}`} className="relative group">
                          <img
                            src={image.startsWith('http') ? image : `${BASE_URL}${image}`}
                            alt={`Property ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 transition-all group-hover:border-black"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/placeholder-image.jpg';
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => removeExistingImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-all shadow-lg transform hover:scale-110"
                            title="Remove image"
                          >
                            ×
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* New Images Upload */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Add More Images 
                    <span className="text-gray-500 font-normal ml-1">
                      ({5 - existingImages.length - selectedImages.length} remaining)
                    </span>
                  </label>

                  <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                    existingImages.length + selectedImages.length >= 5 
                      ? 'border-gray-200 bg-gray-50' 
                      : 'border-gray-300 hover:border-black cursor-pointer'
                  }`}>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      multiple
                      onChange={handleImageChange}
                      disabled={existingImages.length + selectedImages.length >= 5}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className={existingImages.length + selectedImages.length >= 5 
                        ? 'cursor-not-allowed' 
                        : 'cursor-pointer'
                      }
                    >
                      <div className="space-y-2">
                        <svg 
                          className={`mx-auto h-12 w-12 ${
                            existingImages.length + selectedImages.length >= 5 
                              ? 'text-gray-300' 
                              : 'text-gray-400'
                          }`} 
                          stroke="currentColor" 
                          fill="none" 
                          viewBox="0 0 48 48"
                        >
                          <path 
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          />
                        </svg>
                        {existingImages.length + selectedImages.length >= 5 ? (
                          <p className="text-sm text-gray-400">Maximum images reached</p>
                        ) : (
                          <>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold text-black">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB each</p>
                          </>
                        )}
                      </div>
                    </label>
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold text-black">
                      {existingImages.length + selectedImages.length}/5
                    </span> images total
                  </p>
                </div>

                {/* New Image Previews */}
                {imagePreviews.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      New Images to Upload ({imagePreviews.length})
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {imagePreviews.map((preview, index) => (
                        <div key={`new-${index}`} className="relative group">
                          <img
                            src={preview}
                            alt={`New ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg border-2 border-green-300 transition-all group-hover:border-green-500"
                          />
                          <button
                            type="button"
                            onClick={() => removeNewImage(index)}
                            className="absolute -top-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg transform hover:scale-110"
                            title="Remove image"
                          >
                            ×
                          </button>
                          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                            NEW
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => router.push('/admin/property-list')}
                  className="flex-1 bg-white border-2 border-gray-300 hover:border-black text-black font-bold px-8 py-4 rounded-lg transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl"
                >
                  Update Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= INPUT COMPONENTS ================= */
interface InputProps {
  name: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}

const Input = ({ name, label, value = '', onChange, required, type = 'text' }: InputProps) => (
  <div>
    <label className="block text-sm font-semibold text-black mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      name={name}
      type={type}
      value={value}
      placeholder={`Enter ${label.toLowerCase()}`}
      onChange={onChange}
      required={required}
      className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black placeholder-gray-400"
    />
  </div>
);

interface TextareaProps {
  name: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const Textarea = ({ name, label, value = '', onChange }: TextareaProps) => (
  <div>
    <label className="block text-sm font-semibold text-black mb-2">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      placeholder={`Enter ${label.toLowerCase()}`}
      onChange={onChange}
      className="w-full border-2 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all bg-white text-black placeholder-gray-400 resize-none"
      rows={4}
    />
  </div>
);