import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from 'react-router-dom';
import Header from './components/Header';

// CSS
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <>
          <Switch>
            <Route path='/' exact>
              <Header />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
