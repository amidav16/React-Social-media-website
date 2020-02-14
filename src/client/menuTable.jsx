import React from "react";

const MenuTable = ({ onLike, items, likeCount }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Dish</th>
          <th>Price</th>
          <th>Description</th>
          <th>Likes</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(menu => (
          <tr key={menu._id}>
            <td>{menu.day}</td>
            <td>{menu.title}</td>
            <td>{menu.price + "$"}</td>
            <td>{menu.description}</td>
            <td>{menu.likeCount}</td>
            <td>
              <button
                onClick={() => onLike(menu)}
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

export default MenuTable;
