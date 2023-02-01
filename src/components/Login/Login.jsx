import React from "react";
import { Field, reduxForm } from "redux-form";


const LoginForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={"input"} name="Login" placeholder="login"/>
        </div>
        <div>
          <Field component={"input"} name="Password" placeholder="password" />
        </div>
        <div>
          <Field component={"input"} name="rememberMe" type="checkbox"/>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

    return (
      <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    );
}

export default Login;