import React from 'react';
import Post from '../Post/Post';
import './PostsList.css';

const PostsList = ({posts, handleOpenPopup}) => {
    return (
        <ul className='posts-list'>
            {posts.map((item) => <Post post={item} key={item.id} handleOpenPopup={handleOpenPopup}/>)}
        </ul>
    );
};

export default PostsList;