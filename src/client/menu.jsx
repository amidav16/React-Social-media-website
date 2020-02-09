//make this component take in all components to make the menu, while also handling most functions

import React, { Component } from "react";
import MenuTable from "./menuTable.jsx";

class Menu extends Component {
  state = {
    menus: []
  };

  //get request to fill menu table
  componentDidMount() {
    this.fetchMenu();
  }

  async fetchMenu() {
    const url = "/api/dishes";
    let response;
    let payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      console.log("ERROR FETCHING MENU DATA");
      this.setState({ menus: null });

      return;
    }
    if (response.status === 200) {
      this.setState({ menus: payload });
    } else {
      console.log("Issue with http connection");
    }
  }

  handleLike = () => {
    //not functinal for now
    console.log("like pressed.");
  };
  render() {
    const { length: count } = this.state.menus;
    if (count === 0) return <p>There are no dishes in this weeks menu.</p>;
    return (
      <React.Fragment>
        <div>
          <p>Showing {count} dishes in the menu.</p>
          <MenuTable LikeButton={this.handleLike} items={this.state.menus} />
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
