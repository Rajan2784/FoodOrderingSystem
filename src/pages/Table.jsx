import React from 'react'
import TableBookingForm from '../components/TableBookingForm';

const Table = () => {
  return (
    <div>
      <h1 className="text-center mt-10 text-2xl font-playwrite font-semibold text-green-500">
        Book a Table
      </h1>
      <p className='text-center text-xl mt-5 font-semibold'>Enjoy your moment👍</p>
      <div className='flex justify-center gap-4'>
        <div className='bg-white shadow-lg rounded-lg p-4 mt-4 text-center flex flex-col justify-center items-center'>
            <img src="icon-1.png" alt="" />
            <p>07:00AM - 10:00PM</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-4 mt-4 text-center flex flex-col justify-center items-center'>
            <img src="icon-2.png" alt="" />
            <p>XXXXXXXXXX</p>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-4 mt-4 text-center flex flex-col justify-center items-center'>
            <img src="icon-3.png" alt="" />
            <p>Banglore</p>
        </div>
      </div>
      {/* // Form for the table booking */}
        <div>
            <TableBookingForm />
        </div>
    </div>
  );
}

export default Table