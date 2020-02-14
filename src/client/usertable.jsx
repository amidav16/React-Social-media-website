import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ onLike, items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Bio</th>
          <th>Email</th>
          <th>Likes</th>
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
            <td>{user.likeCount}</td>
            <td>
              <button
                onClick={() => onLike(user)}
                className="btn btn-primary btn-sm"
              >
                Like
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
