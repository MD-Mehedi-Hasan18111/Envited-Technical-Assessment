import React, { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileName = (e) => {
    setFileName(e.target.files[0].name);
  };

  return (
    <div className="lg:w-[900px] md:w-[600px] mx-auto my-[50px]">
      <h3 className="text-[#240D57] lg:text-[64px] md:text-[34px] text-center font-[700] font-[Helvetica]">
        Create Event!
      </h3>
      <div className="grid lg:grid-rows-3 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 md:gap-y-6 grid-rows-6 grid-cols-1 font-[Helvetica] mt-[30px]">
        <div>
          <label htmlFor="eventName" className="text-[18px] font-[400]">
            Event Name
          </label>
          <br />
          <input
            id="eventName"
            type="text"
            placeholder="Enter Your Event Name..."
            className="bg-transparent border-2 border-[#8456EC] h-[40px] rounded-[8px] lg:w-[400px] md:w-[600px] px-[10px] mt-1"
          />
        </div>

        <div>
          <label htmlFor="hostName" className="text-[18px] font-[400]">
            Host Name
          </label>
          <br />
          <input
            id="hostName"
            type="text"
            placeholder="Enter Host Name..."
            className="bg-transparent border-2 border-[#8456EC] h-[40px] rounded-[8px] lg:w-[400px] md:w-[600px] px-[10px] mt-1"
          />
        </div>

        <div>
          <label htmlFor="startDate" className="text-[18px] font-[400]">
            Start Date
          </label>
          <br />
          <input
            id="startDate"
            type="date"
            placeholder="Enter Your Event Name..."
            className="bg-transparent border-2 border-[#8456EC] h-[40px] rounded-[8px] lg:w-[400px] md:w-[600px] px-[10px] mt-1"
          />
        </div>

        <div>
          <label htmlFor="endDate" className="text-[18px] font-[400]">
            End Date
          </label>
          <br />
          <input
            id="endDate"
            type="date"
            placeholder="Enter Your Event Name..."
            className="bg-transparent border-2 border-[#8456EC] h-[40px] rounded-[8px] lg:w-[400px] md:w-[600px] px-[10px] mt-1"
          />
        </div>

        <div>
          <label htmlFor="location" className="text-[18px] font-[400]">
            Location
          </label>
          <br />
          <input
            id="location"
            type="text"
            placeholder="Enter Location..."
            className="bg-transparent border-2 border-[#8456EC] h-[40px] rounded-[8px] lg:w-[400px] md:w-[600px] px-[10px] mt-1"
          />
        </div>

        <div>
          <input
            onChange={handleFileName}
            id="uploadImage"
            type="file"
            className="hidden bg-transparent border-2 border-[#8456EC] h-[40px] rounded-[8px] lg:w-[400px] md:w-[600px] px-[10px] mt-1"
          />
          <br />
          <div className="flex items-center mt-1">
            <label
              htmlFor="uploadImage"
              className="text-[20px] font-[Helvetica] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white lg:px-[56px] md:px-[100px] py-[6px] rounded-l-[8px] cursor-pointer"
            >
              Upload Image
            </label>
            <p className="font-[700] font-[Helvetica] text-[18px] ml-[10px]">
              {fileName !== null ? fileName : "No Image"}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/event">
          <button className="text-[20px] font-[Helvetica] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white px-[56px] py-[16px] rounded-[10px] mt-[60px]">
            Next{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Create;
