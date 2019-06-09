import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Emoticon from "../Emoticon/Emoticon";
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
        <div style={{ marginBottom: "30px" }}>
          <Emoticon
            currentFaceColor={props.currentFaceColor}
            currentEyesType={props.currentEyesType}
            currentMouthType={props.currentMouthType}
          />
        </div>
        <StylingButtons changeEmoHandler={props.changeEmoHandler} />
      </div>
    </Jumbotron>
  );
};

export default JumbotronItem;
