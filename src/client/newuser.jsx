import React, { Component } from "react";

class NewUser extends Component {
  state = {
    name: "",
    surname: "",
    description: "",
    status: "",
    location: "",
    email: ""
  };

  render() {
    const { name, surname, description, status, location, email } = this.state;

    return (
      <div>
        <h2>Create a new user</h2>
        <form>
          <div>
            <div className="inputTitle">Name:</div>
            <input type="text" name="name" />
          </div>
          <div>
            <div className="inputTitle">Surname:</div>
            <input type="text" name="surname" />
          </div>
          <div>
            <div className="inputTitle">Description:</div>
            <input type="text" name="description" />
          </div>
          <div>
            <div className="inputTitle">Status:</div>
            <input type="text" name="status" />
          </div>
          <div>
            <div className="inputTitle">Location:</div>
            <input type="text" name="location" />
          </div>
          <div>
            <div className="inputTitle">Email:</div>
            <input type="text" name="email" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewUser;
