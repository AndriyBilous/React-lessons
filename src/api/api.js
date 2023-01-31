import axios from "axios";

    const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': 'c3f046fc-05ff-4b87-bbb4-30bacd2184a7'
        }
    })

export const usersApi = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    },

    followed (follow, userId) {
        if (follow === 'false') {
        return instance.post(`follow/${userId}`)
    } else {
        return instance.delete(`follow/${userId}`)
    }},

    getProfile(userId) {
        console.log('Obsolete method. Please use profileAPI object')
        return profileApi.getProfile(userId)
    },
}

export const profileApi = {
    getProfile(userId) {
        return instance
        .get(`profile/` + userId);
    },
    getStatus(userId) {       
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status}); 
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => response.data)
// }