import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import DropdownItem from "../Popover/Popover";

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
        <div>
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
          </svg>
        </div>

        <p>
          <Button
            id="normal"
            onClick={props.changeEyesType}
            className="mt-4"
            variant="primary"
          >
            Add eyes
          </Button>
        </p>
        <DropdownItem changeEyesType={props.changeEyesType}/>
      </div>
    </Jumbotron>
  );
};

export default JumbotronItem;
