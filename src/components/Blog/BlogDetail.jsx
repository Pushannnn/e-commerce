import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from './BlogData';

const BlogDetail = () => {
    const { id } = useParams();
    const blogPost = blogs.find((b) => b.id === parseInt(id));

    // Scroll to top when component mounts or ID changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blogPost) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold">Blog not found</h2>
                <Link to="/blog" className="ml-4 text-blue-600 underline">Back to Blogs</Link>
            </div>
        );
    }

    // Get other blogs for recommendations (exclude current blog)
    const otherBlogs = blogs.filter((b) => b.id !== parseInt(id)).slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 pt-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                    ← Back to Blogs
                </Link>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={blogPost.image} alt={blogPost.title} className="w-full h-96 object-cover" />

                    <div className="p-8 md:p-12">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                            Blog
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {blogPost.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">By</span>
                                <span>{blogPost.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span>{blogPost.date}</span>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            {blogPost.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>

                        {/* Share Buttons */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${window.location.href}`, '_blank')}
                                    className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                                >
                                    Share on Twitter
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Share on Facebook
                                </button>
                                <button
                                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(blogPost.title + ' ' + window.location.href)}`, '_blank')}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    Share on WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Blogs Section */}
                {otherBlogs.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Blogs You May Like</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherBlogs.map((blog) => (
                                <Link
                                    key={blog.id}
                                    to={`/blog/${blog.id}`}
                                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="p-5">
                                        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                                            {blog.excerpt || blog.content.substring(0, 100) + '...'}
                                        </p>
                                        <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:underline">
                                            Read More →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </div>
    );
};

export default BlogDetail;