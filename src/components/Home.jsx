
import CategoriesList from "../components/CategoriesList";
import Chefdetails from "../components/Chefdetails";
import Eupho from "../components/Eupho";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wine from "../components/Wine";
import { useEffect } from "react";

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar className="fixed top-0 left-0 w-full z-10" />
      <div className="panel"><Eupho /></div>
      <div className="panel"><CategoriesList className="bg-myColor" /></div>
      <div className="panel"><Chefdetails /></div>
      <div className="panel"><Wine /></div>
      <div className="panel"><Events /></div>
      <div className="panel"><Footer /></div>
    </div>
  );
};

export default Home;
