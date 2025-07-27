import React from "react";
import { ArrowRight, User } from "lucide-react";

const FoodBlogSection = () => {
   const articles = [
      {
         id: 1,
         title: "Fruit and vegetables and protection against diseases",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         image: "/d4e82c32e64a244f88277764d2a9b4dcc9ee5695.jpg",
         author: {
            name: "Ana Gomes",
            avatar: "/api/placeholder/40/40",
         },
         date: "October 12, 2023",
         readTime: "5 min read",
         comments: "8 comments",
         category: "Nutrition",
      },
      {
         id: 2,
         title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         image: "/api/placeholder/400/300",
         author: {
            name: "James Russell",
            avatar: "/api/placeholder/40/40",
         },
         date: "October 15, 2023",
         readTime: "3 min read",
         comments: "12 comments",
         category: "Nutrition",
      },
   ];

   const ArticleCard = ({ article }) => (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
         {/* Image Container */}
         <div className="relative overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 via-yellow-50 to-green-50 relative">
               {/* Simulated food image content */}
              
                    
                  <div className="absolute inset-0 flex items-center justify-center">
                     {/* Asparagus illustration */}
                     <div className="relative">
                        {Array.from({ length: 8 }).map((_, i) => (
                           <div
                              key={i}
                              className="absolute bottom-0 bg-gradient-to-t from-white to-green-500 rounded-t-full"
                              style={{
                                 width: "8px",
                                 height: "60px",
                                 left: `${i * 12}px`,
                                 transform: `rotate(${(i - 4) * 3}deg)`,
                                 transformOrigin: "bottom center",
                              }}>
                              <div className="absolute top-0 w-full h-4 bg-green-600 rounded-full"></div>
                           </div>
                        ))}
                     </div>
                  </div>
             
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4">
               <span className="bg-green-700 text-white px-3 py-1 text-xs font-medium rounded">
                  {article.category}
               </span>
            </div>
         </div>

         {/* Content */}
         <div className="p-6">
            {/* Author and Meta Info */}
            <div className="flex items-center gap-3 mb-4">
               <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={16} className="text-gray-600" />
               </div>
               <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium text-gray-800">
                     {article.author.name}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.comments}</span>
               </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-serif text-gray-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">
               {article.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
               {article.description}
            </p>

            {/* Read More Link */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors">
               <span>Read More</span>
               <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
               />
            </div>
         </div>
      </div>
   );

   return (
      <div className="bg-gray-50 py-16 px-8">
         <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default FoodBlogSection;
