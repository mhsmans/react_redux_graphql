import { FETCH_DATA } from "./types";

// Fetch data and dispatch to reducer.
export const fetchData = () => dispatch => {
  fetch("http://drupalql.local/jsonapi/node/pokemon")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_DATA,
        payload: data.data
      })
    )
    .catch(err => {
      console.log(err)
    })
};
