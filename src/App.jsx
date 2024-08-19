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
          
          {/* // <Route path="/concept" element={<Concept/>}/>
          // <Route path="/team" element={<Chefdetails />} />
          // <Route path="/wine" element={<Wine />} />
          // <Route path="/events" element={<Events />} />
          // <Route path="/fullmenu" element={<Menu/>} />
          // <Route path="/fullcoffeemenu" element={<FullCoffeeMenu/>}/> */}
        </Routes> 
      </BrowserRouter> 
      
      {/* <EuphoHome/> */}
     

      
     
    </div>
  )
}

export default App
