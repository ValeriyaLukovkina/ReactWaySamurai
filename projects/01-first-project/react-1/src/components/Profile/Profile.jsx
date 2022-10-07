import React from "react";
import MyPosts from "./MyPost/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts
                postData={props.profilePage.postData}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;