import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown  } from "react-icons/fa";


const Mobile = ({ onAddToCart }) => {
  // Mobile data array
  const mobiles = [
    {
      brand: 'SAMSUNG',
      name: 'Galaxy S23 Ultra',
      price: '1,199.00',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
    },
    {
      brand: 'APPLE',
      name: 'iPhone 15 Pro Max',
      price: '1,199.00',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80',
    },
    {
      brand: 'GOOGLE',
      name: 'Pixel 8 Pro',
      price: '999.00',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80',
    },
    {
      brand: 'ONEPLUS',
      name: 'OnePlus 11',
      price: '699.00',
      image: 'https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?w=500&q=80',
    },
    {
      brand: 'XIAOMI',
      name: 'Xiaomi 13 Pro',
      price: '899.00',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',
    },
    {
      brand: 'NOTHING',
      name: 'Nothing Phone 2',
      price: '599.00',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80',
    },
    {
      brand: 'OPPO',
      name: 'Oppo Find X5 Pro',
      price: '849.00',
      image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80',
    },
    {
      brand: 'VIVO',
      name: 'Vivo X90 Pro',
      price: '799.00',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80',
    },
  ];

  // Reusable card inside same file
 const MobileCard = ({ brand, name, price, image }) => (
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
          <h2 className="text-3xl font-bold mb-6 mt-5">Mobile</h2>
          <Link to="Viewallitemsecond" className="text-black hover:underline">View All</Link>
        </div>

        <div className="pt-0 pb-8 px-4 sm:px-4">
          <div className="flex flex-wrap -m-4">
            {mobiles.map((item, index) => (
              <MobileCard
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

export default Mobile;