import React from 'react';

const content = [
  {
    id: 1,
    title: "MAESTRO - Custom CMS for Emails and OLA Banners",
    description: "Discover the future of innovation with our cutting-edge solutions.Our platform empowers you to achieve more, faster and smarter. Whether you're a creator, a builder, or a dreamer — we’re here to help you thrive.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "apple_news1_starbucks.jpg",
  },
];

const ContentMaestro = () => {
  const { title, videoUrl } = content[0];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">{title}</h1>

      <div className="w-full md:w-1/2 aspect-video">
        <video
          className="w-full h-full object-cover rounded-lg shadow-md"
          controls
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ContentMaestro;
