'use client';
import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Cta: FC = () => {
  return (
    <div className="relative mt-8">
      {/* Black overlay starting from the middle */}
      <div className="absolute inset-0 top-1/6 bg-gray-900 z-0" />

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center bg-indigo-100 rounded-lg shadow-md">
          {/* Left Section */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Have a Project in mind?
            </h2>
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              We can help you bring your ideas to life. Let&apos;s talk about what we can build and raise together. Contact Navpatra Solutions today for a free consultation!
            </p>
            <button
              type="button"
              className="bg-purple-600 hover:bg-red-400 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Connect With Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Section (Image) */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
            <Image
              src="/cta-img.jpg"
              alt="Office workers collaborating in a modern workspace"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Let us together build a flourishing business
              </h2>
            </div>
            <div>
              <p className="text-gray-300 text-base md:text-lg">
                When connected with us, you aren&apos;t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that&apos;ll help you build a good online presence and bring in more conversions and revenue, we are right here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
