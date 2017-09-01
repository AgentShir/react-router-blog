import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../styles/App.css';
import CreatePost from '../components/CreatePost';
import ShowPost from '../components/ShowPost';
import PostList from '../components/PostList';
import BaseLayout from '../components/BaseLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/createpost" component={CreatePost} />
            <Route path="/showpost" component={ShowPost} />
            <Route path="/postlist" component={PostList}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    )
  }
}

export default App;
