import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1>This is login page</h1>
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        className="login__logo"
      />
      <div className="login__container">
        <h2>Sign-in</h2>
        <form action="">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
