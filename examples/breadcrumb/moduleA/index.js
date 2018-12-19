import React, { Fragment } from 'react';
import { Heading } from 'rebass';
import { Route, Link } from 'react-router-dom';

import SubmoduleA from './submoduleA';

import Breadcrumbs from '../slots';

export default () => (
  <Fragment>
    <Breadcrumbs.Base.Provider value=" -> ModuleA" />
    <Route
      path="/examples/breadcrumb/ModuleA/submoduleA"
      children={({ match }) => {
        return match ? (
          <SubmoduleA />
        ) : (
          <Fragment>
            <Heading>ModuleA</Heading>
            <Link to="/examples/breadcrumb/ModuleA/submoduleA">
              Go to SubmoduleA
            </Link>
          </Fragment>
        );
      }}
    />
  </Fragment>
);
