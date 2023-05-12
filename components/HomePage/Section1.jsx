"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import pic1 from "../../public/assets/1.jpeg";
import pic2 from "../../public/assets/2.jpg";

const Section1 = () => {
  const [active, setActive] = useState("Exclusive");
  const [activeText, setActiveText] = useState("best");
  const titles = ["Exclusive", "Custom", "Unofficial"];

  useEffect(() => {
    if (active === "Exclusive") setActiveText("best");
    else if (active === "Custom") setActiveText("special");
    else setActiveText("premium");
  }, [active]);

  return (
    <>
      {/* Desktop */}
      <section className="hidden lg:flex md:flex flex-row gap-10 justify-start items-center">
        <div className="flex-1 ">
          <div className="border-[5px] bg-transparent border-color p-2 shadow-lg">
            <div className="w-full h-[30rem] grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
              <Image
                src={pic1}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full bg-black h-6 my-20 shadow-lg"></div>
        </div>

        <div className="flex-[2] flex flex-col justify-between gap-10">
          <div className="w-full">
            <input
              type="text"
              className="border-[5px] border-black bg-transparent w-full text-4xl px-4 py-1 text-black placeholder-black"
              placeholder="search..."
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            {titles.map((title, index) => {
              return (
                <h1
                  onClick={() => {
                    setActive((prev) => title);
                  }}
                  key={index}
                  className={`${
                    active === title ? "bg-black text-white" : ""
                  } text-[7rem] font-semibold cursor-pointer hover:bg-black hover:text-white w-full text-center transition duration-300`}
                >
                  {title}
                </h1>
              );
            })}
          </div>
        </div>

        <div className="flex-1 ">
          <div className="border-[5px] bg-transparent border-black p-2 shadow-lg">
            <div className="w-full h-[30rem] grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
              <Image
                src={pic2}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-full bg-black h-6 my-20 shadow-lg"></div>
        </div>

        
      </section>

      {/* Mobile */}
      <section className="flex flex-col lg:hidden md:hidden justify-center w-full">
        <div className="w-full">
          <input
            type="text"
            className="border-[5px] border-black bg-transparent w-full text-4xl px-4 py-1 text-black placeholder-black"
            placeholder="search..."
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-10 mb-8">
          {titles.map((title, index) => {
            return (
              <h1
                onClick={() => {
                  setActive((prev) => title);
                }}
                key={index}
                className={`${
                  active === title ? "bg-black text-white" : ""
                } text-7xl sm:text-8xl font-semibold cursor-pointer hover:bg-black hover:text-white w-full text-center transition duration-300`}
              >
                {title}
              </h1>
            );
          })}
        </div>

        {active === "Exclusive" && (
          <div className="w-full grid grid-cols-2 sm:gap-x-10 sm:gap-y-2 gap-x-4 gap-y-0">
            <div className="row-span-2">
              <div className="border-[5px] bg-transparent border-color p-2 shadow-lg">
                <div className="w-full h-[24rem] grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
                  <Image
                    src={pic1}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row-span-1">
              <div className="border-[5px] bg-transparent border-black p-2 shadow-lg">
                <div className="w-full h-full grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
                  <Image
                    src={pic2}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              {" "}
              <button className="w-full h-full flex justify-center items-center border-[5px] border-black text-4xl shadow-2xl">
                shop
              </button>
            </div>
          </div>
        )}

        {active === "Custom" && (
          <div className="w-full grid grid-cols-2 sm:gap-x-10 sm:gap-y-2 gap-x-4 gap-y-0">
            <div className="row-span-1">
              <div className="border-[5px] bg-transparent border-black p-2 shadow-lg">
                <div className="w-full h-full grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
                  <Image
                    src={pic2}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row-span-2">
              <div className="border-[5px] bg-transparent border-color p-2 shadow-lg">
                <div className="w-full h-[24rem] grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
                  <Image
                    src={pic1}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full">
              {" "}
              <button className="w-full h-full flex justify-center items-center border-[5px] border-black text-4xl shadow-2xl">
                sell
              </button>
            </div>
          </div>
        )}

        {active === "Unofficial" && (
          <div className="w-full grid grid-cols-2 sm:gap-x-10 sm:gap-y-2 gap-x-4 gap-y-6">
            

            <div className="row-span-1">
              <div className="border-[5px] bg-transparent border-color p-2 shadow-lg">
                <div className="w-full h-[20rem] grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
                  <Image
                    src={pic1}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row-span-1">
              <div className="border-[5px] bg-transparent border-black p-2 shadow-lg">
                <div className="w-full h-[20rem] grayscale hover:grayscale-0 transition duration-300 cursor-pointer">
                  <Image
                    src={pic2}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full col-span-2">
              {" "}
              <button className="w-full h-full flex justify-center items-center border-[5px] border-black text-4xl shadow-2xl">
                All for You
              </button>
            </div>
          </div>
        )}

        <div className="w-full text-center mt-10 text-3xl">
          We'll get the{" "}
          <span className="text-color font-semibold">{activeText} deals </span>
          for you
        </div>

        <div className="w-full bg-black h-6 my-10 shadow-lg"></div>
      </section>
    </>
  );
};

export default Section1;
