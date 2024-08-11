import React from 'react'
import { Helmet } from 'react-helmet';
import { IoIosArrowRoundForward } from "react-icons/io";
const H = () => {
  return (
    <div>
        <Helmet>
        <style>{`
          @font-face {
            font-family: 'Gambetta';
            src: url('../../fonts/Gambetta-Light.woff2') format('woff2'),
                 url('../../fonts/Gambetta-Light.woff') format('woff');
            font-weight: 300;
            font-style: normal;
          }
          @font-face {
            font-family: 'GambettaBold';
            src: url('../../fonts/Gambetta-Bold.woff2') format('woff2'),
                 url('../../fonts/Gambetta-Bold.woff') format('woff');
            font-weight: 700;
          }
        `}</style>
      </Helmet> 
      <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
      `}
</style>
      <div className='md:pl-28'>
        
              <h1 className='text-textColor md:text-9xl text-6xl' style={{ fontFamily: 'Gambetta' }}>CONTACT</h1>
              
              <div class="flex py-36">
                 <div className='flex items-start '>
                  <div className='-rotate-90 whitespace-nowrap pt-14 pr-2'>
                  <span  className=' pt-28  text-secondtextColor ' style={{ fontFamily: 'Lora, serif' }}>Get In Touch</span>
                  </div>
                   
                     <div className='flex flex-col z-10  gap-3 '>
                        <h1 className='text-textColor md:text-4xl' style={{ fontFamily: 'Gambetta' }}>+91 9638527410</h1>
                        <h1 className='text-textColor md:text-4xl' style={{ fontFamily: 'Gambetta' }}>Eupho_happyResturant@gmail.com</h1>
                     </div>
                 </div>
                 <div className='flex pl-20 pt-3'>
                  <div className='-rotate-90 whitespace-nowrap pt-7 h-10 pr-8'>
                  <span className='  text-secondtextColor h-full pt-20  ' style={{ fontFamily: 'Lora, serif' }}>Find Us</span>
                  </div>
                    
                    <div className='flex  ' width={'500'}>
                         <h1 className='text-textColor md:text-4xl w-72' style={{ fontFamily: 'Gambetta' }}>51 Circular Road chennai 600096</h1>
                         
                          
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.4" stroke="#e3dac6" className='w-20 cursor-pointer animate-bounce-horizontally'>
                               <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                         </svg>
                         
                         
                         


                    </div>
                 </div>
              </div>
      </div>
       
    </div>
  )
}

export default H