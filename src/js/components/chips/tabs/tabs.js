import React from 'react';
import './tabs.css';

const materialIcon = (icon) => (
  <i className="material-icons">{icon}</i>
);

const Tab = (props) => {
  const icon = props.icon ? materialIcon(props.icon) : null;
  const activeClass = props.active ? 'selected' : '';
  const selectTab = () => {
    if (props.onMouseUp) props.onMouseUp(props.id);
  };

  return (
    <label className={`tab secondary-text-color ${activeClass}`} onClick={selectTab}>
      {icon}<span>{props.label}</span>
    </label>
  );
};

Tab.propTypes = {
  id: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  active: React.PropTypes.bool,
  onMouseUp: React.PropTypes.func,
};

const Tabs = (props) => {
  const tabs = React.Children.map(
    props.children, (child) => React.cloneElement(child, { onMouseUp: props.onChanged })
  );
  return (
    <nav className="tabbar">{tabs}</nav>
  );
};

Tabs.propTypes = {
  onChanged: React.PropTypes.func,
  children: React.PropTypes.node,
};

export { Tabs, Tab };
