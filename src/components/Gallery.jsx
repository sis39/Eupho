import React, { useRef } from 'react';

import { GALLERY } from '../utils/index1';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { motion, useTransform, useScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoArrowBackOutline } from "react-icons/io5";
import {  logo } from '../utils';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
import './Gallery.css';

const Gallery = () => {
  const navigate = useNavigate();
  const homeClick =()=>{
    navigate('/'); 
  }

    
  const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

    return (
      <div ref={targetRef} className='relative h-[200vh] '>

        <div className='sticky  top-10 flex items-center overflow-x-hidden'>
          <motion.div
            style={{ x }}
            className='flex space-x-4'
          >
            {GALLERY.map((gallery, index) => (
              <div
                key={index}
                className='flex flex-col items-center gap-1 w-64 '
              >
                <motion.img
                  src={gallery.Image}
                  className='rounded-lg w-full h-96'
                  alt={gallery.title}
                />
                <motion.span className='text-textColor text-xl font-sans text-center mt-2'>
                  {gallery.title}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    );
  };

  return (
    <>
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
            font-style: normal;
          }
        `}</style>
      </Helmet>
      <div className='bg-black '>
        <div className=' flex h-72 items-center justify-between  px-10 '>
        <div className='text-textColor ' ><IoArrowBackOutline className='h-14 w-14 cursor-pointer ' onClick={homeClick} /></div>
        <div className='h-72 w-72 flex-1 flex justify-center '>
            <img src={logo} className='h-full w-full object-contain' alt='Logo' />
          </div>
          <div className='h-52 w-52'>

          </div>
        </div>
        <div className='flex flex-col items-center justify-center pr-10 py-10'>
          <span className='text-textColor text-7xl text-center' style={{ fontFamily: 'Gambetta' }}>Gallery</span>
          <div className='border-t-2 border-textColor w-16'></div>
        </div>
        <HorizontalScrollCarousel />
       
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
