import React from "react";
import landingImage from "../assets/landing.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex lg:flex-row md:flex-col items-center lg:justify-between lg:my-[60px] md:my-[30px] lg:w-[1100px] lg:mx-auto md:w-[650px] md:mx-auto">
      {/* Image Div */}
      <div className="lg:order-1 md:order-2">
        <img
          src={landingImage}
          alt="eventSampleImage"
          className="lg:h-[775.69px] lg:w-[440px] lg:rounded-[35.1522px] md:w-[311px] md:h-[548.27px] md:rounded-[24.8462px]"
        />
        <div className="lg:text-right text-center lg:hidden md:block">
          <Link to="/create">
            <button className="text-[20px] font-[Helvetica] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white px-[56px] py-[16px] rounded-[10px] mt-[60px]">
              🎉 Create my event
            </button>
          </Link>
        </div>
      </div>
      {/* Headline Div */}
      <div className="lg:order-2 md:order-1 md:mb-[60px]">
        <h1 className="text-[#240D57] lg:text-[64px] md:text-[64px] font-[700] lg:text-right md:text-center font-[Helvetica] leading-[64px]">
          Imagine if
          <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
            Snapchat
          </span>
          <br /> had events.
        </h1>
        <p className="text-[24px] font-[300] font-[Helvetica] h-[56px] w-[521px] lg:text-right md:text-center text-[#4F4F4F] mt-[16px]">
          Easily host and share events with your friends across any social
          media.
        </p>
        <div className="lg:text-right text-center lg:block md:hidden">
          <Link to="/create">
            <button className="text-[20px] font-[Helvetica] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white px-[56px] py-[16px] rounded-[10px] mt-[60px]">
              🎉 Create my event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
