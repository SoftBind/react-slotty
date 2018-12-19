import React, { Fragment } from 'react';
import { Text } from 'rebass';
import { Route } from 'react-router-dom';

import { SecondNavigationLevel } from './slots';

export default () => (
  <Fragment>
    <SecondNavigationLevel.Provider
      value={
        <Route
          path="/examples/navigation/ModuleA"
          render={() => (
            <ul>
              <li>ModuleA Second level</li>
              <li>ModuleA Second level</li>
            </ul>
          )}
        />
      }
    />
    <Text>ModuleA Content</Text>
  </Fragment>
);
