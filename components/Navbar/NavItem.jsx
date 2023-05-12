import React from "react";

const NavItem = ({ item, link }) => {
  return (
    <div className="text-color text-2xl cursor-pointer hover:underline transition duration-300">
      {item}
    </div>
  );
};

export default NavItem;
