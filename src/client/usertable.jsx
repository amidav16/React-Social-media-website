import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Bio</th>
          <th>Email</th>
          <th>Friends</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(user => (
          <tr key={user.id}>
            <td>
              <Link to={"/profile?profileId=" + user.id}>{user.name}</Link>
            </td>
            <td>{user.description}</td>
            <td>{user.email}</td>
            <td>{user.friends}</td>
            <td>
              <button className="btn btn-primary btn-sm ">Add Friend</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
