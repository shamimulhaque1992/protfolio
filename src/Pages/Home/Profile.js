import React from 'react';
import BasicInfo from './BasicInfo';
import EasyAccess from './EasyAccess';
import VideoResume from './VideoResume';

const Profile = () => {
    return (
        <div className="w-9/12 flex mx-10 flex-col items-start">
            <BasicInfo></BasicInfo>
            <VideoResume></VideoResume>
            <EasyAccess></EasyAccess>
        </div>
    );
};

export default Profile;