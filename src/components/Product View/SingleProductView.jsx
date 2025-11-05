import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { laptops } from '../../data/LaptopList';
import { mobiles } from '../../data/MobileList';
import { FaCartArrowDown } from "react-icons/fa";

const SingleProductView = ({ onAddToCart, handleAddToCart }) => {
    const { type, id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const productList = type === "laptop" ? laptops : type === "mobile" ? mobiles : [];
    const product = productList.find((p) => p.id === parseInt(id));

    if (!product) 
        return <p className="p-4 text-red-500 text-center text-lg font-semibold">Product not found</p>;

    // Set main image on first render
    useEffect(() => {
        setSelectedImage(product.image);
    }, [product]);

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="lg:max-w-6xl max-w-xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">

                    {/* Images Column */}
                    <div className="w-full lg:sticky top-0">
                        <div className="flex flex-col gap-4">
                            <div className="bg-white shadow-sm p-2">
                                <img 
                                    src={selectedImage || product.image} 
                                    alt={product.name} 
                                    className="w-full aspect-[11/8] object-cover object-top" 
                                />
                            </div>
                            
                        </div>
                    </div>

                    {/* Details Column */}
                    <div className="w-full">
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{product.name}</h3>
                        <div className="flex items-center gap-3 mt-2">
                            <p className="text-base text-slate-500">4</p>
                            <svg className="w-3.5 h-3.5 fill-purple-600" viewBox="0 0 14 13">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <span className="text-slate-500">|</span>
                            <p className="text-sm text-slate-500">{productList.length} Ratings</p>
                            <span className="text-slate-500">|</span>
                            <p className="text-sm text-slate-500">{productList.length} Reviews</p>
                        </div>

                        <p className="text-slate-500 mt-4 text-sm">{product.brand} - Premium quality product with top features.</p>

                        <div className="flex items-center flex-wrap gap-2 mt-6">
                            <p className="text-slate-500 text-base"><strike>${Math.floor(product.price * 1.1)}</strike></p>
                            <h4 className="text-purple-800 text-2xl sm:text-3xl font-semibold">${product.price}</h4>
                            <div className="flex py-1 px-2 bg-purple-600 font-semibold ml-4">
                                <span className="text-white text-sm">save 10%</span>
                            </div>
                        </div>

                        <hr className="my-6 border-gray-300" />

                        {/* Quantity & Cart Buttons */}
                        <div className="flex gap-4 items-center border border-gray-300 bg-white px-4 py-2.5 w-max mb-4">
                            <button className="border-0 outline-0 cursor-pointer">-</button>
                            <span className="text-slate-900 text-sm font-semibold px-6 block">1</span>
                            <button className="border-0 outline-0 cursor-pointer">+</button>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-4">
                            <button 
                                onClick={() => { onAddToCart(); handleAddToCart(product); }}
                                className="px-4 py-3 w-[45%] cursor-pointer border border-gray-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium flex items-center justify-center gap-2"
                            >
                                <FaCartArrowDown /> Add to cart
                            </button>
                            <button 
                                className="px-4 py-3 w-[45%] cursor-pointer border border-purple-600 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium"
                            >
                                Buy it now
                            </button>
                        </div>

                        <hr className="my-6 border-gray-300" />

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veritatis architecto distinctio maiores molestiae optio ipsam provident accusantium assumenda. Quasi, sapiente itaque, blanditiis, non distinctio sed enim inventore laudantium libero beatae temporibus? Repellendus quaerat quam saepe rerum quibusdam perspiciatis veniam animi inventore ut quidem quis, vitae laboriosam labore soluta ab?</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleProductView;
