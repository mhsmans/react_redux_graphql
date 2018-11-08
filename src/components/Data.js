import React, { Component } from "react";
import propTypes from "prop-types";
// Connects component to redux store.
import { connect } from "react-redux";
import { fetchData } from "../actions/graphql_client_actions";

import './Data.css';

class Data extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props.data);
    const items = this.props.data.map(item => (
      <div key={item.attributes.nid}>
        <hr />
        <h3>{item.attributes.title}</h3>
        <p>HP: {item.attributes.field_hp}</p>
      </div>
    ));
    return (
      <div className="pokemon-container">
        <h1>Pokemons</h1>
        {items}
      </div>
    );
  }
}

Data.propTypes = {
  fetchData: propTypes.func.isRequired,
  data: propTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.data.items
});

export default connect(
  mapStateToProps,
  { fetchData }
)(Data);
