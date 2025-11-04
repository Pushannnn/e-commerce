import React from 'react'

const Brands = () => {
  const laptopBrands = [
    { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg' },
  ]

  const mobileBrands = [
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg' },
    { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg' },
    { name: 'Realme', logo: 'https://w7.pngwing.com/pngs/823/507/png-transparent-realme-hd-logo.png' },
    { name: 'Vivo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWed3mIOGXht2GyM1sLBzGRtIaeQh7ZXlfCg&s' },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-7 px-4">
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Trusted Brands</h2>
          <p className="text-gray-600 text-lg">Partnering with the world's leading manufacturers</p>
        </div>
        
        {/* Laptop Brands */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Laptops</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {laptopBrands.map((brand, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center h-32"
              >
                <div className="w-3/5 h-3/5 rounded-full bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center p-4 group-hover:from-blue-100 group-hover:to-slate-100 transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Brands */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Mobile Phones</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {mobileBrands.map((brand, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center h-32"
              >
                <div className="w-3/5 h-3/5 rounded-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands