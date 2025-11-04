import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <div className="bg-gray-50 h-auto">
            <div className="min-h-screen -mt-10 flex flex-col items-center justify-center py-3 px-4">
                <div className="max-w-[480px] w-full">

                    <div className="p-6  sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                        <h1 className="text-slate-900 text-center text-3xl font-semibold">Enter your New password</h1>

                        <form className="mt-12 space-y-6">
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Enter Your Email</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                        placeholder="Enter user name"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">New Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                </div>
                            </div>
                            <div className="mt-12">
                                <button
                                    type="button"
                                    className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                                >
                                    Sign in
                                </button>
                            </div>

                            <p className="text-slate-900 text-sm mt-6 text-center">
                                Don't have an account?
                                <Link to="/register" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
