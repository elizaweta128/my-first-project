import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostReduxForm from "./PostForm/PostForm";


const MyPosts = React.memo(({addPost, posts}) => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}
                                             key={p.id}/>);
    let addNewMessage = (postData) => {
        addPost(postData.post);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewMessage}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})


export default MyPosts;