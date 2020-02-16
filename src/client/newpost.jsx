import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewPost extends Component {
  state = {
    id: 4,
    name: "You",
    message: "",
    likeCount: 0
  };

  //sets the value when changing the form value
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    const url = "/api/media";
    const payload = this.state;
    let response;

    console.log(this.state);

    try {
      response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      return false;
    }
    this.props.history.push("/media");
    return response.status === 201;
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <h2>Create a new post</h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <div className="inputTitle">What's on your mind?</div>
            <input
              type="text"
              name="message"
              value={message}
              onChange={this.changeHandler}
            />
          </div>

          <div className="p-2">
            <button className="btn btn-primary btn-sm m-2" type="submit">
              Post
            </button>
            <Link to="/user">
              <button className="btn btn-primary btn-sm m-2">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
