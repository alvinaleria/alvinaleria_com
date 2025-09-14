
import { useRef, useEffect, useState } from "react"
import { gsap } from 'gsap';

const Test = () => {
  
const bgRef = useRef(null);

  useEffect(() => {
    const animateBackground = () => {
      gsap.to(bgRef.current, {
        scale: gsap.utils.random(1.05, 1.2),
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        duration: gsap.utils.random(5, 10),
        ease: "power1.inOut",
        onComplete: animateBackground,
      });
    };

    animateBackground();
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('background.jpg')",
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl">
        Stylish Landing Page
      </div>
    </div>
  );

};

export default Test;
