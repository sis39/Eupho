import Navbar from './Navbar'
import Footer from './Footer'
import { coffeeMenu1Img,coffeMenu2Img } from '../utils'
import { fullpage } from 'jquery'
import { useEffect } from 'react'

const FullCoffeeMenu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Navbar/>
      <div >
        <div className='bg-coffeeMenu  flex flex-col'>
            <div>
                <span className='text-mycolor text-6xl underline flex items-center justify-center pt-10'>MENU</span>
            </div>
            <div style={{paddingLeft:370}} className='py-20'>
            <img src={coffeMenu2Img} style={{height:1000,width:700}} />
            </div>
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FullCoffeeMenu
