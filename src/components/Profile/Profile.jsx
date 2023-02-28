import React from 'react';
import Banner from './Banner/Banner';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className="container">
                <Banner />
                <Posts />
            </div>
        </div>
    );
};

export default Profile;
