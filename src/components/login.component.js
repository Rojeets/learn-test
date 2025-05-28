import React, { Component } from "react";
import "../css/login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div class="signup-box">
        <p>Log in</p>
        <form method="post" action="dashboard" className="form">
            <div class="user box">
                <input required="" name="username" type="text" id="username"/>
                <label>Email</label>
            </div>
            <div class="user box">
                <input required="" name="password" type="password" id="password"/>
                <label>Password</label>
            </div>
            <button type="submit" class="signup-button" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </button>
        </form>
        <p>Don't have an account? <a href="register" class="a2">Sign up!</a></p>
    </div>
      </div>
    );
  }
}
