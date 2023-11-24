import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from "../Firebase"


export default function OAuth() {
  return (
    <div>OAuth</div>
  )
}
