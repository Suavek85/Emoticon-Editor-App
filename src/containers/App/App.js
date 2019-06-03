import React, { Component } from "react";
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

  render() {
    return (
      <div className="App">
        <NavigationItem changeMeme={this.changeMemeHandler} />
        <JumbotronItem meme={this.state.selectedMeme} />
      </div>
    );
  }
}

export default App;
