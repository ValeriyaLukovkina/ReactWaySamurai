import { connect } from "react-redux";
import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
                    // let onPostChange = (text) => {
                    //     store.dispatch(updateNewPostTextActionCreator(text))
                    // }
                    // let addPost = () => {
                    //     store.dispatch(addPostActionCreator());
                    // }

//                     return (<MyPosts
//                         newPostText={store.getState().profilePage.newPostText}
//                         postData={store.getState().profilePage.postData}
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                     /> )                 
//                 }
//             }

//         </StoreContext.Consumer>

//     )
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;