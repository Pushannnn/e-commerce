import React, { useState } from 'react';
import { CreditCard, Building2, Wallet, Package } from 'lucide-react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    paymentMethod: 'esewa'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nCity: ${formData.city}\nPayment: ${formData.paymentMethod}`);
  };

  const paymentMethods = [
    {
      id: 'esewa',
      name: 'eSewa',
      icon: <Wallet className="w-8 h-8" />,
      image: 'https://rpcdn.ratopati.com/media/albums/eSewa-Company-Logo_FWu1YucLO0.jpg'
    },
    {
      id: 'banking',
      name: 'Online Banking',
      icon: <Building2 className="w-8 h-8" />,
      image: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: <Package className="w-8 h-8" />,
      image: 'https://cdn-icons-png.flaticon.com/512/2331/2331941.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your purchase</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Customer Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your city"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`relative flex flex-col items-center justify-center p-6 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.paymentMethod === method.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-300 bg-white hover:border-blue-300 hover:shadow'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={formData.paymentMethod === method.id}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    <img 
                      src={method.image} 
                      alt={method.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800 text-center">
                    {method.name}
                  </span>
                  {formData.paymentMethod === method.id && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Complete Order
          </button>
        </form>
      </div>
    </div>
  );
}