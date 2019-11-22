import React, { Component } from "react";
import faker from "faker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { getMovie } from "../actions";

// const Input = styled.input`
//   //inputa style vermek için kullanılan kolaylık
//   background: gray;
// `;

class MovieCard extends Component {
  componentDidMount() {
    this.props.getMovie();
  }
  renderList = () => {
    const response = this.props.movies.map(movie => (
      <div>
        <Link to={`/movies/${movie._id}`}>
          <div
            className="ui link cards"
            style={{
              float: "left",
              textAlign: "center",
              marginLeft: "30px"
            }}
          >
            <div className="card">
              <div className="image">
                <img src={faker.image.avatar()} />
              </div>
              <div className="content">
                <div className="header">{movie.name}</div>
                <div className="meta">
                  <a>Friends</a>
                </div>
                <div className="description">{movie.description}</div>
              </div>
              <div className="extra content">
                <span className="right floated">{movie.relased}</span>
                <span>
                  <i className="user icon"></i>
                  {movie.genres}
                </span>
              </div>

              <div></div>
            </div>
          </div>
        </Link>
      </div>
    ));
    return response;
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovie })(MovieCard);
