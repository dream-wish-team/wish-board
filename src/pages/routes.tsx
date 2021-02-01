import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from '@/pages/AuthPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

import FriendsPage from './FriendsPage';
import ProfilePage from './ProfilePage';
import RegisterPage from './RegistrationPage';
import SingleWish from './SingleWish';

const useRoutes = (isAuthenticated: boolean): JSX.Element =>
  isAuthenticated ? (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" exact>
        <Redirect to="/" />
      </Route>
      <Route path="/registration" exact>
        <Redirect to="/" />
      </Route>
      <Route path="/@:nickname/friends" exact component={FriendsPage} />
      <Route path="/@:nickname/subscribes" exact component={FriendsPage} />
      <Route path="/@:nickname/subscribers" exact component={FriendsPage} />
      <Route path="/wish/@:nickname/:wishId" exact component={SingleWish} />
      <Route path="/@:nickname" exact component={ProfilePage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path="*">
        {/* <Redirect to="/404" /> */}
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" exact component={AuthPage} />
      <Route path="/registration" exact component={RegisterPage} />
      <Route path="/wish/@:nickname/:wishId" exact component={SingleWish} />
      <Route path="/@:nickname" exact component={ProfilePage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );

export default useRoutes;
