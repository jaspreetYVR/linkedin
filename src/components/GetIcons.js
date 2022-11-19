import React from 'react';
import "../css/icons.css"

function GetIcons({ Icon, text, color }) {
    return (
        <div className="post__icons">
            <Icon style={{ color: color }} className='feed__menu__icons' />
            <span>{text}</span>
        </div>
    )
}

export default GetIcons