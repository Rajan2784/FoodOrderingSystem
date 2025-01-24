import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customer: "John Doe",
      items: "Pizza, Burger",
      stage: "Preparing",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      items: "Pasta",
      stage: "Out for Delivery",
    },
  ]);

  const stages = [
    "Checking",
    "Preparing",
    "Verifying",
    "Out for Delivery",
    "Delivered",
    "Paid",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-gray-500">Total Orders</h2>
            <p className="text-2xl font-bold">150</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-gray-500">Total Revenue</h2>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-gray-500">Orders in Progress</h2>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-gray-500">Total Customers</h2>
            <p className="text-2xl font-bold">58</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Order ID</th>
                <th className="border border-gray-300 px-4 py-2">Customer</th>
                <th className="border border-gray-300 px-4 py-2">Items</th>
                <th className="border border-gray-300 px-4 py-2">Stage</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.customer}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.items}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 text-center font-semibold text-$
                      {order.stage === "Preparing"
                        ? "yellow-500"
                        : order.stage === "Out for Delivery"
                        ? "blue-500"
                        : "green-500"
                    }`}
                  >
                    {order.stage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Stages Overview */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Order Stages Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-inner"
              >
                <h4 className="text-center font-bold text-gray-700">{stage}</h4>
                <p className="text-center text-gray-500">
                  {Math.floor(Math.random() * 20)} Orders
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
