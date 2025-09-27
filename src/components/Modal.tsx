import { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants, easeOut, easeInOut } from 'framer-motion';
import frameImage from '../assets/frame.png';
import { ThumbItem } from './ContentBanners';
import { isMobile } from "react-device-detect";

const overlayColors = ["bg-[#00a9e3]", "bg-[#df147b]", "bg-black"];

const overlayVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    transformOrigin: '50% 50%',
    scale: 1.5,
    rotate: 45,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: easeOut,
    },
  }),
  exit: (i: number) => ({
    transformOrigin: '50% 50%',
    scale: 0,
    opacity: 1,
    transition: {
      delay: (overlayColors.length - i - 1) * 0.05,
      duration: 1,
      ease: easeInOut,
    },
  }),
};

const modalVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    originY: 0,
    originX: 0,
    scale: 1,
    opacity: 1,
    transition: { delay: 1, duration: 0.5, ease: easeOut },
  },
  exit: {
    originY: 0,
    originX: 0,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

type ModalProps = {
  item: ThumbItem | null;
  onClose: () => void;
};

const ModalVideo: React.FC<ModalProps> = ({ item, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, overlayColors.length * 300 + 500);
  };

const handleFullscreen = (e: React.MouseEvent) => {
  e.stopPropagation();

  const video = videoRef.current;
  if (!video) return;

  if (document.fullscreenElement) return;

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if ((video as any).webkitRequestFullscreen) {
    (video as any).webkitRequestFullscreen();
  } else if ((video as any).msRequestFullscreen) {
    (video as any).msRequestFullscreen();
  }
};

  return (
    <AnimatePresence>
      {(item || isExiting) && (
        <>
          {overlayColors.map((color: string, i: number) => (
            <motion.div
              key={`overlay-${i}`}
              custom={i}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`fixed ${color}`}
              style={{
                width: "500vmax",
                height: "500vmax",
                bottom: "0%",
                right: "0%",
                transform: "translate(-50%, -50%) rotate(-45deg)",
                transformOrigin: "center",
                zIndex: 40,
                pointerEvents: "none",
              }}
            />
          ))}

          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative md:left-[250px] bg-[#233445] rounded-md shadow-lg w-[63%] md:w-[525px] min-h-[450px] md:min-h-[550px] p-6 md:p-8 overflow-visible flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center mx-4 md:mx-0"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={handleClose}
                className="font-arvo absolute top-1 right-4 text-yellow-600 text-4xl font-bold hover:text-grey-600 z-60 cursor-pointer"
              >
                &times;
              </button>

              <div
                className="cursor-pointer w-[130%] md:w-[240%] md:-ml-[120%] -mt-10 md:-mt-0 z-40 flex justify-center items-center md:relative absolute left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0"
                onClick={handleFullscreen}
              >
                <video
                  ref={videoRef}
                  src={item?.videoUrl}
                  autoPlay
                  muted
                  loop
                  controls={isMobile}
                  className="-ml-[15px] md:-ml-[45px] object-cover w-3xs md:w-150"
                  onClick={handleFullscreen}
                />
                <img
                  src={frameImage.src}
                  alt="Frame"
                  width="100%"
                  height="100%"
                  className="absolute"
                  onClick={handleFullscreen}
                />
              </div>

              <div className="pointer-events-none w-full md:w-[60%] flex grow flex-col justify-between pl-0 md:pl-6 z-50 text-center md:text-left mt-6 md:mt-0">
                <h2 className="-mt-6 md:-mt-0 font-arvo text-2xl md:text-3xl text-white font-bold mb-4">{item?.title}</h2>
                <p className="-mb-3 md:-mb-0 font-roboto text-sm text-white">{item?.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalVideo;
