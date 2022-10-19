import { connect } from "react-redux";
import React from "react";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { WithAuthRedirerct } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps= (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageTxt) => {
            dispatch(addMessageActionCreator(messageTxt));
        }

    }
}


const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    connect(mapStateToPropsForRedirect),
    WithAuthRedirerct
)(Dialogs)