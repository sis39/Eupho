import { BrowserRouter, Routes, Route } from 'react-router-dom';



import EuphoHome from './components/EuphoHome';

import Gallery from './components/Gallery';
import Reservationtalble from './components/Reservationtable';




function App() {


  return (
    <div >
      
      
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<EuphoHome />} />
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Reservationtable" element={<Reservationtalble/>}/>
          
         
        </Routes> 
      </BrowserRouter> 
      
      {/* <EuphoHome/> */}
     

      
     
    </div>
  )
}

export default App
