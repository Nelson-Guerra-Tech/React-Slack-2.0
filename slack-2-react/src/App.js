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

// CSS
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path='/' exact>
                {/* chat component */}
              </Route>
            </Switch>
          </AppBody>
        </>
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
