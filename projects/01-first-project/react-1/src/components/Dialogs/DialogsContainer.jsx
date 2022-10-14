import { connect } from "react-redux";
import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }

//                     let updateNewMessage = (txt) => {
//                         store.dispatch(updateNewMessageActionCreator(txt));
//                     }

//                     return (
//                         <Dialogs
//                             dialogsData={store.getState().dialogsPage.dialogsData}
//                             messagesData={store.getState().dialogsPage.messagesData}
//                             newMessage={store.getState().dialogsPage.newMessage}
//                             addMessage={addMessage}
//                             updateNewMessage={updateNewMessage} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps= (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },

        updateNewMessage: (txt) => {
            dispatch(updateNewMessageActionCreator(txt));
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;