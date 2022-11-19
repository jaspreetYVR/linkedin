import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import GetIcons from './GetIcons';
import "../css/feed.css"
import Post from './Post';
import { db } from '../firebase.js';
import { collection, serverTimestamp, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import FlipMove from "react-flip-move";

function Feed() {

    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");


    const handleClick = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "posts"), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp()
        })

        setInput("");
    }

    useEffect(() => {
        const postCollection = collection(db, "posts");

        const q = query(postCollection, orderBy("timestamp", "desc"));
        const unSubscribe = onSnapshot(q, snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        return () => {
            unSubscribe();
        }
    }, []);

    return (
        <div className='feed'>
            <div className="feed__post">
                <div className="feed__avatar__post">
                    <Avatar
                        src='https://media-exp1.licdn.com/dms/image/C5103AQFcaSGtDaf4Yw/profile-displayphoto-shrink_100_100/0/1561176703705?e=1671062400&v=beta&t=R3UdwoYvzF3MV1JWnRXHR0fpgC1nXtnPF2AACTz499s'
                        sx={{ width: 45, height: 45 }}
                        style={{
                            border: '0.5px solid white'
                        }}
                    />
                    <div className='feed__posting'>
                        <form>
                            <input value={input} type="text" placeholder='Start a post'
                                onChange={(e) => setInput(e.target.value)} />
                            <button type='submit' onClick={handleClick}>Submit</button>
                        </form>
                    </div>
                </div>
                <div className="feed__menu">
                    <GetIcons Icon={ImageIcon} text="Photo" color="#70B5F9" />
                    <GetIcons Icon={YouTubeIcon} text="Video" color="#E7A33E" />
                    <GetIcons Icon={EventIcon} text="Event" color="#C0CBCD" />
                    <GetIcons Icon={ArticleIcon} text="Write Article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed