import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase';

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://cdn.icon-icons.com/icons2/1532/PNG/512/3285297-andromeda-astronomy-cosmos-galaxy-space-spiral-universe_106791.png'
          alt='slack-logo'
        />
        <h1>Sign in to Andromeda</h1>
        <p>nelsonguerra.tech</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 75px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  > img {
    height: 200px;
    object-fit: contain;
    margin-bottom: 40px;
  }

  > Button {
    margin-top: 3rem;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
