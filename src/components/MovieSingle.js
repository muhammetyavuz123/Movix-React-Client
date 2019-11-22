import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovieID } from "../actions";

class MovieSingle extends Component {
  componentDidMount() {
    const movieID = this.props.match.params.movieID;

    this.props.getMovieID(movieID);
  }

  renderList = () => {
    console.log(this.props.moviesingle);

    if (this.props.moviesingle !== undefined) {
      return (
        <div>
          <div className="ui card container" style={{ textAlign: "center" }}>
            <div className="content">
              <div className="header">
                <h2>{this.props.moviesingle.name}</h2>
              </div>
            </div>
            <div className="content">
              <h4 className="ui sub header">Description</h4>
              <div className="ui small feed">
                <div className="event">
                  <div className="content">
                    <div className="summary">
                      {this.props.moviesingle.description}
                    </div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary"></div>
                  </div>
                </div>
                <div className="event">
                  <div className="content">
                    <div className="summary"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="extra content"></div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    moviesingle: state.movie
  };
};

export default connect(mapStateToProps, { getMovieID })(MovieSingle);
