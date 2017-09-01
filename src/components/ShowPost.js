import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
  render() {
    return (
      <div>
        <Link to="/postlist">
          <button type="button" className="btn btn-primary">Back To Blog List</button>
        </Link>
      </div>
    );
  }
}

export default ShowPost;
