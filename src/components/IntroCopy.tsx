import React, { use, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import IntroText from '../assets/IntroText.png';

gsap.registerPlugin(DrawSVGPlugin);

const IntroCopy = () => {
    
    return (
            <svg className="w-[80%] w-[80%]" viewBox="0 0 1256 1352" preserveAspectRatio="xMidYMid meet">
                <path fillOpacity="0.5" className="absolute w-full h-full object-contain" fill="#ffffff" d="M782.44,334.5c-9.35-10.95-21.74-16.43-37.21-16.43-13.53,0-26.26,2.75-38.17,8.22-11.93,5.48-22.39,14.66-31.41,27.55L234,1017.75h129.13l432.6-650.32c-1.53-13.18-5.88-24.23-13.29-32.94Z"/>
                <path fillOpacity="0.5" className="absolute w-full h-full object-contain" fill="#ffffff" d="M905.61,318.06c-13.53,0-26.26,2.75-38.17,8.22-11.93,5.48-22.39,14.66-31.41,27.55l-441.65,663.92h144l297.66-469.68v469.68h120.8V377.98c0-18.03-4.68-32.53-14.01-43.49-9.35-10.95-21.74-16.43-37.21-16.43Z"/>
                <image href={IntroText.src} className="absolute w-full h-full object-contain introtext" />
            </svg>
   
   
    );
};

export default IntroCopy;