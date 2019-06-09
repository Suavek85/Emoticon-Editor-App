import React from "react";

const Emoticon = props => {
  return (
    <svg
      width="200px"
      height="200px"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 473.931 473.931"
    >
      <circle
        cx="236.966"
        cy="236.966"
        r="236.966"
        fill={props.currentFaceColor}
      />
      {props.currentEyesType}
      {props.currentMouthType}
    </svg>
  );
};

export default Emoticon
