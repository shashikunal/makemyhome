import React, { useState } from "react";
import Styles from "./auth.module.css";
import { FaChevronUp } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register";
const AuthBlock = () => {
  let [state, setState] = useState(false);

  let LoginOrRegister = () => {
    setState(!state);
  };
  return (
    <section id={Styles.authBlock}>
      <article>
        <header>
          <span>
            <FaChevronUp />
          </span>
          <span>
            Your Trusted Real <br /> Estate Partner
          </span>
        </header>
        <main>
          <h2>{state === true ? "Register" : "Login"}</h2>
        </main>
        <footer>
          {state === true ? <Register /> : <Login />}
          <div className="form-group">
            <aside className={Styles.extraBlock}>
              <span>
                {state === true
                  ? "Already have an account"
                  : "Dont have an account"}
              </span>
              <button className="extraBtn" onClick={LoginOrRegister}>
                {state === true ? "Login" : "Register"}
              </button>
            </aside>
          </div>
        </footer>
      </article>
    </section>
  );
};

export default AuthBlock;
