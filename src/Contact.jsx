import React from "react";
import bgImage from "./assets/050a676d6592fe9fb77b0c6601ab914d2ad23f01.jpg";
export const Contact = () => {
   return (
      <>
         <section
            className="flex-1 w-full bg-cover bg-center h-screen flex flex-col md:flex-row bg-blend-multiply bg-green-200"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex flex-col gap-6 items-start justify-center px-1 sm:px-4  lg:px-24 min-h-120">
               <h1 className="text-6xl px-4">Get in Touch</h1>
               <p className="text-xl px-8">
                  The freshest ingredients for you every day
               </p>
            </div>
            <div className="flex-2 flex flex-col justify-end items-center p-2 ">
               <div className="w-full flex justify-between py-8 ">
                  <p className="text-lg">Open Time</p>
                  <p>Sunday - Friday</p>
               </div>
               <div className="w-full flex justify-between gap-6 py-8 border-t-2 border-dotted">
                  <span className="flex flex-col">
                     <p>Brunch</p>
                     <p>11:00 12:00</p>
                  </span>
                  <span className="flex flex-col">
                     <p>Lunch</p>
                     <p>13:00 17:00</p>
                  </span>
                  <span className="flex flex-col">
                     <p>Dinner</p>
                     <p>18:00 20:00</p>
                  </span>
               </div>
            </div>
         </section>

         <section className="w-full bg-gray-50 py-16 px-0 sm:px-8 min-h-screen ">
            <div className="flex justify-evenly items-center align-middle gap-4 flex-wrap ">
               <img
                  className="border object-contain w-64 h-96"
                  src="/e74a37b3b05a3ec157898a2e0b518a299ecd2f7d.jpg"
                  alt=""
               />
               <p className=" p-2 sm:p-10 py-20">
                  We can be contacted via <br /> email info@foodzero.com
                  <br />
                  or <br />
                  telephone on +86 852 346 000
               </p>
            </div>
            {/* second  */}
            <div className="flex justify-evenly items-center align-middle gap-4 flex-wrap">
               <p className="p-2 sm:p-10 py-20">
                  We are located in 1959 Sepulveda Blvd.
                  <br />
                  Culver City, CA, 90230
                  <br />
                  <br />
                  <br />
                  <a href="" className="p-2 px-3 border h-fit">
                     View in maps
                  </a>
               </p>
               <img
                  className="border object-contain w-64 h-96"
                  src="/e74a37b3b05a3ec157898a2e0b518a299ecd2f7d.jpg"
                  alt=""
               />
            </div>
         </section>
      </>
   );
};
