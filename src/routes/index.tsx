import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Welcome from '../pages/Welcome';
import LandPage from '../pages/LandPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/landpage" component={LandPage} isPrivate />
  </Switch>
);

export default Routes;
