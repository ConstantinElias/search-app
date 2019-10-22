import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./components/home/Home";

function App() {
  window.mobileWidth = 640;
  window.tabletWidth = 1024;

  return <Home></Home>;
}

export default App;
