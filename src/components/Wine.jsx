import { motion } from "framer-motion";
import { wine } from "../utils";
const Wine = () => {
  return (
    <div className="h-screen bg-myColor">
               <div className="h-full w-full flex ">
      <div className=" h-full w-1/2 mt-64 ">
      <div className="flex flex-col text-listColor font-light ml-12">
        
      <h2 className="text-5xl font-semibold tracking-lightest
       font-mono " height={80}>DUST OFF YOUR BOTTLES</h2>
      <p className="pt-3">For a limited time, Eupho is welcoming guests to bring along their best bottles to enjoy over weekend lunch. Whether you have a cellar full of fine wine or just ‘that’ special bottle you’ve been waiting to open, there is no better way to enjoy it than at one of India's most celebrated restaurants.

</p>
    
      <motion.a className="border-2 border-black w-[30%] pl-12 mt-4 py-2 hover:bg-black"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      >EXPLORE MORE</motion.a>
      </div>
         
      </div>
      <div className="h-full w-1/2 ">
      <img src={wine} className="h-full w-full" />
      </div>
     </div>
      
    </div>
  )
}

export default Wine
