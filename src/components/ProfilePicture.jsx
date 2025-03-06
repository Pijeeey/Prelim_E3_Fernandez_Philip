import React from "react";

const ProfilePicture = ({ pictureUrl, tempPicture, onImageChange }) => {
  return (
    <div className="profile-picture">
      <img
        src={tempPicture || pictureUrl || "https://via.placeholder.com/100"}
        alt="Profile"
        className="profile-img"
      />
      <div className="image-upload">
        <input 
          type="file" 
          accept="image/*" 
          onChange={onImageChange} 
        />
      </div>
    </div>
  );
};

export default ProfilePicture;