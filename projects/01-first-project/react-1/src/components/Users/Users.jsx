import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p) => {
                return (
                    <span
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p && s.selected}>{p}</span>
                )
            })}

            {
                props.usersPage.map((user) => {
                    return <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={ 
                                        // user.photos.small =! null ? user.photos.small : 
                                        userPhoto} alt='' />
                                </NavLink>
                            </div>
                            {user.followed 
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": 'f8e57fef-df99-4dc9-874f-f8c4755322e2'
                                    }
                                })
                                .then( response => {
                                    debugger
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)    
                                    }
                                })

                                }}>unfollow</button>
                                : <button onClick={() => { 
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {} , {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": 'f8e57fef-df99-4dc9-874f-f8c4755322e2'
                                        }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id) 
                                            }
                                        })
                                    }
                                    }>follow</button>}
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.city'}</div>
                                <div>{'user.location.country'}</div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    )
}

export default Users;