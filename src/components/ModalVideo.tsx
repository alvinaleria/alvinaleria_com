import { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants, easeOut, easeInOut } from 'framer-motion';
import { VideoThumbItem } from './ContentBanners'; // adjust path if needed

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
  item: VideoThumbItem | null;
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

  const handleFullscreen = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).mozRequestFullScreen) {
        (video as any).mozRequestFullScreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      }
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
            className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
          >
            <motion.div
              className="relative md:left-[250px] bg-white rounded-lg shadow-lg w-[63%] md:w-[525px] min-h-[300px] md:min-h-[500px] p-6 md:p-8 overflow-visible flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center mx-4 md:mx-0"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-600 z-60 cursor-pointer"
              >
                &times;
              </button>

              <div
                className="w-[130%] md:w-[240%] md:-ml-[120%] z-40 flex justify-center items-center md:relative absolute bottom-[-50%] left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0"
                onClick={handleFullscreen}
              >
                <video
                  ref={videoRef}
                  src={item?.videoUrl}
                  autoPlay
                  muted
                  className="w-full border-4 border-yellow-400 rounded-lg cursor-pointer"
                />
              </div>

              <div className="w-full md:w-[60%] pl-0 md:pl-6 z-50 text-center md:text-left mt-6 md:mt-0">
                <h2 className="text-3xl text-gray-700 font-bold mb-4">{item?.title}</h2>
                <p className="text-lg text-gray-700">{item?.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalVideo;
