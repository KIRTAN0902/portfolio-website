import React, { useState, useEffect } from "react";

const Hero = () => {
  const words = ["WEB DEVELOPER", "WEB DESIGNER","PROGRAMMER", "CREATIVE CODER"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayAfterTyping = 1000;

  useEffect(() => {
    document.title = "KIRTAN SHAH - WEB DEVELOPER";
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text === currentWord) {
      // Pause after typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterTyping);
    } else if (isDeleting && text === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 md:pt-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <div className="pixel-border p-6 md:p-12 w-full max-w-4xl bg-[#f5f5dc] mb-8">
          <h1 className="font-pixel text-2xl md:text-4xl mb-4">KIRTAN SHAH</h1>

          {/* Typewriter text */}
          <p className="font-pixel-text text-xl md:text-2xl mb-4">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <div className="w-24 h-1 bg-black mx-auto my-6"></div>
          <p className="font-pixel text-base md:text-xl mb-8">I BUILD WEBSITES THAT BUILD BUSINESSES</p>
          <a href="#contact" className="pixel-button inline-block">CONTACT ME</a>
        </div>

        {/* Pixel decorations */}
        <div className="flex justify-center mt-8 space-x-8">
          <div className="w-12 h-12 bg-[#58C184] border-4 border-black shadow-[4px_4px_0_#000000]"></div>
          <div className="w-12 h-12 bg-[#5076DE] border-4 border-black shadow-[4px_4px_0_#000000]"></div>
          <div className="w-12 h-12 bg-[#E14B4B] border-4 border-black shadow-[4px_4px_0_#000000]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
