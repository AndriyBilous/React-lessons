const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  usersData: [
//     { id: "1", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Andriy B.", status: "I`m a boss", location: {city: "Kiev", country: "Ukraine"}},
//     { id: "2", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: true, fullName: "Dariya D.", status: "I`m a worker", location: {city: "Lviv", country: "Ukraine"}},
//     { id: "3", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Mariya C.", status: "I`m a student", location: {city: "Berlin", country: "Germany"}},
//     { id: "4", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: false, fullName: "Oleg D.", status: "I`m a trader", location: {city: "Dnipropetrovsk", country: "Ukraine"}},
//     { id: "5", photoUrl: "https://cdn.pixabay.com/photo/2022/12/02/08/30/raspberry-7630520_960_720.jpg", followed: true, fullName: "Alena V.", status: "I`m a trainer", location: {city: "Vrotslav", country: "Poland"}},
  ],
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
            return {...state, usersData: [...state.usersData, ...action.usersData]}

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
  
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (usersData) => ({type: SET_USERS, usersData})

export default usersReduser;