import { useState } from "react";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 200,
      quantity: 1,
      discount: 10,
      image: "pizza.png",
    },
    {
      id: 2,
      name: "Veg Burger",
      price: 5.49,
      quantity: 2,
      discount: 15,
      image: "burger.png",
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      price: 7.99,
      quantity: 1,
      discount: 0,
      image: "veg-pulao.jpg",
    },
  ]);

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (sum, item) => sum + ((item.price * item.discount) / 100) * item.quantity,
    0
  );
  const finalPrice = totalPrice - totalDiscount;

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
              <CartItem item={item} setCartItems={setCartItems} key={item.id} />
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
                -₹{totalDiscount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mt-2 font-bold">
              <span>Total after Discount:</span>
              <span className="text-lg">₹{finalPrice.toFixed(2)}</span>
            </div>
            <button
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              onClick={() => navigate("/checkout")}
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
