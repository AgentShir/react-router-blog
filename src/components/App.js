import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../styles/App.css';
import Home from '../components/Home';
import CreatePost from '../components/CreatePost';
import ShowPost from '../components/ShowPost';
import PostList from '../components/PostList';
import PostItem from '../components/PostItem';
import BaseLayout from '../components/BaseLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/showpost" component={PostList} />
            <Route path="/post/:id" component={ShowPost} />
            <Route path="/postitem" component={PostItem} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    )
  }
}

export default App;
