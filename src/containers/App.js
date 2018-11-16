import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavCar";
import MoviesPage from "./MoviesPage";

class App extends Component {
  state = {
    movies: {
      1: { id: 1, title: "A River Runs Through It" },
      2: { id: 2, title: "Se7en" },
      3: { id: 3, title: "Inception" }
    }
  };

  render() {
    <div>
      <NavBar />
      <Router />
    </div>;
  }
}

export default Ap3;
