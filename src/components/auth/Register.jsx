import React, { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../apis/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ModalContext } from "./../../apis/ModalContext";

const Register = () => {
  let { setShow } = useContext(ModalContext);
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [loading, setLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      setShow(false);
      if (password !== confirmPassword) {
        toast.error("Password is not matched");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);

        toast.success("successfully user registered");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          required
          placeholder="enter an Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          placeholder="enter an email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          placeholder="enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          required
          placeholder="enter confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button>{loading === true ? "loading" : "Register"}</button>
      </div>
    </form>
  );
};

export default Register;
