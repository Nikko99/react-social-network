const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
   users: [],
   totalUsers: 0,
   pageSize: 5,
   currentPage: 1,
   isFetching: false
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               } else {
                  return u
               }
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               } else {
                  return u
               }
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }
      case SET_TOTAL_USERS:
         return {
            ...state,
            totalUsers: action.totalUsers
         }
      case TOGGLE_IS_FETCHING:
      return {
         ...state,
         isFetching: action.isFetching
      }
      default:
         return state;
   }
}

export const followAC = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
}

export const unfollowAC = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   }
}

export const setUsersAC = (users) => {
   return {
      type: SET_USERS,
      users
   }
}

export const setCurrentPageAC = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE,
      currentPage
   }
}

export const setTotalUsersAC = (totalUsers) => {
   return {
      type: SET_TOTAL_USERS,
      totalUsers
   }
}

export const toggleIsFetchingAC = (isFetching) => {
   return {
      type: TOGGLE_IS_FETCHING,
      isFetching
   }
}

export default usersReducer;
