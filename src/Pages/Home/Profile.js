import React from 'react';
import BasicInfo from './BasicInfo';
import EasyAccess from './EasyAccess';
import VideoResume from './VideoResume';

const Profile = () => {
    return (
        <div className="flex flex-col w-full">
            <BasicInfo></BasicInfo>
            <VideoResume></VideoResume>
            <EasyAccess></EasyAccess>
        </div>
    );
};

export default Profile;