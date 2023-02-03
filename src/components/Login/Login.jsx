import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength30, maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormControls";

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
  
  // const maxLength10 = maxLengthCreator(10);

    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input} name="Login" placeholder="login" validate={[required]}/>
        </div>
        <div>
          <Field component={Input} name="Password" placeholder="password" validate={[required]}/>
        </div>
        <div>
          <Field component={Input} name="rememberMe" type="checkbox"/>
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