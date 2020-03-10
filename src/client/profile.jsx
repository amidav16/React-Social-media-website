import React, { Component } from "react";
import ProfileTable from "./profiletable.jsx";
import MediaTable from "./mediatable.jsx";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      media: [],
      filter: [],
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
    this.fetchUser();
    this.fetchMedia();
  }

  //get specific profile
  async fetchUser() {
    const url = "/api/users/" + this.profileId;
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      //Network error: eg, wrong URL, no internet, etc.
      this.setState({
        error: "ERROR when retrieving user: " + err,
        profile: null
      });
      return;
    }

    if (response.status === 200) {
      this.setState({
        error: null,
        profile: payload
      });
    } else {
      this.setState({
        error: "Issue with HTTP connection: status code " + response.status,
        profile: null
      });
    }
  }

  //get media
  async fetchMedia() {
    const url = "/api/media";
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

  handleAdd = () => {
    // do nothing for now
    console.log("Add pressed");
  };

  handleLike = user => {
    //this could be used with a post request to update the actual value
    const item = [...this.state.media];
    const index = item.indexOf(user);
    item[index] = { ...item[index] };
    item[index].likeCount = item[index].likeCount + 1;
    this.setState({ media: item });
  };

  getUserPosts = () => {
    const { media: allMedia } = this.state;

    let filter = allMedia;
    //need to make user_id a string to compare with profileId
    if (filter)
      filter = allMedia.filter(media =>
        media.user_id.toString().startsWith(this.profileId)
      );

    return { data: filter };
  };

  render() {
    console.log(this.state.media);
    const { data: filter } = this.getUserPosts();
    return (
      <div>
        <h1>Profile</h1>
        <ProfileTable
          onAdd={this.handleAdd}
          profile={this.state.profile}
        ></ProfileTable>
        <MediaTable onLike={this.handleLike} items={filter}></MediaTable>
      </div>
    );
  }
}

export default Profile;
