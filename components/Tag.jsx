import React from "react";

const Tag = ({ tag, color }) => {
  return (
    <div className={`px-3 cursor-default ${color} text-gray-600 text-sm rounded-full`}>{tag}</div>
  );
};

export default Tag;
