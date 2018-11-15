import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

// Create the application store.
const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || // Does not work on firefox with devtools extension installed. 
  compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

