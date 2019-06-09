import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Emoticon from "../Emoticon/Emoticon";
import { StylingButtons } from "../StylingButtons/StylingButtons";
import Pattern from "../Images/pattern.png";

const style = {
  backgroundImage: `url(${Pattern})`,
  marginBottom: '0px'
};

const JumbotronItem = props => {
  return (
    <Jumbotron style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            marginBottom: "30px",
            padding: "70px",
            backgroundColor: "#f8f9fa",
         
          }}
        >
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
