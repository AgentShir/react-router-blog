import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class PostItem extends Component {
  render() {
    return(
      <div className="container">
        <p><NavLink to={"/post/"+this.props.post._id}>{this.props.post.title}</NavLink></p>
      </div>
    )
  }
}

export default PostItem;
