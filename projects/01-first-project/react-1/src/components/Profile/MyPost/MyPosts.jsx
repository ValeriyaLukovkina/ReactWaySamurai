import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPostForm = (props) => {

    const maxLength10 = maxLength(10)

return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostTxt' validate={ [required, maxLength10] } />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({
    form: 'ProfileAddMessagePost'
})(MyPostForm)


const MyPosts = (props) => {

    let postsElements = props.profilePage.postData.map(post => (
        < Post message={post.message} likesCount={post.likesCount} />
    ))

    // let newPostElement = React.createRef();

    // let onPostChange = () => {
    //     let txt = newPostElement.current.value;
    //     props.updateNewPostText(txt)
    // }
    let onAddPost = (values) => {
        props.addPost(values.newPostTxt)
    }

    return (
        <div className={s.posts_block}>
            <h3>myPost</h3>
            < MyPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;