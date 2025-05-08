const About = () => {
    return (
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-12">ABOUT ME</h2>
  
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Avatar/profile image - Pixelated representation */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-[#f5f5dc] border-8 border-black shadow-[4px_4px_0_#000000] overflow-hidden">
              <svg viewBox="0 0 64 64" width="100%" height="100%">
                {/* Simple pixelated face SVG */}
                <rect x="16" y="12" width="32" height="40" fill="#E8C49C" />
                <rect x="16" y="12" width="32" height="8" fill="#3A3A3A" />
                <rect x="20" y="28" width="8" height="8" fill="#3A3A3A" />
                <rect x="36" y="28" width="8" height="8" fill="#3A3A3A" />
                <rect x="24" y="40" width="16" height="4" fill="#3A3A3A" />
              </svg>
            </div>
  
            <div className="max-w-xl">
              <div className="pixel-border p-6 md:p-8 bg-[#f5f5dc]">
                <p className="font-pixel-text text-xl leading-relaxed mb-4">
                  Hello! I'm Kirtan Shah, a passionate web developer and designer with a knack for creating unique digital experiences.
                </p>
                <p className="font-pixel-text text-xl leading-relaxed mb-4">
                  Currently, I'm a B.Tech student specializing in Artificial Intelligence and Machine Learning, 
                  bringing cutting-edge technology knowledge to my development work.
                </p>
                <p className="font-pixel-text text-xl leading-relaxed">
                  I combine technical skills with creative design to build websites that not only look great but also generate real business results.
                </p>
              </div>
  
              {/* Skills bars */}
              <div className="mt-8 space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel-text text-lg">HTML/CSS</span>
                    <span className="font-pixel-text text-lg">85%</span>
                  </div>
                  <div className="w-full h-6 bg-[#CCCCCC] border-4 border-black">
                    <div className="h-full bg-[#58C184] border-r-4 border-black" style={{ width: '85%' }}></div>
                  </div>
                </div>
  
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel-text text-lg">JavaScript</span>
                    <span className="font-pixel-text text-lg">80%</span>
                  </div>
                  <div className="w-full h-6 bg-[#CCCCCC] border-4 border-black">
                    <div className="h-full bg-[#5076DE] border-r-4 border-black" style={{ width: '80%' }}></div>
                  </div>
                </div>
  
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-pixel-text text-lg">Python</span>
                    <span className="font-pixel-text text-lg">95%</span>
                  </div>
                  <div className="w-full h-6 bg-[#CCCCCC] border-4 border-black">
                    <div className="h-full bg-[#E14B4B] border-r-4 border-black" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;