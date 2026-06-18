import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getBlogById, saveBlog } from '../lib/blogStore';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AdminEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id;
  const [isAuth, setIsAuth] = useState(() => sessionStorage.getItem('isAdminLoggedIn') === 'true');
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    image: '',
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    category: '',
    content: ''
  });

  useEffect(() => {
    if (!isAuth) {
      navigate('/admin');
      return;
    }

    if (!isNew) {
      const fetchBlog = async () => {
        try {
          const blog = await getBlogById(id);
          if (blog) {
            setFormData(blog);
          } else {
            navigate('/admin/dashboard');
          }
        } catch (e) {
          console.error("Error loading blog for edit:", e);
          navigate('/admin/dashboard');
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [id, isNew, isAuth, navigate]);

  if (!isAuth) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (value) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const toSave = { ...formData };
    if (!isNew) {
      toSave.id = id;
    }
    try {
      await saveBlog(toSave);
      navigate('/admin/dashboard');
    } catch (e) {
      console.error("Error saving blog:", e);
      setSaving(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-[#1C1917] font-body relative pb-20">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/admin/dashboard" 
              className="p-2 hover:bg-stone-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-heading italic font-bold">
              {isNew ? 'Create New Post' : 'Edit Post'}
            </h1>
          </div>
          <button 
            type="submit"
            form="blog-form"
            disabled={saving}
            className="flex items-center gap-2 bg-[#59425A] hover:bg-[#400B11] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Save className="w-4 h-4" />
            )}
            <span>{saving ? 'Saving...' : 'Save Post'}</span>
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-stone-200 rounded-[2rem] shadow-sm">
            <div className="w-12 h-12 border-4 border-[#59425A] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-stone-500 font-semibold font-body">Loading post data...</p>
          </div>
        ) : (
          <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Post Title</label>
              <input 
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#59425A] focus:ring-1 focus:ring-[#59425A] transition-all bg-stone-50 text-xl font-heading italic"
                placeholder="Enter post title"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Category</label>
                <input 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#59425A] focus:ring-1 focus:ring-[#59425A] transition-all bg-stone-50"
                  placeholder="e.g. Digital Advertising"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Date</label>
                <input 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#59425A] focus:ring-1 focus:ring-[#59425A] transition-all bg-stone-50"
                  placeholder="e.g. April 22, 2026"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Image</label>
              <div className="flex flex-col gap-4">
                <input 
                  name="image"
                  value={formData.image && formData.image.startsWith('data:') ? '' : (formData.image || '')}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#59425A] focus:ring-1 focus:ring-[#59425A] transition-all bg-stone-50"
                  placeholder="Paste an image URL..."
                />
                <div className="flex items-center gap-4">
                  <div className="text-sm text-stone-500 font-semibold">OR</div>
                  <label className="flex items-center gap-2 cursor-pointer bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-lg font-semibold transition-colors border border-stone-200">
                    <Upload className="w-4 h-4" />
                    <span>Upload from Device</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="hidden" 
                    />
                  </label>
                </div>
              </div>
              {formData.image && (
                <div className="mt-4 aspect-video w-full max-w-sm rounded-xl overflow-hidden border border-stone-200">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Excerpt (Summary)</label>
              <textarea 
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-[#59425A] focus:ring-1 focus:ring-[#59425A] transition-all bg-stone-50 resize-none"
                placeholder="A short summary of the post..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Content</label>
              <div className="bg-white rounded-xl overflow-hidden border border-stone-200">
                <ReactQuill 
                  theme="snow" 
                  value={formData.content} 
                  onChange={handleContentChange} 
                  modules={modules}
                  className="h-64 mb-12"
                />
              </div>
            </div>
          </div>
          </form>
        )}
      </main>
    </div>
  );
}
