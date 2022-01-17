import React, { useState, useEffect } from "react";
import loginimg from "../assets/images/login-img.svg";
import Helmet from "../components/Helmet";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <Helmet title={`${isLoginForm ? "Đăng nhập" : "Đăng ký"}`}>
      <div className="login">
        <div className="login__container">
          <div className="login__container__left">
            <img src={loginimg} alt="login-img" />
          </div>

          <div className="login__container__right">
            <div className="login__container__right__content">
              <div className="login__container__right__title">
                <h3
                  onClick={() => setIsLoginForm(true)}
                  className={`${isLoginForm ? "active" : ""}`}
                >
                  Đăng nhập
                </h3>
                <h3
                  onClick={() => setIsLoginForm(false)}
                  className={`${!isLoginForm ? "active" : ""}`}
                >
                  Đăng ký
                </h3>
              </div>
              <div className="login__container__right__form">
                {isLoginForm ? <Loginform /> : <SignupForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}

function Loginform() {
  const [isFocusUser, setIsFocusUser] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);
  const [valueUser, setValueUser] = useState("");
  const [valuePass, setValuePass] = useState("");

  const checkEmptyValue = (value, setIsFocus) => {
    // value !== '' ? setIsFocus(true) : setIsFocus(false);
    if (value === "") setIsFocus(false);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={`form-group ${isFocusUser ? "not-empty" : ""}`}>
        <label htmlFor="username">username</label>
        <input
          onFocus={() => setIsFocusUser(true)}
          onBlur={() => checkEmptyValue(valueUser, setIsFocusUser)}
          onChange={(e) => setValueUser(e.target.value)}
          autoComplete="off"
          id="username"
        />
      </div>
      <div className={`form-group ${isFocusPass ? "not-empty" : ""}`}>
        <label htmlFor="password">password</label>
        <input
          onFocus={() => setIsFocusPass(true)}
          onBlur={() => checkEmptyValue(valuePass, setIsFocusPass)}
          onChange={(e) => setValuePass(e.target.value)}
          autoComplete="off"
          type="password"
          id="password"
        />
      </div>
      <div className="forgot">
        <label className="control">
          <CheckBox label="Remember me" />
        </label>
        <span>
          <a href="#" className="forgot-pass">
            Forgot password
          </a>
        </span>
      </div>
      <Button>Đăng nhập</Button>
      <span className="login-with">— or login with —</span>
      <div className="social-login">
        <a className="facebook">
          <i className="bx bxl-facebook"></i>
        </a>
        <a className="twitter">
          <i className="bx bxl-twitter"></i>
        </a>
        <a className="google">
          <i className="bx bxl-google"></i>
        </a>
      </div>
    </form>
  );
}

function SignupForm() {
  const [isFocusUser, setIsFocusUser] = useState(false);
  const [isFocusPass, setIsFocusPass] = useState(false);
  const [valueUser, setValueUser] = useState("");
  const [valuePass, setValuePass] = useState("");

  const checkEmptyValue = (value, setIsFocus) => {
    // value !== '' ? setIsFocus(true) : setIsFocus(false);
    if (value === "") setIsFocus(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={`form-group ${isFocusUser ? "not-empty" : ""}`}>
        <label htmlFor="username">username</label>
        <input
          onFocus={() => setIsFocusUser(true)}
          onBlur={() => checkEmptyValue(valueUser, setIsFocusUser)}
          onChange={(e) => setValueUser(e.target.value)}
          autoComplete="off"
          id="username"
        />
      </div>
      <div className={`form-group ${isFocusPass ? "not-empty" : ""}`}>
        <label htmlFor="password">password</label>
        <input
          onFocus={() => setIsFocusPass(true)}
          onBlur={() => checkEmptyValue(valuePass, setIsFocusPass)}
          onChange={(e) => setValuePass(e.target.value)}
          autoComplete="off"
          type="password"
          id="password"
        />
      </div>
      <Button>Đăng ký</Button>
      <span className="login-with">— or sign up with —</span>
      <div className="social-login">
        <a className="facebook">
          <i className="bx bxl-facebook"></i>
        </a>
        <a className="twitter">
          <i className="bx bxl-twitter"></i>
        </a>
        <a className="google">
          <i className="bx bxl-google"></i>
        </a>
      </div>
    </form>
  );
}
export default Login;
