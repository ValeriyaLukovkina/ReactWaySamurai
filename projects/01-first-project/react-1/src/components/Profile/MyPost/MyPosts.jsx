import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.profilePage.postData.map(post => (
        < Post message={post.message} likesCount={post.likesCount} />
    ))

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let txt = newPostElement.current.value;
        props.updateNewPostText(txt)
    }
    let onAddPost = () => {
        props.addPost()
    }

    return (
        <div className={s.posts_block}>
            <h3>myPost</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.profilePage.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;