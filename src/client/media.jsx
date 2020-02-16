import React, { Component } from "react";
import MediaTable from "./mediatable.jsx";
import { Link } from "react-router-dom";

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      media: [],
      error: null
    };

    this.profileId = new URLSearchParams(window.location.search).get(
      "profileId"
    );
    if (this.profileId === null) this.state.error = "Unspecified profile id";
  }

  componentDidMount() {
    this.fetchMedia();
    this.setState({ media: this.state.media.reverse() });
  }

  //get specific media
  async fetchMedia() {
    const url = "/api/media";
    console.log(url);
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      //Network error: eg, wrong URL, no internet, etc.
      this.setState({
        error: "ERROR when retrieving media: " + err,
        media: null
      });
      return;
    }

    if (response.status === 200) {
      this.setState({
        error: null,
        media: payload
      });
    } else {
      this.setState({
        error: "Issue with HTTP connection: status code " + response.status,
        media: null
      });
    }
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
        <h1>Media</h1>
        <Link to="/newpost">
          <button className="btn btn-primary btn-sm-3 p-2">Create post</button>
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
