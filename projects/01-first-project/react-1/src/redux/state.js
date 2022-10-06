// import exp from "constants";
import { rerenderEntireTree } from "../render";

let state = {
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

        newMessage: 'hi'
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5, 
        message: state.profilePage.newPostText, 
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5, message: state.dialogsPage.newMessage
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state)
}

export let updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessage = newMessage;
    rerenderEntireTree(state)
}

export default state;