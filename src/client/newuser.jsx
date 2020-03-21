import React, { Component } from "react";
import Rest from "./common/rest.jsx";
import { Link } from "react-router-dom";

class NewUser extends Component {
  state = {
    name: "",
    surname: "",
    description: "",
    status: "",
    location: "",
    email: "",
    friends: 0,
    id: 3
  };

  //sets the value when changing the form value
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, surname, description, status, location, email } = this.state;

    return (
      //could refactor to look less messy
      <div>
        <h2>Create a new user</h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <div className="inputTitle">Name:</div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <div className="inputTitle">Surname:</div>
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <div className="inputTitle">Description:</div>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <div className="inputTitle">Status:</div>
            <input
              type="text"
              name="status"
              value={status}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <div className="inputTitle">Location:</div>
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <div className="inputTitle">Email:</div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="p-2">
            <button className="btn btn-primary btn-sm m-2" type="submit">
              Create
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

export default NewUser;
