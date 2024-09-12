import { useEffect, useLayoutEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { beverageImg, deliciousFood, dessertsImg, Flower2, soupImg, wineBottleImg } from '../utils';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
    const navigate = useNavigate();
    const container = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const image4 = useRef(null);
    const image5 = useRef(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLinkClick = (path) => {
        navigate(path);
    };

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
            .to(image5.current, { y: -100 }, 0)
            .to(image1.current, { y: -200 }, 0)
            .to(image2.current, { y: -300 }, 0)
            .to(image3.current,{y:-200},0)
            .to(image4.current,{y:-400},0)
            
        }, container);
        
        return () => context.revert();
    }, []);

    useEffect(()=>{
        const elements = document.querySelectorAll(".flowerImg");
        elements.forEach((element)=>{
            gsap.to(element,{
                y: (index, target) => -target.getBoundingClientRect().height,
                scrollTrigger: {
                  trigger: element,
                  start: "bottom top", 
                  end: "top bottom",   
                  scrub: true,
                },
            });
        });
    
    },[]);

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
            <div>
                <div className="bg-coffeeMenu px-2  md:px-20 lg:px-28">
                    <div className='-left-11 top-0'>
                        <img src={Flower2} className='flowerImg md:h-80 sm:h-72 h-52'/>
                    </div>
                    
                    <h2>
                        <span style={{ fontFamily: 'Gambetta', fontWeight: 300 }} className='md:text-9xl sm:text-6xl text-5xl text-textColor relative'>MENU</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-4 lg:gap-5  relative" ref={container}>
                        <div className="relative pt-10">
                            <img
                                ref={image5}
                                src={deliciousFood} style={{ width: 350, height: 500 }} alt="Delicious Food"  />
<svg 
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-36 w-72 left-1 sm:left-5 md:top-32 md:left-0 lg:top-36 lg:left-0  lg:w-56 xl:w-72 xl:left-5 xl:top-36 h-auto animate-spin-slow"
>
    <defs>
        <path id="circlePath" d="M 150, 150
            m -120, 0
            a 120,120 0 1,1 240,0
            a 120,120 0 1,1 -240,0" />
    </defs>
    <text fontFamily="Arial" fontSize="34" fill="#dcd2c1" className="font-thin ">
        <textPath href="#circlePath" startOffset="0">
            <tspan dx="28">FOOD</tspan>
            <tspan dx="28">&#9826;</tspan>
            <tspan dx="28">FOOD</tspan>
            <tspan dx="28">&#9826;</tspan>
            <tspan dx="28">FOOD</tspan>
            <tspan dx="28">&#9826;</tspan>
            <tspan dx="28">FOOD</tspan>
            <tspan dx="28">&#9826;</tspan>
           
        </textPath>
    </text>
</svg>

                        </div>
                        <div className="relative pt-20"  ref={image1}>
                            <img
                               
                                src={beverageImg} style={{ width: 350, height: 500 }} alt="Beverage" />
                            <svg
                               
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-36 w-72 left-1 sm:left-6 md:top-44 md:left-0 lg:top-56 lg:left-0 lg:w-56  xl:w-72 xl:left-5 xl:top-52 h-auto animate-spin-slow"
                                
                            >
                                <defs>
                                    <path id="circlePath" d="M 150, 150
                                        m -120, 0
                                        a 120,120 0 1,1 240,0
                                        a 120,120 0 1,1 -240,0" />
                                </defs>
                                <text fontFamily="Arial" fontSize="34" fill="#dcd2c1" className='font-thin'>
                                    <textPath href="#circlePath" startOffset="0">
                                        <tspan dx="28">BEVERAGES</tspan>
                                        <tspan dx="28">&#9826;</tspan>
                                        <tspan dx="28">BEVERAGES</tspan>
                                        <tspan dx="28">&#9826;</tspan>
                                        <tspan dx="28" dy="30" fontSize="120" className='pt-5 font-thin'>&#8994;</tspan>
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className='relative pt-28 'ref={image2}>
                            <img
                                
                                src={dessertsImg} style={{ width: 350, height: 500 }} alt="Desserts"  />
                            <svg
                               
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-36 w-72 left-1 sm:left-6  md:top-56 md:left-0 lg:top-60 lg:left-0 lg:w-56 xl:w-72 xl:left-5 xl:top-60h-auto animate-spin-slow"
                            >
                                <defs>
                                    <path id="circlePath" d="M 150, 150
                                        m -120, 0
                                        a 120,120 0 1,1 240,0
                                        a 120,120 0 1,1 -240,0" />
                                </defs>
                                <text fontFamily="Arial" fontSize="34" fill="#dcd2c1" className='font-thin'>
                                    <textPath href="#circlePath" startOffset="0">
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">DESSERTS</tspan>
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">DESSERTS</tspan>
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">DESSERTS</tspan>
                                        <tspan dx="28" dy="30" fontSize="120" className='pt-5 font-thin'>&#8994;</tspan>
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className='relative pt-28 md:pt-12'ref={image3}>
                            <img
                               
                                src={soupImg} style={{ width: 350, height: 500 }} alt="Soups" />
                            <svg
                               
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                               className="absolute top-36 w-72 left-1 sm:left-6 md:top-40 md:left-0 lg:top-52 lg:left-0 lg:w-56 xl:w-72 xl:left-5 xl:top-36 h-auto animate-spin-slow"
                            >
                                <defs>
                                    <path id="circlePath" d="M 150, 150
                                        m -120, 0
                                        a 120,120 0 1,1 240,0
                                        a 120,120 0 1,1 -240,0" />
                                </defs>
                                <text fontFamily="Arial" fontSize="34" fill="#dcd2c1" className='font-thin'>
                                    <textPath href="#circlePath" startOffset="0">
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">SOUPS</tspan>
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">SOUPS</tspan>
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">SOUPS</tspan>
                                        <tspan dx="28" dy="30" fontSize="120" className='pt-5 font-thin'>&#8994;</tspan>
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <div className='relative pt-72 md:pt-52' ref={image4}>
                            <img
                                
                                src={wineBottleImg} style={{ width: 350, height: 500 }} alt="Wine" />
                            <svg
                               
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                               className="absolute top-36 w-72 left-1 sm:left-6 md:top-0 md:left-0 lg:top-16 lg:left-0 lg:w-56 xl:w-72 xl:left-5 xl:top-9 h-auto animate-spin-slow"
                                style={{top:350}}
                            >
                                <defs>
                                    <path id="circlePath" d="M 150, 150
                                        m -120, 0
                                        a 120,120 0 1,1 240,0
                                        a 120,120 0 1,1 -240,0" />
                                </defs>
                                <text fontFamily="Arial" fontSize="34" fill="#dcd2c1" className='font-thin'>
                                    <textPath href="#circlePath" startOffset="0">
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">WINE</tspan>
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">WINE</tspan>
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="28">WINE</tspan>
                                        <tspan dx="30">&#9826;</tspan>
                                        <tspan dx="30" dy="30" fontSize="120" className='pt-5 font-thin'>&#8994;</tspan>
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
