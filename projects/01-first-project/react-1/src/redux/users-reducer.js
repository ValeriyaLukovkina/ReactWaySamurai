const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                    // return user.id === action.id ? {...user, followed: true} : user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                    // return user.id === action.id ? {...user, followed: false} : user;
                })
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
        default:
            return state
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsers = (usersData) => {
    return {
        type: SET_USERS,
        usersData
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count: count
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}

export default usersReducer;