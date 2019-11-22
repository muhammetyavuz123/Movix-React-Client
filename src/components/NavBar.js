import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="ui secondary  menu">
          <Link to="/" className="active item">
            Home
          </Link>

          <Link to="/Post" className="item">
            Movie Ekle
          </Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>
            <a className="ui item">Logout</a>
          </div>
        </div>
      </div>
    );
  }
}
