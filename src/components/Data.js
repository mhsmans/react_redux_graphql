import React, { Component } from "react";
import PropTypes from "prop-types";
// Connects component to redux store.
import { connect } from "react-redux";
import { fetchData } from "../actions/graphql_client_actions";

class Data extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Data</h1>
      </div>
    );
  }
}

Data.PropTypes = {
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.data.items
});

export default connect(
  mapStateToProps,
  { fetchData }
)(Data);
