import React from "react";
import { FiTrash2 } from "react-icons/fi";

/**
 * Card component representing a single cart item.
 * Uses glass‑morphism styling and subtle hover animation.
 */
const CartItemCard = ({ item, uniqueKey, updateQuantity, removeFromCart }) => (
  <article className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-4 flex items-center space-x-4 hover:scale-[1.02] transition-transform">
    <img
      src={item.photo.startsWith('http') ? item.photo : `/assets/images/${item.photo}`}
      alt={item.name}
      className="w-20 h-20 rounded-md object-cover border border-gray-200"
      onError={(e) => (e.target.src = '/assets/images/food.png')}
    />
    <div className="flex-1">
      <h4 className="font-semibold text-gray-900">{item.name}</h4>
      <p className="text-xs text-gray-500">
        Size: {item.selectedSize.name}
        {item.selectedOption && ` • Option: ${item.selectedOption}`}
        {item.selectedAddons.length > 0 && (
          <span className="block">
            + {item.selectedAddons.map((a) => `${a.name} (৳${a.price})`).join(", ")}
          </span>
        )}
      </p>
    </div>
    <div className="flex flex-col items-center">
      <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
        <button
          className="px-2 text-gray-600 hover:text-gray-800"
          onClick={() => updateQuantity(uniqueKey, item.quantity - 1)}
        >
          –
        </button>
        <span className="px-3 text-sm font-medium">{item.quantity}</span>
        <button
          className="px-2 text-gray-600 hover:text-gray-800"
          onClick={() => updateQuantity(uniqueKey, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <span className="mt-2 font-bold text-[#FFA259]">
        ৳{(item.price * item.quantity).toLocaleString()}
      </span>
    </div>
    <button
      onClick={() => removeFromCart(uniqueKey)}
      className="text-red-500 hover:text-red-700"
      aria-label="Remove item"
    >
      <FiTrash2 size={18} />
    </button>
  </article>
);

export default CartItemCard;
