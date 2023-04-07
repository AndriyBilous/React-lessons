import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login, logout } from "../../redux/authReduser";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormControls";
import style from "../common/FormsControls/FormControls.module.css";

const maxLength15 = maxLengthCreator(15);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "email", "Email", required)}
      {createField(Input, "password", "Password", [required, maxLength15], {
        type: "password",
      })}
      {createField(
        Input,
        "rememberMe",
        null,
        null,
        { type: "checkbox" },
        "Remember Me"
      )}

      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl && createField(Input, "captcha", "Input symbols from image", required)}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (isAuth) {
    return <Navigate to="/profile/" />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login, logout })(Login);
