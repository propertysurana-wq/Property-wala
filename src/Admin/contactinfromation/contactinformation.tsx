// 'use client';

// import { useState, useEffect } from 'react';
// import { Plus, Trash2, Save, AlertCircle } from 'lucide-react';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';

// // TypeScript Interfaces
// interface MapLocation {
//   embedUrl: string;
//   latitude: number | null;
//   longitude: number | null;
// }

// interface ContactFormData {
//   officeTimings: string;
//   phoneNumbers: string[];
//   whatsappNumber: string;
//   email: string;
//   officeAddress: string;
//   mapLocation: MapLocation;
// }

// interface ContactInformation extends ContactFormData {
//   _id: string;
//   isActive: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// interface ApiResponse<T = any> {
//   success: boolean;
//   data?: T;
//   message?: string;
// }

// interface MessageState {
//   type: 'success' | 'error' | '';
//   text: string;
// }

// export default function ContactAdminForm() {
//   // ✅ Sidebar state
//   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
//   const [formData, setFormData] = useState<ContactFormData>({
//     officeTimings: '9:00 AM - 6:00 PM',
//     phoneNumbers: [''],
//     whatsappNumber: '',
//     email: '',
//     officeAddress: '',
//     mapLocation: {
//       embedUrl: '',
//       latitude: null,
//       longitude: null
//     }
//   });

//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<MessageState>({ type: '', text: '' });
//   const [editMode, setEditMode] = useState<boolean>(false);
//   const [contactId, setContactId] = useState<string | null>(null);

//   useEffect(() => {
//     fetchExistingContact();
//   }, []);

//   const fetchExistingContact = async (): Promise<void> => {
//     try {
//       const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contact');
//       const data: ApiResponse<ContactInformation> = await response.json();
      
//       if (data.success && data.data) {
//         setFormData({
//           officeTimings: data.data.officeTimings,
//           phoneNumbers: data.data.phoneNumbers,
//           whatsappNumber: data.data.whatsappNumber,
//           email: data.data.email,
//           officeAddress: data.data.officeAddress,
//           mapLocation: data.data.mapLocation || { embedUrl: '', latitude: null, longitude: null }
//         });
//         setContactId(data.data._id);
//         setEditMode(true);
//       }
//     } catch (err) {
//       console.log('No existing contact information found');
//     }
//   };

//   // ✅ Function to validate and allow only numbers
//   const validateNumberInput = (value: string): string => {
//     // Remove all non-numeric characters except + at the start
//     const cleaned = value.replace(/[^\d+]/g, '');
//     // Allow + only at the beginning
//     if (cleaned.startsWith('+')) {
//       return '+' + cleaned.slice(1).replace(/[^\d]/g, '');
//     }
//     return cleaned.replace(/[^\d]/g, '');
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // ✅ Updated phone number change handler with validation
//   const handlePhoneNumberChange = (index: number, value: string): void => {
//     const validatedValue = validateNumberInput(value);
//     const newPhoneNumbers = [...formData.phoneNumbers];
//     newPhoneNumbers[index] = validatedValue;
//     setFormData(prev => ({
//       ...prev,
//       phoneNumbers: newPhoneNumbers
//     }));
//   };

//   // ✅ Updated WhatsApp number change handler with validation
//   const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const validatedValue = validateNumberInput(e.target.value);
//     setFormData(prev => ({
//       ...prev,
//       whatsappNumber: validatedValue
//     }));
//   };

//   const addPhoneNumber = (): void => {
//     setFormData(prev => ({
//       ...prev,
//       phoneNumbers: [...prev.phoneNumbers, '']
//     }));
//   };

//   const removePhoneNumber = (index: number): void => {
//     if (formData.phoneNumbers.length > 1) {
//       const newPhoneNumbers = formData.phoneNumbers.filter((_, i) => i !== index);
//       setFormData(prev => ({
//         ...prev,
//         phoneNumbers: newPhoneNumbers
//       }));
//     }
//   };

//   const handleMapLocationChange = (field: keyof MapLocation, value: string | number | null): void => {
//     setFormData(prev => ({
//       ...prev,
//       mapLocation: {
//         ...prev.mapLocation,
//         [field]: value
//       }
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ type: '', text: '' });

//     // Validation
//     const filledPhoneNumbers = formData.phoneNumbers.filter(num => num.trim() !== '');
//     if (filledPhoneNumbers.length === 0) {
//       setMessage({ type: 'error', text: 'Please add at least one phone number' });
//       setLoading(false);
//       return;
//     }

