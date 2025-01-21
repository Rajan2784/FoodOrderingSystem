import React from "react";

const PromotionTable = () => {
  return (
    <div>
      <table className="w-full border border-gray-300 table-auto text-center table-class text-sm">
        <thead>
          <tr className="border-b-2 border-gray-500">
            <th className="border border-gray-400 bg-white px-2 py-3">Time</th>
            <th className="border border-gray-400 bg-white px-2 py-3">
              Monday
            </th>
            <th className="border border-gray-400 bg-white px-2 py-3">
              Tuesday
            </th>
            <th className="border border-gray-400 bg-white px-2 py-3">
              Wednesday
            </th>
            <th className="border border-gray-400 bg-white px-2 py-3">
              Thursday
            </th>
            <th className="border border-gray-400 bg-white px-2 py-3">
              Friday
            </th>
            <th className="border border-gray-400 bg-white px-2 py-3">
              Saturday
            </th>
            <th className="border border-gray-400 bg-white px-2 py-3">
              Sunday
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400">07:00 - 09:00</td>
            <td className="border p-2 border-gray-400">
              <p className="bg-yellow-900 rounded-md font-poppins p-1 text-white ">
                Breakfast Time
              </p>
              <p className="text-center text-sm text-gray-800">10% Off</p>
            </td>
            <td className="border p-2 border-gray-400">
              <p className="bg-yellow-900 rounded-md font-poppins p-1 text-white ">
                Breakfast Time
              </p>
              <p className="text-center text-sm text-gray-800">10% Off</p>
            </td>
            <td className="border p-2 border-gray-400">
              <p className="bg-yellow-900 rounded-md font-poppins p-1 text-white ">
                Breakfast Time
              </p>
              <p className="text-center text-sm text-gray-800">10% Off</p>
            </td>
            <td className="border p-2 border-gray-400">
              <p className="bg-yellow-900 rounded-md font-poppins p-1 text-white ">
                Breakfast Time
              </p>
              <p className="text-center text-sm text-gray-800">10% Off</p>
            </td>
            <td className="border p-2 border-gray-400">
              <p className="bg-yellow-900 rounded-md font-poppins p-1 text-white ">
                Breakfast Time
              </p>
              <p className="text-center text-sm text-gray-800">10% Off</p>
            </td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400"></td>
          </tr>
          <tr>
            <td className="border border-gray-400">10:00 - 14:00</td>
            <td className="border border-gray-400">
              <p className="bg-orange-400 rounded-md font-poppins p-1 text-white ">
                Happy Lunch
              </p>
              <p className="text-center text-sm text-gray-800">Free Drinks</p>
            </td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400">
              <p className="bg-orange-400 rounded-md font-poppins p-1 text-white ">
                Happy Lunch
              </p>
              <p className="text-center text-sm text-gray-800">Free Drinks</p>
            </td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400">
              <p className="bg-orange-400 rounded-md font-poppins p-1 text-white">
                Happy Lunch
              </p>
              <p className="text-center text-sm text-gray-800">Free Drinks</p>
            </td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400"></td>
          </tr>
          <tr>
            <td className="border border-gray-400">15:00 - 17:00</td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400">
              <p className="bg-red-500 rounded-md font-poppins p-1 text-white">
                Afternoon Snacks
              </p>
              <p className="text-center text-sm text-gray-800">
                15% Off on Burgers
              </p>
            </td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400">
              <p className="bg-red-500 rounded-md font-poppins p-1 text-white">
                Afternoon Snacks
              </p>
              <p className="text-center text-sm text-gray-800">
                15% Off on Sandwiches
              </p>
            </td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400"></td>
          </tr>
          <tr>
            <td className="border border-gray-400">18:00 - 20:00</td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400"></td>
            <td className="border border-gray-400">
              <p className="bg-green-400 rounded-md font-poppins p-1 text-white">
                Happy Dinner
              </p>
              <p className="text-center text-sm text-gray-800">15% Off</p>
            </td>
            <td className="border border-gray-400">
              <p className="bg-green-400 rounded-md font-poppins p-1 text-white">
                Happy Dinner
              </p>
              <p className="text-center text-sm text-gray-800">15% Off</p>
            </td>
            <td className="border border-gray-400">
              <p className="bg-green-400 rounded-md font-poppins p-1 text-white">
                Happy Dinner
              </p>
              <p className="text-center text-sm text-gray-800">15% Off</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PromotionTable;
