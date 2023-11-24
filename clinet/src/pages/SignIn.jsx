import React, { useEffect, useContext } from 'react';
import CreateButton from '../components/createButton/CreateButton';
import { ProviderPass } from '../components/Provider';
import './styles/signin.css';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {

  const navigate = useNavigate()
  
  const {currentUser, authHandler} = useContext(ProviderPass)

  useEffect(()=>{
    if(currentUser){
      navigate('/pages/Evernote')
    }
  },[currentUser])


  return (
    <div className='signin'>
      <CreateButton text='Sign In' funName={authHandler} />
    </div>
  );
}
