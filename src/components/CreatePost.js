import React, { Component } from 'react';

class CreatePost extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="blogPost">Write your blog...</label>
            <textarea className="form-control" id="blogPost" rows="3"></textarea>
        </div>
          <button type="button" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}


export default CreatePost;
