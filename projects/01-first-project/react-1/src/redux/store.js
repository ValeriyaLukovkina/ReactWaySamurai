import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
    
}

window.store = store;

export default store;