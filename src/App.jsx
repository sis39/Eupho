import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Menu from './components/Menu';
import FullCoffeeMenu from './components/FullCoffeeMenu';
import EuphoHome from './components/EuphoHome';
import Concept from './components/Concept';
import Reservation from './components/Reservation';




function App() {


  return (
    <div >
      
      
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<EuphoHome />} />
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
