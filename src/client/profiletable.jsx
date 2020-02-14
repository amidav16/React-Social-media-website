import React from "react";

const ProfileTable = ({ onAdd, items }) => {
  return (
    <table className="table">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {items.map(user => (
          <tr key={user.id}>
            <td>
              {user.name} {user.surname}
            </td>
            <li>{user.description}</li>
            <li>{user.status}</li>
            <li>{user.location}</li>
            <li>{user.email}</li>
            <li>{user.likeCount}</li>
            <td>
              <button
                onClick={() => onAdd(user)}
                className="btn btn-primary btn-sm"
              >
                Add Friend
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProfileTable;
