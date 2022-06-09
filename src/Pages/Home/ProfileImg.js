import React from 'react';
import profileImg from '../../images/profilePic.png'

const ProfileImg = () => {
    return (
        <div className="w-4/12 flex items-end">
            <img className="w-8/12 mx-auto" src={profileImg} alt="" />
            
        </div>
    );
};

export default ProfileImg;