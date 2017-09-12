import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostList extends Component {
    constructor(props) {
      super(props);

      this.state = {
        posts: []
      }
    }

    componentDidMount() {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        this.setState({posts: data});
      });
    }

    render() {

      let blogs = this.state.posts.map((post) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <NavLink to={`/post/${post._id}`} key={post._id}>{post.title}</NavLink>
            </li>
          </ul>
        )
      });

      return (
          <div className="wrapper">
            {blogs}
          </div>
      );
    }
  }

export default PostList;
