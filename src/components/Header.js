import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../css/header.css"
import HeaderMenu from './HeaderMenu';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";

function Header() {

    const dispatch = useDispatch();

    const logoutFunction = () => {
        dispatch(logout());
        signOut(auth);
    }

    return (
        <div className='header'>
            <div className='header__container'>
                <div className="header__left">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin logo" />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
                <div className="header__right">
                    <HeaderMenu Icon={HomeIcon} title="Home" />
                    <HeaderMenu Icon={SupervisorAccountIcon} title="My Network" />
                    <HeaderMenu Icon={BusinessCenterIcon} title="Jobs" />
                    <HeaderMenu Icon={ChatIcon} title="Messaging" />
                    <HeaderMenu Icon={NotificationsIcon} title="Notifications" />
                    <HeaderMenu logoutFunction={logoutFunction} avatar={true} title="me" />
                </div>
            </div>
        </div>
    )
}

export default Header