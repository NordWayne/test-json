import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PostsList from './components/PostsList/PostsList';
import PostCreater from './components/PostCreater/PostCreater';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => setPosts(result))
    }, [])

  return (
      <BrowserRouter>
        <div className="App">
          <main>
              <Switch>
                <Route exact path='/'>
                    <Header/>
                    <PostsList posts={posts}/>
                </Route>
                <Route exact path='/create-post'>
                    <Header/>
                    <PostCreater/>
                </Route>
                <Route path='/:id'>

                </Route>
              </Switch>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
