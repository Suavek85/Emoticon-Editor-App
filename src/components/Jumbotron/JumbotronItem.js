import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const JumbotronItem = props => {
  return (
    <Jumbotron>
      <h1>Edit your meme!</h1>
      <p>Start editing your meme now.</p>
      <img id='selected-meme' src={props.meme} alt="Dinosaur" height="200px" width="200px" />
      <p>
        <Button onClick={props.editMeme} className="mt-4" variant="primary">
          Download
        </Button>
      </p>
    </Jumbotron>
  );
};

export default JumbotronItem;
