import { Recipe, Fruits } from "../utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Inspiration = () => {
  const containerRef = useRef(null);

  const images = [Recipe, Fruits];

  useEffect(() => {
    const context = gsap.context(() => {
      images.forEach((image, i) => {
        const mask = containerRef.current.children[i].querySelector('.mask');
        const img = containerRef.current.children[i].querySelector('img');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mask,
            toggleActions: "restart none none reset",
          },
        });

        tl.set(mask, { autoAlpha: 1 })
          .from(mask, 1.5, {
            xPercent: -100,
            ease: "Power2.out",
          })
          .from(img, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: "Power2.out",
          });
      });
    });

    return () => context.revert();
  }, [images]);

  return (
    <div className="bg-coffeeMenu h-screen" ref={containerRef}>
      {images.map((image, i) => (
        <div key={i} className="mask">
          <img src={image} alt="image"className="h-48 md:h-96 rounded-lg"/>
        </div>
      ))}
    </div>
  );
};

export default Inspiration;
