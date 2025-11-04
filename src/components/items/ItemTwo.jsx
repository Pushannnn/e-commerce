import React from 'react'

const ItemTwo = () => {
    return (
        <div className="w-full mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* First Product Card */}
                <div className="group bg-white shadow-lg rounded-2xl relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-[500px]">
                    <img
                        src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
                        alt="Premium Laptop"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center justify-end h-full p-8 text-center">
                        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                            <h3 className="font-bold text-3xl text-white mb-2 tracking-wide">Premium Laptop</h3>
                            <p className="text-white/90 text-xl font-semibold mb-1">Rs. 1,500</p>
                            <p className="text-white/70 text-sm mb-6">High Performance Computing</p>
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Second Product Card */}
                <div className="group bg-white shadow-lg rounded-2xl relative overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-[500px]">
                    <img
                        src="https://www.techjuice.pk/wp-content/uploads/2025/09/iphone-17-pro-ad-reveals-apples-most-cinematic-camera-yet-techjuice-193862-135506.jpg"
                        alt="Modern Smartphone"
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center justify-end h-full p-8 text-center">
                        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                            <h3 className="font-bold text-3xl text-white mb-2 tracking-wide">Modern Smartphone</h3>
                            <p className="text-white/90 text-xl font-semibold mb-1">Rs. 1,800</p>
                            <p className="text-white/70 text-sm mb-6">Ultimate Work Experience</p>
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemTwo