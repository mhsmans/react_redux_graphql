import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Provider takes the store, which holds the application state tree.
import { Provider } from "react-redux";
import store from "./store";

import Data from "./components/Data";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <Data />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
