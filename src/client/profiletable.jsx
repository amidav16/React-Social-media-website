import React from "react";
import { Link } from "react-router-dom";

const ProfileTable = ({ onAdd, profile }) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>
            <h3 className="container">
              {profile.name} {profile.surname}
            </h3>
          </td>
          <td className="p-3 m-2">
            <li>
              <b>Bio: </b> {profile.description}
            </li>
            <li>
              <b>Relationship status: </b>
              {profile.status}
            </li>
            <li>
              <b>Location: </b>
              {profile.location}
            </li>
            <li>
              <b>Email: </b>
              {profile.email}
            </li>
            <li>
              <b>Friends: </b>
              {profile.friends}
            </li>
          </td>
          <td>
            <button
              onClick={() => onAdd()}
              className="btn btn-primary btn-sm m-2"
            >
              Add Friend
            </button>

            <Link to="/user">
              <button className="btn btn-primary btn-sm">Back</button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileTable;
