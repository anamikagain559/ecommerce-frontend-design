import React from "react";

/**
 * Card component for displaying a product in the checkout summary.
 */
const CheckoutItemCard = ({ item }) => (
  <article className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-3 flex items-center space-x-3 hover:scale-[1.02] transition-transform">
    <img
      src={item.photo.startsWith('http') ? item.photo : `/assets/images/${item.photo}`}
      alt={item.name}
      className="w-16 h-16 rounded-md object-cover border border-gray-200"
      onError={(e) => (e.target.src = '/assets/images/food.png')}
    />
    <div className="flex-1">
      <h5 className="font-medium text-gray-800">{item.name}</h5>
      <p className="text-xs text-gray-500">
        Size: {item.selectedSize.name} • Qty: {item.quantity}
      </p>
    </div>
    <span className="font-bold text-[#FFA259] whitespace-nowrap">
      ৳{(item.price * item.quantity).toLocaleString()}
    </span>
  </article>
);

export default CheckoutItemCard;
