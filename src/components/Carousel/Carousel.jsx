import React, { useState, useEffect } from "react";

const products = [
    {
        id: 1,
        name: "Premium Laptop",
        price: "$1,299",
        originalPrice: "$1,856",
        discount: "-30%",
        image: "https://www.neodo-inc.com/wp-content/uploads/2024/07/Computer-Gear-Banner.jpg",
        rating: 4.8,
        reviews: 324,
        color: "from-purple-600 to-blue-600",
        gradient: "from-purple-50 via-blue-50 to-indigo-50"
    },
    {
        id: 2,
        name: "Latest Smartphone",
        price: "$899",
        originalPrice: "$1,199",
        discount: "-25%",
        image: "https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-My-top-picks-tried-and-tested.jpg",
        rating: 4.9,
        reviews: 521,
        color: "from-pink-600 to-rose-600",
        gradient: "from-pink-50 via-rose-50 to-red-50"
    },
    {
        id: 3,
        name: "Gaming PC",
        price: "$1,899",
        originalPrice: "$3,165",
        discount: "-40%",
        image: "https://www.neodo-inc.com/wp-content/uploads/2024/07/Computer-Gear-Banner.jpg",
        rating: 4.7,
        reviews: 189,
        color: "from-emerald-600 to-teal-600",
        gradient: "from-emerald-50 via-teal-50 to-cyan-50"
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const currentProduct = products[currentIndex];

    return (
        <div className={`relative bg-gradient-to-br ${currentProduct.gradient} transition-all duration-1000`}>
            <div className="">


                {/* Carousel */}
                <div className="relative group">
                    {products.map((product, index) => (
                        <div key={product.id} className={`transition-all duration-700 ${index === currentIndex ? "opacity-100 relative" : "opacity-0 absolute top-0 left-0 w-full pointer-events-none"}`}>
                            <div className="bg-white shadow-xl overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-screen h-[400px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100"
                    >
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all z-20 opacity-0 group-hover:opacity-100"
                    >
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center items-center gap-2 mt-4">
                    {products.map((product, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-500 rounded-full ${index === currentIndex ? `bg-gradient-to-r ${product.color} w-8 h-2` : "bg-gray-300 w-2 h-2 hover:bg-gray-400"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;