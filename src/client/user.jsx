//make this component take in all components to make the menu, while also handling most functions

import React, { Component } from "react";
import UserTable from "./usertable.jsx";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    users: []
  };

  //get request to fill menu table
  componentDidMount() {
    this.fetchUsers();
  }

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

  handleLike = user => {
    //we remake the users state and just update it all
    const item = [...this.state.users];
    const index = item.indexOf(user);
    item[index] = { ...item[index] };
    item[index].likeCount = item[index].likeCount + 1;
    this.setState({ users: item });
  };
  render() {
    const { length: count } = this.state.users;
    if (count === 0) return <p>There are currently no logged in users.</p>;
    return (
      <React.Fragment>
        <div>
          <div className="row">
            <p className="p-2">Showing {count} logged in users </p>
            <div className="p-2"></div>
            <Link to="/newuser">
              <button className="btn btn-primary btn-sm-3 p-2">New user</button>
            </Link>
          </div>
          <UserTable onLike={this.handleLike} items={this.state.users} />
        </div>
      </React.Fragment>
    );
  }
}

export default User;