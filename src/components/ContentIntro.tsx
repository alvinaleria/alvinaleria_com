
import { useRef, useEffect, useState } from "react"
import  AnimatedHeart from './AnimatedHeart';
import  CopyIntro from './CopyIntro';

const ContentIntro = () => {
  return (
    
    <div className="w-full h-screen flex flex-col md:flex-row justify-center relative z-10">
      
      {/* Column 1 / Row 1 */}
      <div className="w-full md:w-1/2 h-[75%] md:h-full flex items-center justify-center overflow-hidden">
        <CopyIntro />
      </div>

      {/* Column 2 / Row 2 */}
      <div className="w-full md:w-1/2 h-[125%] md:h-full -mt-60 md:-mt-0 flex items-center justify-center overflow-hidden">
        <AnimatedHeart />
      </div>

    </div>

  );


};

export default ContentIntro;
