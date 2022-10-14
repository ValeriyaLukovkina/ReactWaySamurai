const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Lera' },
        { id: 2, name: 'Den' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Serg' },
        { id: 5, name: 'Ilya' },
    ],

    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
    ],

    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessage: '',
                messagesData: [...state.messagesData, { id: 5, message: state.newMessage }]
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state;
    }
}

export let addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export let updateNewMessageActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: newMessage
    }
}


export default dialogsReducer;