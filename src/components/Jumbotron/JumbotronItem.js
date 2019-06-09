import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { StylingButtons } from "../StylingButtons/StylingButtons";

const JumbotronItem = props => {
  return (
    <Jumbotron>
      <h1>Edit your emoticon!</h1>
      <p>Start editing your emoticon.</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{marginBottom: '30px'}}>
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
        </div>
        <StylingButtons changeEmoHandler={props.changeEmoHandler} />
      </div>
    </Jumbotron>
  );
};

export default JumbotronItem;
