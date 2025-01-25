import React from "react";
import { AiOutlineDashboard, AiOutlinePlusCircle } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";

const Sidebar = ({setTab, tab}) => {
  return (
    <aside className="w-1/4 bg-white shadow-md p-5 rounded-md">
      <h2 className="text-2xl font-bold mb-3 font-playwrite text-orange-600 border-b-2 pb-2">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li className={`flex items-center gap-3 cursor-pointer ${tab == "dashboard" ? "bg-orange-600 text-white" : ""} hover:bg-orange-600 hover:text-white duration-200 border rounded-md px-2 py-3`} onClick={()=>setTab("dashboard")}>
          <AiOutlineDashboard size={20} /> Dashboard
        </li>
        <li className={`flex items-center gap-3 cursor-pointer ${tab == "foodItems" ? "bg-orange-600 text-white" : ""} hover:bg-orange-600 hover:text-white duration-200 border rounded-md px-2 py-3`} onClick={()=>setTab("foodItems")}>
          <BiFoodMenu size={20} /> Food Items
        </li>
        <li className={`flex items-center gap-3 cursor-pointer ${tab == "addFood" ? "bg-orange-600 text-white" : ""} hover:bg-orange-600 hover:text-white duration-200 border rounded-md px-2 py-3`} onClick={()=>setTab("addFood")}>
          <AiOutlinePlusCircle size={20} /> Add Food
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
