"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import verified from "../../../../public/Verfifed-Agency.webp";
import badge from "../../../../public/badge-flag.svg";

// -------------------- TestimonialCard Component --------------------
interface TestimonialProps {
  name: string;
  date: string;
  shortReview: string;
  initials?: string;
  fullReviewLink: string;
  image?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  date,
  shortReview,
  initials,
  fullReviewLink,
  image,
  rating = 5,
}) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <span key={i} className="text-yellow-500">
        {i < rating ? "★" : "☆"}
      </span>
    ));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-left h-full flex flex-col gap-4 mx-2">
      <div className="flex items-center mb-3">
        <div className="relative w-10 h-10 rounded-full bg-gray-300 ml-4 mr-4 flex items-center justify-center overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <span className="text-sm font-medium text-gray-600">{initials}</span>
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <div className="mb-3 flex">{stars}</div>
      <p className="text-gray-700 text-sm mb-3 flex-grow">{shortReview}</p>
      <a href={fullReviewLink} className="text-indigo-500 text-xs mt-auto">
        Read more
      </a>
    </div>
  );
};

// -------------------- TestimonialSlider Component --------------------
const TestimonialSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const testimonials: TestimonialProps[] = [
    {
      name: "Dr. Sheerali Arya",
      date: "November 8, 2024",
      shortReview:
        "We had the pleasure of working with Deepak from Navpatra Solutions to design my education consultancy website...",
      initials: "SA",
      fullReviewLink: "#",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Bhushan Bhujbal",
      date: "November 12, 2024",
      shortReview:
        "Himanshu Bhai and team is doing good work. Feel free to reach out to them",
      initials: "BB",
      fullReviewLink: "#",
      rating: 4,
      image: "/placeholder.svg",
    },
    {
      name: "Deepak Yadav",
      date: "December 5, 2024",
      shortReview:
        "Navpatra Solutions delivered an exceptional website for our coaching institute...",
      initials: "DY",
      fullReviewLink: "#",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "The Skill Hub",
      date: "November 7, 2024",
      shortReview:
        "We had the pleasure of working with Navpatra Solutions for the creation of our website...",
      initials: "TS",
      fullReviewLink: "#",
      rating: 5,
    },
    {
      name: "Saumya Chaudhary",
      date: "October 14, 2024",
      shortReview:
        "I am thoroughly impressed with the professionalism and quick turnaround...",
      initials: "SC",
      fullReviewLink: "#",
      rating: 5,
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">What Our Clients Say</h2>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="bg-indigo-600 text-white p-2 rounded-full disabled:opacity-50"
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="bg-indigo-600 text-white p-2 rounded-full disabled:opacity-50"
              disabled={!nextBtnEnabled}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.3333%]" key={index}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------- WhyChooseUsSection Component --------------------
const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Why Choose Navpatra Solutions?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          As a Leading Digital Marketing Agency, we are the right team for your business.
          We have the expertise and knowledge to offer impartial advice and services at an honest price.
          With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits.
          We care for your business as our own and genuinely want to help your company reach its potential.
        </p>

        {/* Logos */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <div className="relative w-[300px] h-[150px]">
            <Image src={verified} alt="Verified Agency Logo" fill className="object-contain" />
          </div>
          <div className="relative w-[250px] h-[100px] mt-8">
            <Image src={badge} alt="Badge Flag Logo" fill className="object-contain" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
          {[
            {
              title: "Data-Driven Approach",
              description:
                "We leverage data analytics to constantly refine our strategies, ensuring maximum impact for your online store.",
            },
            {
              title: "Experienced Team",
              description:
                "Our team comprises passionate web & ecommerce experts with a proven track record of success.",
            },
            {
              title: "Measurable Results",
              description:
                "We provide transparent reporting to track your progress, measure ROI & witness the tangible impact of our work.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 text-left">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Google Rating Section */}
        <div className="w-full md:w-1/3 text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">EXCELLENT</h2>
            <div className="flex mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-500 text-3xl">
                    ★
                  </span>
                ))}
            </div>
            <p className="text-gray-600 text-left mb-4">Based on 16 reviews</p>

            <div className="flex justify-start items-center mb-4">
              <div className="relative h-8 w-24">
                <svg viewBox="0 0 272 92" width="100%" height="100%">
                  <path
                    d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#EA4335"
                  />
                  <path
                    d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    fill="#4285F4"
                  />
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
                  <path
                    d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    fill="#EA4335"
                  />
                  <path
                    d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    fill="#4285F4"
                  />
                </svg>
              </div>
            </div>
          </div>

        {/* Testimonials */}
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
