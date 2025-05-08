import Image, { StaticImageData } from 'next/image';

// Import your logo images (replace with actual paths)
import lowcodeTrainingsLogo from '../../../../public/LOWCODE.webp';
import toolKeepingLogo from '../../../../public/Tool-Keeping.webp';
import cloudespacioLogo from '../../../../public/Cloudespacio-Logo.webp';
import aspireVidyaInstituteLogo from '../../../../public/Aspire-Vidhya.webp';
import mixchapinLogo from '../../../../public/Mibachpan-Logo.webp';
import bestCreditCardDealsLogo from '../../../../public/Best-Credit-Card-Deal.png';
import travelotionLogo from '../../../../public/Travelothon_Transparent_Logo.png';
import trippyoLogo from '../../../../public/Trripyo-transparent.png';
import marketzappLogo from '../../../../public/MarketZapp-New-Logo.png';

// Correct type for logo objects
interface Logo {
  src: StaticImageData;
  alt: string;
}

const LogoDesigns = () => {
  const logos: Logo[] = [
    { src: lowcodeTrainingsLogo, alt: 'Lowcode Trainings Logo' },
    { src: toolKeepingLogo, alt: 'Tool Keeping Logo' },
    { src: cloudespacioLogo, alt: 'Cloudespacio Logo' },
    { src: aspireVidyaInstituteLogo, alt: 'Aspire Vidya Institute Logo' },
    { src: mixchapinLogo, alt: 'Mixchapin Logo' },
    { src: bestCreditCardDealsLogo, alt: 'Best Credit Card Deals Australia Logo' },
    { src: travelotionLogo, alt: 'Travelotion Logo' },
    { src: trippyoLogo, alt: 'Trippyo Logo' },
    { src: marketzappLogo, alt: 'MarketZapp Logo' },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-2xl font-bold text-purple-600 text-center mb-8">Logo Designs</h2>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative w-32 h-20 overflow-hidden group flex items-center justify-center rounded-md shadow-sm bg-white"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={128}
              height={80}
              style={{ objectFit: 'contain' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gray-500 bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-sm text-center px-2">{logo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesigns;
