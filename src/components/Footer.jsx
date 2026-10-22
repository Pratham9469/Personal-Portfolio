import React from 'react'
import Pixel from '../components/Pixel'
import { Copyright, Dot } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#0D0E10] min-h-[16vh] px-4 sm:px-12 md:px-20 py-8 border-t-2 border-gray-800 mt-5 flex flex-row justify-between items-center gap-4 overflow-hidden'>

        {/* Left Side: Original stacked column design (Name on top, Copyright below) */}
        <div className='flex flex-col items-start gap-1 sm:gap-2 min-w-0'>
          <h1 className='contact7 uppercase text-lg sm:text-[26px] font-bold text-[#E3E2E5] whitespace-nowrap'>
            Pratham seth
          </h1>

          <div>
            <h3 className='contact8 flex flex-nowrap whitespace-nowrap text-[#8E90A0] uppercase text-[9px] xs:text-[10px] sm:text-[18px] font-medium items-center gap-1 sm:gap-3 tracking-wider'>
              <span className='flex items-center gap-1'>
                <Copyright size={12} className="w-2.5 h-2.5 sm:w-4 sm:h-4 shrink-0" /> 2026 Pratham seth
              </span>
              <span><Dot className="scale-75 sm:scale-100" /></span>
              <span>Software Developer</span>
            </h3>
          </div>
        </div>

        {/* Right Side: Pixel Eye - Cleanly scaled & contained on mobile, 100% exact original on laptop */}
        <div className='shrink-0 flex justify-center items-center w-14 h-14 sm:w-auto sm:h-auto overflow-hidden'>
          <div className='scale-50 sm:scale-100 transform origin-center flex items-center justify-center'>
            <Pixel />
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer