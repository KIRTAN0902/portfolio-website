const Services = () => {
    return (
      <section id="services" className="py-16 md:py-24 bg-[#f5f5dc]">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-12">SERVICES</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="pixel-card p-6">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-4 border-black flex items-center justify-center bg-[#58C184] shadow-[2px_2px_0_#000000]">
                  <span className="font-pixel text-xl">&lt;/&gt;</span>
                </div>
              </div>
              <h3 className="font-pixel text-center text-base mb-4">WEBSITE DEVELOPMENT</h3>
              <p className="font-pixel-text text-lg text-center">
                Custom-built websites optimized for performance, responsiveness, and user experience.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="pixel-card p-6">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-4 border-black flex items-center justify-center bg-[#5076DE] shadow-[2px_2px_0_#000000]">
                  <span className="font-pixel text-xl">LP</span>
                </div>
              </div>
              <h3 className="font-pixel text-center text-base mb-4">LANDING PAGES</h3>
              <p className="font-pixel-text text-lg text-center">
                High-converting landing pages designed to capture leads and boost sales.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="pixel-card p-6">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-4 border-black flex items-center justify-center bg-[#E14B4B] shadow-[2px_2px_0_#000000]">
                  <span className="font-pixel text-xl">SEO</span>
                </div>
              </div>
              <h3 className="font-pixel text-center text-base mb-4">SEO OPTIMIZATION</h3>
              <p className="font-pixel-text text-lg text-center">
                Improve your website's visibility and rankings with effective SEO strategies.
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="pixel-card p-6">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 border-4 border-black flex items-center justify-center bg-[#58C184] shadow-[2px_2px_0_#000000]">
                  <span className="font-pixel text-xl">py</span>
                </div>
              </div>
              <h3 className="font-pixel text-center text-base mb-4">PYTHON DEVELOPMENT</h3>
              <p className="font-pixel-text text-lg text-center">
                Custom Python applications and scripts for automation and data processing.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  