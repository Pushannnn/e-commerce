import React, { useEffect } from 'react';


const Viewallitemfirst = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Skin Glow Combo",
      image: "https://readymadeui.com/images/sunscreen-img-1.webp",
      originalPrice: "$11.00",
      salePrice: "$8.00",
      rating: 4.5,
      reviews: 50
    },
    {
      id: 2,
      name: "Crystal Glow",
      image: "https://readymadeui.com/images/sunscreen-img-2.webp",
      originalPrice: "$14.00",
      salePrice: "$9.00",
      rating: 4.5,
      reviews: 40
    },
    {
      id: 3,
      name: "Lancome La Base",
      image: "https://readymadeui.com/images/sunscreen-img-3.webp",
      originalPrice: "$11.00",
      salePrice: "$7.00",
      rating: 3.5,
      reviews: 38
    },
    {
      id: 4,
      name: "HD Face Primer",
      image: "https://readymadeui.com/images/sunscreen-img-4.webp",
      originalPrice: "$16.00",
      salePrice: "$12.00",
      rating: 3.5,
      reviews: 50
    },
    {
      id: 5,
      name: "Sunscreen Gel",
      image: "https://readymadeui.com/images/sunscreen-img-5.webp",
      originalPrice: "$18.00",
      salePrice: "$12.00",
      rating: 4.5,
      reviews: 30
    },
    {
      id: 6,
      name: "Watermelon Sunscreen",
      image: "https://readymadeui.com/images/sunscreen-img-6.webp",
      originalPrice: "$20.00",
      salePrice: "$14.00",
      rating: 4.5,
      reviews: 30
    },
    {
      id: 7,
      name: "Aloederm Body Cream",
      image: "https://readymadeui.com/images/aloederm-cream-img-1.webp",
      originalPrice: "$22.00",
      salePrice: "$14.00",
      rating: 5,
      reviews: 40
    },
    {
      id: 8,
      name: "Aloederm Face Cream",
      image: "https://readymadeui.com/images/aloederm-cream-img-2.webp",
      originalPrice: "$20.00",
      salePrice: "$12.00",
      rating: 5,
      reviews: 35
    },
    {
      id: 9,
      name: "Shower Cream",
      image: "https://readymadeui.com/images/face-body-cream-img-1.webp",
      originalPrice: "$25.00",
      salePrice: "$14.00",
      rating: 4.5,
      reviews: 30
    },
    {
      id: 10,
      name: "Face Body Shower Cream",
      image: "https://readymadeui.com/images/face-body-cream-img-2.webp",
      originalPrice: "$26.00",
      salePrice: "$16.00",
      rating: 4.5,
      reviews: 30
    }
  ];

  const StarIcon = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" viewBox="0 0 511.987 511">
      <path fill={filled ? "#ffc107" : "none"} stroke={filled ? "none" : "#ffc107"} d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" />
    </svg>
  );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} filled={true} />);
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" fill="#ffc107" viewBox="0 0 511.987 511">
          <path d="M114.594 501.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 224.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 27.027c4.307-10.047 14.119-16.535 25.022-16.535s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 322.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 49.895 200.844 178.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 208.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0" />
        </svg>
      );
    }

    return stars;
  };

  const handleProductClick = (productId) => {
    console.log('Product clicked:', productId);
    // Add your navigation logic here
  };

  return (
    <div className="p-4 mx-auto lg:max-w-screen-xl">
      <div className="border-b border-gray-300 pb-4">
        <h2 className="text-slate-900 text-2xl font-bold">Hot list</h2>
        <p className="text-slate-600 mt-2">Out the most popular and trending products.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 min-[1200px]:!grid-cols-5 gap-4 mt-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col border border-gray-300 shadow-sm rounded-md p-1.5 transition-all relative overflow-hidden">
            <div
              onClick={() => handleProductClick(product.id)}
              className="block cursor-pointer"
            >
              <div className="w-full bg-slate-50 rounded-md overflow-hidden">
                <img src={product.image} alt={`Product-${product.id}`} className="w-full aspect-square object-cover object-top" />
              </div>
              <div className="py-4 px-2 text-left">
                <h6 className="text-sm font-semibold text-slate-900 line-clamp-2">{product.name}</h6>
                <div className="mt-2">
                  <p className="text-slate-900 font-medium text-sm break-all">
                    <span className="mr-1.5">MRP:</span>
                    <strike className="mr-1.5 text-slate-600">{product.originalPrice}</strike>
                    {product.salePrice}
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  {renderStars(product.rating)}
                  <span className="ml-1.5 text-sm font-medium">({product.reviews})</span>
                </div>
              </div>
            </div>
            <div className="mt-3 h-10">
              <div className="flex items-center absolute bottom-0 left-0 right-0 w-full h-10">
                <button
                  type="button"
                  title="Save"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Saved product:', product.id);
                  }}
                  className="flex items-center justify-center cursor-pointer border-t border-gray-200 outline-0 h-full w-1/4 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-theme-color w-5 h-5" width="16px" height="16px" viewBox="0 0 66 66">
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Added to bag:', product.id);
                  }}
                  className="flex items-center justify-center bg-[#fc2779] hover:bg-[#ff0968] cursor-pointer text-sm text-white font-semibold border-0 outline-0 h-full w-9/12"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewallitemfirst;