import React from "react";

const TableBookingForm = () => {
  return (
    <div>
      {/* This will be the Table Booking Component form */}
      <h1 className="text-center mt-10 text-2xl font-playwrite font-semibold text-green-500">
        Book a Table
      </h1>
      <form className="mt-5">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Enter your phone"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="How many people?"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="number"
              placeholder="How many tables?"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              placeholder="Enter your date"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="time"
              placeholder="Enter your time"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <textarea
            placeholder="Enter your message like special requirements"
            rows={5}
            className="border border-gray-300 p-2 rounded-md"
          />
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3888.209994076887!2d77.69991362481944!3d12.958410415167847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737482469215!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-40">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default TableBookingForm;
