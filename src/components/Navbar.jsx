import React, { useState, useRef, useEffect } from 'react';
import { logo, logo1 } from '../utils';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import {  Nav } from "react-bootstrap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOverlayRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuOverlayRef.current, { x: 0, duration: 0.5 });
      gsap.to(menuButtonRef.current, { rotate: 360, duration: 0.5 });
    } else {
      gsap.to(menuOverlayRef.current, { x: '100%', duration: 0.5 });
      gsap.to(menuButtonRef.current, { rotate: 0, duration: 0.3 });
    }
  }, [menuOpen]);

  return (
    <div className='px-10'>
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
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <button className='text-textColor' onClick={handleMenuToggle} aria-label='Toggle Menu'>
            <svg ref={menuButtonRef} viewBox='0 0 24 24' height={50} width={50} className='fill-none stroke-textColor'>
              <line x1="2" y1="6" x2="22" y2="6" strokeWidth="2" />
              <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
              <line x1="2" y1="18" x2="22" y2="18" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className='text-center pl-40'>
          <div className='h-72 w-72 mx-auto'>
            <img src={logo} className='h-full w-full object-contain' alt='Logo' />
          </div>
        </div>
        <div className='pr-8'>
          <button className='border-solid border-textColor border-2 px-3 py-2 rounded-2xl'>
            <span className='text-textColor'>MAKE A RESERVATION</span>
          </button>
        </div>
      </div>
      <div
        ref={menuOverlayRef}
        className='fixed inset-0 z-50 flex flex-col  bg-textColor'
        style={{ transform: 'translateX(100%)' }}
      >
        <div className='flex justify-between items-center w-full px-10'>
          <button className='text-coffeeMenu' onClick={handleMenuToggle} aria-label='Toggle Menu'>
            <svg viewBox='0 0 24 24' height={50} width={50} className='fill-none stroke-coffeeMenu'>
              <line x1="2" y1="2" x2="22" y2="22" strokeWidth="2" />
              <line x1="22" y1="2" x2="2" y2="22" strokeWidth="2" />
            </svg>
          </button>
          <div className='h-72 w-72 pl-4'>
            <img src={logo1} className='h-full w-full object-contain' alt='Logo' />
          </div>
          <motion.button
            className='border-solid border-coffeeMenu border-2 px-5 py-2 rounded-2xl text-coffeeMenu hover:text-textColor hover:border-textColor hover:bg-coffeeMenu'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className='text-sm tracking-widest'>MAKE A RESERVATION</span>
          </motion.button>
        </div>
        <nav className='flex-grow flex flex-col items-center justify-center top-0'>
          <ul className='flex flex-col items-center justify-center h-full '>
            <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='py-2'>
            <Nav.Link as={Link} to="concept" className='text-coffeeMenu text-7xl cursor-pointer' style={{ fontFamily: 'Gambetta', fontWeight: 300 }} onClick={handleMenuToggle}>
            CONCEPT
             </Nav.Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='py-2'>
            <Nav.Link as={Link} to="menu" className='text-coffeeMenu text-7xl cursor-pointer' style={{ fontFamily: 'Gambetta', fontWeight: 600 }} onClick={handleMenuToggle}>
            MENU
             </Nav.Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='py-2'>
              <a href='#gallery' className='text-coffeeMenu text-7xl' style={{ fontFamily: 'Gambetta', fontWeight: 300 }}>GALLERY</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='py-2'>
            <Nav.Link as={Link} to="reservation" className='text-coffeeMenu text-7xl cursor-pointer' style={{ fontFamily: 'Gambetta', fontWeight: 600 }} onClick={handleMenuToggle}>
            RESERVATIONS
             </Nav.Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }} className='py-2'>
            <Nav.Link as={Link} to="contact" className='text-coffeeMenu text-7xl cursor-pointer' style={{ fontFamily: 'Gambetta', fontWeight: 600 }} onClick={handleMenuToggle}>
            CONTACT
             </Nav.Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
