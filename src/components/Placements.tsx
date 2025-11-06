

const Placements = () => {
  // Company logos matching the reference image
  const companyLogos = [
    'ICICci bank',
    'Deutsche Bank',
    'Shell',
    'Flipkart',
    'Capgemini',
    'Goldman Sachs',
    'Google',
    'HDFC BANK',
    'icici bank',
    'Shell',
    'JPMorgan Chase',
    'LENDINGKART',
    'GODWIN',
    'LiKona',
    'Walmart',
    'ICICci bank',
    
  ];

  return (
    <section className="py-8 bg-black">
      <div className="w-full ">
        {/* Title */}
        <div className="text-center mb-6">
          <p className="text-orange-400 text-xs font-medium tracking-wider uppercase">
            UNLOCK ROLES IN THE TOP 1% OF THE INDUSTRY
          </p>
        </div>

        {/* Logo Carousel - Auto scrolling */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:animate-none">
            {/* First set of logos */}
            {companyLogos.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="text-white text-sm font-medium whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {company}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companyLogos.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <span className="text-white text-sm font-medium whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Placements;


