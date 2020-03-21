import React, { Component } from "react";
import ProfileTable from "./profiletable.jsx";
import MediaTable from "./mediatable.jsx";
import Rest from "./common/rest.jsx";

class Profile extends Rest {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      media: [],
      filter: [],
      error: null
    };

    this.profileId = new URLSearchParams(window.location.search).get(
      "profileId"
    );

    if (this.profileId === null) this.state.error = "Unspecified profile id";
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchMedia();
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
