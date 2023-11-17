import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from "./Firebase";
import { useNavigate } from "react-router-dom";

export const ProviderPass = createContext();

export const ProviderContext = ({ children }) => {

    const navigate= useNavigate()
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null)
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user.displayName))
            setCurrentUser(localStorage.getItem('currentUser'))
          } else {
            setUser(null);
            localStorage.removeItem('currentUser')
            setCurrentUser(null)
          }
        });

        return () => unsubscribe();
    }, [user]);

    useEffect(()=>{
      if(currentUser === null){
        handleLogout()
      }
    },[currentUser])

    useEffect(()=>{
      
    },[])


    const authHandler = async () => {
        try {
          const auth = getAuth(app);
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider);
    
          const userData = {
            displayName: result.user.displayName,
            email: result.user.email,
            uid: result.user.uid,
            photoURL: result.user.photoURL
          };
    
          await axios.post(process.env.REACT_APP_LOGIN,
            userData,
            {
              withCredentials: true,
              headers: { 'Content-type': 'application/json' },
            }
          );


        } catch (error) {
          console.error('Authentication Error:', error.message);
          console.log(error);
          // handleLogout()
        }

          navigate('/pages/Evernote')
    };

    const handleLogout = async () => {
        try {
          const auth = getAuth(app);
          await signOut(auth);
          setUser(null);
          localStorage.removeItem('currentUser')
          setCurrentUser(null)
          navigate('/');
        } catch (error) {
          console.error('Logout Error:', error.message);
        }
    };


    return (
        <ProviderPass.Provider value={{currentUser, user, authHandler, handleLogout}}>
          {children}
        </ProviderPass.Provider>
      );
};