import React, { Component } from "react";
import "./App.css";

// Provider takes the store, which holds the application state tree.
import { Provider } from "react-redux";
import store from "./store";

// import JsonApiData from "./components/Json_api_data";
import GraphqlData from "./components/Graphql_data";
import CoreRestLogin from "./components/core_rest_login";

class App extends Component {
  render() {
    return (
      // "Provide" the redux application state store to child components. 
      <Provider store={store}>
        <div className="App">
          {/* <JsonApiData /> */}
          <hr />
          <GraphqlData />
          <hr />
          <CoreRestLogin />
        </div>
      </Provider>
    );
  }
}

export default App;
