import React from "react";
// import MyPosts from "./MyPost/MyPosts";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer 
            />
        </div>
    )
}

export default Profile;