import React, { Fragment } from 'react';
import { Text } from 'rebass';

import Breadcrumbs from '../../slots';

export default () => (
  <Fragment>
    <Breadcrumbs.Second.Provider value=" -> SubmoduleA" />

    <Text>Test</Text>
  </Fragment>
);
