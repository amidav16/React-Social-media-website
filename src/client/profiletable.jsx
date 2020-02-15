import React from "react";
import { Link } from "react-router-dom";

const ProfileTable = ({ onLike, onAdd, profile }) => {
  return (
    <table className="table">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
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
            <b>Likes: </b>
            {profile.likeCount}
          </li>
        </td>
        <td>
          <button
            onClick={() => onAdd(profile)}
            className="btn btn-primary btn-sm"
          >
            Add Friend
          </button>
          <button
            onClick={() => onLike(profile)}
            className="btn btn-primary btn-sm m-2"
          >
            Like
          </button>
          <Link to="/user">
            <button className="btn btn-primary btn-sm">Back</button>
          </Link>
        </td>
      </tbody>
    </table>
  );
};

export default ProfileTable;
