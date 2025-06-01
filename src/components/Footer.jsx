import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Desktop View (unchanged from your original) */}
      <footer className='hidden md:flex h-[225px] bg-[#796EFF]'>
        <img src="/Group 9.png" alt="" className='mr-[36px]'/>
        <div className="cards-container flex gap-[61px]">
            <img src="/card1.png" className='w-[177px] h-[177px] mt-3' alt="" />
                 <div className="flex items-center flex-col mt-[-34px]">
                     <img src="/card2.png" alt="" className='w-[177px] h-[177px]' />
                    <button className='bg-[#FCBD01] text-[#181818] rounded-full w-[108px] h-[35px] shadow-[0px_4px_35px_0px_#FCBD0166]'>See All <img src="/Vector.png" alt="" className="inline ml-1" /></button>
                </div>
            <img src="/card3.png" className='w-[177px] h-[177px] mt-3' alt="" />
        </div>

        <div className="text-container text-[#fff] font-medium w-[325px] ml-[80px] flex flex-col justify-center">
           <div className="last-container flex flex-col justify-center">
            <h2 className='text-[45px] leading-[110%]'>Our Feature <br />
                Products</h2>
                <p className='text-[16px] leading-[125%] mt-[14px]'>If we define Buzz buy in three words, it will be elegant, classic, and high-quality.</p>
           </div>
        </div>

        <img src="/Group 9.png" alt="" className='ml-[38px]'/>
      </footer>

      {/* Tablet/Mobile View (completely separate component) */}
      <footer className='md:hidden bg-[#796EFF] py-8 px-4'>
        <div className="text-container text-[#fff] font-medium text-center mb-8">
          <h2 className='text-[32px] leading-[110%]'>Our Feature Products</h2>
          <p className='text-[14px] leading-[125%] mt-3'>
            If we define Buzz buy in three words, it will be elegant, classic, and high-quality.
          </p>
        </div>

        <div className="cards-container flex flex-wrap justify-center gap-6">
          <img src="/card1.png" className='w-[120px] h-[120px]' alt="" />
          <div className="flex items-center flex-col">
            <img src="/card2.png" alt="" className='w-[120px] h-[120px]' />
            <button className='bg-[#FCBD01] text-[#181818] rounded-full w-[90px] h-[30px] text-xs mt-2 shadow-[0px_4px_35px_0px_#FCBD0166]'>
              See All <img src="/Vector.png" alt="" className="inline ml-1 w-2 h-2" />
            </button>
          </div>
          <img src="/card3.png" className='w-[120px] h-[120px]' alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;