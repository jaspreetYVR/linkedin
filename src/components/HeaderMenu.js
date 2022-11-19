import React from 'react';
import Avatar from '@mui/material/Avatar';
import "../css/headerMenu.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';

function HeaderMenu({ avatar, Icon, title, logoutFunction }) {
    const user = useSelector(selectUser);

    return (
        <div className='header__menu' onClick={logoutFunction}>
            {Icon && <Icon className="header__menu__icon" />}
            {avatar && <Avatar className="header__menu__icon" src={user?.photoUrl}>{user?.displayName[0]}</Avatar>}
            <h3 className='header__menu__title'>{title}</h3>
        </div>
    )
}

export default HeaderMenu