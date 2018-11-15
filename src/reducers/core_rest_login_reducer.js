import { LOG_IN_CORE_REST } from "../actions/types";
import { FETCH_CSRF_TOKEN } from "../actions/types";

// Set initial state. Will be filled with data later on.
const initialState = {
  cookie: {},
  csrfToken: ''
};

// Return state depending on action type.
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CSRF_TOKEN:
      return {
        ...state,
        csrfToken: action.payload
      };
    case LOG_IN_CORE_REST:
      return {
        ...state,
        // cookie: action.payload
        cookie:
          "Cookie is http-only, not possible to see values with javascript..."
      };
    default:
      return state;
  }
}
