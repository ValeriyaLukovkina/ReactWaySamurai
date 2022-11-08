import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

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
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
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

export let setStatus = (status) => ({ type: SET_STATUS, status });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });


export const getProfile = (userId) => async (dispatch) => {
    let promise = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(promise));
}

export const getStatus = (userId) => async (dispatch) => {
    let promise = await profileAPI.getStatus(userId);
    dispatch(setStatus(promise));
}

export const updateStatus = (status) => async (dispatch) => {
    let promise = await profileAPI.updateStatus(status);
    if (promise.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;