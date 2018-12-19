import React, { Fragment, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Heading, Text } from 'rebass';

const history = createBrowserHistory();

const NavigationExample = lazy(() => import('./navigation'));
const BreadcrumbExample = lazy(() => import('./breadcrumb'));

function App() {
  return (
    <Router history={history}>
      <Fragment>
        <Heading>Examples</Heading>
        <ul>
          <li>
            <Link to="/examples/navigation">Navigation</Link>
          </li>
          <li>
            <Link to="/examples/breadcrumb">Breadcrumb</Link>
          </li>
        </ul>
        <Suspense fallback={() => <Text>loading...</Text>}>
          <Switch>
            <Route path="/examples/navigation" component={NavigationExample} />
            <Route path="/examples/breadcrumb" component={BreadcrumbExample} />
          </Switch>
        </Suspense>
      </Fragment>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
