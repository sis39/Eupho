import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import { HomeVideo } from '../utils';
import Concept from './Concept';
import Inspiration from './Inspiration';
import Flavours from './Flavours';
import Menu from "./Menu";
import Reservation from './Reservation';
const EuphoHome = () => {
  return (
    <div className='bg-coffeeMenu'>
      <Helmet>
        <style>{`
          @font-face {
            font-family: 'Stardom-Regular';
            src: url('../../fonts/Stardom-Regular.woff2') format('woff2'),
                 url('../../fonts/Stardom-Regular.woff') format('woff'),
                 url('../../fonts/Stardom-Regular.ttf') format('truetype');
            font-weight: 400;
            font-display: swap;
            font-style: normal;
          }
           
        `}</style>
      </Helmet>
        
      <div className='h-screen relative'>
        <Navbar className="pt-20 z-20" />
        <video className='absolute left-0 top-0 w-full h-full object-cover z-10' autoPlay loop muted>
          <source src={HomeVideo} type='video/mp4' />
        </video>
        <div className='absolute inset-0 flex flex-col items-center justify-center z-20 '>
          <div className='text-center'>
            <div className='flex flex-col items-center'>
              <h1 className='md:m-5 md:pl-20   ' style={{ fontFamily: 'Stardom-Regular, sans-serif' }}>
                <span className='text-textColor md:text-6xl  text-5xl md:text-center '>Asian Tapas</span>
              </h1>
              <span className='text-textColor text-4xl  text-center md:pl-12 px-12 pt-4' style={{ fontFamily: 'Stardom-Regular, sans-serif' }}>Savoring Stories from the Maritime Silk Route</span>
            </div>
            <div className='md:mt-10 md:pl-20  mt-10 cursor-pointer'>
                <a href='' >
                    <span className='text-textColor mb-1 ml-1 mr-1 text-center'>&#9670;&nbsp;&nbsp;&nbsp; </span>
                    <span className='text-textColor md:text-2xl text:xl ' style={{ fontFamily: 'Stardom-Regular, sans-serif' }}>MENU</span> 
                    <span className='text-textColor mb-1 ml-1 mr-1 text-center'>&nbsp;&nbsp;&nbsp;&#9670;</span>
                </a>
            </div>
          </div>
        </div>

        <div className='absolute bottom-10 md:left-1/2 left-40 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="74.744" height="90.043" viewBox="0 0 74.744 90.043" className='w-12 h-16 md:w-20 md:h-24 pl-5'>
            <g id="Group_11" transform="translate(-5919.641 -1363.532)">
              <path id="Path_87" d="M5869.476,1080.805s1.941-16.7,11.31-26.108,25.953-11.233,25.953-11.233" transform="translate(87.537 372.654)" fill="none" stroke="#e3dac6" strokeWidth="2"></path>
              <path id="Path_88" d="M5906.738,1080.805s-1.941-16.7-11.31-26.108-25.953-11.233-25.953-11.233" transform="translate(50.275 372.654)" fill="none" stroke="#e3dac6" strokeWidth="2"></path>
              <line id="Line_10" y2="89.928" transform="translate(5957.013 1363.532)" fill="none" stroke="#e3dac6" strokeWidth="2"></line>
            </g>
          </svg>
        </div>
         

      </div>
      <section className='md:py-52 py-32  '>
       <Concept/>
        </section>
        <section className=' md:py-24 py-32 relative '>
            <Inspiration/>
        </section>
        <section className='md:py-32 py-32 relative '>
          <Flavours/>
        </section>
        <section>
          <Menu/>
        </section>
        <section className='md:py-52'>
          <Reservation/>
        </section>
    </div>
  );
};

export default EuphoHome;
