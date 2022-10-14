import React from "react";
// import MyPosts from "./MyPost/MyPosts";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer 
            />
        </div>
    )
}

export default Profile;