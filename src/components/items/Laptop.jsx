import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { laptops } from '../../data/LaptopList.jsx';

const Laptop = ({ onAddToCart, handleAddToCart }) => {

  const LaptopCard = ({ id, brand, name, price, image }) => (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full group">
      <div className="border border-gray-200 rounded-xl p-4 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-500 group-hover:scale-105 group-hover:bg-blue-50 relative">

        <Link to={`/product/laptop/${id}`} className="block relative h-48 rounded overflow-hidden">
          <img
            alt={name}
            className="object-cover object-center w-full h-full block transition-transform duration-300 group-hover:scale-110"
            src={image}
          />
        </Link>

        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 transition-colors duration-300 group-hover:text-blue-600">
            {brand}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium transition-colors duration-300 group-hover:text-blue-800">
            <Link to={`/product/laptop/${id}`}>{name}</Link>
          </h2>
          <p className="mt-1 font-semibold text-lg transition-colors duration-300 group-hover:text-blue-600">
            ${price}
          </p>
        </div>

        <button onClick={() => {
          onAddToCart();
          handleAddToCart({ id, brand, name, price, image });
        }} className="absolute bottom-2 right-4 text-black p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-600">
          <FaCartArrowDown className="w-5 h-5 cursor-pointer" />
        </button>

      </div>
    </div>
  );

  return (
    <section className="text-gray-600 body-font mt-0 sm:mt-0">
      <div className="w-full">
        <div className="flex justify-between items-center px-4">
          <h2 className="text-3xl font-bold mb-6 mt-5">Laptop</h2>
          <Link to="/Viewallitemfirst" className="text-black hover:underline">View All</Link>
        </div>

        <div className="pt-0 pb-8 px-4 sm:px-4">
          <div className="flex flex-wrap -m-4">
            {laptops.map((item) => (
              <LaptopCard
                key={item.id}
                id={item.id}
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
