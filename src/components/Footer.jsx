import { navbarLogo } from "../utils";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-footer1">
      <div className="py-10 px-12 mb-8"> 
        <div className="h-1/4">
          <img src={navbarLogo} className="h-full" style={{ height: 200 }} />
        </div>
        <div className="h-1/2 grid grid-cols-3">
          <div className="h-full">
            <div className="h-3/4">
              <h1 className="font-bold tracking-widest">SITEMAP</h1>
              <div className="flex flex-col gap-1 pt-3">
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Meet the team</a>
                <a href="">Reservation Policy</a>
                <a href="">Privacy Policy</a>
              </div>
            </div>
            <div className="h-1/4 pt-3">
              <h1 className="font-bold tracking-widest">SOCIAL</h1>
              <div className="flex gap-3 text-2xl pt-3">
                <a href="">{<PiFacebookLogoBold />}</a>
                <a href="">{<PiInstagramLogoBold />}</a>
                <a href="">{<FaYoutubeSquare />}</a>
              </div>
            </div>
          </div>
          <div>
            <div className="h-1/4">
              <h1 className="font-bold tracking-widest">LOCATION</h1>
              <div className="pr-12 pt-3">
                North Cliff, 
                Near Helipad, 
                Varkala Beach, 
                Varkala, Thiruvananthapuram,
                Kerala, 695141
                <h6>Phone: +91 8919866135</h6>
              </div>
            </div>
            <div className="h-3/4 pt-10">
              <h1 className="font-bold tracking-widest">OPENING HOURS</h1>
              <div className="pt-3">
                <div className="flex flex-col gap-1">
                  <h2>LUNCH</h2>
                  <h4>Monday to Sunday</h4>
                  <h4>Reservations from 12pm to 1.30pm</h4>
                </div>
                <div className="flex flex-col pt-4 gap-1">
                  <h2>DINNER</h2>
                  <h4>Monday to Sunday</h4>
                  <h4>Reservations from 6pm to 8.45pm</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-1/4">
              <h1 className="font-bold tracking-widest pb-4">RESERVATIONS</h1>
              <button className="hidden md:inline-block border-2 border-black border-solid font-semibold px-6 pb-2 text-black hover:bg-black hover:text-white">
                <span className="text-sm tracking-widest">MAKE A RESERVATION</span>
              </button>
            </div>
            <div className="h-3/4 flex flex-col pt-6">
              <span>We acknowledge the Traditional Custodians of this land upon which Eupho sits, the indigenous communities of Kerala. We recognize their enduring connection and unique cultural and spiritual relationship to the land, water, and community. We pay our deepest respects to them and their culture, and to Elders, past, present, and emerging.</span>
              <span className="pt-8">Tel: +91 8919866135</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-center text-white py-4 mt-8"> 
        <p>© Eupho Restaurant 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
