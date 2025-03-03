import React from "react";
import s from "./FormsControls.module.css"

const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} + ${hasError ? `${s.error}` : ""}`}>
            {props.children}
            {hasError
                ?  <div className={s.messageError}>
                    {hasError
                        ? meta.error : undefined}
                </div> : undefined}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, element, ...restProps} = props;
    return (<FormControl {...props}>
            <textarea {...input} {...restProps}/>
    </FormControl>
    )
}

export const Input= (props) => {
    const {input, meta, element, ...restProps} = props;
    return (<FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

