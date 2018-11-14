import React, { Component } from "react";
import propTypes from "prop-types";
// Connects component to redux store.
import { connect } from "react-redux";
import { fetchGraphqlData } from "../actions/graphql_client_actions";

import "./Data.css";

class Data extends Component {
  componentWillMount() {
    this.props.fetchGraphqlData();
  }

  render() {
    console.log(this.props.graphqlData);
    const items = this.props.graphqlData.map(item => (
      <div key={item.Id}>
        <hr />
        <h3>{item.Name}</h3>
        <p>HP: {item.HP}</p>
        <p>Height: {item.Height}</p>
        {/* map nested arrays */}
        <p>Abilities:</p>
        {item.Abilities.map(ability => (
          <div key={ability.Ability.name}>
            <p>{ability.Ability.name}</p>
          </div>
        ))}
        <p>Type:</p>
        {item.Type.map(type => (
          <div key={type.Typename.name}>
            <p>{type.Typename.name}</p>
          </div>
        ))}
        <p>Image:</p>
        <img src={item.Image.url} alt="" className="pokemon-image"></img>
      </div>
    ));
    return (
      <div className="pokemon-container">
        <h1>Pokemons GraphQL</h1>
        {items}
      </div>
    );
  }
}

Data.propTypes = {
  fetchGraphqlData: propTypes.func.isRequired,
  graphqlData: propTypes.array.isRequired
};

const mapStateToProps = state => ({
  graphqlData: state.graphqlData.items
});

export default connect(
  mapStateToProps,
  { fetchGraphqlData }
)(Data);
