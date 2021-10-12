import React, { Component } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

// algo
// 1. show login by default
// 2. onClick on login hide login and show spinner for 2sec
// 3. after 2sec hide spinner and show logout
// 4. onClick on logout hide logout and show login
export default class Auth extends Component {
    state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  
  loginHandler = () => {
    this.setState({ isProcessing: true });
    setInterval(() => {
      this.setState({ isProcessing: false, isLoggedIn: true });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isProcessing } = this.state;
    if (isProcessing) {
      return <Spinner />;
    }
    return isLoggedIn ? (
      <Logout onLogout={this.logoutHandler} />
    ) : (
      <Login onLogin={this.loginHandler} />
    );
  }
}