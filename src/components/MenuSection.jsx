import React from "react";

const MenuSection = () => {
   const menuItems = [
      {
         name: "Deep Sea Snow White Cod Fillet",
         price: "$20",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
         name: "Steak With Rosemary Butter",
         price: "$22",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
         name: "Cucumber Salad",
         price: "$18",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
         name: "Natural Wine Pairing",
         price: "$90",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
   ];

   const EucalyptusLeaf = ({ className = "" }) => (
      <svg
         className={`absolute ${className}`}
         width="60"
         height="80"
         viewBox="0 0 60 80"
         fill="none"
         style={{ opacity: 0.6 }}>
         <path
            d="M30 5C35 8 45 15 50 25C52 35 48 45 40 55C35 65 30 75 30 75C30 75 25 65 20 55C12 45 8 35 10 25C15 15 25 8 30 5Z"
            fill="#9CA88A"
         />
         <path
            d="M30 5C32 10 38 20 42 30C43 40 40 50 35 60C32 68 30 75 30 75"
            stroke="#7A8471"
            strokeWidth="1"
            fill="none"
         />
         <path
            d="M30 15C35 18 40 25 42 30"
            stroke="#7A8471"
            strokeWidth="0.5"
            fill="none"
         />
         <path
            d="M30 25C32 28 35 35 37 40"
            stroke="#7A8471"
            strokeWidth="0.5"
            fill="none"
         />
      </svg>
   );

   const EucalyptusBranch = ({ className = "" }) => (
      <svg
         className={`absolute ${className}`}
         width="120"
         height="60"
         viewBox="0 0 120 60"
         fill="none"
         style={{ opacity: 0.5 }}>
         <path
            d="M10 30C20 28 40 25 60 30C80 35 100 32 110 30"
            stroke="#9CA88A"
            strokeWidth="2"
            fill="none"
         />
         <ellipse
            cx="25"
            cy="20"
            rx="8"
            ry="12"
            fill="#9CA88A"
            transform="rotate(-20 25 20)"
         />
         <ellipse
            cx="45"
            cy="25"
            rx="7"
            ry="10"
            fill="#A5B395"
            transform="rotate(15 45 25)"
         />
         <ellipse
            cx="75"
            cy="22"
            rx="6"
            ry="9"
            fill="#9CA88A"
            transform="rotate(-10 75 22)"
         />
         <ellipse
            cx="95"
            cy="35"
            rx="5"
            ry="8"
            fill="#A5B395"
            transform="rotate(25 95 35)"
         />
      </svg>
   );

   return (
      <div className="relative w-full bg-white min-h-screen py-16 px-8 overflow-hidden">
         {/* Decorative Elements */}
         <EucalyptusBranch className="top-8 right-16 rotate-12" />
         <EucalyptusLeaf className="top-20 right-32 rotate-45" />
         <EucalyptusLeaf className="top-32 right-8 -rotate-12" />
         <EucalyptusLeaf className="bottom-20 left-16 rotate-180" />
         <EucalyptusBranch className="bottom-16 left-8 -rotate-45" />

         <div className="max-w-4xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
               <h1 className="text-5xl font-light text-gray-900 mb-4 font-serif">
                  Our Menu
               </h1>
               <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                  This is a section of your menu. Give your section a brief
                  description
               </p>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
               {menuItems.map((item, index) => (
                  <div key={index} className="group">
                     {/* Price and dotted line */}
                     <div className="flex items-end justify-between mb-3">
                        <div className="flex-1">
                           <div className="border-b border-dotted border-gray-400 h-4 relative">
                              <span className="absolute right-0 bg-white px-2 text-2xl font-light text-gray-800">
                                 {item.price}
                              </span>
                           </div>
                        </div>
                     </div>

                     {/* Item name */}
                     <h3 className="text-2xl font-serif text-gray-900 mb-3 leading-tight">
                        {item.name}
                     </h3>

                     {/* Description */}
                     <p className="text-gray-600 text-base leading-relaxed">
                        {item.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default MenuSection;
