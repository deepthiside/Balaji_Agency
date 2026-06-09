import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getBlogs, deleteBlog } from '../lib/blogStore';
import { Plus, Edit2, Trash2, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    } else {
      setBlogs(getBlogs());
    }
  }, [navigate]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const updated = deleteBlog(id);
      setBlogs(updated);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    navigate('/admin');
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-[#1C1917] font-body relative">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading italic font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-sm font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              View Site
            </Link>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-sm font-semibold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading italic">Manage Blog Posts</h2>
          <Link 
            to="/admin/new" 
            className="flex items-center gap-2 bg-[#59425A] hover:bg-[#400B11] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add New Post
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white border border-stone-200 rounded-3xl shadow-sm">
            <p className="text-xl text-stone-500 mb-4">No blog posts found.</p>
            <Link to="/admin/new" className="text-[#59425A] font-bold hover:underline">
              Create your first post
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <motion.div 
                key={blog.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-video w-full relative overflow-hidden bg-stone-100">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-[#E3DAC9] px-2 py-1 rounded text-xs font-bold">
                    {blog.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading italic text-xl mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-stone-500 text-sm mb-4">{blog.date}</p>
                  
                  <div className="mt-auto flex items-center gap-3 pt-4 border-t border-stone-100">
                    <Link 
                      to={`/admin/edit/${blog.id}`} 
                      className="flex-1 flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
