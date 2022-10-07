import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.postData.map(post => (
        < Post message={post.message} likesCount={post.likesCount} />
    ))

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let txt = newPostElement.current.value;
        // props.updateNewPostText(txt)
        props.dispatch(updateNewPostTextActionCreator(txt))
    }
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    return (
        <div className={s.posts_block}>
            <h3>myPost</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;