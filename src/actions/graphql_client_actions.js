import { FETCH_DATA } from "./types";

// Fetch data and dispatch to reducer.
export const fetchData = () => dispatch => {
  fetch("http://www.example.com")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_DATA,
        payload: data
      })
    );
};
