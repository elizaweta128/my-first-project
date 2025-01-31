import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import DialogsReduxForm from "./DialogsForm/DialogsForm";

const Dialogs = (props) => {
    if(!props.isAuth){
        return <Navigate to="/login" />;
    }

    let dialogsElements =  props.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />)

    let sendMessage = (messageData) => {
        props.sendMessage(messageData.message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <DialogsReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}


export default Dialogs;