//     // ✅ Validate phone numbers contain only digits (and optional + at start)
//     const phoneRegex = /^\+?\d+$/;
//     for (const phone of filledPhoneNumbers) {
//       if (!phoneRegex.test(phone)) {
//         setMessage({ type: 'error', text: 'Phone numbers must contain only digits' });
//         setLoading(false);
//         return;
//       }
//     }

//     // ✅ Validate WhatsApp number
//     if (!phoneRegex.test(formData.whatsappNumber)) {
//       setMessage({ type: 'error', text: 'WhatsApp number must contain only digits' });
//       setLoading(false);
//       return;
//     }

//     try {
//       const url = editMode 
//         ? `https://propertybackend-1-xdbs.onrender.com/api/contact/${contactId}`
//         : 'https://propertybackend-1-xdbs.onrender.com/api/contact';
      
//       const method = editMode ? 'PUT' : 'POST';

//       const dataToSend: ContactFormData = {
//         ...formData,
//         phoneNumbers: filledPhoneNumbers
//       };

//       const response = await fetch(url, {
//         method: method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       const data: ApiResponse<ContactInformation> = await response.json();

//       if (data.success && data.data) {
//         setMessage({ 
//           type: 'success', 
//           text: editMode ? 'Contact information updated successfully!' : 'Contact information created successfully!' 
//         });
        
//         if (!editMode) {
//           setContactId(data.data._id);
//           setEditMode(true);
//         }
//       } else {
//         setMessage({ type: 'error', text: data.message || 'Something went wrong' });
//       }
//     } catch (err) {
//       setMessage({ type: 'error', text: 'Failed to save contact information' });
//       console.error('Error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
//       {/* SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* NAVBAR */}
//         <Navbar setSidebarOpen={setSidebarOpen} />

//         {/* CONTENT AREA */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-6 lg:p-8">
//           <div className="max-w-3xl mx-auto">
//             <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//                 {editMode ? 'Edit Contact Information' : 'Add Contact Information'}
//               </h1>

//               {/* Message */}
//               {message.text && (
//                 <div className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
//                   message.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
//                 }`}>
//                   <AlertCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
//                     message.type === 'success' ? 'text-green-600' : 'text-red-600'
//                   }`} />
//                   <p className={message.type === 'success' ? 'text-green-700' : 'text-red-700'}>
//                     {message.text}
//                   </p>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Office Timings */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Office Timings *
//                   </label>
//                   <input
//                     type="text"
//                     name="officeTimings"
//                     value={formData.officeTimings}
//                     onChange={handleInputChange}
//                     placeholder="e.g., 9:00 AM - 6:00 PM"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 {/* Phone Numbers */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Numbers * (minimum 1, maximum 2)
//                   </label>
//                   <div className="space-y-3">
//                     {formData.phoneNumbers.map((phone, index) => (
//                       <div key={index} className="flex space-x-2">
//                         <input
//                           type="text"
//                           value={phone}
//                           onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
//                           placeholder="+911234567890 or 1234567890"
//                           className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           pattern="^\+?\d+$"
//                           title="Only numbers are allowed (+ allowed at start)"
//                         />
//                         {formData.phoneNumbers.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => removePhoneNumber(index)}
//                             className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
//                           >
//                             <Trash2 className="w-5 h-5" />
//                           </button>
//                         )}
//                       </div>
//                     ))}
//                     {formData.phoneNumbers.length < 2 && (
//                       <button
//                         type="button"
//                         onClick={addPhoneNumber}
//                         className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
//                       >
//                         <Plus className="w-5 h-5" />
//                         <span>Add Phone Number</span>
//                       </button>
//                     )}
//                   </div>
//                   <p className="mt-1 text-xs text-gray-500">
//                     ✅ Only numbers allowed (+ symbol can be added at the start)
//                   </p>
//                 </div>

