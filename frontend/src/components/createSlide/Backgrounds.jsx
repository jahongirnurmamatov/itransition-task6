import React from "react";

const Backgrounds = ({ onSelectBackground }) => {
  // Array of background image URLs
  const backgroundImages = [
    "https://t3.ftcdn.net/jpg/03/65/64/88/360_F_365648888_nTq9Cajc4e984ifdRAp5Q77KGkGFccgF.jpg",
    "https://img.freepik.com/premium-photo/simple-plain-background-with-elements-right-left_1085074-43193.jpg",
    "https://slidechef.net/wp-content/uploads/2021/06/Fre-Minimal-Background-Pitch-Deck-Google-Slides-7.jpg",
    "https://image.slidesdocs.com/responsive-images/background/splice-white-clean-simple-technology-business-powerpoint-background_c3c1aa6ffa__960_540.jpg",
    "https://image.slidesdocs.com/responsive-images/slides/0-simple-blue-geometric-polygon-general-business-report-powerpoint-background_e13aab7a66__960_540.jpg",
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {backgroundImages.map((src, idx) => (
        <div
          key={idx}
          className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer"
          onClick={() => onSelectBackground(src)} // Pass the selected background to the parent
        >
          <img
            src={src}
            alt={`Background ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Backgrounds;
