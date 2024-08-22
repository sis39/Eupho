import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flavourss, Flavours2, Mirchi } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Flavours = () => {
  const { scrollYProgress } = useScroll();

  const xPastPresent = useTransform(scrollYProgress, [0, 1], ['-45vw', '100vw']);
  const xFlavoursSpices = useTransform(scrollYProgress, [0, 1], ['80vw', '-100vw']);

  useEffect(() => {
    const elements = document.querySelectorAll(".Concepts");
    const elements1 = document.querySelectorAll(".Image2");

    elements.forEach((element) => {
      gsap.to(element, {
        y: (index, target) => -target.getBoundingClientRect().height,
        scrollTrigger: {
          trigger: element,
          start: "top bottom", // Start when the top of the element hits the bottom of the viewport
          end: "bottom top",   // End when the bottom of the element hits the top of the viewport
          scrub: true,
        },
      });
    });

    elements1.forEach((element) => {
      gsap.to(element, {
        y: (index, target) => -target.getBoundingClientRect().height,
        scrollTrigger: {
          trigger: element,
          start: "top 10%", // Start this element slightly after the first one
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

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
        <div className='h-32 absolute -top-80 -right-0'>
          <img src={Mirchi} className='h-96' alt="Mirchi" />
        </div>
        <div className='flex flex-wrap flex-col'>
          <div className='flex flex-wrap flex-col'>
            <motion.span
              className='opacity-40 text-textColor md:text-9xl text-3xl'
              style={{ fontFamily: 'Gambetta', x: xPastPresent }}
            >
              PAST & PRESENT
            </motion.span>
            <motion.span
              className='opacity-40 text-textColor text-3xl md:text-9xl z-20'
              style={{ fontFamily: 'Gambetta', x: xFlavoursSpices }}
            >
              FLAVOURS & SPICES
            </motion.span>
          </div>
          <div className='md:h-[700px] h-[700px] w-full flex flex-row'>
            <div className='Concepts pl-4 lg:pl-24 flex flex-col lg:pt-96 pt-96 z-10 w-6/12'>
              <img src={Flavourss} className='md:w-[400px] w-[270px] md:h-[600px] h-[500px]' alt="Flavours" />
              <div  className='pl-2 md:w-[250px] w-36'>
                <p className='text-textColor text-xl pt-10' style={{ fontFamily: "Gambetta" }}>
                  Eupho draws inspiration from Kerala’s vibrant beachside, a historic hub for regional spice trading.
                </p>
                <p className='text-textColor text-xl pt-10' style={{ fontFamily: "Gambetta" }}>
                  Breaking boundaries, we delve into the rich heritage of spices along ancient maritime routes, blending time-honored traditions with contemporary culinary techniques.
                </p>
              </div>
            </div>
            <div className='Image2 pt-96 pl-5 lg:pl-24 xl:pl-64 flex flex-col w-6/12' >
              <img src={Flavours2} className='md:w-[400px] w-[270px] md:h-[600px] h-[500px]' alt="Flavours 2" />
              <div className='pl-2 md:w-[250px] w-36'>
                <p className='text-textColor text-xl pt-10' style={{ fontFamily: "Gambetta" }}>
                  Eupho invites diners to experience the joy of communal dining, capturing the essence of Kerala’s vibrant culture and rich culinary heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flavours;
