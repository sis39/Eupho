import Navbar from './Navbar'
import Footer from './Footer'
import { aboutPic } from '../utils'
import { chefImgs } from '../utils'
import { motion } from "framer-motion";
import { useEffect } from 'react';
const AboutComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar className="absolute top-0 left-0 w-full bg-black " />
      <div>
      <div className='h-screen bg-aboutColor '>
        <div className='h-full w-full flex'>
          <div className='h-full w-1/2 mt-64' >
          
          <div className="flex flex-col text-black font-light ml-12">
        
        <motion.h2
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}} 
         transition={{duration:0.5}}
        className="text-5xl font-semibold tracking-lightest font-mono" height={80}>ABOUT US</motion.h2>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}} 
        transition={{duration:1}}
        
        className="pt-3 font-thin">Meet the talented chefs and hospitality professionals of Eupho, situated on the beautiful Kerala beachside. Our team is dedicated to crafting exceptional South Indian dishes alongside classic Australian and Italian cuisine, all complemented by a selection of fine wines. Together, we invite you to savor the diverse flavors and warm hospitality that define Eupho.</motion.p>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}} 
        transition={{duration:1.2}}
        className="pt-3 font-thin">Inspired by Kerala's coastline, Eupho exudes natural elegance with lush coconut groves and stunning sea views. The tranquil setting, warm lighting, and tasteful decor create an inviting atmosphere, perfect for enjoying a diverse culinary journey</motion.p>
          </div>
          
          
          
          </div>
          <div className='h-full w-1/2' >
          <img src={aboutPic}  className='h-full w-full'/>
          </div>
          </div>
          </div>
      <div className='h-screen bg-chefColor'>
      <div className='h-full w-full flex'>
          
          <div className='h-full w-1/2' >
          <img src={chefImgs}  className='h-full w-full'/>
          </div>
          <div className='h-full w-1/2 mt-64' >
          
          <div className="flex flex-col text-black font-light ml-12">
        
        <motion.h2
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}} 
        transition={{duration:0.5}}
        className="text-5xl font-semibold tracking-widest font-mono" height={80}>MEET THE TEAM</motion.h2>
        <motion.p
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}} 
         transition={{duration:1.0}}
        className="pt-3 font-thin">Meet the talented chefs and hospitality professionals of Eupho, each committed to crafting exceptional dishes and providing warm, personalized service. Together, we invite you to savor the essence of Kerala's coastal flavors with every visit.</motion.p>
        <motion.a 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}} 
        transition={{duration:1.2}}
        className="border-2 border-black w-[30%] pl-10 mt-4 py-2  hover:bg-black hover:text-white"
      
      >MEET THE TEAM</motion.a>
          </div>
          
          
          
          </div>
          </div>
      </div>    
      
      </div>
      <Footer/>
    </div>
  )
}

export default AboutComp
