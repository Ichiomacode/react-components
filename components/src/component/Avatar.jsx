import React from 'react'
import image4 from '../assets/image4.jpg'
const Avatar = () => {
  return (
    <div className="profile-container">
      <img
        className='avatar'
        src={image4}
        alt=""
      />
    </div>
  );
}

export default Avatar