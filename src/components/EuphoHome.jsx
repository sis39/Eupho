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
import { useEffect } from 'react';
import { Link } from "react-scroll";
import {  Nav } from "react-bootstrap";

const EuphoHome = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className='bg-coffeeMenu'>
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
      <div className="relative z-30 ">
          <Navbar />
        </div>
        <video className='absolute left-0 top-0 w-full h-full object-cover z-10' autoPlay loop muted>
          <source src={HomeVideo} type='video/mp4' />
        </video>
        <div className='absolute z-20 inset-0  flex flex-col items-center justify-center pt-28'>
           <div className='flex flex-col gap-5 justify-center items-center' >
               <div>
                <span className='text-textColor text-7xl ' style={{ fontFamily: 'Gambetta' }}>Exquisite Bites</span>
               </div>
               <div>
                <span className='text-textColor text-5xl font-thin'>Embark on a Journey Through Timeless Flavors</span>
               </div>
               <div className='cursor-pointer pt-10'>
               
          
             
                <span className='text-textColor   text-center'>	&#10209;&nbsp;&nbsp;&nbsp;</span>
                <Nav.Link as={Link} to="menu"  >
                <span className='text-textColor md:text-2xl text:xl' style={{ fontFamily: 'Gambetta' }}>MENU</span>
                </Nav.Link>
                <span className='text-textColor mb-1 ml-1 mr-1 text-center'>&nbsp;&nbsp;&nbsp;&#10209;</span>
              
            </div>
          

           </div>

        </div>
        

       
      </div>

      <section className='md:py-52 py-32 concept'>
        <Concept  />
      </section>
      <section className='md:py-24 py-32 relative'>
        <Inspiration />
      </section>
      <section className='md:py-32 py-32 relative'>
        <Flavours />
      </section>
      <section className='menu'>
        <Menu />
      </section>
      <section className='md:pt-52 reservation'>
        <Reservation />
      </section>
      <section className='contact'>
        <Contact/>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default EuphoHome;