// import modexImg from '../../../images/MODEX.jpg'; // Adjust if needed

const PortfolioItem = ({
    title,
    description,
    imageUrl,
    link
  }: {
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
  }) => {
    const content = (
      <div className="portfolio-item pixel-border bg-[#f5f5dc] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
        <div className="w-full h-64 bg-[#eaeaea] flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="portfolio-overlay p-4">
          <h3 className="font-pixel text-[#f5f5dc] text-center mb-2">{title}</h3>
          <p className="font-pixel-text text-[#f5f5dc] text-center text-lg">{description}</p>
        </div>
      </div>
    );
  
    return link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : content;
  };
  
  const Portfolio = () => {
    const portfolioItems = [
      {
        title: "MODEX",
        description: "The AI movie/series recommendation engine",
        imageUrl: "images/MODEX.jpg",
        link: "https://modex-02y9.onrender.com/"
      },
      // Uncomment and add more items as needed
      // {
      //   title: "REAL ESTATE PLATFORM",
      //   description: "Property listing website with search functionality",
      //   imageUrl: "real-estate-website.jpg",
      //   link: "https://example.com/real-estate"
      // },
      // {
      //   title: "BLOG PLATFORM",
      //   description: "Custom blog with content management system",
      //   imageUrl: "blog-website.jpg",
      //   link: "https://example.com/blog"
      // },
      // {
      //   title: "PRODUCT LANDING PAGE",
      //   description: "High-converting landing page for SaaS product",
      //   imageUrl: "landing-page.jpg",
      //   link: "https://example.com/landing-page"
      // },
      // {
      //   title: "BUSINESS WEBSITE",
      //   description: "Corporate website with service booking system",
      //   imageUrl: "business-website.jpg",
      //   link: "https://example.com/business"
      // },
      // {
      //   title: "MOBILE APP",
      //   description: "Cross-platform mobile application with Python backend",
      //   imageUrl: "mobile-app.jpg",
      //   link: "https://example.com/mobile-app"
      // }
    ];
  
    return (
    <section id="portfolio" className="py-2 md:py-3"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-pixel text-xl md:text-2xl text-center mb-4">PORTFOLIO</h2> {/* Reduced margin-bottom */}
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link} // Pass the link property here
            />
          ))}
        </div>
      </div>
    </section>
  );
  };
  
  export default Portfolio;