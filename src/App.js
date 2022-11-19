import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import { login, logout, selectUser } from "./features/user/userSlice"
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login({
          email: authUser.email,
          uid: authUser.uid,
          displayName: authUser.displayName,
          photoUrl: authUser.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, []);

  const user = useSelector(selectUser)
  console.log("user is :" + user);
  return (
    <div className="app">
      <Header />
      {!user ?
        <Login /> :
        (<div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>)
      }
    </div>
  );
}

export default App;
