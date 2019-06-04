import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { memeImages } from "../MemeImages";

const JumbotronItem = props => {
  return (
    <Jumbotron>
      <h1>Edit your meme!</h1>
      <p>Start editing your meme now.</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"git
        }}
      >
        <div style={{ width: "100vw", marginBottom: "30px" }}>
          <Image
            id="selected-meme"
            src={props.meme}
            alt="Dinosaur"
            height="200px"
            width="200px"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {memeImages.map(el => {
            return (
              <Image
                src={el.obj}
                style={{ width: "100px", height: "100px" }}
                onClick={props.changeMemeThumb}
                fluid
                roundedCircle
                thumbnail
              />
            );
          })}
        </div>
      </div>
      <p>
        <Button onClick={props.editMeme} className="mt-4" variant="primary">
          Download
        </Button>
      </p>
    </Jumbotron>
  );
};

export default JumbotronItem;
