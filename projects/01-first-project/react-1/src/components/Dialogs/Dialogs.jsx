import React from "react";
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

    let newMessageElements = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let updateNewMessage = () => {
        let txt = newMessageElements.current.value;
        props.updateNewMessage(txt);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    ref={newMessageElements}
                    onChange={updateNewMessage}
                    value={props.dialogsPage.newMessage}
                ></textarea>
                <button onClick={addMessage}>Добавить</button>
            </div>
        </div>
    )
}

export default Dialogs;