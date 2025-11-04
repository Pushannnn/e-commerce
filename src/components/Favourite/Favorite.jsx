import React, { useState } from 'react';
import { Heart, Trash2, ShoppingCart, X } from 'lucide-react';

export default function Favorite() {
  // Sample favorite items - in a real app, this would come from your state management or backend
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Running Shoes',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      category: 'Fashion'
    },
    {
      id: 3,
      name: 'Coffee Maker',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
      category: 'Home'
    },
    {
      id: 4,
      name: 'Leather Backpack',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      category: 'Fashion'
    }
  ]);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const addToCart = (item) => {
    alert(`Added ${item.name} to cart!`);
  };

  const clearAllFavorites = () => {
    if (window.confirm('Are you sure you want to clear all favorites?')) {
      setFavorites([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500 fill-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">My Favorites</h1>
            </div>
            {favorites.length > 0 && (
              <button
                onClick={clearAllFavorites}
                className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {favorites.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No favorites yet
            </h2>
            <p className="text-gray-500 mb-6">
              Start adding items to your favorites to see them here!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Products
            </button>
          </div>
        ) : (
          <>
            {/* Item Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                {favorites.length} {favorites.length === 1 ? 'item' : 'items'} in your favorites
              </p>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => removeFromFavorites(item.id)}
                      className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
                      title="Remove from favorites"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                    <span className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700">
                      {item.category}
                    </span>
                  </div>

                  {/* Item Details */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900 mb-4">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(item)}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
