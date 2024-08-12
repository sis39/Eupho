import React, { useRef } from 'react';
import Navbar from './Navbar';
import { GALLERY } from '../utils/index1';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { motion, useTransform, useScroll } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import './Gallery.css';

const Gallery = () => {
    const visible = 'hidden';
    
  const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
      <section ref={targetRef} className='relative h-[300vh]'>
        <div className='sticky top-0 flex items-center overflow-hidden'>
          <motion.div
            style={{ x }}
            className='flex space-x-4'
          >
            {GALLERY.map((gallery, index) => (
              <div
                key={index}
                className='flex flex-col items-center gap-1 w-64'
              >
                <motion.img
                  src={gallery.Image}
                  className='rounded-lg w-full h-auto'
                  alt={gallery.title}
                />
                <motion.span className='text-textColor text-xl font-sans text-center mt-2'>
                  {gallery.title}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
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
      <div className='bg-black overflow-x-hidden'>
        <Navbar visible={visible} />
        <div className='flex flex-col items-center justify-center pr-8 py-10'>
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
