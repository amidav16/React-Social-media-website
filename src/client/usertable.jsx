import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ onLike, items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <Link to={"/inspect?profileId=" + user._id} />
            name
          </th>
          <th>Bio</th>
          <th>Email</th>
          <th>Likes</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
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
