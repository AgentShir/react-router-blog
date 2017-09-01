import React, { Component } from 'react';

class CreatePost extends Component {
  render() {
    this.state = {
      authorName: '',
      blogTitle: '',
      blogPost: ''
    }

    this.handleChange = (e) => {
      this.setState({
        [e.target.authorName]: e.target.value,
        [e.target.blogTitle]: e.target.value,
        [e.target.blogPost]: e.target.value
      })
    }

    this.handleSubmit = (e) => {
      this.setState ({
        TODOfixthis: this.state.blogTitle + this.state.authorName + this.state.blogPost
      })
    }

    return (
      <div className="container">
        <form>
          <div className="form-group row">
            <label for="authorName" className="col-2 col-form-label">Author Name</label>
              <div className="col-10">
                <input onChange={this.handleChange} value={this.state.authorName} className="form-control" type="text" value="Enter your name or email address..." id="authorName" />
                <small id="authorName" className="form-text text-muted">"You can use a pen name if you'd like!"</small>
              </div>
          </div>
          <div className="form-group row">
            <label for="blogTitle" className="col-2 col-form-label">Title</label>
              <div className="col-10">
                <input onChange={this.handleChange} value={this.state.blogTitle} className="form-control" type="text" value="Title" id="blogTitle" />
              </div>
          </div>
          <div className="form-group">
            <label for="blogPost">Write your blog...</label>
              <textarea onChange={this.handleChange} value={this.state.blogPost} className="form-control" id="blogPost" rows="3"></textarea>
          </div>
            <button type="button" className="btn btn-primary" onCLick={this}>Submit</button>
        </form>
          <p>{this.state.authorName}</p>
      </div>
    );
  }
}


export default CreatePost;
