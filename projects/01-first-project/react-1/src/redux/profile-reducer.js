const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you', likesCount: '15' },
        { id: 2, message: "It's my first project", likesCount: '20' },
        { id: 3, message: 'bla', likesCount: '15' },
        { id: 4, message: "blabla", likesCount: '20' }
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                }]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;

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

export let setUserProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile,
    }
}

export default profileReducer;