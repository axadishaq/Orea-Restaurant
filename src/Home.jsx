import React from "react";
import MenuSection from "./components/MenuSection";
import FeatureBlog from "./components/FeatureBlog";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ReservationSection } from "./components/ReservationSection";

export const Home = () => {
   return (
      <>
         <Navbar />
         <MenuSection />
         <FeatureBlog />
         <ReservationSection />
         <Footer />
      </>
   );
};
