import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../css/login.css";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { login } from '../features/user/userSlice';
import { auth } from '../firebase';


function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {

        if (!name) {
            return alert("Please enter a full name!");
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(credential => {
                const user = credential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: credential.user.email,
                            uid: credential.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            })
            .catch(err => {
                console.log("error message is : " + err);
            })
    }

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
            }).catch(err => console.log(err));
    }

    return (
        <div className='login'>
            <img src='https://www.citypng.com/public/uploads/preview/hd-linkedin-official-logo-transparent-background-31623962207jz85kqlqot.png'
                alt='Linkedin logo' />

            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type={"text"} placeholder="Full name (required if registering)" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type={"text"} placeholder="Profile pic url (optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type={"email"} placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type={"password"} placeholder="Password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className='login__register' onClick={register}>Register now</span>
            </p>
        </div>
    )
}

export default Login