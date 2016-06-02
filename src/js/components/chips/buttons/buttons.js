import React from 'react';
import { Link } from 'react-router';
import './buttons.css';

const materialIcon = (icon) => (
  <i className="material-icons">{icon}</i>
);

const Icon = (props) => (
  <div id={props.id} className="icon flex center centred">
    {materialIcon(props.icon)}
  </div>
);

Icon.propTypes = {
  id: React.PropTypes.string,
  icon: React.PropTypes.string,
};

const Button = (props) => {
  const onMouseUp = props.classes === 'disabled' ? null : props.onMouseUp;

  return (
    <button id={props.id} className={`button animated ${props.classes}`} onMouseUp={onMouseUp}>
      {props.icon ? materialIcon(props.icon) : null}
      {props.label}
    </button>
  );
};

Button.propTypes = {
  id: React.PropTypes.string,
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  onMouseUp: React.PropTypes.func,
  classes: React.PropTypes.string,
};

const IconButton = (props) => {
  const iconClasses = props.classes ? props.classes : 'icon-button animated';
  return (
    <button id={props.id} className={iconClasses} onMouseUp={props.onMouseUp}>
      {props.icon ? materialIcon(props.icon) : null}
    </button>
  );};

IconButton.propTypes = {
  id: React.PropTypes.string,
  icon: React.PropTypes.string,
  onMouseUp: React.PropTypes.func,
  classes: React.PropTypes.string,
};

const FAB = (props) => (
  <Link to={props.to}>
    <IconButton icon={props.icon} classes="fab animated-fast accent-color" onMouseUp={props.onMouseUp} />
  </Link>
);

FAB.propTypes = {
  icon: React.PropTypes.string,
  to: React.PropTypes.string,
  onMouseUp: React.PropTypes.func,
};

const CheckButton = (props) => {

  const icons = {
    none: 'check_box_outline_blank',
    true: 'check',
    false: 'close',
  };

  const icon = icons[props.value];

  const handleValueChange = () => {
    const v = Object.keys(icons).indexOf(props.value);
    const nextValue = Object.keys(icons)[(v + 1) % 3];
    props.onValueChanged(props.id, nextValue);
  }

  return (
    <IconButton icon={icon} onMouseUp={handleValueChange} />
  );
};

CheckButton.propTypes = {
  id: React.PropTypes.string,
}

export { Icon, IconButton, Button, CheckButton, FAB, materialIcon };
