import { authAPI, } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data,
                // isAuth: true
            }
        default:
            return state;
    }

}

export let setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth},
    }
}

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe()
        .then( data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return dispatch => {
        authAPI.login(email, password, rememberMe)
        .then (data => {
            if (data.resultCode === 0) {
                dispatch(authMe())
            }
        })
    }
}

export const logout = () => {
    return dispatch => {
        authAPI.logout()
        .then(data => {
            if (data.resultCode === 0 ) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer