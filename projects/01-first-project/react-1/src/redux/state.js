const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW-MESSAGE';


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you', likesCount: '15' },
                { id: 2, message: "It's my first project", likesCount: '20' },
                { id: 3, message: 'bla', likesCount: '15' },
                { id: 4, message: "blabla", likesCount: '20' }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
    },
    _callSubscriber () {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5, 
                message: this._state.profilePage.newPostText, 
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type ===  ADD_MESSAGE) {
            let newMessage = {
                id: 5, message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber(this._state)
        }
    }
    
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
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

window.store = store;

export default store;