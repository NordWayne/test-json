import React from 'react';
import './Post.css'

const Post = ({post}) => {
    return (
        <li className='post'>
            <h2 className='post-title'>{post.title || 'Вася'}</h2>
            <p className='post-description'>{post.body || 'estfsdfsdfasdfsdfas'}</p>
        </li>
    );
};

export default Post;