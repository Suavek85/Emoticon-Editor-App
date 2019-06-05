import React, { Component } from "react";
import NavigationItem from "../../components/Navigation/NavigationItem";
import JumbotronItem from "../../components/Jumbotron/JumbotronItem";
import Footer from "../../components/Footer/Footer";
import "./App.css";
import {
  emoEyesTypes,
  emoFaceColors
} from "../../components/EmoStyles/EmoStyles";

class App extends Component {
  state = {
    currentFaceColor: "#ffc10e",
    currentEyesType: null
  };

  changeFaceColorHandler = event => {
    const clickedColor = emoFaceColors.find(el => {
      return el.color === event.target.id;
    });

    this.setState({ currentFaceColor: clickedColor.filled });
  };

  changeEyesTyperHandler = event => {
    const clickedEye = emoEyesTypes.find(el => {
      return el.type === event.target.id;
    });

    this.setState({ currentEyesType: clickedEye.code });
  };

  render() {
    return (
      <div className="App">
        <NavigationItem changeFaceColor={this.changeFaceColorHandler} />
        <JumbotronItem
          currentFaceColor={this.state.currentFaceColor}
          currentEyesType={this.state.currentEyesType}
          changeEyesType={this.changeEyesTyperHandler}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
