import React, { Component } from "react";
import logo from "./logo.png";
import "./Home.css";
import Searchfield from "../searchfield/Searchfield";

class Home extends Component {
  state = {
    device: this.getDevice(),
    language: this.getLanguage()
  };

  componentDidMount() {
    window.addEventListener("resize", e => {
      this.handleResize(e);
    });
  }

  render() {
    return (
      <div className={this.getClass()}>
        <div
          style={{
            display: this.state.device === "desktop" ? "block" : "none"
          }}
          className="home-banner-desktop"
        >
          <span className="home-banner-span">Banner Space</span>
        </div>
        <img className="app-logo" src={logo} alt="logo" />
        <Searchfield
          dataUrl="http://35.180.182.8/search"
          typingTimeout={1 * 1000} //1 sec
          requestTimeout={3 * 1000} //3 secs
          label="What place are you looking for?"
          language={this.state.language}
          cacheName="xe-app-queries"
          cacheExpiration={5 * 60 * 1000} //5 mins
          device={this.state.device}
        ></Searchfield>
        <div
          style={{ display: this.state.device === "tablet" ? "block" : "none" }}
          className="home-banner-tablet"
        >
          <span className="home-banner-span">Banner Space</span>
        </div>
      </div>
    );
  }

  handleResize(e) {
    this.setState({ device: this.getDevice() });
  }

  getDevice() {
    let viewPortWidth = window.innerWidth,
      mobileWidth = window.mobileWidth,
      tabletWidth = window.tabletWidth;

    if (mobileWidth < viewPortWidth && viewPortWidth <= tabletWidth) {
      return "tablet";
    } else if (viewPortWidth <= mobileWidth) {
      return "mobile";
    } else {
      return "desktop";
    }
  }

  getClass() {
    switch (this.state.device) {
      case "desktop":
        return "home-desktop";
      case "tablet":
        return "home-tablet";
      case "mobile":
        return "home-mobile";
      default:
        return "home-desktop";
    }
  }

  getLanguage() {
    let browserLanguage = navigator.language;

    if (browserLanguage.includes("el")) {
      return "el";
    } else if (browserLanguage.includes("en")) {
      return "en";
    } else {
      return "en";
    }
  }
}

export default Home;
