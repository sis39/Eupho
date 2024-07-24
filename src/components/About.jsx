import { aboutList } from "../Constants";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-myColor h-screen relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
          .cormorant-font {
            font-family: 'Cormorant Garamond', serif;
          }
        `}
      </style>
      <div className="w-full flex flex-col items-center">
        <span className="bg-white bg-clip-text text-transparent mt-6 h-12 text-4xl">
          Fastfood Our Blog
        </span>
        <span className="bg-white bg-clip-text text-transparent">
          Delve into our Culinary Stories, tips, and Behind-the-scenes Delights
        </span>
      </div>
      <div className="w-11/12 bg-white items-center justify-center mx-auto mt-6 p-6 h-4/5 relative">
        <div className="flex justify-center gap-4 w-full pt-10">
          {aboutList.map((card) => (
            <div key={card.id} className="flex-none w-96">
              <div className="flex flex-col items-center h-full">
                <img src={card.Image} className="w-96 h-64 object-cover rounded-md" />
                <div className="flex-grow flex flex-col items-center justify-between pt-6">
                  <div className="text-center">
                    <span className="cormorant-font font-bold block">
                      {card.text1}
                    </span>
                    <span className="font-thin block">
                      {card.text2}
                    </span>
                  </div>
                  <div className="pt-6">
                    <button className="flex items-center  text-orange-600">
                      <span className="mr-2">Read More</span>
                      <FaLongArrowAltRight className="mt-0.5" style={{ fill: '#ea580c' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
