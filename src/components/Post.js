import React, { Component } from "react";
import axios from "axios";
import { API_HOST } from ".././config/api";

export default class Post extends Component {
  state = {
    name: "",
    description: "",
    relased: "",
    genre: []
  };

  postMovie = async () => {
    const requestBody = this.state;
    try {
      const response = await axios.post(`${API_HOST}/movies`, requestBody);
      console.log(response.data);
    } catch (error) {}
  };
  onSubmit = event => {
    event.preventDefault();
    this.postMovie();
  };

  render() {
    return (
      <form class="ui form container" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={event => this.setState({ name: event.target.value })}
        ></input>
        <br></br>
        <hr></hr>
        <br></br>
        <input
          type="text"
          placeholder="description"
          onChange={event => this.setState({ description: event.target.value })}
        ></input>
        <br></br>
        <hr></hr>
        <br></br>

        <input
          type="text"
          placeholder="relased"
          onChange={event => this.setState({ relased: event.target.value })}
        ></input>
        <br></br>
        <hr></hr>
        <br></br>

        <input
          type="text"
          placeholder="genre"
          onChange={event => this.setState({ genre: event.target.value })}
        ></input>
        <button className="ui button" type="submit">
          gönder
        </button>
      </form>
    );
  }
}
