import { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants, easeOut, easeInOut } from 'framer-motion';
import { ImageThumbItem } from './ContentEmails';

const overlayColors = ["bg-blue-300", "bg-pink-300", "bg-black"];

const overlayVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    originY: 0,
    originX: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: easeOut,
    },
  }),
  exit: (i: number) => ({
    originY: 0,
    originX: 0,
    scale: 0,
    opacity: 0,
    transition: {
      delay: (overlayColors.length - i - 1) * 0.2,
      duration: 1.2,
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
    transition: { delay: 1.8, duration: 0.5, ease: easeOut },
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
  item: ImageThumbItem | null;
  onClose: () => void;
};

const ModalImage: React.FC<ModalProps> = ({ item, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, overlayColors.length * 300 + 500);
  };

  const openFullscreen = (ref: React.RefObject<HTMLImageElement | null>) => {
    if (ref.current) {
      if (ref.current.requestFullscreen) {
        ref.current.requestFullscreen();
      } else if ((ref.current as any).webkitRequestFullscreen) {
        (ref.current as any).webkitRequestFullscreen();
      } else if ((ref.current as any).msRequestFullscreen) {
        (ref.current as any).msRequestFullscreen();
      }
    }
  };

  return (
    <AnimatePresence>
      {(item || isExiting) && (
        <>
          {overlayColors.map((color, i) => (
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
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative bg-white rounded-lg shadow-lg w-[63%] md:w-[525px] min-h-[300px] md:min-h-[500px] p-6 md:p-8 overflow-visible flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center mx-4 md:mx-0"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-gray-600 z-60"
              >
                &times;
              </button>

              {/* Image Grid */}
              <div
                className="w-full md:w-[60%] bg-yellow-300 rounded-lg p-4 flex flex-col md:flex-row gap-4 justify-center items-center z-40 mt-4 md:mt-0"
                style={{
                  maxHeight: '90%',
                  overflow: 'hidden',
                }}
              >
                <img
                  ref={image1Ref}
                  src={item?.desktopImg}
                  alt="Preview 1"
                  className="w-full md:w-[48%] h-auto object-cover rounded-lg border-4 border-white cursor-pointer fullscreen-image"
                  onClick={() => openFullscreen(image1Ref)}
                />
                <img
                  ref={image2Ref}
                  src={item?.mobileImg}
                  alt="Preview 2"
                  className="w-full md:w-[48%] h-auto object-cover rounded-lg border-4 border-white cursor-pointer fullscreen-image"
                  onClick={() => openFullscreen(image2Ref)}
                />
              </div>


              {/* Text Content */}
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

export default ModalImage;
