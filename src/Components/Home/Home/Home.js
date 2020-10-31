import React, { Component } from "react";
import "./Home.css";
import { StyleProvider } from "../../Shared/contexts/StyleContext";
import Header from '../../Shared/Header/Header'
import Top from '../../Shared/topbutton/Top'
import Banner from "../Banner/Banner";
import Skill from "../Skill/Skill";
import PortfolioProject from "../PortfolioProject/PortfolioProject";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Resume from "../../Resume/Resume";
import Footer from "../../Shared/Footer/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Banner />
          <Skill />
          <PortfolioProject />
          <Blog />
          <Contact />
          <Resume />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
