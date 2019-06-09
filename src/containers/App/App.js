import React, { Component } from "react";
import NavigationItem from "../../components/Navigation/NavigationItem";
import JumbotronItem from "../../components/Jumbotron/JumbotronItem";
import { stylingArray } from "../../components/StylingButtons/StylingButtonsStyle";
import Footer from "../../components/Footer/Footer";
import "./App.css";

class App extends Component {
  state = {
    currentFaceColor: "#ffc10e",
    currentEyesType: null,
    currentMouthType: null
  };

  changeEmoHandler = event => {
    const setOfArrays = [...stylingArray[0].arr, ...stylingArray[1].arr, ...stylingArray[2].arr];
    const clickedEl = setOfArrays.find(el => {
      return el.type === event.target.id;
    });
    const clickedIndex = setOfArrays.findIndex(el => {
      return el.type === event.target.id;
    });

    if (clickedIndex <= 5) {
      this.setState({ currentFaceColor: clickedEl.code });
    } else if (clickedIndex >= 12) {
      this.setState({ currentMouthType: clickedEl.code });
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
          currentMouthType={this.state.currentMouthType}
          changeEmoHandler={this.changeEmoHandler}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
