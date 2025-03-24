import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { manageOrderDetails } from "../store/slices/cartSlice";
import { orderDetails } from "../utils/api";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {user} = useSelector((store)=>store.auth)
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    deliveryAddress: "",
    orderPhone: "",
    paymentMethod: "Cash on Delivery",
    user:user.userId
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch(manageOrderDetails(formData))
    console.log("Order Placed", formData);
    console.log(cart)
    try {
      const response = await orderDetails(cart);
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
    navigate("/order-confirmation");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white mt-10">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="text"
            name="orderPhone"
            value={formData.orderPhone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="online">Online</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
