import React, { Component } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Explorer from './Explorer'
import Rest from './Rest';
import Share from './Share';
import Footer from './Footer';

class App extends Component { 

  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Explorer />
        <Rest />
        <Share />
        <Footer />
      </div>
    );
  }
}

export default App;
