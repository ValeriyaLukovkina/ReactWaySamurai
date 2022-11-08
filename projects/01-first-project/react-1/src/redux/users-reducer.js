import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOING_IS_PROGRESS = 'TOGGLE-FOLLOING-IS-PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: false})
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: true})
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.usersData

            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOING_IS_PROGRESS:
            return {
                ...state,
                followingIsProgress: action.followingIsProgress
                    ? [...state.followingIsProgress, action.userId]
                    : [state.followingIsProgress.filter(id => id != action.userId)]
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (usersData) => ({ type: SET_USERS, usersData })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingIsProgress = (followingIsProgress, userId) => ({
    type: TOGGLE_FOLLOING_IS_PROGRESS,
    followingIsProgress,
    userId
})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage));
    let promise = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(promise.items));
    dispatch(setTotalUsersCount(promise.totalCount));
    dispatch(toggleIsFetching(false));
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingIsProgress(true, userId))
    let promise = await apiMethod(userId);
    if (promise.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingIsProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, userAPI.follow.bind(userAPI), unfollowSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, userAPI.unfollow.bind(userAPI), followSuccess);
}

export default usersReducer;