import React from "react";
import { FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";

const CartItem = ({ item,setCartItems }) => {
  const dispatch = useDispatch();
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img
          src={item.foodImage}
          alt={item.foodName}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.foodName}</h2>
          <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
          {item.discount > 0 && (
            <p className="text-red-500">
              Discount: {item.discount}% (-₹
              {(((item.price * item.discount) / 100) * 1).toFixed(
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
        <span className="px-4 py-1 border">{1}</span>
        <button
          className="px-2 py-1 border rounded"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => removeItem(item.foodId)}
        >
          <FiTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
