import { event } from "../utils"
import { motion } from "framer-motion";
import { useEffect } from "react";
const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='h-screen bg-chef relative'>
        <div className='h-full w-full flex' >
      
        <div className="h-full w-1/2 ">
      <img src={event} className="h-full w-full" />
      </div>
      
      <div className=" h-full w-1/2 mt-64 ">
      <div className="flex flex-col text-myColor font-light ml-12">
        
      <h2 className="text-5xl font-semibold tracking-lightest font-mono" height={80}>EVENTS</h2>
      <p className="pt-3">Celebrate at one of India's top beachside restaurants, with breathtaking coastal views. From intimate dinners in our Private Dining Room to leisurely lunches on the beachfront terrace, Eupho offers an unparalleled dining experience. Enjoy the soothing waves and stunning sunsets, making every moment unforgettable.</p>

      <motion.a className="border-2 border-black w-[30%] pl-14 mt-4 py-2  hover:bg-black hover:text-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      >BOOK NOW</motion.a>
      </div>
         
      </div>
      
     

      </div>
      
    </div>
  )
}

export default Events
