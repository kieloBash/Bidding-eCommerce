import React from "react";
import Image from "next/image";

import logo from "../../public/assets/logo.png";
import NavItem from "./NavItem";

const Nav = () => {
  const navItems = [
    { item: "Men", link: "/" },
    { item: "Women", link: "/" },
    { item: "Accessories", link: "/" },
    { item: "Decor", link: "/" },
  ];
  return (
    <>
      {/* Dekstop */}
      <nav className="w-full mt-10 hidden justify-between items-center mb-10 lg:flex md-flex">
        <div className="flex flex-row justify-between items-center">
          <div className="overflow-hidden flex justify-center items-center w-24 h-24">
            <Image src={logo} width={100} height={100} alt="Logo" />
          </div>
          <h1 className="text-2xl -ml-2">Biddify</h1>
        </div>

        <div className="flex flex-row justify-between items-center gap-4">
          {navItems.map((nav, index) => {
            return (
              <div
                className="flex justify-between gap-2 items-center"
                key={index}
              >
                <NavItem item={nav.item} link={nav.link} />
                {index < navItems.length - 1 && (
                  <div className="text-black text-3xl cursor-default">.</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-row gap-6 justify-between items-center">
          <div className="h-12 w-12 rounded-full shadow-2xl flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="stroke-color"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center cursor-pointer">
            <h1 className="text-black text-2xl">Bids</h1>
            <div className="h-10 w-10 shadow-2xl rounded-full bg-black text-white flex justify-center items-center text-2xl">
              1
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="w-full mt-2 flex justify-between items-center mb-2 lg:hidden md-hidden">
        <div className="h-16 w-16 rounded-full shadow-2xl flex justify-center items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="stroke-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="overflow-hidden flex justify-center items-center w-32 h-32 cursor-pointer">
            <Image src={logo} width={250} height={250} alt="Logo" />
          </div>
        </div>

        <div className="flex flex-row gap-2 justify-between items-center cursor-pointer">
          <div className="h-12 w-12 shadow-2xl rounded-full bg-black text-white flex justify-center items-center text-2xl">
            1
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
