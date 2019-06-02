import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import JumbotronItem from "../../components/Jumbotron/Jumbotron";

class Layout extends Component {
  render() {
    return (
      <>
        <Navigation />
        <JumbotronItem />
      </>
    );
  }
}

export default Layout;
