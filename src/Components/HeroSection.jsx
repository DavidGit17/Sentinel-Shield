import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="h-screen w-screen">
      <div className="h-screen">
        <video
          src="assets/HeroVideo.mp4"
          className="h-screen w-screen object-cover opacity-30"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="text-white absolute inset-0 flex flex-col items-center justify-center pt-20">
          <p className="font-sfui font-bold text-[54px]">
            Securing Your Digital Frontier
          </p>
          <p className="font-sfui font-normal text-[21px] text-custom-Ht-gray">
            Submit and manage vulnerability reports for unprotected businesses.
          </p>
          <div className="pt-[49px] flex gap-[24px] text-[18px]">
            <Link className="bg-custom-Lm-gray px-[16px] py-[8px] rounded-[8px] font-inter font-semibold">
              Learn More
            </Link>
            <Link className="bg-custom-purp2 px-[16px] py-[8px] rounded-[8px] font-inter font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
