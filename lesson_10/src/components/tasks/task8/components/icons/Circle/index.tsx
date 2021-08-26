import React, { FC } from "react";

const Circle: FC = () => {
  return (
    <svg height="100" width="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        strokeWidth="3"
        fill="transparent"
      />
    </svg>
  );
};

export default Circle;
