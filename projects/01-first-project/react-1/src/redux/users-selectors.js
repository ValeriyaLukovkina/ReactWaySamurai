import { createSelector } from "reselect"

export const getUsers = (state) => {
    return state.usersPage.usersData
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingIsProgress = (state) => {
    return state.usersPage.followingIsProgress
}