import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder="Enter your message" name="message" validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const DialogsReduxForm = reduxForm({form: "dialogsForm"})(DialogsForm);

export default DialogsReduxForm;