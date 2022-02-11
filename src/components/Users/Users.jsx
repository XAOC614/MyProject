import React, { useCallback } from "react";
import styles from './Users.module.css'
let Users = (props) => {
    // if (props.users.lenght === 0) {
    //     props.setUsers([
    //         { id: 1, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:true, fullName: 'Sergei', status:'I`m good gay', location: {city:'Vitebsk', country:'Belarus'}},
    //         { id: 2, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:true, fullName: 'Anna', status:'good programmer', location: {city:'Vitebsk', country:'Belarus'}},
    //         { id: 3, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:false, fullName: 'Andrey', status:'boring gay', location: {city:'Kiev', country:'Ukraine'}},
    //         { id: 4, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:false, fullName: 'Sveta', status:'Like watch more TV', location: {city:'Moskow', country:'Russia'}},
    //         { id: 5, photoUrl:'https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj', followed:false, fullName: 'Dmitry', status:'Senior JS dev', location: {city:'Minsk', country:'Belarus'}},
           
    //       ])
    // }
    return <div>
       {
           props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.photoUrl} className = {styles.userPhoto}/>
                   </div>
                   <div>
                       {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button> 
                        : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                   </div>
               </span>
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
           </div>)
       }
    </div>
}


export default Users;