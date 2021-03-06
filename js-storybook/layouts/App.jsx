import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { Global } from '@emotion/react';
import { GlobalStyles } from '@styles';

const Home = loadable(() => import('@pages/Home'));
const ComponentEx = loadable(() => import('@pages/ComponentEx'));

const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/components" component={ComponentEx} />
      </Switch>
    </>
  );
};

export default App;
