import React from "react";
import { FiTrash } from "react-icons/fi";

const CartItem = ({ item,setCartItems }) => {
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
          {item.discount > 0 && (
            <p className="text-red-500">
              Discount: {item.discountPercentage}% (-₹
              {(((item.price * item.discount) / 100) * item.quantity).toFixed(
                2
              )}
              )
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-2 py-1 border rounded"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="px-4 py-1 border">{item.quantity}</span>
        <button
          className="px-2 py-1 border rounded"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => removeItem(item.id)}
        >
          <FiTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
