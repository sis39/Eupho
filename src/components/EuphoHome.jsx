import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import { HomeVideo } from '../utils';
import Concept from './Concept';
import Inspiration from './Inspiration';
import Flavours from './Flavours';
import Menu from "./Menu";
import Reservation from './Reservation';
import Contact from "./Contact";
import Footer from "./Footer";
import { Link } from "react-scroll";
import {motion} from "framer-motion";
import './EuphoHome.css';

const EuphoHome = () => {
  const line1 =["Exquisite", "Bites"];
  const line =["Embark", "on", "a", "Journey", "Through", "Timeless", "Flavors"];
  const visible2 = 'hidden';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-coffeeMenu euphoclass'>
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
      
      <div className='h-screen relative'>
        <div className="relative z-30">
          <Navbar visible2={visible2}/>
        </div>
        <video className='absolute left-0 top-0 md:w-full md:h-full sm:w-full sm:h-full h-full w-full object-cover z-10' autoPlay loop muted>
          <source src={HomeVideo} type='video/mp4' />
        </video>
        <div className='absolute z-20 inset-0 flex flex-col items-center justify-center pt-28'>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='w-full flex flex-wrap justify-center' >
              {
                line1.map((word,i)=>(
                  <motion.span 
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{delay:0.2*i,duration:1}}
                  className='text-textColor text-7xl mr-2' style={{ fontFamily: 'Gambetta' }}>{word}</motion.span>
                ))
              }
            </div>
            <div className='w-full flex flex-wrap justify-center'>
  {line.map((word, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 * i, duration: 2 }}
      className='text-textColor text-3xl sm:text-4xl md:text-5xl font-thin sm:mr-3 md:mr-4 mr-2'
    >
      {word}
    </motion.span>
  ))}
</div>

            <div className='cursor-pointer pt-10'>
              <span className='text-textColor text-center'>&#10209;&nbsp;&nbsp;&nbsp;</span>
              <Link to="menu" smooth={true} duration={500}>
                <span className='text-textColor md:text-2xl text-xl' style={{ fontFamily: 'Gambetta' }}>MENU</span>
              </Link>
              <span className='text-textColor mb-1 ml-1 mr-1 text-center'>&nbsp;&nbsp;&nbsp;&#10209;</span>
            </div>
          </div>
        </div>
      </div>

      <section className='concept md:py-52 sm:py-32 py-20'>
        <Concept />
      </section>
      <section className='md:py-24 sm:py-32 py-20 relative'>
        <Inspiration />
      </section>
      <section className=' relative'>
        <Flavours />
      </section>
      <section className='menu'>
        <Menu />
      </section>
      <section className='md:pt-52 reservation'>
        <Reservation />
      </section>
      <section className='contact'>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
      </div>
  );
};

export default EuphoHome;
