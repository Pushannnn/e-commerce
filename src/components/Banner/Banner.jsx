import React from 'react'

const Banner = () => {
    return (
        <>
            <section className="w-full rounded-2xl  bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-10 md:py-12">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-white flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold mb-3">
                                Discover Amazing Deals
                            </h1>
                            <p className="text-lg md:text-xl text-indigo-100 mb-6 max-w-md">
                                Shop the latest products with exclusive discounts up to 50% off. Free shipping on all orders!
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="#" className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                                    Shop Now
                                </a>
                                <a href="#" className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300">
                                    View Offers
                                </a>
                            </div>
                        </div>

                        <div className="hidden md:block flex-1 text-center">
                            <div className="inline-block bg-white/20 backdrop-blur-md rounded-2xl p-8">
                                <div className="text-white space-y-4">
                                    <div className="text-5xl font-bold">🛍️</div>
                                    <div>
                                        <p className="text-2xl font-bold">Up to 50% OFF</p>
                                        <p className="text-sm text-indigo-100">On selected items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
