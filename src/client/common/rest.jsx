import React, { Component } from "react";

class rest extends Component {
  state = {};

  //All rest api codes are located here,
  //this needs to be refactored to look less ugly in the future

  //Fetch Users
  async fetchUsers() {
    const url = "/api/users";
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      console.log("Error fetching users");
      this.setState({ users: null });

      return;
    }
    if (response.status === 200) {
      this.setState({ users: payload });
    } else {
      console.log("Issue with http connection");
    }
  }

  //Fetch Single User
  async fetchUser() {
    const url = "/api/users/" + this.profileId;
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
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

  //Fetch All Media
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

  submitHandler = async e => {
    e.preventDefault();
    const url = "/api/users";
    const payload = this.state;
    let response;

    console.log(this.state);
    //i did not make this code, it has been re-used from the main repository of the course:
    //https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/client/create.jsx
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
    this.props.history.push("/user");
    return response.status === 201;
  };
}

export default rest;
