import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '36ce6be5-9b3d-4945-b379-cfa1b8671f97'
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
         .then(response => response.data)
   },
   unfollow(userId) {
      return instance.delete(`follow/${ userId }`)
   },
   follow(userId) {
      return instance.post(`follow/${ userId }`)
   }
}

export const authAPI = {
   auth() {
      return instance.get(`auth/me`)
   }
}

export const profileAPI = {
   getProfileInfo(userId) {
      return instance.get(`profile/${ userId }`)
   }
}
