//make this component take in all components to make the menu, while also handling most functions

import React, { Component } from "react";
import UserTable from "./usertable.jsx";
import SearchBar from "./common/searchbar.jsx";
import { Link } from "react-router-dom";
import Rest from "./common/rest.jsx";

class User extends Rest {
  state = {
    users: [],
    filter: [],
    searchQuery: ""
  };

  //get request to fill menu table
  componentDidMount() {
    this.fetchUsers();
  }

  handleSearchbarChange = query => {
    this.setState({ searchQuery: query });
  };

  getSearchData = () => {
    const { searchQuery, users: allUsers } = this.state;

    let filter = allUsers;
    if (searchQuery)
      filter = allUsers.filter(user =>
        user.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    return { data: filter };
  };

  render() {
    const { length: count } = this.state.users;
    if (count === 0) return <p>There are currently no logged in users.</p>;
    const { data: filter } = this.getSearchData();

    return (
      <React.Fragment>
        <div>
          <div className="row">
            <p className="p-2">Showing {count} logged in users </p>
            <div className="p-2"></div>
            <Link to="/newuser">
              <button className="btn btn-primary btn-sm-3 p-2">New user</button>
            </Link>
            <div className="p-3"></div>
            <SearchBar
              onChange={this.handleSearchbarChange}
              value={this.state.searchQuery}
            />
          </div>
          <UserTable items={filter} />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
