import React from "react";

const ReservationSection = () => {
   return (
      <section className="bg-[#f1f3e6] min-h-screen flex items-center justify-center px-4">
         <div className="max-w-4xl w-full text-center py-16">
            <h2 className="text-4xl font-bold mb-2">Make a Reservation</h2>
            <p className="text-sm text-gray-600 mb-14">
               Get in touch with restaurant
            </p>

            <form className="flex flex-col md:flex-row gap-5 justify-center items-center mb-12">
               <input
                  type="date"
                  className="border border-gray-400 px-4 py-2  w-64"
               />

               <select className="border border-gray-400 px-4 py-2  w-64">
                  <option>6:00 pm</option>
                  <option>7:00 pm</option>
                  <option>8:00 pm</option>
                  <option>9:00 pm</option>
               </select>

               <select className="border border-gray-400 px-4 py-2  w-64">
                  <option>2 Person</option>
                  <option>4 Person</option>
                  <option>6 Person</option>
                  <option>8 Person</option>
               </select>
            </form>

            <button className="bg-[#2c2c14] text-white px-8 py-2  hover:bg-[#1f1f0f]">
               Book Now
            </button>
         </div>
      </section>
   );
};

export default ReservationSection;
