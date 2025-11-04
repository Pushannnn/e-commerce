import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from './BlogData';

const Blog = () => {
    return (
        <div className="bg-white px-4 py-10">
            <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900">LATEST BLOGS</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-sm:gap-8 mt-12">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="overflow-hidden p-4 rounded-md hover:bg-purple-100 transition-all duration-300">
                            <img
                                src={blog.image}
                                alt={`Blog Post ${blog.id}`}
                                className="w-full h-64 object-cover rounded-md"
                            />
                            <div className="text-center">
                                <span className="text-sm block text-slate-600 mb-2 mt-4">{blog.date} | BY {blog.author}</span>
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">{blog.title}</h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed">{blog.description}</p>
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="inline-block px-4 py-2 text-slate-900 text-sm font-medium tracking-wider cursor-pointer outline-0 rounded-md bg-transparent border border-purple-600 mt-6"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
