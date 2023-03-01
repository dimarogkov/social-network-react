import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <h4>{props.message}</h4>
            <span>like {props.likeCount}</span>
        </div>
    );
};

export default Post;
