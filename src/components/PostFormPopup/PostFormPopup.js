import React, { useState } from 'react';
import './PostFormPopup.css';

const PostFormPopup = ({isOpened, handleClosePopup, onSubmit}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');

    function handleTitleChange(e){
        setTitle(e.target.value)
    }
    function handleDescriptionChange(e){
        setDescription(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        onSubmit(title, description);
        handleClosePopup();
    }
    return (

        <div className={`${isOpened ? 'popup_opened popup' : 'popup'}`} >
            <div className="popup__content">
                <button type="button" onClick={handleClosePopup} className={`popup__close`}/>
                <h3 className="popup__title">Создать пост</h3>
                <form name='create-post' className='popup__form' onSubmit={handleSubmit}>
                    <input required
                           minLength="2"
                           value={title || ""}
                           onChange={handleTitleChange}
                           maxLength="40"
                           type="text"
                           name="post-title"
                           placeholder="Название поста"
                           id="post-title"
                           className="popup__input"/>
                    <input required
                           minLength="2"
                           maxLength="200"
                           type="text"
                           name="post-body"
                           placeholder="Текст"
                           id="post-body"
                           value={description || ""}
                           onChange={handleDescriptionChange}
                           className="popup__input"/>
                    <button type="submit" className="popup__save">Сохранить</button>
                </form>

            </div>
        </div>
    );
};

export default PostFormPopup;