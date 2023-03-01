import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className={s.posts}>
            <Post message="Buy new bike!" likeCount="22" />
            <Post message="Today, I start learn React." likeCount="12" />
            <Post message="Hi, its my first post!" likeCount="56" />
        </div>
    );
};

export default Posts;
