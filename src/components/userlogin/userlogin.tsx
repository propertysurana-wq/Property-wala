// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// export default function Login() {
//   const router = useRouter();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('https://propertybackend-1-xdbs.onrender.com/api/user/login', {
//         username,
//         password
//       });

//       localStorage.setItem('token', res.data.token);
//       alert('Login Successful');
//       router.push('/About');

//     } catch (err: any) {
//       alert(err.response?.data?.message || 'Login Failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input placeholder="Username" value={username}
//           onChange={(e) => setUsername(e.target.value)} /><br />

//         <input type="password" placeholder="Password" value={password}
//           onChange={(e) => setPassword(e.target.value)} /><br />

//         <button>Login</button>
//       </form>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { User, Lock, Loader2, LogIn, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('https://propertybackend-1-xdbs.onrender.com/api/user/login', {
        username,
        password
      });

      localStorage.setItem('token', res.data.token);
      router.push('/'); // Redirect to Home or About
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans p-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 z-0"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>

      {/* Card Container */}
      <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative z-10 animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border-b-4 border-green-500">
            <ShieldCheck className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">Log in to manage your property</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 animate-pulse">
            <span>⚠️</span> {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Username */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1">Username</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-xl text-gray-900 text-sm font-semibold focus:bg-white focus:border-green-500 focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1.5 ml-1">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs font-bold text-green-600 hover:underline">Forgot?</a>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-xl text-gray-900 text-sm font-semibold focus:bg-white focus:border-green-500 focus:ring-0 outline-none transition-all placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 border-b-4 border-green-600 active:border-b-0 active:translate-y-1"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Logging in...
              </>
            ) : (
              <>
                Log In <LogIn size={20} />
              </>
            )}
          </button>

        </form>

        {/* Footer */}
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-gray-500 text-sm font-medium">
            Don't have an account?{' '}
            <Link href="/userlogin" className="text-green-600 font-extrabold hover:text-black transition-colors ml-1">
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
