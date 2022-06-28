import React, { Component } from "react";
import Header from "./common/Header";
import Slider from "./common/Slider";
import About from "./common/About";
import BestRoom from "./common/BestRoom";
import FormRegister from "./common/FormRegister";
import Footer from "./common/Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slider />
        <About />
        <BestRoom />
        <FormRegister />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
