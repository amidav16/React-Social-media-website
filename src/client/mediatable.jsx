import React from "react";
import { Link } from "react-router-dom";

const MediaTable = ({ onLike, items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th></th>
          <th>Date</th>
          <th>Likes</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(media => (
          <tr key={media.id}>
            <td>
              <Link to={"/profile?profileId=" + media.user_id}>
                {media.name}
              </Link>
            </td>
            <td>{media.message}</td>
            <td>{media.date}</td>
            <td>{media.likeCount}</td>
            <td>
              <button
                onClick={() => onLike(media)}
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

export default MediaTable;
