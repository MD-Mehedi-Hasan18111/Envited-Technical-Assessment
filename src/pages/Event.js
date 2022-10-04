import React from "react";
import { CalendarIcon, LocationIcon } from "../assets/icons";
import EventImage from "../assets/Birthday cake.png";

const Event = () => {
  return (
    <div className="flex lg:flex-row md:flex-col items-start lg:justify-between lg:my-[100px] md:my-[50px] lg:w-[1000px] lg:mx-auto md:w-[650px] md:mx-auto">
      {/* Event Details Div */}
      <div className="lg:order-1 md:order-2">
        <h1 className="text-[#240D57] lg:text-[48px] md:text-[48px] font-[700] font-[Helvetica] leading-[64px]">
          Birthday Bash
        </h1>
        <p className="text-[24px] font-[300] font-[Helvetica] h-[56px] w-[521px] text-[#4F4F4F]">
          Hosted by <span className="font-bold">Elysia</span>
        </p>

        <div>
          <div className="flex flex-col mt-[35px]">
            <div className="flex items-center font-[Helvetica]">
              <div className="border-2 border-gray-300 shadow-md rounded-[12px] p-[12px]">
                {CalendarIcon}
              </div>
              <div className="leading-[21px] ml-[25px]">
                <h4 className="text-[#240D57] text-[18px] font-[700]">
                  18 August 6:00PM
                </h4>
                <h5 className="text-[#4F4F4F] text-[18px] font-[400]">
                  to 19 August 1:00PM UTC +10
                </h5>
              </div>
            </div>
          </div>

          <div className="flex items-center font-[Helvetica] mt-[35px]">
            <div className="border-2 border-gray-300 shadow-md rounded-[12px] p-[12px]">
              {LocationIcon}
            </div>
            <div className="leading-[21px] ml-[25px]">
              <h4 className="text-[#240D57] text-[18px] font-[700]">
                Street name
              </h4>
              <h5 className="text-[#4F4F4F] text-[18px] font-[400]">
                Suburb, State, Postcode
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* Event Image Div */}
      <div className="lg:order-2 md:order-1 lg:mb-0 md:mb-[20px]">
        <img
          src={EventImage}
          alt="EventImage"
          className="lg:h-[500px] lg:w-[500px] md:h-[593px] md:w-[593px]"
        />
      </div>
    </div>
  );
};

export default Event;
