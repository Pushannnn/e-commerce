import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarouselProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      description: "Premium sound quality with noise cancellation",
      rating: 4.5
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      description: "Track your fitness and stay connected",
      rating: 4.8
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      description: "Durable and spacious with USB charging port",
      rating: 4.6
    },
    {
      id: 4,
      name: "Portable Speaker",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      description: "360° sound with waterproof design",
      rating: 4.7
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
      description: "RGB lighting with precision sensor",
      rating: 4.4
    },
    {
      id: 6,
      name: "Wireless Keyboard",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
      description: "Mechanical switches with Bluetooth",
      rating: 4.6
    },
    {
      id: 7,
      name: "USB-C Hub",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
      description: "7-in-1 multiport adapter",
      rating: 4.3
    },
    {
      id: 8,
      name: "Phone Stand",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?w=400&h=400&fit=crop",
      description: "Adjustable aluminum desk stand",
      rating: 4.5
    },
    {
      id: 9,
      name: "Webcam HD",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?w=400&h=400&fit=crop",
      description: "1080p with auto-focus and mic",
      rating: 4.7
    },
    {
      id: 10,
      name: "Cable Organizer",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      description: "Keep your desk clutter-free",
      rating: 4.2
    },
    {
      id: 11,
      name: "Desk Lamp LED",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
      description: "Adjustable brightness and color",
      rating: 4.6
    },
    {
      id: 12,
      name: "Monitor Stand",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      description: "Ergonomic height adjustment",
      rating: 4.5
    }
  ];

  // Responsive products per view
  const getProductsPerView = () => {
    if (window.innerWidth >= 1280) return 4; // xl
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 640) return 2;  // sm
    return 1; // mobile
  };

  const [productsPerView, setProductsPerView] = useState(getProductsPerView());

  useEffect(() => {
    const handleResize = () => setProductsPerView(getProductsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(products.length / productsPerView) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === maxIndex ? 0 : prevIndex + 1
      );
    }, 3000); // change every 3 sec
    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => setCurrentIndex(prevIndex => prevIndex === maxIndex ? 0 : prevIndex + 1);
  const prevSlide = () => setCurrentIndex(prevIndex => prevIndex === 0 ? maxIndex : prevIndex - 1);
  const goToSlide = (index) => setCurrentIndex(index);
  // const handleProductClick = (product) => alert(`You clicked on ${product.name}!\nPrice: ${product.price}`);

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="w-full px-4">
        <div className="w-full px-5 py-0 h-15 flex justify-between items-center">
          <h2 className="text-3xl font-bold mb-6 mt-5">Flash Sales</h2>
          <Link to="/Viewallitemthird" className="text-black hover:underline">View All</Link>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / productsPerView)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`flex-shrink-0 px-2`}
                  style={{ width: `${100 / productsPerView}%` }}
                  onClick={() => handleProductClick(product)}
                >
                  <div className="bg-white rounded-xl p-4 cursor-pointer transform transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col">
                      <div className="w-full h-64 mb-4 relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg flex flex-col justify-end p-3">
                          <h2 className="text-lg font-bold text-white mb-1">{product.name}</h2>
                          <p className="text-white/90 text-xs mb-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="text-yellow-400">★</span>
                              <span className="ml-1 text-white font-semibold text-xs">{product.rating}</span>
                            </div>
                            <div className="text-xl font-bold text-white">{product.price}</div>
                          </div>
                        </div>
                      </div>

                      <button
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm cursor-pointer"
                      >
                        <ShoppingCart size={20} />
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselProduct;
