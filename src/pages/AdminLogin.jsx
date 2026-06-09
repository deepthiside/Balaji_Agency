import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Use the provided credentials
    if (username === 'Balaji_creatives_jyoti' && password === 'jyoti_balaji_creatives_1') {
      sessionStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen flex items-center justify-center font-body text-[#1C1917]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-2xl shadow-stone-200/50 max-w-md w-full mx-4"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-[#59425A] p-4 rounded-full text-white">
            <Lock className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-3xl font-heading italic text-center mb-2">Admin Access</h1>
        <p className="text-center text-sm text-[#1C1917]/60 mb-8">Please login to manage the blog.</p>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm text-center border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="username">Username</label>
            <input 
              id="username"
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#59425A] focus:ring-1 focus:ring-[#59425A] transition-all bg-stone-50"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#59425A] focus:ring-1 focus:ring-[#59425A] transition-all bg-stone-50"
              required 
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#59425A] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#400B11] transition-colors shadow-md"
          >
            Login to Dashboard
          </button>
        </form>
      </motion.div>
    </div>
  );
}
