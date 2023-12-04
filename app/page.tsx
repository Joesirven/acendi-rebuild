"use client";

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const provider = new GoogleAuthProvider();

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignIn = () => {
    signInWithRedirect(auth, provider)
      .then((result: firebase.auth.UserCredential) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      }).catch((error: firebase.auth.Error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      })
  };


  const handleSignOut = () => {
    auth.signOut();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <header>
        <h1>Welcome to Our App</h1>
        {user ? (
          <Button onClick={handleSignOut}>Sign Out</Button>
        ) : (
          <Button onClick={handleSignIn}>Sign In</Button>
        )}
      </header>
      <main>
        {user ? (
          <p>Welcome back, {user.displayName || user.email}!</p>
        ) : (
          <p>Please sign in to continue.</p>
        )}
        <Button href="/Main">
          Main
        </Button>
      </main>
    </div>
  );

};

export default HomePage;
