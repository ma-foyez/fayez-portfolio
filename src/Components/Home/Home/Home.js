import React, { Component } from "react";
import "./Home.css";
import { StyleProvider } from "../../Shared/contexts/StyleContext";
import Header from '../../Shared/Header/Header'
import Banner from "../Banner/Banner";

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
          <Header />
          <Banner />
        </StyleProvider>
      </div>
    );
  }
}
