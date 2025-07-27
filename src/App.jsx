import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Menu } from "./Menu";
import { About } from "./About";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Home />} />
            {/* <Route path="/blog/:id" element={<Home />} /> */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
