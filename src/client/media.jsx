import React, { Component } from "react";
import MediaTable from "./mediatable.jsx";
import { Link } from "react-router-dom";
import Rest from "./common/rest.jsx";

class Media extends Rest {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
      error: null
    };

    //i did not make this code, it has been re-used from the main repository of the course:
    //https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/client/edit.jsx

    this.profileId = new URLSearchParams(window.location.search).get(
      "profileId"
    );
    if (this.profileId === null) this.state.error = "Unspecified profile id";
  }

  componentDidMount() {
    this.fetchMedia();
  }

  handleLike = user => {
    //this could be used with a post request to update the actual value
    const item = [...this.state.media];
    const index = item.indexOf(user);
    item[index] = { ...item[index] };
    item[index].likeCount = item[index].likeCount + 1;
    this.setState({ media: item });
  };

  render() {
    return (
      <div>
        <h1 className="container">Media</h1>
        <Link to="/newpost">
          <button className="btn btn-primary btn-sm-3 m-3">Create post</button>
        </Link>
        <MediaTable
          onLike={this.handleLike}
          items={this.state.media}
        ></MediaTable>
      </div>
    );
  }
}

export default Media;
