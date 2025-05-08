import Image from "next/image";
import backgroundImage from "../../../../public/your-background.jpg";
import { Calendar, MessageCircle } from "lucide-react";

const RecentWork: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-black">
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-50"
      />
      <div className="absolute inset-0 bg-opacity-60 flex flex-col justify-center items-center px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Recent Work</h2>
        <p className="text-lg md:text-xl font-medium max-w-3xl">
          <span className="font-bold">Transform your online presence</span> with our expert{" "}
          <span className="font-bold">
            Website Design & Development, Website Maintenance, Social Media Management & Social Media Marketing
          </span>{" "}
          and <span className="font-bold">Landing Page Designs</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a
            href="#"
            className="bg-purple-600 hover:bg-red-400 text-white font-semibold py-3 px-6 rounded-full flex items-center shadow-lg transition transform hover:scale-105 active:scale-95"
          >
            <Calendar className="w-5 h-5 mr-2" /> Schedule A Free Consultation
          </a>
          <a
            href="https://wa.me/1234567890"
            className="bg-purple-600 hover:bg-red-400 text-white font-semibold py-3 px-6 rounded-full flex items-center shadow-lg transition transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 mr-2" /> In A Hurry? WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
