import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div class="mb-4 lg:mb-0">
          <h1 class="text-xl font-semibold">HomeLand</h1>
          <p class="mt-2">Find your dream home with us.</p>
        </div>
        <div>
          <ul class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li><Link to='/' class="hover:text-gray-400">Home</Link></li>
            <li><Link to='/' class="hover:text-gray-400">About Us</Link></li>
            <li><Link to='/' class="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>

  )
};

export default Footer;
