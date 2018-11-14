import React, { Component } from "react";
import propTypes from "prop-types";
// Connects component to redux store.
import { connect } from "react-redux";
import { post } from "../actions/core_rest_client_actions";

class CoreRestPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.post(this.state.name);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => {
                this.handleInputChange(e);
              }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

CoreRestPostForm.propTypes = {
    post: propTypes.func.isRequired
  };
  
  // Get state en pass it to props.
  const mapStateToProps = state => ({
    data: state.data
  });
  
  // Connect component to redux store.
  export default connect(
    mapStateToProps,
    { post }
  )(CoreRestPostForm);
