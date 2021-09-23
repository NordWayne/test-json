import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import PostsList from '../PostsList/PostsList';
import PostPopup from '../PostPopup/PostPopup';
import PostFormPopup from '../PostFormPopup/PostFormPopup';
import { fetchData, post } from '../../api/api';
import './App.css';


const App = () => {
    const [posts, setPosts] = useState([]);
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [isPopupFormOpened, setIsPopupFormOpened] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    useEffect(() => {
        fetchData()
            .then(result => setPosts(result))
            .catch(err => console.error(err))
    }, [])
    function handleOpenPopup(post) {
        setCurrentPost(post)
        setIsPopupOpened(true);
    }
    function handleOpenFormPopup() {
        setIsPopupFormOpened(true);
    }
    function handleCloseAllPopups() {
        setIsPopupOpened(false);
        setIsPopupFormOpened(false);
    }
    function handleSubmit(title, description) {
        post(title, description)
            .then(result => setPosts(prev => [result, ...prev]))
            .catch(err => console.error(err))
    }

  return (
        <div className="App">
          <main>
                    <Header handleOpenFormPopup={handleOpenFormPopup}/>
                    <PostsList posts={posts} handleOpenPopup={handleOpenPopup}/>
                    <PostFormPopup handleClosePopup={handleCloseAllPopups} isOpened={isPopupFormOpened} onSubmit={handleSubmit}/>
                    <PostPopup post={currentPost} handleClosePopup={handleCloseAllPopups} isOpened={isPopupOpened}/>
          </main>
        </div>
  );
}

export default App;
