import { Orange, Reservations } from "../utils";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from 'framer-motion';
import { Leaf } from "../utils";
const Reservation = () => {
  const [hovered, setHovered] = useState(false);

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
      <div className="md:px-24 md:pt-36 relative">
        <div>
            
          <div className="pl-48 flex gap-44" style={{ height: 750 }}>
            <motion.img
              initial={{ opacity: 0, x: -500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.0}}
              viewport={{ once: true }}
              src={Reservations} 
              className="h-full"
            />
            <motion.div
              className="flex flex-col cursor-pointer h-10 items-center absolute top-96 right-72  pt-36"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <a style={{ fontFamily: 'Gambetta' }} className="text-2xl md:text-3xl text-textColor">
                CONTACT US TO RESERVE
              </a>
              <div className={`border-t-2 border-textColor rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-24'}`}></div>
              
            </motion.div>
          </div>
          <div className="right-0 bottom-0 absolute">
                <img src={Orange}/>
            </div>
          <div className="top-52  absolute">
            <h2 className="pl-28">
              <span
               
                
                style={{ fontFamily: 'Gambetta', fontWeight: 300 }}
                className='md:text-9xl text-6xl text-textColor relative'
              >
                RESERVATIONS
              </span>
            </h2>
          </div>
          <div className="-top-64 absolute">
                <img src={Leaf}/>
            </div>
            
        </div>
        
      </div>
    </>
  );
};

export default Reservation;
