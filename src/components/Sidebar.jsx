import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { icon, navbarLogo } from "../utils";

const Navbar = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState("bg-transparent");
  const [Image, setImage] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);

  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("bg-mycolor");
        setImage(true);
      } else {
        setColor("bg-transparent");
        setImage(false);
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <header
      className={`${color} text-black py-1 z-20 ${className} flex justify-between items-center w-full top-0 sticky`} 
      style={{ height: 70 }}
    >
      <nav className="flex items-between">
        <button
          onClick={handleMenuToggle}
          className="text-white focus:outline-none pb-6 pt-3 pl-8"
          onMouseEnter={() => setChangeIcon(true)}
          onMouseLeave={() => setChangeIcon(false)}
        >
          {menuOpen ? (
            <FaTimes
              className="text-4xl absolute top-4 left-4 z-30 text-black cursor-pointer"
              onClick={handleMenuToggle}
            />
          ) : changeIcon ? (
            <FaBarsStaggered
              className="text-4xl text-textColor cursor-pointer"
              onClick={handleMenuToggle}
            />
          ) : (
            <FaBars
              className="text-4xl text-textColor cursor-pointer"
              onClick={handleMenuToggle}
            />
          )}
        </button>
        {Image ? (
          <div>
            <img src={navbarLogo} className="h-28" style={{ paddingLeft: 600 }} alt="Navbar Logo" />
          </div>
        ) : (
          <div>
            <img src={icon} className="h-24 pt-1" style={{ paddingLeft: 600 }} alt="Icon" />
          </div>
        )}
        <motion.div
          className={`fixed top-0 left-0 h-full bg-white text-black shadow-lg z-20`}
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={{
            open: { x: 0 },
            closed: { x: "-100%" },
          }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 p-8 text-3xl pt-24">
            <motion.li
              className="list cursor-pointer"
              whileHover={{ scale: 1.1, color: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('/')} 
            >
              HOME
            </motion.li>
            <motion.li
              className="list cursor-pointer"
              whileHover={{ scale: 1.1, color: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('/about')} 
            >
              ABOUT
            </motion.li>
            <motion.li
              className="list cursor-pointer"
              whileHover={{ scale: 1.1, color: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('/fullmenu')} 
            >
              MENU
            </motion.li>
            <motion.li
              className="list cursor-pointer"
              whileHover={{ scale: 1.1, color: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('/events')} 
            >
              EVENTS
            </motion.li>
            <motion.li
              className="list cursor-pointer"
              whileHover={{ scale: 1.1, color: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('/reservations')} 
            >
              RESERVATIONS
            </motion.li>
            <motion.li
              className="list cursor-pointer"
              whileHover={{ scale: 1.1, color: "black" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('/contact')} 
            >
              CONTACT
            </motion.li>
          </ul>
          <div className="px-14 pt-14">
            <motion.button
              className="md:inline-block border-2 border-black border-solid font-semibold px-6 pb-2 text-black hover:bg-black hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLinkClick('/reservations')} 
            >
              <span className="text-sm tracking-widest"> MAKE A RESERVATION</span>
            </motion.button>
          </div>
        </motion.div>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={handleMenuToggle}
          ></div>
        )}
      </nav>
      <div className="pr-14">
        <motion.button
          className="hidden md:inline-block border-2 border-black border-solid font-semibold px-6 pb-2 text-black hover:bg-black hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleLinkClick('/reservations')} 
        >
          <span className="text-sm tracking-widest"> MAKE A RESERVATION</span>
        </motion.button>
      </div>
    </header>
  );
};

export default Navbar;
