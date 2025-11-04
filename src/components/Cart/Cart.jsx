import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Tag } from "lucide-react";
import { Link } from 'react-router-dom'

const Cart = ({ cartItems, setCartItems }) => {
  const [quantities, setQuantities] = useState({});
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const getQuantity = (index) => quantities[index] || 1;

  const updateQuantity = (index, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) + delta),
    }));
  };

  
  const removeItem = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item, index) => sum + item.price * getQuantity(index), 0);
  const discountAmount = (subtotal * discount) / 100;
  const tax = (subtotal - discountAmount) * 0.1;
  const shipping = subtotal > 500 ? 0 : 15;
  const total = subtotal - discountAmount + tax + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <ShoppingBag className="w-8 h-8 text-slate-800" />
          <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
          <span className="ml-auto text-sm text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </span>
          {cartItems.length > 0 && (
            <button onClick={clearCart} className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700">
              <Trash2 className="w-4 h-4" /> Clear All
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 text-lg">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 relative">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                      </div>
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
                          <button onClick={() => updateQuantity(index, -1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors">
                            <Minus className="w-4 h-4 text-slate-700" />
                          </button>
                          <span className="w-8 text-center font-semibold text-slate-900">{getQuantity(index)}</span>
                          <button onClick={() => updateQuantity(index, 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors">
                            <Plus className="w-4 h-4 text-slate-700" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-slate-900">${(item.price * getQuantity(index)).toFixed(2)}</p>
                          <p className="text-xs text-slate-500">${item.price.toFixed(2)} each</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delete Single Item */}
                  <button
                    onClick={() => removeItem(index)}
                    className="absolute top-2 right-2 text-red-600 p-2 hover:bg-red-100 rounded-full"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                </div>
                {appliedCoupon && (
                  <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                    ✓ Coupon "{appliedCoupon}" applied
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                <div className="flex justify-between text-slate-700">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discount}%)</span>
                    <span className="font-medium">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-700">
                  <span>Tax (10%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Shipping</span>
                  <span className="font-medium">{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-200">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-bold text-slate-900">${total.toFixed(2)}</span>
              </div>

              {/* Payment Options */}
              <div className="space-y-3">
              <Link to="/checkout" className="w-full">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <CreditCard className="w-5 h-5" />
                  Proceed to Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
