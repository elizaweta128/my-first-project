import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";
import s from "./../../common/FormsControls/FormsControls.module.css"

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className={s.authForm}>
                <div>
                    <Field type="email" component={Input} name={"email"}  placeholder={"Email"} validate={[requiredField, maxLength30]}/>
                </div>
                <div>
                    <Field type="password" component={Input} name={"password"} placeholder={"Password"} validate={[requiredField, maxLength30]}/>
                </div>
                <div>
                    <div className={s.rememberMeBlock}>
                        <Field type="checkbox" component={"input"} name={"rememberMe"} id={"checkbox"}/>
                        <label htmlFor="checkbox" className={s.rememberMe}>remember me</label>
                    </div>
                </div>
                {error
                ?  <div className={s.formSummaryError}>
                        {error}
                    </div>
                : null}
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default LoginReduxForm;