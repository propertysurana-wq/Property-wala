// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';

// /* ================= API URLS ================= */
// const CITY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/city';
// const PROPERTY_TYPE_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property-type';
// const PROPERTY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property';

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
// export default function PropertyDetailsPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [cities, setCities] = useState<City[]>([]);
//   const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
//   const [selectedType, setSelectedType] = useState('');
  
//   // ✅ Image state
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
//   });

//   /* ================= FETCH DROPDOWNS ================= */
//   useEffect(() => {
//     fetchDropdownData();
//   }, []);

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

//   /* ================= FORM CHANGE ================= */
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   /* ================= IMAGE HANDLING ================= */
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
    
//     if (files.length + selectedImages.length > 5) {
//       alert('Maximum 5 images allowed');
//       return;
//     }

//     setSelectedImages(prev => [...prev, ...files]);

//     // Create previews
//     files.forEach(file => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreviews(prev => [...prev, reader.result as string]);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const removeImage = (index: number) => {
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

//       // Append images
//       selectedImages.forEach(image => {
//         formData.append('images', image);
//       });

//       await axios.post(PROPERTY_API_URL, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       alert('Property Added Successfully!');
      
//       // Reset form
//       setForm({
//         cityId: '',
//         propertyTypeId: '',
//         address: '',
//         description: '',
//         price: '',
//         facilities: '',
//         carpetArea: '',
//         floorNumber: '',
//         propertyAge: '',
//         keyHighlights: '',
//         plotArea: '',
//         extendLandArea: '',
//         facing: '',
//         roadWidth: '',
//         area: '',
//         configuration: '',
//         totalFloors: '',
//       });
//       setSelectedType('');
//       setSelectedImages([]);
//       setImagePreviews([]);
//     } catch (err: any) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Failed to save property');
//     }
//   };

//   /* ================= UI ================= */
//   return (
//     <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
//       <div className="flex-1 overflow-auto">
//         <Navbar setSidebarOpen={setSidebarOpen} title="Property Details" />
        
//         <div className="p-6 max-w-4xl mx-auto">
//           <div className="bg-white rounded-xl shadow p-6">
//             <h1 className="text-2xl font-semibold mb-6 text-gray-800">Add New Property</h1>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* CITY */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   City <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="cityId"
//                   value={form.cityId}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="">Select City</option>
//                   {cities.map((c) => (
//                     <option key={c._id} value={c._id}>
//                       {c.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* PROPERTY TYPE */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Property Type <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="propertyTypeId"
//                   value={form.propertyTypeId}
//                   onChange={(e) => {
//                     handleChange(e);
//                     const selected = propertyTypes.find(p => p._id === e.target.value);
//                     setSelectedType(selected?.propertyTypeName || '');
//                   }}
//                   className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="">Select Property Type</option>
//                   {propertyTypes.map((p) => (
//                     <option key={p._id} value={p._id}>
//                       {p.propertyTypeName}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* ADDRESS */}
//               <Input 
//                 name="address" 
//                 label="Address" 
//                 value={form.address}
//                 onChange={handleChange} 
//                 required 
//               />

//               {/* DESCRIPTION */}
//               <Textarea 
//                 name="description" 
//                 label="Description" 
//                 value={form.description}
//                 onChange={handleChange} 
//               />

//               {/* DYNAMIC FIELDS BASED ON PROPERTY TYPE */}
//               {renderFields()}

//               {/* ✅ IMAGE UPLOAD */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Property Images (Maximum 5)
//                 </label>
                
//                 <input
//                   type="file"
//                   accept="image/jpeg,image/jpg,image/png,image/webp"
//                   multiple
//                   onChange={handleImageChange}
//                   disabled={selectedImages.length >= 5}
//                   className="w-full border border-gray-300 p-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
//                 />

//                 <p className="text-sm text-gray-500">
//                   {selectedImages.length}/5 images selected
//                 </p>

//                 {/* Image Previews */}
//                 {imagePreviews.length > 0 && (
//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//                     {imagePreviews.map((preview, index) => (
//                       <div key={index} className="relative group">
//                         <img
//                           src={preview}
//                           alt={`Preview ${index + 1}`}
//                           className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeImage(index)}
//                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
//                           title="Remove image"
//                         >
//                           ×
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* SUBMIT BUTTON */}
//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
//                 >
//                   Save Property
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
//     <label className="block text-sm font-medium text-gray-700 mb-1">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       name={name}
//       type={type}
//       value={value}
//       placeholder={label}
//       onChange={onChange}
//       required={required}
//       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
//     <label className="block text-sm font-medium text-gray-700 mb-1">
//       {label}
//     </label>
//     <textarea
//       name={name}
//       value={value}
//       placeholder={label}
//       onChange={onChange}
//       className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//       rows={3}
//     />
//   </div>
// );



// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';

// /* ================= API URLS ================= */
// const CITY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/city';
// const PROPERTY_TYPE_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property-type';
// const PROPERTY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property';

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
// export default function PropertyDetailsPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [cities, setCities] = useState<City[]>([]);
//   const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
//   const [selectedType, setSelectedType] = useState('');
  
//   // ✅ Image state
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
//   });

//   /* ================= FETCH DROPDOWNS ================= */
//   useEffect(() => {
//     fetchDropdownData();
//   }, []);

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

//   /* ================= FORM CHANGE ================= */
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   /* ================= IMAGE HANDLING ================= */
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
    
//     if (files.length + selectedImages.length > 5) {
//       alert('Maximum 5 images allowed');
//       return;
//     }

//     setSelectedImages(prev => [...prev, ...files]);

//     // Create previews
//     files.forEach(file => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreviews(prev => [...prev, reader.result as string]);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const removeImage = (index: number) => {
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

//     if (type === 'House') {
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

//       // Append images
//       selectedImages.forEach(image => {
//         formData.append('images', image);
//       });

//       await axios.post(PROPERTY_API_URL, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       alert('Property Added Successfully!');
      
//       // Reset form
//       setForm({
//         cityId: '',
//         propertyTypeId: '',
//         address: '',
//         description: '',
//         price: '',
//         facilities: '',
//         carpetArea: '',
//         floorNumber: '',
//         propertyAge: '',
//         keyHighlights: '',
//         plotArea: '',
//         extendLandArea: '',
//         facing: '',
//         roadWidth: '',
//         area: '',
//         configuration: '',
//         totalFloors: '',
//       });
//       setSelectedType('');
//       setSelectedImages([]);
//       setImagePreviews([]);
//     } catch (err: any) {
//       console.error(err);
//       alert(err.response?.data?.message || 'Failed to save property');
//     }
//   };

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
//               <h1 className="text-3xl font-bold text-black">Add New Property</h1>
//               <p className="text-gray-600 mt-2">Fill in the details to list a new property</p>
//             </div>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* CITY & PROPERTY TYPE - Grid Layout */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

//               {/* DYNAMIC FIELDS BASED ON PROPERTY TYPE */}
//               {selectedType && (
//                 <div className="space-y-6 pt-4 border-t border-gray-200">
//                   <h2 className="text-xl font-bold text-black">Property Specifications</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {renderFields()}
//                   </div>
//                 </div>
//               )}

//               {/* ✅ IMAGE UPLOAD SECTION */}
//               <div className="space-y-4 pt-6 border-t border-gray-200">
//                 <div>
//                   <label className="block text-sm font-semibold text-black mb-2">
//                     Property Images <span className="text-gray-500">(Maximum 5)</span>
//                   </label>
                  
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-black transition-all">
//                     <input
//                       type="file"
//                       accept="image/jpeg,image/jpg,image/png,image/webp"
//                       multiple
//                       onChange={handleImageChange}
//                       disabled={selectedImages.length >= 5}
//                       className="hidden"
//                       id="file-upload"
//                     />
//                     <label 
//                       htmlFor="file-upload" 
//                       className={`cursor-pointer ${selectedImages.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     >
//                       <div className="space-y-2">
//                         <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
//                           <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         <div className="text-sm text-gray-600">
//                           <span className="font-semibold text-black">Click to upload</span> or drag and drop
//                         </div>
//                         <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB each</p>
//                       </div>
//                     </label>
//                   </div>

//                   <p className="text-sm text-gray-600 mt-2">
//                     <span className="font-semibold text-black">{selectedImages.length}/5</span> images selected
//                   </p>
//                 </div>

//                 {/* Image Previews */}
//                 {imagePreviews.length > 0 && (
//                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
//                     {imagePreviews.map((preview, index) => (
//                       <div key={index} className="relative group">
//                         <img
//                           src={preview}
//                           alt={`Preview ${index + 1}`}
//                           className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 transition-all group-hover:border-black"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeImage(index)}
//                           className="absolute -top-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg transform hover:scale-110"
//                           title="Remove image"
//                         >
//                           ×
//                         </button>
//                         <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                           {index + 1}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* SUBMIT BUTTON */}
//               <div className="pt-6 border-t border-gray-200">
//                 <button
//                   type="submit"
//                   className="w-full bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-[1.02]"
//                 >
//                   Save Property
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
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

