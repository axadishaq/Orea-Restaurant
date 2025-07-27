import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Share2 } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Brand Section */}
            <div>
              <h2 className="text-4xl font-light font-serif mb-2">
                Food
              </h2>
              <h2 className="text-4xl font-light font-serif">
                Zero.
              </h2>
            </div>
            
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-medium mb-6">Contact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm">+1-646-832-545-900</p>
                  <p className="text-sm">info@foodzero.com</p>
                </div>
                <div className="text-sm">
                  <p>1959 Sepulveda Blvd.</p>
                  <p>Culver City, CA, 90230</p>
                </div>
              </div>
            </div>
            
            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-medium mb-6">Never Miss a Recipe</h3>
              <div className="space-y-4">
                
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                  />
                
                <button
                  onClick={handleSubscribe}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded font-medium transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-300 mt-3">
                Join our subscribers and get best recipe delivered each week!
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Dotted Separator */}
      <div className="border-b border-dotted border-gray-400 opacity-50"></div>
      
      {/* Bottom Section */}
      <div className="px-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright */}
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            © 2020 Zero Inc. All Rights Reserved
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded hover:border-white hover:bg-white hover:text-green-900 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded hover:border-white hover:bg-white hover:text-green-900 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded hover:border-white hover:bg-white hover:text-green-900 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded hover:border-white hover:bg-white hover:text-green-900 transition-all"
              aria-label="Share"
            >
              <Share2 size={16} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;