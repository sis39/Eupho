import { fish } from "../utils"
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLinkClick =(path)=>{
    navigate(path);
  }
  return (
    <div className='bg-myColor h-screen'>
       <div className="h-full w-full flex ">
      <div className=" h-full w-1/2 mt-64 ">
      <div className="flex flex-col text-listColor font-light ml-12">
        
      <h2 className="text-5xl font-semibold tracking-widest font-mono" height={80}>MENU</h2>
      <p className="pt-3">Experience culinary excellence at EUPHO, where rare and exquisite ingredients blend seamlessly to create dishes of perfect texture and flavor harmony. Our chef's innovative menu and carefully curated wine list promise a dining adventure that is both refined and unforgettable</p>
      <p className="pt-3">EUPHO presents a luxurious six- and eight-course menu available for both lunch and dinner, alongside an exclusive four-course menu on weekends</p>
      <motion.a className="border-2 border-black w-[30%] pl-12 mt-4 py-2 hover:bg-black"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => handleLinkClick('/fullmenu')}
      >VIEW MENU</motion.a>
      </div>
         
      </div>
     
        <div className="h-full w-1/2 ">
      <img src={fish} className="h-full w-full" />
      </div>
      </div>
    </div>
  )
}

export default CategoriesList
