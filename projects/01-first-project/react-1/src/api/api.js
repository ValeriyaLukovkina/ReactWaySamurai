import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'f8e57fef-df99-4dc9-874f-f8c4755322e2'
    }
})

export const userAPI = {
    getUsers(pageNumber = 1, pageSize = 5) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                debugger
                return response.data})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    },
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
        .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post('/auth/login', {email, password, rememberMe })
        .then(response => response.data);
    },
    logout () {
        return instance.delete('/auth/login')
        .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => response.data)
    },

    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
        .then (response => {
            return response.data})
    },

    updateStatus (status) {
        return instance.put(`profile/status`, {
            status: status
        })
        .then (response => response.data)
    }
}