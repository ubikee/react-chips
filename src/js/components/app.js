import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Tatami, Drawer, Container, Toolbar, Overlay } from './tatami/tatami';
import './app.css';
import './palette-indigo.css';
import { Paper } from './chips/papers/papers';

// Pages
import Cover from '../pages/cover';
import Buttons from '../pages/buttons';
import Papers from '../pages/papers';

const Layout = (props) => (
  <Tatami>
    <Drawer></Drawer>
    <Container>{props.children}</Container>
    <Toolbar>toolbar</Toolbar>
    <Overlay />
  </Tatami>
);

Layout.propTypes = {
  children: React.PropTypes.node,
};

const App = () => (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={Cover} />
      <Route path="buttons" component={Buttons} />
      <Route path="papers" component={Papers} />
    </Route>
  </Router>
);

export default App;
