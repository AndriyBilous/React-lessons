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
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }); 
    },
    saveProfileInfo(profileData){
        return instance.put('profile/', profileData); 
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me/`);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login/', {email, password, rememberMe});
    },
    logout(email, password, rememberMe = false) {
        return instance.delete('auth/login/');
    }
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => response.data)
// }