import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   'API-KEY': '9f756332-1970-4fd8-8408-db198c74f3cb'
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
      .then(response => response.data)
   }
}
