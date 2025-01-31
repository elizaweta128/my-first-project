import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{"API-key": "61187274-4cc0-4fe2-b039-693927c84f37"},
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    setUser (userId) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getProfileStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me(){
        return instance.get(`/auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`/auth/login`)
    }
}
