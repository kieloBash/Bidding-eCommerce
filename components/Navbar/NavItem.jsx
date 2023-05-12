import React from "react";

const NavItem = ({ item, link }) => {
  return (
    <div className="lg:text-2xl md:text-2xl text-lg cursor-pointer hover:underline transition duration-300 ">
      {item}
    </div>
  );
};

export default NavItem;
