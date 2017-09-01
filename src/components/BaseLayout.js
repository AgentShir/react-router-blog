import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar fixed-top navbar-inverse bg-inverse">
          <nav className="row navbar">
            <span className="navbar-text">
              <nav class="navbar navbar-light bg-faded">
                <h1 class="navbar-brand mb-0">PollyBlog</h1>
              </nav>
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <NavLink className="nav-link active" to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/createpost">Create Post</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/showpost">Show All Posts</NavLink>
                  </li>
                </ul>
            </span>
          </nav>
        </nav>
        {this.props.children}
      </div>
    );
  }
}


export default BaseLayout;
