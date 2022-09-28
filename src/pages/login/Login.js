import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div class="underline-title"></div>
          </div>
          <form method="post" class="form">
            <label for="user-email" style={{paddingTop:"13px"}}>
              &nbsp;Email
            </label>
            <input
              id="user-email"
              class="form-content"
              type="email"
              name="email"
              autocomplete="on"
              required
            />
            <div class="form-border"></div>
            <label for="user-password" style={{paddingTop:"22px"}}>
              &nbsp;Password
            </label>
            <input
              id="user-password"
              class="form-content"
              type="password"
              name="password"
              required
            />
            <div class="form-border"></div>
            <a href="#">
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
            <a href="#" id="signup">
              Don't have account yet?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
