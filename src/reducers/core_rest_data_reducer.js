import { POST_DATA_CORE_REST } from "../actions/types";

// Set initial state. Will be filled with data later on. 
const initialState = {
  items: []
};

// Return state depending on action type. 
export default function(state = initialState, action) {
  switch (action.type) {
    case POST_DATA_CORE_REST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
