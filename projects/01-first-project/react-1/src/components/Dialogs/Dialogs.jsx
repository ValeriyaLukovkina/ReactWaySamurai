import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import { maxLength, required } from "../../utils/validators/validators";

const maxLength100 = maxLength(100)

const NewMessageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
            name='newMessage'
            validate={[required, maxLength100]}
        />
        <button>Добавить</button>
    </form>
    )}

const NewMessageReduxForm = reduxForm({
    form: 'messagePost'
})(NewMessageForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => (
        < DialogItem name={dialog.name} id={dialog.id} />
    ))

    let messagesElements = props.dialogsPage.messagesData.map(message => (
        < Message
            message={message.message}
        />
    ))

    let onAddMessage = (values) => {
        props.addMessage(values.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <NewMessageReduxForm onSubmit={onAddMessage}/>
        </div>
    )
}

export default Dialogs;