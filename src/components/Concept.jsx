import { useEffect, useLayoutEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { ConceptImg, Coriander, Flower, Onion } from '../utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {motion} from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Concept = () => {
  const container = useRef(null);
  const conceptRef = useRef(null);
  const corianderRef = useRef(null);
  const OnionRef = useRef(null);
  const flowerRef = useRef(null);
  useLayoutEffect(()=>{
    const context = gsap.context( () => {
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: container.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
          },
      })
      .to(conceptRef,{y:-400},0)
      .to(corianderRef.current,{y:-200},0)
      .to(flowerRef.current,{y:300},0)
      .to(OnionRef.current,{
        x: gsap.utils.random(-20, 20, true), 
        y: gsap.utils.random(-30, 30, true), 
        rotation: gsap.utils.random(-45, 45, true), 
        
      }, 0)
  })
  return ()=>context.revert();
},[])
useEffect(()=>{
  window.scrollTo(0, 0);
},[]);
useEffect(() => {
  const elements = document.querySelectorAll(".Concept");


  elements.forEach(element => {
    gsap.to(element, {
      y: (index, target) => -target.getBoundingClientRect().height, 
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
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

          .Concept {
            height: 600px;
          }

          @media (max-width: 768px) {
            .Concept {
              height: 500px;
            }
          }

          @media  (max-width: 480px) {
  .Concept {
    height: 300px;
    padding-left: 30px;
  }
}


             @media (max-width: 1024px) and (min-width: 481px) {
            .Concept {
              height: 600px;
               padding-left: 30px;
            }

          }
            

          body {
            overflow-x: hidden;
          }
        `}</style>
      </Helmet>
      <div className='md:px-16 relative bg-coffeeMenu'>
        <div className='md:ml-auto md:mr-auto'>
          <div className='md:mr-auto relative' ref={container}>
            <div className='md:mb-16 md:pl-4 pl-2 relative  z-20 mb-6'>
              <h2>
                <span style={{ fontFamily: 'Gambetta', fontWeight: 300 }} className='md:text-9xl sm:text-6xl text-5xl text-textColor relative'>CONCEPT</span>
              </h2>
            </div>
            <img src={ConceptImg} ref={conceptRef} className='Concept absolute z-10 md:left-[55%]  left-32 top-80 ' />
            <img src={Onion} ref={OnionRef} className='Onion  md:-top-72 absolute z-20 -top-40 right-60 left-5 md:-left-11 h-44 md:h-60' />
            <img src={Coriander} ref={corianderRef} className='Coriander absolute z-0 top-96 h-44 md:h-56' />
            <img src={Flower} ref={flowerRef} className='Flower absolute z-20 md:left-[80%] bottom-0 h-28 left-48 md:h-80' />
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}} 
            transition={{delay:0.3}}
            style={{ fontFamily: 'Gambetta', fontWeight: 300 }} className='flex  md:text-5xl text-2xl text-textColor z-20 md:pr-10 pt-14 relative pr-10'>
              Discover South India's coastal flavors and spices at Eupho. Nestled beachside, experience the Maritime Silk Route's culinary traditions.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concept;
