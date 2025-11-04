import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown  } from "react-icons/fa";


const Laptop = ({onAddToCart}) => {
  // Array of laptops
  const laptops = [
    {
      brand: 'DELL',
      name: 'Dell XPS 13',
      price: '999.00',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80',
    },
    {
      brand: 'APPLE',
      name: 'MacBook Pro 14"',
      price: '1999.00',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    },
    {
      brand: 'HP',
      name: 'HP Pavilion 15',
      price: '749.00',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    },
    {
      brand: 'LENOVO',
      name: 'ThinkPad X1 Carbon',
      price: '1299.00',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    },
    {
      brand: 'ASUS',
      name: 'ROG Zephyrus G14',
      price: '1449.00',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    },
    {
      brand: 'MICROSOFT',
      name: 'Surface Laptop 5',
      price: '1299.00',
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500&q=80',
    },
    {
      brand: 'ACER',
      name: 'Acer Swift 3',
      price: '649.00',
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80',
    },
    {
      brand: 'RAZER',
      name: 'Razer Blade 15',
      price: '1799.00',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    },
  ];

  // Reusable card component (inside same file)

  const LaptopCard = ({ brand, name, price, image }) => (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
      <div className="border border-gray-200 rounded-xl p-4 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-500 group-hover:scale-105 group-hover:bg-blue-50 relative">

        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt={name}
            className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
            src={image}
          />
        </a>

        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 transition-colors duration-300 group-hover:text-blue-600">
            {brand}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium transition-colors duration-300 group-hover:text-blue-800">
            {name}
          </h2>
          <p className="mt-1 font-semibold text-lg transition-colors duration-300 group-hover:text-blue-600">
            ${price}
          </p>
        </div>

        {/* Cart Button */}

        <button onClick={onAddToCart} className="absolute bottom-2 right-4  text-black p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-600">
          <FaCartArrowDown  className="w-5 h-5 cursor-pointer" />
        </button>

      </div>
    </div>
  );


  return (
    <section className="text-gray-600 body-font mt-0 sm:mt-0">
      <div className="w-full">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-6 mt-5">Laptop</h2>
          <Link to="Viewallitemfirst" className="text-black hover:underline">View All</Link>
        </div>

        <div className="pt-0 pb-8 px-4 sm:px-4">
          <div className="flex flex-wrap -m-4">
            {laptops.map((item, index) => (
              <LaptopCard
                key={index}
                brand={item.brand}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Laptop;