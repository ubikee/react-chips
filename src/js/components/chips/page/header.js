import React from 'react';
import { Link } from 'react-router';
import { Icon, IconButton } from '../buttons/buttons';
import { browserHistory } from 'react-router';
import './header.css';

const Header = (props) => {
  const goBack = () => { browserHistory.push('/'); };
  // const goSearch = () => { browserHistory.push('search'); };
  const logout = () => { localStorage.removeItem('DSSession'); };
  const print = () => { browserHistory.push('print'); };

  // const searchButton = <IconButton id="search-button" icon="search" onClick={goSearch} />
  const icon = props.to ? '' : <Icon id="header-icon" icon={props.icon} />;
  const drawerButton = props.to ? '' : <IconButton id="drawer-button" icon="menu" onMouseUp={props.toggleDrawer} />;
  const backButton = props.to ? <Link to={props.to}><IconButton id="back-button" icon="arrow_back" onMouseUp={goBack} /></Link> : '';
  const logoutButton = <IconButton id="logout-button" icon="exit_to_app" onMouseUp={logout} />;
  const printButton = <IconButton id="print-button" icon="print" onMouseUp={print} />;

  return (
    <header className="header">
      {drawerButton}
      {backButton}
      {icon}
      <span className="title">{props.title}</span>
      {printButton}
      {logoutButton}
    </header>
  );
};

Header.propTypes = {
  to: React.PropTypes.string,
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  toggleDrawer: React.PropTypes.func,
};

export default Header;
