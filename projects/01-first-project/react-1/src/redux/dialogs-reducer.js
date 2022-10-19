const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 5, message: action.messageTxt }]
            }
        default:
            return state;
    }
}

export let addMessageActionCreator = (messageTxt) => {
    return {
        type: ADD_MESSAGE,
        messageTxt: messageTxt
    }
}



export default dialogsReducer;