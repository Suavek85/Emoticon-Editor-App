import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Dinosaur from "../Images/dinosaurMeme.png";

const JumbotronItem = () => {
  return (
    <Jumbotron>
      <h1>Edit your meme!</h1>
      <p>Start editing your meme now.</p>
      <img src={Dinosaur} alt="Dinosaur" height="200px" width="200px" />
      <p>
        <Button className="mt-4" variant="primary">
          Download
        </Button>
      </p>
    </Jumbotron>
  );
};

export default JumbotronItem;
