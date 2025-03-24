import { useState } from "react";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { manageCartPrice } from "../store/slices/cartSlice";

const CartPage = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(items);

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * 1, 0);

  const billDiscount = cartItems.reduce(
    (sum, item) => sum + ((item.price * item.discount) / 100) * 1,
    0
  );
  const total = totalPrice - billDiscount;

  const handleCheckout = () => {
    dispatch(manageCartPrice({ total, billDiscount }));
    navigate("/checkout");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-2xl font-semibold mb-6 font-playwrite text-green-500 text-center">
        Your Cart
      </h1>
      <p className="text-xl text-center font-poppins">
        Fresh Foods & Fast Delivery
      </p>
      <div className="grid grid-cols-12 rounded-lg gap-3">
        <div className="p-4 col-span-8 border-t-2 border-gray-200">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                item={item}
                setCartItems={setCartItems}
                key={item.foodId}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 col-span-4 border-t-2 border-gray-200">
            <h2 className="text-xl font-semibold">Cart Summary</h2>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-lg font-semibold">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2 text-red-500">
              <span>Discount:</span>
              <span className="text-lg font-semibold">
                -₹{billDiscount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2 font-bold">
              <span>Total after Discount:</span>
              <span className="text-lg">₹{total.toFixed(2)}</span>
            </div>
            <button
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
