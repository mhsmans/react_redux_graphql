import { FETCH_DATA_JSONAPI } from "./types";

// Fetch data from jsonapi and dispatch to reducer.
export const fetchJsonApiData = () => dispatch => {
  fetch("http://drupalql.local/jsonapi/node/pokemon")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_DATA_JSONAPI,
        payload: data.data
      })
    )
    .catch(err => {
      console.log(err);
    });
};
