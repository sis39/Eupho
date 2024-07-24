import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chefdetails from "./components/Chefdetails"
import Events from "./components/Events"
import Wine from "./components/Wine"
import Home from './components/Home';
import AboutComp from './components/AboutComp';
import Menu from './components/Menu';
import FullCoffeeMenu from './components/FullCoffeeMenu';
import EuphoHome from './components/EuphoHome';





function App() {


  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EuphoHome />} />
          <Route path="/about" element={<AboutComp/>}/>
          <Route path="/team" element={<Chefdetails />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/events" element={<Events />} />
          <Route path="/fullmenu" element={<Menu/>} />
          <Route path="/fullcoffeemenu" element={<FullCoffeeMenu/>}/>
        </Routes> 
      </BrowserRouter>
      
     
    </div>
  )
}

export default App
