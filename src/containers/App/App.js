import React, { Component } from "react";
import Jimp from "jimp";
import NavigationItem from "../../components/Navigation/NavigationItem";
import JumbotronItem from "../../components/Jumbotron/JumbotronItem";
import { memeImages } from "../../components/MemeImages";
import "./App.css";

class App extends Component {
  state = {
    selectedMeme: memeImages[0].obj
  };

  changeMemeHandler = event => {
    const clickedMeme = memeImages.find(
      el => el.name === event.target.innerHTML
    );
    this.setState({
      selectedMeme: clickedMeme.obj
    });
  };

  editMemeHandler = () => {
    //const sourceTest = document.getElementById("selected-meme").src;

    Jimp.read(memeImages[0].obj)
      .then(image => {
        image.greyscale().scale(0.7);
        //.write('small-dinosaur.png');
        //.getBase64()
        console.log(image);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <NavigationItem changeMeme={this.changeMemeHandler} />
        <JumbotronItem
          meme={this.state.selectedMeme}
          editMeme={this.editMemeHandler}
        />
      </div>
    );
  }
}

export default App;
