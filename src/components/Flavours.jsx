import React from 'react';
import { Helmet } from 'react-helmet';
import { Flavourss,Flavours2,Mirchi} from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';




const Flavours = () => {
  const { scrollYProgress } = useScroll();
  const xPastPresent = useTransform(scrollYProgress, [0, 1], ['-100vw', '100vw']);
  const xFlavoursSpices = useTransform(scrollYProgress, [0, 1], ['100vw', '-100vw']);
  const yImageDiv = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <>
      <Helmet>
        <style>{`
           @font-face {
            font-family: 'Gambetta';
            src: url('../../fonts/Gambetta-Light.woff2') format('woff2'),
                 url('../../fonts/Gambetta-Light.woff') format('woff');
            font-weight: 600;
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
      <div className='relative'>
        <div className='h-32 absolute  -top-80 -right-0'>
            <img src={Mirchi} className='h-96'/>
        </div>
        <div className='flex flex-col'>
            
          <motion.span
            className='opacity-40 text-textColor text-9xl'
            style={{ fontFamily: 'Gambetta', x: xPastPresent }}
          >
            PAST & PRESENT
          </motion.span>
          <motion.span
            className='opacity-40 text-textColor text-9xl z-20'
            style={{ fontFamily: 'Gambetta', x: xFlavoursSpices }}
          >
            FLAVOURS & SPICES
          </motion.span>
          <div className='h-full w-full flex'>
            <motion.div className='pl-24 flex flex-col relative pt-96 z-10'
            style={{ height: 1000, width: 500,y:yImageDiv }}>
            <img src={Flavourss} className='w-full' style={{ height: 600,width:500 }} />
            <div style={{width:250}} className='pl-2'>
            <p className='text-textColor text-xl pt-10' style={{ fontFamily: "Gambetta" }}>
              Eupho draws inspiration from Kerala’s vibrant beachside, a historic hub for regional spice trading.
            </p>
            <p className='text-textColor text-xl pt-10' style={{ fontFamily: "Gambetta" }}>
              Breaking boundaries, we delve into the rich heritage of spices along ancient maritime routes, blending time-honored traditions with contemporary culinary techniques.
            </p>
            </div>
            
            </motion.div>
            <div className='pl-96 pt-48 flex flex-col'style={{width:800}}>
                  <img src={Flavours2} style={{height:600, width:400}} className='left'/>
                  <p className='text-textColor text-xl pt-10' style={{ fontFamily: "Gambetta" }}>Eupho invites diners to experience the joy of communal dining, capturing the essence of Kerala’s vibrant culture and rich culinary heritage.






</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Flavours;
