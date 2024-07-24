import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ConceptImg, Coriander, Flower, Onion } from '../utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Concept = () => {
  useEffect(() => {
    gsap.to(".Concept", {
      y: -600,
      duration: 3,
      scrollTrigger: {
        trigger: ".Concept",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.to(".Onion", {
      rotate: -90,
      x: 20,
      y: -20,
      duration: 3,
      scrollTrigger: {
        trigger: ".Onion",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.to(".Coriander", {
      y: -100,
      duration: 3,
      scrollTrigger: {
        trigger: ".Coriander",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.to(".Flower", {
      y: -300,
      duration: 3,
      scrollTrigger: {
        trigger: ".Flower",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
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
              height: 300px;
            }
          }

          @media (max-width: 480px) {
            .Concept {
              height: 300px;
            }
          }

          body {
            overflow-x: hidden;
          }
        `}</style>
      </Helmet>
      <div className='md:px-28 relative'>
        <div className='md:ml-auto md:mr-auto'>
          <div className='md:mr-auto relative'>
            <div className='md:mb-16 md:pl-10 pl-2 relative md:z-10 z-10 mb-6'>
              <h2>
                <span style={{ fontFamily: 'Gambetta', fontWeight: 300 }} className='md:text-9xl text-6xl text-textColor relative'>CONCEPT</span>
              </h2>
            </div>
            <img src={ConceptImg} className='Concept absolute z-10 md:left-[60%] left-36 top-40' />
            <img src={Onion} className='Onion md:-top-96 absolute z-20 -top-40 right-60 md:left-0 h-44 md:h-full' />
            <img src={Coriander} className='Coriander absolute z-0 top-96 h-44 md:h-full' />
            <img src={Flower} className='Flower absolute z-20 md:left-[80%] bottom-0 h-28 left-48 md:h-80' />
            <p style={{ fontFamily: 'Gambetta', fontWeight: 300 }} className='md:text-6xl text-2xl text-textColor z-20 md:pr-96 pt-14 relative pr-10'>
              Discover South India's coastal flavors and spices at Eupho. Nestled beachside, experience the Maritime Silk Route's culinary traditions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concept;
