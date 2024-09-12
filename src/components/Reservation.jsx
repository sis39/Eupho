import { Orange, Reservations } from "../utils";
import { Helmet } from "react-helmet";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import {motion} from 'framer-motion';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Leaf } from "../utils";
const Reservation = () => {
  const [hovered, setHovered] = useState(false);
  const container = useRef(null);
 const imageRef = useRef(null);
 useLayoutEffect(()=>{
      const context = gsap.context(()=>{
        const t1 = gsap.timeline({
          scrollTrigger: {
              trigger: container.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
          },
          })
          .to(imageRef.current,{y:-400},0)
      })
      return ()=> context.revert()
 },[])
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
//             @media (max-width:320px){
//             .reservationImg{
//             width:150px,
//             }
            
//             .size{
            
//             padding-left:8px
//             }
//             }
//            @media (min-width: 321px) and (max-width: 767px) {
  

//   .reservationImg {
//     padding-left: 40px;
//     padding-right: 180px;
//   }
//     .size{
//     padding-left:8px
//     }
    
// }
//     @media (min-width:1024px){
//     .reserve{
//       padding-top:144px
//     }
//     }
  

        `}</style>
      </Helmet>
      <div className=" md:px-16 md:pt-36 relative pt-8 sm:pt-20">
        <div ref={container}>
            
           <div className="imgContainer  md:pl-20 pt-28 flex flex-col sm:flex-col gap-44" > {/* style={{ height: 750,width:500 }} */}
            <img ref={imageRef}
               src={Reservations} 
              className="h-full reservationImg rounded-md overflow-hidden px-8 shadow-lg sm:h-auto md:w-[500px] z-10  "
            />
            
          </div>
          <motion.div
              className="flex flex-col  h-10 items-center  absolute top-96 sm:bottom-0 md:bottom-10 flex-wrap pl-5  lg:right-72 z-10 "
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <a style={{ fontFamily: 'Gambetta' }} className=" reserve text-2xl lg:bottom-1 md:text-3xl text-textColor cursor-pointer">
                CONTACT US TO RESERVE
              </a>
              <div className={`border-t-2 border-textColor rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full' : 'w-24'}`}></div>
              
            </motion.div>
          
          <div className="  right-0 bottom-32 lg:bottom-0 absolute">
                <img src={Orange} className="orange md:pl-96 h-60 z-0 md:h-full"/>
            </div>
          <div className="top-10 md:top-52  absolute">
            <h2 className="name md:pl-0 ">
              <span
               
                
                style={{ fontFamily: 'Gambetta', fontWeight: 300 }}
                className='size md:text-8xl text-4xl pl-6 sm:text-6xl md:pl-0 z-20 text-textColor relative'
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
