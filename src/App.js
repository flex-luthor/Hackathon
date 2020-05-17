import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ='/signin' render={() => <SignIn />} />
          <Route exact path='/' render={() => <Home />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