//                 {/* WhatsApp Number */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     WhatsApp Number *
//                   </label>
//                   <input
//                     type="text"
//                     name="whatsappNumber"
//                     value={formData.whatsappNumber}
//                     onChange={handleWhatsAppChange}
//                     placeholder="+911234567890 or 1234567890"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     pattern="^\+?\d+$"
//                     title="Only numbers are allowed (+ allowed at start)"
//                     required
//                   />
//                   <p className="mt-1 text-xs text-gray-500">
//                     ✅ Only numbers allowed (+ symbol can be added at the start)
//                   </p>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="info@example.com"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 {/* Office Address */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Office Address *
//                   </label>
//                   <textarea
//                     name="officeAddress"
//                     value={formData.officeAddress}
//                     onChange={handleInputChange}
//                     placeholder="Enter complete office address"
//                     rows={3}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 {/* Map Location */}
//                 <div className="border-t pt-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Location (Optional)</h3>
                  
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Google Maps Embed URL
//                       </label>
//                       <input
//                         type="url"
//                         value={formData.mapLocation.embedUrl}
//                         onChange={(e) => handleMapLocationChange('embedUrl', e.target.value)}
//                         placeholder="https://www.google.com/maps/embed?pb=..."
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                       <p className="mt-1 text-xs text-gray-500">
//                         Get embed URL from Google Maps → Share → Embed a map
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Latitude
//                         </label>
//                         <input
//                           type="number"
//                           step="any"
//                           value={formData.mapLocation.latitude || ''}
//                           onChange={(e) => handleMapLocationChange('latitude', parseFloat(e.target.value) || null)}
//                           placeholder="28.6139"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Longitude
//                         </label>
//                         <input
//                           type="number"
//                           step="any"
//                           value={formData.mapLocation.longitude || ''}
//                           onChange={(e) => handleMapLocationChange('longitude', parseFloat(e.target.value) || null)}
//                           placeholder="77.2090"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-end pt-6">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors font-medium"
//                   >
//                     <Save className="w-5 h-5" />
//                     <span>{loading ? 'Saving...' : (editMode ? 'Update Information' : 'Save Information')}</span>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Save, AlertCircle, MapPin, Phone, MessageCircle, Mail, Map, Clock, Edit2 } from 'lucide-react';
import Navbar from '@/Admin/Navbar/Navbar';
import Sidebar from '@/Admin/Sidebar/Sidebar';

/* ================= TYPES ================= */
interface MapLocation {
  embedUrl: string;
  latitude: number | null;
  longitude: number | null;
}

interface ContactFormData {
  officeTimings: string;
  phoneNumbers: string[];
  whatsappNumber: string;
  email: string;
  officeAddress: string;
  mapLocation: MapLocation;
}

