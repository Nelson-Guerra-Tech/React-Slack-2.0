import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';

// CSS
import './App.css';
import { auth } from './firebase';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src='https://cdn.icon-icons.com/icons2/1532/PNG/512/3285297-andromeda-astronomy-cosmos-galaxy-space-spiral-universe_106791.png'
            alt='slack-logo'
          />
        </AppLoadingContent>
      </AppLoading>
    );
  }

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path='/' exact>
                  {/* chat component */}
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

// styled components
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div``;

const AppLoadingContent = styled.div``;
