import React from 'react';

const Home = () => {
  return (
    <>
      {/* Desktop View (hidden on tablet and mobile) */}
      <div className="hidden lg:block">
        <DesktopView />
      </div>

      {/* Tablet View (hidden on mobile and desktop) */}
      <div className="hidden md:block lg:hidden">
        <TableView />
      </div>

      {/* Mobile View (hidden on tablet and desktop) */}
      <div className="block md:hidden">
        <MobileView />
      </div>
    </>
  );
};

// Desktop Component (original layout)
const DesktopView = () => (
  <main className='flex pb-[100px]'>
    <div className="first-container w-1/2">
      <div className="heading-container px-[106px]">
        <h2 className='text-[65px] font-semibold'>Discover New <br /></h2>
        <div className="inner-heading flex mb-[31px]">
          <h2 className='text-[65px] font-semibold'>Collection</h2>
          <img src="/icon sun frame.svg" alt="" />
        </div>

        <div className="heading-second-container flex">
          <div className="line-container mt-[1px]">
            <img src="/Line 1.svg" alt="" className='mt-[10px] px-2'/>
          </div>
          <div className="text-container w-[206px]">
            <p className='text-[16px] font-medium leading-[125%]'>Fashion is part of the daily air and it changes all the time, with all the events.</p>
          </div>
        </div>

        <div className="heading-second-container flex justify-between mt-[31px]">
          <div className="line-container mt-[1px]">
            <h3 className='text-[#181818] text-[35px] font-medium'>#01</h3>
          </div>
          <div className="text-container w-[206px] flex justify-center">
            <button className='bg-[#FCBD01] shadow-[0px_4px_35px_0px_#FCBD0166] text-[#181818] rounded-[10px] w-[156px] h-[45px]'>Start Shopping <img src="/Vector.png" alt="" className="inline ml-1" /></button>
          </div>
          <div className="img-container">
            <img src="/Vector.svg" alt="" />
          </div>
        </div>

        <div className="heading-second-container flex justify-between mt-[30]">
          <div className="img-container flex flex-col justify-center">
            <img src="/Group 4.png" alt="" />
          </div>
          <div className="img-container">
            <img src="/Group 13.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="second-container w-1/2 px-[106px]">
      <div className="first-img-container flex justify-end px-4">
        <img src="/Shape(1).svg" alt=""/>
        <img src="/Shape.svg" alt="" />
      </div>
      <div className="second-container-img flex justify-end mt-[122px]">
        <img src="/Group 1.png" alt="" className='w-[52px] h-[209px]' />
      </div>
    </div>
  </main>
);

// Tablet Component
const TableView = () => (
  <main className='flex flex-col pb-[80px]'>


    <div className="first-container w-full">
      <div className="heading-container px-[60px]">
        <h2 className='text-[50px] font-semibold'>Discover New <br /></h2>
        <div className="inner-heading flex mb-[25px]">
          <h2 className='text-[50px] font-semibold'>Collection</h2>
          <img src="/icon sun frame.svg" alt="" className="w-10 h-10"/>
        </div>

        <div className="heading-second-container flex">
          <div className="line-container mt-[1px]">
            <img src="/Line 1.svg" alt="" className='mt-[10px] px-2'/>
          </div>
          <div className="text-container w-[206px]">
            <p className='text-[16px] font-medium leading-[125%]'>Fashion is part of the daily air and it changes all the time, with all the events.</p>
          </div>
        </div>

        <div className="heading-second-container flex justify-between mt-[25px]">
          <div className="line-container mt-[1px]">
            <h3 className='text-[#181818] text-[30px] font-medium'>#01</h3>
          </div>
          <div className="text-container w-[206px] flex justify-center">
            <button className='bg-[#FCBD01] shadow-[0px_4px_35px_0px_#FCBD0166] text-[#181818] rounded-[10px] w-[156px] h-[45px] text-sm'>Start Shopping <img src="/Vector.png" alt="" className="inline ml-1 w-2 h-3" /></button>
          </div>
          <div className="img-container">
            <img src="/Vector.svg" alt="" className="w-[50%]"/>
          </div>
        </div>

        <div className="heading-second-container flex justify-between mt-[25px]">
          <div className="img-container flex flex-col justify-center">
            <img src="/Group 4.png" alt="" className="w-full"/>
          </div>
           <div className="second-container-img flex justify-end mt-[122px]">
        <img src="/Group 1.png" alt="" className='w-[52px] h-[209px]' />
      </div>
        </div>
      </div>
    </div>

        <div className="second-container w-full px-[60px] mb-10">
      <div className="first-img-container flex justify-end px-4">
        <img src="/Shape(1).svg" alt="" className="w-8 h-8"/>
        <img src="/Shape.svg" alt="" className="w-8 h-8"/>
      </div>
      <div className="second-container-img flex justify-center mt-[60px] md:hidden sm:hidden">
          <img src="/Group 1.png" alt="" className='w-[52px] h-[209px]' />
      </div>
    </div>

  </main>
);

// Mobile Component
const MobileView = () => (
  <main className='flex flex-col pb-[60px]'>
    <div className="first-container w-full">
      <div className="heading-container px-6">
        <h2 className='text-[36px] font-semibold'>Discover New <br /></h2>
        <div className="inner-heading flex mb-[20px]">
          <h2 className='text-[36px] font-semibold'>Collection</h2>
          <img src="/icon sun frame.svg" alt="" className="w-8 h-8"/>
        </div>

        <div className="heading-second-container flex">
          <div className="line-container mt-[1px]">
            <img src="/Line 1.svg" alt="" className='mt-[8px] px-1'/>
          </div>
          <div className="text-container w-[180px]">
            <p className='text-[14px] font-medium leading-[125%]'>Fashion is part of the daily air and it changes all the time, with all the events.</p>
          </div>
        </div>

        <div className="heading-second-container flex justify-between mt-[20px]">
          <div className="line-container mt-[1px]">
            <h3 className='text-[#181818] text-[24px] font-medium'>#01</h3>
          </div>
          <div className="text-container w-[180px] flex justify-center">
            <button className='bg-[#FCBD01] shadow-[0px_4px_20px_0px_#FCBD0166] text-[#181818] rounded-[8px] w-[140px] h-[40px] text-xs'>Start Shopping <img src="/Vector.png" alt="" className="inline ml-1 w-2 h-2" /></button>
          </div>
          <div className="img-container">
            <img src="/Vector.svg" alt="" className="w-[50%]"/>
          </div>
        </div>

        <div className="heading-second-container flex justify-between mt-[20px]">
          <div className="img-container flex flex-col justify-center">
            <img src="/Group 4.png" alt="" className="w-full"/>
          </div>
          <div className="img-container">
            <img src="/Group 13.png" alt="" className="w-12 h-12"/>
          </div>
        </div>
      </div>
    </div>

        <div className="second-container w-full px-6 mb-8">
      <div className="first-img-container flex justify-end px-2 hidden">
        <img src="/Shape(1).svg" alt="" className="w-6 h-6"/>
        <img src="/Shape.svg" alt="" className="w-6 h-6"/>
      </div>
       <div className="second-container-img flex justify-end mt-[122px] hidden">
        <img src="/Group 1.png" alt="" className='w-[52px] h-[209px]' />
      </div>
    </div>


  </main>
);

export default Home;