const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let inicialState = {
    
        users : [
            { id: 1, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:true, fullName: 'Sergei', status:'I`m good gay', location: {city:'Vitebsk', country:'Belarus'}},
            { id: 2, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:true, fullName: 'Anna', status:'good programmer', location: {city:'Vitebsk', country:'Belarus'}},
            { id: 3, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:false, fullName: 'Andrey', status:'boring gay', location: {city:'Kiev', country:'Ukraine'}},
            { id: 4, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:false, fullName: 'Sveta', status:'Like watch more TV', location: {city:'Moskow', country:'Russia'}},
            { id: 5, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:false, fullName: 'Dmitry', status:'Senior JS dev', location: {city:'Minsk', country:'Belarus'}},
           
          ],
          
     
}
const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state,
                // users:[...state.users], одна и та же запись
                 users: state.users.map( u => {
                     if (u.id === action.userId){
                         return {...u, followed: true}
                     }
                     return u;

                 })
            }
         case UNFOLLOW:
            return { 
                ...state,
                 users: state.users.map( u => {
                     if (u.id === action.userId){
                         return {...u, followed: false}
                     }
                     return u;

                 })
            }
         case SET_USERS:{
             return {...state, users:[...state.users, ...action.users]}
         }
                 
            default:
                return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
    export default usersReducer;