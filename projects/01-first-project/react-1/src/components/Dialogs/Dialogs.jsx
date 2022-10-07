import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => (
        < DialogItem name={dialog.name} id={dialog.id} />
    ))

    let messagesElements = props.dialogsPage.messagesData.map(message => (
        < Message
            message={message.message}
        />
    ))

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateNewMessage = (e) => {
        let txt = e.target.value;
        props.dispatch(updateNewMessageActionCreator(txt));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    onChange={updateNewMessage}
                    value={props.dialogsPage.newMessage}
                ></textarea>
                <button onClick={addMessage}>Добавить</button>
            </div>
        </div>
    )
}

export default Dialogs;