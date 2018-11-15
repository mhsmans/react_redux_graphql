import { LOG_IN_CORE_REST } from '../actions/types';

// Set initial state. Will be filled with data later on. 
const initialState = {
    cookie: {}
  };
  
  // Return state depending on action type. 
  export default function(state = initialState, action) {
    console.log(action)
    switch (action.type) {
      case LOG_IN_CORE_REST:
        return {
          ...state,
          // cookie: action.payload
          cookie: 'Cookie is http-only, not possible to see values with javascript...'
        };
      default:
        return state;
    }
  }