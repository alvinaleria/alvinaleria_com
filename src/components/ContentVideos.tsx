
import React, { useState } from "react";
import { isMobile } from "react-device-detect";

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

const thumbnails = [
  {
    id: 1,
    title: "Starbucks Blonde Espresso",
    description: "An ad made for Starbucks. Animated for with GSAP and hosted/served on Celtra.",
    videoUrl: "videos/apple_news1_starbucks.mp4",
    thumbnail: "images/apple_news1_starbucks.jpg",
  },
  {
    id: 2,
    title: "Walgreens Charity Campaign",
    description: "An ad made for the Walgreens Red Nose campaign. This is a tandem unit animated with GSAP and hosted/served on Celtra.",
    videoUrl: "videos/apple_news2_wallgreens.mp4",
    thumbnail: "images/apple_news2_wallgreens.jpg",
  },
  {
    id: 3,
    title: "Range Rover Velar",
    description: "An ad made for the Range Rover Velar. This ad is implemented in a micro-site design that allows the user to navigate the ad like a catalogue. This was served on the TrueX platform.",
    videoUrl: "videos/truex2_land_rover.mp4",
    thumbnail: "images/truex2_land_rover.jpg",
  },
  {
    id: 4,
    title: "Date Randomizer by Dentyne",
    description: "This is a working roulette ad for Dentyne. This is an expanding ad that randomizes different combination to giove you custrom google results based on the outcome. This was served on the Google Studio platform.",
    videoUrl: "videos/doubleclick1_dentyne.mp4",
    thumbnail: "images/doubleclick1_dentyne.jpg",
  },
  {
    id: 5,
    title: "Loew's Hotel Miami",
    description: "This is an ad for Loew's Hotel Miami that expands as a takeover. The ad is completely repsonsive and allows the users to call Loew's hotline on clicl. This is served on the Celtra platform.",
    videoUrl: "videos/apple_news3_loews.mp4",
    thumbnail: "images/apple_news3_loews.jpg",
  },
  {
    id: 6,
    title: "Google Fiber",
    description: "This is a multi-sized ad campaign for Google Fiber that also promoted various ABC shows like Jimmy Kimmel Live! This ad was animated with GSAP and hosted onn Google Studio.",
    videoUrl: "videos/doubleclick2_googlefiber.mp4",
    thumbnail: "images/doubleclick2_googlefiber.jpg",
  },
  {
    id: 7,
    title: "Mixify Roulette",
    description: "This is ad ad for Mixift tgar is implemeted like a micro-site and incorporates randomization elements to mix and match various food, drink, and activities. Mini-site is completely responsive and is served on the Celtra Platform.",
    videoUrl: "videos/celtra1_mixify.mp4",
    thumbnail: "images/celtra1_mixify.jpg",
  },
  {
    id: 8,
    title: "Oscars 2015",
    description: "This multi-tied ad campaign for the Oscars in 2015 involved making ads for all movies nominated for various categories and serving the correct ad right as the winner is announced. All units were animated using GSAP and served in Google Studio.",
    videoUrl: "videos/doubleclick3_oscars.mp4",
    thumbnail: "images/doubleclick3_oscars.jpg",
  },
  {
    id: 9,
    title: "Hotwire Theater",
    description: "This ad for Hotwire required intricate animation trying to recreate the video ad it was based from. The ad is completely responsoive, animated in GSAP, and served in Celtra.",
    videoUrl: "videos/apple_news4_hotwire.mp4",
    thumbnail: "images/apple_news4_hotwire.jpg",
  },
  {
    id: 10,
    title: "American Express",
    description: "This ad for American Express is completely responsive and uses SVG to be drawn based on the device used. This was animated using GSAP ab served in Celtra.",
    videoUrl: "videos/apple_news5_amex.mp4",
    thumbnail: "images/apple_news5_amex.jpg",
  },
  {
    id: 11,
    title: "Gucci",
    description: "This multi-sized ad from Gucci incorporates a video and and expands on click. This was animated with GSAP and served in Google Studio.",
    videoUrl: "videos/doubleclick4_gucci.mp4",
    thumbnail: "images/doubleclick4_gucci.jpg",
  },
  {
    id: 12,
    title: "Lemondade Insurance",
    description: "This ad for Lemonade incorporate drawing SVG graphics to keep the ad tight and within size limits. This was animated and served directly in Celtra.",
    videoUrl: "videos/apple_news6_lemonade.mp4",
    thumbnail: "images/apple_news6_lemonade.jpg",
  },
  {
    id: 13,
    title: "Lincoln MKZ",
    description: "This car ad for Linvcoln for the MKZ incorporates a micro-site design and incorporates video. This was animated in GSAP and served in the TrueX platform.",
    videoUrl: "videos/truex1_lincoln.mp4",
    thumbnail: "images/truex1_lincoln.jpg",
  },
  {
    id: 14,
    title: "Farmers Insurance",
    description: "This proximity based ad for Farmers insurance checks the users location before serving ad that custom lists agents near them. This was animated in GSAP and served in Google Studio with dynamic data.",
    videoUrl: "videos/doubleclick5_farmers.mp4",
    thumbnail: "images/doubleclick5_farmers.jpg",
  },
  {
    id: 15,
    title: "iShares by Blackrock",
    description: "This responsive full-screen ad for Blackrock was animated and served directly in Celtra.",
    videoUrl: "videos/apple_news7_ishares.mp4",
    thumbnail: "images/apple_news7_ishares.jpg",
  },
];

// Utility to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ContentVideos: React.FC<ThumbnailContentProps> = ({ setSelectedVideo })  => {
  const limit = isMobile ? 8 : 15;
  const shuffledThumbnails = shuffleArray(thumbnails).slice(0, limit);

  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="font-arvo text-black text-3xl md:text-4xl font-bold mb-2">MOTION GRAPHICS</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {shuffledThumbnails.map((thumb) => (
          <div
              key={thumb.id}
              className="w-[80%] md:w-[86%] mx-auto rounded shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedVideo(thumb)}
            >

            <img
              src={`/${thumb.thumbnail}`}
              alt={thumb.title}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentVideos;
export type { VideoThumbItem };
