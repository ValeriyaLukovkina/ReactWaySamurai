import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

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
                                ? <button disabled={props.followingIsProgress.some(id => id === user.id)}
                                    onClick={() => props.unfollow(user.id)}>unfollow</button>
                                : <button disabled={props.followingIsProgress.some(id => id === user.id)}
                                    onClick={() => props.follow(user.id)}>follow</button>}
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