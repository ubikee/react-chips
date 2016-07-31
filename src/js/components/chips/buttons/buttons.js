import React from 'react';
import { Link } from 'react-router';
import './buttons.css';

const materialIcon = (icon) => (
  <i className="material-icons">{icon}</i>
);

const Icon = (props) => (
  <div id={props.id} className={`icon flex center centred ${props.className}`}>
    {materialIcon(props.icon)}
  </div>
);

Icon.propTypes = {
  id: React.PropTypes.string,
  icon: React.PropTypes.string,
};

const DecoratedIcon = (props) => (
  <div id={props.id} className="decorated-icon">
    <div className={`icon flex center centred ${props.className}`}>
      {materialIcon(props.icon)}
    </div>
    <div className={`decorator flex center centred ${props.className}`}>
      {materialIcon(props.decorator)}
    </div>
  </div>
);

DecoratedIcon.propTypes = {
  id: React.PropTypes.string,
  icon: React.PropTypes.string,
  decorator: React.PropTypes.string,
  className: React.PropTypes.string,
};

const Button = (props) => {
  const onMouseUp = props.classes === 'disabled' ? null : props.onMouseUp;

  return (
    <button id={props.id} className={`button animated-fast ${props.className} ${props.classes}`} onMouseUp={onMouseUp}>
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
    <button id={props.id} className={`${iconClasses} ${props.className} `} onMouseUp={props.onMouseUp}>
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
    <IconButton id={props.id} icon={props.icon} classes={`fab animated-fast accent-color ${props.className}`} onMouseUp={props.onMouseUp} />
  </Link>
);

FAB.propTypes = {
  icon: React.PropTypes.string,
  to: React.PropTypes.string,
  onMouseUp: React.PropTypes.func,
};

const FAB2 = (props) => (
    <IconButton id={props.id} icon={props.icon} classes={`fab animated-fast accent-color ${props.className}`} onMouseUp={props.onMouseUp} />
);

FAB2.propTypes = {
  icon: React.PropTypes.string,
  onMouseUp: React.PropTypes.func,
};

/**
 * CheckButton
 */
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
  };

  return props.readOnly ?
    (<Icon icon={icon} />) :
    (<IconButton id={props.id} icon={icon} onMouseUp={handleValueChange} />);
};

CheckButton.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.string,
  onValueChanged: React.PropTypes.func,
  readOnly: React.PropTypes.bool,
}

export { Icon, DecoratedIcon, IconButton, Button, CheckButton, FAB, FAB2, materialIcon };
