import React from "react";

const UserInfo = ({ name }) => {
  return (
    <div className="user-info">
      <h4>Username</h4>
      <h3>{name || ""}</h3>
    </div>
  );
};

export default UserInfo;
