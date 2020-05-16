import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import SignIn from './Pages/SignIn';
import Home from './Pages/Home'


import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path ='/signin' render={() => <SignIn />} /> */}
          <Route path='/' render={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
