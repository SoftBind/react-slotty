import React, { Suspense, lazy } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Flex, Box, Text } from 'rebass';

import { SlotsProvider } from '../../src';

import { SecondNavigationLevel } from './slots';

const Home = lazy(() => import('./Home'));
const ModuleA = lazy(() => import('./ModuleA'));
const ModuleB = lazy(() => import('./ModuleB'));

export default () => (
  <SlotsProvider>
    <Flex>
      <Box bg="yellow">
        <ul>
          <li>
            <Link to="/examples/navigation">Home</Link>
          </li>
          <li>
            <Link to="/examples/navigation/moduleA">ModuleA</Link>
          </li>
          <li>
            <Link to="/examples/navigation/moduleB">ModuleB</Link>
          </li>
          <SecondNavigationLevel.Consumer>
            {navigation => navigation}
          </SecondNavigationLevel.Consumer>
        </ul>
      </Box>
      <Box bg="blue" flex="1">
        <Suspense fallback={() => <Text>Ladowanie...</Text>}>
          <Switch>
            <Route exact path="/examples/navigation" component={Home} />
            <Route path="/examples/navigation/moduleA" component={ModuleA} />
            <Route path="/examples/navigation/moduleB" component={ModuleB} />
          </Switch>
        </Suspense>
      </Box>
    </Flex>
  </SlotsProvider>
);
