import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import { PrivateRoute } from './helpers/PrivateRoute'

import './App.css';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Articles from './pages/Articles'
import Article from './pages/Article'

const App = ({ history }) => {
  return (
    <div className="App">
      <Switch>
        <Route history={history} path='/signIn' component={SignIn} />
        <Route history={history} path='/signUp' component={SignUp} />
        <PrivateRoute history={history} path='/articles' component={Articles} />
        <PrivateRoute history={history} path='/article/:articleId' component={Article} />
        <Redirect from='/' to='/signIn'/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
