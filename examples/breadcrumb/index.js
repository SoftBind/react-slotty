import React from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import { Route, Link, Switch } from 'react-router-dom';

import { SlotsProvider } from '../../src';
import Breadcrumbs from './slots';

import ModuleA from './moduleA';

const Breadcrumb = styled(Flex)`
  border: 1px solid red;
`;

export default () => (
  <SlotsProvider>
    <Flex flexDirection="column">
      <Breadcrumb>
        <Text>Home</Text>
        <Breadcrumbs.Base.Consumer>{base => base}</Breadcrumbs.Base.Consumer>
        <Breadcrumbs.Second.Consumer>
          {second => second}
        </Breadcrumbs.Second.Consumer>
      </Breadcrumb>
      <Route
        path="/examples/breadcrumb/ModuleA"
        children={({ match }) => {
          return match ? (
            <ModuleA />
          ) : (
            <ul>
              <li>
                <Link to="/examples/breadcrumb/ModuleA">Go to ModuleA</Link>
              </li>
            </ul>
          );
        }}
      />
    </Flex>
  </SlotsProvider>
);