/* ================= API URLS ================= */
const CITY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/city';
const PROPERTY_TYPE_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property-type';
const PROPERTY_API_URL = 'https://propertybackend-1-xdbs.onrender.com/api/property';

/* ================= TYPES ================= */
interface City {
  _id: string;
  name: string;
}

interface PropertyType {
  _id: string;
  propertyTypeName: string;
}

/* ================= COMPONENT ================= */
export default function PropertyDetailsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [cities, setCities] = useState<City[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const [selectedType, setSelectedType] = useState('');
  
  // ✅ Image state
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
  });

  /* ================= FETCH DROPDOWNS ================= */
  useEffect(() => {
    fetchDropdownData();
  }, []);

  const extractArray = (res: any) => {
    if (Array.isArray(res.data)) return res.data;
    if (Array.isArray(res.data?.data)) return res.data.data;
    return [];
  };

  const fetchDropdownData = async () => {
    try {
      const [cityRes, typeRes] = await Promise.all([
        axios.get(CITY_API_URL),
        axios.get(PROPERTY_TYPE_API_URL),
      ]);
      setCities(extractArray(cityRes));
      setPropertyTypes(extractArray(typeRes));
    } catch (err) {
      console.error('Dropdown Error:', err);
    }
  };

  /* ================= FORM CHANGE ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= IMAGE HANDLING ================= */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (files.length + selectedImages.length > 5) {
      alert('Maximum 5 images allowed');
      return;
    }

    setSelectedImages(prev => [...prev, ...files]);

    // Create previews
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
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
          <Textarea 
            name="facilities" 
            label="Facilities" 
            value={form.facilities}
            onChange={handleChange} 
          />
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
          <Textarea 
            name="keyHighlights" 
            label="Key Highlights" 
            value={form.keyHighlights}
            onChange={handleChange} 
          />
          <Textarea 
            name="facilities" 
            label="Facilities" 
            value={form.facilities}
            onChange={handleChange} 
          />
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

    // ✅ FIXED: Changed 'House' to 'house' (lowercase)
    if (type === 'house' || type === 'villa' || type === 'flat') {
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
          <Textarea 
            name="facilities" 
            label="Facilities" 
            value={form.facilities}
            onChange={handleChange} 
          />
        </>
      );
    }

    return null;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      
      // Append all form fields
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      // Append images
      selectedImages.forEach(image => {
        formData.append('images', image);
      });

      await axios.post(PROPERTY_API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Property Added Successfully!');
      
      // Reset form
      setForm({
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
      });
      setSelectedType('');
      setSelectedImages([]);
      setImagePreviews([]);
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to save property');
    }
  };

  /* ================= UI ================= */
  return (
    <div className="flex h-screen bg-white font-sans text-gray-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <Navbar setSidebarOpen={setSidebarOpen} />
        
        <div className="p-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            {/* Header */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-black">Add New Property</h1>
              <p className="text-gray-600 mt-2">Fill in the details to list a new property</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* CITY & PROPERTY TYPE - Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    onChange={(e) => {
                      handleChange(e);
                      const selected = propertyTypes.find(p => p._id === e.target.value);
                      setSelectedType(selected?.propertyTypeName || '');
                    }}
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

              {/* DYNAMIC FIELDS BASED ON PROPERTY TYPE */}
              {selectedType && (
                <div className="space-y-6 pt-4 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-black">Property Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderFields()}
                  </div>
                </div>
              )}

              {/* ✅ IMAGE UPLOAD SECTION */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Property Images <span className="text-gray-500">(Maximum 5)</span>
                  </label>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-black transition-all">
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      multiple
                      onChange={handleImageChange}
                      disabled={selectedImages.length >= 5}
                      className="hidden"
                      id="file-upload"
                    />
                    <label 
                      htmlFor="file-upload" 
                      className={`cursor-pointer ${selectedImages.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="space-y-2">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-black">Click to upload</span> or drag and drop
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB each</p>
                      </div>
                    </label>
                  </div>

                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold text-black">{selectedImages.length}/5</span> images selected
                  </p>
                </div>

                {/* Image Previews */}
                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 transition-all group-hover:border-black"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg transform hover:scale-110"
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
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Save Property
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

const Input = ({ name, label, value, onChange, required, type = 'text' }: InputProps) => (
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

const Textarea = ({ name, label, value, onChange }: TextareaProps) => (
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