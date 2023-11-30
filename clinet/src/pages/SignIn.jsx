import React, {useContext } from 'react';
import CreateButton from '../components/createButton/CreateButton';
import { ProviderPass } from '../components/Provider';
import './styles/signin.css';


export default function SignIn() {
  const { authHandler} = useContext(ProviderPass)

  return (
    <div className='signin'>
      <CreateButton text='Sign In' funName={authHandler} />
    </div>
  );
}
