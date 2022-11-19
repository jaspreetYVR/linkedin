import React, { forwardRef } from 'react';
import Avatar from '@mui/material/Avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import "../css/post.css";
import GetIcons from './GetIcons';

const Post = forwardRef(({ name, description, photoUrl, message }, ref) => {

    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post__header__info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__footer">
                <GetIcons Icon={ThumbUpOffAltIcon} text="Likes" />
                <GetIcons Icon={MessageIcon} text="Comment" />
                <GetIcons Icon={ShareIcon} text="Share" />
                <GetIcons Icon={SendIcon} text="Send" />
            </div>
        </div>
    )
})

export default Post