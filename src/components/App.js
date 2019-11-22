import React from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieSingle from "./MovieSingle";
import Post from "./Post";
import NavBar from "./NavBar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <p> welcome to moviex</p>
          <Route exact path="/" component={MovieCard} />

          <Route exact path="/movies/:movieID" component={MovieSingle} />
          <Route exact path="/Post" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
