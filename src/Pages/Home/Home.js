import React from 'react';
import Profile from './Profile';
import ProfileImg from './ProfileImg';
import SocialLinks from './SocialLinks';

const Home = () => {
    return (
        <div className="flex">
            <SocialLinks></SocialLinks>
            <Profile></Profile>
            
        </div>
    );
};

export default Home;