import api from "../api/db";
import db from "../api/db";
import axios from "axios";

export const getMovie = () => async dispatch => {
  const response = await db.get("/movies");
  console.log(response.data);

  dispatch({ type: "GET_MOVİES", payload: response.data });
};

export const getMovieID = movieID => async dispatch => {
  const response = await db.get(`/movies/${movieID}`);
  console.log(response.data);

  dispatch({ type: "GET_MOVİE", payload: response.data });
};
