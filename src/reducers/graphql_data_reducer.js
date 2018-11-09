import { FETCH_DATA_GRAPHQL } from "../actions/types";

// Set initial state. Will be filled with data later on. 
const initialState = {
  items: []
};

// Return state depending on action type. 
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_GRAPHQL:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
