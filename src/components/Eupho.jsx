import { logo } from "../utils";
import { rest } from "../utils";
import { useEffect } from "react";

const Eupho = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen relative bg-black ">
      <div className="relative w-full h-full">
        <img src={rest} alt="Background Image" className="w-full h-full object-cover" />
        <img src={logo} alt="Logo" className="absolute inset-0 m-auto h-4/5 p-10" />
        
      </div>
    </div>
  );
};

export default Eupho;
