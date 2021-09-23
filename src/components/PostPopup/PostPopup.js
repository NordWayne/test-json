import React from 'react';
import './PostPopup.css'

const PostPopup = ({post, handleClosePopup, isOpened}) => {
    return (
        <div className={`${isOpened ? 'popup_opened popup' : 'popup'}`} >
            <div className="popup__content">
                <button type="button" onClick={handleClosePopup} className={`popup__close`}></button>
                <h3 className="popup__title">{post.title}</h3>
                <p className='popup__description'>{post.body}</p>
            </div>
        </div>
    );
};

export default PostPopup;