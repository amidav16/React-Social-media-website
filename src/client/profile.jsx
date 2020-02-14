import React, { Component } from "react";
import ProfileTable from "./profiletable.jsx";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      error: null
    };

    //code taken lesson 7
    //https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/client/edit.jsx
    this.profileId = new URLSearchParams(window.location.search).get(
      "profileId"
    );

    if (this.profileId === null) this.state.error = "Unspecified profile id";
  }

  componentDidMount() {
    if (this.state.error === null) this.fetchUser();
  }

  //get specific user
  async fetchUser() {
    const url = "/api/users/" + this.profileId;
    console.log(url);
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

  handleAdd = () => {
    // do nothing for now
    console.log("Add pressed");
  };

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <ProfileTable
          onAdd={this.handleAdd}
          items={this.state.profile}
        ></ProfileTable>
      </div>
    );
  }
}

export default Profile;
