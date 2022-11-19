import React from 'react';
import Avatar from '@mui/material/Avatar';
import GroupsIcon from '@mui/icons-material/Groups';
import TagIcon from '@mui/icons-material/Tag';
import "../css/sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const getListItem = (Icon, text) => {
        return (<li><Icon className='sidebar__bottom_icons' />{text}</li>);
    }


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <div className="sidebar__profile">
                    <Avatar
                        className='sidebar__profile__pic'
                        src={user.photoUrl}
                        sx={{ width: 60, height: 60 }}
                        style={{
                            border: '0.5px solid white'
                        }}
                    >{user.displayName[0]}</Avatar>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                </div>
                <div className="sidebar__stats">
                    <ul>
                        <li>
                            <div className='sidebar__stats__title'>Who's viewed your profile</div>
                            <div className='sidebar__stats__value'>30</div>
                        </li>
                        <li>
                            <div className='sidebar__stats__title'>connections</div>
                            <div className='sidebar__stats__value'>252</div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="sidebar__bottom">
                <div>
                    <h4>Recent</h4>
                    <ul>
                        {getListItem(GroupsIcon, "Premium carrier group")}
                        {getListItem(GroupsIcon, "Developer")}
                        {getListItem(TagIcon, "Coding Ninja Alumni")}
                        {getListItem(TagIcon, "Money")}
                        {getListItem(TagIcon, "Gender")}
                        {getListItem(TagIcon, "Economy")}
                    </ul>
                </div>

                <div className='sidebar__bottom_hashtags'>
                    <h4>Followed Hashtags</h4>
                    <ul>
                        {getListItem(GroupsIcon, "Premium carrier group")}
                        {getListItem(GroupsIcon, "Developer")}
                        {getListItem(TagIcon, "Coding Ninja Alumni")}
                        {getListItem(TagIcon, "Money")}
                        {getListItem(TagIcon, "Gender")}
                        {getListItem(TagIcon, "Economy")}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar