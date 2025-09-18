import React from 'react';

const ContentMaestro = () => {
  return (
    <div className="p-8">
      {/* Huge Title */}
      <h1 className="text-6xl font-bold text-center mb-12">
        MAESTRO - Custom CMS for Emails and OLA Banners
      </h1>

      {/* Video and Copy Side by Side */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Video Section */}
        <div className="flex-1">
          <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              controls
              poster="https://via.placeholder.com/1280x720.png?text=Video+Preview"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="videor does not support the video tag." />
            </video>
          </div>
        </div>

        {/* Copy Section */}
        <div className="flex-1">
          <p className="text-lg leading-relaxed">
            Discover the future of innovation with our cutting-edge solutions.
            Our platform empowers you to achieve more, faster and smarter.
            Whether you're a creator, a builder, or a dreamer — we’re here to help you thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentMaestro;
