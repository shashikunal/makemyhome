import React from "react";

const Login = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required placeholder="enter an email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          placeholder="enter password"
        />
      </div>

      <div className="form-group">
        <button>Login</button>
      </div>
    </form>
  );
};

export default Login;
