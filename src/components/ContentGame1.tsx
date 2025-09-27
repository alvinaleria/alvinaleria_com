import React from 'react';
import frameImage from '../assets/frame.png';

type VideoThumbItem = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
};

type ThumbnailContentProps = {
  setSelectedVideo: (item: VideoThumbItem | null) => void;
};

const content = [
  {
    id: 1,
    title: "Belize Tourism Board - Escape from Boring Beach",
    description: "http://joystickinteractive.celtra.com/preview/20a474af Discover the future of innovation with our cutting-edge solutions.Our platform empowers you to achieve more, faster and smarter. Whether you're a creator, a builder, or a dreamer — we’re here to help you thrive.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
];

const ContentGame1 : React.FC<ThumbnailContentProps> = ({ setSelectedVideo }) => {
  const { title, videoUrl } = content[0];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 text-center">
      <h1 
        className="font-arvo text-4xl md:text-6xl font-bold -mb-3 md:-mb-6 text-shadow-[5px_5px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black] cursor-pointer"
        onClick={() => setSelectedVideo(content[0])}
      >{title}</h1>

      <div 
        className="relative w-full md:w-1/2 aspect-video flex justify-center items-center cursor-pointer"
        onClick={() => setSelectedVideo(content[0])}
      >
        <video
          className="absolute mt-1 mr-5 w-3xs md:w-2xl h-3xs md:h-2xl object-cover "
          autoPlay
          muted
          loop
          controls={false}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <img
            src={frameImage.src}
            alt="Frame"
            width="100%"
            height="100%"
            className="absolute w-full h-full"
          />
      </div>
    </div>
  );
};

export default ContentGame1;
export type { VideoThumbItem };
