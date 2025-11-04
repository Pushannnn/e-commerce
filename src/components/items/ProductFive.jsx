import React from "react";

const ProductFive = () => {
  return (
    <>
      <div className="w-full px-5 py-0 h-15 flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-6 mt-5">Beautiful Products</h2>
        <a href="#" className="text-black hover:underline">View All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-4 p-4 sm:p-6 bg-gray-100 min-h-screen lg:min-h-0 lg:h-[500px]">
        {/* Product 1 - Large Card */}
        <div className="sm:col-span-2 lg:col-span-6 lg:row-span-6 bg-white shadow-md rounded-lg relative overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl h-64 sm:h-80 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
            alt="Product 1"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center bg-black/20">
            <h3 className="font-semibold text-xl sm:text-2xl text-white">Main Product</h3>
            <p className="text-white text-base sm:text-lg">Rs. 1500</p>
            <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-7 bg-white shadow-md rounded-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48 sm:h-56 lg:h-auto">
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2025/09/BG-IPHONE-2048px_IPHONE-17-PRO-MAX_BACK.jpg?auto=webp&quality=75&width=1024"
            alt="Product 2"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center bg-black/20">
            <h3 className="font-semibold text-base sm:text-lg text-white">Product 2</h3>
            <p className="text-white text-sm sm:text-base">Rs. 900</p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm sm:text-base">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-10 bg-white shadow-md rounded-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48 sm:h-56 lg:h-auto">
          <img
            src="https://images.samsung.com/kdp/goods/2025/07/01/55b6fc56-2ed9-4ebf-886b-5473cc4dd5e9.jpg"
            alt="Product 3"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center bg-black/20">
            <h3 className="font-semibold text-base sm:text-lg text-white">Product 3</h3>
            <p className="text-white text-sm sm:text-base">Rs. 1000</p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm sm:text-base">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-7 lg:row-start-4 bg-white shadow-md rounded-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48 sm:h-56 lg:h-auto">
          <img
            src="https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/g/i/gigabyte-a320m-s2h-01_1.jpg"
            alt="Product 4"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center bg-black/20">
            <h3 className="font-semibold text-base sm:text-lg text-white">Product 4</h3>
            <p className="text-white text-sm sm:text-base">Rs. 950</p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm sm:text-base">
              Buy Now
            </button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="lg:col-span-3 lg:row-span-3 lg:col-start-10 lg:row-start-4 bg-white shadow-md rounded-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-48 sm:h-56 lg:h-auto">
          <img
            src="https://images.indianexpress.com/2022/11/gaming-pc-build.jpg"
            alt="Product 5"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center bg-black/20">
            <h3 className="font-semibold text-base sm:text-lg text-white">Product 5</h3>
            <p className="text-white text-sm sm:text-base">Rs. 850</p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-sm sm:text-base">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFive;