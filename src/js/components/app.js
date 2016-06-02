import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Tatami, Drawer, Container, Toolbar, Overlay } from './tatami/tatami';
import Menu from './layout/app-menu';
import './app.css';
import './palette-indigo.css';

// Pages
import Cover from '../pages/cover';
imoprt Buttons from '../pages/buttons';

const Layout = (props) => (
  <Tatami>
    <Drawer><Menu /></Drawer>
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
    </Route>
  </Router>
);

export default App;
