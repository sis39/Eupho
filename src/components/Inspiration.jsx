import { Helmet } from "react-helmet";
import { Recipe, Fruits } from "../utils";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const Inspiration = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let masks = document.querySelectorAll(".mask");

    masks.forEach( mask => {
      let image = mask.querySelector('img');
  
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: mask,
              toggleActions: "restart none restart reset"
          }
      });

      tl.set(mask, { autoAlpha: 1 });
      tl.from(mask, 1.5, {
        xPercent: 0,
        ease: "Power2.easeOut"
      });
      tl.from(image, 1.5, {
        xPercent:0,
        scale: 1.3,
        delay: -1.5,
        ease: "Power2.easeOut"
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
        `}</style>
      </Helmet>
      <div className=' text-textColor'>
        <div className="ml-auto mr-auto box-border">
          <div className="px-4 md:px-24">
            <h2 className="flex flex-col md:flex-row md:items-center">
              <span className="block text-2xl md:text-4xl md:pl-5" style={{ fontFamily: 'Gambetta' }}>ORIGINS</span>
              <span className="block text-2xl md:text-4xl md:pl-5" style={{ fontFamily: 'Gambetta' }}>AND</span>
              <span className="block text-2xl md:text-4xl md:pl-5" style={{ fontFamily: 'Gambetta' }}>INSPIRATIONS</span>
            </h2>
          </div>
             <div className="container flex pt-12 pl-4 ">
              <div className="gap-6 flex " >
              <div className="mask">
              <img src={Fruits} className="h-48 md:h-96 rounded-lg" />
              </div>
              <div className="mask">
              <img src={Recipe} className="h-48 md:h-96 rounded-lg" />

              </div>
              </div>
              
           
            <motion.div 
              className="flex flex-col  cursor-pointer mt-4 md:mt-4 md:ml-4 h-9"
              onHoverStart={() => setHovered(true)} 
              onHoverEnd={() => setHovered(false)}
            >
              <a style={{ fontFamily: 'Gambetta' }} className="text-2xl md:text-3xl">VIEW GALLERY</a>
              <div className={`border-t-2 border-textColor rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-24'}`}></div>
            </motion.div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Inspiration;