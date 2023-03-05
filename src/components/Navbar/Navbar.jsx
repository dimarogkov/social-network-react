import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile" className={(data) => (data.isActive ? s.active : null)}>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={(data) => (data.isActive ? s.active : null)}>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={(data) => (data.isActive ? s.active : null)}>
                        News
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={(data) => (data.isActive ? s.active : null)}>
                        Music
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={(data) => (data.isActive ? s.active : null)}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
