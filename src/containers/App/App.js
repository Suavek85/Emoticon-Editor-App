import React, { Component } from "react";
import NavigationItem from "../../components/Navigation/NavigationItem";
import JumbotronItem from "../../components/Jumbotron/JumbotronItem";
import { stylingArray } from "../../components/StylingButtons/StylingButtons";
import Footer from "../../components/Footer/Footer";
import "./App.css";

class App extends Component {
  state = {
    currentFaceColor: "#ffc10e",
    currentEyesType: null
  };

  changeEmoHandler = event => {
    const setOfArrays = [...stylingArray[0].arr, ...stylingArray[1].arr];
    const clickedEl = setOfArrays.find(el => {
      return el.type === event.target.id;
    });
    const clickedIndex = setOfArrays.findIndex(el => {
      return el.type === event.target.id;
    });
    if (clickedIndex <= 3) {
      this.setState({ currentFaceColor: clickedEl.code });
    } else {
      this.setState({ currentEyesType: clickedEl.code });
    }
  };

  render() {
    return (
      <div className="App">
        <NavigationItem />
        <JumbotronItem
          currentFaceColor={this.state.currentFaceColor}
          currentEyesType={this.state.currentEyesType}
          changeEmoHandler={this.changeEmoHandler}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
