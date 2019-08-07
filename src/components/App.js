import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Claims from './claims/Claims';
import Policies from './policies/Policies';
import AboutUs from './aboutUs/AboutUs';
import Navigation from './common/Navigation';
import CreatePolicy from './policies/CreatePolicy';
import AddClaim from './claims/AddClaim';
import Login from './auth/Login';
import Logout from './auth/Logout';

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/claims" component={Claims} />
          <Route path="/claims/new" component={AddClaim} />
          <Route exact path="/policies" component={Policies} />
          <Route path="/policies/new" component={CreatePolicy} />
          <Route path="/about" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
