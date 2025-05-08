const Footer = () => {
    return (
      <footer className="py-4 border-t-4 border-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="font-pixel text-sm">KIRTAN SHAH © {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;