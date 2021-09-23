import React from 'react';
import './Post.css'

const Post = ({post, handleOpenPopup}) => {
    return (
        <li className='post' onClick={()=>handleOpenPopup(post)}>
                <h2 className='post-title'>{post.title}</h2>
                <p className='post-description'>{post.body}</p>
        </li>
    );
};

export default Post;