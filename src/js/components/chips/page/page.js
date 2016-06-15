import React from 'react';
import Header from './header';
import './page.css';

const Page = (props) => (
  <div className="page">
    <Header {...props} />
    <main>{props.children}</main>
  </div>
);

Page.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  to: React.PropTypes.string,
  toggleDrawer: React.PropTypes.func,
  children: React.PropTypes.node,
};

export { Page };
