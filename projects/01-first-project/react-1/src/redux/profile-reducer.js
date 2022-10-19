import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS'

let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you', likesCount: '15' },
        { id: 2, message: "It's my first project", likesCount: '20' },
        { id: 3, message: 'bla', likesCount: '15' },
        { id: 4, message: "blabla", likesCount: '20' }
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0
                }]
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;

    }
}

export let addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    }
}

export let setUserProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile,
    }
}

export let setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
    }
}



export default profileReducer;