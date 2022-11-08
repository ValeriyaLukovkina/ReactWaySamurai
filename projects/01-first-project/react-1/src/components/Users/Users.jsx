import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, usersPage, followingIsProgress, unfollow, follow}) => {

    return (
        <div>
            < Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            {
                usersPage.map((user) => {
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
                                ? <button disabled={followingIsProgress.some(id => id === user.id)}
                                    onClick={() => unfollow(user.id)}>unfollow</button>
                                : <button disabled={followingIsProgress.some(id => id === user.id)}
                                    onClick={() => follow(user.id)}>follow</button>}
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