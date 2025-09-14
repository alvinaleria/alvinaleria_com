
import { useRef, useEffect, useState } from "react"
import { Arvo } from "next/font/google";

const argo = Arvo({
  weight: '400', // adjust as needed
  variable: '--font-arvo',
});

const WorksContent = () => {
  return (
    <div className="w-full h-screen flex flex-row relative z-10">
      <div className="font-arvo">
        This text uses the Argo font.
      </div>
    </div>

  );


};

export default WorksContent;
