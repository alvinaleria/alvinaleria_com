
import { useRef, useEffect, useState } from "react"
import { gsap } from 'gsap';

const FingerPrintBackground = () => {
  
const bgRef = useRef(null);

  useEffect(() => {
    const animateBackground = () => {
      gsap.to(bgRef.current, {
        scale: gsap.utils.random(1.05, 1.2),
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        duration: gsap.utils.random(5, 10),
        transformOrigin: "50% 50%",
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
        className="absolute inset-0 bg-cover bg-center will-change-transform z-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url('background.jpg')",
        }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl">
        
      </div>

        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-full h-32 z-10 pointer-events-none select-none"
            style={{
            background: "linear-gradient(to bottom, black, transparent)"
            }} />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none select-none"
            style={{
            background: "linear-gradient(to top, black, transparent)"
            }} />

    </div>
  );

};

export default FingerPrintBackground;
