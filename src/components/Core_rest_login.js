import React, { Component } from "react";
import propTypes from "prop-types";
// Connects component to redux store.
import { connect } from "react-redux";
import { login } from "../actions/core_rest_login_actions";

class CoreRestLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.name, this.state.pass);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="pass"
            value={this.state.pass}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

CoreRestLogin.propTypes = {
  login: propTypes.func.isRequired,
  cookie: propTypes.object.isRequired
};

// Get state en pass it to props.
const mapStateToProps = state => ({
  cookie: state.coreRestCookie
});

// Connect component to redux store.
export default connect(
  mapStateToProps,
  { login }
)(CoreRestLogin);
