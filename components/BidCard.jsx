"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment/moment";
import Tag from "./Tag";
import Link from "next/link";

const BidCard = ({ img, title, desc, endDate }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [description, setDescription] = useState("");

  const [countdown, setCountdown] = useState({});
  const timeTillDate = "09 26 2023, 6:00 am";
  const timeFormat = "MM DD YYYY, h:mm a";

  const tags = [
    { tag: "Branded", color: "bg-blue-400" },
    { tag: "International", color: "bg-yellow-400" },
    { tag: "Certified Seller", color: "bg-green-400" },
  ];

  const item = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const diff = then.diff(now);
      const countdown = moment.duration(diff);
      //   setTime(`${countdown.hours}:${countdown.minutes}:${countdown.seconds}`);
      setCountdown({
        days: countdown.days(),
        hours: countdown.hours(),
        minutes: countdown.minutes(),
        seconds: countdown.seconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function limitStringTo50Words(str) {
    return str.split(" ").slice(0, 18).join(" ");
  }

  useEffect(() => {
    setDescription(limitStringTo50Words(desc));
  }, []);

  const handleSeeMore = () => {
    if (seeMore) {
      setDescription(limitStringTo50Words(desc));
    } else {
      setDescription(desc);
    }
    setSeeMore((prev) => !prev);
  };

  return (
    <div className="w-5/6 rounded-lg shadow-lg flex flex-col">
      <Link href={`/${item}`}>
        <div className="flex-1">
          <div className="h-60 w-full rounded-md sepia hover:sepia-0 transition duration-200 cursor-pointer">
            <Image
              src={img}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </Link>

      <div className="flex-1 px-4 py-2 flex flex-col gap-2">
        <div className="w-full flex justify-between items-start">
          <h1 className="text-xl font-semibold w-3/5">{title}</h1>
          <h2 className="bg-green-300 text-green-800 rounded-full px-2 py-1">
            {`${countdown.days} : ${countdown.minutes} : ${countdown.seconds}`}
          </h2>
        </div>
        <p className="text-sm text-gray-700">
          {description}{" "}
          <span
            className="background-color ml-1 px-1 cursor-pointer"
            onClick={() => {
              handleSeeMore();
            }}
          >
            {seeMore ? "see less" : "..."}
          </span>{" "}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 max-w-full px-4 py-2">
        {tags.map((tag, index) => {
          return <Tag tag={tag.tag} color={tag.color} key={index} />;
        })}
      </div>

      <div className="w-full px-4 my-1">
        <div className="bg-gray-400/50 h-[1px] w-full" />
      </div>

      <div className="px-4 py-2 flex justify-between cursor-default">
        <h1 className="font-bold text-md">End Date: </h1>
        <h2 className="font-normal text-red-400">{endDate}</h2>
      </div>
    </div>
  );
};

export default BidCard;
