import React from 'react';
import Post from '../Post/Post';
import './PostsList.css';

const PostsList = ({posts}) => {
    return (
        <ul className='posts-list'>
            {posts.map((item) => <Post post={item}/>)}
        </ul>
    );
};

export default PostsList;