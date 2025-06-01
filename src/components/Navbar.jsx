import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Replace with your icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent px-6 md:px-[110px] py-4 md:py-[39px]">
      <div className="flex items-center justify-between">
        {/* Left - Logo */}
        <div>
          <img 
            src="/ShOpy.png" 
            alt="Logo" 
            className="w-[70px] md:w-[85px] h-[31px] object-contain" 
          />
        </div>

        {/* Center - Desktop Menu */}
        <ul className="hidden md:flex gap-[25px] lg:gap-[45px] text-[16px] font-medium text-[#494747]">
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Accessories</li>
          <li className="cursor-pointer">Summer Sale</li>
          <li className="cursor-pointer">Kids</li>
        </ul>

        {/* Right - Search + Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Search input hidden on very small screens */}
          <div className="relative w-[140px] md:w-[212px] hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-[6px] h-[36px] md:h-[39px] border-none shadow-[0px_4px_20px_0px_#0000001A] pl-4 pr-10 py-2 text-sm text-[#494747]"
            />
            <img
              src="/search.svg"
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mt-4 flex flex-col gap-4 text-[16px] font-medium text-[#494747] md:hidden">
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Accessories</li>
          <li className="cursor-pointer">Summer Sale</li>
          <li className="cursor-pointer">Kids</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
