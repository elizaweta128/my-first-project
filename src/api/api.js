import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-key": "e47976ca-a701-4e3b-bfc7-3d8ef87f1b34"},
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    setUser(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
    }
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}
