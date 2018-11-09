import React, { Component } from "react";
import propTypes from "prop-types";
// Connects component to redux store.
import { connect } from "react-redux";
import { fetchJsonApiData } from "../actions/json_api_client_actions";

import "./Data.css";

class JsonApiData extends Component {
  componentWillMount() {
    this.props.fetchJsonApiData();
  }

  render() {
    console.log(this.props.jsonApiData);
    const items = this.props.jsonApiData.map(item => (
      <div key={item.attributes.nid}>
        <div className="pokemon">
          <h3>{item.attributes.title}</h3>
          <p>Height: {item.attributes.field_height}</p>
          <p>HP: {item.attributes.field_hp}</p>
        </div>
      </div>
    ));
    return (
      <div className="pokemon-container">
        <h1>Pokemons JSONAPI</h1>
        {items}
      </div>
    );
  }
}

JsonApiData.propTypes = {
  fetchJsonApiData: propTypes.func.isRequired,
  jsonApiData: propTypes.array.isRequired
};

// Get state en pass it to props.
const mapStateToProps = state => ({
  jsonApiData: state.jsonData.items
});

// Connect component to redux store.
export default connect(
  mapStateToProps,
  { fetchJsonApiData }
)(JsonApiData);
