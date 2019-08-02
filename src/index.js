import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import App from 'App';
import history from 'services/history';
import WrapperRoute from 'routes/WrapperRoute';
import SignIn from 'pages/signin/SignIn';
import SignUp from 'pages/signup/SignUp';
import NotFound from 'pages/notfound/NotFound';
import Dashboard from 'pages/dashboard/Dashboard';

const Routes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <WrapperRoute exact path="/" component={SignIn} />
        <WrapperRoute exact path="/register" component={SignUp} />
        <WrapperRoute exact path="/dashboard" component={Dashboard} isPrivate />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
