'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Lock, User, Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://propertybackend-1-xdbs.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Invalid credentials');
      }

      // Save token & redirect
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminUsername', data.admin.username);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans selection:bg-black selection:text-white">
      
      {/* CARD CONTAINER */}
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 animate-in fade-in zoom-in duration-300">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-2">Sign in to access your admin dashboard</p>
        </div>

        {/* ERROR ALERT */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
            <div className="p-1 bg-red-100 rounded-full">
              <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-red-600 font-medium mt-0.5">{error}</p>
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* USERNAME */}
          <div>
            <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
              Username
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-black/5 focus:border-black focus:bg-white transition-all outline-none placeholder:text-gray-400 font-medium"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-black/5 focus:border-black focus:bg-white transition-all outline-none placeholder:text-gray-400 font-medium"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Log in...</span>
              </>
            ) : (
              'Log in...'
            )}
          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Protected by secure encryption. <br /> Only authorized personnel allowed.
          </p>
        </div>

      </div>
    </div>
  );
}