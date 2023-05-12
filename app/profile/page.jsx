"use client";
import React, { useEffect, useState } from "react";
import placeholder from "../../public/assets/placeholder.png";
import Image from "next/image";
import BidCard from "@/components/BidCard";
import jacket from "../../public/assets/jacket.jpeg";

const ProfilePage = () => {
  return (
    <section className="m-2 w-full flex flex-col gap-8">
      {/* header */}
      <div className="shadow-md flex flex-col">
        <div className="w-full h-[12rem] bg-black relative">
          <div className="absolute bottom-0 left-48 mb-4 flex flex-col gap-2">
            <h1 className="text-white text-2xl font-semibold">Kielo</h1>
            <h1 className="text-white text-lg">Philippines</h1>
          </div>
          <div className="absolute -bottom-20 left-0 ml-8">
            <div className="h-36 w-36 rounded-md bg-white shadow-sm p-[4px] overflow-hidden flex flex-col mb-2">
              <Image
                src={placeholder}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <button className="w-36 px-4 py-1 rounded-md flex justify-center items-center text-lg border-2 bg-transparent border-black shadow-sm">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="bg-gray-100 h-[7rem] w-full flex flex-row-reverse px-10 py-4 gap-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">0</h1>
            <h2 className="text-gray-800">Bids Won</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">2</h1>
            <h2 className="text-gray-800">Ongoing Bids</h2>
          </div>
        </div>
      </div>

      <div className="shadow-md flex flex-col">
        <div className="flex flex-col p-4">
          <h1 className=" font-semibold text-2xl mb-4 ml-10">ONGOING BIDS</h1>
          <div className="grid grid-cols-3 w-full gap-0">
            <div className="w-full flex justify-center items-center p-4">
              <BidCard
                img={jacket}
                title={"Premium Branded Jacket"}
                desc={`Introducing the ultimate statement piece for fashion-conscious
          individuals, the Premium Branded Jacket. Imbued with the essence of
          luxury and crafted with meticulous attention to detail, this jacket is
          a testament to refined taste and high-quality craftsmanship.`}
                endDate={"09 26 2023, 6:00 am"}
              />
            </div>
            <div className="w-full flex justify-center items-center p-4">
              <BidCard
                img={jacket}
                title={"Premium Branded Jacket"}
                desc={`Introducing the ultimate statement piece for fashion-conscious
          individuals, the Premium Branded Jacket. Imbued with the essence of
          luxury and crafted with meticulous attention to detail, this jacket is
          a testament to refined taste and high-quality craftsmanship.`}
                endDate={"09 26 2023, 6:00 am"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
