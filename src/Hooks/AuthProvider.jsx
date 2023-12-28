/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  sendPasswordResetEmail ,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLoginInProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const githubSignUp = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const facebookSignUp = (provider) => {
    return signInWithRedirect(auth, provider);
  };

const ResetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

  const logOut = () => {
    return signOut(auth);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert('cheek your email please verify now');
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('current User showed');
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    signUp,
    logIn,
    user,
    loading,
    logOut,
    verifyEmail,
    googleLoginInProvider,
    githubSignUp,
    facebookSignUp,
    ResetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
