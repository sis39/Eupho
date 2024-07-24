import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { beverageImg, deliciousFood, dessertsImg, Flower2, soupImg, wineBottleImg } from '../utils';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Menu = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLinkClick = (path) => {
        navigate(path);
    };

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
                <div className="bg-coffeeMenu px-32">
                    <div className='-left-11t-0'>
                    <img src={Flower2} className='h-80'/>
                    </div>
                    
                    <h2>
                        <span style={{ fontFamily: 'Gambetta', fontWeight: 300 }} className='md:text-9xl text-6xl text-textColor relative'>MENU</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                src={deliciousFood} style={{ width: 400, height: 500 }} alt="Delicious Food" />
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                                className='absolute top-28 left-12 animate-spin-slow hover:animate-ping'
                            >
                                <defs>
                                    <path id="circlePath" d="M 150, 150
                                        m -120, 0
                                        a 120,120 0 1,1 240,0
                                        a 120,120 0 1,1 -240,0" />
                                </defs>
                                <text fontFamily="Arial" fontSize="34" fill="#dcd2c1" className='font-thin'>
                                    <textPath href="#circlePath" startOffset="0">
                                        <tspan dx="28">FOOD</tspan>
                                        <tspan dx="28">&#9826;</tspan>
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
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                src={beverageImg} style={{ width: 350, height: 500 }} alt="Beverage" />
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                                className='absolute top-28 left-6 animate-spin-slow hover:animate-ping'
                                onClick={() => handleLinkClick("/fullcoffeemenu")}
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
                        <div className='relative'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                src={dessertsImg} style={{ width: 350, height: 500 }} alt="Desserts" />
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                                className='absolute top-28 left-8 animate-spin-slow hover:animate-ping'
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
                        <div className='relative pt-28'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                src={soupImg} style={{ width: 350, height: 500 }} alt="Soups" />
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                                className='absolute top-60 left-8 animate-spin-slow hover:animate-ping'
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
                        <div className='relative pt-28'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                src={wineBottleImg} style={{ width: 350, height: 500 }} alt="Wine" />
                            <svg
                                width="300"
                                height="300"
                                viewBox="0 0 300 300"
                                xmlns="http://www.w3.org/2000/svg"
                                className='absolute top-60 left-8 animate-spin-slow hover:animate-ping'
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
