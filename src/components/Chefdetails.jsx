
import { chef } from '../utils'
import { motion } from "framer-motion";
import { useEffect } from 'react';
const Chefdetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='h-screen bg-chef relative'>
        <div className='h-full w-full flex' >
      
        <div className="h-full w-1/2 ">
      <img src={chef} className="h-full w-full" />
      </div>
      
      <div className=" h-full w-1/2 mt-64 ">
      <div className="flex flex-col text-myColor font-light ml-12">
        
      <h2 className="text-5xl font-semibold trackin-lightest font-mono" height={80}>EUPHO'S CULINARY TEAM </h2>
      <p className="pt-3">At Eupho, our chefs are inspired by nature's diversity and driven by culinary innovation. Each chef brings unique expertise, collaborating to craft exceptional and memorable dining experiences marked by creativity and excellence</p>

      <motion.a className="border-2 border-black w-[30%] pl-14 mt-4 py-2  hover:bg-black hover:text-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      >READ  MORE</motion.a>
      </div>
         
      </div>
      
     

      </div>
      
    </div>
  )
}

export default Chefdetails
