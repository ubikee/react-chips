import React from 'react';
import { Link } from 'react-router';
import { Icon, IconButton } from '../buttons/buttons';
import { browserHistory } from 'react-router';
import './header.css';

const Header = (props) => {
  const goBack = () => { browserHistory.push('/'); };
  // const goSearch = () => { browserHistory.push('search'); };
  const logout = () => { localStorage.removeItem('DSSession'); window.location.reload(); };
  const print = () => { browserHistory.push('print'); };

  // const searchButton = <IconButton id="search-button" icon="search" onClick={goSearch} />
  const icon = (props.to || props.back) ? '' : <Icon id="header-icon" icon={props.icon} />;
  const drawerButton = (props.to || props.back) ? '' : <IconButton id="drawer-button" icon="menu" onMouseUp={props.toggleDrawer} />;
  const backButton = props.to ? <Link to={props.to}><IconButton id="back-button" icon="arrow_back" onMouseUp={goBack} /></Link> : '';
  const backAction = props.back ? <IconButton id="back-button" icon="arrow_back" onMouseUp={props.back} />: '';
  const logoutButton = <Link to="/"><IconButton id="logout-button" icon="exit_to_app" onMouseUp={logout} /></Link>;
  const printButton = <Link to="/print"><IconButton id="print-button" icon="print"/></Link>;

  return (
    <header className="header">
      {drawerButton}
      {backButton}
      {backAction}
      {icon}
      <span className="title">{props.title}</span>
      {printButton}
      {logoutButton}
    </header>
  );
};

Header.propTypes = {
  to: React.PropTypes.string,
  back: React.PropTypes.func,
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  toggleDrawer: React.PropTypes.func,
};

export default Header;
