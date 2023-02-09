import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login, logout } from "../../redux/authReduser";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormControls";
import style from "../common/FormsControls/FormControls.module.css"

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
  
  

    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input} name="email" placeholder="Email" validate={[required]}/>
        </div>
        <div>
          <Field component={Input} name="password" placeholder="Password" type={"password"} validate={[required, maxLength15]}/>
        </div>
        <div>
          <Field component={Input} name="rememberMe" type="checkbox"/>
        </div>
        <div>Remember Me</div>
        { props.error && <div className={style.formSummaryError}>
          {props.error}
        </div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to="/profile/"/>
  }

    return (
      <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);