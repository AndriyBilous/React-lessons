import { usersApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  usersData: [
//     { id: "1", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Andriy B.", status: "I`m a boss", location: {city: "Kiev", country: "Ukraine"}},
//     { id: "2", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: true, fullName: "Dariya D.", status: "I`m a worker", location: {city: "Lviv", country: "Ukraine"}},
//     { id: "3", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Mariya C.", status: "I`m a student", location: {city: "Berlin", country: "Germany"}},
//     { id: "4", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Oleg D.", status: "I`m a trader", location: {city: "Dnipropetrovsk", country: "Ukraine"}},
//     { id: "5", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: true, fullName: "Alena V.", status: "I`m a trainer", location: {city: "Vrotslav", country: "Poland"}},
  ],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 2,
  isFetching: true,
  followingInProgress: []
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { ...state, usersData: state.usersData.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })}

        case UNFOLLOW:
            return { ...state, usersData: state.usersData.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;
            })}
            
        case SET_USERS:
            return {...state, usersData: [...action.usersData]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}   

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}   
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)}       
            default:
            return state;
    }
}

export const followSucsess = (userId) => ({type: FOLLOW, userId}) 
export const unfollowSucsess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}) 
export const toggleIsFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersApi.getUsers(currentPage, pageSize).then((data) => {
        dispatch(setCurrentPage(currentPage)); 
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
}}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        
        usersApi.followed('false', userId)
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(followSucsess(userId));
          }
          dispatch(toggleIsFollowingInProgress(false, userId));
        })
}}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId));

        usersApi.followed('true', userId)
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(unfollowSucsess(userId));
          }
          dispatch(toggleIsFollowingInProgress(false, userId));
        })
}}

export default usersReduser;