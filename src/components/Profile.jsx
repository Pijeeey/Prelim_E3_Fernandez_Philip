import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Profile.css";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";



const Profile = () => {
  const [user, setUser] = useState({ name: "", pictureUrl: "" });
  const [tempName, setTempName] = useState("");
  const [tempPicture, setTempPicture] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const storedPicture = localStorage.getItem("profilePicture");
    
    setUser({ name: storedName || "", pictureUrl: storedPicture || "" });
    setTempPicture(storedPicture || ""); // Ensure profile picture is initialized
  }, []);
  

  const handleSave = () => {
    if (!tempName.trim()) {
      alert("Name must not be blank");
      return;
    }
    setUser({ ...user, name: tempName });
    localStorage.setItem("username", tempName);
    alert("Profile updated successfully!");
    setTempName("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setTempPicture(imageData);
        setUser((prevUser) => ({ ...prevUser, pictureUrl: imageData }));
        localStorage.setItem("profilePicture", imageData); // Save instantly
        alert("Profile picture updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    if (tempPicture) {
      setUser((prevUser) => ({ ...prevUser, pictureUrl: tempPicture }));
      localStorage.setItem("profilePicture", tempPicture); // Save to localStorage
      alert("Profile picture updated successfully!");
    }
  };
  

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Profile</h2>
        <UserInfo name={user.name} />
        <ProfilePicture 
            pictureUrl={user.pictureUrl} 
            tempPicture={tempPicture} 
            onImageChange={handleImageChange} 
            onSaveImage={handleSaveImage} 
      />
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Profile;