import React from "react";

const MenuTable = ({ LikeButton, items }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Dish</th>
          <th>Price</th>
          <th>Description</th>
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
            <td>
              <button
                onClick={() => {
                  LikeButton();
                }}
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
