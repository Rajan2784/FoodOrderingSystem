import React from 'react'

const WhyUs = () => {
  return (
    <div className="flex items-center mt-10 gap-5">
      {/* left section */}
      <div className="basis-1/2 h-[26rem] rounded-md overflow-hidden">
        <img
          src="https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="foodImage"
          className="hf-full w-full h-full object-cover rounded-md object-center"
        />
      </div>

      {/* right section */}
      <div className="basis-1/2">
        <h1 className="text-xl font-bold mt-10 text-green-600 font-playwrite">
          Why Choose Us?
        </h1>
        <p className="mt-3 text-3xl z-20 font-poppins">What's make our food delicious!</p>
        <p className="text-lg md:text-xl text-gray-600 mt-2 mb-4">
          Food to customers is always guaranteed of the best quality. Our dishes
          are made by best chefs, promising to bring
          explosive, delicate, impressive flavors. Our delivery service is very
          professional, customers can enjoy the same quality at the restaurant.
        </p>
        <button className='px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md'>Read more</button>
        <div className='grid grid-cols-2 gap-2 mt-1'>
            <p className='px-4 py-3 bg-white rounded-md shadow-lg font-poppins'>
                <img src="serv-1.png" alt="" className='inline-block mr-2' />
                <span>Fast Delivery</span> </p>
            <p className='px-4 py-3 bg-white rounded-md shadow-lg font-poppins'>
                <img src="serv-2.png" alt="" className='inline-block mr-2' />
                <span>Fresh Food</span> </p>
            <p className='px-4 py-3 bg-white rounded-md shadow-lg font-poppins'>
                <img src="serv-3.png" alt="" className='inline-block mr-2' />
                <span>Best Quality</span> </p>
            <p className='px-4 py-3 bg-white rounded-md shadow-lg font-poppins'>
                <img src="serv-4.png" alt="" className='inline-block mr-2' />
                <span>24/7 Support</span> </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default WhyUs