interface ContactInformation extends ContactFormData {
  _id: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

interface MessageState {
  type: 'success' | 'error' | '';
  text: string;
}

/* ================= COMPONENT ================= */
export default function ContactAdminForm() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [formData, setFormData] = useState<ContactFormData>({
    officeTimings: '9:00 AM - 6:00 PM',
    phoneNumbers: [''],
    whatsappNumber: '',
    email: '',
    officeAddress: '',
    mapLocation: {
      embedUrl: '',
      latitude: null,
      longitude: null
    }
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<MessageState>({ type: '', text: '' });
  const [editMode, setEditMode] = useState(false);
  const [contactId, setContactId] = useState<string | null>(null);

  useEffect(() => {
    fetchExistingContact();
  }, []);

  const fetchExistingContact = async () => {
    try {
      const response = await fetch('https://propertybackend-1-xdbs.onrender.com/api/contact');
      const data: ApiResponse<ContactInformation> = await response.json();
      
      if (data.success && data.data) {
        setFormData({
          officeTimings: data.data.officeTimings,
          phoneNumbers: data.data.phoneNumbers,
          whatsappNumber: data.data.whatsappNumber,
          email: data.data.email,
          officeAddress: data.data.officeAddress,
          mapLocation: data.data.mapLocation || { embedUrl: '', latitude: null, longitude: null }
        });
        setContactId(data.data._id);
        setEditMode(true);
      }
    } catch (err) {
      console.log('No existing contact information found');
    }
  };

  const validateNumberInput = (value: string) => {
    const cleaned = value.replace(/[^\d+]/g, '');
    if (cleaned.startsWith('+')) return '+' + cleaned.slice(1).replace(/[^\d]/g, '');
    return cleaned.replace(/[^\d]/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneNumberChange = (index: number, value: string) => {
    const validatedValue = validateNumberInput(value);
    const newPhoneNumbers = [...formData.phoneNumbers];
    newPhoneNumbers[index] = validatedValue;
    setFormData(prev => ({ ...prev, phoneNumbers: newPhoneNumbers }));
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, whatsappNumber: validateNumberInput(e.target.value) }));
  };

  const addPhoneNumber = () => {
    setFormData(prev => ({ ...prev, phoneNumbers: [...prev.phoneNumbers, ''] }));
  };

  const removePhoneNumber = (index: number) => {
    if (formData.phoneNumbers.length > 1) {
      setFormData(prev => ({
        ...prev,
        phoneNumbers: prev.phoneNumbers.filter((_, i) => i !== index)
      }));
    }
  };

  const handleMapLocationChange = (field: keyof MapLocation, value: string | number | null) => {
    setFormData(prev => ({
      ...prev,
      mapLocation: { ...prev.mapLocation, [field]: value }
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const filledPhoneNumbers = formData.phoneNumbers.filter(num => num.trim() !== '');
    if (filledPhoneNumbers.length === 0) {
      setMessage({ type: 'error', text: 'Please add at least one phone number' });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?\d+$/;
    for (const phone of filledPhoneNumbers) {
      if (!phoneRegex.test(phone)) {
        setMessage({ type: 'error', text: 'Phone numbers must contain only digits' });
        setLoading(false);
        return;
      }
    }

    if (!phoneRegex.test(formData.whatsappNumber)) {
      setMessage({ type: 'error', text: 'WhatsApp number must contain only digits' });
      setLoading(false);
      return;
    }

    try {
      const url = editMode 
        ? `https://propertybackend-1-xdbs.onrender.com/api/contact/${contactId}`
        : 'https://propertybackend-1-xdbs.onrender.com/api/contact';
      
      const method = editMode ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phoneNumbers: filledPhoneNumbers }),
      });

      const data: ApiResponse<ContactInformation> = await response.json();

      if (data.success && data.data) {
        setMessage({ 
          type: 'success', 
          text: editMode ? 'Contact info updated!' : 'Contact info created!' 
        });
        if (!editMode) {
          setContactId(data.data._id);
          setEditMode(true);
        }
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to save information' });
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 selection:bg-black selection:text-white">
      
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden border-l border-gray-200 relative">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            
            {/* HEADER */}
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Contact Information
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Manage your office address, phone numbers, and location details.
                </p>
              </div>
              <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 shadow-sm flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${editMode ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                {editMode ? 'Edit Mode' : 'Create Mode'}
              </div>
            </div>

            {/* ALERT MESSAGE */}
            {message.text && (
              <div className={`mb-8 p-4 rounded-lg flex items-center gap-3 border shadow-sm ${
                message.type === 'success' 
                  ? 'bg-green-50 border-green-200 text-green-700' 
                  : 'bg-red-50 border-red-200 text-red-700'
              }`}>
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium text-sm">{message.text}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* SECTION 1: BASIC CONTACT */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
                  <div className="p-2 bg-gray-100 rounded-lg"><Phone size={18} className="text-gray-600"/></div>
                  General Contact
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Office Timings */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Office Timings *</label>
                    <div className="relative group">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                      <input
                        type="text"
                        name="officeTimings"
                        value={formData.officeTimings}
                        onChange={handleInputChange}
                        placeholder="e.g. 9:00 AM - 6:00 PM"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="info@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="md:col-span-2 space-y-3">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Numbers * (Max 2)</label>
                    {formData.phoneNumbers.map((phone, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="relative flex-1 group">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                          />
                        </div>
                        {formData.phoneNumbers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removePhoneNumber(index)}
                            className="p-3 bg-white border border-gray-200 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-xl transition-colors shadow-sm"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                    ))}
                    {formData.phoneNumbers.length < 2 && (
                      <button
                        type="button"
                        onClick={addPhoneNumber}
                        className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors px-1"
                      >
                        <Plus size={16} /> Add Another Number
                      </button>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">WhatsApp Number *</label>
                    <div className="relative group">
                      <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                      <input
                        type="text"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleWhatsAppChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: LOCATION */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
                  <div className="p-2 bg-gray-100 rounded-lg"><MapPin size={18} className="text-gray-600"/></div>
                  Location Details
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Office Address *</label>
                    <textarea
                      name="officeAddress"
                      value={formData.officeAddress}
                      onChange={handleInputChange}
                      placeholder="Enter full office address..."
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium resize-none"
                      required
                    />
                  </div>

                  {/* Map URL */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Google Maps Embed URL</label>
                    <div className="relative group">
                      <Map className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
                      <input
                        type="url"
                        value={formData.mapLocation.embedUrl}
                        onChange={(e) => handleMapLocationChange('embedUrl', e.target.value)}
                        placeholder="https://www.google.com/maps/embed?pb=..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2 ml-1">
                      ℹ️ Paste the embed code URL from Google Maps (Share {'>'} Embed a map).
                    </p>
                  </div>

                  {/* Coordinates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Latitude</label>
                      <input
                        type="number"
                        step="any"
                        value={formData.mapLocation.latitude || ''}
                        onChange={(e) => handleMapLocationChange('latitude', parseFloat(e.target.value) || null)}
                        placeholder="28.6139"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Longitude</label>
                      <input
                        type="number"
                        step="any"
                        value={formData.mapLocation.longitude || ''}
                        onChange={(e) => handleMapLocationChange('longitude', parseFloat(e.target.value) || null)}
                        placeholder="77.2090"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Save size={20} />
                  {loading ? 'Saving...' : (editMode ? 'Update Information' : 'Save Information')}
                </button>
              </div>

            </form>
          </div>
        </main>
      </div>
    </div>
  );
}