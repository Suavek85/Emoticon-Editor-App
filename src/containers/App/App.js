import React, { Component } from "react";
//import Jimp from "jimp";
import NavigationItem from "../../components/Navigation/NavigationItem";
import JumbotronItem from "../../components/Jumbotron/JumbotronItem";
import Footer from "../../components/Footer/Footer";
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

  changeMemeFromThumbnail = event => {
    this.setState({
      selectedMeme: event.target.src
    });
  };

  editMemeHandler = () => {
   
    /*
    Jimp.read(memeImages[0].obj)
      .then(image => {
        console.log(image);
        image.greyscale().scale(0.7)
        .write('../../components/Images/dinosaurMeme.png');
     
      })
      .catch(err => {
        console.log(err);
      });
*/

  };

  render() {
    return (
      <div className="App">
        <NavigationItem changeMeme={this.changeMemeHandler} />
        <JumbotronItem
          meme={this.state.selectedMeme}
          editMeme={this.editMemeHandler}
          changeMemeThumb={this.changeMemeFromThumbnail}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
