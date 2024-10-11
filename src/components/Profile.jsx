import React, { useState } from 'react'
import '../styles/Profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div className="profile-container">
          <div className="profile-header">
            <h2>Profile</h2>
          </div>
          <div className="profile-content">
            <div className="profile-image">
              <button className="image-button">Add Img</button>
            </div>
            <div className="profile-details">
              <p><strong>{ /* Inter first Name of current user */}</strong></p>
              <p><strong>{ /* Inter Last Name of current user */}</strong></p>
            </div>
            <div className="profile-actions">
              <button className="action-button" onClick={() => navigate('/cart')}>Cart</button>
              <button className="action-button" onClick={() => navigate('/ProductList')}>Add To Cart</button>
            </div>
            <div className="edit-button-container">
              <button className="edit-button" onClick={togglePopup}>Edit Profile</button>
            </div>
          </div>
    
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <button className="popup-back" onClick={togglePopup}>Back</button>
                <button className="popup-delete">Delete Profile</button>
              </div>
            </div>
          )}
        </div>
      );
    };

    export default Profile