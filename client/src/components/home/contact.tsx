import React, { useEffect, useState } from "react";

const Contact = () => {
  const gridSize = 20;

  // Pixelated human design (0 = empty, 1 = skin, 2 = hair, 3 = arms, 4 = shirt, 5 = beard, 6 = pants, 7 = eye whites, 8 = shoes)
  const pixelArt = [
    [0, 2, 2, 2, 2, 2, 0],
    [2, 1, 1, 6, 1, 1, 2],
    [2, 1, 7, 1, 7, 1, 2],
    [2, 1, 1, 5, 1, 1, 2],
    [0, 2, 2, 2, 2, 2, 0],
    [3, 4, 4, 4, 4, 4, 3],
    [3, 4, 4, 4, 4, 4, 3],
    [1, 1, 4, 4, 4, 1, 1],
    [6, 6, 6, 6, 6, 0, 6],
    [6, 6, 6, 6, 0, 6, 6],
    [8, 8, 8, 8, 8, 8, 8],
  ];

  // Define the rainbow colors
  const rainbowColors = ["#8A2BE2", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FFA500", "#FF0000"]; // Violet, Indigo, Blue, Green, Yellow, Orange, Red

  const [colorIndex, setColorIndex] = useState(0); // Track the current color index

  // Animation to cycle through rainbow colors
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % rainbowColors.length); // Cycle through the rainbow colors
    }, 500); // Change colors every 500ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full h-screen bg-[#f5f5dc] flex flex-col items-center justify-center"
    >
      {/* Pixel Human */}
      <div className="flex flex-col items-center mb-8">
        {pixelArt.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((pixel, colIndex) => {
              let color = "transparent"; // Default empty color
              if (pixel === 1) color = rainbowColors[colorIndex]; // Skin (rainbow animation)
              if (pixel === 2) color = "#3c2c23"; // Hair
              if (pixel === 3) color = rainbowColors[(colorIndex + 1) % rainbowColors.length]; // Arms (rainbow animation)
              if (pixel === 4) color = rainbowColors[(colorIndex + 2) % rainbowColors.length]; // Shirt (rainbow animation)
              if (pixel === 5) color = "#8b4513"; // Beard
              if (pixel === 6) color = rainbowColors[(colorIndex + 3) % rainbowColors.length]; // Pants (rainbow animation)
              if (pixel === 7) color = "#ffffff"; // Eye whites
              if (pixel === 8) color = "#666666"; // Shoes

              return (
                <div
                  key={colIndex}
                  style={{
                    width: `${gridSize}px`,
                    height: `${gridSize}px`,
                    backgroundColor: color,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
  <h2 className="font-pixel text-3xl text-black">Contact Me</h2>
  <div className="flex justify-center space-x-6 mt-4">
    <a
      href="mailto:kirtan.webdev@gmail.com"
      className="font-pixel text-lg text-black underline hover:text-blue-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      Email
    </a>
    <a
      href="https://github.com/KIRTAN0902"
      className="font-pixel text-lg text-black underline hover:text-gray-700"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
    <a
      href="https://www.instagram.com/kirtans09/?utm_source=ig_web_button_share_sheet"
      className="font-pixel text-lg text-black underline hover:text-pink-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
    <a
      href="https://www.linkedin.com/in/kirtan-shah-b77792272/"
      className="font-pixel text-lg text-black underline hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  </div>
</div>
    </section>
  );
};

export default Contact;